webpackJsonp([22],{ORPH:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e("wfgO"),n={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"wrapper"},[a("div",{staticClass:"header"},[a("div",{staticClass:"header-cebian",on:{click:function(s){return t.back()}}},[a("img",{attrs:{src:e("i5dz")}})]),t._v(" "),a("div",{staticClass:"header-text"},[t._v("新闻")]),t._v(" "),a("div",{staticClass:"header-cebian"})]),t._v(" "),a("div",{staticClass:"main"},t._l(t.tabdata,function(s){return a("div",{staticClass:"main-box",on:{click:function(e){return t.opennew("xinwenxiangqing",s.msdNewsId)}}},[a("div",{staticClass:"main-lift"},[a("div",{staticClass:"lift-text"},[t._v(t._s(s.msdNeTitle))]),t._v(" "),a("div",{staticClass:"lift-news"},[t._v(t._s(s.msdNeCreateTimeString))])]),t._v(" "),t._m(0,!0)])}),0)])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"main-right"},[s("img",{attrs:{src:e("Ih9k")}})])}]};var i=function(t){e("z1ne")},r=e("VU/8")(a.a,n,!1,i,"data-v-27c0fa94",null);s.default=r.exports},wfgO:function(t,s,e){"use strict";(function(t){s.a={name:"xinwen",data:function(){return{tabdata:[]}},methods:{myajax:function(){var s=this;t.ajax({type:"post",url:s.myurl+"/user/selectNews",success:function(t){200==t.status?s.tabdata=t.data:alert(t.msg)},error:function(t){alert("网络连接失败，请检查网络后再试！")}})},back:function(){this.$router.back()},opennew:function(t,s){this.$store.state.msdNewsId=s,this.$router.push({name:t})}},mounted:function(){this.myajax()},computed:{myurl:function(){return this.$store.state.myurl},msdNewsId:function(){return this.$store.state.msdNewsId}}}}).call(s,e("7t+N"))},z1ne:function(t,s){}});