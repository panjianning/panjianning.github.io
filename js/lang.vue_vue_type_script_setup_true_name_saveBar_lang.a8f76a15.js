var e=Object.defineProperty,a=Object.defineProperties,t=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,s=(a,t,n)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[t]=n;import{d as l,u as p,T as c,R as u,a5 as i,j as g,w as y,X as d,aq as m,e as b,o as f,a as v,c as w,r as O,g as j,t as h,W as P,F as _}from"./index.df59ae70.js";const k=l({name:"saveBar"}),D=l((E=((e,a)=>{for(var t in a||(a={}))r.call(a,t)&&s(e,t,a[t]);if(n)for(var t of n(a))o.call(a,t)&&s(e,t,a[t]);return e})({},k),a(E,t({setup(e){const{locale:a}=p(),t=c("event"),n={en:"English",zh:"中文"};let r=u(Object.keys(n).map((e=>({langType:e,langName:n[e]}))));const o=i((()=>n[a.value])),s=new Event("langChange"),l=e=>{a.value=e,d(m,e),t&&t.emit("langChange",e),document.dispatchEvent(s)};return(e,a)=>{const t=b("Icon"),n=b("Button"),s=b("DropdownItem"),p=b("DropdownMenu"),c=b("Dropdown");return f(),g(c,{trigger:"click",onOnClick:l},{list:y((()=>[v(p,null,{default:y((()=>[(f(!0),w(_,null,O(P(r),(e=>(f(),g(s,{key:e.langType,name:e.langType},{default:y((()=>[j(h(e.langName),1)])),_:2},1032,["name"])))),128))])),_:1})])),default:y((()=>[v(n,{type:"text"},{default:y((()=>[j(h(P(o))+" ",1),v(t,{type:"ios-arrow-down"})])),_:1})])),_:1})}}}))));var E;export{D as _};
