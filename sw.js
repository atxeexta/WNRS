if(!self.define){let e,s={};const n=(n,a)=>(n=new URL(n+".js",a).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(a,t)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let c={};const o=e=>n(e,i),r={module:{uri:i},exports:c,require:o};s[i]=Promise.all(a.map((e=>r[e]||o(e)))).then((e=>(t(...e),c)))}}define(["./workbox-1846d813"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/2uDX5Pae8Pv4PLopq9sUU/_buildManifest.js",revision:"2uDX5Pae8Pv4PLopq9sUU"},{url:"/_next/static/2uDX5Pae8Pv4PLopq9sUU/_middlewareManifest.js",revision:"2uDX5Pae8Pv4PLopq9sUU"},{url:"/_next/static/2uDX5Pae8Pv4PLopq9sUU/_ssgManifest.js",revision:"2uDX5Pae8Pv4PLopq9sUU"},{url:"/_next/static/chunks/579-645ef0e3f89a4f45.js",revision:"2uDX5Pae8Pv4PLopq9sUU"},{url:"/_next/static/chunks/799-3b6d2afaa3639e88.js",revision:"2uDX5Pae8Pv4PLopq9sUU"},{url:"/_next/static/chunks/framework-91d7f78b5b4003c8.js",revision:"2uDX5Pae8Pv4PLopq9sUU"},{url:"/_next/static/chunks/main-227e205eee84911a.js",revision:"2uDX5Pae8Pv4PLopq9sUU"},{url:"/_next/static/chunks/pages/_app-6a9b0aad2f8b90f0.js",revision:"2uDX5Pae8Pv4PLopq9sUU"},{url:"/_next/static/chunks/pages/_error-2280fa386d040b66.js",revision:"2uDX5Pae8Pv4PLopq9sUU"},{url:"/_next/static/chunks/pages/game-521f8c2c96e5ecb6.js",revision:"2uDX5Pae8Pv4PLopq9sUU"},{url:"/_next/static/chunks/pages/index-f5af1b5b3f71bac5.js",revision:"2uDX5Pae8Pv4PLopq9sUU"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"2uDX5Pae8Pv4PLopq9sUU"},{url:"/_next/static/chunks/webpack-851c3983ee4bf085.js",revision:"2uDX5Pae8Pv4PLopq9sUU"},{url:"/_next/static/css/08924d06a9987aab.css",revision:"2uDX5Pae8Pv4PLopq9sUU"},{url:"/_next/static/css/708ed3589a34da9d.css",revision:"2uDX5Pae8Pv4PLopq9sUU"},{url:"/_next/static/css/fc2ffdf533f80fe8.css",revision:"2uDX5Pae8Pv4PLopq9sUU"},{url:"/banner.png",revision:"3b70813f272241d8d5b0f0ce52288faa"},{url:"/favicon.ico",revision:"20913b8de5ab5e95d089d72ebafb7d70"},{url:"/logos/logo-maskable.png",revision:"f5c1498facf485569835e8e3c9758d7e"},{url:"/logos/logo180.png",revision:"0b59e6bf68c0705bd34302617f7c1580"},{url:"/logos/logo192.png",revision:"604116b59480c1f6ca890c0771c7667b"},{url:"/logos/logo512.png",revision:"4a8c27e37bb37fcc71520b95db970146"},{url:"/manifest.json",revision:"f50cc095a1fd9d5ac62510e984907290"},{url:"/robots.txt",revision:"735ab4f94fbcd57074377afca324c813"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
