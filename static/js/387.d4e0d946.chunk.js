"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[387],{94:function(n,t,e){e.d(t,{Hg:function(){return o},Jh:function(){return h},TP:function(){return p},z1:function(){return s},zv:function(){return f}});var r=e(861),a=e(757),u=e.n(a),c=e(44),i="af0d5f243de6f7a5bfa482911cb42a9e";c.ZP.defaults.baseURL="https://api.themoviedb.org/3/";var o=function(){var n=(0,r.Z)(u().mark((function n(){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.ZP.get("trending/movie/day?api_key=".concat(i));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.ZP.get("search/movie?api_key=".concat(i,"&language=en-US&query=").concat(t,"&page=1&include_adult=false"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.ZP.get("movie/".concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.ZP.get("movie/".concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.ZP.get("movie/".concat(t,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},387:function(n,t,e){e.r(t),e.d(t,{default:function(){return m}});var r,a,u,c,i=e(885),o=e(689),s=e(791),p=e(94),f=e(168),h=e(444),g=h.ZP.ul(r||(r=(0,f.Z)(["\n  list-style: none;\n"]))),d=h.ZP.li(a||(a=(0,f.Z)(["\n  margin: 10px 0 16px;\n  padding: 2px 8px;\n  //box-shadow: 1px 2px 4px 3px rgba(0, 0, 0, 0.5);\n"]))),v=h.ZP.h3(u||(u=(0,f.Z)(["\n  margin: 8px 0;\n"]))),l=h.ZP.p(c||(c=(0,f.Z)(["\n  margin: 0;\n"]))),x=e(184),m=function(){var n=(0,s.useState)([]),t=(0,i.Z)(n,2),e=t[0],r=t[1],a=(0,o.UO)().movieId;return(0,s.useEffect)((function(){(0,p.zv)(a).then((function(n){return r(n.cast)}))}),[a]),(0,x.jsx)(g,{children:e.length>0?e.map((function(n){var t=n.id,e=n.name,r=n.profile_path,a=n.character;return(0,x.jsxs)(d,{children:[(0,x.jsx)("img",{src:r?"https://image.tmdb.org/t/p/w200".concat(r):"http://www.suryalaya.org/images/no_image.jpg",alt:"actor",loading:"lazy",width:120,height:180}),(0,x.jsx)(v,{children:e}),(0,x.jsxs)(l,{children:[" Character: ",a]})]},t)})):"Sorry, there isn't any info :("})}}}]);
//# sourceMappingURL=387.d4e0d946.chunk.js.map