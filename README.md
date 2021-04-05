This is a temporary repository for the CC Search project while migrating from Automattic to Creative Commons. See all the repositories in the project below:

|Original Repo|Automattic Repo|
|--|--|
[creativecommons/cccatalog-frontend](https://github.com/creativecommons/cccatalog-frontend) | [Automattic/ccsearch-frontend](https://github.com/Automattic/ccsearch-frontend)
[creativecommons/cccatalog](https://github.com/creativecommons/cccatalog) | [Automattic/ccsearch-catalog](https://github.com/Automattic/ccsearch-catalog)
[creativecommons/cccatalog-api](https://github.com/creativecommons/cccatalog-api) | [Automattic/ccsearch-api](https://github.com/Automattic/ccsearch-api)


Repos have been renamed into a `ccsearch-` namespace, for now. All branch names and code has been preserved, with the *following exceptions*:

- GitHub Actions are commented out
- `CODEOWNERS` files and `.cc-metadata.yml` files are deleted

The rest of this README is the unmodified original readme, which may reference documentation on creativecommons.org, opensource.creativecommons.org, or Creative Commons' internal employee wiki. These references will be updated in time.

---

# cccatalog-frontend

![cccatalog-frontend-ci](https://github.com/creativecommons/cccatalog-frontend/workflows/cccatalog-frontend-ci/badge.svg)

CC Search is the official web application for the [Creative Commons Catalog API
](https://github.com/creativecommons/cccatalog-api). CC Search is an interface to search for content that is licensed under Creative Commons licenses or marked with public domain tools. This repositiory contains all the front-end code.

The application is avaliable at [search.creativecommons.org](https://search.creativecommons.org/).

## Technology

The frontend app is built using [Vue.JS](https://vuejs.org/) and [NuxtJS](https://nuxtjs.org). You can [learn more about the migration to Nuxt.js here](/CODEBASE.md).

The user interface is powered by [Vocabulary](https://github.com/creativecommons/vocabulary), Creative Common's design system. If you have an issue with colors or a specific ui component, it should probably go in that repository.

## Local Development

Run the following commands in order to have the code up and running on your machine:

```bash
# installs dependencies
npm install

# Builds and serves assets with hot-reload
npm run dev
```

### Docker setup

Alternatively, you can use Docker to build and run the application. You just have to run:

```bash
docker-compose up
```

You should now have the application running and accessible at http://localhost:8443.

You don't need to have the CC Search API running locally to be able to run the frontend application. It's configured to communicate, by default, with the [API](https://api.creativecommons.engineering) that's already publicly available. If you wish, you can change the URL of the API that's used during development by setting the `API_URL` environment variable.

### Running tests

You can run the unit tests by executing:

```bash
npm run test
```

### localhost tunneling

If you want to make your local development server accessible to the internet (for testing or showing someone something you're working on), you can use [`ngrok`](https://ngrok.com/). Follow the documentation on the `ngrok` site to install it and set it up. Once you have it installed, get the development server for CC Search running and in a separate window/tab, run:

```
# The extra parameters are required to ensure that ngrok redirects to the HTTPS version of the site
# and that the host header matches one that is accepted by the server
# (ngrok's default hostname is randomly generated and is not whitelisted).
ngrok http http://localhost:8443 -host-header="localhost:8443"
```

If you need to run a HTTP version (for example, if you're testing against third-party websites that do not accept the self-signed cerificate generated by the dev server), run the dev server using `npm run dev` and use the following command to start `ngrok`:

```
ngrok http 8443 -host-header="localhost:8443"
```

## Formatting and Linting

The code in this repository is formatted using `prettier`. If you have prettier setup in your code editor it should work out of the box; otherwise you can use the `npm run lintfix` script to format and fix lint errors in your code. Checks are run to lint your code and validate the formatting on git precomit using [husky](https://github.com/typicode/husky).

You will need to fix any linting issues before comitting. We reccommend formatting your JavaScript files on save in your text editor. You can learn how to do this in Visual Studio Code [here](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode#format-on-save).

## Versioning

CC Search uses [CalVer](https://calver.org/) for version numbering, in the `YYYY.M.Micro` format. This format is intentionally compatiable with NPM's `semver` parser. `Micro` is bumped whenever there are multiple releases in a month, for example `2020.07.1` is the first release in July 2020, while `2020.07.2` is the second.

## Deployment

Details about how to deploy the frontend code can be found on the [CC Wiki](https://wikijs.creativecommons.org/tech/cc-search/frontend) (Accessible to CC Staff only).
