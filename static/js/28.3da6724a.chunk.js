(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{1190:function(e,t,a){"use strict";a.r(t);var n=a(967),c=a(902),r=a(2),l=a.n(r),s=a(893),o=a(894),i=a(896),u=a(898),m=a(897),d=a(936),f=a(937),g=a(925),p=a(926),b=a(907),h=a(921),E=a(922),v=a(903),j=a(908),y=a(901),N=a(920),O=a(966),x=a(997),S=a.n(x),w=a(998),q=a(904);var k=function(e){var t=e.image?"data:image/jpeg;base64, "+e.image:"../../assets/img/no-image.png";return l.a.createElement(o.a,{xs:"12",sm:"6",md:"4",lg:"4",xl:"3"},l.a.createElement(i.a,null," ",l.a.createElement(m.a,null,l.a.createElement("div",{className:"text-center"},l.a.createElement("img",{src:t,height:"100"})),l.a.createElement("br",null),l.a.createElement("p",{className:"text-lg-primary m-0"},e.name),l.a.createElement("p",{className:"m-0"},e.quantity," ",l.a.createElement("small",{className:"text-muted"},"items")),l.a.createElement("p",{className:"m-0"},e.price*e.quantity," ",l.a.createElement("small",{className:"text-muted"},"SEK"))),l.a.createElement(y.a,{onClick:function(){return e.deleteProduct(e.id)},color:"danger",block:!0},"Remove")))},P=a(142);t.default=function(e){var t=Object(P.d)(),a=Object(r.useState)([]),x=Object(c.a)(a,2),C=x[0],z=x[1],M=Object(r.useState)([]),T=Object(c.a)(M,2),I=T[0],A=T[1],R=Object(r.useState)({}),F=Object(c.a)(R,2),U=F[0],D=F[1],L=Object(r.useState)({}),J=Object(c.a)(L,2),K=J[0],W=J[1],$=Object(r.useState)([]),B=Object(c.a)($,2),G=B[0],H=B[1],Q=Object(r.useState)(!0),V=Object(c.a)(Q,2),X=V[0],Y=V[1],Z=Object(r.useState)(!0),_=Object(c.a)(Z,2),ee=(_[0],_[1]),te=Object(r.useState)(!1),ae=Object(c.a)(te,2),ne=ae[0],ce=ae[1],re=Object(r.useState)(1),le=Object(c.a)(re,2),se=le[0],oe=le[1],ie=Object(r.useState)(8),ue=Object(c.a)(ie,1)[0],me=Object(r.useState)(0),de=Object(c.a)(me,2),fe=de[0],ge=de[1],pe=Object(r.useState)(""),be=Object(c.a)(pe,2),he=be[0],Ee=be[1],ve=Object(r.useState)(0),je=Object(c.a)(ve,2),ye=je[0],Ne=je[1],Oe=Object(r.useRef)(Object(w.debounce)(function(e,t,a){return Se(e,t,a)},500)).current;Object(r.useEffect)(function(){Oe(he,se)},[Oe,se,he]),Object(r.useEffect)(function(){xe()},[]);var xe=function(){fetch(q.i).then(function(e){return e.json()}).then(function(e){console.log("Units: ",e),ee(!1),A(e),e.length>1&&(D(e[0]),W(e[1]))}).catch(function(e){ee(!1),console.log("Fetch units error: ",e)})},Se=function(e,t,a){fetch(q.f+"?query="+e+"&size="+ue+"&page="+(t-1)+"&sort=name").then(function(e){return e.json()}).then(function(t){e===t.query&&(console.log("Products: ",t.result),Y(!1),z(t.result.content),ge(t.result.totalElements))}).catch(function(e){Y(!1),console.log("Fetch products error: ",e)})},we=function(e,t){if(""!==t){var a=C.find(function(t){return t.id===e});console.log(a);var c=G.findIndex(function(t){return t.id===e});if(-1!==c){var r=G.find(function(t){return t.id===e});r.quantity=r.quantity+parseInt(t),G[c]=r,H(Object(n.a)(G))}else a.quantity=parseInt(t),H([].concat(Object(n.a)(G),[a]));console.log("Price: ",ye+a.price*t),console.log("Added products: ",G),Ne(ye+a.price*t)}},qe=function(e){var t=G.findIndex(function(t){return t.id===e}),a=G[t];Ne(ye-a.price*a.quantity),console.log(e,t),G.splice(t,1),console.log("Products: ",G),H(Object(n.a)(G))},ke=function(e,t){if("selectedToUnit"===e){console.log("value: ",t.target.value);var a=I.find(function(e){return e.id==t.target.value});console.log("to unit: ",a),W(a)}else if("selectedFromUnit"===e){console.log("value: ",t.target.value);var n=I.find(function(e){return e.id==t.target.value});console.log("from unit: ",n),D(n)}};return l.a.createElement("div",{className:"animated fadeIn"},l.a.createElement(s.a,null,l.a.createElement(o.a,{xl:6},l.a.createElement(i.a,null,l.a.createElement(u.a,{className:"align-items-center"},l.a.createElement("i",{className:"fa fa-align-justify"}),l.a.createElement("span",null,"Products")),l.a.createElement(m.a,null,I.length<2&&l.a.createElement("div",{className:"text-center"},l.a.createElement(d.a,null,l.a.createElement(f.a,{action:!0,color:"danger"},"At least 2 Units must exist for transferring products"))),I.length>1&&l.a.createElement("div",null,l.a.createElement(g.a,{row:!0},l.a.createElement(o.a,{md:"3"},l.a.createElement(p.a,{htmlFor:"selectSm"},"From")),l.a.createElement(o.a,{xs:"12",md:"9"},l.a.createElement(b.a,{type:"select",value:U.id,onChange:function(e){ke("selectedFromUnit",e)},name:"selectSm",id:"SelectLm",bsSize:"sm"},I.map(function(e,t){return l.a.createElement("option",{key:t,value:e.id},e.name)})))),l.a.createElement(g.a,{row:!0},l.a.createElement(o.a,{md:"3"},l.a.createElement(p.a,{htmlFor:"selectSm"},"To")),l.a.createElement(o.a,{xs:"12",md:"9"},l.a.createElement(b.a,{type:"select",value:K.id,onChange:function(e){ke("selectedToUnit",e)},name:"selectSm",id:"SelectLm",bsSize:"sm"},I.map(function(e,t){return l.a.createElement("option",{key:t,value:e.id},e.name)})))),l.a.createElement(h.a,{className:"input-prepend"},l.a.createElement(E.a,{addonType:"prepend"},l.a.createElement(v.a,null,l.a.createElement("i",{className:"fa fa-search"}))),l.a.createElement(b.a,{value:he,size:"16",type:"text",onChange:function(e){return function(e){Y(!0),Ee(e.target.value)}(e)},placeholder:"What are you looking for?"})),l.a.createElement("br",null),X&&l.a.createElement("div",{className:"loader-container"},l.a.createElement(N.CircleLoader,{size:100,color:"#20a8d8",loading:X})),!X&&0===C.length&&l.a.createElement("div",{className:"text-center"},l.a.createElement("img",{src:"../../assets/img/not-found.png",height:"150"}),l.a.createElement("p",{className:"font-weight-bold"},"Nothing found")),C.length>0&&!X&&l.a.createElement(s.a,null,C.map(function(t,a){return l.a.createElement(O.a,{key:a,id:t.id,image:t.image,name:t.name,quantity:t.quantity,price:t.price,history:e.history,transfer:!0,addProduct:we})})),!X&&C.length>0&&l.a.createElement("div",{className:"text-center products-pagination"},l.a.createElement(S.a,{activePage:se,totalItemsCount:fe,itemsCountPerPage:ue,pageRangeDisplayed:5,onChange:function(e){return function(e){e!==se&&(console.log("Number: ",e),Y(!0),oe(e))}(e)},itemClass:"page-item",linkClass:"page-link"})))))),l.a.createElement(o.a,{xl:6},l.a.createElement(i.a,null,l.a.createElement(u.a,{className:"align-items-center"},l.a.createElement("i",{className:"fa fa-align-justify"}),l.a.createElement("span",null,"Added Products")),l.a.createElement(m.a,null,G.length>0&&l.a.createElement("p",{className:"font-2xl"},"Total: ",ye," ",l.a.createElement("small",{className:"text-muted"},"SEK")),0===G.length&&l.a.createElement("div",{className:"text-center"},l.a.createElement("img",{src:"../../assets/img/not-found.png",height:"150"}),l.a.createElement("p",{className:"font-weight-bold"},"No product added")),G.length>0&&l.a.createElement(s.a,null,G.map(function(t,a){return l.a.createElement(k,{key:a,id:t.id,image:t.image,name:t.name,quantity:t.quantity,price:t.price,history:e.history,deleteProduct:qe})}))),G.length>0&&l.a.createElement(j.a,{className:"d-flex"},l.a.createElement(y.a,{disabled:ne,type:"submit",onClick:function(){if(U===K)t.show("Can not request from same unit. Please choose different units",{timeout:5e3,type:"error"});else{ce(!0);var a=[];G.forEach(function(e){var t={productId:e.id,quantityRequested:e.quantity,quantityReceived:e.quantity,totalPriceRequested:e.quantity*e.price,totalPriceReceived:e.quantity*e.price};a.push(t)});var n={fromUnitId:U.id,toUnitId:K.id,totalPrice:ye,products:a};console.log("Request: ",n),fetch(q.c,{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(n)}).then(function(e){return e.json()}).then(function(a){ce(!1),t.show("Product transferred successfully",{timeout:3e3,type:"success"}),console.log("Product transferred successfully: ",a),e.history.push("/dashboard")}).catch(function(e){ce(!1),console.log("Error while requesting product transfer",e),t.show("Error while requesting product transfer",{timeout:5e3,type:"error"})})}},size:"sm",color:"primary"},l.a.createElement("i",{className:"fa fa-dot-circle-o"}),"Submit Request"),l.a.createElement("div",{className:"ml-2"},l.a.createElement(N.CircleLoader,{size:25,color:"#20a8d8",loading:ne})))))))}},904:function(e,t,a){"use strict";a.d(t,"i",function(){return c}),a.d(t,"h",function(){return r}),a.d(t,"e",function(){return l}),a.d(t,"f",function(){return s}),a.d(t,"a",function(){return o}),a.d(t,"g",function(){return i}),a.d(t,"d",function(){return u}),a.d(t,"c",function(){return m}),a.d(t,"b",function(){return d});var n="http://localhost:8080/",c=n+"units",r=n+"products",l=r+"/quantity",s=r+"/search",o=n+"products/create",i=n+"products/transfers",u=n+"products/invoices",m=u+"/create",d=u+"/confirm"},908:function(e,t,a){"use strict";var n=a(36),c=a(102),r=a(2),l=a.n(r),s=a(28),o=a.n(s),i=a(888),u=a.n(i),m=a(889),d={tag:m.p,className:o.a.string,cssModule:o.a.object},f=function(e){var t=e.className,a=e.cssModule,r=e.tag,s=Object(c.a)(e,["className","cssModule","tag"]),o=Object(m.l)(u()(t,"card-footer"),a);return l.a.createElement(r,Object(n.a)({},s,{className:o}))};f.propTypes=d,f.defaultProps={tag:"div"},t.a=f},925:function(e,t,a){"use strict";var n=a(36),c=a(102),r=a(2),l=a.n(r),s=a(28),o=a.n(s),i=a(888),u=a.n(i),m=a(889),d={children:o.a.node,row:o.a.bool,check:o.a.bool,inline:o.a.bool,disabled:o.a.bool,tag:m.p,className:o.a.string,cssModule:o.a.object},f=function(e){var t=e.className,a=e.cssModule,r=e.row,s=e.disabled,o=e.check,i=e.inline,d=e.tag,f=Object(c.a)(e,["className","cssModule","row","disabled","check","inline","tag"]),g=Object(m.l)(u()(t,!!r&&"row",o?"form-check":"form-group",!(!o||!i)&&"form-check-inline",!(!o||!s)&&"disabled"),a);return l.a.createElement(d,Object(n.a)({},f,{className:g}))};f.propTypes=d,f.defaultProps={tag:"div"},t.a=f},926:function(e,t,a){"use strict";var n=a(36),c=a(102),r=a(2),l=a.n(r),s=a(28),o=a.n(s),i=a(888),u=a.n(i),m=a(890),d=a.n(m),f=a(889),g=o.a.oneOfType([o.a.number,o.a.string]),p=o.a.oneOfType([o.a.string,o.a.number,o.a.shape({size:g,order:g,offset:g})]),b={children:o.a.node,hidden:o.a.bool,check:o.a.bool,size:o.a.string,for:o.a.string,tag:f.p,className:o.a.string,cssModule:o.a.object,xs:p,sm:p,md:p,lg:p,xl:p,widths:o.a.array},h={tag:"label",widths:["xs","sm","md","lg","xl"]},E=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},v=function(e){var t=e.className,a=e.cssModule,r=e.hidden,s=e.widths,o=e.tag,i=e.check,m=e.size,g=e.for,p=Object(c.a)(e,["className","cssModule","hidden","widths","tag","check","size","for"]),b=[];s.forEach(function(t,n){var c=e[t];if(delete p[t],c||""===c){var r,l=!n;if(d()(c)){var s,o=l?"-":"-"+t+"-";r=E(l,t,c.size),b.push(Object(f.l)(u()(((s={})[r]=c.size||""===c.size,s["order"+o+c.order]=c.order||0===c.order,s["offset"+o+c.offset]=c.offset||0===c.offset,s))),a)}else r=E(l,t,c),b.push(r)}});var h=Object(f.l)(u()(t,!!r&&"sr-only",!!i&&"form-check-label",!!m&&"col-form-label-"+m,b,!!b.length&&"col-form-label"),a);return l.a.createElement(o,Object(n.a)({htmlFor:g},p,{className:h}))};v.propTypes=b,v.defaultProps=h,t.a=v},936:function(e,t,a){"use strict";var n=a(36),c=a(102),r=a(2),l=a.n(r),s=a(28),o=a.n(s),i=a(888),u=a.n(i),m=a(889),d={tag:m.p,flush:o.a.bool,className:o.a.string,cssModule:o.a.object},f=function(e){var t=e.className,a=e.cssModule,r=e.tag,s=e.flush,o=Object(c.a)(e,["className","cssModule","tag","flush"]),i=Object(m.l)(u()(t,"list-group",!!s&&"list-group-flush"),a);return l.a.createElement(r,Object(n.a)({},o,{className:i}))};f.propTypes=d,f.defaultProps={tag:"ul"},t.a=f},937:function(e,t,a){"use strict";var n=a(36),c=a(102),r=a(2),l=a.n(r),s=a(28),o=a.n(s),i=a(888),u=a.n(i),m=a(889),d={tag:m.p,active:o.a.bool,disabled:o.a.bool,color:o.a.string,action:o.a.bool,className:o.a.any,cssModule:o.a.object},f=function(e){e.preventDefault()},g=function(e){var t=e.className,a=e.cssModule,r=e.tag,s=e.active,o=e.disabled,i=e.action,d=e.color,g=Object(c.a)(e,["className","cssModule","tag","active","disabled","action","color"]),p=Object(m.l)(u()(t,!!s&&"active",!!o&&"disabled",!!i&&"list-group-item-action",!!d&&"list-group-item-"+d,"list-group-item"),a);return o&&(g.onClick=f),l.a.createElement(r,Object(n.a)({},g,{className:p}))};g.propTypes=d,g.defaultProps={tag:"li"},t.a=g},966:function(e,t,a){"use strict";var n=a(902),c=a(2),r=a.n(c),l=a(894),s=a(896),o=a(897),i=a(907),u=a(898);t.a=function(e){console.log(e);var t=Object(c.useState)("1"),a=Object(n.a)(t,2),m=a[0],d=a[1],f=e.image?"data:image/jpeg;base64, "+e.image:"../../assets/img/no-image.png",g="/products/".concat(e.id),p=function(e){return!!/^\d+$/.test(e)};return r.a.createElement(l.a,{xs:"12",sm:"6",md:"4",lg:"4",xl:"4"},r.a.createElement(s.a,{onClick:function(){e.transfer||e.history.push(g)}},r.a.createElement(u.a,null,r.a.createElement("div",{className:"text-center"},r.a.createElement("img",{src:f,height:"100"}))),r.a.createElement(o.a,null,r.a.createElement("p",{className:"text-lg-primary m-0"},e.name),!e.transfer&&r.a.createElement("p",{className:"m-0"},e.quantity," ",r.a.createElement("small",{className:"text-muted"},"total items")),r.a.createElement("p",{className:"m-0"},e.price," ",r.a.createElement("small",{className:"text-muted"},"SEK / pc"))),e.transfer&&r.a.createElement("div",{className:"d-flex justify-content-between bg-primary"},r.a.createElement(i.a,{onChange:function(e){return t=e.target.value,console.log(t),void((p(t)||""===t)&&d(t));var t},value:m,className:"w-50 rounded-0 text-center",size:"16"}),r.a.createElement("span",{onClick:function(){return e.addProduct(e.id,m)},className:"w-50 text-center align-self-center pointer"},"ADD"))))}},967:function(e,t,a){"use strict";function n(e){return function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}a.d(t,"a",function(){return n})}}]);
//# sourceMappingURL=28.3da6724a.chunk.js.map