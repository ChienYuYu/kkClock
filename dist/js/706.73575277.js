(self["webpackChunkkkclock"]=self["webpackChunkkkclock"]||[]).push([[706],{8803:function(t,e,s){s(6699),s(1703),
/*!
  * Bootstrap toast.js v5.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
function(e,n){t.exports=n(s(4130),s(6221),s(1884))}(0,(function(t,e,s){"use strict";const n=t=>t&&"object"===typeof t&&"default"in t?t:{default:t},i=n(t),o=n(e),a=n(s),r=t=>null===t||void 0===t?`${t}`:{}.toString.call(t).match(/\s([a-z]+)/i)[1].toLowerCase(),l=t=>{let e=t.getAttribute("data-bs-target");if(!e||"#"===e){let s=t.getAttribute("href");if(!s||!s.includes("#")&&!s.startsWith("."))return null;s.includes("#")&&!s.startsWith("#")&&(s=`#${s.split("#")[1]}`),e=s&&"#"!==s?s.trim():null}return e},c=t=>{const e=l(t);return e?document.querySelector(e):null},u=t=>!(!t||"object"!==typeof t)&&("undefined"!==typeof t.jquery&&(t=t[0]),"undefined"!==typeof t.nodeType),d=(t,e,s)=>{Object.keys(s).forEach((n=>{const i=s[n],o=e[n],a=o&&u(o)?"element":r(o);if(!new RegExp(i).test(a))throw new TypeError(`${t.toUpperCase()}: Option "${n}" provided type "${a}" but expected type "${i}".`)}))},h=t=>!t||t.nodeType!==Node.ELEMENT_NODE||(!!t.classList.contains("disabled")||("undefined"!==typeof t.disabled?t.disabled:t.hasAttribute("disabled")&&"false"!==t.getAttribute("disabled"))),m=t=>{t.offsetHeight},f=()=>{const{jQuery:t}=window;return t&&!document.body.hasAttribute("data-bs-no-jquery")?t:null},_=[],p=t=>{"loading"===document.readyState?(_.length||document.addEventListener("DOMContentLoaded",(()=>{_.forEach((t=>t()))})),_.push(t)):t()},g=t=>{p((()=>{const e=f();if(e){const s=t.NAME,n=e.fn[s];e.fn[s]=t.jQueryInterface,e.fn[s].Constructor=t,e.fn[s].noConflict=()=>(e.fn[s]=n,t.jQueryInterface)}}))},b=(t,e="hide")=>{const s=`click.dismiss${t.EVENT_KEY}`,n=t.NAME;i.default.on(document,s,`[data-bs-dismiss="${n}"]`,(function(s){if(["A","AREA"].includes(this.tagName)&&s.preventDefault(),h(this))return;const i=c(this)||this.closest(`.${n}`),o=t.getOrCreateInstance(i);o[e]()}))},k="toast",y="bs.toast",v=`.${y}`,w=`mouseover${v}`,$=`mouseout${v}`,x=`focusin${v}`,I=`focusout${v}`,C=`hide${v}`,T=`hidden${v}`,L=`show${v}`,E=`shown${v}`,A="fade",j="hide",D="show",M="showing",N={animation:"boolean",autohide:"boolean",delay:"number"},W={animation:!0,autohide:!0,delay:5e3};class O extends a.default{constructor(t,e){super(t),this._config=this._getConfig(e),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get DefaultType(){return N}static get Default(){return W}static get NAME(){return k}show(){const t=i.default.trigger(this._element,L);if(t.defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(A);const e=()=>{this._element.classList.remove(M),i.default.trigger(this._element,E),this._maybeScheduleHide()};this._element.classList.remove(j),m(this._element),this._element.classList.add(D),this._element.classList.add(M),this._queueCallback(e,this._element,this._config.animation)}hide(){if(!this._element.classList.contains(D))return;const t=i.default.trigger(this._element,C);if(t.defaultPrevented)return;const e=()=>{this._element.classList.add(j),this._element.classList.remove(M),this._element.classList.remove(D),i.default.trigger(this._element,T)};this._element.classList.add(M),this._queueCallback(e,this._element,this._config.animation)}dispose(){this._clearTimeout(),this._element.classList.contains(D)&&this._element.classList.remove(D),super.dispose()}_getConfig(t){return t={...W,...o.default.getDataAttributes(this._element),..."object"===typeof t&&t?t:{}},d(k,t,this.constructor.DefaultType),t}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout((()=>{this.hide()}),this._config.delay)))}_onInteraction(t,e){switch(t.type){case"mouseover":case"mouseout":this._hasMouseInteraction=e;break;case"focusin":case"focusout":this._hasKeyboardInteraction=e;break}if(e)return void this._clearTimeout();const s=t.relatedTarget;this._element===s||this._element.contains(s)||this._maybeScheduleHide()}_setListeners(){i.default.on(this._element,w,(t=>this._onInteraction(t,!0))),i.default.on(this._element,$,(t=>this._onInteraction(t,!1))),i.default.on(this._element,x,(t=>this._onInteraction(t,!0))),i.default.on(this._element,I,(t=>this._onInteraction(t,!1)))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(t){return this.each((function(){const e=O.getOrCreateInstance(this,t);if("string"===typeof t){if("undefined"===typeof e[t])throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}return b(O),g(O),O}))},8379:function(t,e,s){"use strict";function n(t){const e=parseInt(t,10);return`${e.toFixed(0).replace(/./g,((t,e,s)=>e&&"."!==t&&(s.length-e)%3===0?`, ${t}`.replace(/\s/g,""):t))}`}s.d(e,{Z:function(){return n}})},8557:function(t,e,s){"use strict";function n(t){return{all:t=t||new Map,on:function(e,s){var n=t.get(e);n?n.push(s):t.set(e,[s])},off:function(e,s){var n=t.get(e);n&&(s?n.splice(n.indexOf(s)>>>0,1):t.set(e,[]))},emit:function(e,s){var n=t.get(e);n&&n.slice().map((function(t){t(s)})),(n=t.get("*"))&&n.slice().map((function(t){t(e,s)}))}}}s.d(e,{Z:function(){return o}});const i=n();var o=i},6706:function(t,e,s){"use strict";s.r(e),s.d(e,{default:function(){return Q}});var n=s(3396),i=s(9242);const o={class:"d-flex"},a={class:"sidebar vh-100 border-end bg-dark d-flex flex-column position-fixed"},r=(0,n._)("h2",{class:"px-5 py-4 text-white"},"後臺管理",-1),l={class:"list-group list-unstyled text-center"},c={class:""},u=(0,n._)("i",{class:"bi bi-basket-fill me-2"},null,-1),d=(0,n.Uk)("產品管理  "),h=(0,n._)("i",{class:"bi bi-list-ul me-2"},null,-1),m=(0,n.Uk)("訂單管理  "),f=(0,n._)("i",{class:"bi bi-ticket me-2"},null,-1),_=(0,n.Uk)("優惠券管理  "),p=(0,n._)("i",{class:"bi bi-card-image me-2"},null,-1),g=(0,n.Uk)("開啟前台  "),b=(0,n._)("i",{class:"bi bi-box-arrow-left me-2"},null,-1),k=(0,n.Uk)("登出 "),y=[b,k],v={class:"main bg-light"};function w(t,e,s,b,k,w){const $=(0,n.up)("router-link"),x=(0,n.up)("router-view"),I=(0,n.up)("ToastArea");return(0,n.wg)(),(0,n.iD)("div",o,[(0,n._)("aside",a,[r,(0,n._)("ul",l,[(0,n._)("li",c,[(0,n.Wm)($,{to:"/backstage/product_management",class:"menuItem text-decoration-none d-block p-4"},{default:(0,n.w5)((()=>[u,d])),_:1})]),(0,n._)("li",null,[(0,n.Wm)($,{to:"/backstage/order_management",class:"menuItem text-decoration-none d-block p-4"},{default:(0,n.w5)((()=>[h,m])),_:1})]),(0,n._)("li",null,[(0,n.Wm)($,{to:"/backstage/coupon_management",class:"menuItem text-decoration-none d-block p-4"},{default:(0,n.w5)((()=>[f,_])),_:1})]),(0,n._)("li",null,[(0,n.Wm)($,{to:"/kkClock/home",target:"_blank",class:"menuItem text-decoration-none d-block p-4"},{default:(0,n.w5)((()=>[p,g])),_:1})])]),(0,n._)("a",{href:"#",class:"mt-auto menuItem text-decoration-none d-block text-center border-top p-4",onClick:e[0]||(e[0]=(0,i.iM)((t=>w.logout()),["prevent"]))},y)]),(0,n._)("main",v,[(0,n.Wm)(x)]),(0,n.Wm)(I,{class:"ToastArea"})])}var $=s(8379),x=s(8557);function I(t,e,s,i,o,a){const r=(0,n.up)("Toast");return(0,n.wg)(),(0,n.iD)("div",null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(o.messages,((t,e)=>((0,n.wg)(),(0,n.j4)(r,{key:e,msg:t},null,8,["msg"])))),128))])}var C=s(7139);const T={class:"toast",role:"alert","aria-live":"assertive","aria-atomic":"true",ref:"toast"},L={class:"toast-header"},E={class:"me-auto"},A=(0,n._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"toast","aria-label":"Close"},null,-1),j={class:"toast-body"};function D(t,e,s,i,o,a){return(0,n.wg)(),(0,n.iD)("div",T,[(0,n._)("div",L,[(0,n._)("span",{class:(0,C.C_)([`bg-${s.msg.style}`,"p-2 rounded me-2 d-inline-block"])},null,2),(0,n._)("strong",E,(0,C.zw)(s.msg.title),1),A]),(0,n._)("div",j,(0,C.zw)(s.msg.content),1)],512)}var M=s(8803),N=s.n(M),W={props:["msg"],mounted(){const t=this.$refs.toast,e=new(N())(t,{delay:6e3});e.show()}},O=s(89);const Z=(0,O.Z)(W,[["render",D]]);var S=Z,U={inject:["emitter"],components:{Toast:S},data(){return{messages:[]}},mounted(){this.emitter.on("push-message",(t=>{const{style:e,title:s,content:n}=t;this.messages.push({style:e,title:s,content:n})}))}};const q=(0,O.Z)(U,[["render",I]]);var H=q,K={components:{ToastArea:H},provide(){return{currency:$.Z,emitter:x.Z}},methods:{logout(){const t="https://vue3-course-api.hexschool.io/logout";this.axios.post(t).then((()=>{this.$router.push("/kkClock_administrator/login")}))}},beforeCreate(){document.title=this.$route.meta.title},created(){const t=document.cookie.replace(/(?:(?:^|.*;\s*)kkclock\s*=\s*([^;]*).*$)|^.*$/,"$1");this.axios.defaults.headers.common.Authorization=t;const e="https://vue3-course-api.hexschool.io/api/user/check";this.axios.post(e).then((t=>{t.data.success||this.$router.push("/kkClock_administrator/login")}))}};const z=(0,O.Z)(K,[["render",w]]);var Q=z}}]);
//# sourceMappingURL=706.73575277.js.map