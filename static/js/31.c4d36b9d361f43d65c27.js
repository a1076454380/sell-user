webpackJsonp([31],{"0VwT":function(t,a,e){"use strict";(function(t){a.a={name:"shezhi-shifu",data:function(){return{madCoHeadImg:localStorage.getItem("madCoHeadImg"),msdCoName:"",tabdata:[],madCoHeadImgurl:""}},methods:{exit:function(){var t=localStorage.getItem("msdCoPhone"),a=localStorage.getItem("shifumima"),e=localStorage.getItem("userphone"),o=localStorage.getItem("mima");localStorage.clear(),localStorage.setItem("msdCoPhone",t),localStorage.setItem("shifumima",a),localStorage.setItem("userphone",e),localStorage.setItem("mima",o),this.opennew("denglu-shifu")},upload:function(){var t=this;plus.nativeUI.actionSheet({title:"请选择",cancel:"取消",buttons:[{title:"照相机"},{title:"相册"}]},function(a){switch(a.index){case 1:t.camera();break;case 2:t.album()}})},camera:function(){var t=this;plus.camera.getCamera().captureImage(function(a){plus.io.resolveLocalFileSystemURL(a,function(a){a.name;var e=a.toLocalURL();t.upimg=!t.upimg,t.upload_img(e)},function(t){alert("读取拍照文件错误："+t.message)})},function(t){alert("失败："+t.message)},{filename:"_doc/camera/",index:1})},album:function(){var t=this;plus.gallery.pick(function(a){t.upimg=!t.upimg,t.upload_img(a)},function(t){alert("取消选择图片")},{filter:"image"})},upload_img:function(a){var e=this,o=new Image;o.src=a,o.onload=function(){var a=this.width,o=this.height,s=a/o;o=(a=480)/s;var i=document.createElement("canvas"),m=i.getContext("2d");t(i).attr({width:a,height:o}),m.drawImage(this,0,0,a,o),t.ajax({type:"post",url:e.myurl+"/company/imageCompanyHeadImage",data:{imgStr:i.toDataURL("image/jpeg",1)},success:function(t){200==t.status?(e.madCoHeadImg=t.data,e.madCoHeadImgurl=t.data):alert(t.msg)},error:function(t){alert("网络连接失败，请检查网络后再试！")}})}},myajax:function(){var a=this,e={msdCompanyId:localStorage.getItem("msdCompanyId"),madCoHeadImg:a.madCoHeadImgurl,msdCoName:a.msdCoName};""==a.madCoHeadImgurl&&delete e.madCoHeadImg,t.ajax({type:"post",url:a.myurl+"/company/updateCompanInfoById",data:e,success:function(t){200==t.status?(""!=a.madCoHeadImgurl&&localStorage.setItem("madCoHeadImg",a.madCoHeadImgurl),localStorage.setItem("msdCoName",a.msdCoName),a.back()):alert(t.msg)},error:function(t){alert("网络连接失败，请检查网络后再试！")}})},back:function(){this.$router.back()},opennew:function(t,a){this.$store.state.msdNewsId=a,this.$router.replace({name:t})}},mounted:function(){"null"!=localStorage.getItem("msdCoName")&&(this.msdCoName=localStorage.getItem("msdCoName"))},computed:{myurl:function(){return this.$store.state.myurl}}}}).call(a,e("7t+N"))},Evoq:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var o=e("0VwT"),s={render:function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("div",{staticClass:"wrapper"},[o("div",{staticClass:"header"},[o("div",{staticClass:"header-cebian",on:{click:function(a){return t.back()}}},[o("img",{attrs:{src:e("i5dz")}})]),t._v(" "),o("div",{staticClass:"header-text"},[t._v("设置")]),t._v(" "),o("div",{staticClass:"header-cebian",staticStyle:{"white-space":"nowrap"},on:{click:function(a){return t.myajax()}}},[t._v("\n\t\t\t保存\n\t\t")])]),t._v(" "),o("div",{staticClass:"main"},[o("div",{staticClass:"main-box"},[o("div",{staticClass:"main-one",on:{click:function(a){return t.upload()}}},[o("div",{staticClass:"one-text"},[t._v("头像")]),t._v(" "),"null"==t.madCoHeadImg?o("img",{attrs:{src:e("ygqi")}}):t._e(),t._v(" "),"null"!=t.madCoHeadImg?o("img",{attrs:{src:t._f("myimg")(t.madCoHeadImg)}}):t._e()]),t._v(" "),o("div",{staticClass:"main-two"},[o("div",{staticClass:"two-text"},[t._v("昵称")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.msdCoName,expression:"msdCoName"}],staticClass:"two-news",attrs:{type:"text",placeholder:"请输入用户名"},domProps:{value:t.msdCoName},on:{input:function(a){a.target.composing||(t.msdCoName=a.target.value)}}})]),t._v(" "),o("div",{staticClass:"main-three",on:{click:function(a){return t.opennew("wangji-shifu")}}},[o("div",{staticClass:"three-text"},[t._v("登录密码")]),t._v(" "),o("img",{attrs:{src:e("DEcB")}})])]),t._v(" "),o("div",{staticClass:"main-bottom",on:{click:function(a){return t.exit()}}},[o("div",{staticClass:"bottom-text"},[t._v("退出账号")])])])])},staticRenderFns:[]};var i=function(t){e("JQ3f")},m=e("VU/8")(o.a,s,!1,i,"data-v-c922db76",null);a.default=m.exports},JQ3f:function(t,a){}});