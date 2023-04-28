"use strict";(self.webpackChunkbestchains=self.webpackChunkbestchains||[]).push([[711],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,m=u["".concat(l,".").concat(d)]||u[d]||b[d]||s;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<s;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},328:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>b,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const s={sidebar_position:2,title:"\u5feb\u901f\u5b89\u88c5",sidebar_label:"\u5feb\u901f\u5b89\u88c5"},o=void 0,i={unversionedId:"SaaS/dpsaas/installation",id:"SaaS/dpsaas/installation",title:"\u5feb\u901f\u5b89\u88c5",description:"\u524d\u7f6e\u6761\u4ef6",source:"@site/docs/SaaS/dpsaas/installation.md",sourceDirName:"SaaS/dpsaas",slug:"/SaaS/dpsaas/installation",permalink:"/website/en/docs/SaaS/dpsaas/installation",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"\u5feb\u901f\u5b89\u88c5",sidebar_label:"\u5feb\u901f\u5b89\u88c5"},sidebar:"docsSidebar",previous:{title:"\u4ecb\u7ecd",permalink:"/website/en/docs/SaaS/dpsaas/intro"},next:{title:"\u7528\u6237\u6307\u5357",permalink:"/website/en/docs/SaaS/dpsaas/usage"}},l={},c=[{value:"\u524d\u7f6e\u6761\u4ef6",id:"\u524d\u7f6e\u6761\u4ef6",level:2},{value:"\u672c\u5730\u90e8\u7f72",id:"\u672c\u5730\u90e8\u7f72",level:2},{value:"K8s\u90e8\u7f72",id:"k8s\u90e8\u7f72",level:2}],p={toc:c},u="wrapper";function b(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u524d\u7f6e\u6761\u4ef6"},"\u524d\u7f6e\u6761\u4ef6"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Bestchains\u5e73\u53f0\u4e2d\u5df2\u7ecf\u52a0\u5165\u4e86\u4e00\u4e2a",(0,a.kt)("strong",{parentName:"li"},"\u533a\u5757\u94fe\u7f51\u7edc-\u901a\u9053"))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u4e0b\u8f7d\u8be5\u7f51\u7edc\u901a\u9053\u7684\u8fde\u63a5\u6587\u4ef6 ",(0,a.kt)("strong",{parentName:"p"},"network.json"))),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"\u5df2\u7ecf\u90e8\u7f72",(0,a.kt)("strong",{parentName:"li"},"\u5b98\u65b9\u5408\u7ea6",(0,a.kt)("a",{parentName:"strong",href:"https://github.com/bestchains/bestchains-contracts/tree/main/examples/depository"},"Depository")))),(0,a.kt)("h2",{id:"\u672c\u5730\u90e8\u7f72"},"\u672c\u5730\u90e8\u7f72"),(0,a.kt)("p",null,"\u53c2\u8003: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/bestchains/bc-saas/blob/main/README.md"},"https://github.com/bestchains/bc-saas/blob/main/README.md")),(0,a.kt)("h2",{id:"k8s\u90e8\u7f72"},"K8s\u90e8\u7f72"),(0,a.kt)("p",null,"\u53c2\u8003: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/bestchains/installer#4-install-saas"},"https://github.com/bestchains/installer#4-install-saas"),"\n(\u5f85\u8865\u5145)"))}b.isMDXComponent=!0}}]);