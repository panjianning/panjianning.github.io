import{f as t,u as e,g as a,h as s,i,j as l,k as n,o as r,l as o,b as d,w as h,e as u,m as c,n as p,t as f,p as g,F as m,q as v,c as _,s as y,v as b,x,I as w,y as k,z,a as $}from"./main.1d09f45e.js";import{I as M,G as j,a as E}from"./image.658740f9.js";import{_ as I,H as G,a as L}from"./lang.vue_vue_type_script_setup_true_name_lang_lang.da5ae4ca.js";const W=t=>(k("data-v-a63b2053"),t=t(),z(),t),q={class:"logo"},C=["href"],F=[W((()=>u("img",{src:L,alt:"TinyGimp"},null,-1)))],H=["href"],T=["href"],A={class:"header"},B={class:"desc"},D=["href"],J=["href"],K=W((()=>u("div",{style:{height:"16px"}},null,-1))),N=$(t({__name:"index",setup(t){e();const k=[{id:"cartoon-1",type:"text3d",tags:["cartoon"]},{id:"gold-1",type:"text3d",tags:["golden"]},{id:"cartoon-bevel-1",type:"text3d",tags:["cartoon"]},{id:"fire",type:"edit",tags:["fire"]}];for(let e of k)e.thumb||(e.thumb=`https://www.tinygimp.com/mystatic/thumb/${e.id}.png`);const z=t=>p("template/"+t.id)+"/",$=a([]),L=a(window.innerWidth),W=()=>{L.value=window.innerWidth},N=s((()=>Math.max(2,Math.floor(L.value/300)))),O=s((()=>{let t=Math.max(2,Math.floor(L.value/300));return`${Math.floor(L.value/t/2)}px`})),P=t=>{b(t).then((t=>{$.value=t})).catch((t=>{$.value=k}))};return i((()=>{window.addEventListener("resize",W),document.addEventListener("langChange",(t=>{P(t.detail.lang)}));let t=l();P(t)})),n((()=>{window.removeEventListener("resize",W)})),(t,e)=>{const a=x,s=G,i=w,l=M,n=j,b=E;return r(),o(m,null,[d(s,null,{default:h((()=>[u("div",q,[u("a",{href:c(p)("")},F,8,C)]),u("div",null,[u("a",{href:c(p)("edit/"),target:"_blank"},[d(a,{icon:"ios-link",type:"text"},{default:h((()=>[u("span",null,f(t.$t("editor")),1)])),_:1})],8,H)]),u("div",null,[u("a",{href:c(p)("text3d/"),target:"_blank"},[d(a,{icon:"ios-link",type:"text"},{default:h((()=>[u("span",null,f(t.$t("text3dGenerator")),1)])),_:1})],8,T)]),u("div",null,[d(I)])])),_:1}),u("div",A,[u("div",B,f(t.$t("doc.title").split("|")[1]),1),u("a",{href:c(p)("edit/"),target:"_blank"},[d(a,{type:"success",class:"btn",size:"big",icon:"ios-link"},{default:h((()=>[g(f(t.$t("openEditor")),1)])),_:1})],8,D)]),d(b,{border:!0,hover:!0,col:c(N),padding:0},{default:h((()=>[(r(!0),o(m,null,v(c($),(t=>(r(),_(n,{class:"templateItem",key:t.id,style:y("height:"+c(O))},{default:h((()=>[u("a",{href:z(t),style:y("height:"+c(O))},[d(l,{src:t.thumb,fit:"contain",width:"100%",height:c(O),alt:t.id,lazy:""},{error:h((()=>[d(i,{type:"ios-image-outline",size:"24"})])),_:2},1032,["src","height","alt"])],12,J)])),_:2},1032,["style"])))),128))])),_:1},8,["col"]),K],64)}}}),[["__scopeId","data-v-a63b2053"]]);export{N as default};
