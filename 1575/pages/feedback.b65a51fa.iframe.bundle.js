(window.webpackJsonp=window.webpackJsonp||[]).push([[188,14],{"./src/components/VContentPage.vue":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var runtime=__webpack_require__("./node_modules/.pnpm/@nuxtjs+composition-api@0.32.0_efpv4fxq5hpknftnxyzfo2vyxy/node_modules/@nuxtjs/composition-api/dist/runtime/index.mjs"),components_VContentPagevue_type_script_lang_ts_=Object(runtime.b)({name:"VContentPage"}),componentNormalizer=__webpack_require__("./node_modules/.pnpm/vue-loader@15.9.8_pv3e62hihcgilzzlt4q6ljqzyu/node_modules/vue-loader/lib/runtime/componentNormalizer.js");const __vuedocgen_export_0=Object(componentNormalizer.a)(components_VContentPagevue_type_script_lang_ts_,(function(){var _h=this.$createElement,_c=this._self._c||_h;return _c("div",{staticClass:"pt-5 md:pt-10",attrs:{dir:"ltr"}},[_c("div",{staticClass:"px-6 lg:px-0 mb-10 lg:mb-30 md:max-w-4xl xl:max-w-5xl prose prose-sm md:prose-base mx-auto max-w-none prose-headings:font-bold lg:prose-headings:text-3xl prose-h1:text-4xl prose-h1:text-bold lg:prose-h1:text-6xl md:prose-h1:mb-10 prose-h3:text-2xl prose-h3:font-semibold md:prose-h3:mt-10"},[this._t("default",null,{default:""})],2)])}),[],!1,null,null,null).exports;__webpack_exports__.default=__vuedocgen_export_0;__vuedocgen_export_0.__docgenInfo={displayName:"VContentPage",exportName:"default",description:"",tags:{},slots:[{name:"default",scoped:!0,bindings:[{name:"default",title:"binding"}]}]}},"./src/pages/feedback.vue":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("./node_modules/.pnpm/core-js@3.22.5/node_modules/core-js/modules/es.object.keys.js");var runtime=__webpack_require__("./node_modules/.pnpm/@nuxtjs+composition-api@0.32.0_efpv4fxq5hpknftnxyzfo2vyxy/node_modules/@nuxtjs/composition-api/dist/runtime/index.mjs"),VLink=__webpack_require__("./src/components/VLink.vue"),VContentPage=__webpack_require__("./src/components/VContentPage.vue"),VTabs=__webpack_require__("./src/components/VTabs/VTabs.vue"),VTab=__webpack_require__("./src/components/VTabs/VTab.vue"),VTabPanel=__webpack_require__("./src/components/VTabs/VTabPanel.vue"),feedbackvue_type_script_lang_ts_forms={report:"".concat("https://docs.google.com/forms/d/e/1FAIpQLSenCn-3HoZlCz4vlL2621wjezfu1sPZDaWGe_FtQ1R5-5qR4Q/viewform","?embedded=true"),improve:"".concat("https://docs.google.com/forms/d/e/1FAIpQLSfGC7JWbNjGs-_pUNe3B2nzBW-YrIrmRd92t-7u0y7s8jMjzQ/viewform","?embedded=true")},tabs=Object.keys(feedbackvue_type_script_lang_ts_forms),pages_feedbackvue_type_script_lang_ts_=Object(runtime.b)({name:"FeedbackPage",components:{VLink:VLink.default,VContentPage:VContentPage.default,VTabs:VTabs.default,VTab:VTab.default,VTabPanel:VTabPanel.default},setup:function setup(){return{forms:feedbackvue_type_script_lang_ts_forms,tabs:tabs}},head:function head(){return{title:"".concat(this.$t("feedback.title")," | Openverse")}}}),componentNormalizer=__webpack_require__("./node_modules/.pnpm/vue-loader@15.9.8_pv3e62hihcgilzzlt4q6ljqzyu/node_modules/vue-loader/lib/runtime/componentNormalizer.js"),component=Object(componentNormalizer.a)(pages_feedbackvue_type_script_lang_ts_,(function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c("VContentPage",[_c("h1",{attrs:{id:"feedback"}},[_vm._v("\n    "+_vm._s(_vm.$t("feedback.title"))+"\n  ")]),_vm._v(" "),_c("i18n",{attrs:{path:"feedback.intro",tag:"p"},scopedSlots:_vm._u([{key:"openverse",fn:function(){return[_vm._v("Openverse")]},proxy:!0},{key:"slack",fn:function(){return[_c("VLink",{attrs:{href:"https://wordpress.slack.com/messages/openverse/"}},[_vm._v("#openverse")])]},proxy:!0},{key:"making-wordpress",fn:function(){return[_c("VLink",{attrs:{href:"https://make.wordpress.org/chat/"}},[_vm._v("Making WordPress")])]},proxy:!0}])}),_vm._v(" "),_c("section",[_c("VTabs",{attrs:{label:"#feedback",variant:"plain","selected-id":_vm.tabs[0],manual:""},scopedSlots:_vm._u([{key:"tabs",fn:function(){return _vm._l(_vm.tabs,(function(tab){return _c("VTab",{key:tab,attrs:{id:tab}},[_vm._v("\n          "+_vm._s(_vm.$t("feedback."+tab))+"\n        ")])}))},proxy:!0}])},[_vm._v(" "),_vm._l(_vm.tabs,(function(tab){return _c("VTabPanel",{key:tab,attrs:{id:tab}},[_c("iframe",{staticClass:"w-full h-[1200px] border-0",attrs:{src:_vm.forms[tab],"aria-label":_vm.$t("feedback.aria."+tab).toString(),title:_vm.$t("feedback.aria."+tab).toString()}},[_vm._v("\n          "+_vm._s(_vm.$t("feedback.loading"))+"\n        ")])])}))],2)],1)],1)}),[],!1,null,null,null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{VLink:__webpack_require__("./src/components/VLink.vue").default,VTab:__webpack_require__("./src/components/VTabs/VTab.vue").default,VTabPanel:__webpack_require__("./src/components/VTabs/VTabPanel.vue").default,VTabs:__webpack_require__("./src/components/VTabs/VTabs.vue").default,VContentPage:__webpack_require__("./src/components/VContentPage.vue").default}),__vuedocgen_export_0.__docgenInfo={displayName:"FeedbackPage",exportName:"default",description:"",tags:{}}}}]);