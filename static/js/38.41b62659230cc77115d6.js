webpackJsonp([38],{"7j2O":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("yJJW"),i={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"wrapper"},[s("div",{staticClass:"header"},[s("div",{staticClass:"header-cebian",on:{click:function(e){return t.back()}}},[s("img",{attrs:{src:a("i5dz")}})]),t._v(" "),s("div",{staticClass:"header-text"},[t._v("设置")]),t._v(" "),s("div",{staticClass:"header-cebian",staticStyle:{"white-space":"nowrap"},on:{click:function(e){return t.myajax()}}},[t._v("\n\t\t\t保存\n\t\t")])]),t._v(" "),s("div",{staticClass:"main"},[s("div",{staticClass:"main-box"},[s("div",{staticClass:"main-one",on:{click:function(e){return t.upload()}}},[s("div",{staticClass:"one-text"},[t._v("头像")]),t._v(" "),"null"==t.msdHeadImg?s("img",{attrs:{src:a("ygqi")}}):t._e(),t._v(" "),"null"!=t.msdHeadImg?s("img",{attrs:{src:t._f("myimg")(t.msdHeadImg)}}):t._e()]),t._v(" "),s("div",{staticClass:"main-two"},[s("div",{staticClass:"two-text"},[t._v("昵称")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.msdNickname,expression:"msdNickname"}],staticClass:"two-news",attrs:{type:"text",placeholder:"请输入用户名"},domProps:{value:t.msdNickname},on:{input:function(e){e.target.composing||(t.msdNickname=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"main-three",on:{click:function(e){return t.opennew("wangjimima")}}},[s("div",{staticClass:"three-text"},[t._v("登录密码")]),t._v(" "),s("img",{attrs:{src:a("DEcB")}})])]),t._v(" "),s("div",{staticClass:"main-bottom",on:{click:function(e){return t.exit()}}},[s("div",{staticClass:"bottom-text"},[t._v("退出账号")])])])])},staticRenderFns:[]};var n=function(t){a("jMm4")},m=a("VU/8")(s.a,i,!1,n,"data-v-94310df2",null);e.default=m.exports},jMm4:function(t,e){},yJJW:function(t,e,a){"use strict";(function(t){e.a={name:"shezhi",data:function(){return{msdHeadImg:localStorage.getItem("msdHeadImg"),msdNickname:"",tabdata:[],msdHeadImgurl:""}},methods:{exit:function(){var t=localStorage.getItem("msdCoPhone"),e=localStorage.getItem("shifumima"),a=localStorage.getItem("userphone"),s=localStorage.getItem("mima");localStorage.clear(),localStorage.setItem("msdCoPhone",t),localStorage.setItem("shifumima",e),localStorage.setItem("userphone",a),localStorage.setItem("mima",s),this.opennew("denglu")},upload:function(){var t=this;plus.nativeUI.actionSheet({title:"请选择",cancel:"取消",buttons:[{title:"照相机"},{title:"相册"}]},function(e){switch(e.index){case 1:t.camera();break;case 2:t.album()}})},camera:function(){var t=this;plus.camera.getCamera().captureImage(function(e){plus.io.resolveLocalFileSystemURL(e,function(e){e.name;var a=e.toLocalURL();t.upimg=!t.upimg,t.upload_img(a)},function(t){alert("读取拍照文件错误："+t.message)})},function(t){alert("失败："+t.message)},{filename:"_doc/camera/",index:1})},album:function(){var t=this;plus.gallery.pick(function(e){t.upimg=!t.upimg,t.upload_img(e)},function(t){alert("取消选择图片")},{filter:"image"})},upload_img:function(e){var a=this,s=new Image;s.src=e,s.onload=function(){var e=this.width,s=this.height,i=e/s;s=(e=480)/i;var n=document.createElement("canvas"),m=n.getContext("2d");t(n).attr({width:e,height:s}),m.drawImage(this,0,0,e,s),t.ajax({type:"post",url:a.myurl+"/user/inserUserImg",data:{imgStr:n.toDataURL("image/jpeg",1)},success:function(t){200==t.status?(a.msdHeadImg=t.data,a.msdHeadImgurl=t.data):alert(t.msg)},error:function(t){alert("网络连接失败，请检查网络后再试！")}})}},myajax:function(){var e=this,a={msdUserId:localStorage.getItem("userid"),msdHeadImg:e.msdHeadImgurl,msdNickname:e.msdNickname};""==e.msdHeadImgurl&&delete a.msdHeadImg,t.ajax({type:"post",url:e.myurl+"/user/updateUserAuthentication",data:a,success:function(t){200==t.status?(""!=e.msdHeadImgurl&&localStorage.setItem("msdHeadImg",e.msdHeadImgurl),localStorage.setItem("msdNickname",e.msdNickname),e.back()):alert(t.msg)},error:function(t){alert("网络连接失败，请检查网络后再试！")}})},back:function(){this.$router.back()},opennew:function(t,e){this.$store.state.msdNewsId=e,this.$router.push({name:t})}},mounted:function(){"null"!=localStorage.getItem("msdNickname")&&(this.msdNickname=localStorage.getItem("msdNickname"))},computed:{myurl:function(){return this.$store.state.myurl}}}}).call(e,a("7t+N"))}});