"use strict";(self.webpackChunkdynamica_website=self.webpackChunkdynamica_website||[]).push([[729],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=p(n),d=a,f=s["".concat(u,".").concat(d)]||s[d]||c[d]||i;return n?r.createElement(f,o(o({ref:t},m),{},{components:n})):r.createElement(f,o({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=s;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},9578:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return m},default:function(){return s}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={sidebar_position:3},u="Formatting",p={unversionedId:"formatting",id:"formatting",isDocsHomePage:!1,title:"Formatting",description:"Formatting appears in a few different commands, namely:",source:"@site/docs/formatting.md",sourceDirName:".",slug:"/formatting",permalink:"/docs/formatting",editUrl:"https://github.com/dynamicabot/DynamicaWebsite/edit/master/docs/formatting.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Features",permalink:"/docs/features"},next:{title:"Selfhosting",permalink:"/docs/selfhosting"}},m=[{value:"Activity",id:"activity",children:[],level:2},{value:"Member Count",id:"member-count",children:[],level:2},{value:"Plurals",id:"plurals",children:[],level:2},{value:"Numbers",id:"numbers",children:[{value:"Default Formatting",id:"default-formatting",children:[],level:3},{value:"Nato Formatting",id:"nato-formatting",children:[],level:3},{value:"Precision Formatting",id:"precision-formatting",children:[],level:3},{value:"Roman Numerals",id:"roman-numerals",children:[],level:3},{value:"No formatting",id:"no-formatting",children:[],level:3}],level:2}],c={toc:m};function s(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"formatting"},"Formatting"),(0,i.kt)("p",null,"Formatting appears in a few different commands, namely:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"template")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"general"))),(0,i.kt)("p",null,"There are a few different variables you can put in that will replace normal text."),(0,i.kt)("h2",{id:"activity"},"Activity"),(0,i.kt)("p",null,"One of the coolest features of the bot is changing the channel name to the current activity. If you want to edit the template simply use ",(0,i.kt)("inlineCode",{parentName:"p"},"@@game@@")," to insert the games that are currently being played."),(0,i.kt)("h2",{id:"member-count"},"Member Count"),(0,i.kt)("p",null,"To display the member count of the channel use ",(0,i.kt)("inlineCode",{parentName:"p"},"@@num@@"),"."),(0,i.kt)("h2",{id:"plurals"},"Plurals"),(0,i.kt)("p",null,"The string ",(0,i.kt)("inlineCode",{parentName:"p"},"<<person/people>>")," indicates what word to use depending on how many people are currently in the channel. If there is one person in the channel it will return ",(0,i.kt)("inlineCode",{parentName:"p"},"person")," but if there's anything else it will return ",(0,i.kt)("inlineCode",{parentName:"p"},"people"),". You can replace these words with anything you want provided that it's surrounded by << and >> and seperated by a slash."),(0,i.kt)("h2",{id:"numbers"},"Numbers"),(0,i.kt)("p",null,"Number formatting changes depending on what channel number you're in."),(0,i.kt)("h3",{id:"default-formatting"},"Default Formatting"),(0,i.kt)("p",null,"By default the channel template is ",(0,i.kt)("inlineCode",{parentName:"p"},"@@game@@ ##"),". The ",(0,i.kt)("inlineCode",{parentName:"p"},"##")," is replaced by the channel number in a normal format of ",(0,i.kt)("inlineCode",{parentName:"p"},"#1"),"."),(0,i.kt)("h3",{id:"nato-formatting"},"Nato Formatting"),(0,i.kt)("p",null,"If you use the string ",(0,i.kt)("inlineCode",{parentName:"p"},"@@nato@@")," in a channel name it will be replaced by the equivalent Nato code for the channel number. For example, if the channel was channel number ",(0,i.kt)("inlineCode",{parentName:"p"},"5")," it would be replaced with ",(0,i.kt)("inlineCode",{parentName:"p"},"Echo")," and with channel number ",(0,i.kt)("inlineCode",{parentName:"p"},"1")," it would be ",(0,i.kt)("inlineCode",{parentName:"p"},"Alpha"),"."),(0,i.kt)("h3",{id:"precision-formatting"},"Precision Formatting"),(0,i.kt)("p",null,"The string ",(0,i.kt)("inlineCode",{parentName:"p"},"###")," will be replaced by the channel number (",(0,i.kt)("inlineCode",{parentName:"p"},"1")," in this case) in this format: ",(0,i.kt)("inlineCode",{parentName:"p"},"001"),"."),(0,i.kt)("h3",{id:"roman-numerals"},"Roman Numerals"),(0,i.kt)("p",null,"The string ",(0,i.kt)("inlineCode",{parentName:"p"},"+#")," will be replaced with the roman numeral representation of the channel number."),(0,i.kt)("h3",{id:"no-formatting"},"No formatting"),(0,i.kt)("p",null,"The string ",(0,i.kt)("inlineCode",{parentName:"p"},"$#")," will result in just the channel number without anything else."))}s.isMDXComponent=!0}}]);