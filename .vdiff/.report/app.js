/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$2=globalThis,e$4=t$2.ShadowRoot&&(void 0===t$2.ShadyCSS||t$2.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$2=Symbol(),o$2=new WeakMap;let n$2 = class n{constructor(t,e,o){if(this._$cssResult$=!0,o!==s$2)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e;}get styleSheet(){let t=this.o;const s=this.t;if(e$4&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=o$2.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&o$2.set(s,t));}return t}toString(){return this.cssText}};const r$3=t=>new n$2("string"==typeof t?t:t+"",void 0,s$2),i$3=(t,...e)=>{const o=1===t.length?t[0]:e.reduce(((e,s,o)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[o+1]),t[0]);return new n$2(o,t,s$2)},S$1=(s,o)=>{if(e$4)s.adoptedStyleSheets=o.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const e of o){const o=document.createElement("style"),n=t$2.litNonce;void 0!==n&&o.setAttribute("nonce",n),o.textContent=e.cssText,s.appendChild(o);}},c$2=e$4?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r$3(e)})(t):t;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:i$2,defineProperty:e$3,getOwnPropertyDescriptor:r$2,getOwnPropertyNames:h$1,getOwnPropertySymbols:o$1,getPrototypeOf:n$1}=Object,a$1=globalThis,c$1=a$1.trustedTypes,l$1=c$1?c$1.emptyScript:"",p$1=a$1.reactiveElementPolyfillSupport,d$1=(t,s)=>t,u$1={toAttribute(t,s){switch(s){case Boolean:t=t?l$1:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,s){let i=t;switch(s){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t);}catch(t){i=null;}}return i}},f$1=(t,s)=>!i$2(t,s),y$1={attribute:!0,type:String,converter:u$1,reflect:!1,hasChanged:f$1};Symbol.metadata??=Symbol("metadata"),a$1.litPropertyMetadata??=new WeakMap;let b$1 = class b extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t);}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,s=y$1){if(s.state&&(s.attribute=!1),this._$Ei(),this.elementProperties.set(t,s),!s.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(t,i,s);void 0!==r&&e$3(this.prototype,t,r);}}static getPropertyDescriptor(t,s,i){const{get:e,set:h}=r$2(this.prototype,t)??{get(){return this[s]},set(t){this[s]=t;}};return {get(){return e?.call(this)},set(s){const r=e?.call(this);h.call(this,s),this.requestUpdate(t,r,i);},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??y$1}static _$Ei(){if(this.hasOwnProperty(d$1("elementProperties")))return;const t=n$1(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties);}static finalize(){if(this.hasOwnProperty(d$1("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(d$1("properties"))){const t=this.properties,s=[...h$1(t),...o$1(t)];for(const i of s)this.createProperty(i,t[i]);}const t=this[Symbol.metadata];if(null!==t){const s=litPropertyMetadata.get(t);if(void 0!==s)for(const[t,i]of s)this.elementProperties.set(t,i);}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const i=this._$Eu(t,s);void 0!==i&&this._$Eh.set(i,t);}this.elementStyles=this.finalizeStyles(this.styles);}static finalizeStyles(s){const i=[];if(Array.isArray(s)){const e=new Set(s.flat(1/0).reverse());for(const s of e)i.unshift(c$2(s));}else void 0!==s&&i.push(c$2(s));return i}static _$Eu(t,s){const i=s.attribute;return !1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev();}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)));}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.();}removeController(t){this._$EO?.delete(t);}_$E_(){const t=new Map,s=this.constructor.elementProperties;for(const i of s.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t);}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return S$1(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()));}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()));}attributeChangedCallback(t,s,i){this._$AK(t,i);}_$EC(t,s){const i=this.constructor.elementProperties.get(t),e=this.constructor._$Eu(t,i);if(void 0!==e&&!0===i.reflect){const r=(void 0!==i.converter?.toAttribute?i.converter:u$1).toAttribute(s,i.type);this._$Em=t,null==r?this.removeAttribute(e):this.setAttribute(e,r),this._$Em=null;}}_$AK(t,s){const i=this.constructor,e=i._$Eh.get(t);if(void 0!==e&&this._$Em!==e){const t=i.getPropertyOptions(e),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:u$1;this._$Em=e,this[e]=r.fromAttribute(s,t.type),this._$Em=null;}}requestUpdate(t,s,i){if(void 0!==t){if(i??=this.constructor.getPropertyOptions(t),!(i.hasChanged??f$1)(this[t],s))return;this.P(t,s,i);}!1===this.isUpdatePending&&(this._$ES=this._$ET());}P(t,s,i){this._$AL.has(t)||this._$AL.set(t,s),!0===i.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t);}async _$ET(){this.isUpdatePending=!0;try{await this._$ES;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,s]of this._$Ep)this[t]=s;this._$Ep=void 0;}const t=this.constructor.elementProperties;if(t.size>0)for(const[s,i]of t)!0!==i.wrapped||this._$AL.has(s)||void 0===this[s]||this.P(s,this[s],i);}let t=!1;const s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(s)):this._$EU();}catch(s){throw t=!1,this._$EU(),s}t&&this._$AE(s);}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t);}_$EU(){this._$AL=new Map,this.isUpdatePending=!1;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return !0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EC(t,this[t]))),this._$EU();}updated(t){}firstUpdated(t){}};b$1.elementStyles=[],b$1.shadowRootOptions={mode:"open"},b$1[d$1("elementProperties")]=new Map,b$1[d$1("finalized")]=new Map,p$1?.({ReactiveElement:b$1}),(a$1.reactiveElementVersions??=[]).push("2.0.4");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$1=globalThis,i$1=t$1.trustedTypes,s$1=i$1?i$1.createPolicy("lit-html",{createHTML:t=>t}):void 0,e$2="$lit$",h=`lit$${Math.random().toFixed(9).slice(2)}$`,o="?"+h,n=`<${o}>`,r$1=document,l=()=>r$1.createComment(""),c=t=>null===t||"object"!=typeof t&&"function"!=typeof t,a=Array.isArray,u=t=>a(t)||"function"==typeof t?.[Symbol.iterator],d="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,_=/>/g,m=RegExp(`>|${d}(?:([^\\s"'>=/]+)(${d}*=${d}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),p=/'/g,g=/"/g,$=/^(?:script|style|textarea|title)$/i,y=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),x=y(1),b=y(2),w=Symbol.for("lit-noChange"),T=Symbol.for("lit-nothing"),A=new WeakMap,E=r$1.createTreeWalker(r$1,129);function C(t,i){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==s$1?s$1.createHTML(i):i}const P=(t,i)=>{const s=t.length-1,o=[];let r,l=2===i?"<svg>":"",c=f;for(let i=0;i<s;i++){const s=t[i];let a,u,d=-1,y=0;for(;y<s.length&&(c.lastIndex=y,u=c.exec(s),null!==u);)y=c.lastIndex,c===f?"!--"===u[1]?c=v:void 0!==u[1]?c=_:void 0!==u[2]?($.test(u[2])&&(r=RegExp("</"+u[2],"g")),c=m):void 0!==u[3]&&(c=m):c===m?">"===u[0]?(c=r??f,d=-1):void 0===u[1]?d=-2:(d=c.lastIndex-u[2].length,a=u[1],c=void 0===u[3]?m:'"'===u[3]?g:p):c===g||c===p?c=m:c===v||c===_?c=f:(c=m,r=void 0);const x=c===m&&t[i+1].startsWith("/>")?" ":"";l+=c===f?s+n:d>=0?(o.push(a),s.slice(0,d)+e$2+s.slice(d)+h+x):s+h+(-2===d?i:x);}return [C(t,l+(t[s]||"<?>")+(2===i?"</svg>":"")),o]};class V{constructor({strings:t,_$litType$:s},n){let r;this.parts=[];let c=0,a=0;const u=t.length-1,d=this.parts,[f,v]=P(t,s);if(this.el=V.createElement(f,n),E.currentNode=this.el.content,2===s){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes);}for(;null!==(r=E.nextNode())&&d.length<u;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(e$2)){const i=v[a++],s=r.getAttribute(t).split(h),e=/([.?@])?(.*)/.exec(i);d.push({type:1,index:c,name:e[2],strings:s,ctor:"."===e[1]?k:"?"===e[1]?H:"@"===e[1]?I:R}),r.removeAttribute(t);}else t.startsWith(h)&&(d.push({type:6,index:c}),r.removeAttribute(t));if($.test(r.tagName)){const t=r.textContent.split(h),s=t.length-1;if(s>0){r.textContent=i$1?i$1.emptyScript:"";for(let i=0;i<s;i++)r.append(t[i],l()),E.nextNode(),d.push({type:2,index:++c});r.append(t[s],l());}}}else if(8===r.nodeType)if(r.data===o)d.push({type:2,index:c});else {let t=-1;for(;-1!==(t=r.data.indexOf(h,t+1));)d.push({type:7,index:c}),t+=h.length-1;}c++;}}static createElement(t,i){const s=r$1.createElement("template");return s.innerHTML=t,s}}function N(t,i,s=t,e){if(i===w)return i;let h=void 0!==e?s._$Co?.[e]:s._$Cl;const o=c(i)?void 0:i._$litDirective$;return h?.constructor!==o&&(h?._$AO?.(!1),void 0===o?h=void 0:(h=new o(t),h._$AT(t,s,e)),void 0!==e?(s._$Co??=[])[e]=h:s._$Cl=h),void 0!==h&&(i=N(t,h._$AS(t,i.values),h,e)),i}class S{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:s}=this._$AD,e=(t?.creationScope??r$1).importNode(i,!0);E.currentNode=e;let h=E.nextNode(),o=0,n=0,l=s[0];for(;void 0!==l;){if(o===l.index){let i;2===l.type?i=new M(h,h.nextSibling,this,t):1===l.type?i=new l.ctor(h,l.name,l.strings,this,t):6===l.type&&(i=new L(h,this,t)),this._$AV.push(i),l=s[++n];}o!==l?.index&&(h=E.nextNode(),o++);}return E.currentNode=r$1,e}p(t){let i=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class M{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,s,e){this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=e?.isConnected??!0;}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t?.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=N(this,t,i),c(t)?t===T||null==t||""===t?(this._$AH!==T&&this._$AR(),this._$AH=T):t!==this._$AH&&t!==w&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):u(t)?this.k(t):this._(t);}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t));}_(t){this._$AH!==T&&c(this._$AH)?this._$AA.nextSibling.data=t:this.T(r$1.createTextNode(t)),this._$AH=t;}$(t){const{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=V.createElement(C(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===e)this._$AH.p(i);else {const t=new S(e,this),s=t.u(this.options);t.p(i),this.T(s),this._$AH=t;}}_$AC(t){let i=A.get(t.strings);return void 0===i&&A.set(t.strings,i=new V(t)),i}k(t){a(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const h of t)e===i.length?i.push(s=new M(this.S(l()),this.S(l()),this,this.options)):s=i[e],s._$AI(h),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,i){for(this._$AP?.(!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i;}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t));}}class R{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,h){this.type=1,this._$AH=T,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=h,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=T;}_$AI(t,i=this,s,e){const h=this.strings;let o=!1;if(void 0===h)t=N(this,t,i,0),o=!c(t)||t!==this._$AH&&t!==w,o&&(this._$AH=t);else {const e=t;let n,r;for(t=h[0],n=0;n<h.length-1;n++)r=N(this,e[s+n],i,n),r===w&&(r=this._$AH[n]),o||=!c(r)||r!==this._$AH[n],r===T?t=T:t!==T&&(t+=(r??"")+h[n+1]),this._$AH[n]=r;}o&&!e&&this.j(t);}j(t){t===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"");}}class k extends R{constructor(){super(...arguments),this.type=3;}j(t){this.element[this.name]=t===T?void 0:t;}}class H extends R{constructor(){super(...arguments),this.type=4;}j(t){this.element.toggleAttribute(this.name,!!t&&t!==T);}}class I extends R{constructor(t,i,s,e,h){super(t,i,s,e,h),this.type=5;}_$AI(t,i=this){if((t=N(this,t,i,0)??T)===w)return;const s=this._$AH,e=t===T&&s!==T||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,h=t!==T&&(s===T||e);e&&this.element.removeEventListener(this.name,this,s),h&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t);}}class L{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){N(this,t);}}const Z=t$1.litHtmlPolyfillSupport;Z?.(V,M),(t$1.litHtmlVersions??=[]).push("3.1.4");const j=(t,i,s)=>{const e=s?.renderBefore??i;let h=e._$litPart$;if(void 0===h){const t=s?.renderBefore??null;e._$litPart$=h=new M(i.insertBefore(l(),t),t,void 0,s??{});}return h._$AI(t),h};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class s extends b$1{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0;}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=j(i,this.renderRoot,this.renderOptions);}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0);}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1);}render(){return w}}s._$litElement$=!0,s[("finalized")]=!0,globalThis.litElementHydrateSupport?.({LitElement:s});const r=globalThis.litElementPolyfillSupport;r?.({LitElement:s});(globalThis.litElementVersions??=[]).push("4.0.6");

class Button extends s {
	static properties = {
		disabled: { type: Boolean },
		text: { type: String }
	};
	static styles = [i$3`
		:host {
			display: inline-block;
		}
		button {
			align-items: center;
			border: 1px solid #cdd5dc;
			border-radius: 5px;
			cursor: pointer;
			display: flex;
			gap: 5px;
			line-height: 24px;
			margin: 0;
			outline: none;
			padding: 10px;
			user-select: none;
		}
		button,
		button[disabled]:hover {
			background-color: #ffffff;
			color: #6e7477;
		}
		button:hover,
		button:focus {
			background-color: #007bff;
			color: #ffffff;
		}
		button:focus-visible {
			border-color: #007bff;
			box-shadow: 0 0 0 2px #ffffff, 0 0 0 4px #007bff;
		}
		button[disabled] {
			cursor: default;
			opacity: 0.5;
		}
	`];
	constructor() {
		super();
		this.disabled = false;
	}
	render() {
		return x`<button ?disabled="${this.disabled}" type="button"><slot></slot>${this.text}</button>`;
	}
}

customElements.define('d2l-vdiff-report-button', Button);

const ICON_EMPTY = b`
	<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
		<path fill="currentColor" d="M5 22.12a3.1 3.1 0 0 0 2.21-.91l4.2-4.21-1.5-1.5.9-.9a7 7 0 1 0-1.41-1.42l-.9.9L7 12.59l-4.21 4.2A3.12 3.12 0 0 0 5 22.12ZM15 4a5 5 0 1 1-5 5 5 5 0 0 1 5-5ZM4.21 18.21 7 15.41 8.59 17l-2.8 2.79a1.15 1.15 0 0 1-1.59 0 1.12 1.12 0 0 1 0-1.59Z"/>
		<path fill="currentColor" d="M12 6h2v2h-2zM16 6h2v2h-2zM17.29 11.95l1.41-1.41a5.25 5.25 0 0 0-7.41 0l1.41 1.41a3.25 3.25 0 0 1 4.59 0Z"/>
	</svg>`;

const ICON_FULL = b`
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
	<rect width="22" height="18" x="1" y="3" fill="none" stroke="currentColor" stroke-width="2" rx="2"/>
</svg>
`;

const ICON_NEXT = b`
	<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 18 18">
		<path fill="currentColor" d="M5.49 15.61a1.5 1.5 0 0 1-.1-2.12L9.47 9 5.39 4.51a1.5 1.5 0 1 1 2.22-2.02L12.62 8A1.474 1.474 0 0 1 13 9a1.524 1.524 0 0 1-.38 1l-5.01 5.51a1.5 1.5 0 0 1-2.12.1z"/>
	</svg>
`;

const ICON_NO_GOLDEN = b`
	<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="100" height="100" viewBox="0 0 256 256">
		<g style="stroke:none;stroke-width:0;stroke-dasharray:none;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;fill:none;fill-rule:nonzero;opacity:1" transform="matrix(2.81 0 0 2.81 1.407 1.407)">
			<path d="M45 2.98a3.54 3.54 0 0 0-3.195 1.986L30.294 28.292a.665.665 0 0 1-.499.362L4.053 32.395c-1.352.196-2.453 1.125-2.875 2.425s-.077 2.699.902 3.653l18.626 18.156a.664.664 0 0 1 .191.586L16.5 82.851a3.542 3.542 0 0 0 1.417 3.485 3.55 3.55 0 0 0 3.754.273l23.024-12.106a.663.663 0 0 1 .307-.075c6.57-20.72 5.182-45.191-.002-71.448z" style="stroke:none;stroke-width:1;stroke-dasharray:none;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;fill:#ffcb68;fill-rule:nonzero;opacity:1"/>
			<path d="M45 2.98a3.54 3.54 0 0 1 3.195 1.986l11.511 23.326c.097.196.284.33.499.362l25.741 3.741a3.542 3.542 0 0 1 2.876 2.425 3.541 3.541 0 0 1-.902 3.653L69.295 56.629a.664.664 0 0 0-.191.586l4.398 25.636a3.542 3.542 0 0 1-1.417 3.485 3.55 3.55 0 0 1-3.754.273L45.308 74.502a.663.663 0 0 0-.307-.075C37.257 54.381 38.986 29.743 45 2.98z" style="stroke:none;stroke-width:1;stroke-dasharray:none;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;fill:#ffda77;fill-rule:nonzero;opacity:1"/>
			<ellipse cx="27.503" cy="49.938" rx="4.273" ry="5.868" style="stroke:none;stroke-width:1;stroke-dasharray:none;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;fill:#ff8798;fill-rule:nonzero;opacity:1" transform="rotate(-60 27.5 49.94)"/>
			<ellipse cx="62.498" cy="49.943" rx="5.868" ry="4.273" style="stroke:none;stroke-width:1;stroke-dasharray:none;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;fill:#ff8798;fill-rule:nonzero;opacity:1" transform="rotate(-30 62.497 49.94)"/>
			<path d="M69.996 88.021a4.595 4.595 0 0 1-2.128-.527L45 75.47 22.134 87.493a4.536 4.536 0 0 1-4.807-.349 4.535 4.535 0 0 1-1.815-4.463l4.367-25.461L1.381 39.189A4.537 4.537 0 0 1 .227 34.51a4.534 4.534 0 0 1 3.683-3.105l25.566-3.715L40.908 4.524C41.683 2.955 43.251 1.98 45 1.98s3.317.974 4.092 2.543l11.432 23.166 25.565 3.716a4.532 4.532 0 0 1 3.683 3.106 4.534 4.534 0 0 1-1.154 4.678L70.12 57.222l4.368 25.46a4.535 4.535 0 0 1-1.814 4.464 4.557 4.557 0 0 1-2.678.875zM45 73.427c.269 0 .534.065.771.188l23.028 12.107c.869.453 1.906.38 2.7-.196a2.548 2.548 0 0 0 1.02-2.508l-4.398-25.635a1.656 1.656 0 0 1 .48-1.473l18.623-18.154a2.543 2.543 0 0 0 .648-2.627 2.547 2.547 0 0 0-2.067-1.745l-25.741-3.741a1.661 1.661 0 0 1-1.252-.909L47.3 5.409c-.436-.881-1.317-1.429-2.3-1.429s-1.864.547-2.299 1.429l-11.51 23.325a1.66 1.66 0 0 1-1.252.909L4.197 33.384c-.972.141-1.765.81-2.068 1.744s-.055 1.942.648 2.628l18.626 18.156c.393.384.572.935.477 1.475l-4.396 25.632a2.55 2.55 0 0 0 1.019 2.508 2.553 2.553 0 0 0 2.702.195l23.022-12.104c.24-.125.506-.191.773-.191zm24.995-16.083zm-50.086-.298v.002-.002z" style="stroke:none;stroke-width:1;stroke-dasharray:none;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;fill:#000;fill-rule:nonzero;opacity:1"/>
			<path d="M36.256 59.104a1 1 0 0 1-.832-1.553A11.473 11.473 0 0 1 45 52.403c3.856 0 7.435 1.925 9.575 5.148a1 1 0 1 1-1.666 1.106 9.48 9.48 0 0 0-15.819 0 .998.998 0 0 1-.834.447zM30.5 45.938a1 1 0 0 1-1-1v-3.29a1 1 0 0 1 2 0v3.29a1 1 0 0 1-1 1zM59.5 45.938a1 1 0 0 1-1-1v-3.29a1 1 0 1 1 2 0v3.29a1 1 0 0 1-1 1z" style="stroke:none;stroke-width:1;stroke-dasharray:none;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;fill:#000;fill-rule:nonzero;opacity:1"/>
		</g>
	</svg>
`;

const ICON_PREV = b`
	<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 18 18">
		<path fill="currentColor" d="M9.39 15.51 4.38 10A1.524 1.524 0 0 1 4 9a1.474 1.474 0 0 1 .38-1l5.01-5.51a1.5 1.5 0 0 1 2.22 2.02L7.53 9l4.08 4.49a1.5 1.5 0 0 1-2.22 2.02z"/>
	</svg>
`;

const ICON_SPLIT = b`
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
	<rect width="22" height="18" x="1" y="3" fill="none" stroke="currentColor" stroke-width="2" rx="2"/>
	<line x1="12" y1="3" x2="12" y2="20" stroke="currentColor" stroke-width="2" />
</svg>
`;

const ICON_TADA = b`
<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 128 128">
	<path d="M72.59 58.36c-.65 1.18-1.3 2.37-1.92 3.55l-.52.98-.05.08c1.83 2.43 3.4 5.04 4.64 7.69.18.37.35.75.52 1.13 1.77-.52 3.55-.81 5.29-.88-1.31-3.47-3.33-7.07-6.3-10.71-.52-.63-1.09-1.23-1.66-1.84zM77.93 85.16c-.37 0-.75.02-1.13.06-2.07 6.54-8.79 9.4-15.89 8.52-11.15-1.37-21.38-9.85-24.81-20.5-.7-2.13-.94-4.25-1.02-6.51-.2-5.82.92-12.05 6.75-14.46l.07-.03c.19-.08.38-.13.57-.19-.42-.63-.85-1.29-1.26-2.02-.58-1.03-.93-2.12-1.14-3.18-6.25 2.18-10.06 7.7-12.73 13.78-2.55 5.82-19.12 50.57-19.12 50.57l-2.22 6c-.76 2.08-1.94 4.17-1.94 6.44 0 2.65 2.36 4.46 5.02 3.72 1.78-.5 3.74-1.42 5.55-2.14 3.83-1.56 10.93-4.63 10.93-4.63l29.68-12.22s14.31-5.18 20.33-10.85c2.92-2.75 5.26-6.71 6.29-11.44-.21-.11-.43-.23-.65-.32-1-.41-2.07-.6-3.28-.6zM55.68 47.54c.77 1.47 1.62 3.14 1.94 5.21 1.42.6 2.78 1.32 4.07 2.17.45-1.44.92-2.86 1.41-4.31-.21-.13-.42-.28-.63-.4-2.11-1.2-4.48-2.22-6.95-2.98.06.11.11.2.16.31z" style="fill:#fcc21b"/>
	<path d="M111.93 31.98c-.16 1-.12 2.42.04 3.4.17 1.1.42 2.27.82 3.31.57 1.46 1.27.95 2.7.75.99-.13 1.91-.06 2.89-.26 1.03-.21 2.05-.48 3.08-.68 2.42-.46 3.63-1 3.12-3.55-.37-1.84-.98-3.67-1.46-5.49-.44-.39-1.29-.17-1.81-.05-.92.21-1.83.26-2.75.42-1.66.27-3.4.47-5.03.86-.83.18-1.47.43-1.6 1.29z" style="fill:#d7598b"/>
	<path d="M98.87 62c.38.87 1.31.65 2.22.85 2.02.46 4.07.41 6.14.41.77 0 2.72.29 3.27-.4.44-.56.06-1.67 0-2.32l-.24-2.54c-.04-.4.03-3.02-.31-3.24-.58-.39-1.68-.2-2.34-.19-1.21.04-2.4.19-3.63.19-1.59 0-3.31.02-4.85.4-.54 1.43-.39 2.92-.39 4.49 0 .73-.16 1.67.13 2.35z" style="fill:#40c0e7"/>
	<path d="M91.92 105.19c-.83-1.23-1.24-2.88-3.09-2.7-1.74.17-3.28 1.55-4.81 2.3-.99.48-1.71 1.34-1.91 2.42-.23 1.23.28 2.21.87 3.26.44.79.73 1.7 1.08 2.53.36.86.91 1.63 1.28 2.48.25.6.17.55.72.76.28.1.74.18 1.04.19 1.75.05 3.65-1.72 4.92-2.76 1.02-.82 3.06-1.34 2.85-2.89-.15-1.15-.95-2.26-1.5-3.25-.46-.81-.95-1.59-1.45-2.34z" style="fill:#d7598b"/>
	<path d="M111.46 113.59c-.23-.15-.45-.24-.65-.27-1.06-.19-1.76 1.09-2.6 1.92-1.01.97-2.21 1.74-3.13 2.8-.99 1.16-.22 2.2.8 2.82 1.11.67 2.1 1.51 3.2 2.21.98.63 1.77 1.19 2.86.51.99-.62 1.54-1.71 2.22-2.62 1.26-1.7 3.41-3.07 1.3-4.94-1.18-1.05-2.7-1.57-4-2.43zM9 55.06c.05-.46 1.35-4.14.96-4.25-.89-.22-1.73-.64-2.63-.88-1.04-.27-2.11-.48-3.08-.96-1.17-.58-1.89-.29-2.38.36-.69.92-.91 2.57-1.24 3.58-.26.79-.42 1.69.14 2.25.64.63 1.7.99 2.53 1.26 1.04.34 2.2.94 3.27 1.04 1.46.16 2.28-1.16 2.43-2.4zM68.63 19.54c1.3.58 2.56.91 3.89 1.29.47.14.77.37 1.26.11.63-.32 1.33-1.43 1.68-2.04.83-1.51 1.44-3 2.01-4.59.31-.85 1.23-2.23 1-3.13-.2-.76-1.3-1.23-1.92-1.56-.83-.43-1.62-1.01-2.46-1.38-1.08-.47-2.56-.98-3.72-1.15-.64-.1-1.09.16-1.44.57-.32.37-.56.86-.8 1.31-1.21 2.32-2.7 5.81-2.65 8.49.02 1.27 2.19 1.65 3.15 2.08z" style="fill:#40c0e7"/>
	<path d="M16.65 33.3c.73 1.12 1.38 2.14 2.24 3.2.84 1.02 1.44 1.22 2.47.37.65-.52 1.39-.93 2.01-1.49.59-.52 1.08-1.18 1.67-1.72.42-.39 1.25-.78 1.49-1.32.33-.76-.36-1.42-.78-1.98-.52-.7-.92-1.46-1.49-2.16-.73-.88-1.52-1.71-2.34-2.53-.67-.67-1.48-1.7-2.24-2.22-.2-.13-.43-.22-.67-.25-.91-.13-1.99.39-2.7.81-.97.57-1.91 1.42-2.76 2.17-1.33 1.18-.04 2.73.74 3.85.78 1.08 1.62 2.13 2.36 3.27z" style="fill:#d7598b"/>
	<path d="M16.73 9.97c.67.72 1.5 1.59 2.44 2 .83.37 1.68-.37 2.35-.78.75-.46 1.36-1.13 1.92-1.8.51-.62 1.2-1.29 1.58-2.01.44-.82-.16-1.13-.77-1.62-.73-.6-1.47-1.22-2.09-1.94-.84-.98-1.68-2.08-2.57-2.98-.3-.31-.66-.39-1.04-.32-1.19.2-2.6 1.87-3.3 2.42-.56.43-1.54 1.19-1.71 1.9-.21.8.26 1.57.66 2.24.65 1.08 1.65 1.95 2.53 2.89z" style="fill:#40c0e7"/>
	<path d="M45.86 29.19c1.38 4.78-2.3 8.47-2.7 13-.12 1.31-.12 2.62.1 3.88.14.82.37 1.62.78 2.35.54.96 1.16 1.83 1.73 2.73.56.87 1.06 1.75 1.4 2.76.75 2.24.23 4.26-.09 6.48-.26 1.77-1.16 3.44-2.24 4.84-.33.43-1.24.98-1.02 1.61.03.11.23.15.52.15 1.2 0 4.03-.73 4.44-.92 1.8-.87 2.85-2.63 3.78-4.33 1.38-2.52 2.27-5.46 1.88-8.35-.08-.66-.26-1.28-.48-1.88-.67-1.79-1.78-3.39-2.41-5.22-.08-.22-.16-.44-.22-.67-.92-3.58 1.29-7.09 3.15-9.94 1.83-2.79 2.52-6.89 1.22-10.09-.66-1.62-1.72-3.24-3.01-4.43-1.53-1.42-3.86-2.71-3.6-5.16.22-2.13 1.66-4.37 2.75-6.13.54-.89 2.24-2.71 2.18-3.73-.05-1.04-1.5-1.56-2.19-2.17-1.56-1.38-2.8-2.44-4.8-3.07a2.93 2.93 0 0 0-.94-.17c-1.29 0-1.74 1.17-2.46 2.43-1.32 2.33-2.62 4.79-3.5 7.31-1.66 4.68-1.91 9.51 1.68 13.89 1.24 1.53 3.53 3.03 4.05 4.83zM62.08 69.54c.25.26.48.37.69.37.39 0 .7-.4.95-.87.19-.36.34-.73.46-1.12.67-2.25 2-4.48 3.1-6.56.2-.37.4-.73.59-1.09.76-1.43 1.54-2.86 2.35-4.28.63-1.12 1.26-2.25 1.94-3.33 1.78-2.85 4.18-5.89 7.2-7.48 1.9-1.02 4.04-1.49 5.95-2.5 2.17-1.13 3.44-2.84 4.85-4.79 1.4-1.93 2.13-4.31 3.41-6.34.54-.86.46-1.62 1.41-2.22 2.11-1.32 4.64-.87 6.98-1.32 5.53-1.06 6.02-8.35 10.54-10.98.95-.55 1.92-1.06 2.88-1.57.56-.3 1.64-.67 2.03-1.22.67-.94-.6-2.17-.98-3.03-.66-1.48-1.65-2.97-2.5-4.35-.72-1.16-1.36-2.21-2.64-2.21l-.25.02c-2.89.28-5.47 1.55-7.32 3.76-2.25 2.7-2.55 6.87-6.09 8.35-2.3.96-5.01.58-7.19 1.91-2.58 1.58-3.41 4.7-4.13 7.44-.54 2-.57 4.41-2.09 5.98-2.06 2.11-5.19 2.37-7.83 3.5-.71.31-1.39.68-2 1.16-3.35 2.64-5.25 6.97-6.75 10.85-.61 1.59-1.16 3.21-1.7 4.83-.5 1.51-.99 3.02-1.46 4.54-.24.78-.5 1.56-.74 2.35-.61 1.98-1.17 4.01-1.89 5.96-.5 1.25-.81 3.16.23 4.24zM127.44 86.8c-.19-.2-.46-.22-.73-.22l-.31.01-.17-.01c-.6-.04-1.1-.3-1.68-.5-2.67-.93-4.4-1.7-6.76-3.29-2.66-1.79-5.71-3.46-8.99-3.61l-.38-.01c-3.24 0-6.23 1.71-9.48 1.71h-.02c-3.6-.02-6.71-2.58-9.55-4.47-.24-.16-.48-.31-.74-.45-2.23-1.26-4.63-1.81-7.05-1.84-.06 0-.13-.02-.19-.02-1.67 0-3.35.26-4.99.72-1.6.44-3.15 1.08-4.63 1.87a37.476 37.476 0 0 0-5.99 3.97c-1.03.83-2.16 1.78-2.86 2.93-.38.61-.9 2.93.07 3.31l.13.03c.38 0 1-.4 1.27-.57 2.16-1.33 4.44-2.49 6.87-3.25 1.99-.63 4.08-1.09 6.15-1.17.17-.01.35-.02.52-.02 1.49 0 2.97.23 4.41.79l.06.03c2.01.8 3.69 2.18 5.35 3.53 2.44 1.98 5.15 2.42 7.91 2.42 2.15 0 4.33-.26 6.46-.26 2.23 0 4.39.29 6.38 1.46 1.62.97 3.08 2.24 4.33 3.59 1.38 1.47 3.14 2.7 5.21 3.02.88.14 1.68.21 2.57.22h.02c1.5 0 2.07-1.73 2.83-2.72 1.04-1.34 1.76-2.88 2.71-4.29.4-.62 1.95-2.23 1.27-2.91z" style="fill:#ed6c30"/>
</svg>
`;

const ICON_BROWSERS = {
	Chromium: b`<svg xmlns="http://www.w3.org/2000/svg" width="720" height="720" viewBox="0 0 190.5 190.5"><path d="M95.252 142.873c26.304 0 47.627-21.324 47.627-47.628s-21.323-47.628-47.627-47.628-47.627 21.324-47.627 47.628 21.323 47.628 47.627 47.628z" fill="#fff"/><path d="m54.005 119.07-41.24-71.43a95.227 95.227 0 0 0-.003 95.25 95.234 95.234 0 0 0 82.496 47.61l41.24-71.43v-.011a47.613 47.613 0 0 1-17.428 17.443 47.62 47.62 0 0 1-47.632.007 47.62 47.62 0 0 1-17.433-17.437z" fill="#229342"/><path d="m136.495 119.067-41.239 71.43a95.229 95.229 0 0 0 82.489-47.622A95.24 95.24 0 0 0 190.5 95.248a95.237 95.237 0 0 0-12.772-47.623H95.249l-.01.007a47.62 47.62 0 0 1 23.819 6.372 47.618 47.618 0 0 1 17.439 17.431 47.62 47.62 0 0 1-.001 47.633z" fill="#fbc116"/><path d="M95.252 132.961c20.824 0 37.705-16.881 37.705-37.706S116.076 57.55 95.252 57.55 57.547 74.431 57.547 95.255s16.881 37.706 37.705 37.706z" fill="#1a73e8"/><path d="M95.252 47.628h82.479A95.237 95.237 0 0 0 142.87 12.76 95.23 95.23 0 0 0 95.245 0a95.222 95.222 0 0 0-47.623 12.767 95.23 95.23 0 0 0-34.856 34.872l41.24 71.43.011.006a47.62 47.62 0 0 1-.015-47.633 47.61 47.61 0 0 1 41.252-23.815z" fill="#e33b2e"/></svg>`,
	Firefox: b`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 77.42 79.97">
	  <defs>
		<radialGradient id="fb" cx="-7907" cy="-8515" r="80.8" gradientTransform="translate(7974 8524)" gradientUnits="userSpaceOnUse">
		  <stop stop-color="#ffbd4f" offset=".129"/>
		  <stop stop-color="#ffac31" offset=".186"/>
		  <stop stop-color="#ff9d17" offset=".247"/>
		  <stop stop-color="#ff980e" offset=".283"/>
		  <stop stop-color="#ff563b" offset=".403"/>
		  <stop stop-color="#ff3750" offset=".467"/>
		  <stop stop-color="#f5156c" offset=".71"/>
		  <stop stop-color="#eb0878" offset=".782"/>
		  <stop stop-color="#e50080" offset=".86"/>
		</radialGradient>
		<radialGradient id="fc" cx="-7937" cy="-8482" r="80.8" gradientTransform="translate(7974 8524)" gradientUnits="userSpaceOnUse">
		  <stop stop-color="#960e18" offset=".3"/>
		  <stop stop-color="#b11927" stop-opacity=".74" offset=".351"/>
		  <stop stop-color="#db293d" stop-opacity=".343" offset=".435"/>
		  <stop stop-color="#f5334b" stop-opacity=".094" offset=".497"/>
		  <stop stop-color="#ff3750" stop-opacity="0" offset=".53"/>
		</radialGradient>
		<radialGradient id="fd" cx="-7927" cy="-8533" r="58.53" gradientTransform="translate(7974 8524)" gradientUnits="userSpaceOnUse">
		  <stop stop-color="#fff44f" offset=".132"/>
		  <stop stop-color="#ffdc3e" offset=".252"/>
		  <stop stop-color="#ff9d12" offset=".506"/>
		  <stop stop-color="#ff980e" offset=".526"/>
		</radialGradient>
		<radialGradient id="fe" cx="-7946" cy="-8461" r="38.47" gradientTransform="translate(7974 8524)" gradientUnits="userSpaceOnUse">
		  <stop stop-color="#3a8ee6" offset=".353"/>
		  <stop stop-color="#5c79f0" offset=".472"/>
		  <stop stop-color="#9059ff" offset=".669"/>
		  <stop stop-color="#c139e6" offset="1"/>
		</radialGradient>
		<radialGradient id="ff" cx="-7936" cy="-8492" r="20.4" gradientTransform="matrix(.972 -.235 .275 1.138 10090 7834)" gradientUnits="userSpaceOnUse">
		  <stop stop-color="#9059ff" stop-opacity="0" offset=".206"/>
		  <stop stop-color="#8c4ff3" stop-opacity=".064" offset=".278"/>
		  <stop stop-color="#7716a8" stop-opacity=".45" offset=".747"/>
		  <stop stop-color="#6e008b" stop-opacity=".6" offset=".975"/>
		</radialGradient>
		<radialGradient id="fg" cx="-7938" cy="-8518" r="27.68" gradientTransform="translate(7974 8524)" gradientUnits="userSpaceOnUse">
		  <stop stop-color="#ffe226" offset="0"/>
		  <stop stop-color="#ffdb27" offset=".121"/>
		  <stop stop-color="#ffc82a" offset=".295"/>
		  <stop stop-color="#ffa930" offset=".502"/>
		  <stop stop-color="#ff7e37" offset=".732"/>
		  <stop stop-color="#ff7139" offset=".792"/>
		</radialGradient>
		<radialGradient id="fh" cx="-7916" cy="-8536" r="118.1" gradientTransform="translate(7974 8524)" gradientUnits="userSpaceOnUse">
		  <stop stop-color="#fff44f" offset=".113"/>
		  <stop stop-color="#ff980e" offset=".456"/>
		  <stop stop-color="#ff5634" offset=".622"/>
		  <stop stop-color="#ff3647" offset=".716"/>
		  <stop stop-color="#e31587" offset=".904"/>
		</radialGradient>
		<radialGradient id="fi" cx="-7927" cy="-8523" r="86.5" gradientTransform="matrix(.105 .995 -.653 .069 -4685 8470)" gradientUnits="userSpaceOnUse">
		  <stop stop-color="#fff44f" offset="0"/>
		  <stop stop-color="#ffe847" offset=".06"/>
		  <stop stop-color="#ffc830" offset=".168"/>
		  <stop stop-color="#ff980e" offset=".304"/>
		  <stop stop-color="#ff8b16" offset=".356"/>
		  <stop stop-color="#ff672a" offset=".455"/>
		  <stop stop-color="#ff3647" offset=".57"/>
		  <stop stop-color="#e31587" offset=".737"/>
		</radialGradient>
		<radialGradient id="fj" cx="-7938" cy="-8508" r="73.72" gradientTransform="translate(7974 8524)" gradientUnits="userSpaceOnUse">
		  <stop stop-color="#fff44f" offset=".137"/>
		  <stop stop-color="#ff980e" offset=".48"/>
		  <stop stop-color="#ff5634" offset=".592"/>
		  <stop stop-color="#ff3647" offset=".655"/>
		  <stop stop-color="#e31587" offset=".904"/>
		</radialGradient>
		<radialGradient id="fk" cx="-7919" cy="-8504" r="80.69" gradientTransform="translate(7974 8524)" gradientUnits="userSpaceOnUse">
		  <stop stop-color="#fff44f" offset=".094"/>
		  <stop stop-color="#ffe141" offset=".231"/>
		  <stop stop-color="#ffaf1e" offset=".509"/>
		  <stop stop-color="#ff980e" offset=".626"/>
		</radialGradient>
		<linearGradient id="fa" x1="70.79" x2="6.447" y1="12.39" y2="74.47" gradientTransform="translate(-1.3 -.004)" gradientUnits="userSpaceOnUse">
		  <stop stop-color="#fff44f" offset=".048"/>
		  <stop stop-color="#ffe847" offset=".111"/>
		  <stop stop-color="#ffc830" offset=".225"/>
		  <stop stop-color="#ff980e" offset=".368"/>
		  <stop stop-color="#ff8b16" offset=".401"/>
		  <stop stop-color="#ff672a" offset=".462"/>
		  <stop stop-color="#ff3647" offset=".534"/>
		  <stop stop-color="#e31587" offset=".705"/>
		</linearGradient>
		<linearGradient id="fl" x1="70.01" x2="15.27" y1="12.06" y2="66.81" gradientTransform="translate(-1.3 -.004)" gradientUnits="userSpaceOnUse">
		  <stop stop-color="#fff44f" stop-opacity=".8" offset=".167"/>
		  <stop stop-color="#fff44f" stop-opacity=".634" offset=".266"/>
		  <stop stop-color="#fff44f" stop-opacity=".217" offset=".489"/>
		  <stop stop-color="#fff44f" stop-opacity="0" offset=".6"/>
		</linearGradient>
	  </defs>
	  <path d="M74.62 26.83c-1.684-4.052-5.1-8.427-7.775-9.81a40.27 40.27 0 0 1 3.925 11.76l.007.065c-4.382-10.92-11.81-15.33-17.88-24.92a47.099 47.099 0 0 1-.913-1.484 12.24 12.24 0 0 1-.427-.8 7.053 7.053 0 0 1-.578-1.535.1.1 0 0 0-.088-.1.138.138 0 0 0-.073 0c-.005 0-.013.009-.019.011s-.019.011-.028.015l.015-.026c-9.735 5.7-13.04 16.25-13.34 21.53a19.39 19.39 0 0 0-10.67 4.111 11.59 11.59 0 0 0-1-.758 17.97 17.97 0 0 1-.109-9.473 28.7 28.7 0 0 0-9.329 7.21h-.018c-1.536-1.947-1.428-8.367-1.34-9.708a6.928 6.928 0 0 0-1.294.687 28.22 28.22 0 0 0-3.788 3.245 33.84 33.84 0 0 0-3.623 4.347v.006-.007a32.73 32.73 0 0 0-5.2 11.74l-.052.256a61.89 61.89 0 0 0-.381 2.42c0 .029-.006.056-.009.085a36.94 36.94 0 0 0-.629 5.343v.2a38.76 38.76 0 0 0 76.95 6.554c.065-.5.118-.995.176-1.5a39.86 39.86 0 0 0-2.514-19.47zM29.95 57.17c.181.087.351.181.537.264l.027.017q-.282-.135-.564-.281zm40.828-28.314v-.037l.007.041z" fill="url(#fa)" transform="translate(.697 .72) scale(.98198)"/>
	  <path d="M74.62 26.83c-1.684-4.052-5.1-8.427-7.775-9.81a40.27 40.27 0 0 1 3.925 11.76v.037l.007.041a35.1 35.1 0 0 1-1.206 26.16c-4.442 9.531-15.19 19.3-32.02 18.82-18.18-.515-34.2-14.01-37.19-31.68-.545-2.787 0-4.2.274-6.465a28.88 28.88 0 0 0-.623 5.348v.2a38.76 38.76 0 0 0 76.95 6.554c.065-.5.118-.995.176-1.5a39.86 39.86 0 0 0-2.514-19.47z" fill="url(#fb)" transform="translate(.697 .72) scale(.98198)"/>
	  <path d="M74.62 26.83c-1.684-4.052-5.1-8.427-7.775-9.81a40.27 40.27 0 0 1 3.925 11.76v.037l.007.041a35.1 35.1 0 0 1-1.206 26.16c-4.442 9.531-15.19 19.3-32.02 18.82-18.18-.515-34.2-14.01-37.19-31.68-.545-2.787 0-4.2.274-6.465a28.88 28.88 0 0 0-.623 5.348v.2a38.76 38.76 0 0 0 76.95 6.554c.065-.5.118-.995.176-1.5a39.86 39.86 0 0 0-2.514-19.47z" fill="url(#fc)" transform="translate(.697 .72) scale(.98198)"/>
	  <path d="M55.78 31.38c.084.059.162.118.241.177a21.1 21.1 0 0 0-3.6-4.695C40.371 14.812 49.264.742 50.763.022L50.778 0c-9.735 5.7-13.04 16.25-13.34 21.53.452-.031.9-.069 1.362-.069a19.56 19.56 0 0 1 16.98 9.917z" fill="url(#fd)" transform="translate(.697 .72) scale(.98198)"/>
	  <path d="M38.82 33.79c-.064.964-3.47 4.289-4.661 4.289-11.02 0-12.81 6.667-12.81 6.667.488 5.614 4.4 10.24 9.129 12.68.216.112.435.213.654.312q.569.252 1.138.466a17.24 17.24 0 0 0 5.043.973c19.32.906 23.06-23.1 9.119-30.07a13.38 13.38 0 0 1 9.345 2.269 19.56 19.56 0 0 0-16.98-9.917c-.46 0-.91.038-1.362.069a19.39 19.39 0 0 0-10.67 4.111c.591.5 1.258 1.168 2.663 2.553 2.63 2.591 9.375 5.275 9.39 5.59z" fill="url(#fe)" transform="translate(.697 .72) scale(.98198)"/>
	  <path d="M38.82 33.79c-.064.964-3.47 4.289-4.661 4.289-11.02 0-12.81 6.667-12.81 6.667.488 5.614 4.4 10.24 9.129 12.68.216.112.435.213.654.312q.569.252 1.138.466a17.24 17.24 0 0 0 5.043.973c19.32.906 23.06-23.1 9.119-30.07a13.38 13.38 0 0 1 9.345 2.269 19.56 19.56 0 0 0-16.98-9.917c-.46 0-.91.038-1.362.069a19.39 19.39 0 0 0-10.67 4.111c.591.5 1.258 1.168 2.663 2.553 2.63 2.591 9.375 5.275 9.39 5.59z" fill="url(#ff)" transform="translate(.697 .72) scale(.98198)"/>
	  <path d="M24.96 24.36c.314.2.573.374.8.531a17.97 17.97 0 0 1-.109-9.473 28.7 28.7 0 0 0-9.329 7.21c.189-.005 5.811-.106 8.638 1.732z" fill="url(#fg)" transform="translate(.697 .72) scale(.98198)"/>
	  <path d="M.354 42.16c2.991 17.67 19.01 31.17 37.19 31.68 16.83.476 27.58-9.294 32.02-18.82a35.1 35.1 0 0 0 1.206-26.16v-.037c0-.029-.006-.046 0-.037l.007.065c1.375 8.977-3.191 17.67-10.33 23.56l-.022.05c-13.91 11.33-27.22 6.834-29.91 5q-.282-.135-.564-.281c-8.109-3.876-11.46-11.26-10.74-17.6a9.953 9.953 0 0 1-9.181-5.775 14.62 14.62 0 0 1 14.25-.572 19.3 19.3 0 0 0 14.55.572c-.015-.315-6.76-3-9.39-5.59-1.405-1.385-2.072-2.052-2.663-2.553a11.59 11.59 0 0 0-1-.758c-.23-.157-.489-.327-.8-.531-2.827-1.838-8.449-1.737-8.635-1.732h-.018c-1.536-1.947-1.428-8.367-1.34-9.708a6.928 6.928 0 0 0-1.294.687 28.22 28.22 0 0 0-3.788 3.245 33.84 33.84 0 0 0-3.638 4.337v.006-.007a32.73 32.73 0 0 0-5.2 11.74c-.019.079-1.396 6.099-.717 9.221z" fill="url(#fh)" transform="translate(.697 .72) scale(.98198)"/>
	  <path d="M52.42 26.86a21.1 21.1 0 0 1 3.6 4.7c.213.161.412.321.581.476 8.787 8.1 4.183 19.55 3.84 20.36 7.138-5.881 11.7-14.58 10.33-23.56-4.384-10.93-11.82-15.34-17.88-24.93a47.099 47.099 0 0 1-.913-1.484 12.24 12.24 0 0 1-.427-.8 7.053 7.053 0 0 1-.578-1.535.1.1 0 0 0-.088-.1.138.138 0 0 0-.073 0c-.005 0-.013.009-.019.011s-.019.011-.028.015c-1.499.711-10.39 14.79 1.66 26.83z" fill="url(#fi)" transform="translate(.697 .72) scale(.98198)"/>
	  <path d="M56.6 32.04a8.083 8.083 0 0 0-.581-.476c-.079-.059-.157-.118-.241-.177a13.38 13.38 0 0 0-9.345-2.269c13.94 6.97 10.2 30.97-9.119 30.07a17.24 17.24 0 0 1-5.043-.973q-.569-.213-1.138-.466c-.219-.1-.438-.2-.654-.312l.027.017c2.694 1.839 16 6.332 29.91-5l.022-.05c.347-.81 4.951-12.26-3.84-20.36z" fill="url(#fj)" transform="translate(.697 .72) scale(.98198)"/>
	  <path d="M21.35 44.74s1.789-6.667 12.81-6.667c1.191 0 4.6-3.325 4.661-4.289a19.3 19.3 0 0 1-14.55-.572 14.62 14.62 0 0 0-14.25.572 9.953 9.953 0 0 0 9.181 5.775c-.718 6.337 2.632 13.72 10.74 17.6.181.087.351.181.537.264-4.733-2.445-8.641-7.069-9.129-12.68z" fill="url(#fk)" transform="translate(.697 .72) scale(.98198)"/>
	  <path d="M74.62 26.83c-1.684-4.052-5.1-8.427-7.775-9.81a40.27 40.27 0 0 1 3.925 11.76l.007.065c-4.382-10.92-11.81-15.33-17.88-24.92a47.099 47.099 0 0 1-.913-1.484 12.24 12.24 0 0 1-.427-.8 7.053 7.053 0 0 1-.578-1.535.1.1 0 0 0-.088-.1.138.138 0 0 0-.073 0c-.005 0-.013.009-.019.011s-.019.011-.028.015l.015-.026c-9.735 5.7-13.04 16.25-13.34 21.53.452-.031.9-.069 1.362-.069a19.56 19.56 0 0 1 16.98 9.917 13.38 13.38 0 0 0-9.345-2.269c13.94 6.97 10.2 30.97-9.119 30.07a17.24 17.24 0 0 1-5.043-.973q-.569-.213-1.138-.466c-.219-.1-.438-.2-.654-.312l.027.017q-.282-.135-.564-.281c.181.087.351.181.537.264-4.733-2.446-8.641-7.07-9.129-12.68 0 0 1.789-6.667 12.81-6.667 1.191 0 4.6-3.325 4.661-4.289-.015-.315-6.76-3-9.39-5.59-1.405-1.385-2.072-2.052-2.663-2.553a11.59 11.59 0 0 0-1-.758 17.97 17.97 0 0 1-.109-9.473 28.7 28.7 0 0 0-9.329 7.21h-.018c-1.536-1.947-1.428-8.367-1.34-9.708a6.928 6.928 0 0 0-1.294.687A28.22 28.22 0 0 0 9.9 16.858a33.84 33.84 0 0 0-3.623 4.347v.006-.007a32.73 32.73 0 0 0-5.2 11.74l-.052.256c-.073.341-.4 2.073-.447 2.445a45.09 45.09 0 0 0-.572 5.403v.2a38.76 38.76 0 0 0 76.95 6.554c.065-.5.118-.995.176-1.5a39.86 39.86 0 0 0-2.514-19.47zm-3.845 1.991.007.041z" fill="url(#fl)" transform="translate(.697 .72) scale(.98198)"/>
	</svg>`,
	Webkit: b`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 66.166 65.804">
  <defs>
    <linearGradient id="wb">
      <stop offset="0" stop-color="#06c2e7"/>
      <stop offset=".25" stop-color="#0db8ec"/>
      <stop offset=".5" stop-color="#12aef1"/>
      <stop offset=".75" stop-color="#1f86f9"/>
      <stop offset="1" stop-color="#107ddd"/>
    </linearGradient>
    <linearGradient id="wa">
      <stop offset="0" stop-color="#bdbdbd"/>
      <stop offset="1" stop-color="#fff"/>
    </linearGradient>
    <linearGradient xlink:href="#wa" id="wd" x1="412.975" x2="412.975" y1="237.608" y2="59.392" gradientTransform="translate(206.79 159.773) scale(.35154)" gradientUnits="userSpaceOnUse"/>
    <filter id="wf" width="1.042" height="1.045" x="-.021" y="-.022" color-interpolation-filters="sRGB">
      <feGaussianBlur stdDeviation=".958"/>
    </filter>
    <filter id="wc" width="1.096" height="1.096" x="-.048" y="-.048" color-interpolation-filters="sRGB">
      <feGaussianBlur stdDeviation="3.564"/>
    </filter>
    <radialGradient xlink:href="#wb" id="we" cx="413.061" cy="136.818" r="82.125" fx="413.061" fy="136.818" gradientTransform="translate(194.545 155.58) scale(.38143)" gradientUnits="userSpaceOnUse"/>
  </defs>
  <path d="M502.083 148.5a89.108 89.108 0 0 1-89.108 89.108 89.108 89.108 0 0 1-89.108-89.108 89.108 89.108 0 0 1 89.108-89.108 89.108 89.108 0 0 1 89.108 89.108Z" filter="url(#wc)" opacity=".53" paint-order="markers stroke fill" transform="matrix(.33865 0 0 .3261 -106.77 -14.478)"/>
  <path fill="url(#wd)" stroke="#cdcdcd" stroke-linecap="round" stroke-linejoin="round" stroke-width=".093" d="M383.294 211.977a31.325 31.325 0 0 1-31.325 31.325 31.325 31.325 0 0 1-31.326-31.325 31.325 31.325 0 0 1 31.326-31.325 31.325 31.325 0 0 1 31.325 31.325z" paint-order="markers stroke fill" transform="translate(-318.886 -180.595)"/>
  <path fill="url(#we)" d="M380.84 211.977a28.87 28.87 0 0 1-28.871 28.87 28.87 28.87 0 0 1-28.871-28.87 28.87 28.87 0 0 1 28.87-28.87 28.87 28.87 0 0 1 28.871 28.87z" paint-order="markers stroke fill" transform="translate(-318.886 -180.595)"/>
  <path fill="#f4f2f3" d="M33.083 4.017a.42.42 0 0 0-.421.42v4.856a.42.42 0 1 0 .842 0V4.438a.42.42 0 0 0-.421-.421zm-2.754.174a.42.42 0 0 0-.46.463l.212 2.03a.42.42 0 1 0 .837-.087l-.212-2.03a.42.42 0 0 0-.377-.376zm5.527.002a.42.42 0 0 0-.377.375l-.214 2.03a.42.42 0 1 0 .837.089l.214-2.031a.42.42 0 0 0-.46-.463zM27.5 4.6a.42.42 0 0 0-.41.508l1.005 4.75a.42.42 0 1 0 .824-.174l-1.005-4.75A.42.42 0 0 0 27.5 4.6zm11.183.004a.42.42 0 0 0-.414.333l-1.009 4.75a.42.42 0 1 0 .824.175l1.009-4.75a.42.42 0 0 0-.41-.508zm-13.883.757a.42.42 0 0 0-.437.55l.632 1.942a.42.42 0 1 0 .8-.26l-.63-1.942a.42.42 0 0 0-.365-.29zm16.568.001a.42.42 0 0 0-.364.29l-.632 1.942a.42.42 0 1 0 .8.26l.632-1.942a.42.42 0 0 0-.436-.55zM22.13 6.34a.42.42 0 0 0-.377.592l1.972 4.437a.42.42 0 1 0 .77-.342l-1.972-4.437a.42.42 0 0 0-.393-.25zm21.937.015a.42.42 0 0 0-.392.25l-1.978 4.434a.42.42 0 1 0 .769.343l1.978-4.434a.42.42 0 0 0-.377-.593zM19.654 7.65a.42.42 0 0 0-.394.63l1.02 1.77a.42.42 0 1 0 .73-.421L19.989 7.86a.42.42 0 0 0-.335-.21zm26.858 0a.419.419 0 0 0-.335.21l-1.021 1.769a.42.42 0 1 0 .73.42l1.02-1.768a.42.42 0 0 0-.394-.63zm-29.265 1.5a.422.422 0 0 0-.326.669l2.85 3.93a.42.42 0 1 0 .682-.494l-2.85-3.93a.42.42 0 0 0-.356-.174zm31.702.022a.42.42 0 0 0-.356.174l-2.856 3.926a.42.42 0 1 0 .681.495l2.856-3.926a.42.42 0 0 0-.325-.669zm-33.852 1.783a.42.42 0 0 0-.335.702l1.366 1.518a.42.42 0 1 0 .626-.563l-1.366-1.518a.42.42 0 0 0-.291-.14zm35.975.003a.421.421 0 0 0-.29.139l-1.367 1.517a.42.42 0 1 0 .625.564l1.367-1.518a.42.42 0 0 0-.335-.702zm-38.037 1.977a.42.42 0 0 0-.26.733l3.61 3.249a.42.42 0 1 0 .563-.626l-3.609-3.248a.42.42 0 0 0-.304-.108zm40.109.014a.419.419 0 0 0-.304.108l-3.61 3.245a.42.42 0 1 0 .562.626l3.61-3.245a.42.42 0 0 0-.258-.734zm-41.823 2.19a.42.42 0 0 0-.262.762l1.652 1.2a.42.42 0 1 0 .495-.681l-1.652-1.2a.42.42 0 0 0-.233-.081zm43.535.015a.421.421 0 0 0-.233.08l-1.653 1.2a.42.42 0 1 0 .495.681l1.653-1.2a.42.42 0 0 0-.262-.76zM9.72 17.49a.42.42 0 0 0-.18.785l4.204 2.427a.42.42 0 1 0 .42-.729L9.96 17.546a.42.42 0 0 0-.24-.056zm46.728 0a.417.417 0 0 0-.24.056l-4.205 2.427a.42.42 0 1 0 .42.73l4.206-2.428a.42.42 0 0 0-.181-.785zM8.508 19.996a.42.42 0 0 0-.18.806l1.866.832a.42.42 0 1 0 .343-.77l-1.866-.831a.42.42 0 0 0-.163-.037zm49.158.017a.42.42 0 0 0-.164.037l-1.865.83a.42.42 0 1 0 .342.77l1.866-.831a.42.42 0 0 0-.179-.806zM7.429 22.615a.42.42 0 0 0-.094.82l4.615 1.504a.42.42 0 1 0 .261-.8l-4.616-1.504a.421.421 0 0 0-.166-.02zm51.314.018a.408.408 0 0 0-.166.02l-4.617 1.5a.42.42 0 1 0 .26.801l4.617-1.5a.42.42 0 0 0-.094-.82zM6.756 25.365a.42.42 0 0 0-.09.833l1.998.424a.42.42 0 1 0 .175-.823l-1.998-.425a.413.413 0 0 0-.085-.009zm52.655.004a.518.518 0 0 0-.085.009l-1.998.424a.42.42 0 1 0 .175.823l1.998-.424a.42.42 0 0 0-.09-.833zM6.247 28.13a.42.42 0 0 0-.003.838l4.828.51a.42.42 0 1 0 .089-.837l-4.829-.51a.432.432 0 0 0-.085 0zm53.676.037a.386.386 0 0 0-.085 0l-4.83.504a.42.42 0 1 0 .088.837l4.83-.504a.42.42 0 0 0-.003-.837zM6.165 30.96a.42.42 0 1 0 0 .842h2.043a.42.42 0 1 0 0-.842zm51.793 0a.42.42 0 1 0 0 .842h2.043a.42.42 0 1 0 0-.842zm-46.803 2.295a.384.384 0 0 0-.085 0l-4.83.504a.42.42 0 1 0 .088.838l4.83-.504a.42.42 0 0 0-.003-.838zm43.853.03a.42.42 0 0 0-.003.838l4.828.51a.42.42 0 1 0 .089-.837l-4.828-.51a.434.434 0 0 0-.086-.001zM8.748 36.13a.43.43 0 0 0-.085.009l-1.998.424a.42.42 0 1 0 .175.823l1.998-.424a.42.42 0 0 0-.09-.833zm48.67.004a.42.42 0 0 0-.09.833l1.997.424a.42.42 0 1 0 .175-.824l-1.998-.424a.413.413 0 0 0-.085-.01zM12.111 37.79a.408.408 0 0 0-.166.02l-4.617 1.5a.42.42 0 1 0 .26.801l4.617-1.5a.42.42 0 0 0-.094-.82zm41.937.015a.42.42 0 0 0-.094.82l4.616 1.504a.42.42 0 1 0 .26-.8l-4.615-1.504a.421.421 0 0 0-.167-.02zM10.35 41.08a.42.42 0 0 0-.163.036l-1.866.831a.42.42 0 1 0 .342.769l1.866-.83a.42.42 0 0 0-.179-.806zm45.459.016a.42.42 0 0 0-.18.805l1.865.832a.42.42 0 1 0 .343-.769l-1.865-.832a.42.42 0 0 0-.163-.036zm-41.826.912a.417.417 0 0 0-.24.056L9.538 44.49a.42.42 0 1 0 .421.73l4.205-2.428a.42.42 0 0 0-.181-.785zm38.2 0a.42.42 0 0 0-.181.785l4.205 2.427a.42.42 0 1 0 .42-.729l-4.204-2.427a.42.42 0 0 0-.24-.056zm-39.249 3.562a.421.421 0 0 0-.233.08l-1.653 1.2a.42.42 0 1 0 .495.682l1.653-1.2a.42.42 0 0 0-.262-.762zm40.288.015a.42.42 0 0 0-.262.762l1.652 1.2a.42.42 0 1 0 .495-.681l-1.652-1.2a.42.42 0 0 0-.233-.081zm-36.544.145a.418.418 0 0 0-.304.108l-3.61 3.245a.42.42 0 1 0 .562.626l3.61-3.245a.42.42 0 0 0-.258-.734zm32.8.011a.421.421 0 0 0-.26.734l3.609 3.248a.42.42 0 1 0 .563-.625l-3.608-3.249a.42.42 0 0 0-.304-.107zm-29.375 3.084a.42.42 0 0 0-.355.173l-2.856 3.927a.42.42 0 1 0 .68.495l2.857-3.926a.42.42 0 0 0-.326-.669zm25.936.018a.421.421 0 0 0-.326.668l2.85 3.93a.42.42 0 1 0 .682-.494l-2.851-3.93a.42.42 0 0 0-.355-.174zm-29.623.606a.421.421 0 0 0-.29.14l-1.367 1.517a.42.42 0 1 0 .625.563l1.367-1.517a.42.42 0 0 0-.335-.703zm33.331.002a.42.42 0 0 0-.335.702l1.366 1.518a.42.42 0 1 0 .626-.563l-1.366-1.518a.42.42 0 0 0-.291-.139zm-25.655 1.684a.419.419 0 0 0-.393.25l-1.978 4.433a.42.42 0 1 0 .77.343l1.977-4.434a.42.42 0 0 0-.376-.592zm17.955.012a.42.42 0 0 0-.377.592l1.972 4.437a.42.42 0 1 0 .77-.342l-1.972-4.437a.42.42 0 0 0-.393-.25zm-21.431 1.359a.419.419 0 0 0-.335.21l-1.021 1.768a.42.42 0 1 0 .729.421l1.02-1.769a.42.42 0 0 0-.393-.63zm24.934 0a.42.42 0 0 0-.394.63l1.021 1.77a.42.42 0 1 0 .73-.422l-1.022-1.769a.42.42 0 0 0-.335-.21zm-17.054.063a.42.42 0 0 0-.415.334l-1.009 4.749a.42.42 0 1 0 .824.175l1.009-4.75a.42.42 0 0 0-.41-.508zm9.16.003a.42.42 0 0 0-.41.508l1.006 4.75a.42.42 0 1 0 .823-.175l-1.006-4.75a.42.42 0 0 0-.414-.333zm-4.573.48a.42.42 0 0 0-.421.42v4.855a.42.42 0 1 0 .842 0v-4.855a.42.42 0 0 0-.421-.42zm-7.727 1.568a.42.42 0 0 0-.364.29l-.631 1.942a.42.42 0 1 0 .8.26l.632-1.942a.42.42 0 0 0-.437-.55zm15.45 0a.42.42 0 0 0-.437.55l.632 1.943a.42.42 0 1 0 .8-.26l-.63-1.942a.42.42 0 0 0-.365-.29zm-10.365 1.083a.42.42 0 0 0-.378.375l-.213 2.03a.42.42 0 1 0 .837.088l.214-2.03a.42.42 0 0 0-.46-.463zm5.267.002a.42.42 0 0 0-.46.463l.212 2.03a.42.42 0 1 0 .837-.088l-.212-2.03a.42.42 0 0 0-.377-.375z" paint-order="markers stroke fill"/>
  <path d="m469.096 100.607-65.51 38.061-41.42 65.207 60.595-44.882z" filter="url(#wf)" opacity=".409" paint-order="markers stroke fill" transform="translate(-112.095 -20.822) scale(.35154)"/>
  <path fill="#ff5150" d="m36.383 34.838-6.6-6.913 23.416-15.752z" paint-order="markers stroke fill"/>
  <path fill="#f1f1f1" d="m36.383 34.838-6.6-6.913L12.966 50.59z" paint-order="markers stroke fill"/>
  <path d="m12.967 50.59 23.416-15.752L53.2 12.173z" opacity=".243"/>
</svg>`
};

const ICON_BYTES = b`
	<svg version="1.1" width="150" height="150" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
		<g fill-rule="evenodd">
			<path d="m96.2 6.892c-7.025 2.381-11.935 7.693-14.717 15.919-2.731 8.074-3.107 24.161-0.785 33.589 3.868 15.706 16.171 23.092 28.702 17.23 16.812-7.866 18.133-52.938 1.875-63.979-4.262-2.894-11.025-4.132-15.075-2.759m53.6-2e-3c-0.66 0.222-1.513 0.563-1.895 0.757s-0.889 0.353-1.128 0.353c-3.053 0-9.695 8.175-11.698 14.4-1.966 6.107-2.425 9.625-2.425 18.6 0 9.275 0.494 12.848 2.649 19.189 7.086 20.842 31.989 20.459 38.254-0.589 0.295-0.99 0.678-2.25 0.853-2.8 3.639-11.485 1.743-31.699-3.827-40.8-2.154-3.519-6.949-8-8.56-8-0.239 0-0.746-0.158-1.128-0.351-2.482-1.253-8.423-1.66-11.095-0.759m160.4 0c-0.66 0.222-1.513 0.563-1.895 0.757s-0.899 0.353-1.149 0.353c-0.969 0-5.489 3.64-7.038 5.668-3.253 4.258-4.91 8.448-6.538 16.532-0.639 3.175-0.639 18.425 0 21.6 1.831 9.09 4.112 14.228 8.076 18.192 4.444 4.444 12.718 6.97 17.225 5.259 0.506-0.192 1.639-0.578 2.519-0.858 14.345-4.566 20.33-36.59 10.58-56.609-1.947-3.997-7.604-9.784-9.564-9.784-0.235 0-0.739-0.158-1.121-0.351-2.482-1.253-8.423-1.66-11.095-0.759m-105.7 0.586-5.303 0.147 0.103 33.289 0.102 33.288 17 0.216v-33.408-33.408h-0.941c-0.518 0-2.003-0.061-3.3-0.135-1.298-0.075-4.745-0.07-7.661 0.011m-165.42 0.383c-0.151 0.151-0.275 15.067-0.275 33.146v32.872l6.5 0.222c3.575 0.121 7.446 0.126 8.602 0.01l2.103-0.211-0.103-33.049-0.102-33.049-8.225-0.108c-4.524-0.059-8.349 0.016-8.5 0.167m214.02 0.017c-0.66 0.172-0.7 2.089-0.7 33.153 0 31.122 0.039 32.973 0.7 33.005 0.795 0.038 16.14 0.03 16.6-9e-3 0.679-0.057 0.348-65.921-0.333-66.182-0.719-0.276-15.197-0.247-16.267 0.033m-150.78 16.824c3.264 4.602 4.26 18.333 2.011 27.7-2.65 11.035-7.125 5.949-8.182-9.299-0.75-10.827 3.197-22.596 6.171-18.401m52.729-0.794c0.249 0.162 0.797 0.924 1.218 1.694 0.725 1.327 1.097 2.435 2.096 6.246 0.579 2.207 0.557 16.026-0.029 18.448-1.499 6.201-2.844 8.551-4.47 7.81-4.554-2.075-5.7-24.15-1.667-32.108 1.096-2.164 1.867-2.728 2.852-2.09m161.31 0.924c4.088 6.723 4.21 24.388 0.22 31.97-2.02 3.837-4.31 0.734-6.148-8.331-0.238-1.171-0.432-4.533-0.432-7.469s0.194-6.298 0.432-7.469c0.632-3.118 1.197-5.238 1.607-6.026 0.199-0.382 0.361-0.94 0.361-1.241 0-2.143 2.891-3.191 3.96-1.434m-273.46 90.588c-7.367 1.984-13.059 8.433-15.341 17.382-1.567 6.145-1.71 7.515-1.734 16.6-0.024 8.924 0.137 10.643 1.463 15.6 3.452 12.91 10.979 19.522 21.512 18.897 3.37-0.201 4.128-0.405 7.591-2.048 11.422-5.417 16.377-30.496 10.167-51.449-3.219-10.857-13.886-17.613-23.658-14.982m106.98-0.018c-8.974 2.467-13.943 9.357-16.735 23.2-0.652 3.236-0.658 17.981-8e-3 21.6 2.844 15.841 9.914 23.611 21.466 23.59 16.507-0.029 25.735-22.002 20.238-48.19-3.14-14.96-13.506-23.349-24.961-20.2m108.32-0.408c-0.22 0.071-1.35 0.422-2.51 0.78-11.603 3.579-18.238 20.271-16.013 40.283 0.534 4.802 0.474 4.729 3.953 4.74 1.987 5e-3 8.263 0.898 12.301 1.749 2.497 0.526 2.527 0.522 2.276-0.305-1.223-4.026-1.453-6.073-1.453-12.916 0-4.089 0.196-8.031 0.449-9 2.721-10.447 5.21-10.969 7.708-1.617 1.679 6.287 0.723 24.532-1.322 25.228-0.616 0.21-0.024 0.866 0.781 0.866 0.398 0 1.602 0.343 2.677 0.762 1.074 0.419 3.033 1.17 4.353 1.669 1.32 0.498 3.791 1.572 5.492 2.386 1.7 0.814 3.011 1.349 2.913 1.19-0.099-0.159 0.139-1.17 0.528-2.248 0.389-1.077 0.918-2.949 1.175-4.159 0.258-1.21 0.674-3.154 0.925-4.32 0.617-2.865 0.607-18.394-0.014-21.481-1.211-6.019-1.694-7.669-3.308-11.299-3.73-8.386-14.116-14.499-20.911-12.308m-165.8 34.4v33.408h8.402 8.403l-0.103-33.3-0.102-33.3-16.6-0.216v33.408m107.08-33.133c-0.151 0.151-0.275 11.638-0.275 25.528 0 19.655-0.111 25.37-0.5 25.78-0.41 0.432-0.356 0.455 0.3 0.127 1.767-0.885 3.008-1.338 7.8-2.853 2.75-0.869 6.08-1.8 7.4-2.07l2.4-0.491-0.4-46.08-8.225-0.108c-4.524-0.059-8.349 0.016-8.5 0.167m107.19 8e-3c-0.147 0.146-0.267 15.176-0.267 33.4v33.133h8.4 8.4v-33.4-33.4h-8.133c-4.474 0-8.254 0.12-8.4 0.267m-258.14 16.448c5.298 5.854 4.045 35.318-1.444 33.94-1.301-0.326-2.59-3.265-3.844-8.761-0.566-2.481-0.562-14.532 6e-3 -16.988 0.815-3.529 1.318-5.099 2.083-6.506 1.434-2.637 2.046-2.96 3.199-1.685m106.84-0.096c2.263 2.263 3.438 7.999 3.438 16.781 0 6.415-0.13 7.581-1.495 13.4-1.478 6.297-4.934 4.661-6.759-3.2-2.585-11.132 0.936-30.861 4.816-26.981m104.64 85.781c-0.33 0.213-0.926 0.391-1.325 0.394-2.901 0.024-9.036 4.672-12.297 9.315-9.719 13.84-9.935 45.964-0.406 60.579 6.644 10.19 18.709 13.466 29.428 7.989 18.311-9.355 20.843-57.434 3.854-73.163-4.779-4.424-15.794-7.35-19.254-5.114m-68.216 1.7c-0.105 0.275-0.144 17.78-0.087 38.9l0.103 38.4 20.6 0.214v-39.007-39.007h-10.213c-7.801 0-10.257 0.118-10.403 0.5m-93.584 3.488c-14.082 1.994-22.344 22.41-18.377 45.412 3.045 17.651 14.95 27.56 27.177 22.618 10.696-4.323 15.469-14.691 15.476-33.618 9e-3 -23.605-9.128-36.557-24.276-34.412m-59.157 1.445c-0.134 0.348-0.243 15.378-0.243 33.4v32.767h8.6 8.6v-33.4-33.4h-8.357c-7.252 0-8.39 0.084-8.6 0.633m227.26 14.467c2.822 4.09 4.324 13.835 3.635 23.591-1.031 14.613-5.708 20.622-8.489 10.909-1.132-3.952-1.436-5.603-1.887-10.259-1.084-11.199 1.838-25.341 5.237-25.341 0.41 0 1.087 0.495 1.504 1.1m-164.53 1.42c5.456 5.456 4.741 34.08-0.852 34.08-4.509 0-6.697-22.963-2.886-30.295 0.199-0.382 0.361-0.905 0.361-1.162 0-1.615 2.467-3.533 3.377-2.623" fill="#24a2dc"/>
			<path d="m228.13 160.82c-3.854 0.343-11.784 1.525-15.734 2.345-1.683 0.35-9.604 2.852-11.395 3.6-32.919 13.745-55.504 40.996-60.53 73.035-1.121 7.146-1.27 9.041-1.27 16.2 0 7.174 0.158 9.176 1.276 16.2 3.683 23.13 17.324 45.2 37.124 60.064 7.997 6.004 17.791 11.162 27 14.22 2.448 0.813 3.136 1.012 7 2.022 13.732 3.589 30.378 4.006 43.4 1.088 12.475-2.796 21.535-6.374 31.4-12.402 1.87-1.143 4.028-2.439 4.796-2.882 5.672-3.268 23.604-20.963 23.604-23.292 0-0.143 0.777-1.466 1.727-2.939 5.834-9.051 10.455-19.53 12.645-28.679 0.263-1.1 0.638-2.63 0.833-3.4 0.357-1.413 0.574-2.624 1.255-7 1.065-6.84 0.812-22.816-0.456-28.8-0.186-0.88-0.557-2.68-0.822-4-9.275-46.047-54.596-79.588-101.85-75.38m19.372 18.401c1.484 0.242 3.329 0.595 4.099 0.784 0.77 0.19 2.3 0.557 3.4 0.816 45.811 10.793 71.637 61.935 53.114 105.18-10.37 24.208-32.717 42.032-58.114 46.352-6.385 1.086-8.251 1.248-14.4 1.248-6.148 0-8.005-0.161-14.4-1.247-31.353-5.326-56.164-29.856-63.049-62.336-2.586-12.203-0.91-30.356 3.825-41.417 0.188-0.44 0.65-1.52 1.026-2.4 7.084-16.575 19.485-30.062 35.449-38.552 7.736-4.114 16.777-7.078 25.749-8.442 5.618-0.853 18.024-0.846 23.301 0.015" fill="#34495d"/>
			<path d="m0 200v200h200 200v-200-200h-200-200v200m106.97-193.14c8.109 2.866 12.276 8.881 15.477 22.342 0.676 2.841 0.731 20.603 0.072 23.2-0.251 0.99-0.681 2.88-0.954 4.2s-0.648 2.571-0.832 2.78c-0.185 0.209-0.336 0.632-0.336 0.939 0 0.308-0.753 2.1-1.673 3.983-7.788 15.942-27.894 15.768-35.824-0.309-4.618-9.362-5.88-26.528-2.809-38.193 2.679-10.174 7.591-16.355 15.302-19.252 2.214-0.832 8.85-0.654 11.577 0.31m52.508-0.408c0.616 0.247 1.524 0.607 2.019 0.8 7.987 3.108 13.026 11.828 14.879 25.75 1.101 8.272-0.197 22.822-2.418 27.095-0.199 0.382-0.361 0.888-0.361 1.125 0 2.33-5.042 9.302-8.345 11.538-5.108 3.458-15.284 4.546-17.914 1.916-0.151-0.151-0.527-0.274-0.836-0.274-2.623 0-8.561-6.578-11.012-12.2-2.944-6.749-4.573-22.388-3.134-30.08 0.198-1.056 0.584-3.18 0.86-4.72 1.793-10.03 7.362-17.756 14.781-20.505 2.531-0.938 9.576-1.211 11.481-0.445m161.49 0.406c1.335 0.471 2.517 0.966 2.627 1.101 0.11 0.134 0.705 0.505 1.323 0.824 2.395 1.235 5.817 5.25 7.659 8.986 1.62 3.286 2.224 5.208 3.843 12.233 2.636 11.443-0.862 31.682-6.756 39.081-4.363 5.478-14.367 8.721-19.95 6.467-8.746-3.529-12.833-8.484-15.631-18.948-1.318-4.926-1.488-6.712-1.488-15.6 0-10.115 0.334-12.525 2.711-19.589 2.089-6.205 8.474-13.811 11.594-13.811 0.309 0 0.69-0.129 0.848-0.286 1.49-1.491 9.505-1.768 13.22-0.458m-104.25 0.424c0.695 0.695 0.695 66.745 0 67.44-0.68 0.68-17.16 0.68-17.84 0-0.695-0.695-0.695-66.745 0-67.44 0.68-0.68 17.16-0.68 17.84 0m-160.42 33.62-0.102 33.7-8.771 0.108c-6.751 0.083-8.846-9e-3 -9.094-0.4-0.371-0.583-0.46-65.516-0.092-66.475 0.211-0.551 1.401-0.633 9.202-0.633h8.96l-0.103 33.7m213.9 0.1v33.6l-8.771 0.108c-6.751 0.083-8.846-9e-3 -9.094-0.4-0.372-0.586-0.459-65.518-0.089-66.483 0.216-0.565 1.287-0.627 9.1-0.533l8.854 0.108v33.6m-171.09-14.32c-3.788 8.623-2.431 30.92 1.881 30.92 2.522 0 4.658-11.769 3.794-20.903-1.025-10.822-3.445-15.094-5.675-10.017m53.981-1.359c-1.063 1.622-1.956 4.772-2.517 8.879-2.138 15.648 3.721 31.765 6.615 18.2 0.258-1.21 0.637-2.851 0.841-3.646 0.511-1.986 0.469-13.01-0.058-15.623-1.545-7.648-3.225-10.337-4.881-7.81m160.43-0.021c-3.685 5.759-3.934 23.821-0.421 30.59 4.684 9.025 8.028-19.605 3.433-29.39-1.09-2.321-2.05-2.703-3.012-1.2m-263.32 89.271c8.484 1.727 13.782 6.748 16.916 16.029 4.538 13.44 3.044 35.021-3.08 44.496-8.722 13.494-27.458 12.296-34.427-2.202-1.431-2.978-2.131-4.787-2.742-7.094-0.842-3.18-0.932-3.648-1.309-6.8-2.922-24.451 4.42-41.824 18.776-44.427 1.467-0.266 2.756-0.503 2.866-0.528 0.11-0.024 1.46 0.212 3 0.526m107.2 0.037c7.823 1.485 14.101 7.472 16.559 15.792 0.293 0.99 0.673 2.16 0.845 2.6 2.304 5.898 2.512 22.741 0.388 31.4-0.243 0.99-0.541 2.297-0.663 2.905s-0.38 1.203-0.575 1.324c-0.195 0.12-0.354 0.48-0.354 0.799 0 1.499-2.942 6.597-5.385 9.332-5.792 6.483-16.787 7.63-24.498 2.556-1.866-1.228-2.819-2.15-4.966-4.804-7.931-9.802-9.237-35.92-2.486-49.712 3.28-6.701 8.63-11.094 14.894-12.231 1.453-0.264 2.731-0.499 2.841-0.524s1.64 0.229 3.4 0.563m106.87-0.06c12.608 2.404 19.363 14.625 19.319 34.949-0.016 7.448-0.944 14.263-2.568 18.853-0.34 0.963-0.619 1.881-0.619 2.041 0 0.276 3.835 2.809 4.255 2.809 0.11 0 0.986 0.54 1.945 1.2s1.937 1.2 2.172 1.2 0.428 0.168 0.428 0.373 0.359 0.487 0.798 0.626c0.438 0.139 1.023 0.473 1.3 0.74 0.276 0.268 1.132 0.929 1.902 1.468 1.725 1.21 2.202 1.589 5.76 4.585 4.372 3.683 9.403 8.855 12.642 13 0.769 0.984 1.623 2.031 1.898 2.327 1.533 1.651 6.825 10.247 8.915 14.481 1.651 3.345 2.806 5.946 4.085 9.2 0.216 0.55 0.552 1.313 0.747 1.695 0.194 0.382 0.353 1.046 0.353 1.476s0.159 0.88 0.354 1c0.195 0.121 0.45 0.716 0.567 1.324s0.42 1.825 0.673 2.705c3.91 13.614 4.493 29.64 1.609 44.2-0.711 3.587-1.155 5.437-1.776 7.4-0.348 1.1-0.824 2.63-1.057 3.4-0.232 0.77-0.591 1.805-0.796 2.3-0.206 0.495-0.554 1.35-0.774 1.9-0.979 2.447-1.316 3.245-1.647 3.895-0.194 0.382-0.353 0.967-0.353 1.3s-0.18 0.605-0.4 0.605-0.4 0.255-0.4 0.567c0 0.947-4.367 8.874-7.179 13.033-0.67 0.99-1.218 1.911-1.219 2.046-2e-3 0.21 31.056 31.256 50.019 50 5.6 5.536 8.379 8.872 8.379 10.059 0 0.309 0.129 0.69 0.286 0.848 0.491 0.49 1.279 3.971 1.279 5.647s-0.788 5.157-1.279 5.647c-0.157 0.158-0.286 0.536-0.286 0.842 0 1.076-3.138 5.128-5.057 6.529-1.852 1.352-2.502 1.703-5.062 2.732-1.667 0.671-8.564 0.558-10.481-0.17-0.88-0.335-1.915-0.713-2.3-0.841s-0.7-0.391-0.7-0.586c0-0.194-0.28-0.353-0.623-0.353s-10.558-9.874-22.7-21.943c-26.126-25.968-33.915-33.666-34.803-34.399-0.57-0.47-1.015-0.307-3.365 1.233-4.649 3.046-12.013 6.89-16.709 8.722-3.336 1.302-5.394 2.008-9.2 3.155-17.403 5.246-40.108 4.708-58-1.376-6.164-2.096-6.459-2.22-12-5.021-12.528-6.336-23.205-14.491-30.6-23.376-1.944-2.336-3.01-3.666-3.865-4.824-0.476-0.644-1.511-2.028-2.3-3.074-0.789-1.047-1.435-1.98-1.435-2.072 0-0.093-0.689-1.216-1.531-2.497-2.457-3.736-7.669-14.163-7.669-15.343 0-0.218-0.18-0.753-0.4-1.19s-0.58-1.153-0.8-1.59-0.4-1.146-0.4-1.576-0.18-0.893-0.4-1.029-0.4-0.676-0.4-1.2-0.18-1.064-0.4-1.2-0.4-0.766-0.4-1.4-0.161-1.252-0.358-1.374c-0.197-0.121-0.457-0.897-0.579-1.723-0.122-0.827-0.42-2.493-0.661-3.703-2.266-11.369-2.28-26.261-0.035-37.4 0.221-1.1 0.512-2.63 0.645-3.4s0.39-1.76 0.57-2.2 0.545-1.61 0.811-2.6c0.267-0.99 0.647-2.113 0.846-2.495s0.361-1.046 0.361-1.476 0.18-0.893 0.4-1.029 0.4-0.509 0.4-0.828 0.381-1.434 0.847-2.476c0.465-1.043 1.095-2.481 1.4-3.196 1.25-2.936 2.023-4.479 4.03-8.038 1.977-3.505 6.556-10.527 7.499-11.499 0.233-0.24 0.874-1.032 1.424-1.76 2.489-3.293 7.989-8.973 12.026-12.42 4.686-4.001 4.883-4.156 7.61-5.997 1.41-0.952 2.624-1.878 2.697-2.058 0.074-0.181 0.316-0.328 0.539-0.328 0.222 0 0.882-0.339 1.466-0.753 1.82-1.29 4.483-2.755 9.562-5.261l4.9-2.417v-25.108c0-19.473 0.112-25.262 0.501-25.793 0.45-0.615 1.368-0.674 9.1-0.576l8.599 0.108 0.4 45.6 1.6-0.088c0.88-0.049 3.04-0.277 4.8-0.507s6.142-0.524 9.739-0.654l6.538-0.235-0.273-1.058c-0.959-3.722-0.567-18.191 0.622-22.958 1.274-5.106 1.402-5.496 2.809-8.5 3.279-7.001 8.388-11.333 15.095-12.8 3.079-0.673 3.083-0.673 6.338-0.052m-154.47 34.852v33.6l-8.9 0.108-8.9 0.107v-33.815-33.815l8.9 0.107 8.9 0.108v33.6m213.8 8e-3v33.807l-8.9-0.107-8.9-0.108-0.103-33.2c-0.057-18.26-0.018-33.425 0.087-33.7 0.145-0.379 2.322-0.5 9.003-0.5h8.813v33.808m-277.26-15.708c-4.449 7.208-4.018 28.415 0.658 32.295 2.604 2.161 5.303-11.527 4.268-21.645-0.876-8.558-3.163-13.505-4.926-10.65m106.78 0c-4.291 6.76-3.803 28.581 0.723 32.337 3.598 2.986 6.024-17.864 3.286-28.237-1.154-4.369-2.782-6.034-4.009-4.1m106.6 0.782c-0.826 1.717-1.304 3.266-2.097 6.795-0.92 4.091-0.366 17.307 0.821 19.618 0.196 0.382 0.357 0.963 0.357 1.292s0.495 0.704 1.1 0.833 1.537 0.414 2.071 0.631c1.535 0.627 1.944-0.408 3.024-7.651 1.822-12.225-2.085-28.158-5.276-21.518m-34.919 45.188c-4.71 0.781-11.252 2.276-13.6 3.108-7.506 2.659-16.201 6.839-18.558 8.922-0.436 0.385-1.029 0.7-1.317 0.7-0.289 0-0.525 0.141-0.525 0.314 0 0.172-0.495 0.609-1.1 0.971-3.634 2.172-13.129 11.149-15.578 14.727-0.371 0.543-0.791 1.078-0.933 1.188-1.355 1.055-7.797 12.086-9.343 16-0.392 0.99-0.955 2.34-1.252 3-5.272 11.711-6.581 31.118-3.049 45.2 0.929 3.701 1.989 7.16 2.822 9.2 8.551 20.962 21.621 34.394 43.033 44.221 4.387 2.013 11.437 3.917 19.4 5.239 3.939 0.654 17.736 0.659 21.6 7e-3 13.469-2.269 23.215-5.986 32.976-12.577 13.435-9.071 22.684-20.662 29.439-36.89 3.374-8.107 5.722-23.223 4.825-31.063-0.236-2.055-0.51-4.547-0.611-5.537-0.48-4.725-0.758-6.432-1.079-6.631-0.193-0.119-0.35-0.737-0.35-1.374 0-0.636-0.161-1.571-0.358-2.076-0.197-0.506-0.589-1.729-0.87-2.719s-0.66-1.971-0.842-2.18c-0.181-0.209-0.33-0.706-0.33-1.105s-0.159-1.038-0.353-1.42c-0.195-0.382-0.533-1.145-0.752-1.695-4.182-10.487-13.364-22.987-22.036-30-0.952-0.77-2.12-1.731-2.595-2.135-0.475-0.405-1.359-1.028-1.964-1.386-0.605-0.359-1.1-0.793-1.1-0.965 0-0.173-0.193-0.314-0.428-0.314s-1.181-0.518-2.102-1.152c-8.189-5.634-18.9-9.535-31.916-11.623-3.15-0.506-18.025-0.474-21.154 0.045m46.747 38.744c7.648 2.51 13.694 9.329 16.482 18.586 0.265 0.88 0.625 1.96 0.799 2.4 0.32 0.808 0.424 1.327 1.275 6.4 0.611 3.64 0.617 21.901 9e-3 25.6-0.727 4.427-1.406 7.38-2.115 9.2-0.171 0.44-0.698 1.79-1.171 3-7.195 18.412-28.998 22.096-40.227 6.798-1.757-2.393-4.599-7.85-4.599-8.83 0-0.396-0.18-0.832-0.4-0.968s-0.4-0.676-0.4-1.2-0.16-1.052-0.356-1.173c-0.195-0.121-0.47-0.896-0.611-1.723-0.14-0.827-0.434-2.494-0.653-3.704-1.729-9.554-1.064-28.202 1.205-33.8 0.178-0.44 0.564-1.61 0.858-2.6 2.955-9.948 10.787-17.243 20.357-18.961 1.942-0.348 7.13 0.181 9.547 0.975m-58.99 1.019c0.318 0.827 0.318 77.507 0 78.334-0.368 0.959-20.746 0.959-21.114 0-0.504-1.311-0.272-77.978 0.237-78.487 0.816-0.816 20.561-0.671 20.877 0.153m-104.5 4.719c7.656 3.508 11.672 9.652 14.408 22.048 0.723 3.276 0.719 20.283-5e-3 23.6-1.507 6.898-2.696 10.166-5.09 14-5.426 8.688-16.203 11.854-24.775 7.28-0.44-0.235-1.257-0.658-1.815-0.94-5.05-2.554-9.752-11.109-11.618-21.14-0.65-3.494-0.712-19.243-0.086-21.801 0.243-0.989 0.655-2.789 0.917-3.999 3.349-15.473 16.453-24.367 28.064-19.048m-51.76 33.756 0.103 33.707-9.103-0.107-9.102-0.108-0.102-32.922c-0.07-22.445 0.031-33.172 0.318-33.708 0.401-0.749 0.824-0.78 9.102-0.678l8.682 0.108 0.102 33.708m207.61-18.408c-0.565 0.647-1.411 2.363-2.12 4.3-2.283 6.234-2.283 23.375 0 29.6 2.108 5.748 3.236 6.31 5.018 2.5 3.249-6.948 3.627-23.626 0.738-32.578-1.246-3.861-2.475-5.152-3.636-3.822m-164.32 3c-4.279 6.949-3.271 31.341 1.331 32.228 0.765 0.147 2.166-2.615 3.007-5.928 2.869-11.3-0.605-32.362-4.338-26.3" fill="#fbfbfb"/>
			<path d="m310.43 316.58c-4.604 5.613-8.062 8.985-14.465 14.105l-4.399 3.518 27.903 27.742c33.045 32.853 31.579 31.658 38.837 31.658 12.638 0 20.21-12.653 14.19-23.713-0.833-1.53-42.712-43.644-57.867-58.191-0.059-0.058-1.949 2.139-4.199 4.881" fill="#8d361f"/>
			<path d="m95.396 6.548c-12.377 4.65-18.574 19.883-16.622 40.852 2.138 22.955 15.268 34.116 31.145 26.473 4.141-1.993 10.481-10.192 10.481-13.554 0-0.307 0.151-0.73 0.336-0.939 0.184-0.209 0.559-1.46 0.832-2.78s0.703-3.21 0.954-4.2c0.659-2.597 0.604-20.359-0.072-23.2-3.201-13.461-7.368-19.476-15.477-22.342-2.727-0.964-9.363-1.142-11.577-0.31m52.604 0.347c-7.419 2.749-12.988 10.475-14.781 20.505-0.276 1.54-0.662 3.664-0.86 4.72-1.439 7.692 0.19 23.331 3.134 30.08 2.451 5.622 8.389 12.2 11.012 12.2 0.309 0 0.685 0.123 0.836 0.274 2.63 2.63 12.806 1.542 17.914-1.916 3.303-2.236 8.345-9.208 8.345-11.538 0-0.237 0.162-0.743 0.361-1.125 1.462-2.814 2.844-12.091 2.844-19.095 0-13.468-3.237-23.752-9.323-29.621-2.667-2.572-3.555-3.185-5.982-4.129-0.495-0.193-1.403-0.553-2.019-0.8-1.905-0.766-8.95-0.493-11.481 0.445m161.32-0.333c-0.704 0.256-1.409 0.595-1.566 0.752-0.158 0.157-0.539 0.286-0.848 0.286-3.12 0-9.505 7.606-11.594 13.811-2.377 7.064-2.711 9.474-2.711 19.589 0 9.883 0.286 12.065 2.487 19 1.976 6.227 6.211 11.568 11.014 13.889 4.139 2 4.589 2.111 8.591 2.111 11.642 0 18.892-8.057 21.729-24.148 0.661-3.744 0.663-18.99 4e-3 -21.852-1.619-7.025-2.223-8.947-3.843-12.233-1.842-3.736-5.264-7.751-7.659-8.986-0.618-0.319-1.213-0.69-1.323-0.824-1.325-1.621-11.051-2.571-14.281-1.395m-202.92 0.67c10.719 3.52 16.061 14.75 16.061 33.768 0 26.707-12.601 40.465-29.86 32.602-16.004-7.29-18.737-48.363-4.143-62.257 4.671-4.446 11.887-6.1 17.942-4.113m52.368-0.383c0.785 0.247 1.741 0.607 2.123 0.8s0.889 0.351 1.128 0.351c3.553 0 9.865 8.638 12.275 16.8 2.411 8.165 2.468 24.563 0.112 32-0.175 0.55-0.558 1.81-0.853 2.8-6.265 21.048-31.168 21.431-38.254 0.589-2.155-6.341-2.649-9.914-2.649-19.189 0-8.975 0.459-12.493 2.425-18.6 2.003-6.225 8.645-14.4 11.698-14.4 0.239 0 0.746-0.159 1.128-0.353 2.439-1.239 8.133-1.657 10.867-0.798m160.4 0c0.785 0.247 1.741 0.607 2.123 0.8s0.886 0.351 1.121 0.351c0.752 0 3.317 1.93 5.691 4.282 5.543 5.492 8.286 14.976 8.291 28.667 6e-3 18.265-5.436 30.401-14.998 33.444-0.88 0.28-2.013 0.666-2.519 0.858-4.507 1.711-12.781-0.815-17.225-5.259-3.964-3.964-6.245-9.102-8.076-18.192-0.639-3.175-0.639-18.425 0-21.6 1.628-8.084 3.285-12.274 6.538-16.532 1.549-2.028 6.069-5.668 7.038-5.668 0.25 0 0.767-0.159 1.149-0.353 2.439-1.239 8.133-1.657 10.867-0.798m-120.29 0.431c-0.695 0.695-0.695 66.745 0 67.44 0.68 0.68 17.16 0.68 17.84 0 0.695-0.695 0.695-66.745 0-67.44-0.68-0.68-17.16-0.68-17.84 0m-160.64 0.553c-0.368 0.959-0.279 65.892 0.092 66.475 0.248 0.391 2.343 0.483 9.094 0.4l8.771-0.108 0.102-33.7 0.103-33.7h-8.96c-7.801 0-8.991 0.082-9.202 0.633m177.22-0.233h0.941v33.408 33.408l-17-0.216-0.102-33.288-0.103-33.289 5.303-0.147c2.916-0.081 6.363-0.086 7.661-0.011 1.297 0.074 2.782 0.135 3.3 0.135m36.787 0.225c-0.37 0.965-0.283 65.897 0.089 66.483 0.248 0.391 2.343 0.483 9.094 0.4l8.771-0.108v-33.6-33.6l-8.854-0.108c-7.813-0.094-8.884-0.032-9.1 0.533m-196.34 33.024 0.103 33.049-2.103 0.211c-1.156 0.116-5.027 0.111-8.602-0.01l-6.5-0.222v-32.872c0-18.079 0.124-32.995 0.275-33.146s3.976-0.226 8.5-0.167l8.225 0.108 0.102 33.049m213.46-33.006c0.681 0.261 1.012 66.125 0.333 66.182-0.46 0.039-15.805 0.047-16.6 9e-3 -1.088-0.053-1.088-65.874 0-66.158 1.07-0.28 15.548-0.309 16.267-0.033m-169.88 17.057c-5.511 7.491-3.66 35.538 2.197 33.29 2.167-0.831 4.118-10.393 3.793-18.59-0.473-11.909-3.171-18.531-5.99-14.7m54.204-1.031c-1.927 0.774-3.637 7.486-3.837 15.054-0.082 3.122-0.087 4.597-0.012 3.277 0.471-8.254 1.658-14.449 3.226-16.844 1.681-2.564 3.352 0.085 4.905 7.775 0.527 2.613 0.569 13.637 0.058 15.623-0.204 0.795-0.583 2.436-0.841 3.646-1.783 8.356-4.772 6.442-6.558-4.2-0.48-2.856-0.542-2.998-0.583-1.325-0.099 4.061 2.069 10.43 3.823 11.229 1.626 0.741 2.971-1.609 4.47-7.81 0.586-2.422 0.608-16.241 0.029-18.448-0.999-3.811-1.371-4.919-2.096-6.246-1.012-1.853-1.488-2.172-2.584-1.731m159.69 0.789c-0.54 0.583-0.981 1.305-0.981 1.606s-0.162 0.859-0.361 1.241c-3.174 6.108-2.628 22.438 0.981 29.295 3.488 6.628 7.842-8.984 6.129-21.979-1.156-8.775-3.396-12.722-5.768-10.163m-210.91 1.375c3.917 7.573 2.793 31.567-1.479 31.567-4.312 0-5.669-22.297-1.881-30.92 1.205-2.742 2.179-2.93 3.36-0.647m214.06 0.467c3.707 7.894 2.447 30.9-1.693 30.9-3.814 0-5.631-17.714-2.893-28.2 1.358-5.199 2.968-6.146 4.586-2.7m-272.19 88.073c-14.356 2.603-21.698 19.976-18.776 44.427 0.377 3.152 0.467 3.62 1.309 6.8 0.611 2.307 1.311 4.116 2.742 7.094 7.951 16.54 30.257 15.078 36.8-2.411 2.875-7.682 4.226-22.824 2.778-31.116-2.316-13.257-7.423-21.291-15.187-23.891-1.103-0.369-6.482-1.501-6.8-1.431-0.11 0.025-1.399 0.262-2.866 0.528m106.82-4e-3c-6.264 1.137-11.614 5.53-14.894 12.231-6.751 13.792-5.445 39.91 2.486 49.712 2.147 2.654 3.1 3.576 4.966 4.804 7.711 5.074 18.706 3.927 24.498-2.556 2.443-2.735 5.385-7.833 5.385-9.332 0-0.319 0.159-0.679 0.354-0.799 0.195-0.121 0.453-0.716 0.575-1.324s0.42-1.915 0.663-2.905c2.124-8.659 1.916-25.502-0.388-31.4-0.172-0.44-0.552-1.61-0.845-2.6-1.73-5.855-6.5-11.848-11.282-14.174-1.675-0.815-7.848-2.367-8.677-2.181-0.11 0.025-1.388 0.26-2.841 0.524m106.77 0.031c-6.707 1.467-11.816 5.799-15.095 12.8-1.407 3.004-1.535 3.394-2.809 8.5-1.189 4.767-1.581 19.236-0.622 22.958l0.273 1.058-6.538 0.235c-7.794 0.281-12.55 0.719-13.006 1.199-0.19 0.2 0.613 0.239 1.867 0.092 5.687-0.669 10.536-1.022 14.156-1.032l3.955-0.01-0.257-2.5c-1.483-14.402 0.426-26.222 5.477-33.9 8.004-12.17 23.73-12.269 31.705-0.2 2.868 4.341 3.788 6.87 5.383 14.799 0.593 2.949 0.638 18.571 0.062 21.281-0.225 1.056-0.641 3-0.925 4.32-0.283 1.32-0.839 3.295-1.233 4.388-0.82 2.269-0.785 2.334 2.077 3.907 25.357 13.933 44.055 40.034 48.358 67.505 0.224 1.43 0.595 3.791 0.825 5.246 0.538 3.416 0.54 17.55 2e-3 21.277-1.07 7.415-1.62 10.07-3.578 17.277-1.766 6.496-6.624 16.804-11.46 24.312-0.961 1.492-1.747 2.944-1.747 3.226s12.705 13.089 28.233 28.459c19.581 19.382 28.59 28.569 29.396 29.975 0.64 1.116 1.165 1.79 1.167 1.5 8e-3 -1.148-2.821-4.535-8.375-10.026-18.963-18.744-50.021-49.79-50.019-50 1e-3 -0.135 0.549-1.056 1.219-2.046 2.812-4.159 7.179-12.086 7.179-13.033 0-0.312 0.18-0.567 0.4-0.567s0.4-0.272 0.4-0.605 0.159-0.918 0.353-1.3c0.331-0.65 0.668-1.448 1.647-3.895 0.22-0.55 0.568-1.405 0.774-1.9 0.205-0.495 0.564-1.53 0.796-2.3 0.233-0.77 0.709-2.3 1.057-3.4 3.088-9.754 4.531-28.079 2.993-38-0.744-4.801-1.909-10.407-2.826-13.6-0.253-0.88-0.556-2.097-0.673-2.705s-0.372-1.203-0.567-1.324c-0.195-0.12-0.354-0.57-0.354-1s-0.159-1.094-0.353-1.476c-0.195-0.382-0.531-1.145-0.747-1.695-2.925-7.441-5.637-12.689-9.958-19.271-1.398-2.129-2.767-4.114-3.042-4.41s-1.129-1.343-1.898-2.327c-3.239-4.145-8.27-9.317-12.642-13-3.558-2.996-4.035-3.375-5.76-4.585-0.77-0.539-1.626-1.2-1.902-1.468-0.277-0.267-0.862-0.601-1.3-0.74-0.439-0.139-0.798-0.421-0.798-0.626s-0.193-0.373-0.428-0.373-1.213-0.54-2.172-1.2-1.835-1.2-1.945-1.2c-0.42 0-4.255-2.533-4.255-2.809 0-0.16 0.279-1.078 0.619-2.041 1.624-4.59 2.552-11.405 2.568-18.853 0.044-20.324-6.711-32.545-19.319-34.949-3.255-0.621-3.259-0.621-6.338 0.052m-206.06 0.759c6.465 1.722 12.609 8.011 14.693 15.041 6.21 20.953 1.255 46.032-10.167 51.449-3.463 1.643-4.221 1.847-7.591 2.048-10.533 0.625-18.06-5.987-21.512-18.897-1.326-4.957-1.487-6.676-1.463-15.6 0.024-9.085 0.167-10.455 1.734-16.6 3.245-12.726 13.737-20.255 24.306-17.441m106.74-0.016c10.338 2.753 15.487 11.087 17.21 27.857 2.465 23.998-6.192 40.564-21.212 40.59-11.552 0.021-18.622-7.749-21.466-23.59-0.65-3.619-0.644-18.364 8e-3 -21.6 1.537-7.619 2.606-10.538 5.422-14.8 4.672-7.07 12.632-10.43 20.038-8.457m-66.602 34.057v33.815l8.9-0.107 8.9-0.108v-33.6-33.6l-8.9-0.108-8.9-0.107v33.815m106.82-33.034c-0.278 0.52-0.418 9.157-0.418 25.792v25.011l-4.9 2.417c-5.079 2.506-7.742 3.971-9.562 5.261-0.584 0.414-1.244 0.753-1.466 0.753-0.223 0-0.465 0.147-0.539 0.328-0.073 0.18-1.287 1.106-2.697 2.058-2.727 1.841-2.924 1.996-7.61 5.997-4.037 3.447-9.537 9.127-12.026 12.42-0.55 0.728-1.191 1.52-1.424 1.76-0.943 0.972-5.522 7.994-7.499 11.499-1.99 3.53-2.901 5.348-4.078 8.138-0.278 0.66-0.887 2.053-1.352 3.096-0.466 1.042-0.847 2.157-0.847 2.476s-0.18 0.692-0.4 0.828-0.4 0.599-0.4 1.029-0.162 1.094-0.361 1.476-0.579 1.505-0.846 2.495c-0.266 0.99-0.631 2.16-0.811 2.6s-0.437 1.43-0.57 2.2-0.424 2.3-0.645 3.4c-2.245 11.139-2.231 26.031 0.035 37.4 0.241 1.21 0.539 2.876 0.661 3.703 0.122 0.826 0.382 1.602 0.579 1.723 0.197 0.122 0.358 0.74 0.358 1.374s0.18 1.264 0.4 1.4 0.4 0.676 0.4 1.2 0.18 1.064 0.4 1.2 0.4 0.599 0.4 1.029 0.167 1.094 0.371 1.476 0.478 1.036 0.609 1.452c0.131 0.417 0.315 0.681 0.408 0.588s-0.612-2.683-1.566-5.757c-2.102-6.774-2.394-8.106-3.819-17.421-0.222-1.448-0.403-6.293-0.403-10.767 0-7.61 0.128-9.271 1.232-16 1.755-10.695 7.404-25.957 12.015-32.462 0.414-0.584 0.753-1.171 0.753-1.304 0-0.779 6.658-9.552 10.584-13.945 8.105-9.071 17.182-15.845 29.518-22.031l5.698-2.858 0.4-51.2h8.4 8.4l0.2 23c0.157 18.057 0.307 22.991 0.7 22.96 2.625-0.21 2.745-0.257 1.3-0.513l-1.4-0.247-0.4-45.6-8.682-0.108c-8.262-0.102-8.702-0.07-9.1 0.674m106.97-0.266c-0.105 0.275-0.144 15.44-0.087 33.7l0.103 33.2 8.9 0.108 8.9 0.107v-33.807-33.808h-8.813c-6.681 0-8.858 0.121-9.003 0.5m-196.68 33.4 0.103 33.3h-8.403-8.402v-33.408-33.408l16.6 0.216 0.102 33.3m214.1-0.1v33.4h-8.4-8.4v-33.133c0-18.224 0.12-33.254 0.267-33.4 0.146-0.147 3.926-0.267 8.4-0.267h8.133v33.4m-276.71-16.9c-1.325 1.629-2.22 3.945-3.251 8.406-0.568 2.456-0.572 14.507-6e-3 16.988 2.586 11.333 5.666 11.911 8.022 1.506 0.784-3.465 0.684-17.634-0.146-20.6-1.541-5.505-3.307-7.915-4.619-6.3m106.92 0.142c-2.172 2.172-3.358 7.091-3.587 14.881l-0.173 5.877 0.342-4.8c1.084-15.236 4.569-20.512 7.133-10.8 2.303 8.727 1.139 25.223-1.98 28.045-1.655 1.498-3.37-2.001-4.532-9.245-0.45-2.805-0.519-2.972-0.565-1.349-0.108 3.787 1.986 10.256 3.661 11.312 1.198 0.756 2.965-1.096 3.591-3.763 1.365-5.819 1.495-6.985 1.495-13.4 0-7.659-0.491-10.9-2.253-14.881-1.054-2.382-2.037-2.971-3.132-1.877m106.74 0.258c-1.207 1.378-1.694 2.603-2.949 7.423-0.577 2.215-0.595 15.837-0.024 18.134 1.148 4.617 1.143 4.609 3.497 5.279 1.197 0.34 2.414 0.528 2.704 0.416 0.797-0.306 1.921-4.767 2.053-8.152l0.118-3-0.386 2.8c-0.212 1.54-0.561 3.353-0.775 4.028-0.215 0.676-0.396 1.576-0.403 2-0.023 1.4-0.975 2.246-2.04 1.812-0.521-0.211-1.442-0.491-2.047-0.62s-1.1-0.504-1.1-0.833-0.161-0.91-0.357-1.292c-1.187-2.311-1.741-15.527-0.821-19.618 3.052-13.58 6.617-10.309 7.981 7.323 0.335 4.324 0.337 4.301 0.159-1.379-0.33-10.531-2.988-17.316-5.61-14.321m-211.53 0.874c3.882 5.924 3.617 28.161-0.383 32.161-2.194 2.194-5.012-6.936-5.028-16.289-0.019-10.642 3.013-19.533 5.411-15.872m180.98 44.853c-27.547 2.235-52.198 18.574-64.23 42.573-1.507 3.007-2.052 4.198-3.385 7.4-0.336 0.807-1.703 4.984-2.357 7.2-0.194 0.66-0.545 2.1-0.779 3.2-0.235 1.1-0.599 2.81-0.811 3.8-1.42 6.638-1.403 19.591 0.036 26.6 1.145 5.581 2.725 11.25 3.902 14 0.188 0.44 0.646 1.52 1.016 2.4 6.251 14.844 18.331 28.729 31.881 36.642 3.578 2.091 11.135 5.683 11.399 5.42 0.106-0.107-0.497-0.501-1.34-0.876-19.647-8.742-33.986-23.192-41.762-42.086-0.203-0.495-0.541-1.305-0.75-1.8-5.163-12.233-6.364-30.989-2.875-44.9 1.054-4.199 2.098-7.486 3.049-9.6 0.297-0.66 0.86-2.01 1.252-3 1.546-3.914 7.988-14.945 9.343-16 0.142-0.11 0.562-0.645 0.933-1.188 2.449-3.578 11.944-12.555 15.578-14.727 0.605-0.362 1.1-0.799 1.1-0.971 0-0.173 0.236-0.314 0.525-0.314 0.288 0 0.881-0.315 1.317-0.7 2.357-2.083 11.052-6.263 18.558-8.922 1.364-0.484 6.517-1.77 9.2-2.297 5.432-1.066 7.977-1.281 15.2-1.281 8.878 0 12.529 0.46 21.034 2.65 7.401 1.906 15.658 5.56 21.236 9.398 0.921 0.634 1.867 1.152 2.102 1.152s0.428 0.141 0.428 0.314c0 0.172 0.495 0.606 1.1 0.965 0.605 0.358 1.489 0.981 1.964 1.386 0.475 0.404 1.643 1.365 2.595 2.135 8.672 7.013 17.854 19.513 22.036 30 0.219 0.55 0.557 1.313 0.752 1.695 0.194 0.382 0.353 1.021 0.353 1.42s0.149 0.896 0.33 1.105c0.182 0.209 0.561 1.19 0.842 2.18s0.673 2.213 0.87 2.719c0.197 0.505 0.358 1.44 0.358 2.076 0 0.637 0.18 1.269 0.4 1.405 1.658 1.025-3.71-14.529-6.874-19.918-0.619-1.054-1.126-2.005-1.126-2.113 0-0.534-5.91-8.907-7.954-11.27-13.251-15.313-28.423-23.754-49.046-27.287-2.538-0.435-14.355-0.832-17.4-0.585m32.4 38.812c-9.57 1.718-17.402 9.013-20.357 18.961-0.294 0.99-0.68 2.16-0.858 2.6-1.656 4.084-2.67 16.844-2.035 25.616 0.238 3.291 0.611 6.974 0.83 8.184s0.513 2.877 0.653 3.704c0.141 0.827 0.416 1.602 0.611 1.723 0.196 0.121 0.356 0.649 0.356 1.173s0.18 1.064 0.4 1.2 0.4 0.572 0.4 0.968c0 0.98 2.842 6.437 4.599 8.83 11.229 15.298 33.032 11.614 40.227-6.798 0.473-1.21 1-2.56 1.171-3 0.709-1.82 1.388-4.773 2.115-9.2 0.608-3.699 0.602-21.96-9e-3 -25.6-0.851-5.073-0.955-5.592-1.275-6.4-0.174-0.44-0.534-1.52-0.799-2.4-3.897-12.94-15.275-21.491-26.029-19.561m8.555 1.163c12.953 3.929 19.814 17.633 19.838 39.623 0.016 14.78-2.545 24.977-8.142 32.422-9.299 12.371-27.58 11.384-36.279-1.959-9.529-14.615-9.313-46.739 0.406-60.579 3.261-4.643 9.396-9.291 12.297-9.315 0.399-3e-3 0.995-0.181 1.325-0.394 0.946-0.611 8.341-0.47 10.555 0.202m-78.875 0.678c-0.509 0.509-0.741 77.176-0.237 78.487 0.368 0.959 20.746 0.959 21.114 0 0.318-0.827 0.318-77.507 0-78.334-0.316-0.824-20.061-0.969-20.877-0.153m20.72 39.327v39.007l-20.6-0.214-0.103-38.4c-0.057-21.12-0.018-38.625 0.087-38.9 0.146-0.382 2.602-0.5 10.403-0.5h10.213v39.007m-115.6-35.466c-7.86 1.694-14.557 9.69-16.802 20.059-0.262 1.21-0.674 3.01-0.917 3.999-0.626 2.558-0.564 18.307 0.086 21.801 1.866 10.031 6.568 18.586 11.618 21.14 0.558 0.282 1.375 0.705 1.815 0.94 8.572 4.574 19.349 1.408 24.775-7.28 2.394-3.834 3.583-7.102 5.09-14 0.724-3.317 0.728-20.324 5e-3 -23.6-2.736-12.396-6.752-18.54-14.408-22.048-2.428-1.112-8.334-1.642-11.262-1.011m9.4 0.93c11.086 3.786 16.283 14.621 16.276 33.929-7e-3 18.927-4.78 29.295-15.476 33.618-12.227 4.942-24.132-4.967-27.177-22.618-3.662-21.236 2.832-39.922 15.577-44.821 2.395-0.921 8.249-0.979 10.8-0.108m-67.784 0.699c-0.287 0.536-0.388 11.263-0.318 33.708l0.102 32.922 9.102 0.108 9.103 0.107-0.103-33.707-0.102-33.708-8.682-0.108c-8.278-0.102-8.701-0.071-9.102 0.678m17.584 33.03v33.4h-8.6-8.6v-32.767c0-18.022 0.109-33.052 0.243-33.4 0.21-0.549 1.348-0.633 8.6-0.633h8.357v33.4m207.31-18.3c-3.912 5.801-5.294 21.965-2.695 31.5 1.007 3.694 1.115 3.995 2.006 5.592 5.708 10.229 10.423-20.036 5.264-33.792-1.068-2.85-2.156-4.4-3.088-4.4-0.41 0-1.079 0.495-1.487 1.1m2.633 0.322c4.257 5.412 4.791 27.682 0.865 36.078-1.782 3.81-2.91 3.248-5.018-2.5-2.283-6.225-2.283-23.366 0-29.6 1.747-4.771 2.763-5.745 4.153-3.978m-166.53 1.916c-0.561 0.736-1.02 1.548-1.02 1.805s-0.162 0.78-0.361 1.162c-3.811 7.332-1.623 30.295 2.886 30.295 4.865 0 6.41-23.836 2.087-32.18-1.447-2.793-2.13-2.998-3.592-1.082m213.06 0.062c-0.01 0.88 0.136 1.96 0.325 2.4 0.453 1.053 0.453-1.021 0-2.8-0.292-1.147-0.306-1.129-0.325 0.4m-211.03-0.294c4.053 2.681 4.761 22.801 1.099 31.225-3.901 8.973-7.866-15.484-4.367-26.931 1.048-3.429 2.229-4.981 3.268-4.294m211.84 5.894c-6e-3 1.32 0.129 3.3 0.301 4.4l0.311 2 0.031-2.8c0.016-1.54-0.119-3.52-0.301-4.4-0.317-1.533-0.331-1.5-0.342 0.8m0.167 14.665c-0.186 2.126-0.252 4.106-0.147 4.4 0.284 0.797 0.784-4.387 0.623-6.465-0.103-1.335-0.226-0.803-0.476 2.065m-0.837 6.635c-0.654 4.345-2.416 10.983-3.796 14.3-2.142 5.144-3.492 7.91-5.764 11.8-9.257 15.855-24.864 28.502-42.274 34.256-1.825 0.603-3.118 1.164-2.874 1.245 0.789 0.263 7.796-2.356 12.439-4.648 18.27-9.022 32.025-24.184 39.059-43.053 2.189-5.871 4.459-15.4 3.669-15.4-0.129 0-0.335 0.675-0.459 1.5m-167.38 21.99c-0.065 1.182 5.012 11.44 7.642 15.438 0.842 1.281 1.531 2.404 1.531 2.497 0 0.092 0.646 1.025 1.435 2.072 0.789 1.046 1.824 2.43 2.3 3.074 0.855 1.158 1.921 2.488 3.865 4.824 5.401 6.488 16.103 15.396 23.869 19.865 2.559 1.473 11.839 6.106 13.331 6.656 10.722 3.95 19.207 5.956 26.6 6.286l3.6 0.161-4.4-0.548c-12.889-1.603-22.436-4.506-33.732-10.259-4.396-2.239-12.892-7.424-13.668-8.34-0.11-0.13-1.01-0.861-2-1.624-12.62-9.729-22.296-22.541-29.9-39.592-0.245-0.55-0.458-0.78-0.473-0.51m61.573 37.458c0 0.289 6.066 2.297 6.5 2.152 0.243-0.081-1.024-0.632-2.815-1.224-3.319-1.097-3.685-1.189-3.685-0.928m7.877 2.622c0.984 0.435 7.629 1.768 12 2.409 3.665 0.536 14.253 0.545 17.69 0.014 8.403-1.298 12.298-2.102 12.794-2.642 0.131-0.143-0.211-0.168-0.761-0.055s-2.35 0.484-4 0.826c-6.855 1.418-9.238 1.651-16.8 1.643-7.524-7e-3 -10.113-0.26-16.8-1.643-4.583-0.948-5.211-1.032-4.123-0.552m74.523 4.666c-2.837 2.054-14.043 8.164-14.974 8.164-0.129 0-0.998 0.348-1.93 0.774-6.122 2.793-18.015 5.772-27.096 6.787-2.931 0.328-2.949 0.337-0.8 0.385 3.157 0.071 13.293-1.699 18.2-3.178 3.806-1.147 5.864-1.853 9.2-3.155 4.696-1.832 12.06-5.676 16.709-8.722 2.35-1.54 2.795-1.703 3.365-1.233 0.888 0.733 8.677 8.431 34.803 34.399 12.142 12.069 22.357 21.943 22.7 21.943s0.623 0.159 0.623 0.353c0 0.195 0.315 0.458 0.7 0.586s1.42 0.506 2.3 0.841c1.917 0.728 8.814 0.841 10.481 0.17 2.56-1.029 3.21-1.38 5.062-2.732 1.896-1.384 5.062-5.455 5.052-6.496-2e-3 -0.287-0.465 0.288-1.028 1.278-4.625 8.133-15.666 10.636-23.41 5.308-0.973-0.669-14.25-13.612-29.506-28.762-29.456-29.254-28.317-28.255-30.451-26.71m-56.481 16.462c1.825 0.074 4.705 0.074 6.4-1e-3s0.201-0.136-3.319-0.135c-3.52 0-4.906 0.062-3.081 0.136m140.97 20.512c1.146 3.226 1.156 7.556 0.025 10.715-0.134 0.375-0.086 0.533 0.108 0.356 0.539-0.492 1.343-3.895 1.343-5.681s-0.804-5.189-1.343-5.681c-0.192-0.175-0.252-0.044-0.133 0.291" fill="#a6d1e5"/>
		</g>
	</svg>
`;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},e$1=t=>(...e)=>({_$litDirective$:t,values:e});class i{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i;}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const e=e$1(class extends i{constructor(t$1){if(super(t$1),t$1.type!==t.ATTRIBUTE||"class"!==t$1.name||t$1.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return " "+Object.keys(t).filter((s=>t[s])).join(" ")+" "}update(s,[i]){if(void 0===this.st){this.st=new Set,void 0!==s.strings&&(this.nt=new Set(s.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in i)i[t]&&!this.nt?.has(t)&&this.st.add(t);return this.render(i)}const r=s.element.classList;for(const t of this.st)t in i||(r.remove(t),this.st.delete(t));for(const t in i){const s=!!i[t];s===this.st.has(t)||this.nt?.has(t)||(s?(r.add(t),this.st.add(t)):(r.remove(t),this.st.delete(t)));}return w}});

const COMMON_STYLE = i$3`
	a, a:link, a:visited {
		color: #007bff;
	}
	a:focus, a:hover {
		color: #004489;
		text-decoration: underline;
	}
	a:focus-visible {
		border-radius: 3px;
		outline: 2px solid #007bff;
		outline-offset: 1px;
	}
	.browser-diff {
		background-color: #fff9d6;
		border: 1px solid #ffba59;
		border-radius: 4px;
		color: #6e7477;
		padding: 5px;
	}
	.result-browser > .browser-diff {
		text-align: end;
	}
	.browser-diff-title {
		color: #c47400;
		font-weight: bold;
	}
	.browser-diff ul {
		margin: 5px 0 0 0;
		padding-inline-start: 15px;
	}
	.empty {
		align-items: center;
		display: flex;
		flex-direction: column;
		gap: 20px;
	}
	.empty > svg {
		color: #007bff;
		height: 100px;
		width: 100px;
	}
	.empty > p {
		color: #6e7477;
		font-size: 1.1rem;
		font-weight: bold;
		margin: 0;
	}
	h1, h2 {
		margin: 0;
	}
	.item-container {
		border-bottom: 4px solid #e3e9f1;
		padding: 40px 20px;
	}
	.item-container:last-of-type {
		border-bottom: none;
	}
	.pass {
		color: #46a661;
	}
	.error {
		color: #cd2026;
	}
	.warning {
		color: #e87511;
	}
	.padding {
		padding: 20px;
	}
`;

const FILTER_STATUS = {
	ALL: 'All',
	PASSED: 'Passed',
	FAILED: 'Failed'
};

const FULL_MODE = {
	GOLDEN: {
		label: 'Golden',
		value: 'golden'
	},
	NEW: {
		label: 'New',
		value: 'new'
	}
};

const LAYOUTS = {
	FULL: {
		label: 'Full',
		icon: ICON_FULL,
		value: 'full'
	},
	SPLIT: {
		label: 'Split',
		icon: ICON_SPLIT,
		value: 'split'
	}
};

const STATUS_TYPE = {
	ERROR: 'error',
	NORMAL: 'normal',
	WARNING: 'warning'
};

let id = 0;
function getId() {
	id++;
	return `id-${id}`;
}

function renderEmpty() {
	return x`
		<div class="empty padding">
			${ICON_EMPTY}
			<p>No tests exist for the selected filters.</p>
		</div>
	`;
}

function renderStatusText(text, status) {
	const statusClass = {
		pass: status === STATUS_TYPE.NORMAL,
		error: status === STATUS_TYPE.ERROR,
		warning: status === STATUS_TYPE.WARNING
	};
	return x`<span class="${e(statusClass)}">${text}</span>`;
}

function renderTestStatus(numPassed, numTotal) {
	const status = numPassed === numTotal ? STATUS_TYPE.NORMAL : STATUS_TYPE.ERROR;
	return renderStatusText(`(${numPassed}/${numTotal} passed)`, status);
}

const RADIO_STYLE = i$3`
	.radio-container {
		border-radius: 5px;
		display: flex;
		flex-wrap: nowrap;
	}
	.radio-item input[type="radio"] {
		opacity: 0;
		pointer-events: none;
		position: absolute;
	}
	.radio-item label {
		align-items: center;
		background-color: #ffffff;
		border-block-end-style: solid;
		border-block-start-style: solid;
		border-color: #cdd5dc;
		border-inline-start-style: solid;
		border-width: 1px;
		cursor: pointer;
		display: flex;
		gap: 5px;
		line-height: 24px;
		padding: 10px;
		position: relative;
		user-select: none;
	}
	.radio-item:first-child label {
		border-end-start-radius: 5px;
		border-start-start-radius: 5px;
	}
	.radio-item:last-child label {
		border-end-end-radius: 5px;
		border-inline-end-style: solid;
		border-start-end-radius: 5px;
	}
	.radio-item input[type="radio"]:checked + label {
		background-color: #007bff;
		color: white;
	}
	.radio-item input[type="radio"]:focus-visible + label {
		border-color: #007bff;
		box-shadow: 0 0 0 2px #ffffff, 0 0 0 4px #007bff;
		z-index: 1;
	}
`;

function renderRadio(name, selectedValue, onChange, items) {
	const changeHandler = (e) => onChange(e.target.value);
	const renderItem = (i) => {
		const id = getId();
		return x`
			<div class="radio-item">
				<input type="radio" id="${id}" name="${name}" value="${i.value}" @change="${changeHandler}" ?checked="${i.value === selectedValue}">
				<label for="${id}">${i.icon}${i.label}</label>
			</div>
		`;
	};
	return x`<div class="radio-container">${items.map(i => renderItem(i))}</div>`;
}

var data = {
	"browsers": [
		{
			"name": "Chromium",
			"numFailed": 0,
			"version": 125,
			"previousVersion": 125
		},
		{
			"name": "Firefox",
			"numFailed": 0,
			"version": 125,
			"previousVersion": 125
		},
		{
			"name": "Webkit",
			"numFailed": 0,
			"version": 17,
			"previousVersion": 17
		}
	],
	"files": [
		{
			"name": "test\\media-player.vdiff.js",
			"numFailed": 0,
			"tests": [
				{
					"name": "d2l-labs-media-player > audio",
					"numFailed": 0,
					"results": [
						{
							"name": "Chromium",
							"duration": 373,
							"passed": true,
							"info": {
								"golden": {
									"height": 720,
									"path": "test\\labs-media-player\\golden\\chromium\\audio.png",
									"width": 1488
								},
								"slowDuration": 500,
								"new": {
									"height": 720,
									"path": "test\\labs-media-player\\pass\\chromium\\audio.png",
									"width": 1488
								}
							}
						},
						{
							"name": "Firefox",
							"duration": 346,
							"passed": true,
							"info": {
								"golden": {
									"height": 720,
									"path": "test\\labs-media-player\\golden\\firefox\\audio.png",
									"width": 1488
								},
								"slowDuration": 500,
								"new": {
									"height": 720,
									"path": "test\\labs-media-player\\pass\\firefox\\audio.png",
									"width": 1488
								}
							}
						},
						{
							"name": "Webkit",
							"duration": 421,
							"passed": true,
							"info": {
								"golden": {
									"height": 720,
									"path": "test\\labs-media-player\\golden\\webkit\\audio.png",
									"width": 1488
								},
								"slowDuration": 500,
								"new": {
									"height": 720,
									"path": "test\\labs-media-player\\pass\\webkit\\audio.png",
									"width": 1488
								}
							}
						}
					]
				},
				{
					"name": "d2l-labs-media-player > audio-with-search",
					"numFailed": 0,
					"results": [
						{
							"name": "Chromium",
							"duration": 286,
							"passed": true,
							"info": {
								"golden": {
									"height": 720,
									"path": "test\\labs-media-player\\golden\\chromium\\audio-with-search.png",
									"width": 1488
								},
								"slowDuration": 500,
								"new": {
									"height": 720,
									"path": "test\\labs-media-player\\pass\\chromium\\audio-with-search.png",
									"width": 1488
								}
							}
						},
						{
							"name": "Firefox",
							"duration": 454,
							"passed": true,
							"info": {
								"golden": {
									"height": 720,
									"path": "test\\labs-media-player\\golden\\firefox\\audio-with-search.png",
									"width": 1488
								},
								"slowDuration": 500,
								"new": {
									"height": 720,
									"path": "test\\labs-media-player\\pass\\firefox\\audio-with-search.png",
									"width": 1488
								}
							}
						},
						{
							"name": "Webkit",
							"duration": 391,
							"passed": true,
							"info": {
								"golden": {
									"height": 720,
									"path": "test\\labs-media-player\\golden\\webkit\\audio-with-search.png",
									"width": 1488
								},
								"slowDuration": 500,
								"new": {
									"height": 720,
									"path": "test\\labs-media-player\\pass\\webkit\\audio-with-search.png",
									"width": 1488
								}
							}
						}
					]
				},
				{
					"name": "d2l-labs-media-player > video",
					"numFailed": 0,
					"results": [
						{
							"name": "Chromium",
							"duration": 587,
							"passed": true,
							"info": {
								"golden": {
									"height": 720,
									"path": "test\\labs-media-player\\golden\\chromium\\video.png",
									"width": 1488
								},
								"slowDuration": 500,
								"new": {
									"height": 720,
									"path": "test\\labs-media-player\\pass\\chromium\\video.png",
									"width": 1488
								}
							}
						},
						{
							"name": "Firefox",
							"duration": 604,
							"passed": true,
							"info": {
								"golden": {
									"height": 720,
									"path": "test\\labs-media-player\\golden\\firefox\\video.png",
									"width": 1488
								},
								"slowDuration": 500,
								"new": {
									"height": 720,
									"path": "test\\labs-media-player\\pass\\firefox\\video.png",
									"width": 1488
								}
							}
						},
						{
							"name": "Webkit",
							"duration": 500,
							"passed": true,
							"info": {
								"golden": {
									"height": 720,
									"path": "test\\labs-media-player\\golden\\webkit\\video.png",
									"width": 1488
								},
								"slowDuration": 500,
								"new": {
									"height": 720,
									"path": "test\\labs-media-player\\pass\\webkit\\video.png",
									"width": 1488
								}
							}
						}
					]
				},
				{
					"name": "d2l-labs-media-player > video-with-poster",
					"numFailed": 0,
					"results": [
						{
							"name": "Chromium",
							"duration": 361,
							"passed": true,
							"info": {
								"golden": {
									"height": 720,
									"path": "test\\labs-media-player\\golden\\chromium\\video-with-poster.png",
									"width": 1488
								},
								"slowDuration": 500,
								"new": {
									"height": 720,
									"path": "test\\labs-media-player\\pass\\chromium\\video-with-poster.png",
									"width": 1488
								}
							}
						},
						{
							"name": "Firefox",
							"duration": 425,
							"passed": true,
							"info": {
								"golden": {
									"height": 720,
									"path": "test\\labs-media-player\\golden\\firefox\\video-with-poster.png",
									"width": 1488
								},
								"slowDuration": 500,
								"new": {
									"height": 720,
									"path": "test\\labs-media-player\\pass\\firefox\\video-with-poster.png",
									"width": 1488
								}
							}
						},
						{
							"name": "Webkit",
							"duration": 392,
							"passed": true,
							"info": {
								"golden": {
									"height": 720,
									"path": "test\\labs-media-player\\golden\\webkit\\video-with-poster.png",
									"width": 1488
								},
								"slowDuration": 500,
								"new": {
									"height": 720,
									"path": "test\\labs-media-player\\pass\\webkit\\video-with-poster.png",
									"width": 1488
								}
							}
						}
					]
				},
				{
					"name": "d2l-labs-media-player > video-with-search",
					"numFailed": 0,
					"results": [
						{
							"name": "Chromium",
							"duration": 349,
							"passed": true,
							"info": {
								"golden": {
									"height": 720,
									"path": "test\\labs-media-player\\golden\\chromium\\video-with-search.png",
									"width": 1488
								},
								"slowDuration": 500,
								"new": {
									"height": 720,
									"path": "test\\labs-media-player\\pass\\chromium\\video-with-search.png",
									"width": 1488
								}
							}
						},
						{
							"name": "Firefox",
							"duration": 332,
							"passed": true,
							"info": {
								"golden": {
									"height": 720,
									"path": "test\\labs-media-player\\golden\\firefox\\video-with-search.png",
									"width": 1488
								},
								"slowDuration": 500,
								"new": {
									"height": 720,
									"path": "test\\labs-media-player\\pass\\firefox\\video-with-search.png",
									"width": 1488
								}
							}
						},
						{
							"name": "Webkit",
							"duration": 552,
							"passed": true,
							"info": {
								"golden": {
									"height": 720,
									"path": "test\\labs-media-player\\golden\\webkit\\video-with-search.png",
									"width": 1488
								},
								"slowDuration": 500,
								"new": {
									"height": 720,
									"path": "test\\labs-media-player\\pass\\webkit\\video-with-search.png",
									"width": 1488
								}
							}
						}
					]
				}
			]
		}
	],
	"numFailed": 0,
	"numTests": 5
};

const RESULT_STYLE = i$3`
	.result-browser {
		align-items: center;
		border-bottom: 4px solid #e3e9f1;
		display: flex;
		gap: 10px;
	}
	.result-browser > svg {
		flex: 0 0 auto;
		height: 50px;
		width: 50px;
	}
	.result-browser-info {
		flex: 1 1 auto;
	}
	.result-browser-name {
		font-size: 1.2rem;
		font-weight: bold;
	}
	.result-split {
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
	}
	.result-split > .result-part {
		flex: 0 1 auto;
	}
	.result-split-divider {
		border-right: 4px dashed #007bff;
		flex: 0 0 auto;
	}
	.result-part {
		display: inline-block;
	}
	.result-diff-container img {
		max-width: 100%;
	}
	.result-diff-container {
		background: repeating-conic-gradient(#cdd5dc 0% 25%, #ffffff 0% 50%) 50% / 20px 20px;
		background-position: 0 0;
		border: 2px dashed #90989d;
		display: inline-block;
		line-height: 0;
		position: relative;
	}
	.result-split > .result-part:first-of-type > .result-part-wrapper {
		text-align: right;
	}
	.result-split > .result-part:first-of-type > div > .result-diff-container {
		border-right: none;
	}
	.result-split > .result-part:last-of-type > div > .result-diff-container {
		border-left: none;
	}
	.result-overlay {
		background: hsla(0, 0%, 100%, 0.8);
		left: 0;
		position: absolute;
		top: 0;
	}
	.result-part-info {
		align-items: center;
		display: flex;
		gap: 5px;
		padding: 5px;
	}
	.result-part-info-spacer,
	.result-part-info-size {
		flex: 1 0 0%;
	}
	.result-part-info-name {
		flex: 0 0 auto;
		font-weight: bold;
	}
	.result-part-info-size {
		color: #90989d;
		font-size: 0.8rem;
		white-space: nowrap;
	}
	.result-graphic {
		align-items: center;
		display: flex;
		flex-direction: column;
		gap: 20px;
		min-width: 210px;
	}
	.result-graphic > p {
		color: #90989d;
		font-size: 1.1rem;
		font-weight: bold;
		margin: 0;
		text-align: center;
	}
	.result-graphic > .details {
		font-size: 1rem;
		text-align: left;
	}
	.result-test-name {
		align-items: center;
		display: flex;
		gap: 10px;
		padding-bottom: 10px;
	}
	.result-test-name > h3 {
		flex: 1 0 auto;
		margin: 0;
	}
	.result-duration {
		flex: 0 0 auto;
	}
`;

function renderBrowserInfo(browser) {

	const previousVersion = data.browsers.find(b => b.name === browser.name).previousVersion || 'unknown';

	let browserDiffInfo = T;
	if (previousVersion !== browser.version) {
		browserDiffInfo = x`
			<div class="browser-diff">
				<div class="browser-diff-title">Browser Version Change</div>
				<div><strong>${previousVersion}</strong> (golden) to <strong>${browser.version}</strong> (new)</div>
			</div>`;
	}

	return x`<div class="result-browser padding">
		${ICON_BROWSERS[browser.name]}
		<div class="result-browser-info">
			<div class="result-browser-name">${browser.name}</div>
			<div>version ${browser.version}</div>
		</div>
		${browserDiffInfo}
	</div>`;
}

function renderResult(resultData, options) {

	if (!resultData.passed && resultData.info === undefined) {
		return x`
			<p>An error occurred that prevented a visual-diff snapshot from being taken:</p>
			<pre>${resultData.error}</pre>
		`;
	}

	const renderPart = (label, partInfo, overlay) => {
		return x`
			<div class="result-part">
				<div class="result-part-info">
					<div class="result-part-info-spacer"></div>
					<div class="result-part-info-name">${label}</div>
					<div class="result-part-info-size">(${partInfo.width} x ${partInfo.height})</div>
				</div>
				<div class="result-part-wrapper">
					<div class="result-diff-container"><img src="../${partInfo.path}" loading="lazy" alt="">${overlay}</div>
				</div>
			</div>
		`;
	};

	const goldenExists = (resultData.info.golden !== undefined);

	const overlay = (goldenExists && options.showOverlay && !resultData.passed && resultData.info.diff) ?
		x`<div class="result-overlay"><img src="../${resultData.info.diff}" loading="lazy" alt=""></div>` : T;

	const goldenPart = !goldenExists ?
		x`<div class="result-graphic padding">${ICON_NO_GOLDEN}<p>No golden exists for this test... yet.</p></div>` :
		renderPart('golden', resultData.info.golden, options.layout === LAYOUTS.SPLIT.value ? undefined : overlay);

	if (options.layout === LAYOUTS.SPLIT.value) {
		let newPart;
		if (resultData.passed) {
			newPart = x`<div class="result-graphic padding">${ICON_TADA}<p>Hooray! No changes here.</p></div>`;
		} else if (!resultData.info.diff && resultData.info.pixelsDiff === 0) {
			newPart = x`<div class="result-graphic padding">${ICON_BYTES}
				<p>No pixels have changed, but the bytes are different.</p>
				<p class="details">
					Golden size: ${resultData.info.golden.byteSize} bytes<br />
					New size: ${resultData.info.new.byteSize} bytes
				</p>
			</div>`;
		} else {
			newPart = renderPart('new', resultData.info.new, overlay);
		}
		return x`
			<div class="result-split">
				${goldenPart}
				<div class="result-split-divider"></div>
				${newPart}
			</div>`;
	} else if (options.layout === LAYOUTS.FULL.value) {
		if (options.fullMode === FULL_MODE.GOLDEN.value) {
			return goldenPart;
		} else {
			return renderPart('new', resultData.info.new, overlay);
		}
	}

}

function renderBrowserResults(browser, tests, options) {
	const results = tests.reduce((acc, t) => {

		const resultData = t.results.find(r => r.name === browser.name);
		if (resultData.passed && options.filterStatus === FILTER_STATUS.FAILED ||
			!resultData.passed && options.filterStatus === FILTER_STATUS.PASSED) {
			return acc;
		}

		let status = STATUS_TYPE.NORMAL;
		if (resultData.info) {
			status = STATUS_TYPE.WARNING;
			if (resultData.duration > resultData.info.slowDuration) {
				status = STATUS_TYPE.ERROR;
			} else if (resultData.duration < (resultData.info.slowDuration / 2)) {
				status = STATUS_TYPE.NORMAL;
			}
		}

		let pixelsDiff = T;
		if (resultData.info?.pixelsDiff > 0) {
			const pixelsStatus = (resultData.info?.pixelsDiff) < 10 ? STATUS_TYPE.WARNING : STATUS_TYPE.ERROR;
			pixelsDiff = x`
				<div class="result-pixels-diff">
					${renderStatusText(`${resultData.info.pixelsDiff.toLocaleString()}px`, pixelsStatus)}
				</div>
			`;
		}

		return acc.push(x`
			<div class="item-container">
				<div class="result-test-name">
					<h3>${t.name}</h3>
					${pixelsDiff}
					<div class="result-duration">${renderStatusText(`${resultData.duration}ms`, status)}</div>
				</div>
				${renderResult(resultData, options)}
			</div>
		`) && acc;

	}, []);
	return x`
		${renderBrowserInfo(browser)}
		${results.length === 0 ? renderEmpty() : results}
	`;
}

function onKeyDown(e) {
	let focusOn;
	switch (e.key) {
		case 'ArrowRight':
			focusOn = e.target.nextElementSibling || e.target.parentNode.firstElementChild;
			break;
		case 'ArrowLeft':
			focusOn = e.target.previousElementSibling || e.target.parentNode.lastElementChild;
			break;
		case 'Home':
			focusOn = e.target.parentNode.firstElementChild;
			break;
		case 'End':
			focusOn = e.target.parentNode.lastElementChild;
			break;
	}
	if (focusOn) focusOn.focus();
}

const TAB_STYLE = i$3`
	[role="tablist"] {
		align-items: stretch;
		border-top: 1px solid #cdd5dc;
		display: flex;
		flex: 0 0 auto;
		flex-wrap: nowrap;
	}
	[role="tab"] {
		background: none;
		border: none;
		border-right: 1px solid #cdd5dc;
		cursor: pointer;
		flex: 1 0 auto;
		margin: 0;
		outline: none;
		padding: 10px 15px;
		position: relative;
		user-select: none;
	}
	[role="tab"]:last-child {
		border-right: none;
	}
	[role="tab"] > span {
		display: inline-block;
		padding: 5px;
	}
	[role="tab"]:focus-visible > span {
		border: 2px solid #007bff;
		border-radius: 3px;
		padding: 3px;
	}
	[role="tab"]:hover > span {
		color: #007bff;
	}
	.tab-selected-indicator {
		border-block-start: 4px solid #007bff;
		border-start-end-radius: 4px;
		border-start-start-radius: 4px;
		bottom: 0;
		position: absolute;
		width: calc(100% - 30px);
	}
`;

function renderTabButtons(label, tabs, onTabClick) {

	const renderTabButton = (tab, index, onTabClick) => {
		const clickHandler = () => onTabClick(index);
		return x`
			<button
				aria-controls="tabpanel-${tab.id}"
				aria-selected="${tab.selected ? 'true' : 'false'}"
				id="tab-${tab.id}"
				role="tab"
				tabindex="${tab.selected ? '0' : '-1'}"
				type="button"
				@click="${clickHandler}">
					<span>${tab.label} ${tab.status}</span>${tab.selected ? x`
					<div class="tab-selected-indicator"></div>` : T}
			</button>`;
	};

	return x`
		<div role="tablist" aria-label="${label}" @keydown="${onKeyDown}">
			${tabs.map((tab, i) => renderTabButton(tab, i, onTabClick))}
		</div>
	`;

}

function renderTabPanel(tab) {
	return x`
		<div id="tabpanel-${tab.id}" role="tabpanel" aria-labelledby="tab-${tab.id}" ?hidden="${!tab.selected}">
			${tab.content}
		</div>
	`;
}

var isarray = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};

/**
 * Expose `pathToRegexp`.
 */
var pathToRegexp_1 = pathToRegexp;
var parse_1 = parse;
var compile_1 = compile;
var tokensToFunction_1 = tokensToFunction;
var tokensToRegExp_1 = tokensToRegExp;

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^()])+)\\))?|\\(((?:\\\\.|[^()])+)\\))([+*?])?|(\\*))'
].join('|'), 'g');

/**
 * Parse a string for the raw tokens.
 *
 * @param  {String} str
 * @return {Array}
 */
function parse (str) {
  var tokens = [];
  var key = 0;
  var index = 0;
  var path = '';
  var res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0];
    var escaped = res[1];
    var offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length;

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1];
      continue
    }

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path);
      path = '';
    }

    var prefix = res[2];
    var name = res[3];
    var capture = res[4];
    var group = res[5];
    var suffix = res[6];
    var asterisk = res[7];

    var repeat = suffix === '+' || suffix === '*';
    var optional = suffix === '?' || suffix === '*';
    var delimiter = prefix || '/';
    var pattern = capture || group || (asterisk ? '.*' : '[^' + delimiter + ']+?');

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      pattern: escapeGroup(pattern)
    });
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index);
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path);
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {String}   str
 * @return {Function}
 */
function compile (str) {
  return tokensToFunction(parse(str))
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length);

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^' + tokens[i].pattern + '$');
    }
  }

  return function (obj) {
    var path = '';
    var data = obj || {};

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];

      if (typeof token === 'string') {
        path += token;

        continue
      }

      var value = data[token.name];
      var segment;

      if (value == null) {
        if (token.optional) {
          continue
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined')
        }
      }

      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received "' + value + '"')
        }

        if (value.length === 0) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encodeURIComponent(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue
      }

      segment = encodeURIComponent(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
      }

      path += token.prefix + segment;
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {String} str
 * @return {String}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {String} group
 * @return {String}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$\/()])/g, '\\$1')
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {RegExp} re
 * @param  {Array}  keys
 * @return {RegExp}
 */
function attachKeys (re, keys) {
  re.keys = keys;
  return re
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {String}
 */
function flags (options) {
  return options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {RegExp} path
 * @param  {Array}  keys
 * @return {RegExp}
 */
function regexpToRegexp (path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g);

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        pattern: null
      });
    }
  }

  return attachKeys(path, keys)
}

/**
 * Transform an array into a regexp.
 *
 * @param  {Array}  path
 * @param  {Array}  keys
 * @param  {Object} options
 * @return {RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = [];

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source);
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options));

  return attachKeys(regexp, keys)
}

/**
 * Create a path regexp from string input.
 *
 * @param  {String} path
 * @param  {Array}  keys
 * @param  {Object} options
 * @return {RegExp}
 */
function stringToRegexp (path, keys, options) {
  var tokens = parse(path);
  var re = tokensToRegExp(tokens, options);

  // Attach keys back to the regexp.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] !== 'string') {
      keys.push(tokens[i]);
    }
  }

  return attachKeys(re, keys)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {Array}  tokens
 * @param  {Array}  keys
 * @param  {Object} options
 * @return {RegExp}
 */
function tokensToRegExp (tokens, options) {
  options = options || {};

  var strict = options.strict;
  var end = options.end !== false;
  var route = '';
  var lastToken = tokens[tokens.length - 1];
  var endsWithSlash = typeof lastToken === 'string' && /\/$/.test(lastToken);

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i];

    if (typeof token === 'string') {
      route += escapeString(token);
    } else {
      var prefix = escapeString(token.prefix);
      var capture = token.pattern;

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*';
      }

      if (token.optional) {
        if (prefix) {
          capture = '(?:' + prefix + '(' + capture + '))?';
        } else {
          capture = '(' + capture + ')?';
        }
      } else {
        capture = prefix + '(' + capture + ')';
      }

      route += capture;
    }
  }

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithSlash ? route.slice(0, -2) : route) + '(?:\\/(?=$))?';
  }

  if (end) {
    route += '$';
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithSlash ? '' : '(?=\\/|$)';
  }

  return new RegExp('^' + route, flags(options))
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(String|RegExp|Array)} path
 * @param  {Array}                 [keys]
 * @param  {Object}                [options]
 * @return {RegExp}
 */
function pathToRegexp (path, keys, options) {
  keys = keys || [];

  if (!isarray(keys)) {
    options = keys;
    keys = [];
  } else if (!options) {
    options = {};
  }

  if (path instanceof RegExp) {
    return regexpToRegexp(path, keys)
  }

  if (isarray(path)) {
    return arrayToRegexp(path, keys, options)
  }

  return stringToRegexp(path, keys, options)
}

pathToRegexp_1.parse = parse_1;
pathToRegexp_1.compile = compile_1;
pathToRegexp_1.tokensToFunction = tokensToFunction_1;
pathToRegexp_1.tokensToRegExp = tokensToRegExp_1;

/**
   * Module dependencies.
   */

  

  /**
   * Short-cuts for global-object checks
   */

  var hasDocument = ('undefined' !== typeof document);
  var hasWindow = ('undefined' !== typeof window);
  var hasHistory = ('undefined' !== typeof history);
  var hasProcess = typeof process !== 'undefined';

  /**
   * Detect click event
   */
  var clickEvent = hasDocument && document.ontouchstart ? 'touchstart' : 'click';

  /**
   * To work properly with the URL
   * history.location generated polyfill in https://github.com/devote/HTML5-History-API
   */

  var isLocation = hasWindow && !!(window.history.location || window.location);

  /**
   * The page instance
   * @api private
   */
  function Page() {
    // public things
    this.callbacks = [];
    this.exits = [];
    this.current = '';
    this.len = 0;

    // private things
    this._decodeURLComponents = true;
    this._base = '';
    this._strict = false;
    this._running = false;
    this._hashbang = false;

    // bound functions
    this.clickHandler = this.clickHandler.bind(this);
    this._onpopstate = this._onpopstate.bind(this);
  }

  /**
   * Configure the instance of page. This can be called multiple times.
   *
   * @param {Object} options
   * @api public
   */

  Page.prototype.configure = function(options) {
    var opts = options || {};

    this._window = opts.window || (hasWindow && window);
    this._decodeURLComponents = opts.decodeURLComponents !== false;
    this._popstate = opts.popstate !== false && hasWindow;
    this._click = opts.click !== false && hasDocument;
    this._hashbang = !!opts.hashbang;

    var _window = this._window;
    if(this._popstate) {
      _window.addEventListener('popstate', this._onpopstate, false);
    } else if(hasWindow) {
      _window.removeEventListener('popstate', this._onpopstate, false);
    }

    if (this._click) {
      _window.document.addEventListener(clickEvent, this.clickHandler, false);
    } else if(hasDocument) {
      _window.document.removeEventListener(clickEvent, this.clickHandler, false);
    }

    if(this._hashbang && hasWindow && !hasHistory) {
      _window.addEventListener('hashchange', this._onpopstate, false);
    } else if(hasWindow) {
      _window.removeEventListener('hashchange', this._onpopstate, false);
    }
  };

  /**
   * Get or set basepath to `path`.
   *
   * @param {string} path
   * @api public
   */

  Page.prototype.base = function(path) {
    if (0 === arguments.length) return this._base;
    this._base = path;
  };

  /**
   * Gets the `base`, which depends on whether we are using History or
   * hashbang routing.

   * @api private
   */
  Page.prototype._getBase = function() {
    var base = this._base;
    if(!!base) return base;
    var loc = hasWindow && this._window && this._window.location;

    if(hasWindow && this._hashbang && loc && loc.protocol === 'file:') {
      base = loc.pathname;
    }

    return base;
  };

  /**
   * Get or set strict path matching to `enable`
   *
   * @param {boolean} enable
   * @api public
   */

  Page.prototype.strict = function(enable) {
    if (0 === arguments.length) return this._strict;
    this._strict = enable;
  };


  /**
   * Bind with the given `options`.
   *
   * Options:
   *
   *    - `click` bind to click events [true]
   *    - `popstate` bind to popstate [true]
   *    - `dispatch` perform initial dispatch [true]
   *
   * @param {Object} options
   * @api public
   */

  Page.prototype.start = function(options) {
    var opts = options || {};
    this.configure(opts);

    if (false === opts.dispatch) return;
    this._running = true;

    var url;
    if(isLocation) {
      var window = this._window;
      var loc = window.location;

      if(this._hashbang && ~loc.hash.indexOf('#!')) {
        url = loc.hash.substr(2) + loc.search;
      } else if (this._hashbang) {
        url = loc.search + loc.hash;
      } else {
        url = loc.pathname + loc.search + loc.hash;
      }
    }

    this.replace(url, null, true, opts.dispatch);
  };

  /**
   * Unbind click and popstate event handlers.
   *
   * @api public
   */

  Page.prototype.stop = function() {
    if (!this._running) return;
    this.current = '';
    this.len = 0;
    this._running = false;

    var window = this._window;
    this._click && window.document.removeEventListener(clickEvent, this.clickHandler, false);
    hasWindow && window.removeEventListener('popstate', this._onpopstate, false);
    hasWindow && window.removeEventListener('hashchange', this._onpopstate, false);
  };

  /**
   * Show `path` with optional `state` object.
   *
   * @param {string} path
   * @param {Object=} state
   * @param {boolean=} dispatch
   * @param {boolean=} push
   * @return {!Context}
   * @api public
   */

  Page.prototype.show = function(path, state, dispatch, push) {
    var ctx = new Context(path, state, this),
      prev = this.prevContext;
    this.prevContext = ctx;
    this.current = ctx.path;
    if (false !== dispatch) this.dispatch(ctx, prev);
    if (false !== ctx.handled && false !== push) ctx.pushState();
    return ctx;
  };

  /**
   * Goes back in the history
   * Back should always let the current route push state and then go back.
   *
   * @param {string} path - fallback path to go back if no more history exists, if undefined defaults to page.base
   * @param {Object=} state
   * @api public
   */

  Page.prototype.back = function(path, state) {
    var page = this;
    if (this.len > 0) {
      var window = this._window;
      // this may need more testing to see if all browsers
      // wait for the next tick to go back in history
      hasHistory && window.history.back();
      this.len--;
    } else if (path) {
      setTimeout(function() {
        page.show(path, state);
      });
    } else {
      setTimeout(function() {
        page.show(page._getBase(), state);
      });
    }
  };

  /**
   * Register route to redirect from one path to other
   * or just redirect to another route
   *
   * @param {string} from - if param 'to' is undefined redirects to 'from'
   * @param {string=} to
   * @api public
   */
  Page.prototype.redirect = function(from, to) {
    var inst = this;

    // Define route from a path to another
    if ('string' === typeof from && 'string' === typeof to) {
      page.call(this, from, function(e) {
        setTimeout(function() {
          inst.replace(/** @type {!string} */ (to));
        }, 0);
      });
    }

    // Wait for the push state and replace it with another
    if ('string' === typeof from && 'undefined' === typeof to) {
      setTimeout(function() {
        inst.replace(from);
      }, 0);
    }
  };

  /**
   * Replace `path` with optional `state` object.
   *
   * @param {string} path
   * @param {Object=} state
   * @param {boolean=} init
   * @param {boolean=} dispatch
   * @return {!Context}
   * @api public
   */


  Page.prototype.replace = function(path, state, init, dispatch) {
    var ctx = new Context(path, state, this),
      prev = this.prevContext;
    this.prevContext = ctx;
    this.current = ctx.path;
    ctx.init = init;
    ctx.save(); // save before dispatching, which may redirect
    if (false !== dispatch) this.dispatch(ctx, prev);
    return ctx;
  };

  /**
   * Dispatch the given `ctx`.
   *
   * @param {Context} ctx
   * @api private
   */

  Page.prototype.dispatch = function(ctx, prev) {
    var i = 0, j = 0, page = this;

    function nextExit() {
      var fn = page.exits[j++];
      if (!fn) return nextEnter();
      fn(prev, nextExit);
    }

    function nextEnter() {
      var fn = page.callbacks[i++];

      if (ctx.path !== page.current) {
        ctx.handled = false;
        return;
      }
      if (!fn) return unhandled.call(page, ctx);
      fn(ctx, nextEnter);
    }

    if (prev) {
      nextExit();
    } else {
      nextEnter();
    }
  };

  /**
   * Register an exit route on `path` with
   * callback `fn()`, which will be called
   * on the previous context when a new
   * page is visited.
   */
  Page.prototype.exit = function(path, fn) {
    if (typeof path === 'function') {
      return this.exit('*', path);
    }

    var route = new Route(path, null, this);
    for (var i = 1; i < arguments.length; ++i) {
      this.exits.push(route.middleware(arguments[i]));
    }
  };

  /**
   * Handle "click" events.
   */

  /* jshint +W054 */
  Page.prototype.clickHandler = function(e) {
    if (1 !== this._which(e)) return;

    if (e.metaKey || e.ctrlKey || e.shiftKey) return;
    if (e.defaultPrevented) return;

    // ensure link
    // use shadow dom when available if not, fall back to composedPath()
    // for browsers that only have shady
    var el = e.target;
    var eventPath = e.path || (e.composedPath ? e.composedPath() : null);

    if(eventPath) {
      for (var i = 0; i < eventPath.length; i++) {
        if (!eventPath[i].nodeName) continue;
        if (eventPath[i].nodeName.toUpperCase() !== 'A') continue;
        if (!eventPath[i].href) continue;

        el = eventPath[i];
        break;
      }
    }

    // continue ensure link
    // el.nodeName for svg links are 'a' instead of 'A'
    while (el && 'A' !== el.nodeName.toUpperCase()) el = el.parentNode;
    if (!el || 'A' !== el.nodeName.toUpperCase()) return;

    // check if link is inside an svg
    // in this case, both href and target are always inside an object
    var svg = (typeof el.href === 'object') && el.href.constructor.name === 'SVGAnimatedString';

    // Ignore if tag has
    // 1. "download" attribute
    // 2. rel="external" attribute
    if (el.hasAttribute('download') || el.getAttribute('rel') === 'external') return;

    // ensure non-hash for the same path
    var link = el.getAttribute('href');
    if(!this._hashbang && this._samePath(el) && (el.hash || '#' === link)) return;

    // Check for mailto: in the href
    if (link && link.indexOf('mailto:') > -1) return;

    // check target
    // svg target is an object and its desired value is in .baseVal property
    if (svg ? el.target.baseVal : el.target) return;

    // x-origin
    // note: svg links that are not relative don't call click events (and skip page.js)
    // consequently, all svg links tested inside page.js are relative and in the same origin
    if (!svg && !this.sameOrigin(el.href)) return;

    // rebuild path
    // There aren't .pathname and .search properties in svg links, so we use href
    // Also, svg href is an object and its desired value is in .baseVal property
    var path = svg ? el.href.baseVal : (el.pathname + el.search + (el.hash || ''));

    path = path[0] !== '/' ? '/' + path : path;

    // strip leading "/[drive letter]:" on NW.js on Windows
    if (hasProcess && path.match(/^\/[a-zA-Z]:\//)) {
      path = path.replace(/^\/[a-zA-Z]:\//, '/');
    }

    // same page
    var orig = path;
    var pageBase = this._getBase();

    if (path.indexOf(pageBase) === 0) {
      path = path.substr(pageBase.length);
    }

    if (this._hashbang) path = path.replace('#!', '');

    if (pageBase && orig === path && (!isLocation || this._window.location.protocol !== 'file:')) {
      return;
    }

    e.preventDefault();
    this.show(orig);
  };

  /**
   * Handle "populate" events.
   * @api private
   */

  Page.prototype._onpopstate = (function () {
    var loaded = false;
    if ( ! hasWindow ) {
      return function () {};
    }
    if (hasDocument && document.readyState === 'complete') {
      loaded = true;
    } else {
      window.addEventListener('load', function() {
        setTimeout(function() {
          loaded = true;
        }, 0);
      });
    }
    return function onpopstate(e) {
      if (!loaded) return;
      var page = this;
      if (e.state) {
        var path = e.state.path;
        page.replace(path, e.state);
      } else if (isLocation) {
        var loc = page._window.location;
        page.show(loc.pathname + loc.search + loc.hash, undefined, undefined, false);
      }
    };
  })();

  /**
   * Event button.
   */
  Page.prototype._which = function(e) {
    e = e || (hasWindow && this._window.event);
    return null == e.which ? e.button : e.which;
  };

  /**
   * Convert to a URL object
   * @api private
   */
  Page.prototype._toURL = function(href) {
    var window = this._window;
    if(typeof URL === 'function' && isLocation) {
      return new URL(href, window.location.toString());
    } else if (hasDocument) {
      var anc = window.document.createElement('a');
      anc.href = href;
      return anc;
    }
  };

  /**
   * Check if `href` is the same origin.
   * @param {string} href
   * @api public
   */
  Page.prototype.sameOrigin = function(href) {
    if(!href || !isLocation) return false;

    var url = this._toURL(href);
    var window = this._window;

    var loc = window.location;

    /*
       When the port is the default http port 80 for http, or 443 for
       https, internet explorer 11 returns an empty string for loc.port,
       so we need to compare loc.port with an empty string if url.port
       is the default port 80 or 443.
       Also the comparition with `port` is changed from `===` to `==` because
       `port` can be a string sometimes. This only applies to ie11.
    */
    return loc.protocol === url.protocol &&
      loc.hostname === url.hostname &&
      (loc.port === url.port || loc.port === '' && (url.port == 80 || url.port == 443)); // jshint ignore:line
  };

  /**
   * @api private
   */
  Page.prototype._samePath = function(url) {
    if(!isLocation) return false;
    var window = this._window;
    var loc = window.location;
    return url.pathname === loc.pathname &&
      url.search === loc.search;
  };

  /**
   * Remove URL encoding from the given `str`.
   * Accommodates whitespace in both x-www-form-urlencoded
   * and regular percent-encoded form.
   *
   * @param {string} val - URL component to decode
   * @api private
   */
  Page.prototype._decodeURLEncodedURIComponent = function(val) {
    if (typeof val !== 'string') { return val; }
    return this._decodeURLComponents ? decodeURIComponent(val.replace(/\+/g, ' ')) : val;
  };

  /**
   * Create a new `page` instance and function
   */
  function createPage() {
    var pageInstance = new Page();

    function pageFn(/* args */) {
      return page.apply(pageInstance, arguments);
    }

    // Copy all of the things over. In 2.0 maybe we use setPrototypeOf
    pageFn.callbacks = pageInstance.callbacks;
    pageFn.exits = pageInstance.exits;
    pageFn.base = pageInstance.base.bind(pageInstance);
    pageFn.strict = pageInstance.strict.bind(pageInstance);
    pageFn.start = pageInstance.start.bind(pageInstance);
    pageFn.stop = pageInstance.stop.bind(pageInstance);
    pageFn.show = pageInstance.show.bind(pageInstance);
    pageFn.back = pageInstance.back.bind(pageInstance);
    pageFn.redirect = pageInstance.redirect.bind(pageInstance);
    pageFn.replace = pageInstance.replace.bind(pageInstance);
    pageFn.dispatch = pageInstance.dispatch.bind(pageInstance);
    pageFn.exit = pageInstance.exit.bind(pageInstance);
    pageFn.configure = pageInstance.configure.bind(pageInstance);
    pageFn.sameOrigin = pageInstance.sameOrigin.bind(pageInstance);
    pageFn.clickHandler = pageInstance.clickHandler.bind(pageInstance);

    pageFn.create = createPage;

    Object.defineProperty(pageFn, 'len', {
      get: function(){
        return pageInstance.len;
      },
      set: function(val) {
        pageInstance.len = val;
      }
    });

    Object.defineProperty(pageFn, 'current', {
      get: function(){
        return pageInstance.current;
      },
      set: function(val) {
        pageInstance.current = val;
      }
    });

    // In 2.0 these can be named exports
    pageFn.Context = Context;
    pageFn.Route = Route;

    return pageFn;
  }

  /**
   * Register `path` with callback `fn()`,
   * or route `path`, or redirection,
   * or `page.start()`.
   *
   *   page(fn);
   *   page('*', fn);
   *   page('/user/:id', load, user);
   *   page('/user/' + user.id, { some: 'thing' });
   *   page('/user/' + user.id);
   *   page('/from', '/to')
   *   page();
   *
   * @param {string|!Function|!Object} path
   * @param {Function=} fn
   * @api public
   */

  function page(path, fn) {
    // <callback>
    if ('function' === typeof path) {
      return page.call(this, '*', path);
    }

    // route <path> to <callback ...>
    if ('function' === typeof fn) {
      var route = new Route(/** @type {string} */ (path), null, this);
      for (var i = 1; i < arguments.length; ++i) {
        this.callbacks.push(route.middleware(arguments[i]));
      }
      // show <path> with [state]
    } else if ('string' === typeof path) {
      this['string' === typeof fn ? 'redirect' : 'show'](path, fn);
      // start [options]
    } else {
      this.start(path);
    }
  }

  /**
   * Unhandled `ctx`. When it's not the initial
   * popstate then redirect. If you wish to handle
   * 404s on your own use `page('*', callback)`.
   *
   * @param {Context} ctx
   * @api private
   */
  function unhandled(ctx) {
    if (ctx.handled) return;
    var current;
    var page = this;
    var window = page._window;

    if (page._hashbang) {
      current = isLocation && this._getBase() + window.location.hash.replace('#!', '');
    } else {
      current = isLocation && window.location.pathname + window.location.search;
    }

    if (current === ctx.canonicalPath) return;
    page.stop();
    ctx.handled = false;
    isLocation && (window.location.href = ctx.canonicalPath);
  }

  /**
   * Escapes RegExp characters in the given string.
   *
   * @param {string} s
   * @api private
   */
  function escapeRegExp(s) {
    return s.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');
  }

  /**
   * Initialize a new "request" `Context`
   * with the given `path` and optional initial `state`.
   *
   * @constructor
   * @param {string} path
   * @param {Object=} state
   * @api public
   */

  function Context(path, state, pageInstance) {
    var _page = this.page = pageInstance || page;
    var window = _page._window;
    var hashbang = _page._hashbang;

    var pageBase = _page._getBase();
    if ('/' === path[0] && 0 !== path.indexOf(pageBase)) path = pageBase + (hashbang ? '#!' : '') + path;
    var i = path.indexOf('?');

    this.canonicalPath = path;
    var re = new RegExp('^' + escapeRegExp(pageBase));
    this.path = path.replace(re, '') || '/';
    if (hashbang) this.path = this.path.replace('#!', '') || '/';

    this.title = (hasDocument && window.document.title);
    this.state = state || {};
    this.state.path = path;
    this.querystring = ~i ? _page._decodeURLEncodedURIComponent(path.slice(i + 1)) : '';
    this.pathname = _page._decodeURLEncodedURIComponent(~i ? path.slice(0, i) : path);
    this.params = {};

    // fragment
    this.hash = '';
    if (!hashbang) {
      if (!~this.path.indexOf('#')) return;
      var parts = this.path.split('#');
      this.path = this.pathname = parts[0];
      this.hash = _page._decodeURLEncodedURIComponent(parts[1]) || '';
      this.querystring = this.querystring.split('#')[0];
    }
  }

  /**
   * Push state.
   *
   * @api private
   */

  Context.prototype.pushState = function() {
    var page = this.page;
    var window = page._window;
    var hashbang = page._hashbang;

    page.len++;
    if (hasHistory) {
        window.history.pushState(this.state, this.title,
          hashbang && this.path !== '/' ? '#!' + this.path : this.canonicalPath);
    }
  };

  /**
   * Save the context state.
   *
   * @api public
   */

  Context.prototype.save = function() {
    var page = this.page;
    if (hasHistory) {
        page._window.history.replaceState(this.state, this.title,
          page._hashbang && this.path !== '/' ? '#!' + this.path : this.canonicalPath);
    }
  };

  /**
   * Initialize `Route` with the given HTTP `path`,
   * and an array of `callbacks` and `options`.
   *
   * Options:
   *
   *   - `sensitive`    enable case-sensitive routes
   *   - `strict`       enable strict matching for trailing slashes
   *
   * @constructor
   * @param {string} path
   * @param {Object=} options
   * @api private
   */

  function Route(path, options, page) {
    var _page = this.page = page || globalPage;
    var opts = options || {};
    opts.strict = opts.strict || _page._strict;
    this.path = (path === '*') ? '(.*)' : path;
    this.method = 'GET';
    this.regexp = pathToRegexp_1(this.path, this.keys = [], opts);
  }

  /**
   * Return route middleware with
   * the given callback `fn()`.
   *
   * @param {Function} fn
   * @return {Function}
   * @api public
   */

  Route.prototype.middleware = function(fn) {
    var self = this;
    return function(ctx, next) {
      if (self.match(ctx.path, ctx.params)) {
        ctx.routePath = self.path;
        return fn(ctx, next);
      }
      next();
    };
  };

  /**
   * Check if this route matches `path`, if so
   * populate `params`.
   *
   * @param {string} path
   * @param {Object} params
   * @return {boolean}
   * @api private
   */

  Route.prototype.match = function(path, params) {
    var keys = this.keys,
      qsIndex = path.indexOf('?'),
      pathname = ~qsIndex ? path.slice(0, qsIndex) : path,
      m = this.regexp.exec(decodeURIComponent(pathname));

    if (!m) return false;

    delete params[0];

    for (var i = 1, len = m.length; i < len; ++i) {
      var key = keys[i - 1];
      var val = this.page._decodeURLEncodedURIComponent(m[i]);
      if (val !== undefined || !(hasOwnProperty.call(params, key.name))) {
        params[key.name] = val;
      }
    }

    return true;
  };


  /**
   * Module exports.
   */

  var globalPage = createPage();
  var page_js = globalPage;
  var default_1 = globalPage;

page_js.default = default_1;

class App extends s {
	static properties = {
		_files: { state: true },
		_filterFile: { state: true },
		_filterTest: { state: true },
		_fullMode: { state: true },
		_layout: { state: true },
		_overlay: { state: true }
	};
	static styles = [COMMON_STYLE, RADIO_STYLE, RESULT_STYLE, TAB_STYLE, i$3`
		:host {
			display: grid;
			grid-template-columns: 275px auto;
			height: 100vh;
			overflow: hidden;
		}
		aside {
			background-color: #ffffff;
			border-right: 1px solid #e6e6e6;
			box-shadow: 0 0 6px rgba(0, 0, 0, 0.07);
			padding: 20px;
		}
		main {
			background-color: #fafafa;
			overflow-y: scroll;
		}
		main > .item-container:first-child {
			padding-top: 20px;
		}
		.list-file-title {
			padding-bottom: 20px;
		}
		table {
			background-color: #ffffff;
			border-collapse: collapse;
			width: 100%;
		}
		td, th {
			border: 1px solid #cdd5dc;
			padding: 10px;
			text-align: center;
			white-space: nowrap;
		}
		thead th {
			background-color: #f5f5f5;
		}
		tbody th {
			font-weight: normal;
			text-align: left;
			white-space: normal;
			width: 100%;
		}
		td.passed {
			background-color: #efffd9;
		}
		td.failed {
			background-color: #ffede8;
		}
		fieldset {
			border: none;
			margin: 20px 0;
			padding: 0;
		}
		fieldset > legend {
			font-weight: bold;
		}
		.test-results {
			display: grid;
			grid-template-rows: auto 1fr auto;
			height: 100vh;
		}
		.header {
			background-color: #f0f0f0;
			border-bottom: 1px solid #cdd5dc;
			box-shadow: 0 0 6px rgba(0, 0, 0, 0.07);
		}
		.tab-panels {
			overflow: auto;
		}
		.title {
			align-items: center;
			display: flex;
			font-size: 1.5rem;
			gap: 5px;
			padding: 20px 20px 0 20px;
		}
		.title h2 {
			font-size: inherit;
		}
		.settings {
			align-items: center;
			display: flex;
			gap: 10px;
			padding: 20px;
		}
		.settings > * {
			flex: 0 0 auto;
		}
		.settings > .spacer {
			flex: 1 1 auto;
		}
		.settings-box {
			background-color: #ffffff;
			border: 1px solid #cdd5dc;
			border-radius: 5px;
			line-height: 24px;
			padding: 10px;
			user-select: none;
		}
	`];
	constructor() {
		super();
		this._filterBrowsers = data.browsers.map(b => b.name);
		this._filterStatus = FILTER_STATUS.ALL;
		this._fullMode = FULL_MODE.GOLDEN.value;
		this._layout = LAYOUTS.SPLIT.value;
		this._overlay = true;
		this._selectedBrowserIndex = -1;
	}
	connectedCallback() {
		super.connectedCallback();
		this._root = new URL(window.location.href).pathname;
		page_js(this._root, (ctx) => {
			const searchParams = new URLSearchParams(ctx.querystring);
			if (searchParams.has('file')) {
				this._filterFile = searchParams.get('file');
				if (searchParams.has('test')) {
					this._filterTest = searchParams.get('test');
				} else {
					this._filterTest = undefined;
				}
			} else {
				this._filterFile = undefined;
				this._filterTest = undefined;
				this._selectedBrowserIndex = -1;
			}
			if (searchParams.has('status')) {
				let filterStatus = searchParams.get('status');
				if (filterStatus === FILTER_STATUS.FAILED && data.numFailed === 0) filterStatus = FILTER_STATUS.ALL;
				this._filterStatus = filterStatus;
			}
			if (searchParams.has('browsers')) {
				this._filterBrowsers = searchParams.get('browsers').split(',');
			}
			this._updateFiles();
		});
		page_js();
	}
	render() {
		return x`
			<aside>
				<div>
					<h1>Visual-Diff Report</h1>
					${this._renderFilters()}
				</div>
			</aside>
			<main>${this._renderMainView()}</main>
		`;
	}
	_handleFilterBrowserChange(e) {
		const browsers = data.browsers.map(b => b.name).filter(b => {
			if (b === e.target.value) {
				return e.target.checked;
			} else {
				return this._filterBrowsers.includes(b);
			}
		});
		this._updateSearchParams({ browsers: browsers.join(',') });
	}
	_handleFilterStatusChange(e) {
		this._updateSearchParams({ status: e.target.value });
	}
	_handleNextClick() {
		this._updateSearchParams(this._next);
		this._scrollToTop();
	}
	_handleOverlayChange(e) {
		this._overlay = e.target.checked;
	}
	_handlePrevClick() {
		this._updateSearchParams(this._prev);
		this._scrollToTop();
	}
	_renderError(message, source) {
		return x`<div class="padding"><p>${message}: <b>${source}</b>.</p></div>`;
	}
	_renderFilters() {

		const statusFilters = [
			{ name: FILTER_STATUS.FAILED, count: data.numFailed },
			{ name: FILTER_STATUS.PASSED, count: data.numTests - data.numFailed },
			{ name: FILTER_STATUS.ALL, count: data.numTests }
		];

		const renderStatusFilter = (f) => {
			if (f.count === 0) return T;
			return x`
				<label>
					<input type="radio" name="status" value="${f.name}" ?checked="${this._filterStatus === f.name}" @click="${this._handleFilterStatusChange}">
					${f.name} (${f.count})
				</label><br>`;
		};

		const renderBrowser = (b) => {
			const browserData = data.browsers.find(data => data.name === b.name);
			return x`
				<label>
					<input type="checkbox" value="${b.name}" ?checked="${this._filterBrowsers.includes(b.name)}" @click="${this._handleFilterBrowserChange}">
					${b.name} ${renderTestStatus(data.numTests - browserData.numFailed, data.numTests)}
				</label><br>
			`;
		};

		const browserFilter = data.browsers.length > 1 ? x`
			<fieldset>
				<legend>Browsers</legend>
				${ data.browsers.map(b => renderBrowser(b))}
			</fieldset>` : T;

		const browserDiffs = data.browsers.reduce((acc, b) => {
			const previousVersion = b.previousVersion || 'unknown';
			if (previousVersion === b.version) {
				return acc;
			}
			return acc.push(x`
				<li>${b.name}: <strong>${previousVersion}</strong> to <strong>${b.version}</strong></li>
			`) && acc;
		}, []);
		const browserDiffInfo = browserDiffs.length > 0 ? x`
			<div class="browser-diff">
				<div class="browser-diff-title">Browser Version Changes</div>
				<ul>${browserDiffs}</ul>
			</div>
		` : T;

		return x`
			<fieldset>
				<legend>Test Status</legend>
				${statusFilters.map(f => renderStatusFilter(f))}
			</fieldset>
			${browserFilter}
			${browserDiffInfo}
		`;

	}
	_renderListFile(file) {
		const renderBrowserCell = (b) => {
			if (!this._filterBrowsers.includes(b.name)) return T;
			return x`<th>${b.name}</th>`;
		};
		const searchParams = new URLSearchParams(window.location.search);
		searchParams.set('file', file.name);
		searchParams.delete('test');
		return x`
			<div class="item-container">
				<div class="list-file-title">
					<h2><a href="${this._root}?${searchParams.toString()}">${file.name}</a></h2>
				</div>
				<table>
					<thead>
						<tr>
							<th style="text-align: left;">Test</th>
							${data.browsers.map(b => renderBrowserCell(b))}
						</tr>
					</thead>
					<tbody>
						${file.tests.map(t => this._renderListFileTest(file, t))}
					</tbody>
				</table>
			</div>
		`;
	}
	_renderListFileTest(file, test) {
		const results = data.browsers.map(b => {
			if (!this._filterBrowsers.includes(b.name)) return T;
			const result = test.results.find(r => r.name === b.name);
			const passed = (result !== undefined) ? result.passed : true;
			const text = passed ? 'passed' : 'failed';
			return x`<td class="${text}">${text}</td>`;
		});
		const searchParams = new URLSearchParams(window.location.search);
		searchParams.set('file', file.name);
		searchParams.set('test', test.name);
		return x`
			<tr>
				<th style="text-align: left;"><a href="${this._root}?${searchParams.toString()}">${test.name}</a></th>
				${results}
			</tr>
		`;
	}
	_renderMainView() {

		if (this._filterFile === undefined) {
			if (this._files.length === 0) {
				return renderEmpty();
			} else {
				return this._files.map(f => this._renderListFile(f));
			}
		}

		const fileData = this._files.find(f => f.name === this._filterFile);
		if (!fileData) {
			return renderEmpty();
		}

		const tests = fileData.tests.filter(t => {
			return this._filterTest === undefined || t.name === this._filterTest;
		});
		if (tests.length === 0) {
			return renderEmpty();
		}

		return this._renderTestResults(fileData, tests);

	}
	_renderTabButtons(tabs) {
		if (tabs.length < 2) return T;
		return renderTabButtons('browser results', tabs, index => {
			this._selectedBrowserIndex = index;
			this._scrollToTop();
			this.requestUpdate();
		});
	}
	_renderTabPanels(tabs) {

		let panelsContent;
		if (tabs.length < 2) {
			panelsContent = tabs.map(t => t.content);
		} else {
			panelsContent = tabs.map(t => renderTabPanel(t));
		}

		return x`<div class="tab-panels">${panelsContent}</div>`;

	}
	_renderTestResults(fileData, tests) {

		let fullMode = T;
		if (this._layout === LAYOUTS.FULL.value) {
			fullMode = renderRadio(
				'fullMode',
				this._fullMode,
				(val) => this._fullMode = val,
				[FULL_MODE.GOLDEN, FULL_MODE.NEW]
			);
		}

		const browsers = data.browsers.filter(b => this._filterBrowsers.includes(b.name));
		const browserResults = new Map();
		tests.forEach(t => {
			t.results.forEach(r => {
				if (!browserResults.has(r.name)) {
					browserResults.set(r.name, 0);
				}
				if (r.passed) browserResults.set(r.name, browserResults.get(r.name) + 1);
			});
		});

		if (!browsers[this._selectedBrowserIndex]) {
			this._selectedBrowserIndex = Math.max(
				browsers.findIndex((b) => browserResults.get(b.name) < tests.length),
				0
			);
		}
		const selectedBrowser = browsers[this._selectedBrowserIndex];

		const tabs = browsers.map((b) => {
			const numPassed = browserResults.get(b.name);
			return {
				content: renderBrowserResults(b, tests, { filterStatus: this._filterStatus, fullMode: this._fullMode, layout: this._layout, showOverlay: this._overlay }),
				label: b.name,
				id: b.name.toLowerCase(),
				selected: b.name === selectedBrowser.name,
				status: renderTestStatus(numPassed, tests.length)
			};
		});

		const homeSearchParams = new URLSearchParams(window.location.search);
		homeSearchParams.delete('file');
		homeSearchParams.delete('test');

		return x`
			<div class="test-results">
				<div class="header">
					<div class="title">
						<a href="${this._root}?${homeSearchParams.toString()}">Home</a>
						<span>&nbsp;&gt;&nbsp;</span>
						<h2>${fileData.name}</h2>
					</div>
					<div class="settings">
						${renderRadio('layout', this._layout, (val) => this._layout = val, [LAYOUTS.FULL, LAYOUTS.SPLIT])}
						<label class="settings-box"><input type="checkbox" ?checked="${this._overlay}" @change="${this._handleOverlayChange}">Overlay Difference</label>
						${fullMode}
						<div class="spacer"></div>
						<d2l-vdiff-report-button ?disabled="${this._prev === undefined}" text="Prev" @click="${this._handlePrevClick}">${ICON_PREV}</d2l-vdiff-report-button>
						<d2l-vdiff-report-button ?disabled="${this._next === undefined}" text="Next" @click="${this._handleNextClick}">${ICON_NEXT}</d2l-vdiff-report-button>
					</div>
					${this._renderTabButtons(tabs)}
				</div>
				${this._renderTabPanels(tabs)}
			</div>
		`;

	}
	_scrollToTop() {
		this.shadowRoot.querySelector('.tab-panels').scrollTo(0, 0);
	}
	_updateFiles() {

		const files = [];
		let foundFilterTest = false;
		let lookingForNextFile = false;
		let lookingForNextTest = false;
		let prevFile, prevTest;

		this._next = undefined;
		this._prev = undefined;

		data.files.forEach(f => {
			const tests = [];
			f.tests.forEach(t => {
				let numStatusMatch = 0;
				t.results.forEach(r => {
					if (this._filterBrowsers.includes(r.name) &&
						(this._filterStatus === FILTER_STATUS.ALL ||
						r.passed && this._filterStatus === FILTER_STATUS.PASSED ||
						!r.passed && this._filterStatus === FILTER_STATUS.FAILED)) numStatusMatch++;
				});
				if (numStatusMatch > 0) {
					if (lookingForNextTest) {
						lookingForNextTest = false;
						this._next = { file: f.name, test: t.name };
					}
					if (t.name === this._filterTest && f.name === this._filterFile) {
						foundFilterTest = true;
						lookingForNextTest = true;
						this._prev = prevTest;
					}
					prevTest = { file: f.name, test: t.name };
					tests.push(t);
				}
			});
			if (tests.length > 0) {
				if (this._filterTest === undefined) {
					if (lookingForNextFile) {
						lookingForNextFile = false;
						this._next = { file: f.name };
					}
					if (f.name === this._filterFile) {
						lookingForNextFile = true;
						this._prev = prevFile;
					}
				}
				prevFile = { file: f.name };
				files.push({ ...f, tests });
			}
		});

		if (this._filterTest !== undefined && !foundFilterTest) {
			this._updateSearchParams({ test: undefined });
			return;
		}
		this._files = files;

	}
	_updateSearchParams(params) {
		const searchParams = new URLSearchParams(window.location.search);
		for (const name in params) {
			if (params[name] === undefined) {
				searchParams.delete(name);
			} else {
				searchParams.set(name, params[name]);
			}
		}
		page_js.redirect(`${this._root}?${searchParams.toString()}`);
	}
}
customElements.define('d2l-vdiff-report-app', App);
