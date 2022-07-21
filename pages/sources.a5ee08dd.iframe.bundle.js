(window.webpackJsonp=window.webpackJsonp||[]).push([[189,14],{"./src/components/VContentPage.vue":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var runtime=__webpack_require__("./node_modules/.pnpm/@nuxtjs+composition-api@0.32.0_efpv4fxq5hpknftnxyzfo2vyxy/node_modules/@nuxtjs/composition-api/dist/runtime/index.mjs"),components_VContentPagevue_type_script_lang_ts_=Object(runtime.b)({name:"VContentPage"}),componentNormalizer=__webpack_require__("./node_modules/.pnpm/vue-loader@15.9.8_pv3e62hihcgilzzlt4q6ljqzyu/node_modules/vue-loader/lib/runtime/componentNormalizer.js");const __vuedocgen_export_0=Object(componentNormalizer.a)(components_VContentPagevue_type_script_lang_ts_,(function(){var _h=this.$createElement,_c=this._self._c||_h;return _c("div",{staticClass:"pt-5 md:pt-10",attrs:{dir:"ltr"}},[_c("div",{staticClass:"px-6 lg:px-0 mb-10 lg:mb-30 md:max-w-4xl xl:max-w-5xl prose prose-sm md:prose-base mx-auto max-w-none prose-headings:font-bold lg:prose-headings:text-3xl prose-h1:text-4xl prose-h1:text-bold lg:prose-h1:text-6xl md:prose-h1:mb-10 prose-h3:text-2xl prose-h3:font-semibold md:prose-h3:mt-10"},[this._t("default",null,{default:""})],2)])}),[],!1,null,null,null).exports;__webpack_exports__.default=__vuedocgen_export_0;__vuedocgen_export_0.__docgenInfo={displayName:"VContentPage",exportName:"default",description:"",tags:{},slots:[{name:"default",scoped:!0,bindings:[{name:"default",title:"binding"}]}]}},"./src/pages/sources.vue":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var runtime=__webpack_require__("./node_modules/.pnpm/@nuxtjs+composition-api@0.32.0_efpv4fxq5hpknftnxyzfo2vyxy/node_modules/@nuxtjs/composition-api/dist/runtime/index.mjs"),media=__webpack_require__("./src/constants/media.ts"),VButton=__webpack_require__("./src/components/VButton.vue"),VLink=__webpack_require__("./src/components/VLink.vue"),VIcon=__webpack_require__("./src/components/VIcon/VIcon.vue"),VContentPage=__webpack_require__("./src/components/VContentPage.vue"),VSourcesTable=__webpack_require__("./src/components/VSourcesTable.vue"),external_link=__webpack_require__("./src/assets/icons/external-link.svg"),external_link_default=__webpack_require__.n(external_link),pages_sourcesvue_type_script_lang_ts_=Object(runtime.b)({name:"SourcePage",components:{VButton:VButton.default,VContentPage:VContentPage.default,VIcon:VIcon.default,VLink:VLink.default,VSourcesTable:VSourcesTable.default},setup:function setup(){return{externalLinkIcon:external_link_default.a,supportedMediaTypes:media.l}},head:function head(){return{title:"".concat(this.$t("sources.title")," | Openverse")}}}),componentNormalizer=__webpack_require__("./node_modules/.pnpm/vue-loader@15.9.8_pv3e62hihcgilzzlt4q6ljqzyu/node_modules/vue-loader/lib/runtime/componentNormalizer.js"),component=Object(componentNormalizer.a)(pages_sourcesvue_type_script_lang_ts_,(function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c("VContentPage",[_c("h1",[_vm._v("\n    "+_vm._s(_vm.$t("sources.title"))+"\n  ")]),_vm._v(" "),_c("h3",[_vm._v("\n    "+_vm._s(_vm.$t("sources.cc-content.where",{openverse:"Openverse"}))+"\n  ")]),_vm._v(" "),_c("p",[_vm._v("\n    "+_vm._s(_vm.$t("sources.cc-content.content",{openverse:"Openverse"}))+"\n  ")]),_vm._v(" "),_c("i18n",{attrs:{path:"sources.cc-content.provider",tag:"p"},scopedSlots:_vm._u([{key:"flickr",fn:function(){return[_c("VLink",{attrs:{href:"https://www.flickr.com/"}},[_vm._v("Flickr")])]},proxy:!0},{key:"smithsonian",fn:function(){return[_c("VLink",{attrs:{href:"https://www.si.edu/"}},[_vm._v(_vm._s(_vm.$t("sources.cc-content.smithsonian")))])]},proxy:!0}])}),_vm._v(" "),_c("i18n",{attrs:{path:"sources.cc-content.europeana",tag:"p"},scopedSlots:_vm._u([{key:"openverse",fn:function(){return[_vm._v("Openverse")]},proxy:!0},{key:"link",fn:function(){return[_c("VLink",{attrs:{href:"https://www.europeana.eu/en"}},[_vm._v("Europeana")])]},proxy:!0},{key:"link-api",fn:function(){return[_c("VLink",{attrs:{href:"https://pro.europeana.eu/page/apis"}},[_vm._v(_vm._s(_vm.$t("sources.cc-content.europeana-api")))])]},proxy:!0}])}),_vm._v(" "),_c("h3",[_vm._v("\n    "+_vm._s(_vm.$t("sources.new-content.next"))+"\n  ")]),_vm._v(" "),_c("p",[_vm._v("\n    "+_vm._s(_vm.$t("sources.new-content.integrate"))+"\n  ")]),_vm._v(" "),_c("ul",[_c("li",[_vm._v("\n      "+_vm._s(_vm.$t("sources.new-content.impact"))+"\n    ")]),_vm._v(" "),_c("li",[_vm._v("\n      "+_vm._s(_vm.$t("sources.new-content.reuse"))+"\n    ")]),_vm._v(" "),_c("li",[_vm._v("\n      "+_vm._s(_vm.$t("sources.new-content.total-items"))+"\n    ")])]),_vm._v(" "),_c("h3",[_vm._v("\n    "+_vm._s(_vm.$t("sources.suggestions"))+"\n  ")]),_vm._v(" "),_c("p",{staticClass:"inline-block"},[_c("VButton",{staticClass:"not-prose font-semibold mt-5 px-6 py-4",attrs:{as:"VLink",variant:"primary",size:"disabled",href:"https://github.com/WordPress/openverse-catalog/issues/new?assignees=&labels=%F0%9F%9A%A6+status%3A+awaiting+triage%2C+%F0%9F%A7%B9+status%3A+ticket+work+required%2C+%E2%98%81%EF%B8%8F+provider%3A+any&template=new-source-suggestion.md&title=%5BSource+Suggestion%5D+Insert+source+name+here"}},[_vm._v("\n      "+_vm._s(_vm.$t("sources.issue-button"))+"\n      "),_c("VIcon",{staticClass:"mx-2",attrs:{"icon-path":_vm.externalLinkIcon,"rtl-flip":!0}})],1)],1),_vm._v(" "),_c("i18n",{attrs:{path:"sources.detail",tag:"p"},scopedSlots:_vm._u([{key:"single-name",fn:function(){return[_c("strong",[_vm._v("\n        "+_vm._s(_vm.$t("sources.single-name"))+"\n      ")])]},proxy:!0}])}),_vm._v(" "),_vm._l(_vm.supportedMediaTypes,(function(mediaType){return[_c("h3",{key:"h3-"+mediaType},[_vm._v(_vm._s(_vm.$t("sources.heading."+mediaType)))]),_vm._v(" "),_c("VSourcesTable",{key:"table-"+mediaType,attrs:{media:mediaType}})]}))],2)}),[],!1,null,null,null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{VLink:__webpack_require__("./src/components/VLink.vue").default,VIcon:__webpack_require__("./src/components/VIcon/VIcon.vue").default,VButton:__webpack_require__("./src/components/VButton.vue").default,VSourcesTable:__webpack_require__("./src/components/VSourcesTable.vue").default,VContentPage:__webpack_require__("./src/components/VContentPage.vue").default}),__vuedocgen_export_0.__docgenInfo={displayName:"SourcePage",exportName:"default",description:"",tags:{}}}}]);