(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{1175:function(e,a,t){"use strict";t.r(a);var n=t(902),l=t(2),r=t.n(l),c=t(893),o=t(894),s=t(896),i=t(898),u=t(897),m=t(925),d=t(926),f=t(907),p=t(901);a.default=function(e){var a=Object(l.useState)(""),t=Object(n.a)(a,2),b=t[0],E=t[1],g=Object(l.useState)(""),v=Object(n.a)(g,2),h=v[0],y=v[1],j=Object(l.useState)(""),x=Object(n.a)(j,2),O=x[0],N=x[1],k=Object(l.useState)(""),M=Object(n.a)(k,2),F=M[0],w=M[1],z=Object(l.useState)("Hel trafik"),R=Object(n.a)(z,2),T=R[0],C=R[1],q=Object(l.useState)("100-500"),P=Object(n.a)(q,2),S=P[0],H=P[1],K=Object(l.useState)("Hel\xe5r"),A=Object(n.a)(K,2),B=A[0],G=A[1],I=Object(l.useState)(!0),V=Object(n.a)(I,2),D=V[0],J=V[1],L=function(e,a){"regNo"===e?E(a.target.value):"personNo"===e?y(a.target.value):"email"===e?N(a.target.value):"phone"===e?w(a.target.value):"d1"===e?C(a.target.value):"d2"===e?H(a.target.value):"d3"===e&&G(a.target.value)};return r.a.createElement("div",{className:"animated fadeIn"},D&&r.a.createElement(c.a,null,r.a.createElement(o.a,{xs:"12",sm:"6"},r.a.createElement(s.a,null,r.a.createElement(i.a,null,r.a.createElement("strong",null,"R\xe4kna & K\xf6p Bilf\xf6rs\xe4kring\u200b")),r.a.createElement(u.a,null,r.a.createElement(c.a,null,r.a.createElement(o.a,{xs:"12"},r.a.createElement(m.a,null,r.a.createElement(d.a,{htmlFor:"name"},"Registration Number"),r.a.createElement(f.a,{type:"text",value:b,onChange:function(e){L("regNo",e)},id:"cu-name",placeholder:"Enter Registration Number",required:!0})))),r.a.createElement(c.a,null,r.a.createElement(o.a,{xs:"12"},r.a.createElement(m.a,null,r.a.createElement(d.a,{htmlFor:"ccnumber"},"Person Number\u200b"),r.a.createElement(f.a,{type:"text",value:h,onChange:function(e){L("personNo",e)},id:"cu-address",placeholder:"Enter Person Number",required:!0})))),r.a.createElement(c.a,null,r.a.createElement(o.a,{xs:"12"},r.a.createElement(m.a,null,r.a.createElement(d.a,{htmlFor:"select"},"V\xe4lj F\xf6rs\xe4kringstyp\u200b"),r.a.createElement(f.a,{type:"select",name:"select",id:"select",value:T,onChange:function(e){L("d1",e)}},r.a.createElement("option",{value:"Hel trafik"},"Hel trafik"),r.a.createElement("option",{value:"Halv  trafik"},"Halv  trafik"))))),r.a.createElement(c.a,null,r.a.createElement(o.a,{xs:"12"},r.a.createElement(m.a,null,r.a.createElement(d.a,{htmlFor:"select"},"V\xe4lj trolig K\xf6rstr\xe4cka per \xe5r\u200b\u200b"),r.a.createElement(f.a,{type:"select",name:"select",id:"select",value:S,onChange:function(e){L("d2",e)}},r.a.createElement("option",{value:"100-500"},"100-500"),r.a.createElement("option",{value:"500-1000"},"500-1000"),r.a.createElement("option",{value:"1000-1500"},"1000-1500"),r.a.createElement("option",{value:"1500-2000"},"1500-2000"),r.a.createElement("option",{value:"2000-3000"},"2000-3000"))))),r.a.createElement(c.a,null,r.a.createElement(o.a,{xs:"12"},r.a.createElement(m.a,null,r.a.createElement(d.a,{htmlFor:"select"},"Betalningss\xe4tt\u200b\u200b\u200b"),r.a.createElement(f.a,{type:"select",name:"select",id:"select",value:B,onChange:function(e){L("d3",e)}},r.a.createElement("option",{value:"Hel\xe5r"},"Hel\xe5r"),r.a.createElement("option",{value:"Halv\xe5r"},"Halv\xe5r"),r.a.createElement("option",{value:"Kvartal"},"Kvartal"),r.a.createElement("option",{value:"M\xe5nads"},"M\xe5nads")))))))),r.a.createElement(o.a,{xs:"12",sm:"6"},r.a.createElement(s.a,null,r.a.createElement(i.a,null,r.a.createElement("strong",null,"Kontakt uppgifter (Frivilligt)\u200b")),r.a.createElement(u.a,null,r.a.createElement(c.a,null,r.a.createElement(o.a,{xs:"12"},r.a.createElement(m.a,null,r.a.createElement(d.a,{htmlFor:"name"},"Email"),r.a.createElement(f.a,{type:"text",value:O,onChange:function(e){L("email",e)},id:"cu-name",placeholder:"Enter email",required:!0})))),r.a.createElement(c.a,null,r.a.createElement(o.a,{xs:"12"},r.a.createElement(m.a,null,r.a.createElement(d.a,{htmlFor:"ccnumber"},"Telefon Number\u200b"),r.a.createElement(f.a,{type:"text",value:F,onChange:function(e){L("phone",e)},id:"cu-address",placeholder:"Enter Telephone Number",required:!0}))))))),r.a.createElement("div",{className:"bottom-button-container"},r.a.createElement(p.a,{color:"primary",className:"text-center",onClick:function(){return J(!1)}},"N\xe4sta"))),!D&&r.a.createElement(c.a,null,r.a.createElement(o.a,{xs:"12",sm:"6"},r.a.createElement(s.a,null,r.a.createElement(i.a,null,r.a.createElement("strong",null,"F\xf6rs\xe4krings information\u200b")),r.a.createElement(u.a,null,r.a.createElement(c.a,null,r.a.createElement(o.a,{xs:"12"},r.a.createElement(m.a,null,r.a.createElement(d.a,{htmlFor:"name"},"F\xf6rs\xe4krings bolag"),r.a.createElement(f.a,{type:"text",disabled:!0,value:"Sport & Mc f\xf6rs\xe4kring\u200b",required:!0})))),r.a.createElement(c.a,null,r.a.createElement(o.a,{xs:"12"},r.a.createElement(m.a,null,r.a.createElement(d.a,{htmlFor:"name"},"F\xf6rs\xe4kringstyp"),r.a.createElement(f.a,{type:"text",disabled:!0,value:"Helf\xf6rs\xe4kring",required:!0})))),r.a.createElement(c.a,null,r.a.createElement(o.a,{xs:"12"},r.a.createElement(m.a,null,r.a.createElement(d.a,{htmlFor:"name"},"K\xf6rstr\xe4cka"),r.a.createElement(f.a,{type:"text",disabled:!0,value:"1000-1500mil\u200b",required:!0})))),r.a.createElement(c.a,null,r.a.createElement(o.a,{xs:"12"},r.a.createElement(m.a,null,r.a.createElement(d.a,{htmlFor:"name"},"Betalningss\xe4tt"),r.a.createElement(f.a,{type:"text",disabled:!0,value:"M\xe5nadsvis\u200b",required:!0}))))))),r.a.createElement(o.a,{xs:"12",sm:"6"},r.a.createElement(s.a,null,r.a.createElement(i.a,null,r.a.createElement("strong",null,"Personuppgifter\u200b")),r.a.createElement(u.a,null,r.a.createElement(c.a,null,r.a.createElement(o.a,{xs:"12"},r.a.createElement(m.a,null,r.a.createElement(d.a,{htmlFor:"name"},"Namn"),r.a.createElement(f.a,{type:"text",disabled:!0,value:"Anders Andersson\u200b",required:!0})))),r.a.createElement(c.a,null,r.a.createElement(o.a,{xs:"12"},r.a.createElement(m.a,null,r.a.createElement(d.a,{htmlFor:"name"},"Person nr"),r.a.createElement(f.a,{type:"text",disabled:!0,value:"19450404-xxxx\u200b",required:!0})))),r.a.createElement(c.a,null,r.a.createElement(o.a,{xs:"12"},r.a.createElement(m.a,null,r.a.createElement(d.a,{htmlFor:"name"},"Adress"),r.a.createElement(f.a,{type:"text",disabled:!0,value:"Fridenborgsgatan 44, 113 44, Stockholm\u200b",required:!0})))))))),!D&&r.a.createElement(c.a,null,r.a.createElement(o.a,{xs:"12",sm:"6"},r.a.createElement(s.a,null,r.a.createElement(i.a,null,r.a.createElement("strong",null,"Fordons information\u200b")),r.a.createElement(u.a,null,r.a.createElement(c.a,null,r.a.createElement(o.a,{xs:"12"},r.a.createElement(m.a,null,r.a.createElement(d.a,{htmlFor:"name"},"Registrerings nr"),r.a.createElement(f.a,{type:"text",disabled:!0,value:"EER 28E\u200b",required:!0})))),r.a.createElement(c.a,null,r.a.createElement(o.a,{xs:"12"},r.a.createElement(m.a,null,r.a.createElement(d.a,{htmlFor:"name"},"Fabrikat & Modell"),r.a.createElement(f.a,{type:"text",disabled:!0,value:"1123",required:!0}))))))),r.a.createElement(o.a,{xs:"12",sm:"6"},r.a.createElement(s.a,null,r.a.createElement(i.a,null,r.a.createElement("strong",null,"Kontaktuppgifter (Frivilligt)\u200b")),r.a.createElement(u.a,null,r.a.createElement(c.a,null,r.a.createElement(o.a,{xs:"12"},r.a.createElement(m.a,null,r.a.createElement(d.a,{htmlFor:"name"},"Email"),r.a.createElement(f.a,{type:"text",disabled:!0,value:"oihag@hotmail.com",required:!0})))),r.a.createElement(c.a,null,r.a.createElement(o.a,{xs:"12"},r.a.createElement(m.a,null,r.a.createElement(d.a,{htmlFor:"name"},"Telefon nr"),r.a.createElement(f.a,{type:"text",disabled:!0,value:"070-000 00 05\u200b\u200b",required:!0})))))))),!D&&r.a.createElement("div",{className:"bottom-button-container"},r.a.createElement(p.a,{color:"danger",className:"text-center",onClick:function(){return e.history.push("/dashboard")}},"Bekr\xe4fta & Teckna f\xf6rs\xe4kring\u200b")))}},890:function(e,a){e.exports=function(e){var a=typeof e;return!!e&&("object"==a||"function"==a)}},893:function(e,a,t){"use strict";var n=t(36),l=t(102),r=t(2),c=t.n(r),o=t(28),s=t.n(o),i=t(888),u=t.n(i),m=t(889),d={tag:m.p,noGutters:s.a.bool,className:s.a.string,cssModule:s.a.object,form:s.a.bool},f=function(e){var a=e.className,t=e.cssModule,r=e.noGutters,o=e.tag,s=e.form,i=Object(l.a)(e,["className","cssModule","noGutters","tag","form"]),d=Object(m.l)(u()(a,r?"no-gutters":null,s?"form-row":"row"),t);return c.a.createElement(o,Object(n.a)({},i,{className:d}))};f.propTypes=d,f.defaultProps={tag:"div"},a.a=f},894:function(e,a,t){"use strict";var n=t(36),l=t(102),r=t(890),c=t.n(r),o=t(2),s=t.n(o),i=t(28),u=t.n(i),m=t(888),d=t.n(m),f=t(889),p=u.a.oneOfType([u.a.number,u.a.string]),b=u.a.oneOfType([u.a.bool,u.a.number,u.a.string,u.a.shape({size:u.a.oneOfType([u.a.bool,u.a.number,u.a.string]),order:p,offset:p})]),E={tag:f.p,xs:b,sm:b,md:b,lg:b,xl:b,className:u.a.string,cssModule:u.a.object,widths:u.a.array},g={tag:"div",widths:["xs","sm","md","lg","xl"]},v=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},h=function(e){var a=e.className,t=e.cssModule,r=e.widths,o=e.tag,i=Object(l.a)(e,["className","cssModule","widths","tag"]),u=[];r.forEach(function(a,n){var l=e[a];if(delete i[a],l||""===l){var r=!n;if(c()(l)){var o,s=r?"-":"-"+a+"-",m=v(r,a,l.size);u.push(Object(f.l)(d()(((o={})[m]=l.size||""===l.size,o["order"+s+l.order]=l.order||0===l.order,o["offset"+s+l.offset]=l.offset||0===l.offset,o)),t))}else{var p=v(r,a,l);u.push(p)}}}),u.length||u.push("col");var m=Object(f.l)(d()(a,u),t);return s.a.createElement(o,Object(n.a)({},i,{className:m}))};h.propTypes=E,h.defaultProps=g,a.a=h},896:function(e,a,t){"use strict";var n=t(36),l=t(102),r=t(2),c=t.n(r),o=t(28),s=t.n(o),i=t(888),u=t.n(i),m=t(889),d={tag:m.p,inverse:s.a.bool,color:s.a.string,body:s.a.bool,outline:s.a.bool,className:s.a.string,cssModule:s.a.object,innerRef:s.a.oneOfType([s.a.object,s.a.string,s.a.func])},f=function(e){var a=e.className,t=e.cssModule,r=e.color,o=e.body,s=e.inverse,i=e.outline,d=e.tag,f=e.innerRef,p=Object(l.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),b=Object(m.l)(u()(a,"card",!!s&&"text-white",!!o&&"card-body",!!r&&(i?"border":"bg")+"-"+r),t);return c.a.createElement(d,Object(n.a)({},p,{className:b,ref:f}))};f.propTypes=d,f.defaultProps={tag:"div"},a.a=f},897:function(e,a,t){"use strict";var n=t(36),l=t(102),r=t(2),c=t.n(r),o=t(28),s=t.n(o),i=t(888),u=t.n(i),m=t(889),d={tag:m.p,className:s.a.string,cssModule:s.a.object,innerRef:s.a.oneOfType([s.a.object,s.a.string,s.a.func])},f=function(e){var a=e.className,t=e.cssModule,r=e.innerRef,o=e.tag,s=Object(l.a)(e,["className","cssModule","innerRef","tag"]),i=Object(m.l)(u()(a,"card-body"),t);return c.a.createElement(o,Object(n.a)({},s,{className:i,ref:r}))};f.propTypes=d,f.defaultProps={tag:"div"},a.a=f},898:function(e,a,t){"use strict";var n=t(36),l=t(102),r=t(2),c=t.n(r),o=t(28),s=t.n(o),i=t(888),u=t.n(i),m=t(889),d={tag:m.p,className:s.a.string,cssModule:s.a.object},f=function(e){var a=e.className,t=e.cssModule,r=e.tag,o=Object(l.a)(e,["className","cssModule","tag"]),s=Object(m.l)(u()(a,"card-header"),t);return c.a.createElement(r,Object(n.a)({},o,{className:s}))};f.propTypes=d,f.defaultProps={tag:"div"},a.a=f},901:function(e,a,t){"use strict";var n=t(36),l=t(102),r=t(892),c=t(64),o=t(2),s=t.n(o),i=t(28),u=t.n(i),m=t(888),d=t.n(m),f=t(889),p={active:u.a.bool,"aria-label":u.a.string,block:u.a.bool,color:u.a.string,disabled:u.a.bool,outline:u.a.bool,tag:f.p,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),onClick:u.a.func,size:u.a.string,children:u.a.node,className:u.a.string,cssModule:u.a.object,close:u.a.bool},b=function(e){function a(a){var t;return(t=e.call(this,a)||this).onClick=t.onClick.bind(Object(r.a)(t)),t}Object(c.a)(a,e);var t=a.prototype;return t.onClick=function(e){this.props.disabled?e.preventDefault():this.props.onClick&&this.props.onClick(e)},t.render=function(){var e=this.props,a=e.active,t=e["aria-label"],r=e.block,c=e.className,o=e.close,i=e.cssModule,u=e.color,m=e.outline,p=e.size,b=e.tag,E=e.innerRef,g=Object(l.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);o&&"undefined"===typeof g.children&&(g.children=s.a.createElement("span",{"aria-hidden":!0},"\xd7"));var v="btn"+(m?"-outline":"")+"-"+u,h=Object(f.l)(d()(c,{close:o},o||"btn",o||v,!!p&&"btn-"+p,!!r&&"btn-block",{active:a,disabled:this.props.disabled}),i);g.href&&"button"===b&&(b="a");var y=o?"Close":null;return s.a.createElement(b,Object(n.a)({type:"button"===b&&g.onClick?"button":void 0},g,{className:h,ref:E,onClick:this.onClick,"aria-label":t||y}))},a}(s.a.Component);b.propTypes=p,b.defaultProps={color:"secondary",tag:"button"},a.a=b},902:function(e,a,t){"use strict";function n(e,a){return function(e){if(Array.isArray(e))return e}(e)||function(e,a){var t=[],n=!0,l=!1,r=void 0;try{for(var c,o=e[Symbol.iterator]();!(n=(c=o.next()).done)&&(t.push(c.value),!a||t.length!==a);n=!0);}catch(s){l=!0,r=s}finally{try{n||null==o.return||o.return()}finally{if(l)throw r}}return t}(e,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t.d(a,"a",function(){return n})},907:function(e,a,t){"use strict";var n=t(36),l=t(102),r=t(892),c=t(64),o=t(2),s=t.n(o),i=t(28),u=t.n(i),m=t(888),d=t.n(m),f=t(889),p={children:u.a.node,type:u.a.string,size:u.a.string,bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:f.p,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},b=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(r.a)(t)),t.focus=t.focus.bind(Object(r.a)(t)),t}Object(c.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,r=e.type,c=e.bsSize,o=e.valid,i=e.invalid,u=e.tag,m=e.addon,p=e.plaintext,b=e.innerRef,E=Object(l.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),g=["radio","checkbox"].indexOf(r)>-1,v=new RegExp("\\D","g"),h=u||("select"===r||"textarea"===r?r:"input"),y="form-control";p?(y+="-plaintext",h=u||"input"):"file"===r?y+="-file":g&&(y=m?null:"form-check-input"),E.size&&v.test(E.size)&&(Object(f.r)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),c=E.size,delete E.size);var j=Object(f.l)(d()(a,i&&"is-invalid",o&&"is-valid",!!c&&"form-control-"+c,y),t);return("input"===h||u&&"function"===typeof u)&&(E.type=r),E.children&&!p&&"select"!==r&&"string"===typeof h&&"select"!==h&&(Object(f.r)('Input with a type of "'+r+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete E.children),s.a.createElement(h,Object(n.a)({},E,{ref:b,className:j}))},a}(s.a.Component);b.propTypes=p,b.defaultProps={type:"text"},a.a=b},925:function(e,a,t){"use strict";var n=t(36),l=t(102),r=t(2),c=t.n(r),o=t(28),s=t.n(o),i=t(888),u=t.n(i),m=t(889),d={children:s.a.node,row:s.a.bool,check:s.a.bool,inline:s.a.bool,disabled:s.a.bool,tag:m.p,className:s.a.string,cssModule:s.a.object},f=function(e){var a=e.className,t=e.cssModule,r=e.row,o=e.disabled,s=e.check,i=e.inline,d=e.tag,f=Object(l.a)(e,["className","cssModule","row","disabled","check","inline","tag"]),p=Object(m.l)(u()(a,!!r&&"row",s?"form-check":"form-group",!(!s||!i)&&"form-check-inline",!(!s||!o)&&"disabled"),t);return c.a.createElement(d,Object(n.a)({},f,{className:p}))};f.propTypes=d,f.defaultProps={tag:"div"},a.a=f},926:function(e,a,t){"use strict";var n=t(36),l=t(102),r=t(2),c=t.n(r),o=t(28),s=t.n(o),i=t(888),u=t.n(i),m=t(890),d=t.n(m),f=t(889),p=s.a.oneOfType([s.a.number,s.a.string]),b=s.a.oneOfType([s.a.string,s.a.number,s.a.shape({size:p,order:p,offset:p})]),E={children:s.a.node,hidden:s.a.bool,check:s.a.bool,size:s.a.string,for:s.a.string,tag:f.p,className:s.a.string,cssModule:s.a.object,xs:b,sm:b,md:b,lg:b,xl:b,widths:s.a.array},g={tag:"label",widths:["xs","sm","md","lg","xl"]},v=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},h=function(e){var a=e.className,t=e.cssModule,r=e.hidden,o=e.widths,s=e.tag,i=e.check,m=e.size,p=e.for,b=Object(l.a)(e,["className","cssModule","hidden","widths","tag","check","size","for"]),E=[];o.forEach(function(a,n){var l=e[a];if(delete b[a],l||""===l){var r,c=!n;if(d()(l)){var o,s=c?"-":"-"+a+"-";r=v(c,a,l.size),E.push(Object(f.l)(u()(((o={})[r]=l.size||""===l.size,o["order"+s+l.order]=l.order||0===l.order,o["offset"+s+l.offset]=l.offset||0===l.offset,o))),t)}else r=v(c,a,l),E.push(r)}});var g=Object(f.l)(u()(a,!!r&&"sr-only",!!i&&"form-check-label",!!m&&"col-form-label-"+m,E,!!E.length&&"col-form-label"),t);return c.a.createElement(s,Object(n.a)({htmlFor:p},b,{className:g}))};h.propTypes=E,h.defaultProps=g,a.a=h}}]);
//# sourceMappingURL=20.94e2216e.chunk.js.map