webpackJsonp([81],{I8mO:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=i("Dd8w"),a=i.n(o),l=i("NYxO"),d=i("rLcC"),n=i("v6sq"),s=i("UqAJ"),r=i("WDqy"),c={components:{Citizen:d.default,CardPhotoUpload:n.default,IdtphotoOldShow:s.default,IdtPhotoOldUpload:r.default},computed:a()({},Object(l.b)(["kindstr","dict"]),{key:function(){return void 0!==this.$route.name?this.$route.name+ +new Date:this.$route+ +new Date}}),data:function(){return{isLoading:!1,dialogVisible:!1,activeStep:0,activeName:"citizen",currentState:0,steps:[],processName:""}},created:function(){},methods:{oldPhotoUploadHandle:function(){this.dialogVisible=!0},handleClick:function(e,t){this.$refs.idtphotoOldShow.getIdtInfo(),this.$refs.idtphotoOldShow.loaded||this.$refs.idtphotoOldShow.getIdtInfo()},handleClose:function(e){this.$refs.idtphotoOldShow.getIdtInfo(),e()}}},u={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("router-view"),e._v(" "),i("div",{staticClass:"app-container"},[i("el-form",{directives:[{name:"loading",rawName:"v-loading.body",value:e.isLoading,expression:"isLoading",modifiers:{body:!0}}],ref:"apply",attrs:{size:"medium","label-position":"left","element-loading-text":"加载中"}},[i("el-row",[i("el-card",[i("el-button",{attrs:{size:"mini",type:"primary",icon:"el-icon-circle-plus-outline"},on:{click:function(t){e.oldPhotoUploadHandle()}}},[e._v("上传评定照片")])],1)],1)],1),e._v(" "),e.dialogVisible?i("el-dialog",{attrs:{title:"旧系统评残照片",visible:e.dialogVisible,"before-close":e.handleClose},on:{"update:visible":function(t){e.dialogVisible=t}}},[i("idt-photo-old-upload",{ref:"cardPhoto",attrs:{mark:this.$route.params.citizenId}})],1):e._e(),e._v(" "),i("el-tabs",{attrs:{type:"border-card"},on:{"tab-click":e.handleClick},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[i("el-tab-pane",{attrs:{label:"基本信息",name:"citizen"}},[i("citizen",{ref:"idtcitizen",attrs:{idt:"",info:"",mark:this.$route.params.cdpfId}})],1),e._v(" "),i("el-tab-pane",{attrs:{label:"旧系统评残照片",name:"photoOldShow"}},[i("idtphoto-old-show",{ref:"idtphotoOldShow"})],1)],1)],1)],1)},staticRenderFns:[]},p=i("VU/8")(c,u,!1,null,null,null);t.default=p.exports}});