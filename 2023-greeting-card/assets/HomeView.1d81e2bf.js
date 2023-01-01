import{m as Ie,d as te,P as He,c as X,n as Ye,l as Je,a as Z,p as ne,b as ue,s as L,e as ee,h as f,w as se,r as P,f as d,g as Y,i as z,T as Re,j as Xe,K as Ge,t as K,k as le,o as Ve,q as ce,u as Ze,v as et,x as tt,y as de,H as _e,z as nt,A as ve,B as fe,C as V,D as je,E as De,F as at,G as R,I as Q,J as ot}from"./index.cba45fa9.js";const N=e=>Ie(te(e)),Le=e=>Ie(e),ge={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},ut=Object.keys(ge);ge.all=!0;function xe(e){const t={};for(const n of ut)e[n]===!0&&(t[n]=!0);return Object.keys(t).length===0?ge:(t.horizontal===!0?t.left=t.right=!0:t.left===!0&&t.right===!0&&(t.horizontal=!0),t.vertical===!0?t.up=t.down=!0:t.up===!0&&t.down===!0&&(t.vertical=!0),t.horizontal===!0&&t.vertical===!0&&(t.all=!0),t)}function ke(e,t){return t.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof t.handler=="function"&&e.target.nodeName.toUpperCase()!=="INPUT"&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(t.uid)===-1)}function lt(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),He.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}function rt(e){const t=[.06,6,50];return typeof e=="string"&&e.length&&e.split(":").forEach((n,o)=>{const l=parseFloat(n);l&&(t[o]=l)}),t}const it=Le({name:"touch-swipe",beforeMount(e,{value:t,arg:n,modifiers:o}){if(o.mouse!==!0&&X.has.touch!==!0)return;const l=o.mouseCapture===!0?"Capture":"",a={handler:t,sensitivity:rt(n),direction:xe(o),noop:Ye,mouseStart(u){ke(u,a)&&Je(u)&&(Z(a,"temp",[[document,"mousemove","move",`notPassive${l}`],[document,"mouseup","end","notPassiveCapture"]]),a.start(u,!0))},touchStart(u){if(ke(u,a)){const r=u.target;Z(a,"temp",[[r,"touchmove","move","notPassiveCapture"],[r,"touchcancel","end","notPassiveCapture"],[r,"touchend","end","notPassiveCapture"]]),a.start(u)}},start(u,r){X.is.firefox===!0&&ne(e,!0);const y=ue(u);a.event={x:y.left,y:y.top,time:Date.now(),mouse:r===!0,dir:!1}},move(u){if(a.event===void 0)return;if(a.event.dir!==!1){L(u);return}const r=Date.now()-a.event.time;if(r===0)return;const y=ue(u),b=y.left-a.event.x,c=Math.abs(b),g=y.top-a.event.y,i=Math.abs(g);if(a.event.mouse!==!0){if(c<a.sensitivity[1]&&i<a.sensitivity[1]){a.end(u);return}}else if(c<a.sensitivity[2]&&i<a.sensitivity[2])return;const x=c/r,h=i/r;a.direction.vertical===!0&&c<i&&c<100&&h>a.sensitivity[0]&&(a.event.dir=g<0?"up":"down"),a.direction.horizontal===!0&&c>i&&i<100&&x>a.sensitivity[0]&&(a.event.dir=b<0?"left":"right"),a.direction.up===!0&&c<i&&g<0&&c<100&&h>a.sensitivity[0]&&(a.event.dir="up"),a.direction.down===!0&&c<i&&g>0&&c<100&&h>a.sensitivity[0]&&(a.event.dir="down"),a.direction.left===!0&&c>i&&b<0&&i<100&&x>a.sensitivity[0]&&(a.event.dir="left"),a.direction.right===!0&&c>i&&b>0&&i<100&&x>a.sensitivity[0]&&(a.event.dir="right"),a.event.dir!==!1?(L(u),a.event.mouse===!0&&(document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),lt(),a.styleCleanup=C=>{a.styleCleanup=void 0,document.body.classList.remove("non-selectable");const m=()=>{document.body.classList.remove("no-pointer-events--children")};C===!0?setTimeout(m,50):m()}),a.handler({evt:u,touch:a.event.mouse!==!0,mouse:a.event.mouse,direction:a.event.dir,duration:r,distance:{x:c,y:i}})):a.end(u)},end(u){a.event!==void 0&&(ee(a,"temp"),X.is.firefox===!0&&ne(e,!1),a.styleCleanup!==void 0&&a.styleCleanup(!0),u!==void 0&&a.event.dir!==!1&&L(u),a.event=void 0)}};if(e.__qtouchswipe=a,o.mouse===!0){const u=o.mouseCapture===!0||o.mousecapture===!0?"Capture":"";Z(a,"main",[[e,"mousedown","mouseStart",`passive${u}`]])}X.has.touch===!0&&Z(a,"main",[[e,"touchstart","touchStart",`passive${o.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,t){const n=e.__qtouchswipe;n!==void 0&&(t.oldValue!==t.value&&(typeof t.value!="function"&&n.end(),n.handler=t.value),n.direction=xe(t.modifiers))},beforeUnmount(e){const t=e.__qtouchswipe;t!==void 0&&(ee(t,"main"),ee(t,"temp"),X.is.firefox===!0&&ne(e,!1),t.styleCleanup!==void 0&&t.styleCleanup(),delete e.__qtouchswipe)}});function st(){const e=new Map;return{getCache:function(t,n){return e[t]===void 0?e[t]=n:e[t]},getCacheWithFn:function(t,n){return e[t]===void 0?e[t]=n():e[t]}}}function J(e,t){return e!==void 0&&e()||t}function O(e,t){return e!==void 0?t.concat(e()):t}function ct(e,t,n,o,l,a){t.key=o+l;const u=f(e,t,n);return l===!0?se(u,a()):u}function Me(e,t){typeof t.type=="symbol"?Array.isArray(t.children)===!0&&t.children.forEach(n=>{Me(e,n)}):e.add(t)}function dt(e){const t=new Set;return e.forEach(n=>{Me(t,n)}),Array.from(t)}function Oe(e){return e.appContext.config.globalProperties.$router!==void 0}const vt={name:{required:!0},disable:Boolean},Ce={setup(e,{slots:t}){return()=>f("div",{class:"q-panel scroll",role:"tabpanel"},J(t.default))}},ft={modelValue:{required:!0},animated:Boolean,infinite:Boolean,swipeable:Boolean,vertical:Boolean,transitionPrev:String,transitionNext:String,transitionDuration:{type:[String,Number],default:300},keepAlive:Boolean,keepAliveInclude:[String,Array,RegExp],keepAliveExclude:[String,Array,RegExp],keepAliveMax:Number},gt=["update:modelValue","beforeTransition","transition"];function mt(){const{props:e,emit:t,proxy:n}=z(),{getCacheWithFn:o}=st();let l,a;const u=P(null),r=P(null);function y(v){const s=e.vertical===!0?"up":"left";A((n.$q.lang.rtl===!0?-1:1)*(v.direction===s?1:-1))}const b=d(()=>[[it,y,void 0,{horizontal:e.vertical!==!0,vertical:e.vertical,mouse:!0}]]),c=d(()=>e.transitionPrev||`slide-${e.vertical===!0?"down":"right"}`),g=d(()=>e.transitionNext||`slide-${e.vertical===!0?"up":"left"}`),i=d(()=>`--q-transition-duration: ${e.transitionDuration}ms`),x=d(()=>typeof e.modelValue=="string"||typeof e.modelValue=="number"?e.modelValue:String(e.modelValue)),h=d(()=>({include:e.keepAliveInclude,exclude:e.keepAliveExclude,max:e.keepAliveMax})),C=d(()=>e.keepAliveInclude!==void 0||e.keepAliveExclude!==void 0);Y(()=>e.modelValue,(v,s)=>{const _=$(v)===!0?F(v):-1;a!==!0&&S(_===-1?0:_<F(s)?-1:1),u.value!==_&&(u.value=_,t("beforeTransition",v,s),Xe(()=>{t("transition",v,s)}))});function m(){A(1)}function w(){A(-1)}function I(v){t("update:modelValue",v)}function $(v){return v!=null&&v!==""}function F(v){return l.findIndex(s=>s.props.name===v&&s.props.disable!==""&&s.props.disable!==!0)}function k(){return l.filter(v=>v.props.disable!==""&&v.props.disable!==!0)}function S(v){const s=v!==0&&e.animated===!0&&u.value!==-1?"q-transition--"+(v===-1?c.value:g.value):null;r.value!==s&&(r.value=s)}function A(v,s=u.value){let _=s+v;for(;_>-1&&_<l.length;){const j=l[_];if(j!==void 0&&j.props.disable!==""&&j.props.disable!==!0){S(v),a=!0,t("update:modelValue",j.props.name),setTimeout(()=>{a=!1});return}_+=v}e.infinite===!0&&l.length>0&&s!==-1&&s!==l.length&&A(v,v===-1?l.length:-1)}function E(){const v=F(e.modelValue);return u.value!==v&&(u.value=v),!0}function T(){const v=$(e.modelValue)===!0&&E()&&l[u.value];return e.keepAlive===!0?[f(Ge,h.value,[f(C.value===!0?o(x.value,()=>({...Ce,name:x.value})):Ce,{key:x.value,style:i.value},()=>v)])]:[f("div",{class:"q-panel scroll",style:i.value,key:x.value,role:"tabpanel"},[v])]}function q(){if(l.length!==0)return e.animated===!0?[f(Re,{name:r.value},T)]:T()}function B(v){return l=dt(J(v.default,[])).filter(s=>s.props!==null&&s.props.slot===void 0&&$(s.props.name)===!0),l.length}function p(){return l}return Object.assign(n,{next:m,previous:w,goTo:I}),{panelIndex:u,panelDirectives:b,updatePanelsList:B,updatePanelIndex:E,getPanelContent:q,getEnabledPanels:k,getPanels:p,isValidPanelName:$,keepAliveProps:h,needsUniqueKeepAliveWrapper:C,goToPanelByOffset:A,goToPanel:I,nextPanel:m,previousPanel:w}}const M=N({name:"QCarouselSlide",props:{...vt,imgSrc:String},setup(e,{slots:t}){const n=d(()=>e.imgSrc?{backgroundImage:`url("${e.imgSrc}")`}:{});return()=>f("div",{class:"q-carousel__slide",style:n.value},J(t.default))}}),re={xs:18,sm:24,md:32,lg:38,xl:46},me={size:String};function pe(e,t=re){return d(()=>e.size!==void 0?{fontSize:e.size in t?`${t[e.size]}px`:e.size}:null)}const Ae="0 0 24 24",qe=e=>e,ae=e=>`ionicons ${e}`,ze={"mdi-":e=>`mdi ${e}`,"icon-":qe,"bt-":e=>`bt ${e}`,"eva-":e=>`eva ${e}`,"ion-md":ae,"ion-ios":ae,"ion-logo":ae,"iconfont ":qe,"ti-":e=>`themify-icon ${e}`,"bi-":e=>`bootstrap-icons ${e}`},Ne={o_:"-outlined",r_:"-round",s_:"-sharp"},Ke={sym_o_:"-outlined",sym_r_:"-rounded",sym_s_:"-sharp"},pt=new RegExp("^("+Object.keys(ze).join("|")+")"),ht=new RegExp("^("+Object.keys(Ne).join("|")+")"),we=new RegExp("^("+Object.keys(Ke).join("|")+")"),bt=/^[Mm]\s?[-+]?\.?\d/,yt=/^img:/,_t=/^svguse:/,xt=/^ion-/,kt=/^(fa-(solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /,ie=N({name:"QIcon",props:{...me,tag:{type:String,default:"i"},name:String,color:String,left:Boolean,right:Boolean},setup(e,{slots:t}){const{proxy:{$q:n}}=z(),o=pe(e),l=d(()=>"q-icon"+(e.left===!0?" on-left":"")+(e.right===!0?" on-right":"")+(e.color!==void 0?` text-${e.color}`:"")),a=d(()=>{let u,r=e.name;if(r==="none"||!r)return{none:!0};if(n.iconMapFn!==null){const c=n.iconMapFn(r);if(c!==void 0)if(c.icon!==void 0){if(r=c.icon,r==="none"||!r)return{none:!0}}else return{cls:c.cls,content:c.content!==void 0?c.content:" "}}if(bt.test(r)===!0){const[c,g=Ae]=r.split("|");return{svg:!0,viewBox:g,nodes:c.split("&&").map(i=>{const[x,h,C]=i.split("@@");return f("path",{style:h,d:x,transform:C})})}}if(yt.test(r)===!0)return{img:!0,src:r.substring(4)};if(_t.test(r)===!0){const[c,g=Ae]=r.split("|");return{svguse:!0,src:c.substring(7),viewBox:g}}let y=" ";const b=r.match(pt);if(b!==null)u=ze[b[1]](r);else if(kt.test(r)===!0)u=r;else if(xt.test(r)===!0)u=`ionicons ion-${n.platform.is.ios===!0?"ios":"md"}${r.substring(3)}`;else if(we.test(r)===!0){u="notranslate material-symbols";const c=r.match(we);c!==null&&(r=r.substring(6),u+=Ke[c[1]]),y=r}else{u="notranslate material-icons";const c=r.match(ht);c!==null&&(r=r.substring(2),u+=Ne[c[1]]),y=r}return{cls:u,content:y}});return()=>{const u={class:l.value,style:o.value,"aria-hidden":"true",role:"presentation"};return a.value.none===!0?f(e.tag,u,J(t.default)):a.value.img===!0?f("span",u,O(t.default,[f("img",{src:a.value.src})])):a.value.svg===!0?f("span",u,O(t.default,[f("svg",{viewBox:a.value.viewBox||"0 0 24 24"},a.value.nodes)])):a.value.svguse===!0?f("span",u,O(t.default,[f("svg",{viewBox:a.value.viewBox},[f("use",{"xlink:href":a.value.src})])])):(a.value.cls!==void 0&&(u.class+=" "+a.value.cls),f(e.tag,u,O(t.default,[a.value.content])))}}}),Qe={dark:{type:Boolean,default:null}};function Ue(e,t){return d(()=>e.dark===null?t.dark.isActive:e.dark)}function Ct(e,t){const n=P(null),o=d(()=>e.disable===!0?null:f("span",{ref:n,class:"no-outline",tabindex:-1}));function l(a){const u=t.value;a!==void 0&&a.type.indexOf("key")===0?u!==null&&document.activeElement!==u&&u.contains(document.activeElement)===!0&&u.focus():n.value!==null&&(a===void 0||u!==null&&u.contains(a.target)===!0)&&n.value.focus()}return{refocusTargetEl:o,refocusTarget:l}}const At={name:String};function qt(e={}){return(t,n,o)=>{t[n](f("input",{class:"hidden"+(o||""),...e.value}))}}const wt={xs:30,sm:35,md:40,lg:50,xl:60},St={...Qe,...me,...At,modelValue:{required:!0,default:null},val:{},trueValue:{default:!0},falseValue:{default:!1},indeterminateValue:{default:null},checkedIcon:String,uncheckedIcon:String,indeterminateIcon:String,toggleOrder:{type:String,validator:e=>e==="tf"||e==="ft"},toggleIndeterminate:Boolean,label:String,leftLabel:Boolean,color:String,keepColor:Boolean,dense:Boolean,disable:Boolean,tabindex:[String,Number]},Bt=["update:modelValue"];function $t(e,t){const{props:n,slots:o,emit:l,proxy:a}=z(),{$q:u}=a,r=Ue(n,u),y=P(null),{refocusTargetEl:b,refocusTarget:c}=Ct(n,y),g=pe(n,wt),i=d(()=>n.val!==void 0&&Array.isArray(n.modelValue)),x=d(()=>{const p=K(n.val);return i.value===!0?n.modelValue.findIndex(v=>K(v)===p):-1}),h=d(()=>i.value===!0?x.value>-1:K(n.modelValue)===K(n.trueValue)),C=d(()=>i.value===!0?x.value===-1:K(n.modelValue)===K(n.falseValue)),m=d(()=>h.value===!1&&C.value===!1),w=d(()=>n.disable===!0?-1:n.tabindex||0),I=d(()=>`q-${e} cursor-pointer no-outline row inline no-wrap items-center`+(n.disable===!0?" disabled":"")+(r.value===!0?` q-${e}--dark`:"")+(n.dense===!0?` q-${e}--dense`:"")+(n.leftLabel===!0?" reverse":"")),$=d(()=>{const p=h.value===!0?"truthy":C.value===!0?"falsy":"indet",v=n.color!==void 0&&(n.keepColor===!0||(e==="toggle"?h.value===!0:C.value!==!0))?` text-${n.color}`:"";return`q-${e}__inner relative-position non-selectable q-${e}__inner--${p}${v}`}),F=d(()=>{const p={type:"checkbox"};return n.name!==void 0&&Object.assign(p,{"^checked":h.value===!0?"checked":void 0,name:n.name,value:i.value===!0?n.val:n.trueValue}),p}),k=qt(F),S=d(()=>{const p={tabindex:w.value,role:e==="toggle"?"switch":"checkbox","aria-label":n.label,"aria-checked":m.value===!0?"mixed":h.value===!0?"true":"false"};return n.disable===!0&&(p["aria-disabled"]="true"),p});function A(p){p!==void 0&&(L(p),c(p)),n.disable!==!0&&l("update:modelValue",E(),p)}function E(){if(i.value===!0){if(h.value===!0){const p=n.modelValue.slice();return p.splice(x.value,1),p}return n.modelValue.concat([n.val])}if(h.value===!0){if(n.toggleOrder!=="ft"||n.toggleIndeterminate===!1)return n.falseValue}else if(C.value===!0){if(n.toggleOrder==="ft"||n.toggleIndeterminate===!1)return n.trueValue}else return n.toggleOrder!=="ft"?n.trueValue:n.falseValue;return n.indeterminateValue}function T(p){(p.keyCode===13||p.keyCode===32)&&L(p)}function q(p){(p.keyCode===13||p.keyCode===32)&&A(p)}const B=t(h,m);return Object.assign(a,{toggle:A}),()=>{const p=B();n.disable!==!0&&k(p,"unshift",` q-${e}__native absolute q-ma-none q-pa-none`);const v=[f("div",{class:$.value,style:g.value,"aria-hidden":"true"},p)];b.value!==null&&v.push(b.value);const s=n.label!==void 0?O(o.default,[n.label]):J(o.default);return s!==void 0&&v.push(f("div",{class:`q-${e}__label q-anchor--skip`},s)),f("div",{ref:y,class:I.value,...S.value,onClick:A,onKeydown:T,onKeyup:q},v)}}const Et=N({name:"QToggle",props:{...St,icon:String,iconColor:String},emits:Bt,setup(e){function t(n,o){const l=d(()=>(n.value===!0?e.checkedIcon:o.value===!0?e.indeterminateIcon:e.uncheckedIcon)||e.icon),a=d(()=>n.value===!0?e.iconColor:null);return()=>[f("div",{class:"q-toggle__track"}),f("div",{class:"q-toggle__thumb absolute flex flex-center no-wrap"},l.value!==void 0?[f(ie,{name:l.value,color:a.value})]:void 0)]}return $t("toggle",t)}}),Se=N({name:"QCarouselControl",props:{position:{type:String,default:"bottom-right",validator:e=>["top-right","top-left","bottom-right","bottom-left","top","right","bottom","left"].includes(e)},offset:{type:Array,default:()=>[18,18],validator:e=>e.length===2}},setup(e,{slots:t}){const n=d(()=>`q-carousel__control absolute absolute-${e.position}`),o=d(()=>({margin:`${e.offset[1]}px ${e.offset[0]}px`}));return()=>f("div",{class:n.value,style:o.value},J(t.default))}}),Pt={size:{type:[Number,String],default:"1em"},color:String};function Ft(e){return{cSize:d(()=>e.size in re?`${re[e.size]}px`:e.size),classes:d(()=>"q-spinner"+(e.color?` text-${e.color}`:""))}}const Tt=N({name:"QSpinner",props:{...Pt,thickness:{type:Number,default:5}},setup(e){const{cSize:t,classes:n}=Ft(e);return()=>f("svg",{class:n.value+" q-spinner-mat",width:t.value,height:t.value,viewBox:"25 25 50 50"},[f("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":e.thickness,"stroke-miterlimit":"10"})])}});function It(e,t){const n=e.style;for(const o in t)n[o]=t[o]}function Rt(e,t=250){let n=!1,o;return function(){return n===!1&&(n=!0,setTimeout(()=>{n=!1},t),o=e.apply(this,arguments)),o}}function Be(e,t,n,o){n.modifiers.stop===!0&&Ve(e);const l=n.modifiers.color;let a=n.modifiers.center;a=a===!0||o===!0;const u=document.createElement("span"),r=document.createElement("span"),y=ue(e),{left:b,top:c,width:g,height:i}=t.getBoundingClientRect(),x=Math.sqrt(g*g+i*i),h=x/2,C=`${(g-x)/2}px`,m=a?C:`${y.left-b-h}px`,w=`${(i-x)/2}px`,I=a?w:`${y.top-c-h}px`;r.className="q-ripple__inner",It(r,{height:`${x}px`,width:`${x}px`,transform:`translate3d(${m},${I},0) scale3d(.2,.2,1)`,opacity:0}),u.className=`q-ripple${l?" text-"+l:""}`,u.setAttribute("dir","ltr"),u.appendChild(r),t.appendChild(u);const $=()=>{u.remove(),clearTimeout(F)};n.abort.push($);let F=setTimeout(()=>{r.classList.add("q-ripple__inner--enter"),r.style.transform=`translate3d(${C},${w},0) scale3d(1,1,1)`,r.style.opacity=.2,F=setTimeout(()=>{r.classList.remove("q-ripple__inner--enter"),r.classList.add("q-ripple__inner--leave"),r.style.opacity=0,F=setTimeout(()=>{u.remove(),n.abort.splice(n.abort.indexOf($),1)},275)},250)},50)}function $e(e,{modifiers:t,value:n,arg:o}){const l=Object.assign({},e.cfg.ripple,t,n);e.modifiers={early:l.early===!0,stop:l.stop===!0,center:l.center===!0,color:l.color||o,keyCodes:[].concat(l.keyCodes||13)}}const Vt=Le({name:"ripple",beforeMount(e,t){const n=t.instance.$.appContext.config.globalProperties.$q.config||{};if(n.ripple===!1)return;const o={cfg:n,enabled:t.value!==!1,modifiers:{},abort:[],start(l){o.enabled===!0&&l.qSkipRipple!==!0&&l.type===(o.modifiers.early===!0?"pointerdown":"click")&&Be(l,e,o,l.qKeyEvent===!0)},keystart:Rt(l=>{o.enabled===!0&&l.qSkipRipple!==!0&&le(l,o.modifiers.keyCodes)===!0&&l.type===`key${o.modifiers.early===!0?"down":"up"}`&&Be(l,e,o,!0)},300)};$e(o,t),e.__qripple=o,Z(o,"main",[[e,"pointerdown","start","passive"],[e,"click","start","passive"],[e,"keydown","keystart","passive"],[e,"keyup","keystart","passive"]])},updated(e,t){if(t.oldValue!==t.value){const n=e.__qripple;n!==void 0&&(n.enabled=t.value!==!1,n.enabled===!0&&Object(t.value)===t.value&&$e(n,t))}},beforeUnmount(e){const t=e.__qripple;t!==void 0&&(t.abort.forEach(n=>{n()}),ee(t,"main"),delete e._qripple)}}),We={left:"start",center:"center",right:"end",between:"between",around:"around",evenly:"evenly",stretch:"stretch"},jt=Object.keys(We),Dt={align:{type:String,validator:e=>jt.includes(e)}};function Lt(e){return d(()=>{const t=e.align===void 0?e.vertical===!0?"stretch":"left":e.align;return`${e.vertical===!0?"items":"justify"}-${We[t]}`})}function Ee(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}function Pe(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Mt(e,t){for(const n in t){const o=t[n],l=e[n];if(typeof o=="string"){if(o!==l)return!1}else if(Array.isArray(l)===!1||l.length!==o.length||o.some((a,u)=>a!==l[u]))return!1}return!0}function Fe(e,t){return Array.isArray(t)===!0?e.length===t.length&&e.every((n,o)=>n===t[o]):e.length===1&&e[0]===t}function Ot(e,t){return Array.isArray(e)===!0?Fe(e,t):Array.isArray(t)===!0?Fe(t,e):e===t}function zt(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(Ot(e[n],t[n])===!1)return!1;return!0}const Nt={to:[String,Object],replace:Boolean,exact:Boolean,activeClass:{type:String,default:"q-router-link--active"},exactActiveClass:{type:String,default:"q-router-link--exact-active"},href:String,target:String,disable:Boolean};function Kt({fallbackTag:e,useDisableForRouterLinkProps:t=!0}={}){const n=z(),{props:o,proxy:l,emit:a}=n,u=Oe(n),r=d(()=>o.disable!==!0&&o.href!==void 0),y=t===!0?d(()=>u===!0&&o.disable!==!0&&r.value!==!0&&o.to!==void 0&&o.to!==null&&o.to!==""):d(()=>u===!0&&r.value!==!0&&o.to!==void 0&&o.to!==null&&o.to!==""),b=d(()=>y.value===!0?I(o.to):null),c=d(()=>b.value!==null),g=d(()=>r.value===!0||c.value===!0),i=d(()=>o.type==="a"||g.value===!0?"a":o.tag||e||"div"),x=d(()=>r.value===!0?{href:o.href,target:o.target}:c.value===!0?{href:b.value.href,target:o.target}:{}),h=d(()=>{if(c.value===!1)return-1;const{matched:k}=b.value,{length:S}=k,A=k[S-1];if(A===void 0)return-1;const E=l.$route.matched;if(E.length===0)return-1;const T=E.findIndex(Pe.bind(null,A));if(T>-1)return T;const q=Ee(k[S-2]);return S>1&&Ee(A)===q&&E[E.length-1].path!==q?E.findIndex(Pe.bind(null,k[S-2])):T}),C=d(()=>c.value===!0&&h.value!==-1&&Mt(l.$route.params,b.value.params)),m=d(()=>C.value===!0&&h.value===l.$route.matched.length-1&&zt(l.$route.params,b.value.params)),w=d(()=>c.value===!0?m.value===!0?` ${o.exactActiveClass} ${o.activeClass}`:o.exact===!0?"":C.value===!0?` ${o.activeClass}`:"":"");function I(k){try{return l.$router.resolve(k)}catch{}return null}function $(k,{returnRouterError:S,to:A=o.to,replace:E=o.replace}={}){if(o.disable===!0)return k.preventDefault(),Promise.resolve(!1);if(k.metaKey||k.altKey||k.ctrlKey||k.shiftKey||k.button!==void 0&&k.button!==0||o.target==="_blank")return Promise.resolve(!1);k.preventDefault();const T=l.$router[E===!0?"replace":"push"](A);return S===!0?T:T.then(()=>{}).catch(()=>{})}function F(k){if(c.value===!0){const S=A=>$(k,A);a("click",k,S),k.defaultPrevented!==!0&&S()}else a("click",k)}return{hasRouterLink:c,hasHrefLink:r,hasLink:g,linkTag:i,resolvedLink:b,linkIsActive:C,linkIsExactActive:m,linkClass:w,linkAttrs:x,getLink:I,navigateToRouterLink:$,navigateOnClick:F}}const Te={none:0,xs:4,sm:8,md:16,lg:24,xl:32},Qt={xs:8,sm:10,md:14,lg:20,xl:24},Ut=["button","submit","reset"],Wt=/[^\s]\/[^\s]/,Ht=["flat","outline","push","unelevated"],Yt=(e,t)=>e.flat===!0?"flat":e.outline===!0?"outline":e.push===!0?"push":e.unelevated===!0?"unelevated":t,Jt={...me,...Nt,type:{type:String,default:"button"},label:[Number,String],icon:String,iconRight:String,...Ht.reduce((e,t)=>(e[t]=Boolean)&&e,{}),square:Boolean,round:Boolean,rounded:Boolean,glossy:Boolean,size:String,fab:Boolean,fabMini:Boolean,padding:String,color:String,textColor:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,tabindex:[Number,String],ripple:{type:[Boolean,Object],default:!0},align:{...Dt.align,default:"center"},stack:Boolean,stretch:Boolean,loading:{type:Boolean,default:null},disable:Boolean};function Xt(e){const t=pe(e,Qt),n=Lt(e),{hasRouterLink:o,hasLink:l,linkTag:a,linkAttrs:u,navigateOnClick:r}=Kt({fallbackTag:"button"}),y=d(()=>{const m=e.fab===!1&&e.fabMini===!1?t.value:{};return e.padding!==void 0?Object.assign({},m,{padding:e.padding.split(/\s+/).map(w=>w in Te?Te[w]+"px":w).join(" "),minWidth:"0",minHeight:"0"}):m}),b=d(()=>e.rounded===!0||e.fab===!0||e.fabMini===!0),c=d(()=>e.disable!==!0&&e.loading!==!0),g=d(()=>c.value===!0?e.tabindex||0:-1),i=d(()=>Yt(e,"standard")),x=d(()=>{const m={tabindex:g.value};return l.value===!0?Object.assign(m,u.value):Ut.includes(e.type)===!0&&(m.type=e.type),a.value==="a"?(e.disable===!0?m["aria-disabled"]="true":m.href===void 0&&(m.role="button"),o.value!==!0&&Wt.test(e.type)===!0&&(m.type=e.type)):e.disable===!0&&(m.disabled="",m["aria-disabled"]="true"),e.loading===!0&&e.percentage!==void 0&&Object.assign(m,{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":e.percentage}),m}),h=d(()=>{let m;e.color!==void 0?e.flat===!0||e.outline===!0?m=`text-${e.textColor||e.color}`:m=`bg-${e.color} text-${e.textColor||"white"}`:e.textColor&&(m=`text-${e.textColor}`);const w=e.round===!0?"round":`rectangle${b.value===!0?" q-btn--rounded":e.square===!0?" q-btn--square":""}`;return`q-btn--${i.value} q-btn--${w}`+(m!==void 0?" "+m:"")+(c.value===!0?" q-btn--actionable q-focusable q-hoverable":e.disable===!0?" disabled":"")+(e.fab===!0?" q-btn--fab":e.fabMini===!0?" q-btn--fab-mini":"")+(e.noCaps===!0?" q-btn--no-uppercase":"")+(e.dense===!0?" q-btn--dense":"")+(e.stretch===!0?" no-border-radius self-stretch":"")+(e.glossy===!0?" glossy":"")+(e.square?" q-btn--square":"")}),C=d(()=>n.value+(e.stack===!0?" column":" row")+(e.noWrap===!0?" no-wrap text-no-wrap":"")+(e.loading===!0?" q-btn__content--hidden":""));return{classes:h,style:y,innerClasses:C,attributes:x,hasLink:l,linkTag:a,navigateOnClick:r,isActionable:c}}const{passiveCapture:D}=et;let U=null,W=null,H=null;const oe=N({name:"QBtn",props:{...Jt,percentage:Number,darkPercentage:Boolean,onTouchstart:[Function,Array]},emits:["click","keydown","mousedown","keyup"],setup(e,{slots:t,emit:n}){const{proxy:o}=z(),{classes:l,style:a,innerClasses:u,attributes:r,hasLink:y,linkTag:b,navigateOnClick:c,isActionable:g}=Xt(e),i=P(null),x=P(null);let h=null,C,m;const w=d(()=>e.label!==void 0&&e.label!==null&&e.label!==""),I=d(()=>e.disable===!0||e.ripple===!1?!1:{keyCodes:y.value===!0?[13,32]:[13],...e.ripple===!0?{}:e.ripple}),$=d(()=>({center:e.round})),F=d(()=>{const s=Math.max(0,Math.min(100,e.percentage));return s>0?{transition:"transform 0.6s",transform:`translateX(${s-100}%)`}:{}}),k=d(()=>{if(e.loading===!0)return{onMousedown:v,onTouchstart:v,onClick:v,onKeydown:v,onKeyup:v};if(g.value===!0){const s={onClick:A,onKeydown:E,onMousedown:q};if(o.$q.platform.has.touch===!0){const _=e.onTouchstart!==void 0?"":"Passive";s[`onTouchstart${_}`]=T}return s}return{onClick:L}}),S=d(()=>({ref:i,class:"q-btn q-btn-item non-selectable no-outline "+l.value,style:a.value,...r.value,...k.value}));function A(s){if(i.value!==null){if(s!==void 0){if(s.defaultPrevented===!0)return;const _=document.activeElement;if(e.type==="submit"&&_!==document.body&&i.value.contains(_)===!1&&_.contains(i.value)===!1){i.value.focus();const j=()=>{document.removeEventListener("keydown",L,!0),document.removeEventListener("keyup",j,D),i.value!==null&&i.value.removeEventListener("blur",j,D)};document.addEventListener("keydown",L,!0),document.addEventListener("keyup",j,D),i.value.addEventListener("blur",j,D)}}c(s)}}function E(s){i.value!==null&&(n("keydown",s),le(s,[13,32])===!0&&W!==i.value&&(W!==null&&p(),s.defaultPrevented!==!0&&(i.value.focus(),W=i.value,i.value.classList.add("q-btn--active"),document.addEventListener("keyup",B,!0),i.value.addEventListener("blur",B,D)),L(s)))}function T(s){i.value!==null&&(n("touchstart",s),s.defaultPrevented!==!0&&(U!==i.value&&(U!==null&&p(),U=i.value,h=s.target,h.addEventListener("touchcancel",B,D),h.addEventListener("touchend",B,D)),C=!0,clearTimeout(m),m=setTimeout(()=>{C=!1},200)))}function q(s){i.value!==null&&(s.qSkipRipple=C===!0,n("mousedown",s),s.defaultPrevented!==!0&&H!==i.value&&(H!==null&&p(),H=i.value,i.value.classList.add("q-btn--active"),document.addEventListener("mouseup",B,D)))}function B(s){if(i.value!==null&&!(s!==void 0&&s.type==="blur"&&document.activeElement===i.value)){if(s!==void 0&&s.type==="keyup"){if(W===i.value&&le(s,[13,32])===!0){const _=new MouseEvent("click",s);_.qKeyEvent=!0,s.defaultPrevented===!0&&Ze(_),s.cancelBubble===!0&&Ve(_),i.value.dispatchEvent(_),L(s),s.qKeyEvent=!0}n("keyup",s)}p()}}function p(s){const _=x.value;s!==!0&&(U===i.value||H===i.value)&&_!==null&&_!==document.activeElement&&(_.setAttribute("tabindex",-1),_.focus()),U===i.value&&(h!==null&&(h.removeEventListener("touchcancel",B,D),h.removeEventListener("touchend",B,D)),U=h=null),H===i.value&&(document.removeEventListener("mouseup",B,D),H=null),W===i.value&&(document.removeEventListener("keyup",B,!0),i.value!==null&&i.value.removeEventListener("blur",B,D),W=null),i.value!==null&&i.value.classList.remove("q-btn--active")}function v(s){L(s),s.qSkipRipple=!0}return ce(()=>{p(!0)}),Object.assign(o,{click:A}),()=>{let s=[];e.icon!==void 0&&s.push(f(ie,{name:e.icon,left:e.stack===!1&&w.value===!0,role:"img","aria-hidden":"true"})),w.value===!0&&s.push(f("span",{class:"block"},[e.label])),s=O(t.default,s),e.iconRight!==void 0&&e.round===!1&&s.push(f(ie,{name:e.iconRight,right:e.stack===!1&&w.value===!0,role:"img","aria-hidden":"true"}));const _=[f("span",{class:"q-focus-helper",ref:x})];return e.loading===!0&&e.percentage!==void 0&&_.push(f("span",{class:"q-btn__progress absolute-full overflow-hidden"+(e.darkPercentage===!0?" q-btn__progress--dark":"")},[f("span",{class:"q-btn__progress-indicator fit block",style:F.value})])),_.push(f("span",{class:"q-btn__content text-center col items-center q-anchor--skip "+u.value},s)),e.loading!==null&&_.push(f(Re,{name:"q-transition--fade"},()=>e.loading===!0?[f("span",{key:"loading",class:"absolute-full flex flex-center"},t.loading!==void 0?t.loading():[f(Tt)])]:null)),se(f(b.value,S.value,_),[[Vt,I.value,void 0,$.value]])}}});let G=0;const Gt={fullscreen:Boolean,noRouteFullscreenExit:Boolean},Zt=["update:fullscreen","fullscreen"];function en(){const e=z(),{props:t,emit:n,proxy:o}=e;let l,a,u;const r=P(!1);Oe(e)===!0&&Y(()=>o.$route.fullPath,()=>{t.noRouteFullscreenExit!==!0&&c()}),Y(()=>t.fullscreen,g=>{r.value!==g&&y()}),Y(r,g=>{n("update:fullscreen",g),n("fullscreen",g)});function y(){r.value===!0?c():b()}function b(){r.value!==!0&&(r.value=!0,u=o.$el.parentNode,u.replaceChild(a,o.$el),document.body.appendChild(o.$el),G++,G===1&&document.body.classList.add("q-body--fullscreen-mixin"),l={handler:c},_e.add(l))}function c(){r.value===!0&&(l!==void 0&&(_e.remove(l),l=void 0),u.replaceChild(o.$el,a),r.value=!1,G=Math.max(0,G-1),G===0&&(document.body.classList.remove("q-body--fullscreen-mixin"),o.$el.scrollIntoView!==void 0&&setTimeout(()=>{o.$el.scrollIntoView()})))}return tt(()=>{a=document.createElement("span")}),de(()=>{t.fullscreen===!0&&b()}),ce(c),Object.assign(o,{toggleFullscreen:y,setFullscreen:b,exitFullscreen:c}),{inFullscreen:r,toggleFullscreen:y}}const tn=["top","right","bottom","left"],nn=["regular","flat","outline","push","unelevated"],an=N({name:"QCarousel",props:{...Qe,...ft,...Gt,transitionPrev:{type:String,default:"fade"},transitionNext:{type:String,default:"fade"},height:String,padding:Boolean,controlColor:String,controlTextColor:String,controlType:{type:String,validator:e=>nn.includes(e),default:"flat"},autoplay:[Number,Boolean],arrows:Boolean,prevIcon:String,nextIcon:String,navigation:Boolean,navigationPosition:{type:String,validator:e=>tn.includes(e)},navigationIcon:String,navigationActiveIcon:String,thumbnails:Boolean},emits:[...Zt,...gt],setup(e,{slots:t}){const{proxy:{$q:n}}=z(),o=Ue(e,n);let l,a;const{updatePanelsList:u,getPanelContent:r,panelDirectives:y,goToPanel:b,previousPanel:c,nextPanel:g,getEnabledPanels:i,panelIndex:x}=mt(),{inFullscreen:h}=en(),C=d(()=>h.value!==!0&&e.height!==void 0?{height:e.height}:{}),m=d(()=>e.vertical===!0?"vertical":"horizontal"),w=d(()=>`q-carousel q-panel-parent q-carousel--with${e.padding===!0?"":"out"}-padding`+(h.value===!0?" fullscreen":"")+(o.value===!0?" q-carousel--dark q-dark":"")+(e.arrows===!0?` q-carousel--arrows-${m.value}`:"")+(e.navigation===!0?` q-carousel--navigation-${k.value}`:"")),I=d(()=>{const q=[e.prevIcon||n.iconSet.carousel[e.vertical===!0?"up":"left"],e.nextIcon||n.iconSet.carousel[e.vertical===!0?"down":"right"]];return e.vertical===!1&&n.lang.rtl===!0?q.reverse():q}),$=d(()=>e.navigationIcon||n.iconSet.carousel.navigationIcon),F=d(()=>e.navigationActiveIcon||$.value),k=d(()=>e.navigationPosition||(e.vertical===!0?"right":"bottom")),S=d(()=>({color:e.controlColor,textColor:e.controlTextColor,round:!0,[e.controlType]:!0,dense:!0}));Y(()=>e.modelValue,()=>{e.autoplay&&(clearInterval(l),A())}),Y(()=>e.autoplay,q=>{q?A():clearInterval(l)});function A(){const q=nt(e.autoplay)===!0?e.autoplay:5e3;l=setTimeout(q>=0?g:c,Math.abs(q))}de(()=>{e.autoplay&&A()}),ce(()=>{clearInterval(l)});function E(q,B){return f("div",{class:`q-carousel__control q-carousel__navigation no-wrap absolute flex q-carousel__navigation--${q} q-carousel__navigation--${k.value}`+(e.controlColor!==void 0?` text-${e.controlColor}`:"")},[f("div",{class:"q-carousel__navigation-inner flex flex-center no-wrap"},i().map(B))])}function T(){const q=[];if(e.navigation===!0){const B=t["navigation-icon"]!==void 0?t["navigation-icon"]:v=>f(oe,{key:"nav"+v.name,class:`q-carousel__navigation-icon q-carousel__navigation-icon--${v.active===!0?"":"in"}active`,...v.btnProps,onClick:v.onClick}),p=a-1;q.push(E("buttons",(v,s)=>{const _=v.props.name,j=x.value===s;return B({index:s,maxIndex:p,name:_,active:j,btnProps:{icon:j===!0?F.value:$.value,size:"sm",...S.value},onClick:()=>{b(_)}})}))}else if(e.thumbnails===!0){const B=e.controlColor!==void 0?` text-${e.controlColor}`:"";q.push(E("thumbnails",p=>{const v=p.props;return f("img",{key:"tmb#"+v.name,class:`q-carousel__thumbnail q-carousel__thumbnail--${v.name===e.modelValue?"":"in"}active`+B,src:v.imgSrc||v["img-src"],onClick:()=>{b(v.name)}})}))}return e.arrows===!0&&x.value>=0&&((e.infinite===!0||x.value>0)&&q.push(f("div",{key:"prev",class:`q-carousel__control q-carousel__arrow q-carousel__prev-arrow q-carousel__prev-arrow--${m.value} absolute flex flex-center`},[f(oe,{icon:I.value[0],...S.value,onClick:c})])),(e.infinite===!0||x.value<a-1)&&q.push(f("div",{key:"next",class:`q-carousel__control q-carousel__arrow q-carousel__next-arrow q-carousel__next-arrow--${m.value} absolute flex flex-center`},[f(oe,{icon:I.value[1],...S.value,onClick:g})]))),O(t.control,q)}return()=>(a=u(t),f("div",{class:w.value,style:C.value},[ct("div",{class:"q-carousel__slides-container"},r(),"sl-cont",e.swipeable,()=>y.value)].concat(T())))}}),on="/2023-greeting-card/assets/welcome_bg.efb24ff5.jpg",un="/2023-greeting-card/assets/dongfang_chiguo.1d1368f9.jpg",ln="/2023-greeting-card/assets/nanfang_zenzhang.0578572a.jpg",rn="/2023-greeting-card/assets/xifang_guangmu.536e1152.jpg",sn="/2023-greeting-card/assets/beifang_duoweng.45f15824.jpg",cn="/2023-greeting-card/assets/lion_left.cf00f94e.jpg",dn="/2023-greeting-card/assets/lion_right.941435b6.jpg",vn="/2023-greeting-card/assets/final.01778c61.jpg",fn="/2023-greeting-card/assets/logo.966f0948.png",gn="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAArCAMAAAC+cAPKAAAAM1BMVEUAAADvFjnvFjnvFjnvFjnvFjnvFjnvFjnvFjnvFjnvFjnvFjnvFjnvFjnvFjnvFjnvFjkWyH64AAAAEHRSTlMACDIe8J0+D7ysT5F2181XdIeLeAAAAJJJREFUOMutk8sOgzAMBHGAhPCc///aHopaqc3uIWKvI0sjez10JAzLBm5Zs+nUg5CkCsyKjYBiq2EzVK3CatioNYk+zcNo7kYlGVaMZs82L9iMZrYbEzEby1olAYtGXBpNBsXDiGiAugg0HtBG5T3SOGnMN/gv884nS/zc+JvU9IZW68pNziJeTXagmuYMIQrwAkYWC1P5c5JgAAAAAElFTkSuQmCC",mn="/2023-greeting-card/assets/music_disk.39f1a54c.svg",pn="/2023-greeting-card/assets/rise_of_dragon.dc2b6d0d.mp3",he=e=>(je("data-v-2fb774e6"),e=e(),De(),e),hn=he(()=>V("img",{id:"music_play",class:"first first_no_play",src:gn},null,-1)),bn=he(()=>V("img",{id:"music",src:mn},null,-1)),yn=he(()=>V("source",{src:pn,type:"audio/mpeg"},null,-1)),_n=[yn],xn=te({__name:"MusicDisk",setup(e,{expose:t}){const n="play",o="stop",l=P(),a=P(o);var u=null,r=null;de(()=>{u=document.getElementById("music"),r=document.getElementById("music_play")});const y=()=>{var g,i;var c=r.getAttribute("class");c==="first_play"?((g=l.value)==null||g.play(),a.value=n,setTimeout(function(){r&&r.setAttribute("class","first_no_play"),u&&(u.style.animationPlayState="running")},1e3)):((i=l.value)==null||i.pause(),a.value=o,r&&r.setAttribute("class","first_play"),u&&u.setAttribute("class","play"),setTimeout(function(){u&&(u.style.animationPlayState="running")},1e3))};return t({play:()=>{var c=r.getAttribute("class");c!=="first_play"&&y()}}),(c,g)=>(ve(),fe("div",{class:"music",onTouchend:y},[hn,bn,V("audio",{ref_key:"audio",ref:l,autoplay:"true",loop:""},_n,512)],32))}});const be=(e,t)=>{const n=e.__vccOpts||e;for(const[o,l]of t)n[o]=l;return n},kn=be(xn,[["__scopeId","data-v-2fb774e6"]]),Cn=at('<div class="content" data-v-6c61348a><div class="poem" data-v-6c61348a><div class="vertical-text title text-h4" data-v-6c61348a>\u6B61\u6176\u5143\u65E6</div><div class="vertical-text first text-h3" data-v-6c61348a>\u9F8D\u9A30\u7345\u821E\u8CC0\u8C50\u5E74\uFF0C</div><div class="vertical-text second text-h3" data-v-6c61348a>\u56DB\u5927\u5929\u738B\u5C55\u65B0\u984F\u3002</div><div class="vertical-text third text-h3" data-v-6c61348a>\u9748\u6027\u76DB\u5BB4\u8FCE\u8CD3\u5BA2\uFF0C</div><div class="vertical-text fourth text-h3" data-v-6c61348a>\u767E\u76F8\u842C\u884C\u91D1\u525B\u79AA\u3002</div></div><div class="tap-screen" data-v-6c61348a>\u70B9\u51FB\u5C4F\u5E55</div><div class="source" data-v-6c61348a>\u5357\u5929\u6781\u5730\u5927\u96F7\u97F3\u5BFA</div></div>',1),An=[Cn],qn=te({__name:"Welcome",emits:["touched"],setup(e,{emit:t}){const n=()=>{t("touched")};return(o,l)=>(ve(),fe("div",{class:"welcome-page",onTouchend:n},An,32))}});const wn=be(qn,[["__scopeId","data-v-6c61348a"]]),ye=e=>(je("data-v-f8defd92"),e=e(),De(),e),Sn={class:"q-pa-md slides"},Bn=ye(()=>V("div",{class:"logo"},[V("img",{src:fn})],-1)),$n=ye(()=>V("div",{class:"comment"},[V("div",{class:"text-h5"},"\u606D\u795D\u656C\u611B\u7684 \u8584\u4F3D\u68B5 \u667A\u53CA\u7DAD\u6469\u8A70 \u5E2B\u5C0A\u3001"),V("br"),V("div",{class:"text-h5"}," \u606D\u795D\u656C\u611B\u7684 \u8584\u4F3D\u68B5 \u667A\u53CA\u7DAD\u6469\u8A70 \u5E2B\u5C0A\u3001 \u5168\u4E16\u754C\u91D1\u525B\u5144\u5F1F\u59D0\u59B9\u3001\u9577\u8001\u3001\u4E0A\u5E2B\u3001\u884C\u8005\uFF1A \u65B0\u5E74\u5FEB\u6A02\uFF01\u5409\u7965\u5713\u6EFF\uFF01 "),V("br"),V("div",{class:"text-h6"}," \u5357\u5929\u6975\u5730\u5927\u96F7\u97F3\u91D1\u525B\u79AA\u5BFA\u5F1F\u5B50 \u8654\u8AA0\u4F9B\u5949 2023.1.1 ")],-1)),En=ye(()=>V("div",{class:"annotation text-caption"},"\u914D\u6A02\uFF1A\u91D1\u525B\u8056\u6E90\u8F49\u4E16\u8005\u300A\u9F8D\u6A02\u300B",-1)),Pn=te({__name:"HomeView",setup(e){const t=P(),n=P(),o=P(!1),l=P(!1),a=P(0),u=P(!1),r=P(!0),y=()=>{var c,g;console.log("p"),(c=n.value)==null||c.play(),u.value=!0,(g=t.value)==null||g.next()},b=()=>{a.value!==0?(o.value=!0,l.value=!0):(o.value=!1,l.value=!1),a.value===7&&(u.value=!1)};return(c,g)=>(ve(),fe("div",Sn,[R(an,{onTransition:b,"transition-duration":1e3,modelValue:a.value,"onUpdate:modelValue":g[1]||(g[1]=i=>a.value=i),fullscreen:r.value,"onUpdate:fullscreen":g[2]||(g[2]=i=>r.value=i),autoplay:u.value,vertical:"","transition-prev":"slide-down","transition-next":"slide-up",swipeable:"",animated:"","control-color":"white","navigation-icon":"radio_button_unchecked",navigation:l.value,padding:"",ti:"",ref_key:"carousel",ref:t,arrows:o.value,height:"300px",class:"bg-purple text-white shadow-1 rounded-borders"},{control:Q(()=>[se(R(Se,{position:"top-left",class:"text-white rounded-borders",style:{background:"rgba(0, 0, 0, 0.3)",padding:"4px 8px"}},{default:Q(()=>[R(Et,{dense:"",dark:"",color:"orange",modelValue:u.value,"onUpdate:modelValue":g[0]||(g[0]=i=>u.value=i),label:"\u81EA\u52D5\u64AD\u653E"},null,8,["modelValue"])]),_:1},512),[[ot,a.value!==0&&a.value!==7]]),R(Se,{class:"text-white rounded-borders",style:{background:"rgba(0, 0, 0, 0.3)",padding:"4px 8px"}},{default:Q(()=>[R(kn,{ref_key:"musicDiskRef",ref:n},null,512)]),_:1})]),default:Q(()=>[R(M,{name:0,"img-src":on},{default:Q(()=>[R(wn,{onTouched:y})]),_:1}),R(M,{name:1,"img-src":un}),R(M,{name:2,"img-src":ln}),R(M,{name:3,"img-src":rn}),R(M,{name:4,"img-src":sn}),R(M,{name:5,"img-src":cn}),R(M,{name:6,"img-src":dn}),R(M,{name:7,"img-src":vn},{default:Q(()=>[Bn,$n,En]),_:1})]),_:1},8,["modelValue","fullscreen","autoplay","navigation","arrows"])]))}});const Tn=be(Pn,[["__scopeId","data-v-f8defd92"]]);export{Tn as default};