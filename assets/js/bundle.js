(()=>{document.addEventListener("DOMContentLoaded",function(){let c=document.querySelectorAll("section[id]"),l=document.querySelectorAll("#navMenu a");function s(){let a="";c.forEach(e=>{let n=e.offsetTop-150;window.scrollY>=n&&(a=e.getAttribute("id"))}),l.forEach(e=>{e.getAttribute("href").replace("/#","")===a?e.setAttribute("aria-current","page"):e.removeAttribute("aria-current")})}window.addEventListener("scroll",s),s()});var w3={"Dakherstellingen - Hellende daken":"dakherstellingen_hellende_daken.html","Dakreiniging & Ontmossen":"dakreiniging_ontmossen.html","Dakherstellingen - Platte daken":"dakherstellingen_platte_daken.html"},b=document.getElementById("serviceModal"),J2=document.getElementById("modalTitle"),Z2=document.getElementById("modalDescription"),k3=[document.getElementById("closeModal"),document.getElementById("closeModalBottom")],C2=null;function c1(c){let l=w3[c],s=`assets/data/${l}`;C2=document.activeElement,fetch(s).then(a=>{if(!a.ok)throw new Error(`Kan ${l} niet laden`);return a.text()}).then(a=>{J2.textContent=c,Z2.innerHTML=a,b.setAttribute("aria-hidden","false"),b.classList.remove("opacity-0","translate-y-4","pointer-events-none"),b.classList.add("opacity-100","translate-y-0"),document.body.style.overflow="hidden",setTimeout(()=>document.getElementById("closeModal").focus(),100)}).catch(a=>{J2.textContent="",Z2.innerHTML=`
        <div class="text-red-700 bg-red-50 border border-red-200 rounded p-4">
          <p class="text-lg font-semibold mb-2">Er is een fout opgetreden</p>
          <p>${a.message||"Onbekende fout. Probeer het later opnieuw."}</p>
        </div>
      `,b.setAttribute("aria-hidden","false"),b.classList.remove("opacity-0","translate-y-4","pointer-events-none"),b.classList.add("opacity-100","translate-y-0"),document.body.style.overflow="hidden",setTimeout(()=>document.getElementById("closeModal").focus(),100)})}function u2(){b.classList.add("opacity-0","translate-y-4","pointer-events-none"),b.classList.remove("opacity-100","translate-y-0"),b.setAttribute("aria-hidden","true"),document.body.style.overflow="auto",document.getElementById("modalDescription")?.scrollIntoView({behavior:"auto",block:"start"}),C2&&C2.focus()}document.querySelectorAll(".card").forEach(c=>{let l=c.querySelector("h3").textContent.trim();c.setAttribute("tabindex","0"),c.setAttribute("role","button"),c.setAttribute("aria-label",`Meer informatie over ${l}`),c.addEventListener("click",()=>c1(l)),c.addEventListener("keydown",s=>{(s.key==="Enter"||s.key===" ")&&(s.preventDefault(),c1(l))})});k3.forEach(c=>c.addEventListener("click",u2));b.addEventListener("click",c=>{b.querySelector("div.bg-white").contains(c.target)||u2()});document.addEventListener("keydown",c=>{c.key==="Escape"&&b.classList.contains("opacity-100")&&u2()});var s2=document.getElementById("navToggle"),A=document.getElementById("navMenu");s2.addEventListener("click",()=>{let c=s2.getAttribute("aria-expanded")==="true";s2.setAttribute("aria-expanded",String(!c)),c?(A.classList.remove("opacity-100","scale-100"),A.classList.add("opacity-0","scale-95"),setTimeout(()=>{A.classList.add("hidden")},300)):(A.classList.remove("hidden"),requestAnimationFrame(()=>{A.classList.remove("opacity-0","scale-95"),A.classList.add("opacity-100","scale-100")}))});document.querySelectorAll("#navMenu a").forEach(c=>{c.addEventListener("click",()=>{window.innerWidth<768&&(s2.setAttribute("aria-expanded","false"),A.classList.remove("opacity-100","scale-100"),A.classList.add("opacity-0","scale-95"),setTimeout(()=>{A.classList.add("hidden")},300))})});var v=document.getElementById("toast"),y3=document.getElementById("toast-message");function _(c,l="success"){y3.textContent=c,v.classList.remove("bg-green-500","bg-red-500"),v.classList.add(l==="success"?"bg-green-500":"bg-red-500"),v.classList.add(l==="success"?"text-black":"text-white"),v.classList.remove("hidden"),requestAnimationFrame(()=>{v.classList.remove("translate-x-full","opacity-0"),v.classList.add("translate-x-0","opacity-100")}),setTimeout(()=>{v.classList.remove("translate-x-0","opacity-100"),v.classList.add("translate-x-full","opacity-0"),setTimeout(()=>{v.classList.add("hidden")},500)},4e3)}document.addEventListener("DOMContentLoaded",()=>{let c=document.getElementById("contactForm");c.addEventListener("submit",function(l){l.preventDefault();let s=document.getElementById("naam"),a=document.getElementById("email"),e=document.getElementById("dienst"),n=document.getElementById("onderwerp"),o=!0;if(s.value.trim()===""?(document.getElementById("error-naam").classList.remove("hidden"),o=!1):document.getElementById("error-naam").classList.add("hidden"),/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(a.value.trim())?document.getElementById("error-email").classList.add("hidden"):(document.getElementById("error-email").classList.remove("hidden"),o=!1),e.value?document.getElementById("error-dienst").classList.add("hidden"):(document.getElementById("error-dienst").classList.remove("hidden"),o=!1),n.value.trim().length<5?(document.getElementById("error-onderwerp").classList.remove("hidden"),o=!1):document.getElementById("error-onderwerp").classList.add("hidden"),!o){_("Controleer de invoervelden aub.","error");return}let z=new FormData(c);console.log(c.action),fetch(c.action,{method:"POST",body:z,headers:{Accept:"application/json"}}).then(f=>f.json()).then(f=>{if(f.success)c.reset(),_("Bedankt! Je aanvraag is verzonden.","success");else if(f.errors){for(let[m,M]of Object.entries(f.errors)){let L=document.getElementById("error-"+m);L&&(L.textContent=M,L.classList.remove("hidden"))}_("Er zijn enkele fouten. Controleer je invoer.","error")}else _("Onbekende fout. Probeer opnieuw.","error")}).catch(()=>{_("Verbindingsfout. Probeer het later opnieuw.","error")})})});var a2=[{url:"assets/img/dak_reiniging.webp",position:"center top"},{url:"assets/img/dak_herstelling.webp",position:"center center"}],l1=0,d2=!0,E=document.getElementById("carousel-reiniging"),G=document.getElementById("carousel-herstelling");E.style.backgroundImage=`url('${a2[0].url}')`;E.style.backgroundPosition=a2[0].position;E.style.opacity=1;G.style.opacity=0;function A3(){let c=(l1+1)%a2.length,l=a2[c];d2?(G.style.backgroundImage=`url('${l.url}')`,G.style.backgroundPosition=l.position,G.style.opacity=1,E.style.opacity=0):(E.style.backgroundImage=`url('${l.url}')`,E.style.backgroundPosition=l.position,E.style.opacity=1,G.style.opacity=0),d2=!d2,l1=c}[E,G].forEach(c=>{c.style.transition="opacity 1s ease-in-out",c.style.backgroundSize="cover",c.style.backgroundAttachment="fixed"});setInterval(A3,5e3);function v3(c,l,s){return(l=T3(l))in c?Object.defineProperty(c,l,{value:s,enumerable:!0,configurable:!0,writable:!0}):c[l]=s,c}function s1(c,l){var s=Object.keys(c);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(c);l&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(c,e).enumerable})),s.push.apply(s,a)}return s}function i(c){for(var l=1;l<arguments.length;l++){var s=arguments[l]!=null?arguments[l]:{};l%2?s1(Object(s),!0).forEach(function(a){v3(c,a,s[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(s)):s1(Object(s)).forEach(function(a){Object.defineProperty(c,a,Object.getOwnPropertyDescriptor(s,a))})}return c}function P3(c,l){if(typeof c!="object"||!c)return c;var s=c[Symbol.toPrimitive];if(s!==void 0){var a=s.call(c,l||"default");if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(l==="string"?String:Number)(c)}function T3(c){var l=P3(c,"string");return typeof l=="symbol"?l:l+""}var a1=()=>{},U2={},v1={},P1=null,T1={mark:a1,measure:a1};try{typeof window<"u"&&(U2=window),typeof document<"u"&&(v1=document),typeof MutationObserver<"u"&&(P1=MutationObserver),typeof performance<"u"&&(T1=performance)}catch{}var{userAgent:e1=""}=U2.navigator||{},D=U2,u=v1,n1=P1,e2=T1,F0=!!D.document,F=!!u.documentElement&&!!u.head&&typeof u.addEventListener=="function"&&typeof u.createElement=="function",F1=~e1.indexOf("MSIE")||~e1.indexOf("Trident/"),F3=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,E3=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,E1={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},B3={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},B1=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],h="classic",r2="duotone",D3="sharp",R3="sharp-duotone",D1=[h,r2,D3,R3],H3={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},I3={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},O3=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),q3={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},U3=["fak","fa-kit","fakd","fa-kit-duotone"],o1={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},W3=["kit"],_3={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},G3=["fak","fakd"],V3={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},i1={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},n2={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},j3=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],X3=["fak","fa-kit","fakd","fa-kit-duotone"],Y3={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},$3={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},K3={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},S2={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},Q3=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],w2=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...j3,...Q3],J3=["solid","regular","light","thin","duotone","brands"],R1=[1,2,3,4,5,6,7,8,9,10],Z3=R1.concat([11,12,13,14,15,16,17,18,19,20]),c4=[...Object.keys(K3),...J3,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",n2.GROUP,n2.SWAP_OPACITY,n2.PRIMARY,n2.SECONDARY].concat(R1.map(c=>"".concat(c,"x"))).concat(Z3.map(c=>"w-".concat(c))),l4={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},P="___FONT_AWESOME___",k2=16,H1="fa",I1="svg-inline--fa",O="data-fa-i2svg",y2="data-fa-pseudo-element",s4="data-fa-pseudo-element-pending",W2="data-prefix",_2="data-icon",t1="fontawesome-i2svg",a4="async",e4=["HTML","HEAD","STYLE","SCRIPT"],O1=(()=>{try{return!0}catch{return!1}})();function c2(c){return new Proxy(c,{get(l,s){return s in l?l[s]:l[h]}})}var q1=i({},E1);q1[h]=i(i(i(i({},{"fa-duotone":"duotone"}),E1[h]),o1.kit),o1["kit-duotone"]);var n4=c2(q1),A2=i({},q3);A2[h]=i(i(i(i({},{duotone:"fad"}),A2[h]),i1.kit),i1["kit-duotone"]);var f1=c2(A2),v2=i({},S2);v2[h]=i(i({},v2[h]),V3.kit);var G2=c2(v2),P2=i({},$3);P2[h]=i(i({},P2[h]),_3.kit);var E0=c2(P2),o4=F3,U1="fa-layers-text",i4=E3,t4=i({},H3),B0=c2(t4),f4=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],x2=B3,r4=[...W3,...c4],K=D.FontAwesomeConfig||{};function z4(c){var l=u.querySelector("script["+c+"]");if(l)return l.getAttribute(c)}function m4(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}u&&typeof u.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(l=>{let[s,a]=l,e=m4(z4(s));e!=null&&(K[a]=e)});var W1={styleDefault:"solid",familyDefault:h,cssPrefix:H1,replacementClass:I1,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};K.familyPrefix&&(K.cssPrefix=K.familyPrefix);var X=i(i({},W1),K);X.autoReplaceSvg||(X.observeMutations=!1);var r={};Object.keys(W1).forEach(c=>{Object.defineProperty(r,c,{enumerable:!0,set:function(l){X[c]=l,Q.forEach(s=>s(r))},get:function(){return X[c]}})});Object.defineProperty(r,"familyPrefix",{enumerable:!0,set:function(c){X.cssPrefix=c,Q.forEach(l=>l(r))},get:function(){return X.cssPrefix}});D.FontAwesomeConfig=r;var Q=[];function L4(c){return Q.push(c),()=>{Q.splice(Q.indexOf(c),1)}}var B=k2,k={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function M4(c){if(!c||!F)return;let l=u.createElement("style");l.setAttribute("type","text/css"),l.innerHTML=c;let s=u.head.childNodes,a=null;for(let e=s.length-1;e>-1;e--){let n=s[e],o=(n.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=n)}return u.head.insertBefore(l,a),c}var p4="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function J(){let c=12,l="";for(;c-- >0;)l+=p4[Math.random()*62|0];return l}function Y(c){let l=[];for(let s=(c||[]).length>>>0;s--;)l[s]=c[s];return l}function V2(c){return c.classList?Y(c.classList):(c.getAttribute("class")||"").split(" ").filter(l=>l)}function _1(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function C4(c){return Object.keys(c||{}).reduce((l,s)=>l+"".concat(s,'="').concat(_1(c[s]),'" '),"").trim()}function z2(c){return Object.keys(c||{}).reduce((l,s)=>l+"".concat(s,": ").concat(c[s].trim(),";"),"")}function j2(c){return c.size!==k.size||c.x!==k.x||c.y!==k.y||c.rotate!==k.rotate||c.flipX||c.flipY}function u4(c){let{transform:l,containerWidth:s,iconWidth:a}=c,e={transform:"translate(".concat(s/2," 256)")},n="translate(".concat(l.x*32,", ").concat(l.y*32,") "),o="scale(".concat(l.size/16*(l.flipX?-1:1),", ").concat(l.size/16*(l.flipY?-1:1),") "),t="rotate(".concat(l.rotate," 0 0)"),z={transform:"".concat(n," ").concat(o," ").concat(t)},f={transform:"translate(".concat(a/2*-1," -256)")};return{outer:e,inner:z,path:f}}function d4(c){let{transform:l,width:s=k2,height:a=k2,startCentered:e=!1}=c,n="";return e&&F1?n+="translate(".concat(l.x/B-s/2,"em, ").concat(l.y/B-a/2,"em) "):e?n+="translate(calc(-50% + ".concat(l.x/B,"em), calc(-50% + ").concat(l.y/B,"em)) "):n+="translate(".concat(l.x/B,"em, ").concat(l.y/B,"em) "),n+="scale(".concat(l.size/B*(l.flipX?-1:1),", ").concat(l.size/B*(l.flipY?-1:1),") "),n+="rotate(".concat(l.rotate,"deg) "),n}var x4=`:root, :host {
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
}`;function G1(){let c=H1,l=I1,s=r.cssPrefix,a=r.replacementClass,e=x4;if(s!==c||a!==l){let n=new RegExp("\\.".concat(c,"\\-"),"g"),o=new RegExp("\\--".concat(c,"\\-"),"g"),t=new RegExp("\\.".concat(l),"g");e=e.replace(n,".".concat(s,"-")).replace(o,"--".concat(s,"-")).replace(t,".".concat(a))}return e}var r1=!1;function h2(){r.autoAddCss&&!r1&&(M4(G1()),r1=!0)}var h4={mixout(){return{dom:{css:G1,insertCss:h2}}},hooks(){return{beforeDOMElementCreation(){h2()},beforeI2svg(){h2()}}}},T=D||{};T[P]||(T[P]={});T[P].styles||(T[P].styles={});T[P].hooks||(T[P].hooks={});T[P].shims||(T[P].shims=[]);var y=T[P],V1=[],j1=function(){u.removeEventListener("DOMContentLoaded",j1),t2=1,V1.map(c=>c())},t2=!1;F&&(t2=(u.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(u.readyState),t2||u.addEventListener("DOMContentLoaded",j1));function g4(c){F&&(t2?setTimeout(c,0):V1.push(c))}function l2(c){let{tag:l,attributes:s={},children:a=[]}=c;return typeof c=="string"?_1(c):"<".concat(l," ").concat(C4(s),">").concat(a.map(l2).join(""),"</").concat(l,">")}function z1(c,l,s){if(c&&c[l]&&c[l][s])return{prefix:l,iconName:s,icon:c[l][s]}}var N4=function(l,s){return function(a,e,n,o){return l.call(s,a,e,n,o)}},g2=function(l,s,a,e){var n=Object.keys(l),o=n.length,t=e!==void 0?N4(s,e):s,z,f,m;for(a===void 0?(z=1,m=l[n[0]]):(z=0,m=a);z<o;z++)f=n[z],m=t(m,l[f],f,l);return m};function b4(c){let l=[],s=0,a=c.length;for(;s<a;){let e=c.charCodeAt(s++);if(e>=55296&&e<=56319&&s<a){let n=c.charCodeAt(s++);(n&64512)==56320?l.push(((e&1023)<<10)+(n&1023)+65536):(l.push(e),s--)}else l.push(e)}return l}function T2(c){let l=b4(c);return l.length===1?l[0].toString(16):null}function S4(c,l){let s=c.length,a=c.charCodeAt(l),e;return a>=55296&&a<=56319&&s>l+1&&(e=c.charCodeAt(l+1),e>=56320&&e<=57343)?(a-55296)*1024+e-56320+65536:a}function m1(c){return Object.keys(c).reduce((l,s)=>{let a=c[s];return!!a.icon?l[a.iconName]=a.icon:l[s]=a,l},{})}function F2(c,l){let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},{skipHooks:a=!1}=s,e=m1(l);typeof y.hooks.addPack=="function"&&!a?y.hooks.addPack(c,m1(l)):y.styles[c]=i(i({},y.styles[c]||{}),e),c==="fas"&&F2("fa",l)}var{styles:Z,shims:w4}=y,X1=Object.keys(G2),k4=X1.reduce((c,l)=>(c[l]=Object.keys(G2[l]),c),{}),X2=null,Y1={},$1={},K1={},Q1={},J1={};function y4(c){return~r4.indexOf(c)}function A4(c,l){let s=l.split("-"),a=s[0],e=s.slice(1).join("-");return a===c&&e!==""&&!y4(e)?e:null}var Z1=()=>{let c=a=>g2(Z,(e,n,o)=>(e[o]=g2(n,a,{}),e),{});Y1=c((a,e,n)=>(e[3]&&(a[e[3]]=n),e[2]&&e[2].filter(t=>typeof t=="number").forEach(t=>{a[t.toString(16)]=n}),a)),$1=c((a,e,n)=>(a[n]=n,e[2]&&e[2].filter(t=>typeof t=="string").forEach(t=>{a[t]=n}),a)),J1=c((a,e,n)=>{let o=e[2];return a[n]=n,o.forEach(t=>{a[t]=n}),a});let l="far"in Z||r.autoFetchSvg,s=g2(w4,(a,e)=>{let n=e[0],o=e[1],t=e[2];return o==="far"&&!l&&(o="fas"),typeof n=="string"&&(a.names[n]={prefix:o,iconName:t}),typeof n=="number"&&(a.unicodes[n.toString(16)]={prefix:o,iconName:t}),a},{names:{},unicodes:{}});K1=s.names,Q1=s.unicodes,X2=m2(r.styleDefault,{family:r.familyDefault})};L4(c=>{X2=m2(c.styleDefault,{family:r.familyDefault})});Z1();function Y2(c,l){return(Y1[c]||{})[l]}function v4(c,l){return($1[c]||{})[l]}function I(c,l){return(J1[c]||{})[l]}function c3(c){return K1[c]||{prefix:null,iconName:null}}function P4(c){let l=Q1[c],s=Y2("fas",c);return l||(s?{prefix:"fas",iconName:s}:null)||{prefix:null,iconName:null}}function R(){return X2}var l3=()=>({prefix:null,iconName:null,rest:[]});function T4(c){let l=h,s=X1.reduce((a,e)=>(a[e]="".concat(r.cssPrefix,"-").concat(e),a),{});return D1.forEach(a=>{(c.includes(s[a])||c.some(e=>k4[a].includes(e)))&&(l=a)}),l}function m2(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{family:s=h}=l,a=n4[s][c];if(s===r2&&!c)return"fad";let e=f1[s][c]||f1[s][a],n=c in y.styles?c:null;return e||n||null}function F4(c){let l=[],s=null;return c.forEach(a=>{let e=A4(r.cssPrefix,a);e?s=e:a&&l.push(a)}),{iconName:s,rest:l}}function L1(c){return c.sort().filter((l,s,a)=>a.indexOf(l)===s)}function L2(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{skipLookups:s=!1}=l,a=null,e=w2.concat(X3),n=L1(c.filter(M=>e.includes(M))),o=L1(c.filter(M=>!w2.includes(M))),t=n.filter(M=>(a=M,!B1.includes(M))),[z=null]=t,f=T4(n),m=i(i({},F4(o)),{},{prefix:m2(z,{family:f})});return i(i(i({},m),R4({values:c,family:f,styles:Z,config:r,canonical:m,givenPrefix:a})),E4(s,a,m))}function E4(c,l,s){let{prefix:a,iconName:e}=s;if(c||!a||!e)return{prefix:a,iconName:e};let n=l==="fa"?c3(e):{},o=I(a,e);return e=n.iconName||o||e,a=n.prefix||a,a==="far"&&!Z.far&&Z.fas&&!r.autoFetchSvg&&(a="fas"),{prefix:a,iconName:e}}var B4=D1.filter(c=>c!==h||c!==r2),D4=Object.keys(S2).filter(c=>c!==h).map(c=>Object.keys(S2[c])).flat();function R4(c){let{values:l,family:s,canonical:a,givenPrefix:e="",styles:n={},config:o={}}=c,t=s===r2,z=l.includes("fa-duotone")||l.includes("fad"),f=o.familyDefault==="duotone",m=a.prefix==="fad"||a.prefix==="fa-duotone";if(!t&&(z||f||m)&&(a.prefix="fad"),(l.includes("fa-brands")||l.includes("fab"))&&(a.prefix="fab"),!a.prefix&&B4.includes(s)&&(Object.keys(n).find(L=>D4.includes(L))||o.autoFetchSvg)){let L=O3.get(s).defaultShortPrefixId;a.prefix=L,a.iconName=I(a.prefix,a.iconName)||a.iconName}return(a.prefix==="fa"||e==="fa")&&(a.prefix=R()||"fas"),a}var E2=class{constructor(){this.definitions={}}add(){for(var l=arguments.length,s=new Array(l),a=0;a<l;a++)s[a]=arguments[a];let e=s.reduce(this._pullDefinitions,{});Object.keys(e).forEach(n=>{this.definitions[n]=i(i({},this.definitions[n]||{}),e[n]),F2(n,e[n]);let o=G2[h][n];o&&F2(o,e[n]),Z1()})}reset(){this.definitions={}}_pullDefinitions(l,s){let a=s.prefix&&s.iconName&&s.icon?{0:s}:s;return Object.keys(a).map(e=>{let{prefix:n,iconName:o,icon:t}=a[e],z=t[2];l[n]||(l[n]={}),z.length>0&&z.forEach(f=>{typeof f=="string"&&(l[n][f]=t)}),l[n][o]=t}),l}},M1=[],V={},j={},H4=Object.keys(j);function I4(c,l){let{mixoutsTo:s}=l;return M1=c,V={},Object.keys(j).forEach(a=>{H4.indexOf(a)===-1&&delete j[a]}),M1.forEach(a=>{let e=a.mixout?a.mixout():{};if(Object.keys(e).forEach(n=>{typeof e[n]=="function"&&(s[n]=e[n]),typeof e[n]=="object"&&Object.keys(e[n]).forEach(o=>{s[n]||(s[n]={}),s[n][o]=e[n][o]})}),a.hooks){let n=a.hooks();Object.keys(n).forEach(o=>{V[o]||(V[o]=[]),V[o].push(n[o])})}a.provides&&a.provides(j)}),s}function B2(c,l){for(var s=arguments.length,a=new Array(s>2?s-2:0),e=2;e<s;e++)a[e-2]=arguments[e];return(V[c]||[]).forEach(o=>{l=o.apply(null,[l,...a])}),l}function q(c){for(var l=arguments.length,s=new Array(l>1?l-1:0),a=1;a<l;a++)s[a-1]=arguments[a];(V[c]||[]).forEach(n=>{n.apply(null,s)})}function H(){let c=arguments[0],l=Array.prototype.slice.call(arguments,1);return j[c]?j[c].apply(null,l):void 0}function D2(c){c.prefix==="fa"&&(c.prefix="fas");let{iconName:l}=c,s=c.prefix||R();if(l)return l=I(s,l)||l,z1(s3.definitions,s,l)||z1(y.styles,s,l)}var s3=new E2,O4=()=>{r.autoReplaceSvg=!1,r.observeMutations=!1,q("noAuto")},q4={i2svg:function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return F?(q("beforeI2svg",c),H("pseudoElements2svg",c),H("i2svg",c)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:l}=c;r.autoReplaceSvg===!1&&(r.autoReplaceSvg=!0),r.observeMutations=!0,g4(()=>{W4({autoReplaceSvgRoot:l}),q("watch",c)})}},U4={icon:c=>{if(c===null)return null;if(typeof c=="object"&&c.prefix&&c.iconName)return{prefix:c.prefix,iconName:I(c.prefix,c.iconName)||c.iconName};if(Array.isArray(c)&&c.length===2){let l=c[1].indexOf("fa-")===0?c[1].slice(3):c[1],s=m2(c[0]);return{prefix:s,iconName:I(s,l)||l}}if(typeof c=="string"&&(c.indexOf("".concat(r.cssPrefix,"-"))>-1||c.match(o4))){let l=L2(c.split(" "),{skipLookups:!0});return{prefix:l.prefix||R(),iconName:I(l.prefix,l.iconName)||l.iconName}}if(typeof c=="string"){let l=R();return{prefix:l,iconName:I(l,c)||c}}}},g={noAuto:O4,config:r,dom:q4,parse:U4,library:s3,findIconDefinition:D2,toHtml:l2},W4=function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:l=u}=c;(Object.keys(y.styles).length>0||r.autoFetchSvg)&&F&&r.autoReplaceSvg&&g.dom.i2svg({node:l})};function M2(c,l){return Object.defineProperty(c,"abstract",{get:l}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(s=>l2(s))}}),Object.defineProperty(c,"node",{get:function(){if(!F)return;let s=u.createElement("div");return s.innerHTML=c.html,s.children}}),c}function _4(c){let{children:l,main:s,mask:a,attributes:e,styles:n,transform:o}=c;if(j2(o)&&s.found&&!a.found){let{width:t,height:z}=s,f={x:t/z/2,y:.5};e.style=z2(i(i({},n),{},{"transform-origin":"".concat(f.x+o.x/16,"em ").concat(f.y+o.y/16,"em")}))}return[{tag:"svg",attributes:e,children:l}]}function G4(c){let{prefix:l,iconName:s,children:a,attributes:e,symbol:n}=c,o=n===!0?"".concat(l,"-").concat(r.cssPrefix,"-").concat(s):n;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:i(i({},e),{},{id:o}),children:a}]}]}function $2(c){let{icons:{main:l,mask:s},prefix:a,iconName:e,transform:n,symbol:o,title:t,maskId:z,titleId:f,extra:m,watchable:M=!1}=c,{width:L,height:x}=s.found?s:l,N=G3.includes(a),S=[r.replacementClass,e?"".concat(r.cssPrefix,"-").concat(e):""].filter(W=>m.classes.indexOf(W)===-1).filter(W=>W!==""||!!W).concat(m.classes).join(" "),C={children:[],attributes:i(i({},m.attributes),{},{"data-prefix":a,"data-icon":e,class:S,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(L," ").concat(x)})},d=N&&!~m.classes.indexOf("fa-fw")?{width:"".concat(L/x*16*.0625,"em")}:{};M&&(C.attributes[O]=""),t&&(C.children.push({tag:"title",attributes:{id:C.attributes["aria-labelledby"]||"title-".concat(f||J())},children:[t]}),delete C.attributes.title);let p=i(i({},C),{},{prefix:a,iconName:e,main:l,mask:s,maskId:z,transform:n,symbol:o,styles:i(i({},d),m.styles)}),{children:w,attributes:U}=s.found&&l.found?H("generateAbstractMask",p)||{children:[],attributes:{}}:H("generateAbstractIcon",p)||{children:[],attributes:{}};return p.children=w,p.attributes=U,o?G4(p):_4(p)}function p1(c){let{content:l,width:s,height:a,transform:e,title:n,extra:o,watchable:t=!1}=c,z=i(i(i({},o.attributes),n?{title:n}:{}),{},{class:o.classes.join(" ")});t&&(z[O]="");let f=i({},o.styles);j2(e)&&(f.transform=d4({transform:e,startCentered:!0,width:s,height:a}),f["-webkit-transform"]=f.transform);let m=z2(f);m.length>0&&(z.style=m);let M=[];return M.push({tag:"span",attributes:z,children:[l]}),n&&M.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),M}function V4(c){let{content:l,title:s,extra:a}=c,e=i(i(i({},a.attributes),s?{title:s}:{}),{},{class:a.classes.join(" ")}),n=z2(a.styles);n.length>0&&(e.style=n);let o=[];return o.push({tag:"span",attributes:e,children:[l]}),s&&o.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),o}var{styles:N2}=y;function R2(c){let l=c[0],s=c[1],[a]=c.slice(4),e=null;return Array.isArray(a)?e={tag:"g",attributes:{class:"".concat(r.cssPrefix,"-").concat(x2.GROUP)},children:[{tag:"path",attributes:{class:"".concat(r.cssPrefix,"-").concat(x2.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(r.cssPrefix,"-").concat(x2.PRIMARY),fill:"currentColor",d:a[1]}}]}:e={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:l,height:s,icon:e}}var j4={found:!1,width:512,height:512};function X4(c,l){!O1&&!r.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(l,'" is missing.'))}function H2(c,l){let s=l;return l==="fa"&&r.styleDefault!==null&&(l=R()),new Promise((a,e)=>{if(s==="fa"){let n=c3(c)||{};c=n.iconName||c,l=n.prefix||l}if(c&&l&&N2[l]&&N2[l][c]){let n=N2[l][c];return a(R2(n))}X4(c,l),a(i(i({},j4),{},{icon:r.showMissingIcons&&c?H("missingIconAbstract")||{}:{}}))})}var C1=()=>{},I2=r.measurePerformance&&e2&&e2.mark&&e2.measure?e2:{mark:C1,measure:C1},$='FA "6.7.2"',Y4=c=>(I2.mark("".concat($," ").concat(c," begins")),()=>a3(c)),a3=c=>{I2.mark("".concat($," ").concat(c," ends")),I2.measure("".concat($," ").concat(c),"".concat($," ").concat(c," begins"),"".concat($," ").concat(c," ends"))},K2={begin:Y4,end:a3},o2=()=>{};function u1(c){return typeof(c.getAttribute?c.getAttribute(O):null)=="string"}function $4(c){let l=c.getAttribute?c.getAttribute(W2):null,s=c.getAttribute?c.getAttribute(_2):null;return l&&s}function K4(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(r.replacementClass)}function Q4(){return r.autoReplaceSvg===!0?i2.replace:i2[r.autoReplaceSvg]||i2.replace}function J4(c){return u.createElementNS("http://www.w3.org/2000/svg",c)}function Z4(c){return u.createElement(c)}function e3(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{ceFn:s=c.tag==="svg"?J4:Z4}=l;if(typeof c=="string")return u.createTextNode(c);let a=s(c.tag);return Object.keys(c.attributes||[]).forEach(function(n){a.setAttribute(n,c.attributes[n])}),(c.children||[]).forEach(function(n){a.appendChild(e3(n,{ceFn:s}))}),a}function c0(c){let l=" ".concat(c.outerHTML," ");return l="".concat(l,"Font Awesome fontawesome.com "),l}var i2={replace:function(c){let l=c[0];if(l.parentNode)if(c[1].forEach(s=>{l.parentNode.insertBefore(e3(s),l)}),l.getAttribute(O)===null&&r.keepOriginalSource){let s=u.createComment(c0(l));l.parentNode.replaceChild(s,l)}else l.remove()},nest:function(c){let l=c[0],s=c[1];if(~V2(l).indexOf(r.replacementClass))return i2.replace(c);let a=new RegExp("".concat(r.cssPrefix,"-.*"));if(delete s[0].attributes.id,s[0].attributes.class){let n=s[0].attributes.class.split(" ").reduce((o,t)=>(t===r.replacementClass||t.match(a)?o.toSvg.push(t):o.toNode.push(t),o),{toNode:[],toSvg:[]});s[0].attributes.class=n.toSvg.join(" "),n.toNode.length===0?l.removeAttribute("class"):l.setAttribute("class",n.toNode.join(" "))}let e=s.map(n=>l2(n)).join(`
`);l.setAttribute(O,""),l.innerHTML=e}};function d1(c){c()}function n3(c,l){let s=typeof l=="function"?l:o2;if(c.length===0)s();else{let a=d1;r.mutateApproach===a4&&(a=D.requestAnimationFrame||d1),a(()=>{let e=Q4(),n=K2.begin("mutate");c.map(e),n(),s()})}}var Q2=!1;function o3(){Q2=!0}function O2(){Q2=!1}var f2=null;function x1(c){if(!n1||!r.observeMutations)return;let{treeCallback:l=o2,nodeCallback:s=o2,pseudoElementsCallback:a=o2,observeMutationsRoot:e=u}=c;f2=new n1(n=>{if(Q2)return;let o=R();Y(n).forEach(t=>{if(t.type==="childList"&&t.addedNodes.length>0&&!u1(t.addedNodes[0])&&(r.searchPseudoElements&&a(t.target),l(t.target)),t.type==="attributes"&&t.target.parentNode&&r.searchPseudoElements&&a(t.target.parentNode),t.type==="attributes"&&u1(t.target)&&~f4.indexOf(t.attributeName))if(t.attributeName==="class"&&$4(t.target)){let{prefix:z,iconName:f}=L2(V2(t.target));t.target.setAttribute(W2,z||o),f&&t.target.setAttribute(_2,f)}else K4(t.target)&&s(t.target)})}),F&&f2.observe(e,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function l0(){f2&&f2.disconnect()}function s0(c){let l=c.getAttribute("style"),s=[];return l&&(s=l.split(";").reduce((a,e)=>{let n=e.split(":"),o=n[0],t=n.slice(1);return o&&t.length>0&&(a[o]=t.join(":").trim()),a},{})),s}function a0(c){let l=c.getAttribute("data-prefix"),s=c.getAttribute("data-icon"),a=c.innerText!==void 0?c.innerText.trim():"",e=L2(V2(c));return e.prefix||(e.prefix=R()),l&&s&&(e.prefix=l,e.iconName=s),e.iconName&&e.prefix||(e.prefix&&a.length>0&&(e.iconName=v4(e.prefix,c.innerText)||Y2(e.prefix,T2(c.innerText))),!e.iconName&&r.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(e.iconName=c.firstChild.data)),e}function e0(c){let l=Y(c.attributes).reduce((e,n)=>(e.name!=="class"&&e.name!=="style"&&(e[n.name]=n.value),e),{}),s=c.getAttribute("title"),a=c.getAttribute("data-fa-title-id");return r.autoA11y&&(s?l["aria-labelledby"]="".concat(r.replacementClass,"-title-").concat(a||J()):(l["aria-hidden"]="true",l.focusable="false")),l}function n0(){return{iconName:null,title:null,titleId:null,prefix:null,transform:k,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function h1(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},{iconName:s,prefix:a,rest:e}=a0(c),n=e0(c),o=B2("parseNodeAttributes",{},c),t=l.styleParser?s0(c):[];return i({iconName:s,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:a,transform:k,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:e,styles:t,attributes:n}},o)}var{styles:o0}=y;function i3(c){let l=r.autoReplaceSvg==="nest"?h1(c,{styleParser:!1}):h1(c);return~l.extra.classes.indexOf(U1)?H("generateLayersText",c,l):H("generateSvgReplacementMutation",c,l)}function i0(){return[...U3,...w2]}function g1(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!F)return Promise.resolve();let s=u.documentElement.classList,a=m=>s.add("".concat(t1,"-").concat(m)),e=m=>s.remove("".concat(t1,"-").concat(m)),n=r.autoFetchSvg?i0():B1.concat(Object.keys(o0));n.includes("fa")||n.push("fa");let o=[".".concat(U1,":not([").concat(O,"])")].concat(n.map(m=>".".concat(m,":not([").concat(O,"])"))).join(", ");if(o.length===0)return Promise.resolve();let t=[];try{t=Y(c.querySelectorAll(o))}catch{}if(t.length>0)a("pending"),e("complete");else return Promise.resolve();let z=K2.begin("onTree"),f=t.reduce((m,M)=>{try{let L=i3(M);L&&m.push(L)}catch(L){O1||L.name==="MissingIcon"&&console.error(L)}return m},[]);return new Promise((m,M)=>{Promise.all(f).then(L=>{n3(L,()=>{a("active"),a("complete"),e("pending"),typeof l=="function"&&l(),z(),m()})}).catch(L=>{z(),M(L)})})}function t0(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;i3(c).then(s=>{s&&n3([s],l)})}function f0(c){return function(l){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(l||{}).icon?l:D2(l||{}),{mask:e}=s;return e&&(e=(e||{}).icon?e:D2(e||{})),c(a,i(i({},s),{},{mask:e}))}}var r0=function(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:s=k,symbol:a=!1,mask:e=null,maskId:n=null,title:o=null,titleId:t=null,classes:z=[],attributes:f={},styles:m={}}=l;if(!c)return;let{prefix:M,iconName:L,icon:x}=c;return M2(i({type:"icon"},c),()=>(q("beforeDOMElementCreation",{iconDefinition:c,params:l}),r.autoA11y&&(o?f["aria-labelledby"]="".concat(r.replacementClass,"-title-").concat(t||J()):(f["aria-hidden"]="true",f.focusable="false")),$2({icons:{main:R2(x),mask:e?R2(e.icon):{found:!1,width:null,height:null,icon:{}}},prefix:M,iconName:L,transform:i(i({},k),s),symbol:a,title:o,maskId:n,titleId:t,extra:{attributes:f,styles:m,classes:z}})))},z0={mixout(){return{icon:f0(r0)}},hooks(){return{mutationObserverCallbacks(c){return c.treeCallback=g1,c.nodeCallback=t0,c}}},provides(c){c.i2svg=function(l){let{node:s=u,callback:a=()=>{}}=l;return g1(s,a)},c.generateSvgReplacementMutation=function(l,s){let{iconName:a,title:e,titleId:n,prefix:o,transform:t,symbol:z,mask:f,maskId:m,extra:M}=s;return new Promise((L,x)=>{Promise.all([H2(a,o),f.iconName?H2(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(N=>{let[S,C]=N;L([l,$2({icons:{main:S,mask:C},prefix:o,iconName:a,transform:t,symbol:z,maskId:m,title:e,titleId:n,extra:M,watchable:!0})])}).catch(x)})},c.generateAbstractIcon=function(l){let{children:s,attributes:a,main:e,transform:n,styles:o}=l,t=z2(o);t.length>0&&(a.style=t);let z;return j2(n)&&(z=H("generateAbstractTransformGrouping",{main:e,transform:n,containerWidth:e.width,iconWidth:e.width})),s.push(z||e.icon),{children:s,attributes:a}}}},m0={mixout(){return{layer(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{classes:s=[]}=l;return M2({type:"layer"},()=>{q("beforeDOMElementCreation",{assembler:c,params:l});let a=[];return c(e=>{Array.isArray(e)?e.map(n=>{a=a.concat(n.abstract)}):a=a.concat(e.abstract)}),[{tag:"span",attributes:{class:["".concat(r.cssPrefix,"-layers"),...s].join(" ")},children:a}]})}}}},L0={mixout(){return{counter(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{title:s=null,classes:a=[],attributes:e={},styles:n={}}=l;return M2({type:"counter",content:c},()=>(q("beforeDOMElementCreation",{content:c,params:l}),V4({content:c.toString(),title:s,extra:{attributes:e,styles:n,classes:["".concat(r.cssPrefix,"-layers-counter"),...a]}})))}}}},M0={mixout(){return{text(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:s=k,title:a=null,classes:e=[],attributes:n={},styles:o={}}=l;return M2({type:"text",content:c},()=>(q("beforeDOMElementCreation",{content:c,params:l}),p1({content:c,transform:i(i({},k),s),title:a,extra:{attributes:n,styles:o,classes:["".concat(r.cssPrefix,"-layers-text"),...e]}})))}}},provides(c){c.generateLayersText=function(l,s){let{title:a,transform:e,extra:n}=s,o=null,t=null;if(F1){let z=parseInt(getComputedStyle(l).fontSize,10),f=l.getBoundingClientRect();o=f.width/z,t=f.height/z}return r.autoA11y&&!a&&(n.attributes["aria-hidden"]="true"),Promise.resolve([l,p1({content:l.innerHTML,width:o,height:t,transform:e,title:a,extra:n,watchable:!0})])}}},p0=new RegExp('"',"ug"),N1=[1105920,1112319],b1=i(i(i(i({},{FontAwesome:{normal:"fas",400:"fas"}}),I3),l4),Y3),q2=Object.keys(b1).reduce((c,l)=>(c[l.toLowerCase()]=b1[l],c),{}),C0=Object.keys(q2).reduce((c,l)=>{let s=q2[l];return c[l]=s[900]||[...Object.entries(s)][0][1],c},{});function u0(c){let l=c.replace(p0,""),s=S4(l,0),a=s>=N1[0]&&s<=N1[1],e=l.length===2?l[0]===l[1]:!1;return{value:T2(e?l[0]:l),isSecondary:a||e}}function d0(c,l){let s=c.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(l),e=isNaN(a)?"normal":a;return(q2[s]||{})[e]||C0[s]}function S1(c,l){let s="".concat(s4).concat(l.replace(":","-"));return new Promise((a,e)=>{if(c.getAttribute(s)!==null)return a();let o=Y(c.children).filter(L=>L.getAttribute(y2)===l)[0],t=D.getComputedStyle(c,l),z=t.getPropertyValue("font-family"),f=z.match(i4),m=t.getPropertyValue("font-weight"),M=t.getPropertyValue("content");if(o&&!f)return c.removeChild(o),a();if(f&&M!=="none"&&M!==""){let L=t.getPropertyValue("content"),x=d0(z,m),{value:N,isSecondary:S}=u0(L),C=f[0].startsWith("FontAwesome"),d=Y2(x,N),p=d;if(C){let w=P4(N);w.iconName&&w.prefix&&(d=w.iconName,x=w.prefix)}if(d&&!S&&(!o||o.getAttribute(W2)!==x||o.getAttribute(_2)!==p)){c.setAttribute(s,p),o&&c.removeChild(o);let w=n0(),{extra:U}=w;U.attributes[y2]=l,H2(d,x).then(W=>{let b3=$2(i(i({},w),{},{icons:{main:W,mask:l3()},prefix:x,iconName:p,extra:U,watchable:!0})),p2=u.createElementNS("http://www.w3.org/2000/svg","svg");l==="::before"?c.insertBefore(p2,c.firstChild):c.appendChild(p2),p2.outerHTML=b3.map(S3=>l2(S3)).join(`
`),c.removeAttribute(s),a()}).catch(e)}else a()}else a()})}function x0(c){return Promise.all([S1(c,"::before"),S1(c,"::after")])}function h0(c){return c.parentNode!==document.head&&!~e4.indexOf(c.tagName.toUpperCase())&&!c.getAttribute(y2)&&(!c.parentNode||c.parentNode.tagName!=="svg")}function w1(c){if(F)return new Promise((l,s)=>{let a=Y(c.querySelectorAll("*")).filter(h0).map(x0),e=K2.begin("searchPseudoElements");o3(),Promise.all(a).then(()=>{e(),O2(),l()}).catch(()=>{e(),O2(),s()})})}var g0={hooks(){return{mutationObserverCallbacks(c){return c.pseudoElementsCallback=w1,c}}},provides(c){c.pseudoElements2svg=function(l){let{node:s=u}=l;r.searchPseudoElements&&w1(s)}}},k1=!1,N0={mixout(){return{dom:{unwatch(){o3(),k1=!0}}}},hooks(){return{bootstrap(){x1(B2("mutationObserverCallbacks",{}))},noAuto(){l0()},watch(c){let{observeMutationsRoot:l}=c;k1?O2():x1(B2("mutationObserverCallbacks",{observeMutationsRoot:l}))}}}},y1=c=>{let l={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return c.toLowerCase().split(" ").reduce((s,a)=>{let e=a.toLowerCase().split("-"),n=e[0],o=e.slice(1).join("-");if(n&&o==="h")return s.flipX=!0,s;if(n&&o==="v")return s.flipY=!0,s;if(o=parseFloat(o),isNaN(o))return s;switch(n){case"grow":s.size=s.size+o;break;case"shrink":s.size=s.size-o;break;case"left":s.x=s.x-o;break;case"right":s.x=s.x+o;break;case"up":s.y=s.y-o;break;case"down":s.y=s.y+o;break;case"rotate":s.rotate=s.rotate+o;break}return s},l)},b0={mixout(){return{parse:{transform:c=>y1(c)}}},hooks(){return{parseNodeAttributes(c,l){let s=l.getAttribute("data-fa-transform");return s&&(c.transform=y1(s)),c}}},provides(c){c.generateAbstractTransformGrouping=function(l){let{main:s,transform:a,containerWidth:e,iconWidth:n}=l,o={transform:"translate(".concat(e/2," 256)")},t="translate(".concat(a.x*32,", ").concat(a.y*32,") "),z="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),f="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(t," ").concat(z," ").concat(f)},M={transform:"translate(".concat(n/2*-1," -256)")},L={outer:o,inner:m,path:M};return{tag:"g",attributes:i({},L.outer),children:[{tag:"g",attributes:i({},L.inner),children:[{tag:s.icon.tag,children:s.icon.children,attributes:i(i({},s.icon.attributes),L.path)}]}]}}}},b2={x:0,y:0,width:"100%",height:"100%"};function A1(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return c.attributes&&(c.attributes.fill||l)&&(c.attributes.fill="black"),c}function S0(c){return c.tag==="g"?c.children:[c]}var w0={hooks(){return{parseNodeAttributes(c,l){let s=l.getAttribute("data-fa-mask"),a=s?L2(s.split(" ").map(e=>e.trim())):l3();return a.prefix||(a.prefix=R()),c.mask=a,c.maskId=l.getAttribute("data-fa-mask-id"),c}}},provides(c){c.generateAbstractMask=function(l){let{children:s,attributes:a,main:e,mask:n,maskId:o,transform:t}=l,{width:z,icon:f}=e,{width:m,icon:M}=n,L=u4({transform:t,containerWidth:m,iconWidth:z}),x={tag:"rect",attributes:i(i({},b2),{},{fill:"white"})},N=f.children?{children:f.children.map(A1)}:{},S={tag:"g",attributes:i({},L.inner),children:[A1(i({tag:f.tag,attributes:i(i({},f.attributes),L.path)},N))]},C={tag:"g",attributes:i({},L.outer),children:[S]},d="mask-".concat(o||J()),p="clip-".concat(o||J()),w={tag:"mask",attributes:i(i({},b2),{},{id:d,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[x,C]},U={tag:"defs",children:[{tag:"clipPath",attributes:{id:p},children:S0(M)},w]};return s.push(U,{tag:"rect",attributes:i({fill:"currentColor","clip-path":"url(#".concat(p,")"),mask:"url(#".concat(d,")")},b2)}),{children:s,attributes:a}}}},k0={provides(c){let l=!1;D.matchMedia&&(l=D.matchMedia("(prefers-reduced-motion: reduce)").matches),c.missingIconAbstract=function(){let s=[],a={fill:"currentColor"},e={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};s.push({tag:"path",attributes:i(i({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});let n=i(i({},e),{},{attributeName:"opacity"}),o={tag:"circle",attributes:i(i({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return l||o.children.push({tag:"animate",attributes:i(i({},e),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:i(i({},n),{},{values:"1;0;1;1;0;1;"})}),s.push(o),s.push({tag:"path",attributes:i(i({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:l?[]:[{tag:"animate",attributes:i(i({},n),{},{values:"1;0;0;0;0;1;"})}]}),l||s.push({tag:"path",attributes:i(i({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:i(i({},n),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:s}}}},y0={hooks(){return{parseNodeAttributes(c,l){let s=l.getAttribute("data-fa-symbol"),a=s===null?!1:s===""?!0:s;return c.symbol=a,c}}}},A0=[h4,z0,m0,L0,M0,g0,N0,b0,w0,k0,y0];I4(A0,{mixoutsTo:g});var D0=g.noAuto,R0=g.config,t3=g.library,f3=g.dom,H0=g.parse,I0=g.findIconDefinition,O0=g.toHtml,q0=g.icon,U0=g.layer,W0=g.text,_0=g.counter;var r3={prefix:"fas",iconName:"caret-right",icon:[256,512,[],"f0da","M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z"]};var z3={prefix:"fas",iconName:"caret-left",icon:[256,512,[],"f0d9","M9.4 278.6c-12.5-12.5-12.5-32.8 0-45.3l128-128c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 256c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-128-128z"]};var m3={prefix:"fas",iconName:"star",icon:[576,512,[11088,61446],"f005","M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"]};var v0={prefix:"fas",iconName:"circle-check",icon:[512,512,[61533,"check-circle"],"f058","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"]},L3=v0;var M3={prefix:"fas",iconName:"leaf",icon:[512,512,[],"f06c","M272 96c-78.6 0-145.1 51.5-167.7 122.5c33.6-17 71.5-26.5 111.7-26.5l88 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-16 0-72 0s0 0 0 0c-16.6 0-32.7 1.9-48.3 5.4c-25.9 5.9-49.9 16.4-71.4 30.7c0 0 0 0 0 0C38.3 298.8 0 364.9 0 440l0 16c0 13.3 10.7 24 24 24s24-10.7 24-24l0-16c0-48.7 20.7-92.5 53.8-123.2C121.6 392.3 190.3 448 272 448l1 0c132.1-.7 239-130.9 239-291.4c0-42.6-7.5-83.1-21.1-119.6c-2.6-6.9-12.7-6.6-16.2-.1C455.9 72.1 418.7 96 376 96L272 96z"]};var p3={prefix:"fas",iconName:"arrow-right",icon:[448,512,[8594],"f061","M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"]};var C3={prefix:"fas",iconName:"wrench",icon:[512,512,[128295],"f0ad","M352 320c88.4 0 160-71.6 160-160c0-15.3-2.2-30.1-6.2-44.2c-3.1-10.8-16.4-13.2-24.3-5.3l-76.8 76.8c-3 3-7.1 4.7-11.3 4.7L336 192c-8.8 0-16-7.2-16-16l0-57.4c0-4.2 1.7-8.3 4.7-11.3l76.8-76.8c7.9-7.9 5.4-21.2-5.3-24.3C382.1 2.2 367.3 0 352 0C263.6 0 192 71.6 192 160c0 19.1 3.4 37.5 9.5 54.5L19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L297.5 310.5c17 6.2 35.4 9.5 54.5 9.5zM80 408a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"]};var u3={prefix:"fas",iconName:"phone",icon:[512,512,[128222,128379],"f095","M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"]};var d3={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"]};var x3={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]};var h3={prefix:"fas",iconName:"check",icon:[448,512,[10003,10004],"f00c","M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"]};var g3={prefix:"fas",iconName:"triangle-exclamation",icon:[512,512,[9888,"exclamation-triangle","warning"],"f071","M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480L40 480c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"]};var N3={prefix:"fas",iconName:"paper-plane",icon:[512,512,[61913],"f1d8","M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480l0-83.6c0-4 1.5-7.8 4.2-10.8L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"]};t3.add(N3,u3,d3,h3,p3,L3,g3,x3,C3,M3,m3,z3,r3);f3.watch();(function(){let c=document.getElementById("customSlider"),s=c.querySelectorAll(".slide").length;function a(){return window.innerWidth>=1024?3:window.innerWidth>=768?2:1}let e=0,n=a(),o=document.getElementById("pagination");function t(){o.innerHTML="";let C=Math.ceil(s/n);for(let d=0;d<C;d++){let p=document.createElement("button");p.classList.add("w-4","h-4","rounded-full","bg-blue-400","cursor-pointer","opacity-50","hover:opacity-80","transition-opacity"),d===0&&p.classList.add("opacity-100"),p.addEventListener("click",()=>{e=d*n,f(),z()}),o.appendChild(p)}}function z(){let C=o.children,d=Math.floor(e/n);for(let p=0;p<C.length;p++)C[p].classList.toggle("opacity-100",p===d),C[p].classList.toggle("opacity-50",p!==d)}function f(){e<0&&(e=s-n),e>s-n&&(e=0);let C=100/n,d=-(e*C);c.style.transform=`translateX(${d}%)`,z()}document.getElementById("prevSlide").addEventListener("click",()=>{e-=n,e<0&&(e=s-n),f()}),document.getElementById("nextSlide").addEventListener("click",()=>{e+=n,e>s-n&&(e=0),f()});let m=0,M=!1;c.addEventListener("touchstart",C=>{m=C.touches[0].clientX,M=!0,S()}),c.addEventListener("touchmove",C=>{if(!M)return;let p=C.touches[0].clientX-m;p>50?(e-=n,e<0&&(e=s-n),f(),M=!1):p<-50&&(e+=n,e>s-n&&(e=0),f(),M=!1)}),c.addEventListener("touchend",()=>{M=!1,N()}),window.addEventListener("resize",()=>{let C=n;n=a(),n!==C&&(e=0,t(),f())});let L=null,x=1e4;function N(){S(),L=setInterval(()=>{e+=n,e>s-n&&(e=0),f()},x)}function S(){clearInterval(L)}c.addEventListener("mouseenter",S),c.addEventListener("mouseleave",N),t(),f(),N()})();document.addEventListener("mousemove",c=>{let l=(c.clientX/window.innerWidth-.5)*10,s=(c.clientY/window.innerHeight-.5)*10,a=document.getElementById("carousel-reiniging"),e=document.getElementById("carousel-herstelling");a&&(a.style.transform=`translate(${l}px, ${s}px)`),e&&(e.style.transform=`translate(${l}px, ${s}px)`)});})();
/*! Bundled license information:

@fortawesome/fontawesome-svg-core/index.mjs:
@fortawesome/free-solid-svg-icons/index.mjs:
  (*!
   * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
   * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
   * Copyright 2024 Fonticons, Inc.
   *)
*/
