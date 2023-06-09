"use strict";(self.webpackChunkbestchains=self.webpackChunkbestchains||[]).push([[58],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=u(n),k=a,d=c["".concat(p,".").concat(k)]||c[k]||m[k]||l;return n?r.createElement(d,i(i({ref:t},s),{},{components:n})):r.createElement(d,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},8118:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const l={sidebar_position:1,title:"\u4ea7\u54c1\u6982\u8ff0",sidebar_label:"\u4ea7\u54c1\u6982\u8ff0"},i=void 0,o={unversionedId:"Introduction/overview",id:"Introduction/overview",title:"\u4ea7\u54c1\u6982\u8ff0",description:"Bestchain \u662f\u5b8c\u5168\u5f00\u6e90\u3001\u5168\u6808\u5f0f\u7684Web3\u89e3\u51b3\u65b9\u6848\u3002",source:"@site/docs/Introduction/overview.md",sourceDirName:"Introduction",slug:"/Introduction/overview",permalink:"/website/docs/Introduction/overview",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"\u4ea7\u54c1\u6982\u8ff0",sidebar_label:"\u4ea7\u54c1\u6982\u8ff0"},sidebar:"docsSidebar",previous:{title:"\u4ea7\u54c1\u7b80\u4ecb",permalink:"/website/docs/category/\u4ea7\u54c1\u7b80\u4ecb"},next:{title:"\u5feb\u901f\u5f00\u59cb",permalink:"/website/docs/category/\u5feb\u901f\u5f00\u59cb"}},p={},u=[{value:"\u57fa\u7840\u8bbe\u65bd\u5c42",id:"\u57fa\u7840\u8bbe\u65bd\u5c42",level:3},{value:"\u533a\u5757\u94fe\u5e73\u53f0\u5c42",id:"\u533a\u5757\u94fe\u5e73\u53f0\u5c42",level:3},{value:"\u533a\u5757\u94fe\u7f51\u7edc\u5c42",id:"\u533a\u5757\u94fe\u7f51\u7edc\u5c42",level:3},{value:"Bestchains\u7f51\u7edc",id:"bestchains\u7f51\u7edc",level:4},{value:"\u89e3\u51b3\u65b9\u6848\u5c42",id:"\u89e3\u51b3\u65b9\u6848\u5c42",level:3},{value:"1. SaaS\u8f6f\u4ef6\u53ca\u670d\u52a1",id:"1-saas\u8f6f\u4ef6\u53ca\u670d\u52a1",level:4},{value:"2. Explorer\u5f00\u653e\u533a\u5757\u94fe\u6d4f\u89c8\u5668(<strong>Not Implemented Yet</strong>)",id:"2-explorer\u5f00\u653e\u533a\u5757\u94fe\u6d4f\u89c8\u5668not-implemented-yet",level:4},{value:"3. DIDaaS(Not Planned Yet)",id:"3-didaasnot-planned-yet",level:4},{value:"4. Contract Library",id:"4-contract-library",level:4},{value:"5. Tools",id:"5-tools",level:4}],s={toc:u},c="wrapper";function m(e){let{components:t,...l}=e;return(0,a.kt)(c,(0,r.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Bestchain \u662f\u5b8c\u5168\u5f00\u6e90\u3001\u5168\u6808\u5f0f\u7684Web3\u89e3\u51b3\u65b9\u6848\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u4ea7\u54c1\u77e9\u9635",src:n(5197).Z,width:"2379",height:"756"})),(0,a.kt)("h3",{id:"\u57fa\u7840\u8bbe\u65bd\u5c42"},"\u57fa\u7840\u8bbe\u65bd\u5c42"),(0,a.kt)("p",null,"\u901a\u8fc7",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kubebb"},"KubeBB"),"\u7ba1\u7406\u57fa\u7840\u8bbe\u65bd."),(0,a.kt)("h3",{id:"\u533a\u5757\u94fe\u5e73\u53f0\u5c42"},"\u533a\u5757\u94fe\u5e73\u53f0\u5c42"),(0,a.kt)("p",null,"\u63d0\u4f9b\u5e73\u53f0\u5316\u7684\u533a\u5757\u94fe\u7ba1\u7406\u80fd\u529b\uff0c\u5305\u62ec:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7ec4\u7ec7\u6cbb\u7406"),(0,a.kt)("li",{parentName:"ul"},"\u8054\u76df\u6cbb\u7406"),(0,a.kt)("li",{parentName:"ul"},"\u7f51\u7edc\u6cbb\u7406"),(0,a.kt)("li",{parentName:"ul"},"\u901a\u9053\u6cbb\u7406"),(0,a.kt)("li",{parentName:"ul"},"\u5408\u7ea6\u6cbb\u7406"),(0,a.kt)("li",{parentName:"ul"},"\u4e91\u539f\u751fDAO")),(0,a.kt)("p",null,"\u4ee5\u53ca\u76f8\u5e94\u7684\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u533a\u5757\u94fe\u6d4f\u89c8\u5668"),(0,a.kt)("li",{parentName:"ul"},"\u5b9e\u65f6\u76d1\u63a7")),(0,a.kt)("h3",{id:"\u533a\u5757\u94fe\u7f51\u7edc\u5c42"},"\u533a\u5757\u94fe\u7f51\u7edc\u5c42"),(0,a.kt)("p",null,"\u5e95\u5c42\u533a\u5757\u94fe\u7f51\u7edc\u662f\u6574\u4e2aWeb3\u89e3\u51b3\u65b9\u6848\u7684\u6838\u5fc3\uff0c\u76ee\u524d\u5e95\u5c42\u533a\u5757\u94fe\u6280\u672f\u5927\u81f4\u53ef\u5206\u4e3a\u4e24\u7c7b\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8054\u76df\u94fe: \u94fe\u7684\u4f7f\u7528\u9650\u5236\u5728\u8054\u76df\u5185\u90e8\uff0c\u5c5e\u4e8e\u534a\u53bb\u4e2d\u5fc3\u5316\u7684\u533a\u5757\u94fe\u7f51\u7edc"),(0,a.kt)("li",{parentName:"ul"},"\u516c\u94fe: \u94fe\u7684\u4f7f\u7528\u5b8c\u5168\u5f00\u653e\uff0c\u5c5e\u4e8e\u5b8c\u5168\u53bb\u4e2d\u5fc3\u5316\u7684\u533a\u5757\u94fe\u7f51\u7edc")),(0,a.kt)("p",null,"\u4ece\u7528\u6237\u4f7f\u7528\u7fa4\u4f53\u7684\u89d2\u5ea6\uff0c\u6211\u4eec\u9996\u5148\u63a5\u5165\u4e86\u8d85\u7ea7\u8d26\u672c\u4e0b\u7684",(0,a.kt)("a",{parentName:"p",href:"https://github.com/hyperledger/fabric"},"Fabric"),"\u5e95\u5c42\u533a\u5757\u94fe,\u63d0\u4f9b\u5b8c\u6574\u7684\u8054\u76df\u94fe\u7ba1\u7406\u3001\u5e94\u7528\u7814\u53d1\u3001\u7f51\u7edc\u76d1\u63a7\u7b49\u5b8c\u6574\u7684\u89e3\u51b3\u65b9\u6848\u3002"),(0,a.kt)("h4",{id:"bestchains\u7f51\u7edc"},"Bestchains\u7f51\u7edc"),(0,a.kt)("p",null,"\u6211\u4eec\u540c\u6837\u8ba4\u4e3a\uff0c",(0,a.kt)("strong",{parentName:"p"},"\u516c\u94fe\u6280\u672f"),"\u540c\u6837\u7684\u4e0d\u53ef\u6216\u7f3a\uff0c\u5c24\u5176\u662f\u5f53\u8054\u76df\u94fe\u7f51\u7edc\u53d1\u5c55\u5230\u4e00\u5b9a\u7a0b\u5ea6\uff0c\u4e00\u5b9a\u4f1a\u5e26\u6765",(0,a.kt)("strong",{parentName:"p"},"\u7528\u6237\u7fa4\u4f53\u53d7\u9650\u3001\u6570\u636e\u5b64\u5c9b\u3001\u573a\u666f\u53d7\u9650"),"\u7b49\u95ee\u9898\u3002\u8fd9\u4e2a\u65f6\u5019\uff0c\u6211\u4eec\u53ef\u4ee5\u501f\u52a9",(0,a.kt)("strong",{parentName:"p"},"\u516c\u94fe\u6280\u672f"),"\uff0c\u4ece\u800c:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6784\u5efa\u66f4\u52a0\u5f00\u653e\u3001\u5065\u5168\u7684\u751f\u6001"),(0,a.kt)("li",{parentName:"ul"},"\u4e3a\u8054\u76df\u94fe\u548c\u5176\u4ed6\u516c\u94fe\u63d0\u4f9b\u4e00\u4e2a\u901a\u7528\u7684",(0,a.kt)("strong",{parentName:"li"},"\u4e2d\u7ee7\u94fe\u8de8\u94fe"),"\u65b9\u6848")),(0,a.kt)("h3",{id:"\u89e3\u51b3\u65b9\u6848\u5c42"},"\u89e3\u51b3\u65b9\u6848\u5c42"),(0,a.kt)("p",null,"\u56f4\u7ed5\u533a\u5757\u94fe\u7f51\u7edc\uff0c\u6211\u4eec\u51c6\u5907\u4ece\u4ee5\u4e0b\u51e0\u4e2a\u65b9\u5411\u5165\u624b\uff1a"),(0,a.kt)("h4",{id:"1-saas\u8f6f\u4ef6\u53ca\u670d\u52a1"},"1. SaaS\u8f6f\u4ef6\u53ca\u670d\u52a1"),(0,a.kt)("p",null,"\u57fa\u4e8eBESTCHAIN\u5e73\u53f0\u80fd\u529b\uff0c\u8d4b\u80fd\u4f20\u7edf\u3001\u65b0\u5174\u7684\u5e94\u7528\u573a\u666f\u3002\u76ee\u524d\uff0c\u6211\u4eec\u8003\u8651\u4ece\u4e24\u4e2a\u65b9\u5411\u5165\u624b:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/bestchains/bc-saas/tree/main/cmd/depository"},"Depository as a Service(\u5b58\u8bc1\u5373\u670d\u52a1)"))),(0,a.kt)("p",null,"\u4f18\u5316\u901a\u7528\u7684\u53bb\u4e2d\u5fc3\u5316\u6570\u5b57\u5b58\u8bc1\u670d\u52a1\uff0c\u5f3a\u5316\u6570\u5b57\u5b58\u8bc1\u7684\u9632\u7be1\u6539\u3001\u53ef\u8ffd\u6eaf\u3001\u6570\u636e\u6765\u6e90\u53ef\u4fe1\u7b49\u80fd\u529b"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"NFT as a Service(\u6570\u85cf\u5373\u670d\u52a1)(",(0,a.kt)("strong",{parentName:"li"},"Not Implemented Yet"),")")),(0,a.kt)("p",null,"\u63d0\u4f9b\u7b80\u6377\u3001\u5168\u9762\u7684\u6570\u5b57\u85cf\u54c1\u670d\u52a1\uff0c\u964d\u4f4e\u666e\u901a\u5546\u6237\u63a5\u5165\u6570\u5b57\u85cf\u54c1\u95e8\u69db"),(0,a.kt)("h4",{id:"2-explorer\u5f00\u653e\u533a\u5757\u94fe\u6d4f\u89c8\u5668not-implemented-yet"},"2. Explorer\u5f00\u653e\u533a\u5757\u94fe\u6d4f\u89c8\u5668(",(0,a.kt)("strong",{parentName:"h4"},"Not Implemented Yet"),")"),(0,a.kt)("p",null,"\u4ee5\u53ef\u89c6\u5316\u7684\u65b9\u5f0f\u5f00\u653e\u533a\u5757\u94fe\u7f51\u7edc\u6570\u636e\uff0c\u540c\u65f6\u652f\u6301BESTCHAINS\u5e73\u53f0\u5185\u90e8\u548c\u5e73\u53f0\u5916\u90e8\u7684\u533a\u5757\u94fe\u7f51\u7edc\uff0c\u5e76\u4e14\u652f\u6301\u591a\u79cd\u5f02\u6784\u94fe"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fabric"),(0,a.kt)("li",{parentName:"ul"},"Cosmos\u751f\u6001\u94fe"),(0,a.kt)("li",{parentName:"ul"},"Ethereum\u751f\u6001\u94fe")),(0,a.kt)("h4",{id:"3-didaasnot-planned-yet"},"3. DIDaaS(Not Planned Yet)"),(0,a.kt)("p",null,"\u57fa\u4e8eBESTCHAIN\u5e73\u53f0\u80fd\u529b\uff0c\u5b9e\u73b0\u4e00\u5957DID(\u53bb\u4e2d\u5fc3\u5316\u6570\u5b57\u8eab\u4efd)\u89e3\u51b3\u65b9\u6848\uff0c\u5e76\u4ee5DIDaaS\u7684\u5f62\u5f0f\u63d0\u4f9b\u53bb\u4e2d\u5fc3\u5316\u6570\u5b57\u8eab\u4efd\u7684\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8eab\u4efd\u7ba1\u7406"),(0,a.kt)("li",{parentName:"ul"},"\u8eab\u4efd\u8ba4\u8bc1"),(0,a.kt)("li",{parentName:"ul"},"\u6388\u6743"),(0,a.kt)("li",{parentName:"ul"},"\u8bbf\u95ee\u63a7\u5236")),(0,a.kt)("p",null,"\u5e76\u5e7f\u6cdb\u5e94\u7528\u5230\u6211\u4eec\u5176\u4ed6\u7684SaaS\u670d\u52a1\u4e2d\uff0c\u751a\u81f3\u8003\u8651\u4e0e\u4e91\u539f\u751f\u5e73\u53f0\u7ed3\u5408\uff0c\u4f18\u5316\u4e91\u539f\u751f\u5e73\u53f0\u7684\u7ba1\u7406\u673a\u5236\uff0c\u4f7f\u5176\u6743\u9650\u7ba1\u7406\u4e0a\u66f4\u52a0\u516c\u5e73\u900f\u660e\u3002"),(0,a.kt)("h4",{id:"4-contract-library"},"4. Contract Library"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/bestchains/bestchains-contracts"},"bestchains-contract"),":\u63d0\u4f9b\u5408\u7ea6\u5f00\u53d1\u4ed3\u5e93\uff0c\u76ee\u524d\u4e3b\u8981\u652f\u6301Fabric Chaincode")),(0,a.kt)("h4",{id:"5-tools"},"5. Tools"),(0,a.kt)("p",null,"\u76ee\u524d\uff0c\u4e3b\u8981\u8003\u8651\u63d0\u4f9b:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/bestchains/installer"},"installer"),": \u63d0\u4f9b\u5e73\u53f0\u7ec4\u4ef6\u5feb\u901f\u90e8\u7f72"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/bestchains/bc-cli"},"CLI"),": \u63d0\u4f9b\u9002\u5408\u5f00\u53d1\u4eba\u5458\u7684\u547d\u4ee4\u884c\u5de5\u5177")))}m.isMDXComponent=!0},5197:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/bestchains_stack-5088b46785a0450cce1948a2506695f1.png"}}]);