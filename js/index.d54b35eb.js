import{f as t,u as e,g as a,h as s,i,j as l,k as n,o as r,l as d,b as o,w as u,e as c,m as h,n as f,t as p,p as g,F as m,q as _,c as v,s as y,v as b,x as w,I as x,y as k,z as $,a as z}from"./main.9dfb3ac4.js";import{G as j,a as M}from"./grid-item.5fbfbaf4.js";import{_ as E,H as I,a as G}from"./lang.vue_vue_type_script_setup_true_name_lang_lang.f91b6a3e.js";import{I as L}from"./image.3a1fd9c5.js";const W={class:"logo"},q=["href"],C=[(t=>(k("data-v-dc213b3f"),t=t(),$(),t))((()=>c("img",{src:G,alt:"TinyGimp"},null,-1)))],F=["href"],H=["href"],T={class:"header"},A={class:"desc"},B=["href"],D=["href"],J=z(t({__name:"index",setup(t){e();const k=[{id:"cartoon-1",type:"text3d",tags:["cartoon"]},{id:"gold-1",type:"text3d",tags:["golden"]},{id:"cartoon-bevel-1",type:"text3d",tags:["cartoon"]},{id:"fire",type:"edit",tags:["fire"]}];for(let e of k)e.thumb||(e.thumb=`https://www.tinygimp.com/mystatic/thumb/${e.id}.png`);const $=t=>"edit"==t.type?f(`edit/?id=${t.id}`):f(t.type+"/"+t.id)+"/",z=a([]),G=a(window.innerWidth),J=()=>{G.value=window.innerWidth},K=s((()=>Math.max(2,Math.floor(G.value/300)))),N=s((()=>{let t=Math.max(2,Math.floor(G.value/300));return`${Math.floor(G.value/t/2)}px`})),O=t=>{b(t).then((t=>{z.value=t})).catch((t=>{z.value=k}))};return i((()=>{window.addEventListener("resize",J),document.addEventListener("langChange",(t=>{O(t.detail.lang)}));let t=l();O(t)})),n((()=>{window.removeEventListener("resize",J)})),(t,e)=>{const a=w,s=I,i=x,l=L,n=j,b=M;return r(),d(m,null,[o(s,null,{default:u((()=>[c("div",W,[c("a",{href:h(f)("")},C,8,q)]),c("div",null,[c("a",{href:h(f)("edit/"),target:"_blank"},[o(a,{icon:"ios-link",type:"text"},{default:u((()=>[c("span",null,p(t.$t("editor")),1)])),_:1})],8,F)]),c("div",null,[c("a",{href:h(f)("text3d/"),target:"_blank"},[o(a,{icon:"ios-link",type:"text"},{default:u((()=>[c("span",null,p(t.$t("text3dGenerator")),1)])),_:1})],8,H)]),c("div",null,[o(E)])])),_:1}),c("div",T,[c("div",A,p(t.$t("doc.title").split("|")[1]),1),c("a",{href:h(f)("edit/"),target:"_blank"},[o(a,{type:"success",class:"btn",size:"big",icon:"ios-link"},{default:u((()=>[g(p(t.$t("openEditor")),1)])),_:1})],8,B)]),o(b,{border:!0,hover:!0,col:h(K),padding:0},{default:u((()=>[(r(!0),d(m,null,_(h(z),(t=>(r(),v(n,{class:"templateItem",key:t.id,style:y("height:"+h(N))},{default:u((()=>[c("a",{href:$(t),target:"_blank",style:y("height:"+h(N))},[o(l,{src:t.thumb,fit:"contain",width:"100%",height:h(N),alt:t.id,lazy:""},{error:u((()=>[o(i,{type:"ios-image-outline",size:"24"})])),_:2},1032,["src","height","alt"])],12,D)])),_:2},1032,["style"])))),128))])),_:1},8,["col"])],64)}}}),[["__scopeId","data-v-dc213b3f"]]);export{J as default};
