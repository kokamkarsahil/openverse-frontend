(window.webpackJsonp=window.webpackJsonp||[]).push([[27,23,28],{"./node_modules/.pnpm/css-loader@5.2.7_webpack@4.46.0/node_modules/css-loader/dist/cjs.js?!./node_modules/.pnpm/vue-loader@15.9.8_7oyydxtafvjqcmg5zydubwayrq/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/.pnpm/postcss-loader@4.3.0_jgovvjlmnszlgzfyletnwk36ji/node_modules/postcss-loader/dist/cjs.js?!./node_modules/.pnpm/@nuxt+components@2.2.1/node_modules/@nuxt/components/dist/loader.js?!./node_modules/.pnpm/vue-loader@15.9.8_pv3e62hihcgilzzlt4q6ljqzyu/node_modules/vue-loader/lib/index.js?!./node_modules/.pnpm/unplugin@0.3.3_webpack@4.46.0/node_modules/unplugin/dist/webpack/loaders/transform.js?!./src/components/VSearchResultsTitle.vue?vue&type=style&index=0&id=de936922&scoped=true&lang=css&":function(module,exports,__webpack_require__){var ___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/.pnpm/css-loader@5.2.7_webpack@4.46.0/node_modules/css-loader/dist/runtime/api.js")((function(i){return i[1]}));___CSS_LOADER_EXPORT___.push([module.i,"h1[data-v-de936922]:first-letter{text-transform:uppercase}",""]),___CSS_LOADER_EXPORT___.locals={},module.exports=___CSS_LOADER_EXPORT___},"./node_modules/.pnpm/vue-docgen-loader@1.5.0_j5ed4dj4suhyi3wzdvabtf7vta/node_modules/vue-docgen-loader/lib/index.js?!./node_modules/.pnpm/vue-style-loader@4.1.3/node_modules/vue-style-loader/index.js?!./node_modules/.pnpm/css-loader@5.2.7_webpack@4.46.0/node_modules/css-loader/dist/cjs.js?!./node_modules/.pnpm/vue-loader@15.9.8_7oyydxtafvjqcmg5zydubwayrq/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/.pnpm/postcss-loader@4.3.0_jgovvjlmnszlgzfyletnwk36ji/node_modules/postcss-loader/dist/cjs.js?!./node_modules/.pnpm/@nuxt+components@2.2.1/node_modules/@nuxt/components/dist/loader.js?!./node_modules/.pnpm/vue-loader@15.9.8_pv3e62hihcgilzzlt4q6ljqzyu/node_modules/vue-loader/lib/index.js?!./node_modules/.pnpm/unplugin@0.3.3_webpack@4.46.0/node_modules/unplugin/dist/webpack/loaders/transform.js?!./src/components/VSearchResultsTitle.vue?vue&type=style&index=0&id=de936922&scoped=true&lang=css&":function(module,exports,__webpack_require__){var content=__webpack_require__("./node_modules/.pnpm/css-loader@5.2.7_webpack@4.46.0/node_modules/css-loader/dist/cjs.js?!./node_modules/.pnpm/vue-loader@15.9.8_7oyydxtafvjqcmg5zydubwayrq/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/.pnpm/postcss-loader@4.3.0_jgovvjlmnszlgzfyletnwk36ji/node_modules/postcss-loader/dist/cjs.js?!./node_modules/.pnpm/@nuxt+components@2.2.1/node_modules/@nuxt/components/dist/loader.js?!./node_modules/.pnpm/vue-loader@15.9.8_pv3e62hihcgilzzlt4q6ljqzyu/node_modules/vue-loader/lib/index.js?!./node_modules/.pnpm/unplugin@0.3.3_webpack@4.46.0/node_modules/unplugin/dist/webpack/loaders/transform.js?!./src/components/VSearchResultsTitle.vue?vue&type=style&index=0&id=de936922&scoped=true&lang=css&");content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[module.i,content,""]]),content.locals&&(module.exports=content.locals);(0,__webpack_require__("./node_modules/.pnpm/vue-style-loader@4.1.3/node_modules/vue-style-loader/lib/addStylesClient.js").default)("bd863bee",content,!0,{sourceMap:!1})},"./src/components/VMetaSearch/VMetaSearchForm.vue":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("./node_modules/.pnpm/core-js@3.22.5/node_modules/core-js/modules/es.array.join.js"),__webpack_require__("./node_modules/.pnpm/core-js@3.22.5/node_modules/core-js/modules/es.array.map.js"),__webpack_require__("./node_modules/.pnpm/core-js@3.22.5/node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/.pnpm/core-js@3.22.5/node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/.pnpm/core-js@3.22.5/node_modules/core-js/modules/es.function.name.js");var runtime=__webpack_require__("./node_modules/.pnpm/@nuxtjs+composition-api@0.32.0_efpv4fxq5hpknftnxyzfo2vyxy/node_modules/@nuxtjs/composition-api/dist/runtime/index.mjs"),get_additional_sources=__webpack_require__("./src/utils/get-additional-sources.ts"),focus_management=__webpack_require__("./src/utils/focus-management.ts"),emits=__webpack_require__("./src/types/emits.ts"),VMetaSourceList=__webpack_require__("./src/components/VMetaSearch/VMetaSourceList.vue"),VMetaSearch_VMetaSearchFormvue_type_script_lang_ts_=Object(runtime.b)({name:"VMetaSearchForm",components:{VMetaSourceList:VMetaSourceList.default},props:{query:{type:Object,required:!0},type:{type:String,required:!0},isSupported:{type:Boolean,default:!1},hasNoResults:{type:Boolean,required:!0}},emits:{tab:Object(emits.a)()},setup:function setup(props,_ref){var emit=_ref.emit,sectionRef=Object(runtime.l)(),unsupportedByUseFilter=Object(runtime.a)((function(){return Object(get_additional_sources.a)(props.type).filter((function(source){return!source.supportsUseFilters})).map((function(source){return source.name})).join(", ")})),lastFocusableElement=Object(runtime.a)((function(){var focusable=Object(focus_management.c)(sectionRef.value);return focusable[focusable.length-1]}));return{sectionRef:sectionRef,unsupportedByUseFilter:unsupportedByUseFilter,handleTab:function handleTab(event){event.target===lastFocusableElement.value&&emit("tab",event)}}}}),componentNormalizer=__webpack_require__("./node_modules/.pnpm/vue-loader@15.9.8_pv3e62hihcgilzzlt4q6ljqzyu/node_modules/vue-loader/lib/runtime/componentNormalizer.js"),component=Object(componentNormalizer.a)(VMetaSearch_VMetaSearchFormvue_type_script_lang_ts_,(function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c("section",{key:_vm.type,ref:"sectionRef",staticClass:"p-6 meta-search text-center mt-12",attrs:{"data-testid":"meta-search-form"},on:{keydown:function($event){return!$event.type.indexOf("key")&&_vm._k($event.keyCode,"tab",9,$event.key,"Tab")||$event.ctrlKey||$event.shiftKey||$event.altKey||$event.metaKey?null:_vm.handleTab.apply(null,arguments)}}},[_c("header",{staticClass:"mb-10"},[_vm.hasNoResults?_c("i18n",{staticClass:"text-4xl mb-2",attrs:{path:"meta-search.form.no-results-title",tag:"h4"},scopedSlots:_vm._u([{key:"type",fn:function(){return[_vm._v(_vm._s(_vm.type))]},proxy:!0},{key:"query",fn:function(){return[_vm._v(_vm._s(_vm.query.q))]},proxy:!0}])}):_c("i18n",{staticClass:"text-4xl mb-2",attrs:{path:_vm.isSupported?"meta-search.form.supported-title":"meta-search.form.unsupported-title",tag:"h4"},scopedSlots:_vm._u([{key:"openverse",fn:function(){return[_vm._v("Openverse")]},proxy:!0},{key:"type",fn:function(){return[_vm._v("\n        "+_vm._s(_vm.type)+"\n      ")]},proxy:!0}],null,!1,196258084)}),_vm._v(" "),_c("i18n",{attrs:{path:"meta-search.form.caption",tag:"p"},scopedSlots:_vm._u([{key:"type",fn:function(){return[_vm._v(_vm._s(_vm.type))]},proxy:!0},{key:"break",fn:function(){return[_c("br")]},proxy:!0},{key:"filter",fn:function(){return[_vm._v(_vm._s(_vm.unsupportedByUseFilter))]},proxy:!0}])})],1),_vm._v(" "),_c("VMetaSourceList",{staticClass:"md:justify-center mt-6 mb-10",attrs:{type:_vm.type,query:_vm.query}}),_vm._v(" "),_c("p",{staticClass:"text-sm font-semibold max-w-3xl my-0 mx-auto"},[_vm._v("\n    "+_vm._s(_vm.$t("meta-search.caption",{openverse:"Openverse"}))+"\n  ")])],1)}),[],!1,null,null,null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{VMetaSourceList:__webpack_require__("./src/components/VMetaSearch/VMetaSourceList.vue").default}),__vuedocgen_export_0.__docgenInfo={displayName:"VMetaSearchForm",exportName:"default",description:"",tags:{},props:[{name:"query",type:{name:"ApiQueryParams"},required:!0},{name:"type",type:{name:"MediaType"},required:!0},{name:"isSupported",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"hasNoResults",type:{name:"boolean"},required:!0}],events:[{name:"tab"}]}},"./src/components/VSearchGrid.vue":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("./node_modules/.pnpm/core-js@3.22.5/node_modules/core-js/modules/es.number.constructor.js");var runtime=__webpack_require__("./node_modules/.pnpm/@nuxtjs+composition-api@0.32.0_efpv4fxq5hpknftnxyzfo2vyxy/node_modules/@nuxtjs/composition-api/dist/runtime/index.mjs"),media=__webpack_require__("./src/constants/media.ts"),errors=__webpack_require__("./src/constants/errors.ts"),emits=__webpack_require__("./src/types/emits.ts"),VMetaSearchForm=__webpack_require__("./src/components/VMetaSearch/VMetaSearchForm.vue"),VErrorSection=__webpack_require__("./src/components/VErrorSection/VErrorSection.vue"),VErrorImage=__webpack_require__("./src/components/VErrorSection/VErrorImage.vue"),VNoResults=__webpack_require__("./src/components/VErrorSection/VNoResults.vue"),VSearchResultsTitle=__webpack_require__("./src/components/VSearchResultsTitle.vue"),components_VSearchGridvue_type_script_lang_ts_=Object(runtime.b)({name:"VSearchGrid",components:{VErrorSection:VErrorSection.default,VMetaSearchForm:VMetaSearchForm.default,VErrorImage:VErrorImage.default,VNoResults:VNoResults.default,VSearchResultsTitle:VSearchResultsTitle.default},props:{supported:{type:Boolean,required:!0},query:{type:Object,required:!0},searchType:{type:String,required:!0},fetchState:{type:Object,required:!0},resultsCount:{type:Number,required:!0}},emits:{tab:Object(emits.a)()},setup:function setup(props){return{hasNoResults:Object(runtime.a)((function(){return!!props.supported&&(""!==props.query.q&&0===props.resultsCount)})),metaSearchFormType:Object(runtime.a)((function(){return props.searchType===media.a?media.c:props.searchType})),isAllView:Object(runtime.a)((function(){return props.searchType===media.a})),NO_RESULT:errors.a}}}),componentNormalizer=__webpack_require__("./node_modules/.pnpm/vue-loader@15.9.8_pv3e62hihcgilzzlt4q6ljqzyu/node_modules/vue-loader/lib/runtime/componentNormalizer.js"),component=Object(componentNormalizer.a)(components_VSearchGridvue_type_script_lang_ts_,(function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return!_vm.fetchState.hasStarted||_vm.fetchState.isFetching||!_vm.fetchState.isFetching&&_vm.resultsCount?_c("section",[_vm.query.q&&_vm.supported?_c("header",{staticClass:"mt-5",class:_vm.isAllView?"mb-10":"mb-8"},[_c("VSearchResultsTitle",{attrs:{size:_vm.isAllView?"large":"default"}},[_vm._v("\n      "+_vm._s(_vm.query.q)+"\n    ")])],1):_vm._e(),_vm._v(" "),_vm._t("media"),_vm._v(" "),_vm.fetchState.isFetching?_vm._e():_c("VMetaSearchForm",{attrs:{type:_vm.metaSearchFormType,"has-no-results":_vm.hasNoResults,query:_vm.query,"is-supported":_vm.supported},on:{tab:function($event){return _vm.$emit("tab",$event)}}})],2):_c("VErrorSection",{staticClass:"w-full py-10",scopedSlots:_vm._u([{key:"image",fn:function(){return[_c("VErrorImage",{attrs:{"error-code":_vm.NO_RESULT}})]},proxy:!0}])},[_vm._v(" "),_c("VNoResults",{attrs:{type:_vm.metaSearchFormType,query:_vm.query}})],1)}),[],!1,null,null,null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{VSearchResultsTitle:__webpack_require__("./src/components/VSearchResultsTitle.vue").default,VMetaSearchForm:__webpack_require__("./src/components/VMetaSearch/VMetaSearchForm.vue").default,VErrorImage:__webpack_require__("./src/components/VErrorSection/VErrorImage.vue").default,VNoResults:__webpack_require__("./src/components/VErrorSection/VNoResults.vue").default,VErrorSection:__webpack_require__("./src/components/VErrorSection/VErrorSection.vue").default}),__vuedocgen_export_0.__docgenInfo={displayName:"VSearchGrid",exportName:"default",description:"",tags:{},props:[{name:"supported",type:{name:"boolean"},required:!0},{name:"query",type:{name:"ApiQueryParams"},required:!0},{name:"searchType",type:{name:"SupportedSearchType"},required:!0},{name:"fetchState",type:{name:"FetchState"},required:!0},{name:"resultsCount",type:{name:"number"},required:!0}],events:[{name:"tab"}],slots:[{name:"media"}]}},"./src/components/VSearchResultsTitle.vue":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var runtime=__webpack_require__("./node_modules/.pnpm/@nuxtjs+composition-api@0.32.0_efpv4fxq5hpknftnxyzfo2vyxy/node_modules/@nuxtjs/composition-api/dist/runtime/index.mjs"),components_VSearchResultsTitlevue_type_script_lang_ts_=Object(runtime.b)({name:"VSearchResultsTitle",props:{size:{required:!1,default:"default",type:String}}}),componentNormalizer=(__webpack_require__("./src/components/VSearchResultsTitle.vue?vue&type=style&index=0&id=de936922&scoped=true&lang=css&"),__webpack_require__("./node_modules/.pnpm/vue-loader@15.9.8_pv3e62hihcgilzzlt4q6ljqzyu/node_modules/vue-loader/lib/runtime/componentNormalizer.js"));const __vuedocgen_export_0=Object(componentNormalizer.a)(components_VSearchResultsTitlevue_type_script_lang_ts_,(function(){var _h=this.$createElement;return(this._self._c||_h)("h1",{staticClass:"leading-tight sr-only md:not-sr-only",class:["large"===this.size?"text-[90px]":"text-6xl"]},[this._t("default",null,{default:""})],2)}),[],!1,null,"de936922",null).exports;__webpack_exports__.default=__vuedocgen_export_0;__vuedocgen_export_0.__docgenInfo={displayName:"VSearchResultsTitle",exportName:"default",description:"",tags:{},props:[{name:"size",type:{name:"TitleSize"},required:!1,defaultValue:{func:!1,value:"'default'"}}],slots:[{name:"default",scoped:!0,bindings:[{name:"default",title:"binding"}]}]}},"./src/components/VSearchResultsTitle.vue?vue&type=style&index=0&id=de936922&scoped=true&lang=css&":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__("./node_modules/.pnpm/vue-docgen-loader@1.5.0_j5ed4dj4suhyi3wzdvabtf7vta/node_modules/vue-docgen-loader/lib/index.js?!./node_modules/.pnpm/vue-style-loader@4.1.3/node_modules/vue-style-loader/index.js?!./node_modules/.pnpm/css-loader@5.2.7_webpack@4.46.0/node_modules/css-loader/dist/cjs.js?!./node_modules/.pnpm/vue-loader@15.9.8_7oyydxtafvjqcmg5zydubwayrq/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/.pnpm/postcss-loader@4.3.0_jgovvjlmnszlgzfyletnwk36ji/node_modules/postcss-loader/dist/cjs.js?!./node_modules/.pnpm/@nuxt+components@2.2.1/node_modules/@nuxt/components/dist/loader.js?!./node_modules/.pnpm/vue-loader@15.9.8_pv3e62hihcgilzzlt4q6ljqzyu/node_modules/vue-loader/lib/index.js?!./node_modules/.pnpm/unplugin@0.3.3_webpack@4.46.0/node_modules/unplugin/dist/webpack/loaders/transform.js?!./src/components/VSearchResultsTitle.vue?vue&type=style&index=0&id=de936922&scoped=true&lang=css&")}}]);