"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[472],{472:(e,s,c)=>{c.r(s),c.d(s,{default:()=>l});var r=c(60),n=c(196),a=c(496);const t=e=>{let{src:s,alt:c}=e;const n=(0,r.useRef)(null);return(0,r.useEffect)((()=>{console.log("LazyImage rerendering")}),[]),(0,r.useEffect)((()=>{const e=new IntersectionObserver((c=>{c.forEach((c=>{c.isIntersecting&&n.current&&(n.current.src=s,e.unobserve(n.current))}))}));return n.current&&e.observe(n.current),()=>{n.current&&e.unobserve(n.current)}}),[s]),(0,a.jsx)("img",{ref:n,src:"placeholder.jpg",alt:c})};var o=c(272);const l=e=>{console.log("Test rerendering");const s=[];n.c.forEach(((e,c)=>{s.push("".concat("/portfolio","/img/jpg/").concat(e.rsc.name,"_").concat(e.responsive.main,".jpg"))}));const[c,l]=(0,r.useState)(!0);let[i,g]=(0,r.useState)(!1),[u,d]=(0,r.useState)(0);return(0,r.useEffect)((()=>{const e=Array(s.length).fill(!0);let c=0;const r=r=>{e[r]=!0,c++,c===s.length&&l(!1)};return s.forEach(((e,s)=>{const c=new Image;c.onload=()=>r(s),c.src=e})),()=>{s.forEach(((e,s)=>{(new Image).onload=null}))}}),[s]),(0,a.jsxs)("div",{className:"container",children:[c&&(0,a.jsx)("aside",{className:"msg-cover loading",children:(0,a.jsx)("img",{src:"".concat("/portfolio","/img/icon-loading.gif"),alt:""})}),i?(0,a.jsx)(o.c,{modal:i,setModal:g,target:u,setTarget:d,language:e.language,setLanguage:e.setLanguage}):null,(0,a.jsx)("h1",{children:"Project"}),(0,a.jsx)("section",{children:(0,a.jsx)("ul",{className:"pj",children:n.c.map(((s,c)=>(0,a.jsx)("li",{children:(0,a.jsxs)("a",{href:"#",onClick:e=>{e.preventDefault(),g(!i),d(c)},children:[(0,a.jsx)(t,{src:"".concat("/portfolio","/img/jpg/").concat(s.rsc.name,"_").concat(s.responsive.main,".jpg"),alt:""}),(0,a.jsx)("div",{className:"cover"}),(0,a.jsxs)("div",{className:"desc",children:[(0,a.jsx)("p",{className:"pro-tit",children:e.language?s.projectName.eng:s.projectName.kor}),(0,a.jsx)("div",{className:"tags",children:s.skills.map(((e,s)=>(0,a.jsx)("span",{className:"tag",children:e},s)))})]})]})},c)))})})]})}}}]);
//# sourceMappingURL=472.6d0c2e6a.chunk.js.map