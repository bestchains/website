"use strict";(self.webpackChunkbestchains=self.webpackChunkbestchains||[]).push([[573],{3905:(e,a,t)=>{t.d(a,{Zo:()=>s,kt:()=>f});var n=t(7294);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function r(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=n.createContext({}),p=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):c(c({},a),e)),t},s=function(e){var a=p(e.components);return n.createElement(o.Provider,{value:a},e.children)},d="mdxType",b={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,i=e.mdxType,l=e.originalType,o=e.parentName,s=r(e,["components","mdxType","originalType","parentName"]),d=p(t),m=i,f=d["".concat(o,".").concat(m)]||d[m]||b[m]||l;return t?n.createElement(f,c(c({ref:a},s),{},{components:t})):n.createElement(f,c({ref:a},s))}));function f(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var l=t.length,c=new Array(l);c[0]=m;var r={};for(var o in a)hasOwnProperty.call(a,o)&&(r[o]=a[o]);r.originalType=e,r[d]="string"==typeof e?e:i,c[1]=r;for(var p=2;p<l;p++)c[p]=t[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1620:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>c,default:()=>b,frontMatter:()=>l,metadata:()=>r,toc:()=>p});var n=t(7462),i=(t(7294),t(3905));const l={sidebar_position:1,title:"CLI",sidebar_label:"CLI"},c=void 0,r={unversionedId:"tools/cli",id:"tools/cli",title:"CLI",description:"bc-cli \u53ef\u4ee5\u7528\u6765\u7ba1\u7406\u8d26\u6237\u4fe1\u606f\uff0c\u7ba1\u7406\u5b58\u8bc1\uff0c\u4ee5\u53ca\u67e5\u770b\u6c72\u53d6\u4e2d\u6784\u6210\u533a\u5757\u94fe\u7684\u591a\u79cd\u8d44\u6e90\uff0c\u5305\u62ec\u4e0d\u9650\u4e8e\u8054\u76df\uff0c\u7f51\u7edc\u7b49\u3002",source:"@site/docs/tools/cli.md",sourceDirName:"tools",slug:"/tools/cli",permalink:"/website/docs/tools/cli",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"CLI",sidebar_label:"CLI"},sidebar:"docsSidebar",previous:{title:"\u5de5\u5177",permalink:"/website/docs/category/\u5de5\u5177"},next:{title:"\u5408\u7ea6\u5e93",permalink:"/website/docs/tools/contracts_lib"}},o={},p=[{value:"\u5feb\u901f\u5f00\u59cb",id:"\u5feb\u901f\u5f00\u59cb",level:2},{value:"\u8bbe\u7f6e\u914d\u7f6e\u6587\u4ef6",id:"\u8bbe\u7f6e\u914d\u7f6e\u6587\u4ef6",level:3},{value:"\u8d26\u6237\u7ba1\u7406",id:"\u8d26\u6237\u7ba1\u7406",level:2},{value:"\u6dfb\u52a0\u8d26\u6237",id:"\u6dfb\u52a0\u8d26\u6237",level:3},{value:"\u67e5\u770b\u8d26\u6237\u4fe1\u606f",id:"\u67e5\u770b\u8d26\u6237\u4fe1\u606f",level:3},{value:"\u5220\u9664\u8d26\u6237\u4fe1\u606f",id:"\u5220\u9664\u8d26\u6237\u4fe1\u606f",level:3},{value:"\u5b58\u8bc1\u7ba1\u7406",id:"\u5b58\u8bc1\u7ba1\u7406",level:2},{value:"\u521b\u5efa\u5b58\u8bc1",id:"\u521b\u5efa\u5b58\u8bc1",level:3},{value:"\u5b58\u8bc1\u5217\u8868",id:"\u5b58\u8bc1\u5217\u8868",level:3},{value:"Bestchains \u8d44\u6e90\u7ba1\u7406",id:"bestchains-\u8d44\u6e90\u7ba1\u7406",level:2},{value:"\u83b7\u53d6\u7ec4\u7ec7\u5217\u8868",id:"\u83b7\u53d6\u7ec4\u7ec7\u5217\u8868",level:3}],s={toc:p},d="wrapper";function b(e){let{components:a,...l}=e;return(0,i.kt)(d,(0,n.Z)({},s,l,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"bc-cli")," \u53ef\u4ee5\u7528\u6765\u7ba1\u7406\u8d26\u6237\u4fe1\u606f\uff0c\u7ba1\u7406\u5b58\u8bc1\uff0c\u4ee5\u53ca\u67e5\u770b\u6c72\u53d6\u4e2d\u6784\u6210\u533a\u5757\u94fe\u7684\u591a\u79cd\u8d44\u6e90\uff0c\u5305\u62ec\u4e0d\u9650\u4e8e\u8054\u76df\uff0c\u7f51\u7edc\u7b49\u3002\n\u8be5\u5de5\u5177\u5305\u542b ",(0,i.kt)("inlineCode",{parentName:"p"},"create"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"delete"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"get")," \u4e09\u4e2a\u4e3b\u8981\u547d\u4ee4, \u7528\u6765\u64cd\u4f5c ",(0,i.kt)("inlineCode",{parentName:"p"},"account"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"depository")," \u7b49\u8d44\u6e90\u3002"),(0,i.kt)("h2",{id:"\u5feb\u901f\u5f00\u59cb"},"\u5feb\u901f\u5f00\u59cb"),(0,i.kt)("h3",{id:"\u8bbe\u7f6e\u914d\u7f6e\u6587\u4ef6"},"\u8bbe\u7f6e\u914d\u7f6e\u6587\u4ef6"),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"CLI\u4f7f\u7528\u65f6\u53ef\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"--config")," \u6307\u5b9a\u914d\u7f6e\u6587\u4ef6\uff0c\u9ed8\u8ba4\u4f4d\u7f6e\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"~/.bestchains/config.yaml"))),(0,i.kt)("p",null,"\u914d\u7f6e\u6587\u4ef6\u5982\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'auth:\n    enable: true\n    expiry: 1683440692\n    idtoken: eyJhbGciOiJSUzI1NiIsImtpZCI6IjMzYjA4NGIzZmJlZDJiODI2MDg0MDIyOTYwZjJmODhmY2E1NjBkODcifQ.eyJpc3MiOiJodHRwczovL3BvcnRhbC4xNzIuMjIuOTYuMjA5Lm5pcC5pby9vaWRjIiwic3ViIjoiQ2doaWFuZHpkMkZ1WnhJR2F6aHpZM0prIiwiYXVkIjoiYmMtY2xpIiwiZXhwIjoxNjgzNDQwNDc0LCJpYXQiOjE2ODMzNTQwNzQsImF0X2hhc2giOiJqbFFldnVMcGc1cWs1aGFuR2lBXzdRIiwiY19oYXNoIjoiZm1PQ04yb3FGVk96a0c2cU1nTGViQSIsImVtYWlsIjoiYWRtaW5AdGVueGNsb3VkLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJncm91cHMiOlsiaWFtLnRlbnhjbG91ZC5jb20iLCJvYnNldmFiaWxpdHkiLCJyZXNvdXJjZS1yZWFkZXIiLCJiZXN0Y2hhaW5zIl0sIm5hbWUiOiJiandzd2FuZyIsInByZWZlcnJlZF91c2VybmFtZSI6ImJqd3N3YW5nIiwicGhvbmUiOiIiLCJ1c2VyaWQiOiJiandzd2FuZyJ9.eY-7kGcsMAJxmZaG2t_Q1ZtaK6PBuvtxodueppkFCpbJ2RDOxhP9zdmm1pE23eClu0oWxgELBsAkVfgVqrs2gSkTjvM1CWOd-p-cWX464hBYgYfnlrFo0bKV3D4v-kdHvrpS-sa02In0N0ZDpQzK2GcJWRzJkdsf3MPzOxoC-M3-B8TK3Egpl1JOIgAAvDaFx50OwGcBxXeHZewe-NXSUiOo7YowBRD7dPyF841Le2gN12O3lUpW3fQ4iEVRo7rL22J49r3t66B1S3qTVyPKWYwrs78kAJJ7a13LA_HkjMGZ6cc70Skr8C4h8wzeBx-TZvn658XUfpU04yfh86mqsA\n    issuerurl: https://portal.172.22.96.209.nip.io/oidc\n    refreshtoken: ChlkZnVyZXN4am5jMzY3aHd3YXY3aDNrZ3BnEhl0aXM0amI1c2c2ZnB1bm83a2g1Mnl1cmt4\n    clientid: bc-cli\n    clientsecret: bc-cli-cli\nsaas:\n    depository:\n        server: https://bc-saas.172.22.96.209.nip.io\ncluster:\n  server: https://172.22.96.146:9443\n  certificateauthority: ""\n  disablecompression: false\n  insecureskiptlsverify: false\n  locationoforigin: ""\n  proxyurl: ""\n')),(0,i.kt)("p",null,"\u914d\u7f6e\u8be6\u89e3:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"auth \u4e3a\u8ba4\u8bc1\u76f8\u5173\u4fe1\u606f",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"enable\uff1a\u662f\u5426\u542f\u7528\u8ba4\u8bc1\uff0c\u5e03\u5c14\u503c\uff0c\u5728\u670d\u52a1\u5668\u7aef\u542f\u7528\u8ba4\u8bc1\u65f6\uff0cCLI \u4e0d\u542f\u7528\u8ba4\u8bc1\uff0c\u8bbf\u95ee\u8bf7\u6c42\u5c06\u4f1a\u5931\u8d25\uff0c\u800c\u670d\u52a1\u5668\u7aef\u6ca1\u6709\u542f\u7528\u8ba4\u8bc1\u65f6\uff0cCLI \u542f\u7528\u8ba4\u8bc1\u65f6\uff0c\u8ba4\u8bc1\u53c2\u6570\u5c06\u88ab\u670d\u52a1\u5668\u7aef\u5ffd\u7565\u3002"),(0,i.kt)("li",{parentName:"ol"},"expiry\uff1aIDToken \u7684\u8fc7\u671f\u65f6\u95f4 unix \u65f6\u95f4\u6233\uff0c\u4e00\u822c\u4e0d\u9700\u8981\u624b\u52a8\u914d\u7f6e\uff0c\u8ba4\u8bc1\u5b8c\u6210\u540e\u4f1a\u81ea\u52a8\u66f4\u65b0\u3002"),(0,i.kt)("li",{parentName:"ol"},"idtoken\uff1a\u8ba4\u8bc1\u7684 IDToken \uff0c\u4e00\u822c\u4e0d\u9700\u8981\u624b\u52a8\u914d\u7f6e\uff0c\u8ba4\u8bc1\u5b8c\u6210\u540e\u4f1a\u81ea\u52a8\u66f4\u65b0\u3002"),(0,i.kt)("li",{parentName:"ol"},"issuerurl\uff1a\u8ba4\u8bc1\u7684 OIDC \u670d\u52a1\u5668\u5730\u5740\uff0c\u4e5f\u53ef\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"li"},"--issuer-url")," \u53c2\u6570\u914d\u7f6e\u3002"),(0,i.kt)("li",{parentName:"ol"},"refreshtoken\uff1a\u8ba4\u8bc1\u7684 RefreshToken\uff0c\u4e00\u822c\u4e0d\u9700\u8981\u624b\u52a8\u914d\u7f6e\uff0c\u8ba4\u8bc1\u5b8c\u6210\u540e\u4f1a\u81ea\u52a8\u66f4\u65b0\u3002"),(0,i.kt)("li",{parentName:"ol"},"clientid: (\u4e0d\u9700\u8981\u66f4\u6539)\u7528\u4e8eOIDC Server\u8bc6\u522bCLI\u8eab\u4efd\uff0c\u9ed8\u8ba4\u4e3a",(0,i.kt)("inlineCode",{parentName:"li"},"bc-cli")),(0,i.kt)("li",{parentName:"ol"},"clientsecret: (\u4e0d\u9700\u8981\u66f4\u6539)\u7528\u4e8eOIDC Server\u8bc6\u522bCLI\u8eab\u4efd\uff0c\u9ed8\u8ba4\u4e3a",(0,i.kt)("inlineCode",{parentName:"li"},"bc-cli-cli")))),(0,i.kt)("li",{parentName:"ul"},"saas \u4e3a saas \u7ec4\u4ef6\u76f8\u5173\u914d\u7f6e",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"depository \u4e3a\u5b58\u8bc1\u76f8\u5173\u914d\u7f6e",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"server \u4e3a\u5b58\u8bc1\u670d\u52a1\u5668\u914d\u7f6e")))))),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"auth"),"\u8ba4\u8bc1\u4fe1\u606f\u83b7\u53d6\u6b65\u9aa4\u5982\u4e0b:"),(0,i.kt)("ol",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ol"},"\u8bbe\u7f6e\u914d\u7f6e\u6587\u4ef6\u4e2d ",(0,i.kt)("inlineCode",{parentName:"li"},"auth.enable")," \u7684\u503c\u4e3a ",(0,i.kt)("inlineCode",{parentName:"li"},"true")," \u6216\u8005\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"--enable-auth")," \u53c2\u6570\u53ef\u4ee5\u5f00\u542f OIDC \u8ba4\u8bc1\u6a21\u5f0f"),(0,i.kt)("li",{parentName:"ol"},"\u901a\u8fc7\u914d\u7f6e\u914d\u7f6e\u6587\u4ef6\u4e2d ",(0,i.kt)("inlineCode",{parentName:"li"},"auth.issuerurl")," \u7684\u503c\u6216\u8005\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"--issuer-url")," \u53c2\u6570\u6765\u6307\u5b9a\u8ba4\u8bc1 OIDC \u670d\u52a1\u5668\u7684\u5730\u5740"),(0,i.kt)("li",{parentName:"ol"},"\u8fd0\u884c\u4efb\u4f55\u6709\u6548\u7684",(0,i.kt)("inlineCode",{parentName:"li"},"CLI"),"\u547d\u4ee4,\u89e6\u53d1\u83b7\u53d6\u8ba4\u8bc1\u4fe1\u606f\u5904\u7406\u3002")),(0,i.kt)("p",{parentName:"admonition"},"\u5904\u7406\u6d41\u7a0b\u5982\u4e0b:"),(0,i.kt)("ol",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ol"},"\u8bfb\u53d6\u914d\u7f6e\u6587\u4ef6\u4e2d\u7684\u8ba4\u8bc1\u4fe1\u606f\uff0c\u9a8c\u8bc1\u8ba4\u8bc1\u4fe1\u606f\u662f\u5426\u6709\u6548\u3002\u5982\u679c\u8ba4\u8bc1\u8fc7\u671f\uff0c\u5c06\u4f1a\u9996\u5148\u5c1d\u8bd5\u540e\u53f0\u81ea\u52a8\u5237\u65b0IDToken\u8ba4\u8bc1\u4fe1\u606f"),(0,i.kt)("li",{parentName:"ol"},"\u5982\u679c\u540e\u53f0\u5237\u65b0\u5931\u6548\u65f6\u5c06\u81ea\u52a8\u8df3\u8f6c\u5230OIDC\u8ba4\u8bc1\u9875\u9762\uff0c\u8ba4\u8bc1\u6210\u529f\u540e\uff0c\u81ea\u52a8\u66f4\u65b0\u914d\u7f6e\u6587\u4ef6\uff0c\u586b\u5145",(0,i.kt)("inlineCode",{parentName:"li"},"auth"),"\u4fe1\u606f\u3002\u5982\u4e0b\u56fe\u6240\u793a:")),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("img",{alt:"\u8ba4\u8bc1\u5c55\u793a",src:t(760).Z,width:"1920",height:"1080"}))),(0,i.kt)("h2",{id:"\u8d26\u6237\u7ba1\u7406"},"\u8d26\u6237\u7ba1\u7406"),(0,i.kt)("h3",{id:"\u6dfb\u52a0\u8d26\u6237"},"\u6dfb\u52a0\u8d26\u6237"),(0,i.kt)("p",null,"\u901a\u8fc7",(0,i.kt)("inlineCode",{parentName:"p"},"-h"),"\u67e5\u770b\u547d\u4ee4\u5b9a\u4e49\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"--pk")," \u7528\u6765\u6307\u5b9a\u7528\u6237\u81ea\u5df1\u63d0\u4f9b\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"ecdsa"),"\u79c1\u94a5\uff0c\u5982\u679c\u672a\u4f7f\u7528\u8be5\u53c2\u6570\uff0c\u4f1a\u81ea\u52a8\u521b\u5efa\u4e00\u4e2a\u79c1\u94a5\u3002 ",(0,i.kt)("inlineCode",{parentName:"p"},"--wallet")," \u7528\u6765\u6307\u5b9a\u751f\u6210\u7684\u7528\u6237\u8d26\u6237\u5730\u5740\u4ee5\u53ca\u79c1\u94a5\u5b58\u50a8\u4f4d\u7f6e\uff0c\u9ed8\u8ba4\u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"$HOME/.bestchains/wallet"),"\u3002\u76ee\u524d\u6570\u636e\u672a\u505a\u52a0\u5bc6\u5904\u7406\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"\u279c  bc-cli git:(main) \u2717 ./bc-cli create account -h\nCreate an account\n\nUsage:\n  bc-cli create account [flags]\n\nFlags:\n  -h, --help            help for account\n      --pk string       the user's own private key, which is automatically generated if not provided\n      --wallet string   wallet path\n")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u81ea\u52a8\u751f\u6210\u79c1\u94a5\uff0c\u5c06\u7528\u6237\u4fe1\u606f\u5b58\u50a8\u5230\u9ed8\u8ba4\u4f4d\u7f6e"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"\u279c  bc-cli git:(main) \u2717 ./bc-cli create account\naccount/0xc3c45ce32438c2d7fb54cee74ff27505bf0bafc8 created\n\u279c  bc-cli git:(main) \u2717 ls $HOME/.bestchains/wallet \n0xc3c45ce32438c2d7fb54cee74ff27505bf0bafc8\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u81ea\u52a8\u751f\u6210\u79c1\u94a5\uff0c\u5e76\u4e14\u5c06\u8d26\u6237\u4fe1\u606f\u5b58\u50a8\u5230\u672c\u5730\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"/tmp/abc"),"\u76ee\u5f55"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"\u279c  bc-cli git:(main) \u2717 ./bc-cli create account --wallet=/tmp/abc\naccount/0xafbff1c5658a03aa03a08f9e3ab8cab2d9a5a1eb created\n\u279c  bc-cli git:(main) \u2717 ls /tmp/abc \n0xafbff1c5658a03aa03a08f9e3ab8cab2d9a5a1eb\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u63d0\u4f9b\u79c1\u94a5\uff0c\u5c06\u7528\u6237\u5b58\u50a8\u5230\u9ed8\u8ba4\u4f4d\u7f6e"),(0,i.kt)("p",{parentName:"li"},"\u51c6\u5907\u79c1\u94a5\uff0c\u5e76\u5b58\u653e\u5728\u6587\u4ef6",(0,i.kt)("inlineCode",{parentName:"p"},"pk.pem"),"\u4e2d"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"\u279c  bc-cli git:(main) \u2717 cat pk.pem  \n-----BEGIN PRIVATE KEY-----\nMHcCAQEEIDuaob5MQI3tl8H/Z8L+VIiKaER1r/aojZfeRapKpbBhoAoGCCqGSM49\nAwEHoUQDQgAER6bI26M8/6cEwpHNm+wHq/wxU4ISG/2xfcyGeAsghx4hAUjVg9rr\nXYwFcMEK3BTGtx7v6Ai2OhxK4wF6/jibOA==\n-----END PRIVATE KEY-----\n\u279c  bc-cli git:(main) \u2717 ./bc-cli create account --pk=./pk.pem\naccount/0x7f0c733bcdb6721ed266a952ec697d9bea8022ad created\n\u279c  bc-cli git:(main) \u2717 ls $HOME/.bestchains/wallet \n0x7f0c733bcdb6721ed266a952ec697d9bea8022ad 0xc3c45ce32438c2d7fb54cee74ff27505bf0bafc8\n")))),(0,i.kt)("h3",{id:"\u67e5\u770b\u8d26\u6237\u4fe1\u606f"},"\u67e5\u770b\u8d26\u6237\u4fe1\u606f"),(0,i.kt)("p",null,"\u901a\u8fc7",(0,i.kt)("inlineCode",{parentName:"p"},"-h"),"\u67e5\u770b\u547d\u4ee4\u5b9a\u4e49\uff0c\u901a\u8fc7",(0,i.kt)("inlineCode",{parentName:"p"},"--wallet"),"\u53c2\u6570\u6765\u67e5\u770b\u4e0d\u540c",(0,i.kt)("inlineCode",{parentName:"p"},"wallet"),"\u4e0b\u7684\u8d26\u6237\u5217\u8868\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\u279c  bc-cli git:(main) \u2717 ./bc-cli get account -h\nDisplay account information according to wallet path\n\nUsage:\n  bc-cli get account [flags]\n\nFlags:\n  -h, --help            help for account\n      --wallet string   wallet path\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"\u279c  bc-cli git:(main) \u2717 ./bc-cli get account       \nACCOUNT\n0x7f0c733bcdb6721ed266a952ec697d9bea8022ad\n0xc3c45ce32438c2d7fb54cee74ff27505bf0bafc8\n\u279c  bc-cli git:(main) \u2717 ./bc-cli get account --wallet=/tmp/abc\nACCOUNT\n0xafbff1c5658a03aa03a08f9e3ab8cab2d9a5a1eb\n")),(0,i.kt)("h3",{id:"\u5220\u9664\u8d26\u6237\u4fe1\u606f"},"\u5220\u9664\u8d26\u6237\u4fe1\u606f"),(0,i.kt)("p",null,"\u901a\u8fc7",(0,i.kt)("inlineCode",{parentName:"p"},"-h"),"\u67e5\u770b\u547d\u4ee4\u5b9a\u4e49\uff0c\u901a\u8fc7",(0,i.kt)("inlineCode",{parentName:"p"},"--wallet"),"\u53c2\u6570\u6765\u5220\u9664\u4e0d\u540c",(0,i.kt)("inlineCode",{parentName:"p"},"wallet"),"\u4e0b\u7684\u8d26\u6237\u5217\u8868, \u652f\u6301\u4e00\u6b21\u5220\u9664\u591a\u4e2a\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\u279c  bc-cli git:(main) \u2717 ./bc-cli get account -h\nDisplay account information according to wallet path\n\nUsage:\n  bc-cli get account [flags]\n\nFlags:\n  -h, --help            help for account\n      --wallet string   wallet path\n")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u5220\u9664 ",(0,i.kt)("inlineCode",{parentName:"p"},"/tmp/abc")," \u4e0b\u9762\u7684\u8d26\u6237\u4fe1\u606f"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'\u279c  bc-cli git:(main) \u2717 ./bc-cli delete account --wallet=/tmp/abc 0xafbff1c5658a03aa03a08f9e3ab8cab2d9a5a1eb\naccount "0xafbff1c5658a03aa03a08f9e3ab8cab2d9a5a1eb" deleted\n\u279c  bc-cli git:(main) \u2717 ./bc-cli get account --wallet=/tmp/abc                                              \nACCOUNT\n'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u5220\u9664\u9ed8\u8ba4\u4f4d\u7f6e\u7684\u591a\u4e2a\u8d26\u6237\u4fe1\u606f"),(0,i.kt)("p",{parentName:"li"},"\u53ef\u4ee5\u6ce8\u610f\u5230\uff0c\u5728\u5220\u9664\u7684\u547d\u4ee4\u540e\u9762\u591a\u4e00\u4e2a",(0,i.kt)("inlineCode",{parentName:"p"},"abc"),"\u8d26\u6237\uff0c\u4f46\u662f\u8fd9\u8d26\u6237\u4fe1\u606f\u5e76\u4e0d\u5b58\u5728\u3002\u6240\u4ee5\u7ed9\u51fa\u62a5\u9519\u4fe1\u606f\u3002"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'\u279c  bc-cli git:(main) \u2717 ./bc-cli get account                  \nACCOUNT\n0x7f0c733bcdb6721ed266a952ec697d9bea8022ad\n0xc3c45ce32438c2d7fb54cee74ff27505bf0bafc8\n\u279c  bc-cli git:(main) \u2717 ./bc-cli delete account 0x7f0c733bcdb6721ed266a952ec697d9bea8022ad 0xc3c45ce32438c2d7fb54cee74ff27505bf0bafc8 abc\naccount "0x7f0c733bcdb6721ed266a952ec697d9bea8022ad" deleted\naccount "0xc3c45ce32438c2d7fb54cee74ff27505bf0bafc8" deleted\nError: account "abc" remove /home/digua/.bestchains/wallet/abc: no such file or directory\n')))),(0,i.kt)("h2",{id:"\u5b58\u8bc1\u7ba1\u7406"},"\u5b58\u8bc1\u7ba1\u7406"),(0,i.kt)("h3",{id:"\u521b\u5efa\u5b58\u8bc1"},"\u521b\u5efa\u5b58\u8bc1"),(0,i.kt)("p",null,"\u901a\u8fc7",(0,i.kt)("inlineCode",{parentName:"p"},"-h"),"\u67e5\u770b\u547d\u4ee4\u5b9a\u4e49"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Usage:\n  bc-cli create depository NAME [args] [flags]\n\nFlags:\n  -a, --account string       account to be used\n      --contentID string     depot file ID\n  -t, --contentType string   depot file type\n  -h, --help                 help for depository\n  -o, --host string          host URL\n  -n, --name string          depot name\n  -p, --platform string      depot source platform\n      --untrusted            put untrusted value (default true)\n  -w, --wallet string        wallet path\n")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u521b\u5efa\u672a\u53d7\u4fe1\u4efb\u5b58\u8bc1\uff08\u65e0\u9700\u8d26\u53f7\u4fe1\u606f\uff09\uff0c\u8fd4\u56de\u5b58\u8bc1 id\uff1a\n",(0,i.kt)("inlineCode",{parentName:"p"},"name"),"\uff1a\u5b58\u8bc1\u540d\u79f0\uff1b",(0,i.kt)("inlineCode",{parentName:"p"},"contentID"),"\uff1a\u5b58\u8bc1\u6587\u4ef6ID\uff1b",(0,i.kt)("inlineCode",{parentName:"p"},"type"),"\uff1a\u5b58\u8bc1\u6587\u4ef6\u7c7b\u578b\uff1b",(0,i.kt)("inlineCode",{parentName:"p"},"platform"),"\uff1a\u5b58\u8bc1\u6765\u6e90\u5e73\u53f0"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'./bc-cli create depository -n dep1 --contentID 123456789 -t file -p bestchains --host https://bc-saas.172.22.96.209.nip.io\n{"kid":"2afbb84dc8d19cd8c10264a8b72e7975385d169b"}\n'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u521b\u5efa\u5b58\u8bc1\uff08\u9700\u8981\u8d26\u53f7\u4fe1\u606f\uff09\uff0c\u8fd4\u56de\u5b58\u8bc1 id\uff1a\n",(0,i.kt)("inlineCode",{parentName:"p"},"name"),"\uff1a\u5b58\u8bc1\u540d\u79f0\uff1b",(0,i.kt)("inlineCode",{parentName:"p"},"contentID"),"\uff1a\u5b58\u8bc1\u6587\u4ef6ID\uff1b",(0,i.kt)("inlineCode",{parentName:"p"},"type"),"\uff1a\u5b58\u8bc1\u6587\u4ef6\u7c7b\u578b\uff1b",(0,i.kt)("inlineCode",{parentName:"p"},"platform"),"\uff1a\u5b58\u8bc1\u6765\u6e90\u5e73\u53f0\uff1b",(0,i.kt)("inlineCode",{parentName:"p"},"untrusted"),"\uff1a\u662f\u5426\u5b58\u50a8\u672a\u53d7\u4fe1\u4efb\u5b58\u8bc1\uff08\u6b64\u5904\u4e3a\u5426\uff09\uff1b",(0,i.kt)("inlineCode",{parentName:"p"},"account"),"\uff1a\u8d26\u53f7\u533a\u5757\u94fe\u5730\u5740\uff0c\u683c\u5f0f\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"0x0000000000000000000000000000000000000000")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'./bc-cli create depository -n dep1 --contentID 1234567890 -t file -p bestchains --host https://bc-saas.172.22.96.209.nip.io --untrusted=false -a 0x6b72ee599c570831ceb41809cb49805eb58e6f59\n{"kid":"2636d287351f1f51f35e98602c055ede1fdeb966"}\n')))),(0,i.kt)("h3",{id:"\u5b58\u8bc1\u5217\u8868"},"\u5b58\u8bc1\u5217\u8868"),(0,i.kt)("p",null,"\u901a\u8fc7",(0,i.kt)("inlineCode",{parentName:"p"},"-h"),"\u67e5\u770b\u547d\u4ee4\u5b9a\u4e49"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\u279c  bc-cli git:(main) \u2717 ./bc-cli get depository -h\nGet one or more depositories\n\nUsage:\n  bc-cli get depository [KID] [flags]\n\nFlags:\n  -c, --contentName string   search depository by content name\n  -f, --from int             pagination\n  -h, --help                 help for depository\n      --host string          bc-saas server\n  -k, --kid string           search depository by kid\n  -n, --name string          search depository by name\n  -s, --size int             pagination size (default 10)\n")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u83b7\u53d6\u5168\u90e8\u5b58\u8bc1\u4fe1\u606f"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"\u279c  bc-cli git:(main) \u2717 ./bc-cli get depository --host=https://bc-saas.172.22.96.209.nip.io\nINDEX    KID                                         PLATFORM      OPERATOR                                      OWNER                                         BLOCKNUMBER    TIME\n7        fbef356cae5b9ada2b0e9c5bc6138fdf320ed1ba    bestchains    0x02624bfc011381aa1f4e19db60e3f46673f1f171                                                  73             2023-05-06T13:24:53\n6        18b682430b2ee5cdcb17c0ea678a52223056d256    bestchains    0x02624bfc011381aa1f4e19db60e3f46673f1f171    0xe4af6dcf67b5ec06d903ec175a0c7e47f38249b2    72             2023-05-06T11:28:12\n28       d2a61f5d32cb5c8e73e7b36b4011b63c9bc5af68    bestchains                                                                                                55             2023-04-27T10:34:33\n27       1da7b7b3ae76706bf16b7a094593650c93696b0f    bestchains                                                                                                54             2023-04-27T09:38:09\n5        93b81217a6c96da33729f54eadc57a7e3ae848e0    bestchains    0x02624bfc011381aa1f4e19db60e3f46673f1f171                                                  53             2023-04-26T19:07:40\n4        ac5eb9848caa1c8002b019493294f86c74e63bba    bestchains    0x02624bfc011381aa1f4e19db60e3f46673f1f171                                                  52             2023-04-26T19:00:30\n3        60d7b8f15a48617fd9879815293db9cab1d5bdc6    bestchains    0x02624bfc011381aa1f4e19db60e3f46673f1f171                                                  51             2023-04-26T18:52:17\n2        e29afb7686ba0fa465295624f43b97df5505b665    bestchains    0x02624bfc011381aa1f4e19db60e3f46673f1f171                                                  50             2023-04-26T18:51:15\n1        a86d95ee04f272aa9bcb619196a6a59efd97a6b1    bestchains    0x02624bfc011381aa1f4e19db60e3f46673f1f171                                                  49             2023-04-26T18:51:12\n0        18d714ab63365b4c198479a6607ad652fd0c9d56    bestchains    0x02624bfc011381aa1f4e19db60e3f46673f1f171                                                  48             2023-04-26T18:51:09\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u6839\u636ekid\u83b7\u53d6\u5b58\u8bc1"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"\u279c  bc-cli git:(main) \u2717 ./bc-cli get depository --host=https://bc-saas.172.22.96.209.nip.io -k=fbef356cae5b9ada2b0e9c5bc6138fdf320ed1ba\nINDEX    KID                                         PLATFORM      OPERATOR                                      OWNER    BLOCKNUMBER    TIME\n7        fbef356cae5b9ada2b0e9c5bc6138fdf320ed1ba    bestchains    0x02624bfc011381aa1f4e19db60e3f46673f1f171             73             2023-05-06T13:24:53\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"from"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"size")," \u63a7\u5236\u8fd4\u56de\u6570\u91cf\u4ee5\u53ca\u504f\u79fb\u6570\u636e"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"\u279c  bc-cli git:(main) \u2717 ./bc-cli get depository --host=https://bc-saas.172.22.96.209.nip.io -f=1 -s=3\nINDEX    KID                                         PLATFORM      OPERATOR                                      OWNER                                         BLOCKNUMBER    TIME\n6        18b682430b2ee5cdcb17c0ea678a52223056d256    bestchains    0x02624bfc011381aa1f4e19db60e3f46673f1f171    0xe4af6dcf67b5ec06d903ec175a0c7e47f38249b2    72             2023-05-06T11:28:12\n28       d2a61f5d32cb5c8e73e7b36b4011b63c9bc5af68    bestchains                                                                                                55             2023-04-27T10:34:33\n27       1da7b7b3ae76706bf16b7a094593650c93696b0f    bestchains                                                                                                54             2023-04-27T09:38:09\n")))),(0,i.kt)("h2",{id:"bestchains-\u8d44\u6e90\u7ba1\u7406"},"Bestchains \u8d44\u6e90\u7ba1\u7406"),(0,i.kt)("h3",{id:"\u83b7\u53d6\u7ec4\u7ec7\u5217\u8868"},"\u83b7\u53d6\u7ec4\u7ec7\u5217\u8868"),(0,i.kt)("p",null,"\u83b7\u53d6\u7ec4\u7ec7\u5217\u8868\uff0c\u652f\u6301\u83b7\u53d6\u4e00\u4e2a\uff0c\u591a\u4e2a\uff0c\u4ee5\u53ca\u5168\u90e8\u7684\u7528\u6237\u53ef\u89c1\u7684\u7ec4\u7ec7\u3002\u5982\u679c\u6ca1\u6709\u6743\u9650\uff0c\u4f1a\u8fd4\u56de\u9519\u8bef\u4fe1\u606f\u3002",(0,i.kt)("br",{parentName:"p"}),"\n","\u652f\u6301 ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl get")," \u7684\u5c55\u793a\u6027\u53c2\u6570\uff0c\u4f8b\u5982 ",(0,i.kt)("inlineCode",{parentName:"p"},"-oyaml"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"-ojson"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"--showlabels")," \u7b49\uff0c\u4ee5\u53ca\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"labelselector")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"fieldselector")," \u9009\u62e9\u8d44\u6e90\u3002"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u83b7\u53d6\u5168\u90e8\u7ec4\u7ec7\u4fe1\u606f"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"\u279c  bc-cli git:(org) \u2717 ./bc-cli get org\nNAME        AGE\n2345        20d\ndayu        24d\ntenxcloud   24d\ntestorg1    24d\ntestorg2    24d\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u83b7\u53d6\u4e00\u4e2a\uff0c\u591a\u4e2a\u7ec4\u7ec7\u4fe1\u606f"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"\u279c  bc-cli git:(org) \u2717 ./bc-cli get org dayu\nNAME   AGE\ndayu   24d\n\u279c  bc-cli git:(org) \u2717 ./bc-cli get org dayu testorg2\nNAME       AGE\ndayu       24d\ntestorg2   24d\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u901a\u8fc7\u6807\u7b7e\u9009\u62e9\u7ec4\u7ec7"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"\u279c  bc-cli git:(org) \u2717 ./bc-cli get org -l=bestchains.organization.admin=marsdawe --show-labels\nNAME       AGE   LABELS\ntestorg1   24d   bestchains.organization.admin=marsdawe\ntestorg2   24d   bestchains.organization.admin=marsdawe\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u4ee5 yaml \u65b9\u5f0f\u5c55\u793a\u5185\u5bb9"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'\u279c  bc-cli git:(org) \u2717 ./bc-cli get org -l=bestchains.organization.admin=marsdawe -oyaml              \napiVersion: v1\nitems:\n- apiVersion: ibp.com/v1beta1\n  kind: Organization\n  metadata:\n    creationTimestamp: "2023-04-17T09:04:39Z"\n    generation: 1\n    labels:\n      bestchains.organization.admin: marsdawe\n    name: testorg1\n    resourceVersion: "574846745"\n    uid: 68877e3a-0411-40fb-a0cf-11a6fe9fcf8c\n  # ...\n- apiVersion: ibp.com/v1beta1\n  kind: Organization\n  metadata:\n    creationTimestamp: "2023-04-17T09:26:25Z"\n    generation: 1\n    labels:\n      bestchains.organization.admin: marsdawe\n    name: testorg2\n    resourceVersion: "568602322"\n    uid: 4740807c-9575-478d-8578-f8fe394dd704\n  # ...\nkind: List\nmetadata: {}\n')))))}b.isMDXComponent=!0},760:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/bc-cli-auth-3de6275132e863cf23e3e38a59c49719.gif"}}]);