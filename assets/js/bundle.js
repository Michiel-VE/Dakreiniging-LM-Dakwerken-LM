(()=>{document.addEventListener("DOMContentLoaded",function(){let c=document.querySelectorAll("section[id]"),l=document.querySelectorAll("#navMenu a");function s(){let a="";c.forEach(e=>{let n=e.offsetTop-150;window.scrollY>=n&&(a=e.getAttribute("id"))}),l.forEach(e=>{e.getAttribute("href").replace("/#","")===a?e.setAttribute("aria-current","page"):e.removeAttribute("aria-current")})}window.addEventListener("scroll",s),s()});var b3={"Dakherstellingen - Hellende daken":"dakherstellingen_hellende_daken.html","Dakreiniging & Ontmossen":"dakreiniging_ontmossen.html","Dakherstellingen - Platte daken":"dakherstellingen_platte_daken.html"},h=document.getElementById("serviceModal"),J2=document.getElementById("modalTitle"),Z2=document.getElementById("modalDescription"),S3=[document.getElementById("closeModal"),document.getElementById("closeModalBottom")],C2=null;function c1(c){let l=b3[c],s=`assets/data/${l}`;C2=document.activeElement,fetch(s).then(a=>{if(!a.ok)throw new Error(`Kan ${l} niet laden`);return a.text()}).then(a=>{J2.textContent=c,Z2.innerHTML=a,h.setAttribute("aria-hidden","false"),h.classList.remove("opacity-0","translate-y-4","pointer-events-none"),h.classList.add("opacity-100","translate-y-0"),document.body.style.overflow="hidden",setTimeout(()=>document.getElementById("closeModal").focus(),100)}).catch(a=>{J2.textContent="",Z2.innerHTML=`
        <div class="text-red-700 bg-red-50 border border-red-200 rounded p-4">
          <p class="text-lg font-semibold mb-2">Er is een fout opgetreden</p>
          <p>${a.message||"Onbekende fout. Probeer het later opnieuw."}</p>
        </div>
      `,h.setAttribute("aria-hidden","false"),h.classList.remove("opacity-0","translate-y-4","pointer-events-none"),h.classList.add("opacity-100","translate-y-0"),document.body.style.overflow="hidden",setTimeout(()=>document.getElementById("closeModal").focus(),100)})}function u2(){h.classList.add("opacity-0","translate-y-4","pointer-events-none"),h.classList.remove("opacity-100","translate-y-0"),h.setAttribute("aria-hidden","true"),document.body.style.overflow="auto",document.getElementById("modalDescription")?.scrollIntoView({behavior:"auto",block:"start"}),C2&&C2.focus()}document.querySelectorAll(".card").forEach(c=>{let l=c.querySelector("h3").textContent.trim();c.setAttribute("tabindex","0"),c.setAttribute("role","button"),c.setAttribute("aria-label",`Meer informatie over ${l}`),c.addEventListener("click",()=>c1(l)),c.addEventListener("keydown",s=>{(s.key==="Enter"||s.key===" ")&&(s.preventDefault(),c1(l))})});S3.forEach(c=>c.addEventListener("click",u2));h.addEventListener("click",c=>{h.querySelector("div.bg-white").contains(c.target)||u2()});document.addEventListener("keydown",c=>{c.key==="Escape"&&h.classList.contains("opacity-100")&&u2()});var s2=document.getElementById("navToggle"),k=document.getElementById("navMenu");s2.addEventListener("click",()=>{let c=s2.getAttribute("aria-expanded")==="true";s2.setAttribute("aria-expanded",String(!c)),c?(k.classList.remove("opacity-100","scale-100"),k.classList.add("opacity-0","scale-95"),setTimeout(()=>{k.classList.add("hidden")},300)):(k.classList.remove("hidden"),requestAnimationFrame(()=>{k.classList.remove("opacity-0","scale-95"),k.classList.add("opacity-100","scale-100")}))});document.querySelectorAll("#navMenu a").forEach(c=>{c.addEventListener("click",()=>{window.innerWidth<768&&(s2.setAttribute("aria-expanded","false"),k.classList.remove("opacity-100","scale-100"),k.classList.add("opacity-0","scale-95"),setTimeout(()=>{k.classList.add("hidden")},300))})});var y=document.getElementById("toast"),w3=document.getElementById("toast-message");function _(c,l="success"){w3.textContent=c,y.classList.remove("bg-green-500","bg-red-500"),y.classList.add(l==="success"?"bg-green-500":"bg-red-500"),y.classList.add(l==="success"?"text-black":"text-white"),y.classList.remove("hidden"),requestAnimationFrame(()=>{y.classList.remove("translate-x-full","opacity-0"),y.classList.add("translate-x-0","opacity-100")}),setTimeout(()=>{y.classList.remove("translate-x-0","opacity-100"),y.classList.add("translate-x-full","opacity-0"),setTimeout(()=>{y.classList.add("hidden")},500)},4e3)}document.addEventListener("DOMContentLoaded",()=>{let c=document.getElementById("contactForm");c.addEventListener("submit",function(l){l.preventDefault();let s=document.getElementById("naam"),a=document.getElementById("email"),e=document.getElementById("dienst"),n=document.getElementById("onderwerp"),o=!0;if(s.value.trim()===""?(document.getElementById("error-naam").classList.remove("hidden"),o=!1):document.getElementById("error-naam").classList.add("hidden"),/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(a.value.trim())?document.getElementById("error-email").classList.add("hidden"):(document.getElementById("error-email").classList.remove("hidden"),o=!1),e.value?document.getElementById("error-dienst").classList.add("hidden"):(document.getElementById("error-dienst").classList.remove("hidden"),o=!1),n.value.trim().length<5?(document.getElementById("error-onderwerp").classList.remove("hidden"),o=!1):document.getElementById("error-onderwerp").classList.add("hidden"),!o){_("Controleer de invoervelden aub.","error");return}let z=new FormData(c);console.log(c.action),fetch(c.action,{method:"POST",body:z,headers:{Accept:"application/json"}}).then(r=>r.json()).then(r=>{if(r.success)c.reset(),_("Bedankt! Je aanvraag is verzonden.","success");else if(r.errors){for(let[m,M]of Object.entries(r.errors)){let L=document.getElementById("error-"+m);L&&(L.textContent=M,L.classList.remove("hidden"))}_("Er zijn enkele fouten. Controleer je invoer.","error")}else _("Onbekende fout. Probeer opnieuw.","error")}).catch(()=>{_("Verbindingsfout. Probeer het later opnieuw.","error")})})});var a2=[{url:"assets/img/dak_reiniging.webp",position:"center top"},{url:"assets/img/dak_herstelling.webp",position:"center center"}],l1=0,d2=!0,F=document.getElementById("carousel-reiniging"),G=document.getElementById("carousel-herstelling");F.style.backgroundImage=`url('${a2[0].url}')`;F.style.backgroundPosition=a2[0].position;F.style.opacity=1;G.style.opacity=0;function k3(){let c=(l1+1)%a2.length,l=a2[c];d2?(G.style.backgroundImage=`url('${l.url}')`,G.style.backgroundPosition=l.position,G.style.opacity=1,F.style.opacity=0):(F.style.backgroundImage=`url('${l.url}')`,F.style.backgroundPosition=l.position,F.style.opacity=1,G.style.opacity=0),d2=!d2,l1=c}[F,G].forEach(c=>{c.style.transition="opacity 1s ease-in-out",c.style.backgroundSize="cover",c.style.backgroundAttachment="fixed"});setInterval(k3,5e3);function y3(c,l,s){return(l=v3(l))in c?Object.defineProperty(c,l,{value:s,enumerable:!0,configurable:!0,writable:!0}):c[l]=s,c}function s1(c,l){var s=Object.keys(c);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(c);l&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(c,e).enumerable})),s.push.apply(s,a)}return s}function i(c){for(var l=1;l<arguments.length;l++){var s=arguments[l]!=null?arguments[l]:{};l%2?s1(Object(s),!0).forEach(function(a){y3(c,a,s[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(s)):s1(Object(s)).forEach(function(a){Object.defineProperty(c,a,Object.getOwnPropertyDescriptor(s,a))})}return c}function A3(c,l){if(typeof c!="object"||!c)return c;var s=c[Symbol.toPrimitive];if(s!==void 0){var a=s.call(c,l||"default");if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(l==="string"?String:Number)(c)}function v3(c){var l=A3(c,"string");return typeof l=="symbol"?l:l+""}var a1=()=>{},U2={},v1={},P1=null,T1={mark:a1,measure:a1};try{typeof window<"u"&&(U2=window),typeof document<"u"&&(v1=document),typeof MutationObserver<"u"&&(P1=MutationObserver),typeof performance<"u"&&(T1=performance)}catch{}var{userAgent:e1=""}=U2.navigator||{},E=U2,p=v1,n1=P1,e2=T1,P0=!!E.document,P=!!p.documentElement&&!!p.head&&typeof p.addEventListener=="function"&&typeof p.createElement=="function",F1=~e1.indexOf("MSIE")||~e1.indexOf("Trident/"),P3=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,T3=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,B1={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},F3={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},E1=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],C="classic",r2="duotone",B3="sharp",E3="sharp-duotone",D1=[C,r2,B3,E3],D3={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},R3={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},H3=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),I3={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},O3=["fak","fa-kit","fakd","fa-kit-duotone"],o1={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},q3=["kit"],U3={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},W3=["fak","fakd"],_3={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},i1={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},n2={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},G3=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],V3=["fak","fa-kit","fakd","fa-kit-duotone"],j3={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Y3={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},X3={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},S2={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},$3=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],w2=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...G3,...$3],K3=["solid","regular","light","thin","duotone","brands"],R1=[1,2,3,4,5,6,7,8,9,10],Q3=R1.concat([11,12,13,14,15,16,17,18,19,20]),J3=[...Object.keys(X3),...K3,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",n2.GROUP,n2.SWAP_OPACITY,n2.PRIMARY,n2.SECONDARY].concat(R1.map(c=>"".concat(c,"x"))).concat(Q3.map(c=>"w-".concat(c))),Z3={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},A="___FONT_AWESOME___",k2=16,H1="fa",I1="svg-inline--fa",O="data-fa-i2svg",y2="data-fa-pseudo-element",c4="data-fa-pseudo-element-pending",W2="data-prefix",_2="data-icon",t1="fontawesome-i2svg",l4="async",s4=["HTML","HEAD","STYLE","SCRIPT"],O1=(()=>{try{return!0}catch{return!1}})();function c2(c){return new Proxy(c,{get(l,s){return s in l?l[s]:l[C]}})}var q1=i({},B1);q1[C]=i(i(i(i({},{"fa-duotone":"duotone"}),B1[C]),o1.kit),o1["kit-duotone"]);var a4=c2(q1),A2=i({},I3);A2[C]=i(i(i(i({},{duotone:"fad"}),A2[C]),i1.kit),i1["kit-duotone"]);var f1=c2(A2),v2=i({},S2);v2[C]=i(i({},v2[C]),_3.kit);var G2=c2(v2),P2=i({},Y3);P2[C]=i(i({},P2[C]),U3.kit);var T0=c2(P2),e4=P3,U1="fa-layers-text",n4=T3,o4=i({},D3),F0=c2(o4),i4=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],x2=F3,t4=[...q3,...J3],K=E.FontAwesomeConfig||{};function f4(c){var l=p.querySelector("script["+c+"]");if(l)return l.getAttribute(c)}function r4(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}p&&typeof p.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(l=>{let[s,a]=l,e=r4(f4(s));e!=null&&(K[a]=e)});var W1={styleDefault:"solid",familyDefault:C,cssPrefix:H1,replacementClass:I1,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};K.familyPrefix&&(K.cssPrefix=K.familyPrefix);var Y=i(i({},W1),K);Y.autoReplaceSvg||(Y.observeMutations=!1);var f={};Object.keys(W1).forEach(c=>{Object.defineProperty(f,c,{enumerable:!0,set:function(l){Y[c]=l,Q.forEach(s=>s(f))},get:function(){return Y[c]}})});Object.defineProperty(f,"familyPrefix",{enumerable:!0,set:function(c){Y.cssPrefix=c,Q.forEach(l=>l(f))},get:function(){return Y.cssPrefix}});E.FontAwesomeConfig=f;var Q=[];function z4(c){return Q.push(c),()=>{Q.splice(Q.indexOf(c),1)}}var B=k2,b={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function m4(c){if(!c||!P)return;let l=p.createElement("style");l.setAttribute("type","text/css"),l.innerHTML=c;let s=p.head.childNodes,a=null;for(let e=s.length-1;e>-1;e--){let n=s[e],o=(n.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=n)}return p.head.insertBefore(l,a),c}var L4="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function J(){let c=12,l="";for(;c-- >0;)l+=L4[Math.random()*62|0];return l}function X(c){let l=[];for(let s=(c||[]).length>>>0;s--;)l[s]=c[s];return l}function V2(c){return c.classList?X(c.classList):(c.getAttribute("class")||"").split(" ").filter(l=>l)}function _1(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function M4(c){return Object.keys(c||{}).reduce((l,s)=>l+"".concat(s,'="').concat(_1(c[s]),'" '),"").trim()}function z2(c){return Object.keys(c||{}).reduce((l,s)=>l+"".concat(s,": ").concat(c[s].trim(),";"),"")}function j2(c){return c.size!==b.size||c.x!==b.x||c.y!==b.y||c.rotate!==b.rotate||c.flipX||c.flipY}function p4(c){let{transform:l,containerWidth:s,iconWidth:a}=c,e={transform:"translate(".concat(s/2," 256)")},n="translate(".concat(l.x*32,", ").concat(l.y*32,") "),o="scale(".concat(l.size/16*(l.flipX?-1:1),", ").concat(l.size/16*(l.flipY?-1:1),") "),t="rotate(".concat(l.rotate," 0 0)"),z={transform:"".concat(n," ").concat(o," ").concat(t)},r={transform:"translate(".concat(a/2*-1," -256)")};return{outer:e,inner:z,path:r}}function C4(c){let{transform:l,width:s=k2,height:a=k2,startCentered:e=!1}=c,n="";return e&&F1?n+="translate(".concat(l.x/B-s/2,"em, ").concat(l.y/B-a/2,"em) "):e?n+="translate(calc(-50% + ".concat(l.x/B,"em), calc(-50% + ").concat(l.y/B,"em)) "):n+="translate(".concat(l.x/B,"em, ").concat(l.y/B,"em) "),n+="scale(".concat(l.size/B*(l.flipX?-1:1),", ").concat(l.size/B*(l.flipY?-1:1),") "),n+="rotate(".concat(l.rotate,"deg) "),n}var u4=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;function G1(){let c=H1,l=I1,s=f.cssPrefix,a=f.replacementClass,e=u4;if(s!==c||a!==l){let n=new RegExp("\\.".concat(c,"\\-"),"g"),o=new RegExp("\\--".concat(c,"\\-"),"g"),t=new RegExp("\\.".concat(l),"g");e=e.replace(n,".".concat(s,"-")).replace(o,"--".concat(s,"-")).replace(t,".".concat(a))}return e}var r1=!1;function h2(){f.autoAddCss&&!r1&&(m4(G1()),r1=!0)}var d4={mixout(){return{dom:{css:G1,insertCss:h2}}},hooks(){return{beforeDOMElementCreation(){h2()},beforeI2svg(){h2()}}}},v=E||{};v[A]||(v[A]={});v[A].styles||(v[A].styles={});v[A].hooks||(v[A].hooks={});v[A].shims||(v[A].shims=[]);var S=v[A],V1=[],j1=function(){p.removeEventListener("DOMContentLoaded",j1),t2=1,V1.map(c=>c())},t2=!1;P&&(t2=(p.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(p.readyState),t2||p.addEventListener("DOMContentLoaded",j1));function x4(c){P&&(t2?setTimeout(c,0):V1.push(c))}function l2(c){let{tag:l,attributes:s={},children:a=[]}=c;return typeof c=="string"?_1(c):"<".concat(l," ").concat(M4(s),">").concat(a.map(l2).join(""),"</").concat(l,">")}function z1(c,l,s){if(c&&c[l]&&c[l][s])return{prefix:l,iconName:s,icon:c[l][s]}}var h4=function(l,s){return function(a,e,n,o){return l.call(s,a,e,n,o)}},g2=function(l,s,a,e){var n=Object.keys(l),o=n.length,t=e!==void 0?h4(s,e):s,z,r,m;for(a===void 0?(z=1,m=l[n[0]]):(z=0,m=a);z<o;z++)r=n[z],m=t(m,l[r],r,l);return m};function g4(c){let l=[],s=0,a=c.length;for(;s<a;){let e=c.charCodeAt(s++);if(e>=55296&&e<=56319&&s<a){let n=c.charCodeAt(s++);(n&64512)==56320?l.push(((e&1023)<<10)+(n&1023)+65536):(l.push(e),s--)}else l.push(e)}return l}function T2(c){let l=g4(c);return l.length===1?l[0].toString(16):null}function N4(c,l){let s=c.length,a=c.charCodeAt(l),e;return a>=55296&&a<=56319&&s>l+1&&(e=c.charCodeAt(l+1),e>=56320&&e<=57343)?(a-55296)*1024+e-56320+65536:a}function m1(c){return Object.keys(c).reduce((l,s)=>{let a=c[s];return!!a.icon?l[a.iconName]=a.icon:l[s]=a,l},{})}function F2(c,l){let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},{skipHooks:a=!1}=s,e=m1(l);typeof S.hooks.addPack=="function"&&!a?S.hooks.addPack(c,m1(l)):S.styles[c]=i(i({},S.styles[c]||{}),e),c==="fas"&&F2("fa",l)}var{styles:Z,shims:b4}=S,Y1=Object.keys(G2),S4=Y1.reduce((c,l)=>(c[l]=Object.keys(G2[l]),c),{}),Y2=null,X1={},$1={},K1={},Q1={},J1={};function w4(c){return~t4.indexOf(c)}function k4(c,l){let s=l.split("-"),a=s[0],e=s.slice(1).join("-");return a===c&&e!==""&&!w4(e)?e:null}var Z1=()=>{let c=a=>g2(Z,(e,n,o)=>(e[o]=g2(n,a,{}),e),{});X1=c((a,e,n)=>(e[3]&&(a[e[3]]=n),e[2]&&e[2].filter(t=>typeof t=="number").forEach(t=>{a[t.toString(16)]=n}),a)),$1=c((a,e,n)=>(a[n]=n,e[2]&&e[2].filter(t=>typeof t=="string").forEach(t=>{a[t]=n}),a)),J1=c((a,e,n)=>{let o=e[2];return a[n]=n,o.forEach(t=>{a[t]=n}),a});let l="far"in Z||f.autoFetchSvg,s=g2(b4,(a,e)=>{let n=e[0],o=e[1],t=e[2];return o==="far"&&!l&&(o="fas"),typeof n=="string"&&(a.names[n]={prefix:o,iconName:t}),typeof n=="number"&&(a.unicodes[n.toString(16)]={prefix:o,iconName:t}),a},{names:{},unicodes:{}});K1=s.names,Q1=s.unicodes,Y2=m2(f.styleDefault,{family:f.familyDefault})};z4(c=>{Y2=m2(c.styleDefault,{family:f.familyDefault})});Z1();function X2(c,l){return(X1[c]||{})[l]}function y4(c,l){return($1[c]||{})[l]}function I(c,l){return(J1[c]||{})[l]}function c3(c){return K1[c]||{prefix:null,iconName:null}}function A4(c){let l=Q1[c],s=X2("fas",c);return l||(s?{prefix:"fas",iconName:s}:null)||{prefix:null,iconName:null}}function D(){return Y2}var l3=()=>({prefix:null,iconName:null,rest:[]});function v4(c){let l=C,s=Y1.reduce((a,e)=>(a[e]="".concat(f.cssPrefix,"-").concat(e),a),{});return D1.forEach(a=>{(c.includes(s[a])||c.some(e=>S4[a].includes(e)))&&(l=a)}),l}function m2(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{family:s=C}=l,a=a4[s][c];if(s===r2&&!c)return"fad";let e=f1[s][c]||f1[s][a],n=c in S.styles?c:null;return e||n||null}function P4(c){let l=[],s=null;return c.forEach(a=>{let e=k4(f.cssPrefix,a);e?s=e:a&&l.push(a)}),{iconName:s,rest:l}}function L1(c){return c.sort().filter((l,s,a)=>a.indexOf(l)===s)}function L2(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{skipLookups:s=!1}=l,a=null,e=w2.concat(V3),n=L1(c.filter(M=>e.includes(M))),o=L1(c.filter(M=>!w2.includes(M))),t=n.filter(M=>(a=M,!E1.includes(M))),[z=null]=t,r=v4(n),m=i(i({},P4(o)),{},{prefix:m2(z,{family:r})});return i(i(i({},m),E4({values:c,family:r,styles:Z,config:f,canonical:m,givenPrefix:a})),T4(s,a,m))}function T4(c,l,s){let{prefix:a,iconName:e}=s;if(c||!a||!e)return{prefix:a,iconName:e};let n=l==="fa"?c3(e):{},o=I(a,e);return e=n.iconName||o||e,a=n.prefix||a,a==="far"&&!Z.far&&Z.fas&&!f.autoFetchSvg&&(a="fas"),{prefix:a,iconName:e}}var F4=D1.filter(c=>c!==C||c!==r2),B4=Object.keys(S2).filter(c=>c!==C).map(c=>Object.keys(S2[c])).flat();function E4(c){let{values:l,family:s,canonical:a,givenPrefix:e="",styles:n={},config:o={}}=c,t=s===r2,z=l.includes("fa-duotone")||l.includes("fad"),r=o.familyDefault==="duotone",m=a.prefix==="fad"||a.prefix==="fa-duotone";if(!t&&(z||r||m)&&(a.prefix="fad"),(l.includes("fa-brands")||l.includes("fab"))&&(a.prefix="fab"),!a.prefix&&F4.includes(s)&&(Object.keys(n).find(L=>B4.includes(L))||o.autoFetchSvg)){let L=H3.get(s).defaultShortPrefixId;a.prefix=L,a.iconName=I(a.prefix,a.iconName)||a.iconName}return(a.prefix==="fa"||e==="fa")&&(a.prefix=D()||"fas"),a}var B2=class{constructor(){this.definitions={}}add(){for(var l=arguments.length,s=new Array(l),a=0;a<l;a++)s[a]=arguments[a];let e=s.reduce(this._pullDefinitions,{});Object.keys(e).forEach(n=>{this.definitions[n]=i(i({},this.definitions[n]||{}),e[n]),F2(n,e[n]);let o=G2[C][n];o&&F2(o,e[n]),Z1()})}reset(){this.definitions={}}_pullDefinitions(l,s){let a=s.prefix&&s.iconName&&s.icon?{0:s}:s;return Object.keys(a).map(e=>{let{prefix:n,iconName:o,icon:t}=a[e],z=t[2];l[n]||(l[n]={}),z.length>0&&z.forEach(r=>{typeof r=="string"&&(l[n][r]=t)}),l[n][o]=t}),l}},M1=[],V={},j={},D4=Object.keys(j);function R4(c,l){let{mixoutsTo:s}=l;return M1=c,V={},Object.keys(j).forEach(a=>{D4.indexOf(a)===-1&&delete j[a]}),M1.forEach(a=>{let e=a.mixout?a.mixout():{};if(Object.keys(e).forEach(n=>{typeof e[n]=="function"&&(s[n]=e[n]),typeof e[n]=="object"&&Object.keys(e[n]).forEach(o=>{s[n]||(s[n]={}),s[n][o]=e[n][o]})}),a.hooks){let n=a.hooks();Object.keys(n).forEach(o=>{V[o]||(V[o]=[]),V[o].push(n[o])})}a.provides&&a.provides(j)}),s}function E2(c,l){for(var s=arguments.length,a=new Array(s>2?s-2:0),e=2;e<s;e++)a[e-2]=arguments[e];return(V[c]||[]).forEach(o=>{l=o.apply(null,[l,...a])}),l}function q(c){for(var l=arguments.length,s=new Array(l>1?l-1:0),a=1;a<l;a++)s[a-1]=arguments[a];(V[c]||[]).forEach(n=>{n.apply(null,s)})}function R(){let c=arguments[0],l=Array.prototype.slice.call(arguments,1);return j[c]?j[c].apply(null,l):void 0}function D2(c){c.prefix==="fa"&&(c.prefix="fas");let{iconName:l}=c,s=c.prefix||D();if(l)return l=I(s,l)||l,z1(s3.definitions,s,l)||z1(S.styles,s,l)}var s3=new B2,H4=()=>{f.autoReplaceSvg=!1,f.observeMutations=!1,q("noAuto")},I4={i2svg:function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return P?(q("beforeI2svg",c),R("pseudoElements2svg",c),R("i2svg",c)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:l}=c;f.autoReplaceSvg===!1&&(f.autoReplaceSvg=!0),f.observeMutations=!0,x4(()=>{q4({autoReplaceSvgRoot:l}),q("watch",c)})}},O4={icon:c=>{if(c===null)return null;if(typeof c=="object"&&c.prefix&&c.iconName)return{prefix:c.prefix,iconName:I(c.prefix,c.iconName)||c.iconName};if(Array.isArray(c)&&c.length===2){let l=c[1].indexOf("fa-")===0?c[1].slice(3):c[1],s=m2(c[0]);return{prefix:s,iconName:I(s,l)||l}}if(typeof c=="string"&&(c.indexOf("".concat(f.cssPrefix,"-"))>-1||c.match(e4))){let l=L2(c.split(" "),{skipLookups:!0});return{prefix:l.prefix||D(),iconName:I(l.prefix,l.iconName)||l.iconName}}if(typeof c=="string"){let l=D();return{prefix:l,iconName:I(l,c)||c}}}},x={noAuto:H4,config:f,dom:I4,parse:O4,library:s3,findIconDefinition:D2,toHtml:l2},q4=function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:l=p}=c;(Object.keys(S.styles).length>0||f.autoFetchSvg)&&P&&f.autoReplaceSvg&&x.dom.i2svg({node:l})};function M2(c,l){return Object.defineProperty(c,"abstract",{get:l}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(s=>l2(s))}}),Object.defineProperty(c,"node",{get:function(){if(!P)return;let s=p.createElement("div");return s.innerHTML=c.html,s.children}}),c}function U4(c){let{children:l,main:s,mask:a,attributes:e,styles:n,transform:o}=c;if(j2(o)&&s.found&&!a.found){let{width:t,height:z}=s,r={x:t/z/2,y:.5};e.style=z2(i(i({},n),{},{"transform-origin":"".concat(r.x+o.x/16,"em ").concat(r.y+o.y/16,"em")}))}return[{tag:"svg",attributes:e,children:l}]}function W4(c){let{prefix:l,iconName:s,children:a,attributes:e,symbol:n}=c,o=n===!0?"".concat(l,"-").concat(f.cssPrefix,"-").concat(s):n;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:i(i({},e),{},{id:o}),children:a}]}]}function $2(c){let{icons:{main:l,mask:s},prefix:a,iconName:e,transform:n,symbol:o,title:t,maskId:z,titleId:r,extra:m,watchable:M=!1}=c,{width:L,height:u}=s.found?s:l,T=W3.includes(a),H=[f.replacementClass,e?"".concat(f.cssPrefix,"-").concat(e):""].filter(W=>m.classes.indexOf(W)===-1).filter(W=>W!==""||!!W).concat(m.classes).join(" "),g={children:[],attributes:i(i({},m.attributes),{},{"data-prefix":a,"data-icon":e,class:H,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(L," ").concat(u)})},w=T&&!~m.classes.indexOf("fa-fw")?{width:"".concat(L/u*16*.0625,"em")}:{};M&&(g.attributes[O]=""),t&&(g.children.push({tag:"title",attributes:{id:g.attributes["aria-labelledby"]||"title-".concat(r||J())},children:[t]}),delete g.attributes.title);let d=i(i({},g),{},{prefix:a,iconName:e,main:l,mask:s,maskId:z,transform:n,symbol:o,styles:i(i({},w),m.styles)}),{children:N,attributes:U}=s.found&&l.found?R("generateAbstractMask",d)||{children:[],attributes:{}}:R("generateAbstractIcon",d)||{children:[],attributes:{}};return d.children=N,d.attributes=U,o?W4(d):U4(d)}function p1(c){let{content:l,width:s,height:a,transform:e,title:n,extra:o,watchable:t=!1}=c,z=i(i(i({},o.attributes),n?{title:n}:{}),{},{class:o.classes.join(" ")});t&&(z[O]="");let r=i({},o.styles);j2(e)&&(r.transform=C4({transform:e,startCentered:!0,width:s,height:a}),r["-webkit-transform"]=r.transform);let m=z2(r);m.length>0&&(z.style=m);let M=[];return M.push({tag:"span",attributes:z,children:[l]}),n&&M.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),M}function _4(c){let{content:l,title:s,extra:a}=c,e=i(i(i({},a.attributes),s?{title:s}:{}),{},{class:a.classes.join(" ")}),n=z2(a.styles);n.length>0&&(e.style=n);let o=[];return o.push({tag:"span",attributes:e,children:[l]}),s&&o.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),o}var{styles:N2}=S;function R2(c){let l=c[0],s=c[1],[a]=c.slice(4),e=null;return Array.isArray(a)?e={tag:"g",attributes:{class:"".concat(f.cssPrefix,"-").concat(x2.GROUP)},children:[{tag:"path",attributes:{class:"".concat(f.cssPrefix,"-").concat(x2.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(f.cssPrefix,"-").concat(x2.PRIMARY),fill:"currentColor",d:a[1]}}]}:e={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:l,height:s,icon:e}}var G4={found:!1,width:512,height:512};function V4(c,l){!O1&&!f.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(l,'" is missing.'))}function H2(c,l){let s=l;return l==="fa"&&f.styleDefault!==null&&(l=D()),new Promise((a,e)=>{if(s==="fa"){let n=c3(c)||{};c=n.iconName||c,l=n.prefix||l}if(c&&l&&N2[l]&&N2[l][c]){let n=N2[l][c];return a(R2(n))}V4(c,l),a(i(i({},G4),{},{icon:f.showMissingIcons&&c?R("missingIconAbstract")||{}:{}}))})}var C1=()=>{},I2=f.measurePerformance&&e2&&e2.mark&&e2.measure?e2:{mark:C1,measure:C1},$='FA "6.7.2"',j4=c=>(I2.mark("".concat($," ").concat(c," begins")),()=>a3(c)),a3=c=>{I2.mark("".concat($," ").concat(c," ends")),I2.measure("".concat($," ").concat(c),"".concat($," ").concat(c," begins"),"".concat($," ").concat(c," ends"))},K2={begin:j4,end:a3},o2=()=>{};function u1(c){return typeof(c.getAttribute?c.getAttribute(O):null)=="string"}function Y4(c){let l=c.getAttribute?c.getAttribute(W2):null,s=c.getAttribute?c.getAttribute(_2):null;return l&&s}function X4(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(f.replacementClass)}function $4(){return f.autoReplaceSvg===!0?i2.replace:i2[f.autoReplaceSvg]||i2.replace}function K4(c){return p.createElementNS("http://www.w3.org/2000/svg",c)}function Q4(c){return p.createElement(c)}function e3(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{ceFn:s=c.tag==="svg"?K4:Q4}=l;if(typeof c=="string")return p.createTextNode(c);let a=s(c.tag);return Object.keys(c.attributes||[]).forEach(function(n){a.setAttribute(n,c.attributes[n])}),(c.children||[]).forEach(function(n){a.appendChild(e3(n,{ceFn:s}))}),a}function J4(c){let l=" ".concat(c.outerHTML," ");return l="".concat(l,"Font Awesome fontawesome.com "),l}var i2={replace:function(c){let l=c[0];if(l.parentNode)if(c[1].forEach(s=>{l.parentNode.insertBefore(e3(s),l)}),l.getAttribute(O)===null&&f.keepOriginalSource){let s=p.createComment(J4(l));l.parentNode.replaceChild(s,l)}else l.remove()},nest:function(c){let l=c[0],s=c[1];if(~V2(l).indexOf(f.replacementClass))return i2.replace(c);let a=new RegExp("".concat(f.cssPrefix,"-.*"));if(delete s[0].attributes.id,s[0].attributes.class){let n=s[0].attributes.class.split(" ").reduce((o,t)=>(t===f.replacementClass||t.match(a)?o.toSvg.push(t):o.toNode.push(t),o),{toNode:[],toSvg:[]});s[0].attributes.class=n.toSvg.join(" "),n.toNode.length===0?l.removeAttribute("class"):l.setAttribute("class",n.toNode.join(" "))}let e=s.map(n=>l2(n)).join(`
`);l.setAttribute(O,""),l.innerHTML=e}};function d1(c){c()}function n3(c,l){let s=typeof l=="function"?l:o2;if(c.length===0)s();else{let a=d1;f.mutateApproach===l4&&(a=E.requestAnimationFrame||d1),a(()=>{let e=$4(),n=K2.begin("mutate");c.map(e),n(),s()})}}var Q2=!1;function o3(){Q2=!0}function O2(){Q2=!1}var f2=null;function x1(c){if(!n1||!f.observeMutations)return;let{treeCallback:l=o2,nodeCallback:s=o2,pseudoElementsCallback:a=o2,observeMutationsRoot:e=p}=c;f2=new n1(n=>{if(Q2)return;let o=D();X(n).forEach(t=>{if(t.type==="childList"&&t.addedNodes.length>0&&!u1(t.addedNodes[0])&&(f.searchPseudoElements&&a(t.target),l(t.target)),t.type==="attributes"&&t.target.parentNode&&f.searchPseudoElements&&a(t.target.parentNode),t.type==="attributes"&&u1(t.target)&&~i4.indexOf(t.attributeName))if(t.attributeName==="class"&&Y4(t.target)){let{prefix:z,iconName:r}=L2(V2(t.target));t.target.setAttribute(W2,z||o),r&&t.target.setAttribute(_2,r)}else X4(t.target)&&s(t.target)})}),P&&f2.observe(e,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function Z4(){f2&&f2.disconnect()}function c0(c){let l=c.getAttribute("style"),s=[];return l&&(s=l.split(";").reduce((a,e)=>{let n=e.split(":"),o=n[0],t=n.slice(1);return o&&t.length>0&&(a[o]=t.join(":").trim()),a},{})),s}function l0(c){let l=c.getAttribute("data-prefix"),s=c.getAttribute("data-icon"),a=c.innerText!==void 0?c.innerText.trim():"",e=L2(V2(c));return e.prefix||(e.prefix=D()),l&&s&&(e.prefix=l,e.iconName=s),e.iconName&&e.prefix||(e.prefix&&a.length>0&&(e.iconName=y4(e.prefix,c.innerText)||X2(e.prefix,T2(c.innerText))),!e.iconName&&f.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(e.iconName=c.firstChild.data)),e}function s0(c){let l=X(c.attributes).reduce((e,n)=>(e.name!=="class"&&e.name!=="style"&&(e[n.name]=n.value),e),{}),s=c.getAttribute("title"),a=c.getAttribute("data-fa-title-id");return f.autoA11y&&(s?l["aria-labelledby"]="".concat(f.replacementClass,"-title-").concat(a||J()):(l["aria-hidden"]="true",l.focusable="false")),l}function a0(){return{iconName:null,title:null,titleId:null,prefix:null,transform:b,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function h1(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},{iconName:s,prefix:a,rest:e}=l0(c),n=s0(c),o=E2("parseNodeAttributes",{},c),t=l.styleParser?c0(c):[];return i({iconName:s,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:a,transform:b,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:e,styles:t,attributes:n}},o)}var{styles:e0}=S;function i3(c){let l=f.autoReplaceSvg==="nest"?h1(c,{styleParser:!1}):h1(c);return~l.extra.classes.indexOf(U1)?R("generateLayersText",c,l):R("generateSvgReplacementMutation",c,l)}function n0(){return[...O3,...w2]}function g1(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!P)return Promise.resolve();let s=p.documentElement.classList,a=m=>s.add("".concat(t1,"-").concat(m)),e=m=>s.remove("".concat(t1,"-").concat(m)),n=f.autoFetchSvg?n0():E1.concat(Object.keys(e0));n.includes("fa")||n.push("fa");let o=[".".concat(U1,":not([").concat(O,"])")].concat(n.map(m=>".".concat(m,":not([").concat(O,"])"))).join(", ");if(o.length===0)return Promise.resolve();let t=[];try{t=X(c.querySelectorAll(o))}catch{}if(t.length>0)a("pending"),e("complete");else return Promise.resolve();let z=K2.begin("onTree"),r=t.reduce((m,M)=>{try{let L=i3(M);L&&m.push(L)}catch(L){O1||L.name==="MissingIcon"&&console.error(L)}return m},[]);return new Promise((m,M)=>{Promise.all(r).then(L=>{n3(L,()=>{a("active"),a("complete"),e("pending"),typeof l=="function"&&l(),z(),m()})}).catch(L=>{z(),M(L)})})}function o0(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;i3(c).then(s=>{s&&n3([s],l)})}function i0(c){return function(l){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(l||{}).icon?l:D2(l||{}),{mask:e}=s;return e&&(e=(e||{}).icon?e:D2(e||{})),c(a,i(i({},s),{},{mask:e}))}}var t0=function(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:s=b,symbol:a=!1,mask:e=null,maskId:n=null,title:o=null,titleId:t=null,classes:z=[],attributes:r={},styles:m={}}=l;if(!c)return;let{prefix:M,iconName:L,icon:u}=c;return M2(i({type:"icon"},c),()=>(q("beforeDOMElementCreation",{iconDefinition:c,params:l}),f.autoA11y&&(o?r["aria-labelledby"]="".concat(f.replacementClass,"-title-").concat(t||J()):(r["aria-hidden"]="true",r.focusable="false")),$2({icons:{main:R2(u),mask:e?R2(e.icon):{found:!1,width:null,height:null,icon:{}}},prefix:M,iconName:L,transform:i(i({},b),s),symbol:a,title:o,maskId:n,titleId:t,extra:{attributes:r,styles:m,classes:z}})))},f0={mixout(){return{icon:i0(t0)}},hooks(){return{mutationObserverCallbacks(c){return c.treeCallback=g1,c.nodeCallback=o0,c}}},provides(c){c.i2svg=function(l){let{node:s=p,callback:a=()=>{}}=l;return g1(s,a)},c.generateSvgReplacementMutation=function(l,s){let{iconName:a,title:e,titleId:n,prefix:o,transform:t,symbol:z,mask:r,maskId:m,extra:M}=s;return new Promise((L,u)=>{Promise.all([H2(a,o),r.iconName?H2(r.iconName,r.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(T=>{let[H,g]=T;L([l,$2({icons:{main:H,mask:g},prefix:o,iconName:a,transform:t,symbol:z,maskId:m,title:e,titleId:n,extra:M,watchable:!0})])}).catch(u)})},c.generateAbstractIcon=function(l){let{children:s,attributes:a,main:e,transform:n,styles:o}=l,t=z2(o);t.length>0&&(a.style=t);let z;return j2(n)&&(z=R("generateAbstractTransformGrouping",{main:e,transform:n,containerWidth:e.width,iconWidth:e.width})),s.push(z||e.icon),{children:s,attributes:a}}}},r0={mixout(){return{layer(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{classes:s=[]}=l;return M2({type:"layer"},()=>{q("beforeDOMElementCreation",{assembler:c,params:l});let a=[];return c(e=>{Array.isArray(e)?e.map(n=>{a=a.concat(n.abstract)}):a=a.concat(e.abstract)}),[{tag:"span",attributes:{class:["".concat(f.cssPrefix,"-layers"),...s].join(" ")},children:a}]})}}}},z0={mixout(){return{counter(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{title:s=null,classes:a=[],attributes:e={},styles:n={}}=l;return M2({type:"counter",content:c},()=>(q("beforeDOMElementCreation",{content:c,params:l}),_4({content:c.toString(),title:s,extra:{attributes:e,styles:n,classes:["".concat(f.cssPrefix,"-layers-counter"),...a]}})))}}}},m0={mixout(){return{text(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:s=b,title:a=null,classes:e=[],attributes:n={},styles:o={}}=l;return M2({type:"text",content:c},()=>(q("beforeDOMElementCreation",{content:c,params:l}),p1({content:c,transform:i(i({},b),s),title:a,extra:{attributes:n,styles:o,classes:["".concat(f.cssPrefix,"-layers-text"),...e]}})))}}},provides(c){c.generateLayersText=function(l,s){let{title:a,transform:e,extra:n}=s,o=null,t=null;if(F1){let z=parseInt(getComputedStyle(l).fontSize,10),r=l.getBoundingClientRect();o=r.width/z,t=r.height/z}return f.autoA11y&&!a&&(n.attributes["aria-hidden"]="true"),Promise.resolve([l,p1({content:l.innerHTML,width:o,height:t,transform:e,title:a,extra:n,watchable:!0})])}}},L0=new RegExp('"',"ug"),N1=[1105920,1112319],b1=i(i(i(i({},{FontAwesome:{normal:"fas",400:"fas"}}),R3),Z3),j3),q2=Object.keys(b1).reduce((c,l)=>(c[l.toLowerCase()]=b1[l],c),{}),M0=Object.keys(q2).reduce((c,l)=>{let s=q2[l];return c[l]=s[900]||[...Object.entries(s)][0][1],c},{});function p0(c){let l=c.replace(L0,""),s=N4(l,0),a=s>=N1[0]&&s<=N1[1],e=l.length===2?l[0]===l[1]:!1;return{value:T2(e?l[0]:l),isSecondary:a||e}}function C0(c,l){let s=c.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(l),e=isNaN(a)?"normal":a;return(q2[s]||{})[e]||M0[s]}function S1(c,l){let s="".concat(c4).concat(l.replace(":","-"));return new Promise((a,e)=>{if(c.getAttribute(s)!==null)return a();let o=X(c.children).filter(L=>L.getAttribute(y2)===l)[0],t=E.getComputedStyle(c,l),z=t.getPropertyValue("font-family"),r=z.match(n4),m=t.getPropertyValue("font-weight"),M=t.getPropertyValue("content");if(o&&!r)return c.removeChild(o),a();if(r&&M!=="none"&&M!==""){let L=t.getPropertyValue("content"),u=C0(z,m),{value:T,isSecondary:H}=p0(L),g=r[0].startsWith("FontAwesome"),w=X2(u,T),d=w;if(g){let N=A4(T);N.iconName&&N.prefix&&(w=N.iconName,u=N.prefix)}if(w&&!H&&(!o||o.getAttribute(W2)!==u||o.getAttribute(_2)!==d)){c.setAttribute(s,d),o&&c.removeChild(o);let N=a0(),{extra:U}=N;U.attributes[y2]=l,H2(w,u).then(W=>{let g3=$2(i(i({},N),{},{icons:{main:W,mask:l3()},prefix:u,iconName:d,extra:U,watchable:!0})),p2=p.createElementNS("http://www.w3.org/2000/svg","svg");l==="::before"?c.insertBefore(p2,c.firstChild):c.appendChild(p2),p2.outerHTML=g3.map(N3=>l2(N3)).join(`
`),c.removeAttribute(s),a()}).catch(e)}else a()}else a()})}function u0(c){return Promise.all([S1(c,"::before"),S1(c,"::after")])}function d0(c){return c.parentNode!==document.head&&!~s4.indexOf(c.tagName.toUpperCase())&&!c.getAttribute(y2)&&(!c.parentNode||c.parentNode.tagName!=="svg")}function w1(c){if(P)return new Promise((l,s)=>{let a=X(c.querySelectorAll("*")).filter(d0).map(u0),e=K2.begin("searchPseudoElements");o3(),Promise.all(a).then(()=>{e(),O2(),l()}).catch(()=>{e(),O2(),s()})})}var x0={hooks(){return{mutationObserverCallbacks(c){return c.pseudoElementsCallback=w1,c}}},provides(c){c.pseudoElements2svg=function(l){let{node:s=p}=l;f.searchPseudoElements&&w1(s)}}},k1=!1,h0={mixout(){return{dom:{unwatch(){o3(),k1=!0}}}},hooks(){return{bootstrap(){x1(E2("mutationObserverCallbacks",{}))},noAuto(){Z4()},watch(c){let{observeMutationsRoot:l}=c;k1?O2():x1(E2("mutationObserverCallbacks",{observeMutationsRoot:l}))}}}},y1=c=>{let l={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return c.toLowerCase().split(" ").reduce((s,a)=>{let e=a.toLowerCase().split("-"),n=e[0],o=e.slice(1).join("-");if(n&&o==="h")return s.flipX=!0,s;if(n&&o==="v")return s.flipY=!0,s;if(o=parseFloat(o),isNaN(o))return s;switch(n){case"grow":s.size=s.size+o;break;case"shrink":s.size=s.size-o;break;case"left":s.x=s.x-o;break;case"right":s.x=s.x+o;break;case"up":s.y=s.y-o;break;case"down":s.y=s.y+o;break;case"rotate":s.rotate=s.rotate+o;break}return s},l)},g0={mixout(){return{parse:{transform:c=>y1(c)}}},hooks(){return{parseNodeAttributes(c,l){let s=l.getAttribute("data-fa-transform");return s&&(c.transform=y1(s)),c}}},provides(c){c.generateAbstractTransformGrouping=function(l){let{main:s,transform:a,containerWidth:e,iconWidth:n}=l,o={transform:"translate(".concat(e/2," 256)")},t="translate(".concat(a.x*32,", ").concat(a.y*32,") "),z="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),r="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(t," ").concat(z," ").concat(r)},M={transform:"translate(".concat(n/2*-1," -256)")},L={outer:o,inner:m,path:M};return{tag:"g",attributes:i({},L.outer),children:[{tag:"g",attributes:i({},L.inner),children:[{tag:s.icon.tag,children:s.icon.children,attributes:i(i({},s.icon.attributes),L.path)}]}]}}}},b2={x:0,y:0,width:"100%",height:"100%"};function A1(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return c.attributes&&(c.attributes.fill||l)&&(c.attributes.fill="black"),c}function N0(c){return c.tag==="g"?c.children:[c]}var b0={hooks(){return{parseNodeAttributes(c,l){let s=l.getAttribute("data-fa-mask"),a=s?L2(s.split(" ").map(e=>e.trim())):l3();return a.prefix||(a.prefix=D()),c.mask=a,c.maskId=l.getAttribute("data-fa-mask-id"),c}}},provides(c){c.generateAbstractMask=function(l){let{children:s,attributes:a,main:e,mask:n,maskId:o,transform:t}=l,{width:z,icon:r}=e,{width:m,icon:M}=n,L=p4({transform:t,containerWidth:m,iconWidth:z}),u={tag:"rect",attributes:i(i({},b2),{},{fill:"white"})},T=r.children?{children:r.children.map(A1)}:{},H={tag:"g",attributes:i({},L.inner),children:[A1(i({tag:r.tag,attributes:i(i({},r.attributes),L.path)},T))]},g={tag:"g",attributes:i({},L.outer),children:[H]},w="mask-".concat(o||J()),d="clip-".concat(o||J()),N={tag:"mask",attributes:i(i({},b2),{},{id:w,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[u,g]},U={tag:"defs",children:[{tag:"clipPath",attributes:{id:d},children:N0(M)},N]};return s.push(U,{tag:"rect",attributes:i({fill:"currentColor","clip-path":"url(#".concat(d,")"),mask:"url(#".concat(w,")")},b2)}),{children:s,attributes:a}}}},S0={provides(c){let l=!1;E.matchMedia&&(l=E.matchMedia("(prefers-reduced-motion: reduce)").matches),c.missingIconAbstract=function(){let s=[],a={fill:"currentColor"},e={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};s.push({tag:"path",attributes:i(i({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});let n=i(i({},e),{},{attributeName:"opacity"}),o={tag:"circle",attributes:i(i({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return l||o.children.push({tag:"animate",attributes:i(i({},e),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:i(i({},n),{},{values:"1;0;1;1;0;1;"})}),s.push(o),s.push({tag:"path",attributes:i(i({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:l?[]:[{tag:"animate",attributes:i(i({},n),{},{values:"1;0;0;0;0;1;"})}]}),l||s.push({tag:"path",attributes:i(i({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:i(i({},n),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:s}}}},w0={hooks(){return{parseNodeAttributes(c,l){let s=l.getAttribute("data-fa-symbol"),a=s===null?!1:s===""?!0:s;return c.symbol=a,c}}}},k0=[d4,f0,r0,z0,m0,x0,h0,g0,b0,S0,w0];R4(k0,{mixoutsTo:x});var B0=x.noAuto,E0=x.config,t3=x.library,f3=x.dom,D0=x.parse,R0=x.findIconDefinition,H0=x.toHtml,I0=x.icon,O0=x.layer,q0=x.text,U0=x.counter;var r3={prefix:"fas",iconName:"star",icon:[576,512,[11088,61446],"f005","M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"]};var y0={prefix:"fas",iconName:"circle-check",icon:[512,512,[61533,"check-circle"],"f058","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"]},z3=y0;var m3={prefix:"fas",iconName:"leaf",icon:[512,512,[],"f06c","M272 96c-78.6 0-145.1 51.5-167.7 122.5c33.6-17 71.5-26.5 111.7-26.5l88 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-16 0-72 0s0 0 0 0c-16.6 0-32.7 1.9-48.3 5.4c-25.9 5.9-49.9 16.4-71.4 30.7c0 0 0 0 0 0C38.3 298.8 0 364.9 0 440l0 16c0 13.3 10.7 24 24 24s24-10.7 24-24l0-16c0-48.7 20.7-92.5 53.8-123.2C121.6 392.3 190.3 448 272 448l1 0c132.1-.7 239-130.9 239-291.4c0-42.6-7.5-83.1-21.1-119.6c-2.6-6.9-12.7-6.6-16.2-.1C455.9 72.1 418.7 96 376 96L272 96z"]};var L3={prefix:"fas",iconName:"arrow-right",icon:[448,512,[8594],"f061","M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"]};var M3={prefix:"fas",iconName:"wrench",icon:[512,512,[128295],"f0ad","M352 320c88.4 0 160-71.6 160-160c0-15.3-2.2-30.1-6.2-44.2c-3.1-10.8-16.4-13.2-24.3-5.3l-76.8 76.8c-3 3-7.1 4.7-11.3 4.7L336 192c-8.8 0-16-7.2-16-16l0-57.4c0-4.2 1.7-8.3 4.7-11.3l76.8-76.8c7.9-7.9 5.4-21.2-5.3-24.3C382.1 2.2 367.3 0 352 0C263.6 0 192 71.6 192 160c0 19.1 3.4 37.5 9.5 54.5L19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L297.5 310.5c17 6.2 35.4 9.5 54.5 9.5zM80 408a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"]};var p3={prefix:"fas",iconName:"phone",icon:[512,512,[128222,128379],"f095","M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"]};var C3={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"]};var u3={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]};var d3={prefix:"fas",iconName:"check",icon:[448,512,[10003,10004],"f00c","M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"]};var x3={prefix:"fas",iconName:"triangle-exclamation",icon:[512,512,[9888,"exclamation-triangle","warning"],"f071","M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480L40 480c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"]};var h3={prefix:"fas",iconName:"paper-plane",icon:[512,512,[61913],"f1d8","M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480l0-83.6c0-4 1.5-7.8 4.2-10.8L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"]};t3.add(h3,p3,C3,d3,L3,z3,x3,u3,M3,m3,r3);f3.watch();})();
/*! Bundled license information:

@fortawesome/fontawesome-svg-core/index.mjs:
@fortawesome/free-solid-svg-icons/index.mjs:
  (*!
   * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
   * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
   * Copyright 2024 Fonticons, Inc.
   *)
*/
