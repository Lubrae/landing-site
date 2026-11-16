var e=Object.defineProperty,t=(t,n)=>{let r={};for(var i in t)e(r,i,{get:t[i],enumerable:!0});return n||e(r,Symbol.toStringTag,{value:`Module`}),r};(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function n(e,t,n={}){let r=typeof t==`function`?t:t.default,i=typeof t==`function`?{}:t.meta,{fps:a=i.fps??30,motion:o=!1,...s}={...i.options,...n},c=r(s),{cols:l=80,rows:u=24,palette:d,ground:f,cell:p=2}=i,m=e instanceof HTMLCanvasElement?e:null,h=d&&m?new Uint8Array(l*u):void 0,g=e=>e[0]===`#`?[1,3,5].map(t=>parseInt(e.slice(t,t+2),16)):(e.match(/[\d.]+/g)||[]).map(Number),_=e=>{let t=g(e);return .2126*t[0]+.7152*t[1]+.0722*t[2]<128},v=()=>({paper:m&&f?!_(f):_(getComputedStyle(e).color),color:h}),y=!o&&typeof matchMedia==`function`&&matchMedia(`(prefers-reduced-motion: reduce)`).matches?i.still??0:0,b=()=>{e.textContent=c(y,v())},x;if(m){let e=e=>`${e}px ui-monospace, SFMono-Regular, Menlo, Consolas, monospace`,t=m.getContext(`2d`),n=document.createElement(`canvas`),r=n.getContext(`2d`),i=new Map,a=0,o=0,s=0,g=0,_=0,S=0,C=-1,w=``,T=new Int32Array,E=new Int32Array,D=new Int32Array,O=new Int32Array,k=``,A=!0,j=h&&new Uint8Array(l*u);m.style.display||=`block`,m.style.width||=`100%`,m.style.aspectRatio=`${l} / ${u*p}`;let M=()=>{C=m.clientWidth,a=C*(devicePixelRatio||1)/l,o=a*p,s=Math.ceil(a),g=Math.ceil(o),_=s+2,S=g+2,m.width=Math.round(a*l),m.height=Math.round(o*u),n.width=_*32,n.height=S*32,T=Int32Array.from({length:l+1},(e,t)=>Math.round(t*a)),E=Int32Array.from({length:u+1},(e,t)=>Math.round(t*o)),D=Int32Array.from({length:l},(e,t)=>Math.round(t*a+(a-s)/2)),O=Int32Array.from({length:u},(e,t)=>Math.round(t*o+(o-g)/2)),i.clear(),A=!0},N=(t,o)=>{let c=t*256+o,l=i.get(c);if(l!==void 0)return l;i.size===1024&&(r.clearRect(0,0,n.width,n.height),i.clear()),l=i.size;let u=l%32*_+1,f=Math.floor(l/32)*S+1;return r.font=e(a/.6),r.textAlign=`center`,r.textBaseline=`middle`,r.fillStyle=d?d[o]||d[0]:w,r.save(),r.beginPath(),r.rect(u-1,f-1,_,S),r.clip(),r.fillText(String.fromCharCode(t),u+s/2,f+g/2),r.restore(),i.set(c,l),l};b=()=>{!d&&getComputedStyle(m).color!==w&&(w=getComputedStyle(m).color,i.clear(),r.clearRect(0,0,n.width,n.height),A=!0);let e=c(y,v());f&&(t.fillStyle=f),A&&(f?t.fillRect(0,0,m.width,m.height):t.clearRect(0,0,m.width,m.height));for(let r=0,i=0,a=0;r<e.length;r++){let o=e.charCodeAt(r);if(o===10){i=0,a++;continue}let s=a*l+i;if(A||o!==k.charCodeAt(r)||h&&h[s]!==j[s]){let e=T[i],r=E[a],c=T[i+1]-e,l=E[a+1]-r;if(A||(f?t.fillRect(e,r,c,l):t.clearRect(e,r,c,l)),o!==32){let u=N(o,h?h[s]:0);t.drawImage(n,u%32*_+1+e-D[i],Math.floor(u/32)*S+1+r-O[a],c,l,e,r,c,l)}}i++}k=e,h&&j.set(h),A=!1},M(),x=new ResizeObserver(()=>{m.clientWidth!==C&&(M(),b())}),x.observe(m)}if(b(),!a)return()=>x?.disconnect();let S=matchMedia(`(prefers-reduced-motion: reduce)`),C=0,w=0,T=!1,E=e=>{C=requestAnimationFrame(E);let t=e-w;t<1e3/a-2||(w=e,y+=Math.min(t,100)/1e3,b())},D=()=>{let e=T&&!document.hidden&&(o||!S.matches);e&&!C?(w=performance.now(),C=requestAnimationFrame(E)):!e&&C&&(cancelAnimationFrame(C),C=0)},O=new IntersectionObserver(e=>{T=e[e.length-1].isIntersecting,D()});return O.observe(e),document.addEventListener(`visibilitychange`,D),S.addEventListener(`change`,D),()=>{O.disconnect(),x?.disconnect(),cancelAnimationFrame(C),C=0,document.removeEventListener(`visibilitychange`,D),S.removeEventListener(`change`,D)}}var r=t({default:()=>h,meta:()=>i}),i={name:`dragonfly`,category:`distros`,note:`the dragonfly logo, scanned now and then`,cols:80,rows:25,fps:30,options:{scan:5},palette:[`#8FBE00`,`#B6D559`,`#DDECB3`,`#C0FE04`,`#D6FE5C`,`#ECFFB4`]},a=String.raw`

  .pq8888qqq__                                                    __ppp8888qq,
  q888888888888qq__                  __pq__,                 __pq888888888888b
  888888888888888888qq_,           q88888888q,          ._pp888888888888888888
  8888888888888888888888qq_,      q8888888888q      ._pp8888888888888888888888
  )8888888888888888888888888qq_   888888888888|  _pp8888888888888888888888888P
   88888888888888888888888888888q_O88888888888_p88888888888888888888888888888
   '888888888888888888888888888888888888888888888888888888888888888888888888'
     Y88888888888888888888888888888888888888888888888888888888888888888888P'
      'Y8888888888888888888888888888888888888888888888888888888888888888P"
         "Y8888888888888888888888888888888888888888888888888888888888P"
             '"""YPP8888888888888888888888888888888888888888PPP"""'
                  ___ppq88888888888888888888888888888888qqqq__
             __pq88888888888888888888888888888888888888888888888qq_
          _p88888888888888888888888888888888888888888888888888888888q_
         p888888888888888888888888888888888888888888888888888888888888q,
        q88888888888888888888888P"'|88888888b'"888888888888888888888888p
        888888888888888888888P"    |88888888P    "Y888888888888888888888
        "8888888888888888P"'       '88888888|       '"Y8888888888888888(
         'Y888888888PY"'            88888888'           '""8888888888P"
             ''''                   d8888888                   ''''
                                    "888888P
                                     Y8888P
                                      "88P'

`,o=String.raw`

  .pq8888qqq__                                                    __ppp8888qq,
  q888888888888qq__                  __pq__,                 __pq888888888888b
  888888888888888888qq_,           q88888888q,          ._pp888888888888888888
  8888888888888888888888qq_,      q8888888888q      ._pp8888888888888888888888
  )8888888888888888888888888qq_   888888888888|  _pp8888888888888888888888888P
   88888888888888888888888888888q_O88888888888_p88888888888888888888888888888
   '888888888888888888888888888888888888888888888888888888888888888888888888'
     Y88888888888888888888888888888888888888888888888888888888888888888888P'
      'Y8888888888888888888888888888888888888888888888888888888888888888P"
         "Y8888888888888888888888888888888888888888888888888888888888P"
             '"""YPP8888888888888888888888888888888888888888PPP"""'
                  ___ppq88888888888888888888888888888888qqqq__
             __pq88888888888888888888888888888888888888888888888qq_
          _p88888888888888888888888888888888888888888888888888888888q_
         p888888888888888888888888888888888888888888888888888888888888q,
        q88888888888888888888888P"'|88888888b'"888888888888888888888888p
        888888888888888888888P"    |88888888P    "Y888888888888888888888
        "8888888888888888P"'       '88888888|       '"Y8888888888888888(
         'Y888888888PY"'            88888888'           '""8888888888P"
             ''''                   d8888888                   ''''
                                    "888888P
                                     Y8888P
                                      "88P'

`,s=String.raw`

  000000000000                                                    000000000000
  00000000000000000                  0000000                 00000000000000000
  0000000000000000000000           00000000000          0000000000000000000000
  00000000000000000000000000      000000000000      00000000000000000000000000
  00000000000000000000000000000   0000000000000  00000000000000000000000000000
   00000000000000000000000000000000000000000000000000000000000000000000000000
   00000000000000000000000000000000000000000000000000000000000000000000000000
     00000000000000000000000000000000000000000000000000000000000000000000000
      00000000000000000000000000000000000000000000000000000000000000000000
         00000000000000000000000000000000000000000000000000000000000000
             000000000000000000000000000000000000000000000000000000
                  00000000000000000000000000000000000000000000
             000000000000000000000000000000000000000000000000000000
          000000000000000000000000000000000000000000000000000000000000
         000000000000000000000000000000000000000000000000000000000000000
        0000000000000000000000000000000000000000000000000000000000000000
        00000000000000000000000    0000000000    00000000000000000000000
        00000000000000000000       0000000000       00000000000000000000
         000000000000000            000000000           000000000000000
             0000                   00000000                   0000
                                    00000000
                                     000000
                                      00000

`,c=.5,l=2,u=2,d=5,f=`#$%&*+<=>?@[]{}`,p=e=>e.slice(1,-1).split(`
`).map(e=>e.padEnd(i.cols));function m(e,t,n){let r=Math.imul(e,73856093)^Math.imul(t,19349663)^Math.imul(n,83492791);return r=Math.imul(r^r>>>13,1274126177),(r^r>>>16)>>>0}function h({scan:e=i.options.scan}={}){let{cols:t,rows:n,fps:r}=i,h=p(a),g=p(o),_=p(s),v=i.palette.length/6,y=e>0?Math.max(e,2.5):0,b=n,x=-1;for(let e of[h,g])e.forEach((e,t)=>{e.trim()&&(b=Math.min(b,t),x=Math.max(x,t))});let S=x-b+1+u+d;return(e,{paper:i=!1,color:a}={})=>{let o=a?g:h,s=e-c,d=y&&s>=0?b+s%y*S/l:-1/0,p=Math.floor(e*r/2),x=[];for(let e=0;e<n;e++){let n=d-e,r=n>=0&&n<u?2:+(n>=u&&n<7),s=``;for(let n=0;n<t;n++){let c=o[e][n];if(c!==` `){if(r===2){let t=m(n,e,p);t%4&&(c=f[(t>>>2)%15])}a&&(a[e*t+n]=(i?0:3*v)+r*v+parseInt(_[e][n],36))}s+=c}x.push(s)}return x.join(`
`)}}var g=document.querySelector(`#ascii-dragonfly`);g&&n(g,r);