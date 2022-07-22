import { expect, Page } from '@playwright/test'

import {
  ALL_MEDIA,
  AUDIO,
  IMAGE,
  MediaType,
  MODEL_3D,
  SupportedSearchType,
  VIDEO,
} from '~/constants/media'
import { SCREEN_SIZES } from '~/constants/screens'

import enMessages from '~/locales/en.json'
import rtlMessages from '~/locales/ar.json'

export const languageDirections = ['ltr', 'rtl'] as const

export const renderingContexts = [
  ['SSR', 'ltr'],
  ['SSR', 'rtl'],
  ['CSR', 'ltr'],
  ['CSR', 'rtl'],
] as const

export type RenderMode = 'SSR' | 'CSR'
export type LanguageDirection = 'ltr' | 'rtl'

const smWidth = SCREEN_SIZES.get('sm') as number

const buttonSelectors = {
  filter: '[aria-controls="filters"]',
  contentSwitcher: '[aria-controls="content-switcher-modal"]',
}

const getMessages = (dir: LanguageDirection) =>
  dir === 'rtl' ? rtlMessages : enMessages

const searchLabel = (dir: LanguageDirection) => getMessages(dir).search.search

export function sleep(ms: number) {
  return new Promise<void>((resolve) => setTimeout(resolve, ms))
}

export const searchTypePath = (searchType: SupportedSearchType) =>
  searchType === 'all' ? '' : `${searchType}`

export const searchTypeNames = (dir: LanguageDirection = 'ltr') => {
  const messages = getMessages(dir)
  return {
    [ALL_MEDIA]: messages['search-type'][ALL_MEDIA],
    [AUDIO]: messages['search-type'][AUDIO],
    [IMAGE]: messages['search-type'][IMAGE],
    [VIDEO]: messages['search-type'][VIDEO],
    [MODEL_3D]: messages['search-type'][MODEL_3D],
  }
}

const isButtonPressed = async (page: Page, buttonSelector: string) => {
  const viewportSize = page.viewportSize()
  if (!viewportSize) {
    return false
  }
  const pageWidth = viewportSize.width
  if (pageWidth > 640) {
    return await page.getAttribute(buttonSelector, 'aria-pressed')
  } else {
    return (await page.locator('button', { hasText: 'Close' }).isVisible())
      ? 'true'
      : 'false'
  }
}

const openMenu = async (page: Page, button: 'filter' | 'contentSwitcher') => {
  const selector = buttonSelectors[button]
  const expectedValue = 'true'
  if ((await isButtonPressed(page, selector)) !== expectedValue) {
    await page.click(selector)
    expect(await isButtonPressed(page, selector)).toEqual(expectedValue)
  }
}

export const openFilters = async (page: Page) => {
  await openMenu(page, 'filter')
}

export const openMobileMenu = async (page: Page) => {
  await openMenu(page, 'contentSwitcher')
}

export const closeMobileMenu = async (page: Page) => {
  await page.click('text=Close')
}

export const assertCheckboxStatus = async (
  page: Page,
  label: string,
  forValue = '',
  status: 'checked' | 'unchecked' | 'disabled' = 'checked'
) => {
  const selector =
    forValue === ''
      ? `label:has-text('${label}')`
      : `label[for="${forValue}"]:has-text('${label}')`
  const checkbox = page.locator(selector)
  switch (status) {
    case 'checked': {
      await expect(checkbox).not.toBeDisabled()
      await expect(checkbox).toBeChecked()
      break
    }
    case 'unchecked': {
      await expect(checkbox).not.toBeDisabled()
      await expect(checkbox).not.toBeChecked()
      break
    }
    case 'disabled': {
      await expect(checkbox).toBeDisabled()
    }
  }
}

export const changeContentType = async (
  page: Page,
  to: 'Audio' | 'Images' | 'All content'
) => {
  await page.click(
    `button[aria-controls="content-switcher-popover"], button[aria-controls="content-switcher-modal"]`
  )
  // Ensure that the asynchronous navigation is finished before next steps
  await Promise.all([
    page.waitForNavigation(),
    page.locator(`#content-switcher-popover a:has-text("${to}")`).click(),
  ])
}

/**
 * Finds a button with a popup to the left of the filters button which doesn't have a 'menu' label
 * @param page - The current page
 */
export const currentContentType = async (page: Page) => {
  const contentSwitcherButton = await page.locator(
    `button[aria-controls="content-switcher-popover"], button[aria-controls="content-switcher-modal"]`
  )
  return contentSwitcherButton.textContent()
}

/**
 * Dismisses the translation banner if it is visible. It does not wait for the banner to become visible,
 * so the page should finish rendering before calling `dismissTranslationBanner`.
 */
export const dismissTranslationBanner = async (page: Page) => {
  const bannerCloseButton = page.locator(
    '[data-testid="banner-translation"] button'
  )
  if (await bannerCloseButton.isVisible()) {
    await bannerCloseButton.click()
  }
}

export const selectHomepageSearchType = async (
  page: Page,
  searchType: SupportedSearchType,
  dir: LanguageDirection = 'ltr'
) => {
  const pageWidth = page.viewportSize()?.width
  if (pageWidth && pageWidth > smWidth) {
    await page.click('[aria-label="All content"]')
    await page.click(
      `button[role="radio"]:has-text("${searchTypeNames(dir)[searchType]}")`
    )
  } else {
    await page.click(`button:has-text("${searchTypeNames(dir)[searchType]}")`)
  }
}

export const goToSearchTerm = async (
  page: Page,
  term: string,
  options: {
    searchType?: SupportedSearchType
    mode?: RenderMode
    dir?: LanguageDirection
    query?: string // Only for SSR mode
  } = {}
) => {
  const searchType = options.searchType || ALL_MEDIA
  const dir = options.dir || 'ltr'
  const mode = options.mode ?? 'SSR'
  const query = options.query ? `&${options.query}` : ''

  if (mode === 'SSR') {
    const path = `search/${searchTypePath(searchType)}?q=${term}${query}`
    await page.goto(pathWithDir(path, dir))
    await dismissTranslationBanner(page)
  } else {
    await page.goto(pathWithDir('/', dir))
    await dismissTranslationBanner(page)
    // Select the search type
    if (searchType !== 'all') {
      await selectHomepageSearchType(page, searchType, dir)
    }
    // Type search term
    const searchInput = page.locator('main input[type="search"]')
    await searchInput.type(term)
    // Click search button
    // Wait for navigation
    await Promise.all([
      page.waitForNavigation(),
      page.click(`[aria-label="${searchLabel(dir)}"]`),
    ])
    await page.waitForLoadState('networkidle')
  }
  await scrollDownAndUp(page)
  const pageWidth = page.viewportSize()?.width
  if (pageWidth && pageWidth > smWidth) {
    await page.waitForSelector('[data-testid="page-menu-button"]')
  }
}

/**
 * Fills the search input in the page header, clicks on submit
 * and waits for navigation.
 */
export const searchFromHeader = async (page: Page, term: string) => {
  await page.fill('id=search-bar', term)
  await Promise.all([
    page.waitForNavigation(),
    page.locator('button[type="submit"]').click(),
  ])
}

/**
 * Click on the first <mediaType> result: a link that contains
 * /<mediaType>/ in its URL. We cannot use the 'startsWith' `^` matcher
 * because localized routes start with the locale prefix (e.g. /ar/image/).
 * Scroll down and up to load all lazy-loaded content.
 */
export const openFirstResult = async (page: Page, mediaType: MediaType) => {
  await page.locator(`a[href*="/${mediaType}/"]`).first().click()
  await scrollDownAndUp(page)
}

/**
 * Click on the first <mediaType> related result: a link that contains
 * /<mediaType>/ in its URL in the 'aside' element for related media.
 * We cannot use the 'startsWith' `^` matcher because localized routes
 * start with the locale prefix (e.g. /ar/image/).
 * Scroll down and up to load all lazy-loaded content.
 */
export const openFirstRelatedResult = async (
  page: Page,
  mediaType: MediaType
) => {
  await page.locator(`aside a[href*="/${mediaType}/"]`).first().click()
  await scrollDownAndUp(page)
}

export const scrollToBottom = async (page: Page) => {
  await page.evaluate(() => {
    window.scrollTo(0, document.body.scrollHeight)
  })
}

export const scrollToTop = async (page: Page) => {
  await page.evaluate(() => {
    window.scrollTo(0, 0)
  })
  await sleep(200)
}

/**
 * Used to load all lazy-loaded images in the page.
 */
export const scrollDownAndUp = async (page: Page) => {
  await scrollToBottom(page)
  await page.waitForLoadState('networkidle')
  await scrollToTop(page)
}

/**
 * Adds '/ar' prefix to a rtl route. The path should start with '/'
 */
export const pathWithDir = (rawPath: string, dir: string) => {
  const path = rawPath.startsWith('/') ? rawPath : `/${rawPath}`
  return dir === 'rtl' ? `/ar${path}` : path
}
