import{e as k,d as m,_ as V,b as E,H as A,q as $,r as J,C as Q,M as P,N as G,O as W,P as X,Q as Y,R as p,T as D,U as ee,V as te}from"./index-7e783d5a.js";let se=k(function r(){m(this,r)});const I=se;let re=function(r){V(s,r);var n=E(s);function s(t){var e;return m(this,s),e=n.call(this),e.result=0,t instanceof s?e.result=t.result:typeof t=="number"&&(e.result=t),e}return k(s,[{key:"add",value:function(e){return e instanceof s?this.result+=e.result:typeof e=="number"&&(this.result+=e),this}},{key:"sub",value:function(e){return e instanceof s?this.result-=e.result:typeof e=="number"&&(this.result-=e),this}},{key:"mul",value:function(e){return e instanceof s?this.result*=e.result:typeof e=="number"&&(this.result*=e),this}},{key:"div",value:function(e){return e instanceof s?this.result/=e.result:typeof e=="number"&&(this.result/=e),this}},{key:"equal",value:function(){return this.result}}]),s}(I);const U="CALC_UNIT";function S(r){return typeof r=="number"?`${r}${U}`:r}let ne=function(r){V(s,r);var n=E(s);function s(t){var e;return m(this,s),e=n.call(this),e.result="",t instanceof s?e.result=`(${t.result})`:typeof t=="number"?e.result=S(t):typeof t=="string"&&(e.result=t),e}return k(s,[{key:"add",value:function(e){return e instanceof s?this.result=`${this.result} + ${e.getResult()}`:(typeof e=="number"||typeof e=="string")&&(this.result=`${this.result} + ${S(e)}`),this.lowPriority=!0,this}},{key:"sub",value:function(e){return e instanceof s?this.result=`${this.result} - ${e.getResult()}`:(typeof e=="number"||typeof e=="string")&&(this.result=`${this.result} - ${S(e)}`),this.lowPriority=!0,this}},{key:"mul",value:function(e){return this.lowPriority&&(this.result=`(${this.result})`),e instanceof s?this.result=`${this.result} * ${e.getResult(!0)}`:(typeof e=="number"||typeof e=="string")&&(this.result=`${this.result} * ${e}`),this.lowPriority=!1,this}},{key:"div",value:function(e){return this.lowPriority&&(this.result=`(${this.result})`),e instanceof s?this.result=`${this.result} / ${e.getResult(!0)}`:(typeof e=="number"||typeof e=="string")&&(this.result=`${this.result} / ${e}`),this.lowPriority=!1,this}},{key:"getResult",value:function(e){return this.lowPriority||e?`(${this.result})`:this.result}},{key:"equal",value:function(e){const{unit:i=!0}=e||{},l=new RegExp(`${U}`,"g");return this.result=this.result.replace(l,i?"px":""),typeof this.lowPriority<"u"?`calc(${this.result})`:this.result}}]),s}(I);const ie=r=>{const n=r==="css"?ne:re;return s=>new n(s)},le=ie;function oe(r){return r==="js"?{max:Math.max,min:Math.min}:{max:function(){for(var n=arguments.length,s=new Array(n),t=0;t<n;t++)s[t]=arguments[t];return`max(${s.map(e=>A(e)).join(",")})`},min:function(){for(var n=arguments.length,s=new Array(n),t=0;t<n;t++)s[t]=arguments[t];return`min(${s.map(e=>A(e)).join(",")})`}}}const q=typeof CSSINJS_STATISTIC<"u";let b=!0;function M(){for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];if(!q)return Object.assign.apply(Object,[{}].concat(n));b=!1;const t={};return n.forEach(e=>{Object.keys(e).forEach(l=>{Object.defineProperty(t,l,{configurable:!0,enumerable:!0,get:()=>e[l]})})}),b=!0,t}const R={};function ae(){}const ue=r=>{let n,s=r,t=ae;return q&&typeof Proxy<"u"&&(n=new Set,s=new Proxy(r,{get(e,i){return b&&n.add(i),e[i]}}),t=(e,i)=>{var l;R[e]={global:Array.from(n),component:Object.assign(Object.assign({},(l=R[e])===null||l===void 0?void 0:l.component),i)}}),{token:s,keys:n,flush:t}},z=(r,n,s)=>{var t;return typeof s=="function"?s(M(n,(t=n[r])!==null&&t!==void 0?t:{})):s??{}},H=(r,n,s,t)=>{const e=Object.assign({},n[r]);if(t!=null&&t.deprecatedTokens){const{deprecatedTokens:l}=t;l.forEach(u=>{let[g,o]=u;var a;(e!=null&&e[g]||e!=null&&e[o])&&((a=e[o])!==null&&a!==void 0||(e[o]=e==null?void 0:e[g]))})}let i=Object.assign(Object.assign({},s),e);return t!=null&&t.format&&(i=t.format(i)),Object.keys(i).forEach(l=>{i[l]===n[l]&&delete i[l]}),i},ce=(r,n)=>`${[n,r.replace(/([A-Z]+)([A-Z][a-z]+)/g,"$1-$2").replace(/([a-z])([A-Z])/g,"$1-$2")].filter(Boolean).join("-")}`;function fe(r,n,s){let t=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const e=Array.isArray(r)?r:[r,r],[i]=e,l=e.join("-");return u=>{const[g,o,a,c,h]=$(),{getPrefixCls:y,iconPrefixCls:f,csp:d}=J.useContext(Q),C=y(),j=h?"css":"js",K=le(j),{max:L,min:Z}=oe(j),T={theme:g,token:c,hashId:a,nonce:()=>d==null?void 0:d.nonce,clientOnly:t.clientOnly,order:t.order||-999};return P(Object.assign(Object.assign({},T),{clientOnly:!1,path:["Shared",C]}),()=>[{"&":G(c)}]),W(f,d),[P(Object.assign(Object.assign({},T),{path:[l,u,f]}),()=>{if(t.injectStyle===!1)return[];const{token:_,flush:N}=ue(c),v=z(i,o,s),B=`.${u}`,O=H(i,o,v,{deprecatedTokens:t.deprecatedTokens,format:t.format});h&&Object.keys(v).forEach(w=>{v[w]=`var(${X(w,ce(i,h.prefix))})`});const x=M(_,{componentCls:B,prefixCls:u,iconCls:`.${f}`,antCls:`.${C}`,calc:K,max:L,min:Z},h?v:O),F=n(x,{hashId:a,prefixCls:u,rootPrefixCls:C,iconPrefixCls:f});return N(i,O),[t.resetStyle===!1?null:Y(x,u),F]}),a]}}const he=(r,n,s)=>{function t(o){return`${r}${o.slice(0,1).toUpperCase()}${o.slice(1)}`}const{unitless:e={},injectStyle:i=!0}=s??{},l={[t("zIndexPopup")]:!0};Object.keys(e).forEach(o=>{l[t(o)]=e[o]});const u=o=>{let{rootCls:a,cssVar:c}=o;const[,h]=$();return D({path:[r],prefix:c.prefix,key:c==null?void 0:c.key,unitless:Object.assign(Object.assign({},ee),l),ignore:te,token:h,scope:a},()=>{const y=z(r,h,n),f=H(r,h,y,{format:s==null?void 0:s.format,deprecatedTokens:s==null?void 0:s.deprecatedTokens});return Object.keys(y).forEach(d=>{f[t(d)]=f[d],delete f[d]}),f}),null};return o=>{const[,,,,a]=$();return[c=>i&&a?p.createElement(p.Fragment,null,p.createElement(u,{rootCls:o,cssVar:a,component:r}),c):c,a==null?void 0:a.key]}},ye=(r,n,s,t)=>{const e=fe(r,n,s,t),i=he(Array.isArray(r)?r[0]:r,s,t);return function(l){let u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:l;const[,g]=e(l),[o,a]=i(u);return[o,g,a]}};export{ye as g,M as m};
