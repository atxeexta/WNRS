(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8581:function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(3678)}])},3678:function(e,n,a){"use strict";a.r(n),a.d(n,{default:function(){return N}});var t=a(5893),i=a(7294),r=a(6010),s=a(1163),o=a(5989),c=a(6743),d=a(510),l=a(5694),m=a(8085),_=a(6323),u=a(251),f=a.n(u),h=a(5762),x=a(9008),j=a(3374);function v(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function p(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{},t=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),t.forEach((function(n){v(e,n,a[n])}))}return e}var g=function(e){var n=e.split("-");if(n.length<=1||!n.slice(-1)[0].length)return!1;var a=n.slice(0,-1).join("-"),t=Number(n.slice(-1)[0]);return!(isNaN(t)||!Number.isInteger(t)||t<0||t>Math.pow(2,Object.keys(d).length))&&{seed:a,decksCode:t,decks:(0,_.E$)(t)}};function N(){var e,n=(0,s.useRouter)(),a=(0,j.F)().themeColor,d=(0,i.useState)({mode:null,seed:"",decks:null,names:[""]}),u=d[0],v=d[1],N=(0,i.useState)(0),b=N[0],w=N[1],y=(0,i.useState)(null),k=y[0],C=y[1],S=(0,i.useRef)(),E=function(e){return function(n){v(p({},u,{mode:e})),w("new"===e?1:2)}},L=function(){if(2===b&&"load"===u.mode){var e=g(u.seed);if(!e)return C("Invalid seed");v(p({},u,{seed:e.seed,decks:e.decks}))}if(2===b&&"new"===u.mode&&!u.seed)return C("Empty");w(++b)},O=function(){1!==b&&"load"!==u.mode||v(p({},u,{mode:null})),C(null),w("load"===u.mode?0:--b)};return(0,i.useEffect)((function(){if(4===b){document&&(document.body.style.transition="background 500ms ease-in",document.body.style.background="var(--theme-main)");var e=(0,_.Mr)(u.decks);(0,h.Kz)((0,h.IH)(),"game_start",{mode:u.mode,deck:e,players:u.names.length}),setTimeout((function(){n.push({pathname:"/game",query:p({decks:e,seed:u.seed?u.seed:(new Date).toLocaleDateString("sv")},1!==u.names.length&&{names:u.names.slice(0,-1).join(",")})})}),500)}}),[b]),(0,i.useEffect)((function(){document.body.style.background="var(--theme-paper)",document.body.style.color="var(--theme-contrastPaperText)"}),[]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(x.default,{children:(0,t.jsx)("meta",{name:"theme-color",content:a})}),(0,t.jsx)("main",{className:(0,r.Z)(f().startRoot,4===b&&f().fadeToMain),children:(0,t.jsxs)("div",{className:f().inner,children:[(0,t.jsx)(o.Z,{children:(0,t.jsx)(c.Z,{addEndListener:function(e,n){return e.addEventListener("transitionend",n,!1)},classNames:{enter:f()["fade-enter"],enterActive:f()["fade-enter-active"],exit:f()["fade-exit"],exitActive:f()["fade-exit-active"]},children:(0,t.jsxs)("div",{className:f().content,ref:S,children:[0===b&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("h1",{className:f().gameName,children:["We're Not",(0,t.jsx)("br",{}),"Really",(0,t.jsx)("br",{}),"Strangers"]}),(0,t.jsxs)("div",{className:f().modes,children:[(0,t.jsxs)("div",{className:f().mode,onClick:E("new"),children:[(0,t.jsx)(m.ol,{className:f().arrow}),(0,t.jsx)("span",{children:"New Game"})]}),(0,t.jsxs)("div",{className:f().mode,onClick:E("load"),children:[(0,t.jsx)(m.ol,{className:f().arrow}),(0,t.jsx)("span",{children:"Load Game"})]})]})]}),"new"===u.mode&&1===b&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("h2",{className:f().title,children:"Decks"}),(0,t.jsx)("div",{className:f().description,children:"Don't worry. You may change this later."}),(0,t.jsx)(l.l,{className:f().list,init:null!==(e=u.decks)&&void 0!==e?e:void 0,onChange:function(e){return v(p({},u,{decks:e}))}})]}),2===b&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("h2",{className:f().title,children:"Your Game"}),(0,t.jsx)("div",{className:f().description,children:"Just a bit more info."}),(0,t.jsx)(l.J,{mode:u.mode,error:k,className:f().nameForm,onChange:function(e,n){"load"===u.mode&&k&&g(e)&&C(null),v(p({},u,{names:n,seed:e}))}})]}),3===b&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("h1",{className:f().gameName,children:["Warning:",(0,t.jsx)("br",{}),"Feeling may arise.",(0,t.jsx)("br",{})]}),(0,t.jsxs)("p",{className:f().gameDesc,children:["To proceed, you understand this application is ",(0,t.jsx)("strong",{children:"not"})," affliated with the official WNRS and agree with this app's"," ",(0,t.jsx)("a",{href:"https://docs.google.com/document/d/1LrcuAy6t8woynvdQSc9wKWoyLY3aSGbcJCYH-9l-qBw/edit?usp=sharing",rel:"noreferrer",target:"_blank",children:"Privacy Policy"}),".",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),(0,t.jsx)("span",{className:f().offline,children:"Add this app to your homepage for offline support."})]}),(0,t.jsxs)("div",{className:f().modes,children:[(0,t.jsxs)("div",{className:f().mode,onClick:L,children:[(0,t.jsx)(m.ol,{className:f().arrow}),(0,t.jsx)("span",{children:"I'm ready"})]}),(0,t.jsxs)("div",{className:f().mode,onClick:O,children:[(0,t.jsx)(m.ol,{className:f().arrow}),(0,t.jsx)("span",{children:"Bring me back"})]})]})]})]})},b)}),(0,t.jsx)(o.Z,{children:(0,t.jsx)(c.Z,{addEndListener:function(e,n){return S.current.addEventListener("transitionend",n,!1)},classNames:{enter:f()["fade-enter"],enterActive:f()["fade-enter-active"],exit:f()["fade-exit"],exitActive:f()["fade-exit-active"]},children:(0,t.jsx)("div",{children:b>0&&b<3&&(0,t.jsxs)("nav",{className:f().nav,children:[(0,t.jsxs)("button",{onClick:O,children:[(0,t.jsx)(m.Xd,{className:f().arrowLeft}),"Back"]}),(0,t.jsxs)("button",{onClick:L,children:["Next",(0,t.jsx)(m.ol,{className:f().arrowRight})]})]})})},b>0&&b<3)})]})})]})}},251:function(e){e.exports={inner:"main_inner__d643h",nav:"main_nav__Ux8yS",title:"main_title__X_f7j",modes:"main_modes__aWNJU",mode:"main_mode__8a93t",gameName:"main_gameName__6k0Cr","drop-enter":"main_drop-enter__ZFuXL","drop-exit":"main_drop-exit__zALxX","drop-enter-active":"main_drop-enter-active__hlZkr","drop-exit-active":"main_drop-exit-active__gGihS","fade-enter":"main_fade-enter__FtMLA","fade-exit":"main_fade-exit__xHhyd","fade-enter-active":"main_fade-enter-active__nDIU3","fade-exit-active":"main_fade-exit-active__v6SW3","fade-exit-right-active":"main_fade-exit-right-active__ICcSw",startRoot:"main_startRoot__OCuJ2",fadeToMain:"main_fadeToMain__4Msbd",content:"main_content__vrntn",gameDesc:"main_gameDesc__6oHrO",offline:"main_offline__xTNiz",hide:"main_hide__rHCOj",arrow:"main_arrow__4xz2A",description:"main_description__u_fcZ",list:"main_list__m2urS",nameForm:"main_nameForm__8hTqH",arrowLeft:"main_arrowLeft__0_5AM",arrowRight:"main_arrowRight__zv81H"}}},function(e){e.O(0,[799,579,774,888,179],(function(){return n=8581,e(e.s=n);var n}));var n=e.O();_N_E=n}]);