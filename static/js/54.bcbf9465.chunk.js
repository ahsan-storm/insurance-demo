(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{1177:function(e,t,a){"use strict";a.r(t);var n=a(902),r=a(2),c=a.n(r),l=a(893),s=a(894),u=a(896),i=a(898),o=a(901),m=a(897),d=a(921),f=a(922),p=a(903),g=a(907),E=a(904),h=a(966),b=a(997),j=a.n(b),N=a(998),v=a(920);t.default=function(e){var t=Object(r.useState)([]),a=Object(n.a)(t,2),b=a[0],y=a[1],O=Object(r.useState)(!0),x=Object(n.a)(O,2),C=x[0],k=x[1],w=Object(r.useState)(1),S=Object(n.a)(w,2),q=S[0],P=S[1],z=Object(r.useState)(8),D=Object(n.a)(z,1)[0],I=Object(r.useState)(0),J=Object(n.a)(I,2),R=J[0],A=J[1],F=Object(r.useState)(""),K=Object(n.a)(F,2),L=K[0],T=K[1],W=Object(r.useRef)(Object(N.debounce)(function(e,t,a){return $(e,t,a)},500)).current;Object(r.useEffect)(function(){W(L,q)},[W,q,L]);var $=function(e,t,a){fetch(E.f+"?query="+e+"&size="+D+"&page="+(t-1)+"&sort=name").then(function(e){return e.json()}).then(function(t){e===t.query&&(console.log("Products: ",t.result),k(!1),y(t.result.content),A(t.result.totalElements))}).catch(function(e){k(!1),console.log("Fetch products error: ",e)})};return c.a.createElement("div",{className:"animated fadeIn"},c.a.createElement(l.a,null,c.a.createElement(s.a,{xl:12},c.a.createElement(u.a,null,c.a.createElement(i.a,{className:"align-items-center"},c.a.createElement("i",{className:"fa fa-align-justify"}),c.a.createElement("span",null,"Products"),c.a.createElement("span",{className:"float-right mb-0"},c.a.createElement(o.a,{block:!0,color:"primary",onClick:function(){return e.history.push("/products/create")},"aria-pressed":"true"},"Create"))),c.a.createElement(m.a,null,c.a.createElement(d.a,{className:"input-prepend"},c.a.createElement(f.a,{addonType:"prepend"},c.a.createElement(p.a,null,c.a.createElement("i",{className:"fa fa-search"}))),c.a.createElement(g.a,{value:L,size:"16",type:"text",onChange:function(e){return function(e){k(!0),T(e.target.value)}(e)},placeholder:"What are you looking for?"})),c.a.createElement("br",null),C&&c.a.createElement("div",{className:"loader-container"},c.a.createElement(v.CircleLoader,{size:100,color:"#20a8d8",loading:C})),!C&&0===b.length&&c.a.createElement("div",{className:"text-center"},c.a.createElement("img",{src:"../../assets/img/not-found.png",height:"150"}),c.a.createElement("p",{className:"font-weight-bold"},"Nothing found")),b.length>0&&!C&&c.a.createElement(l.a,null,b.map(function(t,a){return c.a.createElement(h.a,{key:a,id:t.id,image:t.image,name:t.name,quantity:t.quantity,price:t.price,history:e.history})})),!C&&b.length>0&&c.a.createElement("div",{className:"text-center products-pagination"},c.a.createElement(j.a,{activePage:q,totalItemsCount:R,itemsCountPerPage:D,pageRangeDisplayed:5,onChange:function(e){return function(e){e!==q&&(console.log("Number: ",e),k(!0),P(e))}(e)},itemClass:"page-item",linkClass:"page-link"})))))))}},904:function(e,t,a){"use strict";a.d(t,"i",function(){return r}),a.d(t,"h",function(){return c}),a.d(t,"e",function(){return l}),a.d(t,"f",function(){return s}),a.d(t,"a",function(){return u}),a.d(t,"g",function(){return i}),a.d(t,"d",function(){return o}),a.d(t,"c",function(){return m}),a.d(t,"b",function(){return d});var n="http://localhost:8080/",r=n+"units",c=n+"products",l=c+"/quantity",s=c+"/search",u=n+"products/create",i=n+"products/transfers",o=n+"products/invoices",m=o+"/create",d=o+"/confirm"},966:function(e,t,a){"use strict";var n=a(902),r=a(2),c=a.n(r),l=a(894),s=a(896),u=a(897),i=a(907),o=a(898);t.a=function(e){console.log(e);var t=Object(r.useState)("1"),a=Object(n.a)(t,2),m=a[0],d=a[1],f=e.image?"data:image/jpeg;base64, "+e.image:"../../assets/img/no-image.png",p="/products/".concat(e.id),g=function(e){return!!/^\d+$/.test(e)};return c.a.createElement(l.a,{xs:"12",sm:"6",md:"4",lg:"4",xl:"4"},c.a.createElement(s.a,{onClick:function(){e.transfer||e.history.push(p)}},c.a.createElement(o.a,null,c.a.createElement("div",{className:"text-center"},c.a.createElement("img",{src:f,height:"100"}))),c.a.createElement(u.a,null,c.a.createElement("p",{className:"text-lg-primary m-0"},e.name),!e.transfer&&c.a.createElement("p",{className:"m-0"},e.quantity," ",c.a.createElement("small",{className:"text-muted"},"total items")),c.a.createElement("p",{className:"m-0"},e.price," ",c.a.createElement("small",{className:"text-muted"},"SEK / pc"))),e.transfer&&c.a.createElement("div",{className:"d-flex justify-content-between bg-primary"},c.a.createElement(i.a,{onChange:function(e){return t=e.target.value,console.log(t),void((g(t)||""===t)&&d(t));var t},value:m,className:"w-50 rounded-0 text-center",size:"16"}),c.a.createElement("span",{onClick:function(){return e.addProduct(e.id,m)},className:"w-50 text-center align-self-center pointer"},"ADD"))))}}}]);
//# sourceMappingURL=54.bcbf9465.chunk.js.map