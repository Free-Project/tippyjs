(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{292:function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return b})),t.d(a,"default",(function(){return m}));t(4),t(5),t(3),t(7),t(10),t(0);var n=t(51),s=t(276);var c,b={},o=(c="Emoji",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",e)}),p={_frontmatter:b},i=s.a;function m(e){var a=e.components,t=function(e,a){if(null==e)return{};var t,n,s={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,["components"]);return Object(n.b)(i,Object.assign({},p,t,{components:a,mdxType:"MDXLayout"}),Object(n.b)("p",null,"Plugins are an extensible way to add functionality to tippy instances. By\nsplitting functionality into a plugin, users who don't need the code provided by\nthe plugin are not burdened with its cost by default."),Object(n.b)("h3",null,"Exported plugins"),Object(n.b)("p",null,"These plugins are exported by the package:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("code",Object.assign({parentName:"li"},{className:"language-text"}),"animateFill")," ",Object(n.b)(o,{emoji:"🖌️",mdxType:"Emoji"})),Object(n.b)("li",{parentName:"ul"},Object(n.b)("code",Object.assign({parentName:"li"},{className:"language-text"}),"followCursor")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("code",Object.assign({parentName:"li"},{className:"language-text"}),"inlinePositioning")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("code",Object.assign({parentName:"li"},{className:"language-text"}),"sticky"))),Object(n.b)(o,{emoji:"🖌️",mdxType:"Emoji"})," Requires importing the following CSS stylesheets to work:",Object(n.b)("div",{className:"gatsby-highlight","data-language":"js"},Object(n.b)("pre",Object.assign({parentName:"div"},{className:"language-js"}),Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-js"}),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token module keyword"}),"import")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token string"}),Object(n.b)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"'"),"tippy.js/dist/backdrop.css",Object(n.b)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"'")),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";"),"\n",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token module keyword"}),"import")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token string"}),Object(n.b)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"'"),"tippy.js/animations/shift-away.css",Object(n.b)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"'")),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";")))),Object(n.b)("h3",null,"Usage"),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},Object(n.b)("strong",{parentName:"p"},"Note:")," if you are using the CDN (IIFE) version, there is no need to do the\nfollowing steps. The plugins will work by default. This comes with the\ndownside of adding extra KBs which is a tradeoff made to reduce extra HTTP\nrequests. Using a bundler like webpack is recommended instead to benefit from\ntreeshaking.")),Object(n.b)("p",null,"Pass the plugin(s) in an array as a 3rd argument to ",Object(n.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"tippy()"),":"),Object(n.b)("div",{className:"gatsby-highlight","data-language":"js"},Object(n.b)("pre",Object.assign({parentName:"div"},{className:"language-js"}),Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-js"}),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token module keyword"}),"import")," tippy",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),",")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token block"}),"{"),"followCursor",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token block"}),"}")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token module keyword"}),"from")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token string"}),Object(n.b)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"'"),"tippy.js",Object(n.b)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"'")),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";"),"\n\n",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"tippy"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token block"}),"("),"reference",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),",")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token block"}),"{"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token definition property"}),"followCursor"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),":")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token boolean"}),"true"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token block"}),"}"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),",")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token block"}),"["),"followCursor",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token block"}),"]"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token block"}),")"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";")))),Object(n.b)("h4",null,"Helper function"),Object(n.b)("p",null,"There is a helper function that returns a higher-order tippy function that will\npass the plugin(s) for you:"),Object(n.b)("p",null,Object(n.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"src/tippy.js"),":"),Object(n.b)("div",{className:"gatsby-highlight","data-language":"js"},Object(n.b)("pre",Object.assign({parentName:"div"},{className:"language-js"}),Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-js"}),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token module keyword"}),"import")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token block"}),"{"),"createTippyWithPlugins",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),",")," followCursor",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token block"}),"}")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token module keyword"}),"from")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token string"}),Object(n.b)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"'"),"tippy.js",Object(n.b)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"'")),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";"),"\n\n",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token module keyword"}),"export")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token module keyword"}),"default")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"createTippyWithPlugins"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token block"}),"("),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token block"}),"["),"followCursor",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token block"}),"]"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token block"}),")"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";")))),Object(n.b)("p",null,"Import ",Object(n.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"tippy")," from this file instead of ",Object(n.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"node_modules"),"."),Object(n.b)("p",null,Object(n.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"src/index.js"),":"),Object(n.b)("div",{className:"gatsby-highlight","data-language":"js"},Object(n.b)("pre",Object.assign({parentName:"div"},{className:"language-js"}),Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-js"}),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token module keyword"}),"import")," tippy ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token module keyword"}),"from")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token string"}),Object(n.b)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"'"),"./tippy",Object(n.b)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"'")),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";"),"\n\n",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"tippy"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token block"}),"("),"reference",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),",")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token block"}),"{"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token definition property"}),"followCursor"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),":")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token boolean"}),"true"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token block"}),"}"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token block"}),")"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";")))),Object(n.b)("p",null,"If bundle size is important, you can create different tippy files with pass\nparticular plugins, or stick to using the 3rd argument, so that only the routes\nor components that require the plugin import it."),Object(n.b)("p",null,"If the cost of the plugins is neglibile for you, then you can use a central file\nthat passes all plugins that your app requires."),Object(n.b)("h3",null,"Creating your own custom plugin"),Object(n.b)("p",null,"A plugin is created by defining an object with the following shape:"),Object(n.b)("div",{className:"gatsby-highlight","data-language":"js"},Object(n.b)("pre",Object.assign({parentName:"div"},{className:"language-js"}),Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-js"}),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"const")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token constant"}),"plugin")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token block"}),"{"),"\n  ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token comment"}),"// Optional (if the plugin provides a prop to use)"),"\n  ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token definition property"}),"name"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),":")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token string"}),Object(n.b)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"'"),"propName",Object(n.b)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"'")),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),",")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token comment"}),"// e.g. 'followCursor' or 'sticky'"),"\n  ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token definition property"}),"defaultValue"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),":")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token string"}),Object(n.b)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"'"),"anyValue",Object(n.b)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"'")),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n\n  ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token comment"}),"// Required"),"\n  ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"fn"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token block"}),"("),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token parameter"}),"instance"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token block"}),")")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token block"}),"{"),"\n    ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token comment"}),"// Internal state"),"\n    ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token control keyword"}),"return")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token block"}),"{"),"\n      ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token comment"}),"// Lifecycle hooks"),"\n    ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token block"}),"}"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";"),"\n  ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token block"}),"}"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token block"}),"}"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";")))),Object(n.b)("p",null,"The plugin's function ",Object(n.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"fn")," returns an object of\n",Object(n.b)("a",Object.assign({parentName:"p"},{href:"/tippyjs/lifecycle-hooks"}),"lifecycle hooks"),"."),Object(n.b)("p",null,"Here's an example of a plugin that causes a popper to hide if no elements within\nit are in focus (for interactivity):"),Object(n.b)("div",{className:"gatsby-highlight","data-language":"js"},Object(n.b)("pre",Object.assign({parentName:"div"},{className:"language-js"}),Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-js"}),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"const")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token constant"}),"hideOnPopperBlur")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token block"}),"{"),"\n  ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token definition property"}),"name"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),":")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token string"}),Object(n.b)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"'"),"hideOnPopperBlur",Object(n.b)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"'")),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n  ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token definition property"}),"defaultValue"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),":")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token boolean"}),"true"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n  ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"fn"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token block"}),"("),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token block"}),")")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token block"}),"{"),"\n    ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token control keyword"}),"return")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token block"}),"{"),"\n      ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"onCreate"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token block"}),"("),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token parameter"}),"instance"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token block"}),")")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token block"}),"{"),"\n        ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token object"}),"instance"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token access property"}),"popper"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token func method"}),"addEventListener"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token block"}),"("),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token string"}),Object(n.b)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"'"),"focusout",Object(n.b)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"'")),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),",")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token parameter"}),"event")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token arrow operator"}),"=>")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token block"}),"{"),"\n          ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token control keyword"}),"if")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token block"}),"("),"\n            ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token object"}),"instance"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token access property"}),"props"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token access property"}),"hideOnPopperBlur")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"&&"),"\n            ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token object"}),"event"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token access property"}),"relatedTarget")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"&&"),"\n            ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"!"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token object"}),"instance"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token access property"}),"popper"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token func method"}),"contains"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token block"}),"("),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token object"}),"event"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token access property"}),"relatedTarget"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token block"}),")"),"\n          ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token block"}),")")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token block"}),"{"),"\n            ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token object"}),"instance"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token func method"}),"hide"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token block"}),"("),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token block"}),")"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";"),"\n          ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token block"}),"}"),"\n        ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token block"}),"}"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token block"}),")"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";"),"\n      ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token block"}),"}"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n    ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token block"}),"}"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";"),"\n  ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token block"}),"}"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token block"}),"}"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";"),"\n\n",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token comment"}),"// Our new prop is enabled by default (defaultValue: true)"),"\n",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"tippy"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token block"}),"("),"reference",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),",")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token block"}),"{"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token block"}),"}"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),",")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token block"}),"["),"hideOnPopperBlur",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token block"}),"]"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token block"}),")"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";")))),Object(n.b)("p",null,"Plugins are invoked per-instance and the plugin function definition takes the\ninstance as an argument, so you can use private variables to create internal\nstate in the plugin closure. This is how the ",Object(n.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"followCursor")," plugin works."))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-plugins-mdx-2d34568a92ec4d4fe07c.js.map