"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[7],{681:function(A,n,t){t.d(n,{S3:function(){return s},Wp:function(){return e},gH:function(){return o},lg:function(){return u},yK:function(){return a}});var r="https://api.themoviedb.org/3/",c={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNWI2YTMyNmIzZDU3ZTE3ZjVhZjFlMGFlNzJlNDZjNCIsInN1YiI6IjY0N2U0MmZkY2Y0YjhiMDEyMjc3NDM5NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eU3geUgU7gdfdJgShq8FOWYPDmv3QE_A54hAo9Hzl64"}},e=function(){var A="".concat(r,"trending/all/day?language=en-US");return fetch(A,c).then((function(A){return A.json()}))},a=function(A){var n="".concat(r,"movie/").concat(A,"?language=en-US");return fetch(n,c).then((function(A){return A.json()}))},s=function(A){var n="".concat(r,"movie/").concat(A,"/credits?language=en-US");return fetch(n,c).then((function(A){return A.json()}))},u=function(A){var n="".concat(r,"movie/").concat(A,"/reviews?language=en-US&page=1");return fetch(n,c).then((function(A){return A.json()}))},o=function(A){var n="".concat(r,"search/movie?query=").concat(A,"&include_adult=false&language=en-US&page=1");return fetch(n,c).then((function(A){return A.json()}))}},7:function(A,n,t){t.r(n),t.d(n,{default:function(){return f}});var r=t(439),c=t(681),e=t(791),a=t(689),s="Cast_cast__m5y0R",u="Cast_Img__iIIvK",o="Cast_ulCast__xW1Pa",i=t(184),l=function(A){var n=A.cast;return(0,i.jsxs)("div",{className:s,children:[(0,i.jsx)("img",{className:u,src:n.profile_path?"https://image.tmdb.org/t/p/original/".concat(n.profile_path):"data:image/jpeg;base64,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",alt:n.name}),(0,i.jsx)("h3",{children:n.name}),(0,i.jsxs)("span",{children:["Character: ",n.character]})]})},y=t(639),f=function(){var A=(0,a.UO)().movieId,n=(0,e.useState)(!1),t=(0,r.Z)(n,2),s=t[0],u=t[1],f=(0,e.useState)(),S=(0,r.Z)(f,2),v=S[0],p=S[1];return(0,e.useEffect)((function(){u(!0),(0,c.S3)(A).then((function(A){return p(A)})).catch((function(A){console.log(A)})).finally(u(!1))}),[A]),s?(0,i.jsx)(y.a,{}):(0,i.jsx)("ul",{className:o,children:null===v||void 0===v?void 0:v.cast.map((function(A){return(0,i.jsx)("li",{children:(0,i.jsx)(l,{cast:A})},A.id)}))})}}}]);
//# sourceMappingURL=7.53ad47d2.chunk.js.map