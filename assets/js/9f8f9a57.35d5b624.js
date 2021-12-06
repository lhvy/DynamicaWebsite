"use strict";(self.webpackChunkdynamica_website=self.webpackChunkdynamica_website||[]).push([[266],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return p}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),u=s(n),p=a,h=u["".concat(l,".").concat(p)]||u[p]||d[p]||o;return n?r.createElement(h,i(i({ref:t},m),{},{components:n})):r.createElement(h,i({ref:t},m))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2277:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return m},default:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],c={sidebar_position:1},l="Introduction to Commands",s={unversionedId:"commands/intro",id:"commands/intro",isDocsHomePage:!1,title:"Introduction to Commands",description:"Each command in this list is available as a slash command with new commands being added regularly.",source:"@site/docs/commands/intro.md",sourceDirName:"commands",slug:"/commands/intro",permalink:"/docs/commands/intro",editUrl:"https://github.com/sebasptsch/DynamicaWebsite/edit/main/website/docs/commands/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/docs/intro"},next:{title:"create",permalink:"/docs/commands/create"}},m=[{value:"Technical Terms",id:"technical-terms",children:[],level:2}],d={toc:m};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"introduction-to-commands"},"Introduction to Commands"),(0,o.kt)("p",null,"Each command in this list is available as a slash command with new commands being added regularly."),(0,o.kt)("p",null,"Commands that modify channels in any way like ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"create")," need the person who is executing them to have the ",(0,o.kt)("inlineCode",{parentName:"p"},"Dynamica Manager")," role which the bot creates on startup."),(0,o.kt)("h2",{id:"technical-terms"},"Technical Terms"),(0,o.kt)("p",null,"During the command docs there are a few technical terms that are used. Here are the primary ones:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Primary Channel")," - This refers to the channel that is created by the ",(0,o.kt)("inlineCode",{parentName:"li"},"create")," command and triggers the creation of a new ",(0,o.kt)("inlineCode",{parentName:"li"},"Secondary")," channel."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Secondary Channel")," - This is the channel that's created by someone joining a ",(0,o.kt)("inlineCode",{parentName:"li"},"Primary")," channel.")))}u.isMDXComponent=!0}}]);