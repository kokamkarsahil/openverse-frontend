(window.webpackJsonp=window.webpackJsonp||[]).push([[202,16,19,21,205],{"./node_modules/.pnpm/css-loader@5.2.7_webpack@4.46.0/node_modules/css-loader/dist/cjs.js?!./node_modules/.pnpm/vue-loader@15.9.8_7oyydxtafvjqcmg5zydubwayrq/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/.pnpm/postcss-loader@4.3.0_jgovvjlmnszlgzfyletnwk36ji/node_modules/postcss-loader/dist/cjs.js?!./node_modules/.pnpm/@nuxt+components@2.2.1/node_modules/@nuxt/components/dist/loader.js?!./node_modules/.pnpm/vue-loader@15.9.8_pv3e62hihcgilzzlt4q6ljqzyu/node_modules/vue-loader/lib/index.js?!./node_modules/.pnpm/unplugin@0.3.3_webpack@4.46.0/node_modules/unplugin/dist/webpack/loaders/transform.js?!./src/components/VImageGrid/VImageGrid.vue?vue&type=style&index=0&id=100e3d8d&scoped=true&lang=css&":function(module,exports,__webpack_require__){var ___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/.pnpm/css-loader@5.2.7_webpack@4.46.0/node_modules/css-loader/dist/runtime/api.js")((function(i){return i[1]}));___CSS_LOADER_EXPORT___.push([module.i,'@media (min-width: 768px){.image-grid[data-v-100e3d8d]:after{content:"";-webkit-box-flex:999999999;-ms-flex-positive:999999999;flex-grow:999999999}}',""]),___CSS_LOADER_EXPORT___.locals={},module.exports=___CSS_LOADER_EXPORT___},"./node_modules/.pnpm/vue-docgen-loader@1.5.0_j5ed4dj4suhyi3wzdvabtf7vta/node_modules/vue-docgen-loader/lib/index.js?!./node_modules/.pnpm/vue-style-loader@4.1.3/node_modules/vue-style-loader/index.js?!./node_modules/.pnpm/css-loader@5.2.7_webpack@4.46.0/node_modules/css-loader/dist/cjs.js?!./node_modules/.pnpm/vue-loader@15.9.8_7oyydxtafvjqcmg5zydubwayrq/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/.pnpm/postcss-loader@4.3.0_jgovvjlmnszlgzfyletnwk36ji/node_modules/postcss-loader/dist/cjs.js?!./node_modules/.pnpm/@nuxt+components@2.2.1/node_modules/@nuxt/components/dist/loader.js?!./node_modules/.pnpm/vue-loader@15.9.8_pv3e62hihcgilzzlt4q6ljqzyu/node_modules/vue-loader/lib/index.js?!./node_modules/.pnpm/unplugin@0.3.3_webpack@4.46.0/node_modules/unplugin/dist/webpack/loaders/transform.js?!./src/components/VImageGrid/VImageGrid.vue?vue&type=style&index=0&id=100e3d8d&scoped=true&lang=css&":function(module,exports,__webpack_require__){var content=__webpack_require__("./node_modules/.pnpm/css-loader@5.2.7_webpack@4.46.0/node_modules/css-loader/dist/cjs.js?!./node_modules/.pnpm/vue-loader@15.9.8_7oyydxtafvjqcmg5zydubwayrq/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/.pnpm/postcss-loader@4.3.0_jgovvjlmnszlgzfyletnwk36ji/node_modules/postcss-loader/dist/cjs.js?!./node_modules/.pnpm/@nuxt+components@2.2.1/node_modules/@nuxt/components/dist/loader.js?!./node_modules/.pnpm/vue-loader@15.9.8_pv3e62hihcgilzzlt4q6ljqzyu/node_modules/vue-loader/lib/index.js?!./node_modules/.pnpm/unplugin@0.3.3_webpack@4.46.0/node_modules/unplugin/dist/webpack/loaders/transform.js?!./src/components/VImageGrid/VImageGrid.vue?vue&type=style&index=0&id=100e3d8d&scoped=true&lang=css&");content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[module.i,content,""]]),content.locals&&(module.exports=content.locals);(0,__webpack_require__("./node_modules/.pnpm/vue-style-loader@4.1.3/node_modules/vue-style-loader/lib/addStylesClient.js").default)("6bfe6924",content,!0,{sourceMap:!1})},"./src/assets/image_not_available_placeholder.png":function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/image_not_available_placeholder.png"},"./src/components/VImageGrid/VImageCell.vue":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("./node_modules/.pnpm/core-js@3.22.5/node_modules/core-js/modules/es.array.concat.js");var runtime=__webpack_require__("./node_modules/.pnpm/@nuxtjs+composition-api@0.32.0_efpv4fxq5hpknftnxyzfo2vyxy/node_modules/@nuxtjs/composition-api/dist/runtime/index.mjs"),VLicense=__webpack_require__("./src/components/VLicense/VLicense.vue"),VLink=__webpack_require__("./src/components/VLink.vue"),image_not_available_placeholder=__webpack_require__("./src/assets/image_not_available_placeholder.png"),image_not_available_placeholder_default=__webpack_require__.n(image_not_available_placeholder),maxAspect=16/9,toAbsolutePath=function toAbsolutePath(url){var prefix=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"https://";return url.indexOf("http://")>=0||url.indexOf("https://")>=0?url:"".concat(prefix).concat(url)},VImageGrid_VImageCellvue_type_script_lang_ts_=Object(runtime.b)({name:"VImageCell",components:{VLicense:VLicense.default,VLink:VLink.default},props:{image:{type:Object,required:!0}},setup:function setup(props){var imgHeight=Object(runtime.l)(props.image.height||100),imgWidth=Object(runtime.l)(props.image.width||100),imageAspect=Object(runtime.a)((function(){return imgWidth.value/imgHeight.value})),containerAspect=Object(runtime.a)((function(){return imageAspect.value>maxAspect?maxAspect:imageAspect.value<.75?.75:imageAspect.value})),iPadding=Object(runtime.a)((function(){return imageAspect.value<.75?1/.75*100:imageAspect.value>maxAspect?56.25:1/imageAspect.value*100})),imageWidth=Object(runtime.a)((function(){return imageAspect.value<maxAspect?100:imageAspect.value/maxAspect*100})),imageTop=Object(runtime.a)((function(){return imageAspect.value>.75?0:(.75-imageAspect.value)/(.75*imageAspect.value*.75)*-50})),imageLeft=Object(runtime.a)((function(){return imageAspect.value<maxAspect?0:(imageAspect.value-maxAspect)/maxAspect*-50})),imageUrl=Object(runtime.a)((function(){if(imageAspect.value>2.3333333333333335)return toAbsolutePath(props.image.url);var url=props.image.thumbnail||props.image.url;return toAbsolutePath(url)})),containerStyle=Object(runtime.a)((function(){var containerWidth=253.125*containerAspect.value;return"width: ".concat(containerWidth,"px;flex-grow: ").concat(containerWidth)})),figureStyle=Object(runtime.a)((function(){return"width: ".concat(imageWidth.value,"%; top: ").concat(imageTop.value,"%; left:").concat(imageLeft.value,"%;")}));return{imgHeight:imgHeight,imgWidth:imgWidth,containerStyle:containerStyle,figureStyle:figureStyle,iPadding:iPadding,imageUrl:imageUrl,getImageForeignUrl:function getImageForeignUrl(){return toAbsolutePath(props.image.foreign_landing_url)},onImageLoadError:function onImageLoadError(event){var element=event.target;element.src!==props.image.url?element.src=props.image.url:element.src=image_not_available_placeholder_default.a},getImgDimension:function getImgDimension(event){var element=event.target;imgHeight.value=element.naturalHeight,imgWidth.value=element.naturalWidth}}}}),componentNormalizer=__webpack_require__("./node_modules/.pnpm/vue-loader@15.9.8_pv3e62hihcgilzzlt4q6ljqzyu/node_modules/vue-loader/lib/runtime/componentNormalizer.js"),component=Object(componentNormalizer.a)(VImageGrid_VImageCellvue_type_script_lang_ts_,(function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c("VLink",{staticClass:"w-full block group relative overflow-hidden rounded-sm focus:ring-[3px] focus:ring-pink focus:ring-offset-[3px] focus:outline-none bg-dark-charcoal-10 text-dark-charcoal-10",style:_vm.containerStyle,attrs:{href:"/image/"+_vm.image.id,"aria-label":_vm.image.title},nativeOn:{keydown:function($event){return!$event.type.indexOf("key")&&_vm._k($event.keyCode,"tab",9,$event.key,"Tab")?null:$event.shiftKey?$event.ctrlKey||$event.altKey||$event.metaKey?null:_vm.$emit("shift-tab",$event):null}}},[_c("figure",{staticClass:"absolute w-full",style:_vm.figureStyle},[_c("img",{ref:"img",staticClass:"margin-auto block w-full",attrs:{loading:"lazy",alt:_vm.image.title,src:_vm.imageUrl,width:_vm.imgWidth,height:_vm.imgHeight},on:{load:_vm.getImgDimension,error:function($event){return _vm.onImageLoadError($event)}}}),_vm._v(" "),_c("figcaption",{staticClass:"absolute left-0 bottom-0 invisible group-hover:visible group-focus:visible bg-white p-1 text-dark-charcoal"},[_c("span",{staticClass:"sr-only"},[_vm._v(_vm._s(_vm.image.title))]),_vm._v(" "),_c("VLicense",{attrs:{license:_vm.image.license,"hide-name":!0}})],1)]),_vm._v(" "),_c("i",{staticClass:"block",style:"padding-bottom:"+_vm.iPadding+"%",attrs:{"aria-hidden":""}})])}),[],!1,null,null,null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{VLicense:__webpack_require__("./src/components/VLicense/VLicense.vue").default,VLink:__webpack_require__("./src/components/VLink.vue").default}),__vuedocgen_export_0.__docgenInfo={displayName:"VImageCell",exportName:"default",description:"",tags:{},props:[{name:"image",type:{name:"ImageDetail"},required:!0}],events:[{name:"shift-tab"}]}},"./src/components/VImageGrid/VImageGrid.vue":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var runtime=__webpack_require__("./node_modules/.pnpm/@nuxtjs+composition-api@0.32.0_efpv4fxq5hpknftnxyzfo2vyxy/node_modules/@nuxtjs/composition-api/dist/runtime/index.mjs"),emits=__webpack_require__("./src/types/emits.ts"),VLoadMore=__webpack_require__("./src/components/VLoadMore.vue"),VImageCell=__webpack_require__("./src/components/VImageGrid/VImageCell.vue"),VImageGrid_VImageGridvue_type_script_lang_ts_=Object(runtime.b)({name:"ImageGrid",components:{VLoadMore:VLoadMore.default,VImageCell:VImageCell.default},props:{images:{type:Array,default:function _default(){return[]}},showLoadMore:{type:Boolean,default:!0},fetchState:{type:Object,required:!0}},emits:{"load-more":Object(emits.a)(),"shift-tab":Object(emits.a)()},setup:function setup(props,_ref){var emit=_ref.emit;return{isError:Object(runtime.a)((function(){return Boolean(props.fetchState.fetchingError)})),onLoadMore:function onLoadMore(){emit("load-more")},handleShiftTab:function handleShiftTab(event,index){0===index&&(event.preventDefault(),emit("shift-tab"))}}}}),componentNormalizer=(__webpack_require__("./src/components/VImageGrid/VImageGrid.vue?vue&type=style&index=0&id=100e3d8d&scoped=true&lang=css&"),__webpack_require__("./node_modules/.pnpm/vue-loader@15.9.8_pv3e62hihcgilzzlt4q6ljqzyu/node_modules/vue-loader/lib/runtime/componentNormalizer.js")),component=Object(componentNormalizer.a)(VImageGrid_VImageGridvue_type_script_lang_ts_,(function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c("section",[_c("div",{staticClass:"image-grid flex flex-wrap gap-4"},_vm._l(_vm.images,(function(image,index){return _c("VImageCell",{key:image.id,attrs:{image:image},on:{"shift-tab":function($event){return _vm.handleShiftTab($event,index)}}})})),1),_vm._v(" "),_vm.isError&&!_vm.fetchState.isFinished?_c("h5",{staticClass:"py-4"},[_vm._v("\n    "+_vm._s(_vm.fetchState.fetchingError)+"\n  ")]):_vm._e(),_vm._v(" "),_vm.showLoadMore?_c("footer",{staticClass:"pt-4"},[_c("VLoadMore")],1):_vm._e()])}),[],!1,null,"100e3d8d",null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{VImageCell:__webpack_require__("./src/components/VImageGrid/VImageCell.vue").default,VLoadMore:__webpack_require__("./src/components/VLoadMore.vue").default}),__vuedocgen_export_0.__docgenInfo={displayName:"ImageGrid",exportName:"default",description:"",tags:{},props:[{name:"images",type:{name:"ImageDetail[]"},defaultValue:{func:!0,value:"() => []"}},{name:"showLoadMore",description:"Whether to show the 'Load More' button.\nIs false for related images",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"fetchState",type:{name:"FetchState"},required:!0}],events:[{name:"load-more"},{name:"shift-tab"}]}},"./src/components/VImageGrid/VImageGrid.vue?vue&type=style&index=0&id=100e3d8d&scoped=true&lang=css&":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__("./node_modules/.pnpm/vue-docgen-loader@1.5.0_j5ed4dj4suhyi3wzdvabtf7vta/node_modules/vue-docgen-loader/lib/index.js?!./node_modules/.pnpm/vue-style-loader@4.1.3/node_modules/vue-style-loader/index.js?!./node_modules/.pnpm/css-loader@5.2.7_webpack@4.46.0/node_modules/css-loader/dist/cjs.js?!./node_modules/.pnpm/vue-loader@15.9.8_7oyydxtafvjqcmg5zydubwayrq/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/.pnpm/postcss-loader@4.3.0_jgovvjlmnszlgzfyletnwk36ji/node_modules/postcss-loader/dist/cjs.js?!./node_modules/.pnpm/@nuxt+components@2.2.1/node_modules/@nuxt/components/dist/loader.js?!./node_modules/.pnpm/vue-loader@15.9.8_pv3e62hihcgilzzlt4q6ljqzyu/node_modules/vue-loader/lib/index.js?!./node_modules/.pnpm/unplugin@0.3.3_webpack@4.46.0/node_modules/unplugin/dist/webpack/loaders/transform.js?!./src/components/VImageGrid/VImageGrid.vue?vue&type=style&index=0&id=100e3d8d&scoped=true&lang=css&")},"./src/components/VLoadMore.vue":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var asyncToGenerator=__webpack_require__("./node_modules/.pnpm/@babel+runtime@7.17.2/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),dist_runtime=(__webpack_require__("./node_modules/.pnpm/regenerator-runtime@0.13.9/node_modules/regenerator-runtime/runtime.js"),__webpack_require__("./node_modules/.pnpm/@nuxtjs+composition-api@0.32.0_efpv4fxq5hpknftnxyzfo2vyxy/node_modules/@nuxtjs/composition-api/dist/runtime/index.mjs")),media=__webpack_require__("./src/stores/media/index.ts"),search=__webpack_require__("./src/stores/search.ts"),use_i18n=__webpack_require__("./src/composables/use-i18n.ts"),VButton=__webpack_require__("./src/components/VButton.vue"),VLoadMorevue_type_script_lang_ts_=Object(dist_runtime.b)({name:"VLoadMore",components:{VButton:VButton.default},setup:function setup(){var i18n=Object(use_i18n.a)(),mediaStore=Object(media.a)(),searchStore=Object(search.b)(),canLoadMore=Object(dist_runtime.a)((function(){return""!==searchStore.searchTerm&&mediaStore.fetchState.canFetch&&mediaStore.resultCount>0})),onLoadMore=function(){var _ref=Object(asyncToGenerator.a)(regeneratorRuntime.mark((function _callee(){return regeneratorRuntime.wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:if(canLoadMore.value){_context.next=2;break}return _context.abrupt("return");case 2:return _context.next=4,mediaStore.fetchMedia({shouldPersistMedia:!0});case 4:case"end":return _context.stop()}}),_callee)})));return function onLoadMore(){return _ref.apply(this,arguments)}}(),isFetching=Object(dist_runtime.a)((function(){return mediaStore.fetchState.isFetching})),endOfResults=Object(dist_runtime.a)((function(){return!(canLoadMore.value||isFetching.value)}));return{buttonLabel:Object(dist_runtime.a)((function(){return i18n.t("browse-page.".concat(isFetching.value?"loading":"load"))})),isFetching:isFetching,onLoadMore:onLoadMore,canLoadMore:canLoadMore,endOfResults:endOfResults}}}),components_VLoadMorevue_type_script_lang_ts_=VLoadMorevue_type_script_lang_ts_,componentNormalizer=__webpack_require__("./node_modules/.pnpm/vue-loader@15.9.8_pv3e62hihcgilzzlt4q6ljqzyu/node_modules/vue-loader/lib/runtime/componentNormalizer.js"),component=Object(componentNormalizer.a)(components_VLoadMorevue_type_script_lang_ts_,(function(){var _h=this.$createElement;return(this._self._c||_h)("VButton",{directives:[{name:"show",rawName:"v-show",value:!this.endOfResults,expression:"!endOfResults"}],attrs:{size:"large",variant:"full",disabled:!this.canLoadMore||this.isFetching,"data-testid":"load-more"},on:{click:this.onLoadMore}},[this._v("\n  "+this._s(this.buttonLabel)+"\n")])}),[],!1,null,null,null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{VButton:__webpack_require__("./src/components/VButton.vue").default}),__vuedocgen_export_0.__docgenInfo={displayName:"VLoadMore",exportName:"default",description:"",tags:{}}},"./src/composables/use-load-more.ts":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return useLoadMore}));var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/@babel+runtime@7.17.2/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),_nuxtjs_composition_api__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__("./node_modules/.pnpm/regenerator-runtime@0.13.9/node_modules/regenerator-runtime/runtime.js"),__webpack_require__("./node_modules/.pnpm/core-js@3.22.5/node_modules/core-js/modules/es.string.trim.js"),__webpack_require__("./node_modules/.pnpm/@nuxtjs+composition-api@0.32.0_efpv4fxq5hpknftnxyzfo2vyxy/node_modules/@nuxtjs/composition-api/dist/runtime/index.mjs")),_stores_media__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/stores/media/index.ts"),useLoadMore=function useLoadMore(searchTerm){var canLoadMore=Object(_nuxtjs_composition_api__WEBPACK_IMPORTED_MODULE_3__.a)((function(){return""!==searchTerm.value.trim()})),onLoadMore=function(){var _ref=Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.a)(regeneratorRuntime.mark((function _callee(){var mediaStore;return regeneratorRuntime.wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:if(mediaStore=Object(_stores_media__WEBPACK_IMPORTED_MODULE_4__.a)(),!canLoadMore.value){_context.next=4;break}return _context.next=4,mediaStore.fetchMedia({shouldPersistMedia:!0});case 4:case"end":return _context.stop()}}),_callee)})));return function onLoadMore(){return _ref.apply(this,arguments)}}();return{canLoadMore:canLoadMore,onLoadMore:onLoadMore}}},"./src/pages/search/image.vue":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var runtime=__webpack_require__("./node_modules/.pnpm/@nuxtjs+composition-api@0.32.0_efpv4fxq5hpknftnxyzfo2vyxy/node_modules/@nuxtjs/composition-api/dist/runtime/index.mjs"),search_page_types=__webpack_require__("./src/pages/search/search-page.types.ts"),use_load_more=__webpack_require__("./src/composables/use-load-more.ts"),use_focus_filters=__webpack_require__("./src/composables/use-focus-filters.ts"),VImageGrid=__webpack_require__("./src/components/VImageGrid/VImageGrid.vue"),search_imagevue_type_script_lang_ts_=Object(runtime.b)({name:"ImageSearch",components:{VImageGrid:VImageGrid.default},props:search_page_types.propTypes,setup:function setup(props){Object(runtime.s)({title:"".concat(props.searchTerm," | Openverse")});var results=Object(runtime.a)((function(){return props.resultItems.image})),searchTermRef=Object(runtime.o)(props,"searchTerm"),_useLoadMore=Object(use_load_more.a)(searchTermRef),canLoadMore=_useLoadMore.canLoadMore,onLoadMore=_useLoadMore.onLoadMore,focusFilters=Object(use_focus_filters.a)();return{canLoadMore:canLoadMore,onLoadMore:onLoadMore,handleShiftTab:function handleShiftTab(){focusFilters.focusFilterSidebar()},results:results}},head:{}}),componentNormalizer=__webpack_require__("./node_modules/.pnpm/vue-loader@15.9.8_pv3e62hihcgilzzlt4q6ljqzyu/node_modules/vue-loader/lib/runtime/componentNormalizer.js"),component=Object(componentNormalizer.a)(search_imagevue_type_script_lang_ts_,(function(){var _h=this.$createElement;return(this._self._c||_h)("VImageGrid",{attrs:{images:this.results,"can-load-more":this.canLoadMore,"fetch-state":this.fetchState},on:{"load-more":this.onLoadMore,"shift-tab":this.handleShiftTab}})}),[],!1,null,null,null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{VImageGrid:__webpack_require__("./src/components/VImageGrid/VImageGrid.vue").default}),__vuedocgen_export_0.__docgenInfo={displayName:"ImageSearch",exportName:"default",description:"",tags:{}}},"./src/pages/search/search-page.types.ts":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"propTypes",(function(){return propTypes}));var propTypes={resultItems:{type:Object,required:!0},fetchState:{type:Object,required:!0},isFilterVisible:{type:Boolean,required:!1},searchTerm:{type:String,required:!0},supported:{type:Boolean,required:!1}}}}]);