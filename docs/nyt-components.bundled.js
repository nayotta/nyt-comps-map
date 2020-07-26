/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const t="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,e=(t,e,s=null)=>{for(;e!==s;){const s=e.nextSibling;t.removeChild(e),e=s}},s=`{{lit-${String(Math.random()).slice(2)}}}`,i=`\x3c!--${s}--\x3e`,o=new RegExp(`${s}|${i}`);class l{constructor(t,e){this.parts=[],this.element=e;const i=[],l=[],c=document.createTreeWalker(e.content,133,null,!1);let f=0,a=-1,x=0;const{strings:d,values:{length:u}}=t;for(;x<u;){const t=c.nextNode();if(null!==t){if(a++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:s}=e;let i=0;for(let t=0;t<s;t++)n(e[t].name,"$lit$")&&i++;for(;i-- >0;){const e=d[x],s=h.exec(e)[2],i=s.toLowerCase()+"$lit$",l=t.getAttribute(i);t.removeAttribute(i);const n=l.split(o);this.parts.push({type:"attribute",index:a,name:s,strings:n}),x+=n.length-1}}"TEMPLATE"===t.tagName&&(l.push(t),c.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(s)>=0){const s=t.parentNode,l=e.split(o),c=l.length-1;for(let e=0;e<c;e++){let i,o=l[e];if(""===o)i=r();else{const t=h.exec(o);null!==t&&n(t[2],"$lit$")&&(o=o.slice(0,t.index)+t[1]+t[2].slice(0,-"$lit$".length)+t[3]),i=document.createTextNode(o)}s.insertBefore(i,t),this.parts.push({type:"node",index:++a})}""===l[c]?(s.insertBefore(r(),t),i.push(t)):t.data=l[c],x+=c}}else if(8===t.nodeType)if(t.data===s){const e=t.parentNode;null!==t.previousSibling&&a!==f||(a++,e.insertBefore(r(),t)),f=a,this.parts.push({type:"node",index:a}),null===t.nextSibling?t.data="":(i.push(t),a--),x++}else{let e=-1;for(;-1!==(e=t.data.indexOf(s,e+1));)this.parts.push({type:"node",index:-1}),x++}}else c.currentNode=l.pop()}for(const t of i)t.parentNode.removeChild(t)}}const n=(t,e)=>{const s=t.length-e.length;return s>=0&&t.slice(s)===e},c=t=>-1!==t.index,r=()=>document.createComment(""),h=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function f(t,e){const{element:{content:s},parts:i}=t,o=document.createTreeWalker(s,133,null,!1);let l=x(i),n=i[l],c=-1,r=0;const h=[];let f=null;for(;o.nextNode();){c++;const t=o.currentNode;for(t.previousSibling===f&&(f=null),e.has(t)&&(h.push(t),null===f&&(f=t)),null!==f&&r++;void 0!==n&&n.index===c;)n.index=null!==f?-1:n.index-r,l=x(i,l),n=i[l]}h.forEach(t=>t.parentNode.removeChild(t))}const a=t=>{let e=11===t.nodeType?0:1;const s=document.createTreeWalker(t,133,null,!1);for(;s.nextNode();)e++;return e},x=(t,e=-1)=>{for(let s=e+1;s<t.length;s++){const e=t[s];if(c(e))return s}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const d=new WeakMap,u=t=>"function"==typeof t&&d.has(t),m={},p={};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class w{constructor(t,e,s){this.t=[],this.template=t,this.processor=e,this.options=s}update(t){let e=0;for(const s of this.t)void 0!==s&&s.setValue(t[e]),e++;for(const t of this.t)void 0!==t&&t.commit()}_clone(){const e=t?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),s=[],i=this.template.parts,o=document.createTreeWalker(e,133,null,!1);let l,n=0,r=0,h=o.nextNode();for(;n<i.length;)if(l=i[n],c(l)){for(;r<l.index;)r++,"TEMPLATE"===h.nodeName&&(s.push(h),o.currentNode=h.content),null===(h=o.nextNode())&&(o.currentNode=s.pop(),h=o.nextNode());if("node"===l.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(h.previousSibling),this.t.push(t)}else this.t.push(...this.processor.handleAttributeExpressions(h,l.name,l.strings,this.options));n++}else this.t.push(void 0),n++;return t&&(document.adoptNode(e),customElements.upgrade(e)),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const y=` ${s} `;class g{constructor(t,e,s,i){this.strings=t,this.values=e,this.type=s,this.processor=i}getHTML(){const t=this.strings.length-1;let e="",o=!1;for(let l=0;l<t;l++){const t=this.strings[l],n=t.lastIndexOf("\x3c!--");o=(n>-1||o)&&-1===t.indexOf("--\x3e",n+1);const c=h.exec(t);e+=null===c?t+(o?y:i):t.substr(0,c.index)+c[1]+c[2]+"$lit$"+c[3]+s}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const v=t=>null===t||!("object"==typeof t||"function"==typeof t),b=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class ${constructor(t,e,s){this.dirty=!0,this.element=t,this.name=e,this.strings=s,this.parts=[];for(let t=0;t<s.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new S(this)}_getValue(){const t=this.strings,e=t.length-1;let s="";for(let i=0;i<e;i++){s+=t[i];const e=this.parts[i];if(void 0!==e){const t=e.value;if(v(t)||!b(t))s+="string"==typeof t?t:String(t);else for(const e of t)s+="string"==typeof e?e:String(e)}}return s+=t[e],s}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class S{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===m||v(t)&&t===this.value||(this.value=t,u(t)||(this.committer.dirty=!0))}commit(){for(;u(this.value);){const t=this.value;this.value=m,t(this)}this.value!==m&&this.committer.commit()}}class _{constructor(t){this.value=void 0,this.s=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(r()),this.endNode=t.appendChild(r())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.i(this.startNode=r()),t.i(this.endNode=r())}insertAfterPart(t){t.i(this.startNode=r()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.s=t}commit(){if(null===this.startNode.parentNode)return;for(;u(this.s);){const t=this.s;this.s=m,t(this)}const t=this.s;t!==m&&(v(t)?t!==this.value&&this.o(t):t instanceof g?this.l(t):t instanceof Node?this.h(t):b(t)?this.u(t):t===p?(this.value=p,this.clear()):this.o(t))}i(t){this.endNode.parentNode.insertBefore(t,this.endNode)}h(t){this.value!==t&&(this.clear(),this.i(t),this.value=t)}o(t){const e=this.startNode.nextSibling,s="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=s:this.h(document.createTextNode(s)),this.value=t}l(t){const e=this.options.templateFactory(t);if(this.value instanceof w&&this.value.template===e)this.value.update(t.values);else{const s=new w(e,t.processor,this.options),i=s._clone();s.update(t.values),this.h(i),this.value=s}}u(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let s,i=0;for(const o of t)s=e[i],void 0===s&&(s=new _(this.options),e.push(s),0===i?s.appendIntoPart(this):s.insertAfterPart(e[i-1])),s.setValue(o),s.commit(),i++;i<e.length&&(e.length=i,this.clear(s&&s.endNode))}clear(t=this.startNode){e(this.startNode.parentNode,t.nextSibling,this.endNode)}}class A{constructor(t,e,s){if(this.value=void 0,this.s=void 0,2!==s.length||""!==s[0]||""!==s[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=s}setValue(t){this.s=t}commit(){for(;u(this.s);){const t=this.s;this.s=m,t(this)}if(this.s===m)return;const t=!!this.s;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.s=m}}class C extends ${constructor(t,e,s){super(t,e,s),this.single=2===s.length&&""===s[0]&&""===s[1]}_createPart(){return new O(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class O extends S{}let M=!1;(()=>{try{const t={get capture(){return M=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}})();class P{constructor(t,e,s){this.value=void 0,this.s=void 0,this.element=t,this.eventName=e,this.eventContext=s,this.m=t=>this.handleEvent(t)}setValue(t){this.s=t}commit(){for(;u(this.s);){const t=this.s;this.s=m,t(this)}if(this.s===m)return;const t=this.s,e=this.value,s=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),i=null!=t&&(null==e||s);s&&this.element.removeEventListener(this.eventName,this.m,this.p),i&&(this.p=j(t),this.element.addEventListener(this.eventName,this.m,this.p)),this.value=t,this.s=m}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const j=t=>t&&(M?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */;function k(t){let e=T.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},T.set(t.type,e));let i=e.stringsArray.get(t.strings);if(void 0!==i)return i;const o=t.strings.join(s);return i=e.keyString.get(o),void 0===i&&(i=new l(t,t.getTemplateElement()),e.keyString.set(o,i)),e.stringsArray.set(t.strings,i),i}const T=new Map,E=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const U=new
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class{handleAttributeExpressions(t,e,s,i){const o=e[0];if("."===o){return new C(t,e.slice(1),s).parts}return"@"===o?[new P(t,e.slice(1),i.eventContext)]:"?"===o?[new A(t,e.slice(1),s)]:new $(t,e,s).parts}handleTextExpression(t){return new _(t)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.2.1");const N=(t,...e)=>new g(t,e,"html",U)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */,V=(t,e)=>`${t}--${e}`;let F=!0;void 0===window.ShadyCSS?F=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),F=!1);const J=t=>e=>{const i=V(e.type,t);let o=T.get(i);void 0===o&&(o={stringsArray:new WeakMap,keyString:new Map},T.set(i,o));let n=o.stringsArray.get(e.strings);if(void 0!==n)return n;const c=e.strings.join(s);if(n=o.keyString.get(c),void 0===n){const s=e.getTemplateElement();F&&window.ShadyCSS.prepareTemplateDom(s,t),n=new l(e,s),o.keyString.set(c,n)}return o.stringsArray.set(e.strings,n),n},q=["html","svg"],I=new Set,R=(t,e,s)=>{I.add(t);const i=s?s.element:document.createElement("template"),o=e.querySelectorAll("style"),{length:l}=o;if(0===l)return void window.ShadyCSS.prepareTemplateStyles(i,t);const n=document.createElement("style");for(let t=0;t<l;t++){const e=o[t];e.parentNode.removeChild(e),n.textContent+=e.textContent}(t=>{q.forEach(e=>{const s=T.get(V(e,t));void 0!==s&&s.keyString.forEach(t=>{const{element:{content:e}}=t,s=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{s.add(t)}),f(t,s)})})})(t);const c=i.content;s?function(t,e,s=null){const{element:{content:i},parts:o}=t;if(null==s)return void i.appendChild(e);const l=document.createTreeWalker(i,133,null,!1);let n=x(o),c=0,r=-1;for(;l.nextNode();){for(r++,l.currentNode===s&&(c=a(e),s.parentNode.insertBefore(e,s));-1!==n&&o[n].index===r;){if(c>0){for(;-1!==n;)o[n].index+=c,n=x(o,n);return}n=x(o,n)}}}(s,n,c.firstChild):c.insertBefore(n,c.firstChild),window.ShadyCSS.prepareTemplateStyles(i,t);const r=c.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==r)e.insertBefore(r.cloneNode(!0),e.firstChild);else if(s){c.insertBefore(n,c.firstChild);const t=new Set;t.add(n),f(s,t)}};window.JSCompiler_renameProperty=(t,e)=>t;const z={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},L=(t,e)=>e!==t&&(e==e||t==t),W={attribute:!0,type:String,converter:z,reflect:!1,hasChanged:L};class H extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=new Promise(t=>this._enableUpdatingResolver=t),this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((e,s)=>{const i=this._attributeNameForProperty(s,e);void 0!==i&&(this._attributeToPropertyMap.set(i,s),t.push(i))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}}static createProperty(t,e=W){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const s="symbol"==typeof t?Symbol():`__${t}`,i=this.getPropertyDescriptor(t,s,e);void 0!==i&&Object.defineProperty(this.prototype,t,i)}static getPropertyDescriptor(t,e,s){return{get(){return this[e]},set(s){const i=this[t];this[e]=s,this._requestUpdate(t,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||W}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty("finalized")||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const s of e)this.createProperty(s,t[s])}}static _attributeNameForProperty(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,s=L){return s(t,e)}static _propertyValueFromAttribute(t,e){const s=e.type,i=e.converter||z,o="function"==typeof i?i:i.fromAttribute;return o?o(t,s):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const s=e.type,i=e.converter;return(i&&i.toAttribute||z.toAttribute)(t,s)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,s){e!==s&&this._attributeToProperty(t,s)}_propertyToAttribute(t,e,s=W){const i=this.constructor,o=i._attributeNameForProperty(t,s);if(void 0!==o){const t=i._propertyValueToAttribute(e,s);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(o):this.setAttribute(o,t),this._updateState=-9&this._updateState}}_attributeToProperty(t,e){if(8&this._updateState)return;const s=this.constructor,i=s._attributeToPropertyMap.get(t);if(void 0!==i){const t=s.getPropertyOptions(i);this._updateState=16|this._updateState,this[i]=s._propertyValueFromAttribute(e,t),this._updateState=-17&this._updateState}}_requestUpdate(t,e){let s=!0;if(void 0!==t){const i=this.constructor,o=i.getPropertyOptions(t);i._valueHasChanged(this[t],e,o.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==o.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,o))):s=!1}!this._hasRequestedUpdate&&s&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,e){return this._requestUpdate(t,e),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(t){}const t=this.performUpdate();return null!=t&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t?this.update(e):this._markUpdated()}catch(e){throw t=!1,this._markUpdated(),e}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,e)=>this._propertyToAttribute(e,this[e],t)),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}H.finalized=!0;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const B=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:s,elements:i}=e;return{kind:s,elements:i,finisher(e){window.customElements.define(t,e)}}})(t,e),D=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?Object.assign(Object.assign({},e),{finisher(s){s.createProperty(e.key,t)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(s){s.createProperty(e.key,t)}};function G(t){return(e,s)=>void 0!==s?((t,e,s)=>{e.constructor.createProperty(s,t)})(t,e,s):D(t,e)}
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const K="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Q=Symbol();class X{constructor(t,e){if(e!==Q)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(K?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.3.1");const Y={};class Z extends H{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const t=this.getStyles();if(void 0===t)this._styles=[];else if(Array.isArray(t)){const e=(t,s)=>t.reduceRight((t,s)=>Array.isArray(s)?e(s,t):(t.add(s),t),s),s=e(t,new Set),i=[];s.forEach(t=>i.unshift(t)),this._styles=i}else this._styles=[t]}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?K?this.renderRoot.adoptedStyleSheets=t.map(t=>t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){const e=this.render();super.update(t),e!==Y&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)}))}render(){return Y}}Z.finalized=!0,Z.render=(t,s,i)=>{if(!i||"object"!=typeof i||!i.scopeName)throw new Error("The `scopeName` option is required.");const o=i.scopeName,l=E.has(s),n=F&&11===s.nodeType&&!!s.host,c=n&&!I.has(o),r=c?document.createDocumentFragment():s;if(((t,s,i)=>{let o=E.get(s);void 0===o&&(e(s,s.firstChild),E.set(s,o=new _(Object.assign({templateFactory:k},i))),o.appendInto(s)),o.setValue(t),o.commit()})(t,r,Object.assign({templateFactory:J(o)},i)),c){const t=E.get(r);E.delete(r);const i=t.value instanceof w?t.value.template:void 0;R(o,r,i),e(s,s.firstChild),s.appendChild(r),E.set(s,t)}!l&&n&&window.ShadyCSS.styleElement(s.host)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const tt=new WeakMap,et=(st=t=>e=>{if(!(e instanceof _))throw new Error("unsafeHTML can only be used in text bindings");const s=tt.get(e);if(void 0!==s&&v(t)&&t===s.value&&e.value===s.fragment)return;const i=document.createElement("template");i.innerHTML=t;const o=document.importNode(i.content,!0);e.setValue(o),tt.set(e,{value:t,fragment:o})},(...t)=>{const e=st(...t);return d.set(e,!0),e});var st;const it=((t,...e)=>{const s=e.reduce((e,s,i)=>e+(t=>{if(t instanceof X)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(s)+t[i+1],t[0]);return new X(s,Q)})`
  :host {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
  .row {
    display: flex;
    flex-wrap: wrap;
  }
  .col-1 { flex: 0 0 4.1666667%; }
  .col-2 { flex: 0 0 8.333333%; }
  .col-3 { flex: 0 0 12.5%; }
  .col-4 { flex: 0 0 16.666667%; }
  .col-5 { flex: 0 0 20.833333%; }
  .col-6 { flex: 0 0 25%; }
  .col-7 { flex: 0 0 29.166667%; }
  .col-8 { flex: 0 0 33.333333%; }
  .col-9 { flex: 0 0 37.5%; }
  .col-10 { flex: 0 0 41.666667%; }
  .col-11 { flex: 0 0 45.833333%; }
  .col-12 { flex: 0 0 50%; }
  .col-13 { flex: 0 0 54.166667%; }
  .col-14 { flex: 0 0 58.333333%; }
  .col-15 { flex: 0 0 62.5%; }
  .col-16 { flex: 0 0 66.666667%; }
  .col-17 { flex: 0 0 70.833333%; }
  .col-18 { flex: 0 0 75%; }
  .col-19 { flex: 0 0 79.166667%; }
  .col-20 { flex: 0 0 83.333333%; }
  .col-21 { flex: 0 0 87.5%; }
  .col-22 { flex: 0 0 91.666667%; }
  .col-23 { flex: 0 0 95.833333%; }
  .col-24 { flex: 0 0 100%; }

  /* xs */
  @media screen and (max-width: 768px) {
    .col-xs-1 { flex: 0 0 4.1666667%; }
    .col-xs-2 { flex: 0 0 8.333333%; }
    .col-xs-3 { flex: 0 0 12.5%; }
    .col-xs-4 { flex: 0 0 16.666667%; }
    .col-xs-5 { flex: 0 0 20.833333%; }
    .col-xs-6 { flex: 0 0 25%; }
    .col-xs-7 { flex: 0 0 29.166667%; }
    .col-xs-8 { flex: 0 0 33.333333%; }
    .col-xs-9 { flex: 0 0 37.5%; }
    .col-xs-10 { flex: 0 0 41.666667%; }
    .col-xs-11 { flex: 0 0 45.833333%; }
    .col-xs-12 { flex: 0 0 50%; }
    .col-xs-13 { flex: 0 0 54.166667%; }
    .col-xs-14 { flex: 0 0 58.333333%; }
    .col-xs-15 { flex: 0 0 62.5%; }
    .col-xs-16 { flex: 0 0 66.666667%; }
    .col-xs-17 { flex: 0 0 70.833333%; }
    .col-xs-18 { flex: 0 0 75%; }
    .col-xs-19 { flex: 0 0 79.166667%; }
    .col-xs-20 { flex: 0 0 83.333333%; }
    .col-xs-21 { flex: 0 0 87.5%; }
    .col-xs-22 { flex: 0 0 91.666667%; }
    .col-xs-23 { flex: 0 0 95.833333%; }
    .col-xs-24 { flex: 0 0 100%; }
  }

  /* sm */
  @media screen and (min-width: 768px) and (max-width: 992px) {
    .col-sm-1 { flex: 0 0 4.1666667%; }
    .col-sm-2 { flex: 0 0 8.333333%; }
    .col-sm-3 { flex: 0 0 12.5%; }
    .col-sm-4 { flex: 0 0 16.666667%; }
    .col-sm-5 { flex: 0 0 20.833333%; }
    .col-sm-6 { flex: 0 0 25%; }
    .col-sm-7 { flex: 0 0 29.166667%; }
    .col-sm-8 { flex: 0 0 33.333333%; }
    .col-sm-9 { flex: 0 0 37.5%; }
    .col-sm-10 { flex: 0 0 41.666667%; }
    .col-sm-11 { flex: 0 0 45.833333%; }
    .col-sm-12 { flex: 0 0 50%; }
    .col-sm-13 { flex: 0 0 54.166667%; }
    .col-sm-14 { flex: 0 0 58.333333%; }
    .col-sm-15 { flex: 0 0 62.5%; }
    .col-sm-16 { flex: 0 0 66.666667%; }
    .col-sm-17 { flex: 0 0 70.833333%; }
    .col-sm-18 { flex: 0 0 75%; }
    .col-sm-19 { flex: 0 0 79.166667%; }
    .col-sm-20 { flex: 0 0 83.333333%; }
    .col-sm-21 { flex: 0 0 87.5%; }
    .col-sm-22 { flex: 0 0 91.666667%; }
    .col-sm-23 { flex: 0 0 95.833333%; }
    .col-sm-24 { flex: 0 0 100%; }
  }

  /* md */
  @media screen and (min-width: 992px) and (max-width: 1200px) {
    .col-md-1 { flex: 0 0 4.1666667%; }
    .col-md-2 { flex: 0 0 8.333333%; }
    .col-md-3 { flex: 0 0 12.5%; }
    .col-md-4 { flex: 0 0 16.666667%; }
    .col-md-5 { flex: 0 0 20.833333%; }
    .col-md-6 { flex: 0 0 25%; }
    .col-md-7 { flex: 0 0 29.166667%; }
    .col-md-8 { flex: 0 0 33.333333%; }
    .col-md-9 { flex: 0 0 37.5%; }
    .col-md-10 { flex: 0 0 41.666667%; }
    .col-md-11 { flex: 0 0 45.833333%; }
    .col-md-12 { flex: 0 0 50%; }
    .col-md-13 { flex: 0 0 54.166667%; }
    .col-md-14 { flex: 0 0 58.333333%; }
    .col-md-15 { flex: 0 0 62.5%; }
    .col-md-16 { flex: 0 0 66.666667%; }
    .col-md-17 { flex: 0 0 70.833333%; }
    .col-md-18 { flex: 0 0 75%; }
    .col-md-19 { flex: 0 0 79.166667%; }
    .col-md-20 { flex: 0 0 83.333333%; }
    .col-md-21 { flex: 0 0 87.5%; }
    .col-md-22 { flex: 0 0 91.666667%; }
    .col-md-23 { flex: 0 0 95.833333%; }
    .col-md-24 { flex: 0 0 100%; }
  }

  /* lg */
  @media screen and (min-width: 1200px) and (max-width: 1920px) {
    .col-lg-1 { flex: 0 0 4.1666667%; }
    .col-lg-2 { flex: 0 0 8.333333%; }
    .col-lg-3 { flex: 0 0 12.5%; }
    .col-lg-4 { flex: 0 0 16.666667%; }
    .col-lg-5 { flex: 0 0 20.833333%; }
    .col-lg-6 { flex: 0 0 25%; }
    .col-lg-7 { flex: 0 0 29.166667%; }
    .col-lg-8 { flex: 0 0 33.333333%; }
    .col-lg-9 { flex: 0 0 37.5%; }
    .col-lg-10 { flex: 0 0 41.666667%; }
    .col-lg-11 { flex: 0 0 45.833333%; }
    .col-lg-12 { flex: 0 0 50%; }
    .col-lg-13 { flex: 0 0 54.166667%; }
    .col-lg-14 { flex: 0 0 58.333333%; }
    .col-lg-15 { flex: 0 0 62.5%; }
    .col-lg-16 { flex: 0 0 66.666667%; }
    .col-lg-17 { flex: 0 0 70.833333%; }
    .col-lg-18 { flex: 0 0 75%; }
    .col-lg-19 { flex: 0 0 79.166667%; }
    .col-lg-20 { flex: 0 0 83.333333%; }
    .col-lg-21 { flex: 0 0 87.5%; }
    .col-lg-22 { flex: 0 0 91.666667%; }
    .col-lg-23 { flex: 0 0 95.833333%; }
    .col-lg-24 { flex: 0 0 100%; }
  }

  /* xl */
  @media screen and (min-width: 1920px) {
    .col-xl-1 { flex: 0 0 4.1666667%; }
    .col-xl-2 { flex: 0 0 8.333333%; }
    .col-xl-3 { flex: 0 0 12.5%; }
    .col-xl-4 { flex: 0 0 16.666667%; }
    .col-xl-5 { flex: 0 0 20.833333%; }
    .col-xl-6 { flex: 0 0 25%; }
    .col-xl-7 { flex: 0 0 29.166667%; }
    .col-xl-8 { flex: 0 0 33.333333%; }
    .col-xl-9 { flex: 0 0 37.5%; }
    .col-xl-10 { flex: 0 0 41.666667%; }
    .col-xl-11 { flex: 0 0 45.833333%; }
    .col-xl-12 { flex: 0 0 50%; }
    .col-xl-13 { flex: 0 0 54.166667%; }
    .col-xl-14 { flex: 0 0 58.333333%; }
    .col-xl-15 { flex: 0 0 62.5%; }
    .col-xl-16 { flex: 0 0 66.666667%; }
    .col-xl-17 { flex: 0 0 70.833333%; }
    .col-xl-18 { flex: 0 0 75%; }
    .col-xl-19 { flex: 0 0 79.166667%; }
    .col-xl-20 { flex: 0 0 83.333333%; }
    .col-xl-21 { flex: 0 0 87.5%; }
    .col-xl-22 { flex: 0 0 91.666667%; }
    .col-xl-23 { flex: 0 0 95.833333%; }
    .col-xl-24 { flex: 0 0 100%; }
  }
`;var ot=function(t,e,s,i){for(var o,l=arguments.length,n=l<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i,c=t.length-1;c>=0;c--)(o=t[c])&&(n=(l<3?o(n):l>3?o(e,s,n):o(e,s))||n);return l>3&&n&&Object.defineProperty(e,s,n),n};let lt=class extends Z{constructor(){super(...arguments),this.settings=[]}_getTag(t,e){return N`
      ${et(`<${t} settings='${JSON.stringify(e)}'></${t}>`)}
    `}_computeClasses(t){let e="";return t.normal&&(e+=`col-${t.normal} `),t.xs&&(e+=`col-xs-${t.xs} `),t.sm&&(e+=`col-sm-${t.sm} `),t.md&&(e+=`col-md-${t.md} `),t.lg&&(e+=`col-lg-${t.lg} `),t.xl&&(e+=`col-xl-${t.xl} `),e.replace(/\s$/,"")}render(){return N`
      ${this.settings.map(t=>"col"===t.type?N`
            <div class="${this._computeClasses(t.spans||{})}">
              ${t.component?this._getTag(t.component,t.componentSettings):""}
            </div>
          `:t.settings?N`
              <nyt-components-map .settings="${t.settings}"></nyt-components-map>
            `:N``)}
    `}};lt.styles=it,ot([G({type:Array})],lt.prototype,"settings",void 0),lt=ot([B("nyt-components-map-mirror")],lt);var nt=function(t,e,s,i){for(var o,l=arguments.length,n=l<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i,c=t.length-1;c>=0;c--)(o=t[c])&&(n=(l<3?o(n):l>3?o(e,s,n):o(e,s))||n);return l>3&&n&&Object.defineProperty(e,s,n),n};let ct=class extends Z{constructor(){super(...arguments),this.settings=[]}_getTag(t,e){return e?N`
      ${et(`<${t} settings='${JSON.stringify(e)}'></${t}>`)}
    `:N`
      ${et(`<${t}></${t}>`)}
    `}_computeClasses(t){let e="";return t.normal&&(e+=`col-${t.normal} `),t.xs&&(e+=`col-xs-${t.xs} `),t.sm&&(e+=`col-sm-${t.sm} `),t.md&&(e+=`col-md-${t.md} `),t.lg&&(e+=`col-lg-${t.lg} `),t.xl&&(e+=`col-xl-${t.xl} `),e.replace(/\s$/,"")}render(){return N`
      ${this.settings.map(t=>"col"===t.type?N`
            <div class="${this._computeClasses(t.spans||{})}">
              ${t.component?this._getTag(t.component,t.componentSettings):""}
            </div>
          `:t.settings?N`
              <nyt-components-map-mirror .settings="${t.settings}"></nyt-components-map-mirror>
            `:N``)}
    `}};ct.styles=it,nt([G({type:Array})],ct.prototype,"settings",void 0),ct=nt([B("nyt-components-map")],ct);export{ct as NytComponentsMap};
