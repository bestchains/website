"use strict";(self.webpackChunkbestchains=self.webpackChunkbestchains||[]).push([[848],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),k=a,m=u["".concat(s,".").concat(k)]||u[k]||d[k]||i;return r?n.createElement(m,o(o({ref:t},p),{},{components:r})):n.createElement(m,o({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=k;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},3728:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const i={sidebar_position:3,title:"\u667a\u80fd\u5408\u7ea6\u7ba1\u7406",sidebar_label:"\u667a\u80fd\u5408\u7ea6\u7ba1\u7406"},o=void 0,l={unversionedId:"UserGuide/NetworkGov/contracts",id:"UserGuide/NetworkGov/contracts",title:"\u667a\u80fd\u5408\u7ea6\u7ba1\u7406",description:"\u667a\u80fd\u5408\u7ea6\u7ba1\u7406\u4f4d\u4e8e\u7f51\u7edc\u8be6\u60c5\u5185\u90e8\uff0c\u5c5e\u4e8e\u94fe\u7ba1\u7406\u7684\u4e00\u90e8\u5206\u3002\u6b64\u5904\u7684\u667a\u80fd\u5408\u7ea6\u4e3a\u5408\u7ea6\u4ee3\u7801\u7ba1\u7406\u3002Bestchain\u5e73\u53f0\u96c6\u6210\u4e86fabric-builder-k8s\u3002\u7528\u6237\u4e0a\u4f20\u7684\u5408\u7ea6\u4ee3\u7801\u5c06\u901a\u8fc7Tekton CI\u81ea\u52a8\u6784\u5efa\u6210\u955c\u50cf\u3002",source:"@site/docs/UserGuide/NetworkGov/contracts.md",sourceDirName:"UserGuide/NetworkGov",slug:"/UserGuide/NetworkGov/contracts",permalink:"/website/docs/UserGuide/NetworkGov/contracts",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"\u667a\u80fd\u5408\u7ea6\u7ba1\u7406",sidebar_label:"\u667a\u80fd\u5408\u7ea6\u7ba1\u7406"},sidebar:"docsSidebar",previous:{title:"\u901a\u9053\u7ba1\u7406",permalink:"/website/docs/UserGuide/NetworkGov/channels"},next:{title:"\u5ba1\u8ba1\u7b56\u7565\u7ba1\u7406",permalink:"/website/docs/UserGuide/NetworkGov/endorsepolicy"}},s={},c=[{value:"\u67e5\u770b\u5408\u7ea6\u5217\u8868",id:"\u67e5\u770b\u5408\u7ea6\u5217\u8868",level:2},{value:"\u65b0\u5efa\u5408\u7ea6",id:"\u65b0\u5efa\u5408\u7ea6",level:2},{value:"\u90e8\u7f72\u5408\u7ea6",id:"\u90e8\u7f72\u5408\u7ea6",level:2},{value:"\u5347\u7ea7\u5408\u7ea6",id:"\u5347\u7ea7\u5408\u7ea6",level:2},{value:"\u5220\u9664\u5408\u7ea6",id:"\u5220\u9664\u5408\u7ea6",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...i}=e;return(0,a.kt)(u,(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u667a\u80fd\u5408\u7ea6\u7ba1\u7406\u4f4d\u4e8e\u7f51\u7edc\u8be6\u60c5\u5185\u90e8\uff0c\u5c5e\u4e8e\u94fe\u7ba1\u7406\u7684\u4e00\u90e8\u5206\u3002\u6b64\u5904\u7684\u667a\u80fd\u5408\u7ea6\u4e3a\u5408\u7ea6\u4ee3\u7801\u7ba1\u7406\u3002Bestchain\u5e73\u53f0\u96c6\u6210\u4e86",(0,a.kt)("a",{parentName:"p",href:"https://github.com/bestchains/fabric-builder-k8s"},"fabric-builder-k8s"),"\u3002\u7528\u6237\u4e0a\u4f20\u7684\u5408\u7ea6\u4ee3\u7801\u5c06\u901a\u8fc7",(0,a.kt)("a",{parentName:"p",href:"https://tekton.dev/"},"Tekton CI"),"\u81ea\u52a8\u6784\u5efa\u6210\u955c\u50cf\u3002")),(0,a.kt)("h2",{id:"\u67e5\u770b\u5408\u7ea6\u5217\u8868"},"\u67e5\u770b\u5408\u7ea6\u5217\u8868"),(0,a.kt)("p",null,"\u70b9\u51fb\u7f51\u7edc\u7684",(0,a.kt)("strong",{parentName:"p"},"\u667a\u80fd\u5408\u7ea6"),"\uff0c\u67e5\u770b\u7f51\u7edc\u4e0b\u7684\u5f53\u524d\u5408\u7ea6\u5217\u8868\u3002\u5982\u4e0b\u56fe\u6240\u793a\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"userguide_contracts",src:r(1082).Z,width:"2880",height:"1526"})),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5408\u7ea6\u72b6\u6001\u5305\u542b\u4e24\u79cd:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u6784\u5efa\u4e2d"),":\u4ee3\u8868\u5408\u7ea6\u4ee3\u7801\u6b63\u5728\u6784\u5efa\u955c\u50cf"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u6b63\u5e38"),":\u4ee3\u8868\u5408\u7ea6\u4ee3\u7801\u6784\u5efa\u955c\u50cf\u6210\u529f")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"\u70b9\u51fb\u7248\u672c\u53f7\uff0c\u53ef\u67e5\u770b\u5408\u7ea6\u76ee\u524d\u7684\u7248\u672c\u5217\u8868")),(0,a.kt)("h2",{id:"\u65b0\u5efa\u5408\u7ea6"},"\u65b0\u5efa\u5408\u7ea6"),(0,a.kt)("p",null,"\u70b9\u51fb",(0,a.kt)("strong",{parentName:"p"},"\u65b0\u5efa\u5408\u7ea6"),"\uff0c\u8fdb\u5165\u5408\u7ea6\u521b\u5efa\u9875\u9762,\u5982\u4e0b\u56fe\u6240\u793a\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"userguide_contracts",src:r(4131).Z,width:"2880",height:"1516"})),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5408\u7ea6\u6587\u4ef6\u652f\u6301\u4e24\u79cd\u7c7b\u578b:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6587\u4ef6\u5939"),(0,a.kt)("li",{parentName:"ul"},"\u538b\u7f29\u5305(\u76ee\u524d\u4ec5\u652f\u6301zip)")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"\u5408\u7ea6\u8bed\u8a00\u76ee\u524d\u4ec5\u652f\u6301",(0,a.kt)("strong",{parentName:"li"},"Go"))),(0,a.kt)("h2",{id:"\u90e8\u7f72\u5408\u7ea6"},"\u90e8\u7f72\u5408\u7ea6"),(0,a.kt)("p",null,"\u5408\u7ea6\u6784\u5efa\u5b8c\u6210\u540e\uff0c\u53ef\u90e8\u7f72\u5230\u901a\u9053\u4e2d\u3002\u70b9\u51fb",(0,a.kt)("strong",{parentName:"p"},"\u90e8\u7f72\u5408\u7ea6"),"\uff0c\u8fdb\u5165\u5408\u7ea6\u90e8\u7f72\u9875\u9762\u3002\u5982\u4e0b\u56fe\u6240\u793a\uff1a"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u9009\u62e9\u4e0d\u540c\u7684\u7248\u672c\uff0c\u90e8\u7f72\u5230\u540c\u4e00\u4e2a\u901a\u9053\uff0c\u5373\u4e3a\u5b9e\u73b0\u5408\u7ea6\u5728",(0,a.kt)("strong",{parentName:"p"},"\u901a\u9053\u5185\u7684\u5347\u7ea7"))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"userguide_contracts",src:r(773).Z,width:"2880",height:"1524"})),(0,a.kt)("p",null,"\u90e8\u7f72\u8fc7\u7a0b\u4e2d\uff0c\u9700\u8981\u586b\u5199:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u90e8\u7f72\u7684\u76ee\u6807\u901a\u9053"),(0,a.kt)("li",{parentName:"ul"},"\u90e8\u7f72\u7684\u5408\u7ea6\u80cc\u4e66\u7b56\u7565"),(0,a.kt)("li",{parentName:"ul"},"\u90e8\u7f72\u7684\u901a\u9053\u8282\u70b9(\u591a\u9009)")),(0,a.kt)("h2",{id:"\u5347\u7ea7\u5408\u7ea6"},"\u5347\u7ea7\u5408\u7ea6"),(0,a.kt)("p",null,"\u5f00\u53d1\u8005\u5f00\u53d1\u65b0\u7248\u672c\u7684\u5408\u7ea6\u540e\uff0c\u53ef\u901a\u8fc7\u6b64\u529f\u80fd\u4e0a\u4f20\u65b0\u7684\u7248\u672c,\u5982\u4e0b\u56fe\u6240\u793a\uff1a"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u6b64\u5904\u7684\u5347\u7ea7\u5408\u7ea6\u4ec5\u4e3a\u5408\u7ea6\u4ee3\u7801\u4ed3\u5e93\u91cc\u7684\u5408\u7ea6\u7248\u672c\u5347\u7ea7\uff0c\u4e0d\u4f1a\u89e6\u53d1\u5408\u7ea6\u5728\u901a\u9053\u5185\u7684\u5347\u7ea7")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"userguide_contracts",src:r(6112).Z,width:"2880",height:"1522"})),(0,a.kt)("h2",{id:"\u5220\u9664\u5408\u7ea6"},"\u5220\u9664\u5408\u7ea6"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u5408\u7ea6\u5220\u9664\u4e3a\u9488\u5bf9\u5408\u7ea6\u67d0\u4e2a\u7248\u672c\u7684\u5220\u9664\u3002\u5982\u679c\u8be5\u7248\u672c\u7684\u5408\u7ea6\u5df2\u7ecf\u90e8\u7f72\u5230\u901a\u9053\u4e2d\uff0c\u5c06\u65e0\u6cd5\u5220\u9664")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"userguide_contracts",src:r(3040).Z,width:"2872",height:"1514"})))}d.isMDXComponent=!0},1082:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/userguide_contracts-aad48f3653e9d98c04bf0979ad4717b4.png"},3040:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/userguide_delete_contract-4137f0bf62c673a42e4f511e9b8a8837.png"},773:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/userguide_deploy_contract-951b5f71d4010ce1b22e55c7860254d7.png"},4131:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/userguide_new_contract-4b0ce2fbc2779ccb4962d4f2273949cf.png"},6112:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/userguide_upgrade_contract-4cb5ec97166a43d584efd0c92172e63b.png"}}]);