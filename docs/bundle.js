!function(e){function n(n){for(var t,o,a=n[0],i=n[1],u=0,_=[];u<a.length;u++)o=a[u],r[o]&&_.push(r[o][0]),r[o]=0;for(t in i)Object.prototype.hasOwnProperty.call(i,t)&&(e[t]=i[t]);for(c&&c(n);_.length;)_.shift()()}var t={},r={0:0};var o={};var a={2:function(){return{"./rust_webpack":{__wbindgen_string_new:function(e,n){return t[1].exports.__wbindgen_string_new(e,n)},__wbindgen_object_drop_ref:function(e){return t[1].exports.__wbindgen_object_drop_ref(e)},__wbg_new_59cb74e423758ede:function(){return t[1].exports.__wbg_new_59cb74e423758ede()},__wbg_stack_558ba5917b466edd:function(e,n){return t[1].exports.__wbg_stack_558ba5917b466edd(e,n)},__wbg_error_4bb6c2a97407129a:function(e,n){return t[1].exports.__wbg_error_4bb6c2a97407129a(e,n)},__widl_f_put_image_data_CanvasRenderingContext2D:function(e,n,r,o,a){return t[1].exports.__widl_f_put_image_data_CanvasRenderingContext2D(e,n,r,o,a)},__widl_f_new_with_u8_clamped_array_and_sh_ImageData:function(e,n,r,o,a){return t[1].exports.__widl_f_new_with_u8_clamped_array_and_sh_ImageData(e,n,r,o,a)},__widl_f_log_1_:function(e){return t[1].exports.__widl_f_log_1_(e)},__wbindgen_debug_string:function(e,n){return t[1].exports.__wbindgen_debug_string(e,n)},__wbindgen_throw:function(e,n){return t[1].exports.__wbindgen_throw(e,n)}}}}};function i(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var n=[],t=r[e];if(0!==t)if(t)n.push(t[2]);else{var u=new Promise(function(n,o){t=r[e]=[n,o]});n.push(t[2]=u);var _,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=function(e){return i.p+""+e+".bundle.js"}(e),_=function(n){s.onerror=s.onload=null,clearTimeout(c);var t=r[e];if(0!==t){if(t){var o=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src,i=new Error("Loading chunk "+e+" failed.\n("+o+": "+a+")");i.type=o,i.request=a,t[1](i)}r[e]=void 0}};var c=setTimeout(function(){_({type:"timeout",target:s})},12e4);s.onerror=s.onload=_,document.head.appendChild(s)}return({1:[2]}[e]||[]).forEach(function(e){var t=o[e];if(t)n.push(t);else{var r,u=a[e](),_=fetch(i.p+""+{2:"ed393eea16efebbcb858"}[e]+".module.wasm");if(u instanceof Promise&&"function"==typeof WebAssembly.compileStreaming)r=Promise.all([WebAssembly.compileStreaming(_),u]).then(function(e){return WebAssembly.instantiate(e[0],e[1])});else if("function"==typeof WebAssembly.instantiateStreaming)r=WebAssembly.instantiateStreaming(_,u);else{r=_.then(function(e){return e.arrayBuffer()}).then(function(e){return WebAssembly.instantiate(e,u)})}n.push(o[e]=r.then(function(n){return i.w[e]=(n.instance||n).exports}))}}),Promise.all(n)},i.m=e,i.c=t,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="",i.oe=function(e){throw console.error(e),e},i.w={};var u=window.webpackJsonp=window.webpackJsonp||[],_=u.push.bind(u);u.push=n,u=u.slice();for(var s=0;s<u.length;s++)n(u[s]);var c=_;i(i.s=0)}([function(e,n,t){let r={bounds:{ymin:-1,ymax:1,xmin:-2.5,xmax:1},canvas:null};t.e(1).then(t.bind(null,1)).then(e=>{window.module=e,e.run(),r.canvas=document.getElementById("mandelbrot").getContext("2d"),r.canvas.canvas.width=640,r.canvas.canvas.height=480,window.module.render(r.canvas,r.canvas.canvas.width,r.canvas.canvas.height,r.bounds.xmin,r.bounds.xmax,r.bounds.ymin,r.bounds.ymax)})}]);