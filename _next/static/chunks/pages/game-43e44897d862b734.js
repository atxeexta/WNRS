(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[203],{7138:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/game",function(){return t(6643)}])},8418:function(e,n,t){"use strict";function r(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function i(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,i,o=[],a=!0,l=!1;try{for(t=t.call(e);!(a=(r=t.next()).done)&&(o.push(r.value),!n||o.length!==n);a=!0);}catch(c){l=!0,i=c}finally{try{a||null==t.return||t.return()}finally{if(l)throw i}}return o}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return r(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return r(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.default=void 0;var o,a=(o=t(7294))&&o.__esModule?o:{default:o},l=t(6273),c=t(387),u=t(7190);var s={};function d(e,n,t,r){if(e&&l.isLocalURL(n)){e.prefetch(n,t,r).catch((function(e){0}));var i=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[n+"%"+t+(i?"%"+i:"")]=!0}}var f=function(e){var n,t=!1!==e.prefetch,r=c.useRouter(),o=a.default.useMemo((function(){var n=i(l.resolveHref(r,e.href,!0),2),t=n[0],o=n[1];return{href:t,as:e.as?l.resolveHref(r,e.as):o||t}}),[r,e.href,e.as]),f=o.href,m=o.as,_=e.children,v=e.replace,h=e.shallow,p=e.scroll,b=e.locale;"string"===typeof _&&(_=a.default.createElement("a",null,_));var g=(n=a.default.Children.only(_))&&"object"===typeof n&&n.ref,y=i(u.useIntersection({rootMargin:"200px"}),2),x=y[0],j=y[1],k=a.default.useCallback((function(e){x(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,x]);a.default.useEffect((function(){var e=j&&t&&l.isLocalURL(f),n="undefined"!==typeof b?b:r&&r.locale,i=s[f+"%"+m+(n?"%"+n:"")];e&&!i&&d(r,f,m,{locale:n})}),[m,f,j,b,t,r]);var w={ref:k,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,t,r,i,o,a,c){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(t))&&(e.preventDefault(),null==a&&r.indexOf("#")>=0&&(a=!1),n[i?"replace":"push"](t,r,{shallow:o,locale:c,scroll:a}))}(e,r,f,m,v,h,p,b)},onMouseEnter:function(e){n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),l.isLocalURL(f)&&d(r,f,m,{priority:!0})}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var D="undefined"!==typeof b?b:r&&r.locale,O=r&&r.isLocaleDomain&&l.getDomainLocale(m,D,r&&r.locales,r&&r.domainLocales);w.href=O||l.addBasePath(l.addLocale(m,D,r&&r.defaultLocale))}return a.default.cloneElement(n,w)};n.default=f},7190:function(e,n,t){"use strict";function r(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function i(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,i,o=[],a=!0,l=!1;try{for(t=t.call(e);!(a=(r=t.next()).done)&&(o.push(r.value),!n||o.length!==n);a=!0);}catch(c){l=!0,i=c}finally{try{a||null==t.return||t.return()}finally{if(l)throw i}}return o}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return r(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return r(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootRef,t=e.rootMargin,r=e.disabled||!l,u=o.useRef(),s=i(o.useState(!1),2),d=s[0],f=s[1],m=i(o.useState(n?n.current:null),2),_=m[0],v=m[1],h=o.useCallback((function(e){u.current&&(u.current(),u.current=void 0),r||d||e&&e.tagName&&(u.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=c.get(n);if(t)return t;var r=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return c.set(n,t={id:n,observer:i,elements:r}),t}(t),i=r.id,o=r.observer,a=r.elements;return a.set(e,n),o.observe(e),function(){a.delete(e),o.unobserve(e),0===a.size&&(o.disconnect(),c.delete(i))}}(e,(function(e){return e&&f(e)}),{root:_,rootMargin:t}))}),[r,_,t,d]);return o.useEffect((function(){if(!l&&!d){var e=a.requestIdleCallback((function(){return f(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[d]),o.useEffect((function(){n&&v(n.current)}),[n]),[h,d]};var o=t(7294),a=t(9311),l="undefined"!==typeof IntersectionObserver;var c=new Map},6643:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return me}});var r=t(5893),i=t(1163),o=t(1664),a=t(7294),l=t(6323),c=t(510),u=t(9822),s=t(2514),d=t.n(s),f=t(3366),m=t(7462);var _=t(5068),v=t(220);function h(e,n){var t=Object.create(null);return e&&a.Children.map(e,(function(e){return e})).forEach((function(e){t[e.key]=function(e){return n&&(0,a.isValidElement)(e)?n(e):e}(e)})),t}function p(e,n,t){return null!=t[n]?t[n]:e.props[n]}function b(e,n,t){var r=h(e.children),i=function(e,n){function t(t){return t in n?n[t]:e[t]}e=e||{},n=n||{};var r,i=Object.create(null),o=[];for(var a in e)a in n?o.length&&(i[a]=o,o=[]):o.push(a);var l={};for(var c in n){if(i[c])for(r=0;r<i[c].length;r++){var u=i[c][r];l[i[c][r]]=t(u)}l[c]=t(c)}for(r=0;r<o.length;r++)l[o[r]]=t(o[r]);return l}(n,r);return Object.keys(i).forEach((function(o){var l=i[o];if((0,a.isValidElement)(l)){var c=o in n,u=o in r,s=n[o],d=(0,a.isValidElement)(s)&&!s.props.in;!u||c&&!d?u||!c||d?u&&c&&(0,a.isValidElement)(s)&&(i[o]=(0,a.cloneElement)(l,{onExited:t.bind(null,l),in:s.props.in,exit:p(l,"exit",e),enter:p(l,"enter",e)})):i[o]=(0,a.cloneElement)(l,{in:!1}):i[o]=(0,a.cloneElement)(l,{onExited:t.bind(null,l),in:!0,exit:p(l,"exit",e),enter:p(l,"enter",e)})}})),i}var g=Object.values||function(e){return Object.keys(e).map((function(n){return e[n]}))},y=function(e){function n(n,t){var r,i=(r=e.call(this,n,t)||this).handleExited.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(r));return r.state={contextValue:{isMounting:!0},handleExited:i,firstRender:!0},r}(0,_.Z)(n,e);var t=n.prototype;return t.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},t.componentWillUnmount=function(){this.mounted=!1},n.getDerivedStateFromProps=function(e,n){var t,r,i=n.children,o=n.handleExited;return{children:n.firstRender?(t=e,r=o,h(t.children,(function(e){return(0,a.cloneElement)(e,{onExited:r.bind(null,e),in:!0,appear:p(e,"appear",t),enter:p(e,"enter",t),exit:p(e,"exit",t)})}))):b(e,i,o),firstRender:!1}},t.handleExited=function(e,n){var t=h(this.props.children);e.key in t||(e.props.onExited&&e.props.onExited(n),this.mounted&&this.setState((function(n){var t=(0,m.Z)({},n.children);return delete t[e.key],{children:t}})))},t.render=function(){var e=this.props,n=e.component,t=e.childFactory,r=(0,f.Z)(e,["component","childFactory"]),i=this.state.contextValue,o=g(this.state.children).map(t);return delete r.appear,delete r.enter,delete r.exit,null===n?a.createElement(v.Z.Provider,{value:i},o):a.createElement(v.Z.Provider,{value:i},a.createElement(n,r,o))},n}(a.Component);y.propTypes={},y.defaultProps={component:"div",childFactory:function(e){return e}};var x=y,j=t(5989),k=t(6743),w=t(6010),D=t(8085),O=t(3935),E=t(7420),S=t.n(E);function C(e){var n=e.open,t=e.title,i=e.children,o=e.handleClose,a=e.className,l=e.noPadding;return n?(0,O.createPortal)((0,r.jsx)("div",{className:S().backdrop,children:(0,r.jsx)("div",{className:S().inner,onClick:o,children:(0,r.jsxs)("dialog",{open:n,className:(0,w.Z)(S().root,a&&a),onClick:function(e){return e.stopPropagation()},children:[(0,r.jsx)(u.z,{disableBackground:!0,className:S().close,onClick:o,children:(0,r.jsx)(D.x8,{})}),t&&(0,r.jsx)("div",{className:S().title,children:t}),(0,r.jsx)("div",{className:(0,w.Z)(!l&&S().content),children:i})]})})}),window.document.getElementById("themed-app")):null}var N=t(7753),A=t.n(N),I=t(3044),P=t(5762);function z(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function R(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function L(e){return function(e){if(Array.isArray(e))return z(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"===typeof e)return z(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return z(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var q=[{icon:(0,r.jsx)(D.JP,{}),label:"Reddit",link:"https://www.reddit.com/r/cardgames/comments/nf47ps/were_not_really_strangers_online"},{icon:(0,r.jsx)(D.Tf,{}),label:"GitHub",link:"https://github.com/jonathan-lph/wnrs/tree/v2"},{icon:(0,r.jsx)(D.$u,{}),label:"Tip Jar",link:"https://www.paypal.me/jonathanlph"}];function T(e){var n=(0,i.useRouter)(),t=(0,a.useState)([!1,!1]),o=t[0],l=t[1],c="".concat(n.query.seed,"-").concat(n.query.decks),s=function(){return[{label:"Share Link",content:decodeURIComponent(location.href),clipboard:"Join me in a game of WNRS!\n".concat(decodeURIComponent(location.href))},{label:"Seed",content:c,clipboard:"Join me in a game of WNRS!\nLoad a game with seed '".concat(c,"' at ").concat(location.origin,".")}]},d=function(e,n){return function(t){navigator.clipboard.writeText(e);var r=L(o);r[n]=!0,(0,P.Kz)((0,P.IH)(),"share_copy",{type:s()[n].label}),l(r),setTimeout((function(){r[n]=!1,l(L(r))}),2e3)}},f=function(e,n){return function(t){(0,P.Kz)((0,P.IH)(),"link_".concat(n)),window.open(e)}};return"undefined"===typeof location?null:(0,r.jsxs)(C,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){R(e,n,t[n])}))}return e}({title:"Sharing"},e,{children:[s().map((function(e,n){var t=e.label,i=e.content,a=e.clipboard;return(0,r.jsxs)("div",{className:A().section,children:[(0,r.jsx)("div",{className:A().title,children:t}),(0,r.jsxs)("div",{className:A().preview,children:[(0,r.jsx)("div",{className:A().content,children:i}),(0,r.jsx)(u.z,{onClick:d(a,n),children:o[n]?(0,r.jsx)(D.dR,{}):(0,r.jsx)(D.CK,{})})]})]},t)})),(0,r.jsx)("div",{className:A().links,children:q.map((function(e){var n=e.icon,t=e.label,i=e.link;return(0,r.jsx)(u.z,{onClick:f(i,t),children:n},t)}))}),(0,r.jsxs)("footer",{className:A().footer,children:["Developed by ",(0,r.jsx)("a",{href:"https://github.com/jonathan-lph",rel:"noreferrer",target:"_blank",children:I.aC})," - ",(0,r.jsx)("a",{href:"https://docs.google.com/document/d/1LrcuAy6t8woynvdQSc9wKWoyLY3aSGbcJCYH-9l-qBw/edit?usp=sharing",rel:"noreferrer",target:"_blank",children:"Privacy Policy"}),(0,r.jsx)("br",{}),"v".concat(I.i8," - ").concat(I.iF)]})]}))}var M=t(5694),B=t(3694),F=t.n(B);function U(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function H(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){U(e,n,t[n])}))}return e}function K(e){var n,t,o,s=(0,i.useRouter)(),d=(0,a.useState)(null),f=d[0],m=d[1];return(0,a.useEffect)((function(){m(null)}),[e.open]),(0,r.jsx)(C,H({noPadding:!0},e,{className:F().dialog,children:(0,r.jsx)(j.Z,{children:(0,r.jsx)(k.Z,{addEndListener:function(e,n){return e.addEventListener("transitionend",n,!1)},classNames:{enter:F()["fade-enter"],enterActive:F()["fade-enter-active"],exit:F()["fade-exit"],exitActive:F()["fade-exit-right-active"]},children:f?(0,r.jsxs)("div",{className:(0,w.Z)((o={},U(o,F().root,!0),U(o,F()[c[f].theme],!0),o)),children:[(0,r.jsx)(u.z,{onClick:function(e){return m(null)},disableBackground:!0,className:F().back,children:(0,r.jsx)(D.Xd,{})}),(0,r.jsxs)("div",{className:F().info,children:[(0,r.jsx)("div",{className:F().title,children:c[f].name}),(0,r.jsx)("p",{className:F().description,children:null!==(t=null===(n=c[f].backDesc)||void 0===n?void 0:n.join("\n\n"))&&void 0!==t?t:c[f].short_name}),c[f].preview&&(0,r.jsx)("p",{className:F().preview,children:c[f].preview.join("\n\n")}),c[f].instruction&&(0,r.jsx)("p",{className:F().instruction,children:c[f].instruction.join("\n\n")})]}),(0,r.jsx)(u.z,{disableBackground:!0,className:F().download,onClick:function(e){var n=function(e){return c[f][e]?c[f][e].map((function(e){return"".concat((0,l.Af)(e))})).join("\n")+"\n\n":""},t="";t+=(0,l.Af)(c[f].name)+"\n\n",t+=n("backDesc"),t+="----------\n\n",t+=n("preview"),t+=n("instruction"),t+=n(""),t+="----------\n",c[f].levels.forEach((function(e,n){t+="\n".concat(e.toUpperCase(),"\n==========\n\n"),t+=c[f].questions[n].map((function(e){return"".concat((0,l.Af)(e))})).join("\n")+"\n"}));var r=document.createElement("a");r.setAttribute("href","data:text/plain;charset=utf-8,"+t),r.setAttribute("download","".concat((0,l.Af)(c[f].name).split(" ").join("_"),".txt")),r.style.display="none",document.body.appendChild(r),r.click(),document.body.removeChild(r)},children:(0,r.jsx)(D.UW,{})})]}):(0,r.jsx)("div",{className:F().listContainer,children:(0,r.jsx)(M.l,{init:(0,l.E$)(s.query.decks),className:F().list,onChange:function(e){(0,P.Kz)((0,P.IH)(),"decks",e),s.replace({pathname:s.pathname,query:H({},s.query,{decks:(0,l.Mr)(e)})},void 0,{shallow:!0})},onInfoClick:function(e){return function(n){(0,P.Kz)((0,P.IH)(),"decks_info",{deck:e}),m(e)}}})})},f)})}))}var Z=JSON.parse('{"C":"Pick a card.\\n Read it out loud to your partner(s) and listen to their answer.","g":{"level_one":{"label":"Level 1 - Perception","content":"This level is about gaining perspective on what first impressions we give off and challenging the assumptions we make about others."},"level_two":{"label":"Level 2 - Connection","content":"This round is about asking the rarely asked questions and connecting on a deeper level."},"level_three":{"label":"Level 3 - Reflection","content":"Time to reflect on your game experience."},"wildcard":{"label":"Wildcard","content":"If you draw a wildcard, your partner must complete the instructions unless otherwise stated."}}}'),V=t(2447),W=t.n(V);function G(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function X(e){return(0,r.jsxs)(C,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){G(e,n,t[n])}))}return e}({title:"How To Play"},e,{children:[(0,r.jsx)("p",{className:W().general,children:Z.C}),(0,r.jsx)("dl",{className:W().levels,children:Object.values(Z.g).map((function(e){var n=e.label,t=e.content;return(0,r.jsxs)("div",{className:W().level,children:[(0,r.jsx)("dt",{className:W().title,children:n}),(0,r.jsx)("dd",{className:W().content,children:t})]},n)}))})]}))}var Y=t(3374),J=t(5589),$=t.n(J);function Q(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function ee(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function ne(e){return function(e){if(Array.isArray(e))return Q(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"===typeof e)return Q(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Q(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function te(e){var n=(0,Y.F)(),t=n.theme,i=n.toggleTheme,o=Object.values(c).reduce((function(e,n){var t=n.short_name,r=n.theme;return e.find((function(e){return e.theme===r}))?e:ne(e).concat([{short_name:t,theme:r}])}),[]);return(0,r.jsx)(C,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){ee(e,n,t[n])}))}return e}({title:"Change Theme",noPadding:!0},e,{children:(0,r.jsx)("div",{className:$().themes,children:o.map((function(e){var n=e.short_name,o=e.theme;return(0,r.jsxs)("div",{className:$().theme,onClick:i(o),children:[o===t?(0,r.jsx)(D.dR,{className:$().tick}):(0,r.jsx)("div",{className:$().empty}),(0,r.jsx)("div",{className:$().nameDiv,children:(0,r.jsx)("div",{className:$().name,children:n})}),(0,r.jsx)("div",{className:$()["norm-".concat(o)],children:"WNRS"}),(0,r.jsx)("div",{className:$()["wild-".concat(o)],children:"WNRS"})]},n)}))})}))}function re(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function ie(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){re(e,n,t[n])}))}return e}var oe=[{icon:(0,r.jsx)(D.WW,{}),label:"help"},{icon:(0,r.jsx)(D.S5,{}),label:"deck"},{icon:(0,r.jsx)(D.CK,{}),label:"copy",copiedIcon:(0,r.jsx)(D.dR,{})},{icon:(0,r.jsx)(D.rU,{}),label:"link"},{icon:(0,r.jsx)(D.YI,{}),label:"theme"}];function ae(e){var n=e.question,t=e.className,i=(0,a.useState)({help:!1,deck:!1,link:!1,theme:!1}),o=i[0],c=i[1],s=(0,a.useState)(!1),d=s[0],f=s[1],m=function(e){return function(n){return c(ie({},o,re({},e,!1)))}},_=function(e){navigator.clipboard.writeText((0,l.Af)(n)),(0,P.Kz)((0,P.IH)(),"question_copy"),f(!0),setTimeout((function(){return f(!1)}),2e3)};return(0,r.jsxs)("div",{className:(0,w.Z)(t&&t),children:[oe.map((function(e){var n,t=e.icon,i=e.label,a=e.copiedIcon;return(0,r.jsx)(u.z,{themed:!0,onClick:"copy"===i?_:(n=i,function(e){(0,P.Kz)((0,P.IH)(),"dialog_".concat(n)),c(ie({},o,re({},n,!0)))}),children:d&&null!==a&&void 0!==a?a:t},i)})),(0,r.jsx)(X,{open:o.help,handleClose:m("help")}),(0,r.jsx)(K,{open:o.deck,handleClose:m("deck")}),(0,r.jsx)(T,{open:o.link,handleClose:m("link")}),(0,r.jsx)(te,{open:o.theme,handleClose:m("theme")})]})}function le(e){var n,t=e.onCardChange,o=e.onLevelChange,l=e.cards,c=e.levels,s=(0,i.useRouter)(),f=(0,a.useState)(0),m=f[0],_=f[1],v=(0,a.useState)(0),h=v[0],p=v[1];return(0,a.useEffect)((function(){t&&t(h)}),[h]),(0,a.useEffect)((function(){p(0),o&&o(m)}),[m]),(0,a.useEffect)((function(){p(0),_(0)}),[null===(n=s.query)||void 0===n?void 0:n.decks]),(0,r.jsxs)("nav",{className:d().navbar,children:[(0,r.jsx)(u.z,{themed:!0,onClick:function(){_(--m),(0,P.Kz)((0,P.IH)(),"level_prev")},disabled:m<=0,children:(0,r.jsx)(D.At,{})}),(0,r.jsx)(u.z,{themed:!0,onClick:function(){p(--h),(0,P.Kz)((0,P.IH)(),"card_prev")},disabled:h<=0,children:(0,r.jsx)(D.Xd,{})}),(0,r.jsxs)("div",{children:["Level ",m+1," - ",h+1," / ",l]}),(0,r.jsx)(u.z,{themed:!0,onClick:function(){p(++h),(0,P.Kz)((0,P.IH)(),"card_next")},disabled:h>=l-1,children:(0,r.jsx)(D.ol,{})}),(0,r.jsx)(u.z,{themed:!0,onClick:function(){_(++m),(0,P.Kz)((0,P.IH)(),"level_next")},disabled:m>=c-1,children:(0,r.jsx)(D.Ct,{})})]})}var ce=t(9008);function ue(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function se(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,i,o=[],a=!0,l=!1;try{for(t=t.call(e);!(a=(r=t.next()).done)&&(o.push(r.value),!n||o.length!==n);a=!0);}catch(c){l=!0,i=c}finally{try{a||null==t.return||t.return()}finally{if(l)throw i}}return o}}(e,n)||fe(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function de(e){return function(e){if(Array.isArray(e))return ue(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||fe(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function fe(e,n){if(e){if("string"===typeof e)return ue(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(t):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?ue(e,n):void 0}}function me(){var e,n,t,s,f,m,_=(0,i.useRouter)(),v=(0,Y.F)().themeColor,h=(0,a.useState)(0),p=h[0],b=h[1],g=(0,a.useState)(0),y=g[0],w=g[1],O=(null===(e=_.query)||void 0===e?void 0:e.names)?decodeURIComponent(_.query.names).split(","):null,E=function(){var e,n;if(!(null===(e=_.query)||void 0===e?void 0:e.decks)||!(null===(n=_.query)||void 0===n?void 0:n.seed))return null;var t=(0,l.E$)(_.query.decks);return Object.entries(t).reduce((function(e,n){var t=se(n,2),r=t[0];if(!t[1])return e;var i,o=function(e){var n=e.theme,t=e.crossover,r=e.edition,i=e.noWNRS;return e.questions.map((function(e){return e.map((function(e){return{question:e,meta:{theme:n,crossover:t,edition:r,noWNRS:i}}}))}))}(c[r]);return 0===e.length?o:e.map((function(e,n){return de(e).concat(de(null!==(i=o[n])&&void 0!==i?i:[]))}))}),[])}();return(0,a.useEffect)((function(){var e,n;_.isReady&&((null===(e=_.query)||void 0===e?void 0:e.decks)&&(null===(n=_.query)||void 0===n?void 0:n.seed)||_.replace("/","/"))}),[_]),(0,a.useEffect)((function(){document.body.style=""}),[]),(null===(n=_.query)||void 0===n?void 0:n.decks)&&(null===(t=_.query)||void 0===t?void 0:t.seed)?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(ce.default,{children:(0,r.jsx)("meta",{name:"theme-color",content:v})}),(0,r.jsx)("main",{className:d().root,children:(0,r.jsxs)("div",{className:d().inner,children:[(0,r.jsx)(o.default,{href:"/",passHref:!0,children:(0,r.jsxs)(u.z,{themed:!0,disableBackground:!0,className:d().home,children:[(0,r.jsx)(D.Xd,{}),"Main Page"]})}),O&&(0,r.jsx)("div",{className:d().names,children:"".concat(O[y%O.length],"'s Turn")}),(0,r.jsx)(j.Z,{children:(0,r.jsx)(k.Z,{addEndListener:function(e,n){return e.addEventListener("transitionend",n,!1)},classNames:{enter:d()["fade-enter"],enterActive:d()["fade-enter-active"],exit:d()["fade-exit"],exitActive:d()["fade-exit-active"]},children:(0,r.jsx)(x,{className:d().cards,children:(0,l.TV)(E[p],_.query.seed).slice(0,y+1).map((function(e,n){var t=e.question,i=e.meta;return(0,r.jsx)(k.Z,{in:n<y+1,timeout:500,classNames:{enter:d()["drop-enter"],enterActive:d()["drop-enter-active"],exit:d()["drop-exit"],exitActive:d()["drop-exit-active"]},mountOnEnter:!0,unmountOnExit:!0,children:(0,r.jsx)(u.Z,{content:t,meta:i,className:d().card})},n)}))})},p)}),(0,r.jsx)(le,{onCardChange:function(e){return w(e)},onLevelChange:function(e){return b(e)},levels:E.length,cards:null===(s=E[p])||void 0===s?void 0:s.length}),(0,r.jsx)(ae,{className:d().miscBar,question:null===(f=(0,l.TV)(E[p],_.query.seed))||void 0===f||null===(m=f[y])||void 0===m?void 0:m.question})]})})]}):null}},3694:function(e){e.exports={root:"deckDialog_root__ojk5n",info:"deckDialog_info__yGTOz",description:"deckDialog_description__1eEqY",title:"deckDialog_title__gN_kV","drop-enter":"deckDialog_drop-enter__yYhWq","drop-exit":"deckDialog_drop-exit__pSTyf","drop-enter-active":"deckDialog_drop-enter-active___pBuf","drop-exit-active":"deckDialog_drop-exit-active__LicXg","fade-enter":"deckDialog_fade-enter__AlT0h","fade-exit":"deckDialog_fade-exit__eFG1j","fade-enter-active":"deckDialog_fade-enter-active__bw7kZ","fade-exit-active":"deckDialog_fade-exit-active__Gyi_m","fade-exit-right-active":"deckDialog_fade-exit-right-active__FAX4Z",dialog:"deckDialog_dialog__EX8EZ",listContainer:"deckDialog_listContainer__MLVKm",list:"deckDialog_list__KAwQk",main:"deckDialog_main__xh6aR",selfLove:"deckDialog_selfLove___05l4",voting:"deckDialog_voting__ypRCb",race:"deckDialog_race__9TVRe",ownIt:"deckDialog_ownIt__Umv20",valentino:"deckDialog_valentino__ONcCO",cann:"deckDialog_cann__yRrMV",bumbleDate:"deckDialog_bumbleDate__o1h7g",bumbleBizz:"deckDialog_bumbleBizz__OTTOO",bumbleBFF:"deckDialog_bumbleBFF__mH0Lm",back:"deckDialog_back__lYIzC",preview:"deckDialog_preview__TU0Rg",instruction:"deckDialog_instruction__uc4FW",download:"deckDialog_download__157tq"}},7420:function(e){e.exports={title:"dialog_title__AsdFb","drop-enter":"dialog_drop-enter__24y_p","drop-exit":"dialog_drop-exit__nR38r","drop-enter-active":"dialog_drop-enter-active__pfrxV","drop-exit-active":"dialog_drop-exit-active__YzhkY","fade-enter":"dialog_fade-enter__MpNep","fade-exit":"dialog_fade-exit__xyYhG","fade-enter-active":"dialog_fade-enter-active__zVJIc","fade-exit-active":"dialog_fade-exit-active__VJ6aB","fade-exit-right-active":"dialog_fade-exit-right-active__j9g9y",backdrop:"dialog_backdrop__8nHUU",inner:"dialog_inner__L5Q2_",root:"dialog_root__SUyzl",content:"dialog_content__HlUyj",close:"dialog_close__utvMo"}},2447:function(e){e.exports={levels:"helpDialog_levels__64OVz",title:"helpDialog_title__S0HkF",general:"helpDialog_general__R0uWh",content:"helpDialog_content__j4mec",level:"helpDialog_level__fxB7m"}},7753:function(e){e.exports={title:"linkDialog_title__1PgU5",preview:"linkDialog_preview__2Mn3E",content:"linkDialog_content__ESnbi",section:"linkDialog_section__TprhS",links:"linkDialog_links___A8Fo",footer:"linkDialog_footer__Gvkka"}},5589:function(e){e.exports={theme:"themeDialog_theme__Lu9Ub",themes:"themeDialog_themes__4UD1E",nameDiv:"themeDialog_nameDiv__VX_vp",name:"themeDialog_name__Be0du",tick:"themeDialog_tick___jOoU","norm-main":"themeDialog_norm-main__LZv9U","wild-main":"themeDialog_wild-main__BXjay","norm-selfLove":"themeDialog_norm-selfLove__ACYlX","wild-selfLove":"themeDialog_wild-selfLove__M2nje","norm-voting":"themeDialog_norm-voting__q7W38","wild-voting":"themeDialog_wild-voting__i9pA2","norm-race":"themeDialog_norm-race__o6T4G","wild-race":"themeDialog_wild-race__DnIbq","norm-ownIt":"themeDialog_norm-ownIt__QdDjC","wild-ownIt":"themeDialog_wild-ownIt__n98iw","norm-valentino":"themeDialog_norm-valentino__v_SEb","wild-valentino":"themeDialog_wild-valentino__9t9MY","norm-cann":"themeDialog_norm-cann__KNmRn","wild-cann":"themeDialog_wild-cann__gsJL8","norm-bumbleDate":"themeDialog_norm-bumbleDate__9bbzG","wild-bumbleDate":"themeDialog_wild-bumbleDate__qbStI","norm-bumbleBizz":"themeDialog_norm-bumbleBizz__nGV46","wild-bumbleBizz":"themeDialog_wild-bumbleBizz__H7zZK","norm-bumbleBFF":"themeDialog_norm-bumbleBFF__z_jwG","wild-bumbleBFF":"themeDialog_wild-bumbleBFF__HKoPn"}},2514:function(e){e.exports={names:"main_names__8ekCP",home:"main_home__pM5Kp",navbar:"main_navbar__uQcwk","drop-enter":"main_drop-enter__00e61","drop-exit":"main_drop-exit__f5Iir","drop-enter-active":"main_drop-enter-active__fXxzl","drop-exit-active":"main_drop-exit-active__vPF__","fade-enter":"main_fade-enter__xJjR4","fade-exit":"main_fade-exit__sD3CZ","fade-enter-active":"main_fade-enter-active__m4Dnw","fade-exit-active":"main_fade-exit-active__8wZVI","fade-exit-right-active":"main_fade-exit-right-active__CPBSx",root:"main_root___VZ5o",cards:"main_cards__qAjHr",card:"main_card__RShcG",miscBar:"main_miscBar__2iBF1"}},1664:function(e,n,t){e.exports=t(8418)}},function(e){e.O(0,[799,579,774,888,179],(function(){return n=7138,e(e.s=n);var n}));var n=e.O();_N_E=n}]);