var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function s(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function a(t,e){t.appendChild(e)}function r(t,e,n){t.insertBefore(e,n||null)}function c(t){t.parentNode.removeChild(t)}function u(t){return document.createElement(t)}function l(t){return document.createTextNode(t)}function d(){return l(" ")}function f(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function h(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function p(t,e){e=""+e,t.data!==e&&(t.data=e)}function g(t,e,n,o){t.style.setProperty(e,n,o?"important":"")}function m(t,e,n){t.classList[n?"add":"remove"](e)}let $;function b(t){$=t}function v(){if(!$)throw new Error("Function called outside component initialization");return $}function w(t){v().$$.on_destroy.push(t)}function y(){const t=v();return(e,n)=>{const o=t.$$.callbacks[e];if(o){const s=function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(e,n);o.slice().forEach(e=>{e.call(t,s)})}}}const x=[],k=[],j=[],z=[],C=Promise.resolve();let E=!1;function S(t){j.push(t)}function _(t){z.push(t)}function P(){const t=new Set;do{for(;x.length;){const t=x.shift();b(t),I(t.$$)}for(;k.length;)k.pop()();for(let e=0;e<j.length;e+=1){const n=j[e];t.has(n)||(n(),t.add(n))}j.length=0}while(x.length);for(;z.length;)z.pop()();E=!1}function I(t){null!==t.fragment&&(t.update(),o(t.before_update),t.fragment&&t.fragment.p(t.ctx,t.dirty),t.dirty=[-1],t.after_update.forEach(S))}const M=new Set;let O;function A(t,e){t&&t.i&&(M.delete(t),t.i(e))}function H(t,e,n,o){if(t&&t.o){if(M.has(t))return;M.add(t),O.c.push(()=>{M.delete(t),o&&(n&&t.d(1),o())}),t.o(e)}}function L(t,e,n){const o=t.$$.props[e];void 0!==o&&(t.$$.bound[o]=n,n(t.$$.ctx[o]))}function N(t){t&&t.c()}function R(t,n,i){const{fragment:a,on_mount:r,on_destroy:c,after_update:u}=t.$$;a&&a.m(n,i),S(()=>{const n=r.map(e).filter(s);c?c.push(...n):o(n),t.$$.on_mount=[]}),u.forEach(S)}function T(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function D(t,e){-1===t.$$.dirty[0]&&(x.push(t),E||(E=!0,C.then(P)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function J(e,s,i,a,r,c,u=[-1]){const l=$;b(e);const d=s.props||{},f=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:r,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(l?l.$$.context:[]),callbacks:n(),dirty:u};let h=!1;f.ctx=i?i(e,d,(t,n,o=n)=>(f.ctx&&r(f.ctx[t],f.ctx[t]=o)&&(f.bound[t]&&f.bound[t](o),h&&D(e,t)),n)):[],f.update(),h=!0,o(f.before_update),f.fragment=!!a&&a(f.ctx),s.target&&(s.hydrate?f.fragment&&f.fragment.l(function(t){return Array.from(t.childNodes)}(s.target)):f.fragment&&f.fragment.c(),s.intro&&A(e.$$.fragment),R(e,s.target,s.anchor),P()),b(l)}class q{$destroy(){T(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}var B=(t,e)=>{let n=new Set(Object.keys(e));return n.forEach(n=>{t.style.setProperty(`--${n}`,e[n])}),{update(e){const o=new Set(Object.keys(e));o.forEach(o=>{t.style.setProperty(`--${o}`,e[o]),n.delete(o)}),n.forEach(e=>t.style.removeProperty(`--${e}`)),n=o}}};function F(e){let n,o;return{c(){n=u("div"),h(n,"class","char svelte-1w6jmj"),g(n,"bottom",e[0]+"px"),m(n,"jumping",e[3]),m(n,"walking",e[4]),m(n,"paused",e[1])},m(t,s){r(t,n,s),e[11](n),o=B.call(null,n,e[5])||{}},p(t,[e]){1&e&&g(n,"bottom",t[0]+"px"),8&e&&m(n,"jumping",t[3]),16&e&&m(n,"walking",t[4]),2&e&&m(n,"paused",t[1])},i:t,o:t,d(t){t&&c(n),e[11](null),o&&s(o.destroy)&&o.destroy()}}}function V(t,e,n){let o,s,{tileSize:i}=e,{paused:a}=e,r=!1,c=!0;function u(){n(3,r=!1),n(4,c=!0)}return w(()=>{clearInterval(s)}),t.$set=t=>{"tileSize"in t&&n(0,i=t.tileSize),"paused"in t&&n(1,a=t.paused)},[i,a,o,r,c,{jumpTime:".3s"},u,function(){n(3,r=!0),n(4,c=!1),clearTimeout(s),s=setTimeout(u,500)},function(){return o.getBoundingClientRect()},function(){return r},s,function(t){k[t?"unshift":"push"](()=>{n(2,o=t)})}]}class G extends q{constructor(t){super(),J(this,t,V,F,i,{tileSize:0,paused:1,walk:6,jump:7,getPosition:8,isJumping:9})}get walk(){return this.$$.ctx[6]}get jump(){return this.$$.ctx[7]}get getPosition(){return this.$$.ctx[8]}get isJumping(){return this.$$.ctx[9]}}function K(t){return new Promise((e,n)=>{t.image=new Image,t.image.src=t.path,t.image.onload=()=>{e()}})}var Q={loadSingle:K,load:async function(t){const e=[];Object.keys(t).forEach(n=>{e.push(K(t[n]))}),await Promise.all(e)}};function U(e){let n,o,s;return{c(){n=u("canvas"),o=d(),s=u("div"),h(n,"width",e[2]),h(n,"height",e[1])},m(t,i){r(t,n,i),e[17](n),r(t,o,i),r(t,s,i),e[18](s)},p(t,[e]){4&e&&h(n,"width",t[2]),2&e&&h(n,"height",t[1])},i:t,o:t,d(t){t&&c(n),e[17](null),t&&c(o),t&&c(s),e[18](null)}}}function W(t,e,n){const o=y(),s={ground:{path:"assets/background/ground.jpg"},grass:{path:"assets/background/grass.jpg"},mountain:{path:"assets/background/mountain.jpg"}};let i,a,r,c,{canvas:u}=e,{height:l}=e,{obstacleHeight:d}=e,{tileSize:f}=e,{width:h}=e,p=Date.now(),g=0,m=[];function $(){const t=Math.floor(20*Math.random());let e=void 0,n=s.mountain.image;t>13&&(g<4?g++:(e=document.createElement("div"),e.className="obstacle",e.style.position="absolute",e.style.width=f+"px",e.style.height=d+"px",e.style.backgroundImage='url("assets/background/obstacle.png")',g=0));const o=Math.floor(20*Math.random());return o<13?n=s.ground.image:o<17&&(n=s.grass.image),{ground:n,obstacle:e}}return t.$set=t=>{"canvas"in t&&n(0,u=t.canvas),"height"in t&&n(1,l=t.height),"obstacleHeight"in t&&n(4,d=t.obstacleHeight),"tileSize"in t&&n(5,f=t.tileSize),"width"in t&&n(2,h=t.width)},[u,l,h,c,d,f,async function(){r=u.getContext("2d"),await Q.load(s),a=s.ground.image.height,i=s.ground.image.width,r.fillStyle="#6095ff",r.fillRect(0,0,u.width,u.height);for(let t=0;t<h;t+=i)m.push($())},function(){for(let t=0;t<m.length;t++){const e=t*i,n=l-a;r.drawImage(m[t].ground,e,n),m[t].obstacle&&(m[t].obstacle.style.left=e-f+"px",m[t].obstacle.style.top=l-f-d+"px",c.appendChild(m[t].obstacle))}m[0].obstacle&&c.removeChild(m[0].obstacle),m.shift(),m.push($()),o("slide",m)},i,a,r,g,m,o,s,p,$,function(t){k[t?"unshift":"push"](()=>{n(0,u=t)})},function(t){k[t?"unshift":"push"](()=>{n(3,c=t)})}]}class X extends q{constructor(t){super(),J(this,t,W,U,i,{canvas:0,height:1,obstacleHeight:4,tileSize:5,width:2,init:6,draw:7})}get init(){return this.$$.ctx[6]}get draw(){return this.$$.ctx[7]}}function Y(e){let n;return{c(){n=u("div"),h(n,"class","sky svelte-1srbde5")},m(t,e){r(t,n,e)},p:t,i:t,o:t,d(t){t&&c(n)}}}function Z(t,e){return Math.floor(Math.random()*(e-t+1))+t}function tt(t,e,n){const o={single:{path:"assets/background/cloud-single.png"},multiple:{path:"assets/background/cloud-multiple.png"}};let{canvas:s}=e,{height:i}=e,{width:a}=e;return t.$set=t=>{"canvas"in t&&n(0,s=t.canvas),"height"in t&&n(1,i=t.height),"width"in t&&n(2,a=t.width)},[s,i,a,async function(){await Q.load(o);let t=s.getContext("2d");const e=Z(5,15);let n=0;for(;n<e;){const e=Z(0,a-2*o.single.image.width);if(e<a){const s=Z(0,i/2);s%2==0?t.drawImage(o.single.image,e,s):t.drawImage(o.multiple.image,e,s),n++}}}]}class et extends q{constructor(t){super(),J(this,t,tt,Y,i,{canvas:0,height:1,width:2,init:3})}get init(){return this.$$.ctx[3]}}function nt(t){let e,n,s,i,$,b,v,w,y,x,j,z,C,E,S,P,I,M,O,D,J,q,B,F,V,K,Q,U,W,Y,Z,tt,nt,ot,st,ut,lt,dt,ft,ht,pt,gt,mt,$t=t[3]?"perdeu":"ganhou";function bt(e){t[18].call(null,e)}let vt={width:ct,height:it};void 0!==t[0]&&(vt.canvas=t[0]);const wt=new et({props:vt});function yt(e){t[20].call(null,e)}t[17](wt),k.push(()=>L(wt,"canvas",bt));let xt={width:ct,height:it,obstacleHeight:at,tileSize:rt};void 0!==t[0]&&(xt.canvas=t[0]);const kt=new X({props:xt});t[19](kt),k.push(()=>L(kt,"canvas",yt)),kt.$on("slide",t[11]);let jt={tileSize:rt,paused:t[7]};const zt=new G({props:jt});return t[21](zt),{c(){e=d(),n=u("div"),s=u("div"),i=l("Level: "),$=l(t[2]),b=d(),N(wt.$$.fragment),w=d(),N(kt.$$.fragment),x=d(),j=u("div"),N(zt.$$.fragment),z=d(),C=u("div"),E=l("Você "),S=l($t),I=d(),M=u("audio"),O=d(),D=u("div"),J=u("span"),q=l("Música\r\n    "),B=u("button"),B.textContent="On",F=d(),V=u("button"),V.textContent="Off",K=d(),Q=u("br"),U=d(),W=u("strong"),W.textContent="Controles",Y=d(),Z=u("br"),tt=d(),nt=u("span"),nt.textContent="Pressione enter para começar",ot=d(),st=u("br"),ut=d(),lt=u("span"),lt.textContent="Pular: espaço",dt=d(),ft=u("br"),ht=d(),pt=u("span"),pt.textContent="Pausar/despausar: enter",document.title="Mario runner",h(s,"class","level svelte-152zmjb"),g(j,"margin-left",rt+"px"),h(C,"class",P="status "+(t[3]||t[9]?"finished":"")+" svelte-152zmjb"),M.autoplay="false",h(n,"class","canvas svelte-152zmjb"),g(n,"height",it+"px"),g(n,"width",ct+"px"),h(B,"class","svelte-152zmjb"),m(B,"hide",t[5]),h(V,"class","svelte-152zmjb"),m(V,"hide",!t[5]),mt=[f(window,"keypress",t[10]),f(B,"click",t[23]),f(V,"click",t[24])]},m(o,c){r(o,e,c),r(o,n,c),a(n,s),a(s,i),a(s,$),a(n,b),R(wt,n,null),a(n,w),R(kt,n,null),a(n,x),a(n,j),R(zt,j,null),a(n,z),a(n,C),a(C,E),a(C,S),a(n,I),a(n,M),t[22](M),r(o,O,c),r(o,D,c),a(D,J),a(J,q),a(J,B),a(J,F),a(J,V),a(D,K),a(D,Q),a(D,U),a(D,W),a(D,Y),a(D,Z),a(D,tt),a(D,nt),a(D,ot),a(D,st),a(D,ut),a(D,lt),a(D,dt),a(D,ft),a(D,ht),a(D,pt),gt=!0},p(t,[e]){(!gt||4&e)&&p($,t[2]);const n={};!v&&1&e&&(v=!0,n.canvas=t[0],_(()=>v=!1)),wt.$set(n);const o={};!y&&1&e&&(y=!0,o.canvas=t[0],_(()=>y=!1)),kt.$set(o);const s={};128&e&&(s.paused=t[7]),zt.$set(s),(!gt||8&e)&&$t!==($t=t[3]?"perdeu":"ganhou")&&p(S,$t),(!gt||520&e&&P!==(P="status "+(t[3]||t[9]?"finished":"")+" svelte-152zmjb"))&&h(C,"class",P),32&e&&m(B,"hide",t[5]),32&e&&m(V,"hide",!t[5])},i(t){gt||(A(wt.$$.fragment,t),A(kt.$$.fragment,t),A(zt.$$.fragment,t),gt=!0)},o(t){H(wt.$$.fragment,t),H(kt.$$.fragment,t),H(zt.$$.fragment,t),gt=!1},d(s){s&&c(e),s&&c(n),t[17](null),T(wt),t[19](null),T(kt),t[21](null),T(zt),t[22](null),s&&c(O),s&&c(D),o(mt)}}}const ot=3e3,st=10,it=600,at=35,rt=46,ct=800;function ut(t,e,n){let o,s,i,a,r,c,u=1,l=!1,d=!0,f=Date.now(),h=!0,p=!1;var g;function m(){if(!h){requestAnimationFrame(m);const t=Date.now(),e=t-f;e>b&&(f=t-e%b,a.draw())}}function $(t){n(5,d=t),d?!h&&r.play():r.pause()}g=async()=>{await a.init(),await c.init(),a.draw(),m(),i=setInterval(()=>{h||(n(2,u++,u),n(6,r.playbackRate+=.1,r),u>=st&&(n(9,p=!0),d&&n(6,r.src="assets/music/won.mp3",r)))},ot)},v().$$.on_mount.push(g),w(()=>{clearInterval(i)});let b;return t.$$.update=()=>{4&t.$$.dirty&&(b=1e3/(u+5)),520&t.$$.dirty&&(l||p)&&(n(7,h=!0),n(6,r.playbackRate=1,r))},[o,s,u,l,a,d,r,h,c,p,function(t){s.isJumping()||(13===t.which?((l||p)&&(n(9,p=!1),n(3,l=!1),n(2,u=1)),n(7,h=!h),h?r.pause():n(6,r.src="assets/music/music.mp3",r),m()):32===t.which&&s.jump())},function(t){const e=s.getPosition(),o=t.detail[1];if(o.obstacle){parseInt(o.obstacle.style.top.replace("px",""));e.top>400&&(n(3,l=!0),d&&n(6,r.src="assets/music/lost.mp3",r))}},$,i,f,b,m,function(t){k[t?"unshift":"push"](()=>{n(8,c=t)})},function(t){o=t,n(0,o)},function(t){k[t?"unshift":"push"](()=>{n(4,a=t)})},function(t){o=t,n(0,o)},function(t){k[t?"unshift":"push"](()=>{n(1,s=t)})},function(t){k[t?"unshift":"push"](()=>{n(6,r=t)})},()=>$(!0),()=>$(!1)]}return new class extends q{constructor(t){super(),J(this,t,ut,nt,i,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map
