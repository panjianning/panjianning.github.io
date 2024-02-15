import{a as e,t,f as i,o as a,g as r,h as s,n,i as l,j as o,e as d,k as h,L as g,I as c,l as m,m as u,r as p,p as f,q as v,c as y,s as w,u as b,v as I,x as $,y as E,z as x,A as L,b as z,w as C,B as _,C as k,D as S,F as P,E as B,G,H as O,J as U,K as V}from"./main.386e75ba.js";import{_ as j,H,a as M}from"./lang.vue_vue_type_script_setup_true_name_lang_lang.dd4a293c.js";import{_ as W}from"./axios.c145cb4f.js";const q=e({name:"Grid",provide(){return{GridInstance:this}},props:{col:{type:Number,default:3},square:{type:Boolean,default:!1},padding:{type:String,default:"24px"},center:{type:Boolean,default:!1},border:{type:Boolean,default:!0},hover:{type:Boolean,default:!1}},data:()=>({resizeCount:0,handleResize:()=>{}}),computed:{classes(){return{"ivu-grid-center":this.center,"ivu-grid-border":this.border,"ivu-grid-hover":this.hover}}},methods:{onResize(){this.resizeCount++}},mounted(){this.handleResize=t(this.onResize,150,{leading:!1}),this.observer=i(),this.observer.listenTo(this.$refs.grid,this.handleResize)},beforeUnmount(){this.observer.removeListener(this.$refs.grid,this.handleResize)}},[["render",function(e,t,i,l,o,d){return a(),r("div",{class:n(["ivu-grid",d.classes]),ref:"grid"},[s(e.$slots,"default")],2)}]]);const T=e({name:"GridItem",inject:["GridInstance"],data:()=>({height:0}),computed:{col(){return this.GridInstance.col},square(){return this.GridInstance.square},styles(){const e={width:100/this.col+"%"};return this.height&&this.square&&(e.height=`${this.height}px`),e},mainStyles(){return{padding:this.GridInstance.padding}}},watch:{col(){l((()=>{this.handleChangeHeight()}))},square(){this.handleChangeHeight()},"GridInstance.resizeCount"(){this.handleChangeHeight()}},methods:{handleChangeHeight(){if(this.square){const e=this.$refs.col;this.height=parseFloat(o(e,"width"))}}},mounted(){this.handleChangeHeight()}},[["render",function(e,t,i,n,l,o){return a(),r("div",{class:"ivu-grid-item",style:h(o.styles),ref:"col"},[d("div",{class:"ivu-grid-item-main",style:h(o.mainStyles)},[s(e.$slots,"default")],4)],4)}]]),R={name:"Image",mixins:[g],components:{ImagePreview:c},emits:["on-load","on-error","on-switch","on-close","on-click"],props:{src:{type:String,default:""},alt:{type:String,default:""},preview:{type:Boolean,default:!1},referrerPolicy:{type:String,default:""},width:{type:[String,Number],default:""},height:{type:[String,Number],default:""},fit:{type:String,default:""},lazy:{type:Boolean,default:!1},scrollContainer:{type:[String],default:""},transfer:{type:Boolean,default(){const e=m().appContext.config.globalProperties;return!(!e.$VIEWUI||""===e.$VIEWUI.transfer)&&e.$VIEWUI.transfer}},maskClosable:{type:Boolean,default:!0},previewList:{type:Array},infinite:{type:Boolean,default:!0},initialIndex:{type:Number,default:0},previewTip:{type:Boolean,default:!0},toolbar:{type:Array,default(){const e=m().appContext.config.globalProperties;return e.$VIEWUI&&e.$VIEWUI.image&&""!==e.$VIEWUI.image.toolbar?e.$VIEWUI.image.toolbar:["zoomIn","zoomOut","original","rotateLeft","rotateRight","download"]}}},data:()=>({loadingImage:!1,loading:!1,imageError:!1,scrollElement:null,observer:null,imagePreviewModal:!1}),watch:{src(){this.loadImage()}},computed:{innerClasses(){return["ivu-image-inner",{"ivu-image-cursor":this.preview}]},imgClasses(){return["ivu-image-img",{"ivu-image-img-hidden":this.loading||this.imageError}]},fitStyle(){const{fit:e}=this;return["fill","contain","cover","none","scale-down"].includes(e)?`object-fit:${e};`:""},imageStyles(){return{width:"number"==typeof this.width?`${this.width}px`:this.width,height:"number"==typeof this.height?`${this.height}px`:this.height}},loadingLang(){return this.t("i.select.loading")},failLang(){return this.t("i.image.fail")},previewLang(){return this.t("i.image.preview")},loadingType(){return this.lazy?"lazy":"eager"}},mounted(){u&&this.handleImageEvent()},methods:{handleLazy(){const e=this.$refs.image;(this.observer=new IntersectionObserver(this.handlerObserveImage,{root:this.scrollElement,rootMargin:"0px",threshold:0})).observe(e)},handlerObserveImage(e){for(let t of e)t.isIntersecting&&(this.offObserver(),this.loadImage())},addLazyImageListener(){const{scrollContainer:e}=this;var t;this.scrollElement=null,t=e,"object"==typeof HTMLElement&&t instanceof HTMLElement?this.scrollElement=e:e&&"string"==typeof e&&(this.scrollElement=document.querySelector(e)),this.handleLazy()},handleImageLoad(){this.loading=!1,this.imageError=!1,this.$emit("on-load")},handleImageError(){this.loading=!1,this.imageError=!0,this.loadingImage=!1,this.$emit("on-error")},loadImage(){this.loading=!0,this.imageError=!1,this.loadingImage=!0},handleImageEvent(){const{lazy:e}=this;e?this.addLazyImageListener():this.loadImage()},offObserver(){const{observer:e}=this;e&&e.disconnect()},handlePreview(){const{preview:e,initialIndex:t}=this;e&&(this.imagePreviewModal=!0,this.$emit("on-click",{initialIndex:t}))},handleClose(){this.$emit("on-close")},handleSwitch(e){this.$emit("on-switch",e)}},beforeUnmount(){this.offObserver()}},N={key:0,class:"ivu-image-placeholder"},A={key:1,class:"ivu-image-error"},F=["alt","src","loading","referrerPolicy"],D={class:"ivu-image-mark"};const J=e(R,[["render",function(e,t,i,l,o,g){const c=p("ImagePreview");return a(),r("div",{class:"ivu-image",ref:"image",style:h(g.imageStyles)},[o.loading?(a(),r("div",N,[s(e.$slots,"placeholder",{},(()=>[d("span",null,f(g.loadingLang),1)]))])):o.imageError?(a(),r("div",A,[s(e.$slots,"error",{},(()=>[d("span",null,f(g.failLang),1)]))])):v("",!0),o.loadingImage?(a(),r("div",{key:2,class:n(g.innerClasses),onClick:t[2]||(t[2]=(...e)=>g.handlePreview&&g.handlePreview(...e))},[d("img",{class:n(g.imgClasses),style:h([g.fitStyle]),alt:i.alt,src:i.src,loading:g.loadingType,referrerPolicy:i.referrerPolicy,onLoad:t[0]||(t[0]=(...e)=>g.handleImageLoad&&g.handleImageLoad(...e)),onError:t[1]||(t[1]=(...e)=>g.handleImageError&&g.handleImageError(...e))},null,46,F),i.preview&&i.previewTip?s(e.$slots,"preview",{key:0},(()=>[d("div",D,[d("span",null,f(g.previewLang),1)])])):v("",!0)],2)):v("",!0),i.preview?(a(),y(c,{key:3,modelValue:o.imagePreviewModal,"onUpdate:modelValue":t[3]||(t[3]=e=>o.imagePreviewModal=e),"preview-list":i.previewList,"initial-index":i.initialIndex,infinite:i.infinite,"mask-closable":i.maskClosable,transfer:i.transfer,toolbar:i.toolbar,onOnClose:g.handleClose,onOnSwitch:g.handleSwitch},null,8,["modelValue","preview-list","initial-index","infinite","mask-closable","transfer","toolbar","onOnClose","onOnSwitch"])):v("",!0)],4)}]]),K={class:"logo"},Q=["href"],X=[(e=>(U("data-v-7ec08725"),e=e(),V(),e))((()=>d("img",{src:M,alt:"TinyGimp"},null,-1)))],Y=["href"],Z=["href"],ee={class:"header"},te={class:"desc"},ie=["href"],ae=["href"],re=e(w({__name:"index",setup(e){b();const t=[{id:"cartoon-1",type:"text3d",tags:["cartoon"]},{id:"gold-1",type:"text3d",tags:["golden"]},{id:"cartoon-bevel-1",type:"text3d",tags:["cartoon"]},{id:"fire",type:"edit",tags:["fire"]}];for(let a of t)a.thumb||(a.thumb=`https://www.tinygimp.com/mystatic/thumb/${a.id}.png`);const i={},s=e=>"edit"==e.type?k(`edit/?id=${e.id}`):k(e.type+"/"+e.id)+"/",n=e=>{return t=this,a=null,r=function*(){return new Promise(((t,a)=>{null!=i[e]?t(i[e]):W.get(`https://www.tinygimp.com/mystatic/json/text3d/list/${e}.json`).then((a=>{let r=a.data;for(let e of r)e.thumb||(e.thumb=`https://www.tinygimp.com/mystatic/thumb/${e.id}.png`);i[e]=r,t(r)})).catch((e=>{a()}))}))},new Promise(((e,i)=>{var s=e=>{try{l(r.next(e))}catch(t){i(t)}},n=e=>{try{l(r.throw(e))}catch(t){i(t)}},l=t=>t.done?e(t.value):Promise.resolve(t.value).then(s,n);l((r=r.apply(t,a)).next())}));var t,a,r},l=I([]),o=I(window.innerWidth),h=()=>{o.value=window.innerWidth},g=$((()=>Math.max(2,Math.floor(o.value/300)))),c=e=>{n(e).then((e=>{l.value=e})).catch((e=>{l.value=t}))};return E((()=>{window.addEventListener("resize",h),document.addEventListener("langChange",(e=>{c(e.detail.lang)}));let e=x();c(e)})),L((()=>{window.removeEventListener("resize",h)})),(e,t)=>{const i=G,n=H,o=O,h=J,c=T,m=q;return a(),r(P,null,[z(n,null,{default:C((()=>[d("div",K,[d("a",{href:_(k)("")},X,8,Q)]),d("div",null,[d("a",{href:_(k)("edit/"),target:"_blank"},[z(i,{icon:"ios-link",type:"text"},{default:C((()=>[d("span",null,f(e.$t("editor")),1)])),_:1})],8,Y)]),d("div",null,[d("a",{href:_(k)("text3d/"),target:"_blank"},[z(i,{icon:"ios-link",type:"text"},{default:C((()=>[d("span",null,f(e.$t("text3dGenerator")),1)])),_:1})],8,Z)]),d("div",null,[z(j)])])),_:1}),d("div",ee,[d("div",te,f(e.$t("doc.title").split("|")[1]),1),d("a",{href:_(k)("edit/"),target:"_blank"},[z(i,{type:"success",class:"btn",size:"big",icon:"ios-link"},{default:C((()=>[S(f(e.$t("openEditor")),1)])),_:1})],8,ie)]),z(m,{border:!0,hover:!0,col:_(g),padding:0},{default:C((()=>[(a(!0),r(P,null,B(_(l),(t=>(a(),y(c,{class:"templateItem",key:t.id},{default:C((()=>[d("a",{href:s(t),target:"_blank"},[z(h,{src:t.thumb,fit:e.fit,width:"100%",height:"100%",alt:t.id,lazy:""},{error:C((()=>[z(o,{type:"ios-image-outline",size:"24",color:"#ccc"})])),_:2},1032,["src","fit","alt"])],8,ae)])),_:2},1024)))),128))])),_:1},8,["col"])],64)}}}),[["__scopeId","data-v-7ec08725"]]);export{re as default};
