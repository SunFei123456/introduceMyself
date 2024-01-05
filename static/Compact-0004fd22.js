import{R as m,L as O,S as E,r as s,C as N,c as P}from"./index-7e783d5a.js";import{g as $,m as L}from"./genComponentStyleHook-3ca8901c.js";function u(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=[];return m.Children.forEach(e,function(n){n==null&&!t.keepEmpty||(Array.isArray(n)?r=r.concat(u(n)):O.isFragment(n)&&n.props?r=r.concat(u(n.props.children,t)):r.push(n))}),r}const j=e=>{const t=m.useContext(E);return m.useMemo(()=>e?typeof e=="string"?e??t:e instanceof Function?e(t):t:t,[e,t])},M=j,D=e=>{const{componentCls:t}=e;return{[t]:{"&-block":{display:"flex",width:"100%"},"&-vertical":{flexDirection:"column"}}}},F=D,A=e=>{const{componentCls:t}=e;return{[t]:{display:"inline-flex","&-rtl":{direction:"rtl"},"&-vertical":{flexDirection:"column"},"&-align":{flexDirection:"column","&-center":{alignItems:"center"},"&-start":{alignItems:"flex-start"},"&-end":{alignItems:"flex-end"},"&-baseline":{alignItems:"baseline"}},[`${t}-item:empty`]:{display:"none"}}}},T=e=>{const{componentCls:t}=e;return{[t]:{"&-gap-row-small":{rowGap:e.spaceGapSmallSize},"&-gap-row-middle":{rowGap:e.spaceGapMiddleSize},"&-gap-row-large":{rowGap:e.spaceGapLargeSize},"&-gap-col-small":{columnGap:e.spaceGapSmallSize},"&-gap-col-middle":{columnGap:e.spaceGapMiddleSize},"&-gap-col-large":{columnGap:e.spaceGapLargeSize}}}},_=$("Space",e=>{const t=L(e,{spaceGapSmallSize:e.paddingXS,spaceGapMiddleSize:e.padding,spaceGapLargeSize:e.paddingLG});return[A(t),T(t),F(t)]},()=>({}),{resetStyle:!1});var g=globalThis&&globalThis.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const d=s.createContext(null),X=e=>{let{children:t}=e;return s.createElement(d.Provider,{value:null},t)},R=e=>{var{children:t}=e,r=g(e,["children"]);return s.createElement(d.Provider,{value:r},t)},k=e=>{const{getPrefixCls:t,direction:r}=s.useContext(N),{size:n,direction:a,block:f,prefixCls:S,className:C,rootClassName:y,children:x}=e,v=g(e,["size","direction","block","prefixCls","className","rootClassName","children"]),G=M(c=>n??c),l=t("space-compact",S),[b,I]=_(l),z=P(l,I,{[`${l}-rtl`]:r==="rtl",[`${l}-block`]:f,[`${l}-vertical`]:a==="vertical"},C,y),o=s.useContext(d),i=u(x),h=s.useMemo(()=>i.map((c,p)=>{const w=c&&c.key||`${l}-item-${p}`;return s.createElement(R,{key:w,compactSize:G,compactDirection:a,isFirstItem:p===0&&(!o||(o==null?void 0:o.isFirstItem)),isLastItem:p===i.length-1&&(!o||(o==null?void 0:o.isLastItem))},c)}),[n,i,o]);return i.length===0?null:b(s.createElement("div",Object.assign({className:z},v),h))},q=k;export{q as C,X as N,u as t,_ as u};
