var e=Object.defineProperty,t=Object.defineProperties,s=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,a=(t,s,n)=>s in t?e(t,s,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[s]=n;import{a as o,n as l,aZ as d,$ as u,a_ as p,a$ as h,o as c,c as m,b as f,w as g,x as b,e as v,aK as C,v as y,q as k,y as $,T as w,b0 as M,E as O,D as E,l as x,K as I,r as V,G as _,g as P,m as D,f as S,u as j,aD as B,as as T,aC as N,F as H,i as U,at as W,h as R,t as G,av as z,b1 as A,I as K,j as L}from"./index.4a326c2d.js";const q=o({name:"Drop",emits:["mouseenter","mouseleave","click"],props:{placement:{type:String,default:"bottom-start"},className:{type:String},transfer:{type:Boolean},eventsEnabled:{type:Boolean,default:!1},visible:{type:Boolean},classes:{type:Object,default:()=>{}},styles:{type:Object,default:()=>{}},transitionName:{type:String,default:"transition-drop"},boundariesElement:{default:"window"}},data(){return{popper:null,width:"",popperStatus:!1,tIndex:this.handleGetIndex()}},computed:{mergedStyle(){let e={};return this.width&&(e.minWidth=`${this.width}px`),this.transfer&&(e["z-index"]=1060+this.tIndex),Object.assign({},this.styles,e)},mergedClass(){return Object.assign({},this.classes,{[this.className]:this.className})}},methods:{update(){l((()=>{this.popper?(this.popper.update(),this.popperStatus=!0):this.popper=new d(this.$parent.$refs.reference,this.$refs.drop,{eventsEnabled:this.eventsEnabled,placement:this.placement,modifiers:{computeStyle:{gpuAcceleration:!1},preventOverflow:{boundariesElement:this.boundariesElement}},onCreate:()=>{this.resetTransformOrigin(),l(this.popper.update())},onUpdate:()=>{this.resetTransformOrigin()}}),"iSelect"===this.$parent.$options.name&&(this.width=parseInt(u(this.$parent.$el,"width"))),this.tIndex=this.handleGetIndex()}))},destroy(){this.popper&&setTimeout((()=>{this.popper&&!this.popperStatus&&(this.popper.popper.style.display="none",this.popper.destroy(),this.popper=null),this.popperStatus=!1}),300)},resetTransformOrigin(){if(!this.popper)return;let e=this.popper.popper.getAttribute("x-placement"),t=e.split("-")[0],s=e.split("-")[1];"left"===e||"right"===e||(this.popper.popper.style.transformOrigin="bottom"===t||"top"!==t&&"start"===s?"center top":"center bottom")},handleGetIndex:()=>(p(),h),handleMouseenter(e){this.$emit("mouseenter",e)},handleMouseleave(e){this.$emit("mouseleave",e)},handleOnUpdatePopper(){this.update()},handleOnDestroyPopper(){this.destroy()},handleClick(e){this.$emit("click",e)}},beforeUnmount(){this.popper&&(this.popper.destroy(),this.popper=null)}},[["render",function(e,t,s,n,i,r){return c(),m(M,{to:"body",disabled:!s.transfer},[f(w,{name:s.transitionName},{default:g((()=>[b(v("div",C({class:["ivu-select-dropdown",r.mergedClass],ref:"drop",style:r.mergedStyle},e.$attrs,{onMouseenter:t[0]||(t[0]=(...e)=>r.handleMouseenter&&r.handleMouseenter(...e)),onMouseleave:t[1]||(t[1]=(...e)=>r.handleMouseleave&&r.handleMouseleave(...e)),onClick:t[2]||(t[2]=y(((...e)=>r.handleClick&&r.handleClick(...e)),["stop"]))}),[k(e.$slots,"default")],16),[[$,s.visible]])])),_:3},8,["name"])],8,["disabled"])}]]),F={beforeMount(e,t,s){function n(s){if(e.contains(s.target))return!1;t.value(s)}e.__vueClickOutside__=n,O&&document.addEventListener("click",n)},unmounted(e,t){O&&document.removeEventListener("click",e.__vueClickOutside__),delete e.__vueClickOutside__}},Z="ivu-dropdown";const J=o({name:"Dropdown",directives:{clickOutside:F},components:{Drop:q},emits:["on-visible-change","on-clickoutside","on-click","on-hover-click","on-haschild-click"],props:{trigger:{validator:e=>E(e,["click","hover","custom","contextMenu"]),default:"hover"},placement:{validator:e=>E(e,["top","top-start","top-end","bottom","bottom-start","bottom-end","left","left-start","left-end","right","right-start","right-end"]),default:"bottom"},visible:{type:Boolean,default:!1},transfer:{type:Boolean,default(){const e=x().appContext.config.globalProperties;return!(!e.$VIEWUI||""===e.$VIEWUI.transfer)&&e.$VIEWUI.transfer}},transferClassName:{type:String},stopPropagation:{type:Boolean,default:!1},capture:{type:Boolean,default(){const e=x().appContext.config.globalProperties;return!e.$VIEWUI||e.$VIEWUI.capture}},eventsEnabled:{type:Boolean,default:!1},boundariesElement:{default:"window"}},computed:{transition(){return["bottom-start","bottom","bottom-end"].indexOf(this.placement)>-1?"slide-up":"fade"},dropdownCls(){return{[Z+"-transfer"]:this.transfer,[this.transferClassName]:this.transferClassName}},relClasses(){return[`${Z}-rel`,{[`${Z}-rel-user-select-none`]:"contextMenu"===this.trigger}]}},data(){return{prefixCls:Z,currentVisible:this.visible,timeout:null}},watch:{visible(e){this.currentVisible=e},currentVisible(e){e?this.$refs.drop.update():this.$refs.drop.destroy(),this.$emit("on-visible-change",e)}},methods:{handleClick(){if("custom"===this.trigger)return!1;if("click"!==this.trigger)return!1;this.hasParent()||(this.currentVisible=!this.currentVisible)},handleRightClick(){return"custom"!==this.trigger&&("contextMenu"===this.trigger&&void(this.currentVisible=!this.currentVisible))},handleMouseenter(){return"custom"!==this.trigger&&("hover"===this.trigger&&(this.timeout&&clearTimeout(this.timeout),void(this.timeout=setTimeout((()=>{this.currentVisible=!0}),250))))},handleMouseleave(){return"custom"!==this.trigger&&("hover"===this.trigger&&void(this.timeout&&(clearTimeout(this.timeout),this.timeout=setTimeout((()=>{this.currentVisible=!1}),150))))},onClickoutside(e){this.handleClose(),this.handleRightClose(),this.currentVisible&&this.$emit("on-clickoutside",e)},handleClose(){return"custom"!==this.trigger&&("click"===this.trigger&&void(this.currentVisible=!1))},handleRightClose(){return"custom"!==this.trigger&&("contextMenu"===this.trigger&&void(this.currentVisible=!1))},hasParent(){const e=I(this,"Dropdown");return e||!1},handleHaschildClick(){l((()=>{if("custom"===this.trigger)return!1;this.currentVisible=!0}));const e=this.hasParent();e&&e.handleHaschildClick()},handleItemClick(e){if(this.stopPropagation)return;const t=this.hasParent();t?t.handleItemClick(e):this.$emit("on-click",e)},handleHoverClick(){const e=this.hasParent();e?(l((()=>{if("custom"===this.trigger)return!1;this.currentVisible=!1})),e.handleHoverClick()):l((()=>{if("custom"===this.trigger)return!1;this.currentVisible=!1}))}}},[["render",function(e,t,s,n,i,r){const a=V("Drop"),o=_("click-outside");return b((c(),P("div",{class:D([i.prefixCls]),onMouseenter:t[2]||(t[2]=(...e)=>r.handleMouseenter&&r.handleMouseenter(...e)),onMouseleave:t[3]||(t[3]=(...e)=>r.handleMouseleave&&r.handleMouseleave(...e))},[v("div",{class:D(r.relClasses),ref:"reference",onClick:t[0]||(t[0]=(...e)=>r.handleClick&&r.handleClick(...e)),onContextmenu:t[1]||(t[1]=y(((...e)=>r.handleRightClick&&r.handleRightClick(...e)),["prevent"]))},[k(e.$slots,"default")],34),f(a,{ref:"drop",visible:i.currentVisible,classes:r.dropdownCls,placement:s.placement,eventsEnabled:s.eventsEnabled,boundariesElement:s.boundariesElement,transfer:s.transfer,"transition-name":"transition-drop",onMouseenter:r.handleMouseenter,onMouseleave:r.handleMouseleave},{default:g((()=>[k(e.$slots,"list")])),_:3},8,["visible","classes","placement","eventsEnabled","boundariesElement","transfer","onMouseenter","onMouseleave"])],34)),[[o,r.onClickoutside]])}]]),Q={class:"ivu-dropdown-menu"};const X=o({name:"DropdownMenu"},[["render",function(e,t,s,n,i,r){return c(),P("ul",Q,[k(e.$slots,"default")])}]]),Y="ivu-dropdown-item";const ee=o({name:"DropdownItem",props:{name:{type:[String,Number]},disabled:{type:Boolean,default:!1},selected:{type:Boolean,default:!1},divided:{type:Boolean,default:!1}},computed:{classes(){return[`${Y}`,{[`${Y}-disabled`]:this.disabled,[`${Y}-selected`]:this.selected,[`${Y}-divided`]:this.divided}]}},methods:{handleClick(){if(this.disabled)return;const e=I(this,"Dropdown");this.$parent&&"Dropdown"===this.$parent.$options.name?this.$parent.handleHaschildClick():e&&"Dropdown"===e.$options.name&&e.handleHoverClick(),e.handleItemClick(this.name)}}},[["render",function(e,t,s,n,i,r){return c(),P("li",{class:D(r.classes),onClick:t[0]||(t[0]=(...e)=>r.handleClick&&r.handleClick(...e))},[k(e.$slots,"default")],2)}]]);const te=o({name:"Header",computed:{wrapClasses:()=>"ivu-layout-header"}},[["render",function(e,t,s,n,i,r){return c(),P("div",{class:D(r.wrapClasses)},[k(e.$slots,"default")],2)}]]),se=S({name:"saveBar"}),ne=S((ie=((e,t)=>{for(var s in t||(t={}))i.call(t,s)&&a(e,s,t[s]);if(n)for(var s of n(t))r.call(t,s)&&a(e,s,t[s]);return e})({},se),t(ie,s({setup(e){const{locale:t}=j(),s=B("event"),n={en:"English",zh:"中文"};let i=T(Object.keys(n).map((e=>({langType:e,langName:n[e]}))));const r=N((()=>n[t.value])),a=new Event("langChange"),o=e=>{t.value=e,z(A,e),s&&s.emit("langChange",e),document.dispatchEvent(a)};return(e,t)=>{const s=K,n=L,a=ee,l=X,d=J;return c(),m(d,{trigger:"click",onOnClick:o},{list:g((()=>[f(l,null,{default:g((()=>[(c(!0),P(H,null,U(W(i),(e=>(c(),m(a,{key:e.langType,name:e.langType},{default:g((()=>[R(G(e.langName),1)])),_:2},1032,["name"])))),128))])),_:1})])),default:g((()=>[f(n,{type:"text"},{default:g((()=>[R(G(W(r))+" ",1),f(s,{type:"ios-arrow-down"})])),_:1})])),_:1})}}}))));var ie;export{q as D,te as H,ne as _,ee as a,X as b,F as c,J as d};
