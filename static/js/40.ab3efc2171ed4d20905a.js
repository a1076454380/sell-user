webpackJsonp([40],{LsZx:function(t,e,s){"use strict";(function(t){e.a={name:"openvip",data:function(){return{price:"",state:1,channel:"",mydata:{},payboo:!1,myid:""}},methods:{payshow:function(t){this.myid=t,this.payboo=!this.payboo},change:function(t){this.state=t},have:function(){var e=this;t.ajax({type:"post",url:e.myurl+"/user/queryMsdMember",success:function(t){e.mydata=t.data,0==t.data.length&&(alert("会员功能暂时没有开通呢！"),e.back())},error:function(t){alert("网络连接失败，请检查网络后再试！")}})},myajax:function(){var e=this;3==e.state?t.ajax({type:"post",url:e.myurl+"/user/insertMember",dataType:"json",data:{msdUserId:localStorage.getItem("userid"),msdMemberId:e.myid,type:1},success:function(t){200==t.status?(localStorage.setItem("msdIsMember",1),e.back()):alert(t.msg)},error:function(t){alert("网络连接失败，请检查网络后再试！")}}):t.ajax({type:"post",url:e.myurl+"/user/insertUserMemberAPIWX",dataType:"json",data:{msdUserId:localStorage.getItem("userid"),state:e.state,msdMemberId:e.myid},success:function(t){1==e.state?plus.payment.request(e.channel[0],t.data[0],function(t){plus.nativeUI.alert("支付成功！",function(){localStorage.setItem("msdIsMember",1),e.back()})},function(t){alert("支付失败！")}):plus.payment.request(e.channel[1],t,function(t){plus.nativeUI.alert("支付成功！",function(){localStorage.setItem("msdIsMember",1),e.back()})},function(t){alert("支付失败！")})},error:function(t){alert("网络连接失败，请检查网络后再试！")}})},back:function(){this.$router.back()},opennew:function(t){this.$router.push({name:t})}},mounted:function(){var t=this;function e(){plus.payment.getChannels(function(e){t.channel=e},function(t){alert("获取支付通道失败："+t.message)})}t.have(),window.plus?e():document.addEventListener("plusready",e,!1)},computed:{myurl:function(){return this.$store.state.myurl}}}}).call(e,s("7t+N"))},"PWg/":function(t,e){},nKxu:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("LsZx"),n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrapper"},[a("div",{staticClass:"header"},[a("div",{staticClass:"header-cebian",on:{click:function(e){return t.back()}}},[a("img",{attrs:{src:s("i5dz")}})]),t._v(" "),a("div",{staticClass:"header-text"},[t._v("开通vip")]),t._v(" "),a("div",{staticClass:"header-cebian"})]),t._v(" "),t.payboo?t._e():a("div",{staticClass:"main"},t._l(t.mydata,function(e){return a("block",[a("div",{staticClass:"title"},[t._v("\n\t\t\t\t"+t._s(e.msdMeName)+"\n\t\t\t")]),t._v(" "),a("div",{staticClass:"text",domProps:{innerHTML:t._s(e.msdMeResult)}}),t._v(" "),a("div",{staticClass:"btn",on:{click:function(s){return t.payshow(e.msdMemberId)}}},[t._v("\n\t\t\t\t立即加入"+t._s(e.msdMeName)+"/支付"+t._s(e.msdMePrice)+"元\n\t\t\t")])])}),1),t._v(" "),t.payboo?a("div",{staticClass:"main"},[t._m(0),t._v(" "),a("div",{staticClass:"main-three"},[a("div",{staticClass:"three-box",on:{click:function(e){return t.change(1)}}},[a("div",{staticClass:"three-text"},[t._v("支付宝")]),t._v(" "),1!=t.state?a("img",{attrs:{src:s("//pS")}}):t._e(),t._v(" "),1==t.state?a("img",{attrs:{src:s("5ZYg")}}):t._e()]),t._v(" "),a("div",{staticClass:"three-box",on:{click:function(e){return t.change(2)}}},[a("div",{staticClass:"three-text"},[t._v("微信")]),t._v(" "),2!=t.state?a("img",{attrs:{src:s("//pS")}}):t._e(),t._v(" "),2==t.state?a("img",{attrs:{src:s("5ZYg")}}):t._e()]),t._v(" "),a("div",{staticClass:"three-box",on:{click:function(e){return t.change(3)}}},[a("div",{staticClass:"three-text"},[t._v("钱包支付")]),t._v(" "),3!=t.state?a("img",{attrs:{src:s("//pS")}}):t._e(),t._v(" "),3==t.state?a("img",{attrs:{src:s("5ZYg")}}):t._e()])]),t._v(" "),a("div",{staticClass:"bottom active",on:{click:function(e){return t.myajax()}}},[a("div",{staticClass:"bottom-text"},[t._v("确认开通 ")])])]):t._e()])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"main-two"},[e("div",{staticClass:"two-text"},[this._v("付款方式")])])}]};var i=function(t){s("PWg/")},r=s("VU/8")(a.a,n,!1,i,"data-v-713eb594",null);e.default=r.exports}});