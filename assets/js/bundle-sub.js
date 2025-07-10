(()=>{function z3(c,l,s){return(l=m3(l))in c?Object.defineProperty(c,l,{value:s,enumerable:!0,configurable:!0,writable:!0}):c[l]=s,c}function G2(c,l){var s=Object.keys(c);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(c);l&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(c,e).enumerable})),s.push.apply(s,a)}return s}function i(c){for(var l=1;l<arguments.length;l++){var s=arguments[l]!=null?arguments[l]:{};l%2?G2(Object(s),!0).forEach(function(a){z3(c,a,s[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(s)):G2(Object(s)).forEach(function(a){Object.defineProperty(c,a,Object.getOwnPropertyDescriptor(s,a))})}return c}function L3(c,l){if(typeof c!="object"||!c)return c;var s=c[Symbol.toPrimitive];if(s!==void 0){var a=s.call(c,l||"default");if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(l==="string"?String:Number)(c)}function m3(c){var l=L3(c,"string");return typeof l=="symbol"?l:l+""}var _2=()=>{},F2={},C1={},u1=null,d1={mark:_2,measure:_2};try{typeof window<"u"&&(F2=window),typeof document<"u"&&(C1=document),typeof MutationObserver<"u"&&(u1=MutationObserver),typeof performance<"u"&&(d1=performance)}catch{}var{userAgent:V2=""}=F2.navigator||{},T=F2,p=C1,j2=u1,$=d1,L0=!!T.document,A=!!p.documentElement&&!!p.head&&typeof p.addEventListener=="function"&&typeof p.createElement=="function",x1=~V2.indexOf("MSIE")||~V2.indexOf("Trident/"),M3=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,p3=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,h1={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},C3={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},g1=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],C="classic",a2="duotone",u3="sharp",d3="sharp-duotone",N1=[C,a2,u3,d3],x3={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},h3={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},g3=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),N3={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},b3=["fak","fa-kit","fakd","fa-kit-duotone"],Y2={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},S3=["kit"],w3={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},k3=["fak","fakd"],A3={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},X2={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},J={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},y3=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],v3=["fak","fa-kit","fakd","fa-kit-duotone"],P3={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},T3={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},F3={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},p2={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},B3=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],C2=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...y3,...B3],D3=["solid","regular","light","thin","duotone","brands"],b1=[1,2,3,4,5,6,7,8,9,10],E3=b1.concat([11,12,13,14,15,16,17,18,19,20]),R3=[...Object.keys(F3),...D3,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",J.GROUP,J.SWAP_OPACITY,J.PRIMARY,J.SECONDARY].concat(b1.map(c=>"".concat(c,"x"))).concat(E3.map(c=>"w-".concat(c))),H3={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},w="___FONT_AWESOME___",u2=16,S1="fa",w1="svg-inline--fa",R="data-fa-i2svg",d2="data-fa-pseudo-element",O3="data-fa-pseudo-element-pending",B2="data-prefix",D2="data-icon",K2="fontawesome-i2svg",I3="async",q3=["HTML","HEAD","STYLE","SCRIPT"],k1=(()=>{try{return!0}catch{return!1}})();function K(c){return new Proxy(c,{get(l,s){return s in l?l[s]:l[C]}})}var A1=i({},h1);A1[C]=i(i(i(i({},{"fa-duotone":"duotone"}),h1[C]),Y2.kit),Y2["kit-duotone"]);var U3=K(A1),x2=i({},N3);x2[C]=i(i(i(i({},{duotone:"fad"}),x2[C]),X2.kit),X2["kit-duotone"]);var Q2=K(x2),h2=i({},p2);h2[C]=i(i({},h2[C]),A3.kit);var E2=K(h2),g2=i({},T3);g2[C]=i(i({},g2[C]),w3.kit);var m0=K(g2),W3=M3,y1="fa-layers-text",G3=p3,_3=i({},x3),M0=K(_3),V3=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],r2=C3,j3=[...S3,...R3],V=T.FontAwesomeConfig||{};function Y3(c){var l=p.querySelector("script["+c+"]");if(l)return l.getAttribute(c)}function X3(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}p&&typeof p.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(l=>{let[s,a]=l,e=X3(Y3(s));e!=null&&(V[a]=e)});var v1={styleDefault:"solid",familyDefault:C,cssPrefix:S1,replacementClass:w1,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};V.familyPrefix&&(V.cssPrefix=V.familyPrefix);var W=i(i({},v1),V);W.autoReplaceSvg||(W.observeMutations=!1);var t={};Object.keys(v1).forEach(c=>{Object.defineProperty(t,c,{enumerable:!0,set:function(l){W[c]=l,j.forEach(s=>s(t))},get:function(){return W[c]}})});Object.defineProperty(t,"familyPrefix",{enumerable:!0,set:function(c){W.cssPrefix=c,j.forEach(l=>l(t))},get:function(){return W.cssPrefix}});T.FontAwesomeConfig=t;var j=[];function K3(c){return j.push(c),()=>{j.splice(j.indexOf(c),1)}}var P=u2,N={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Q3(c){if(!c||!A)return;let l=p.createElement("style");l.setAttribute("type","text/css"),l.innerHTML=c;let s=p.head.childNodes,a=null;for(let e=s.length-1;e>-1;e--){let n=s[e],o=(n.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=n)}return p.head.insertBefore(l,a),c}var $3="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Y(){let c=12,l="";for(;c-- >0;)l+=$3[Math.random()*62|0];return l}function G(c){let l=[];for(let s=(c||[]).length>>>0;s--;)l[s]=c[s];return l}function R2(c){return c.classList?G(c.classList):(c.getAttribute("class")||"").split(" ").filter(l=>l)}function P1(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function J3(c){return Object.keys(c||{}).reduce((l,s)=>l+"".concat(s,'="').concat(P1(c[s]),'" '),"").trim()}function e2(c){return Object.keys(c||{}).reduce((l,s)=>l+"".concat(s,": ").concat(c[s].trim(),";"),"")}function H2(c){return c.size!==N.size||c.x!==N.x||c.y!==N.y||c.rotate!==N.rotate||c.flipX||c.flipY}function Z3(c){let{transform:l,containerWidth:s,iconWidth:a}=c,e={transform:"translate(".concat(s/2," 256)")},n="translate(".concat(l.x*32,", ").concat(l.y*32,") "),o="scale(".concat(l.size/16*(l.flipX?-1:1),", ").concat(l.size/16*(l.flipY?-1:1),") "),f="rotate(".concat(l.rotate," 0 0)"),z={transform:"".concat(n," ").concat(o," ").concat(f)},r={transform:"translate(".concat(a/2*-1," -256)")};return{outer:e,inner:z,path:r}}function c4(c){let{transform:l,width:s=u2,height:a=u2,startCentered:e=!1}=c,n="";return e&&x1?n+="translate(".concat(l.x/P-s/2,"em, ").concat(l.y/P-a/2,"em) "):e?n+="translate(calc(-50% + ".concat(l.x/P,"em), calc(-50% + ").concat(l.y/P,"em)) "):n+="translate(".concat(l.x/P,"em, ").concat(l.y/P,"em) "),n+="scale(".concat(l.size/P*(l.flipX?-1:1),", ").concat(l.size/P*(l.flipY?-1:1),") "),n+="rotate(".concat(l.rotate,"deg) "),n}var l4=`:root, :host {
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
}`;function T1(){let c=S1,l=w1,s=t.cssPrefix,a=t.replacementClass,e=l4;if(s!==c||a!==l){let n=new RegExp("\\.".concat(c,"\\-"),"g"),o=new RegExp("\\--".concat(c,"\\-"),"g"),f=new RegExp("\\.".concat(l),"g");e=e.replace(n,".".concat(s,"-")).replace(o,"--".concat(s,"-")).replace(f,".".concat(a))}return e}var $2=!1;function z2(){t.autoAddCss&&!$2&&(Q3(T1()),$2=!0)}var s4={mixout(){return{dom:{css:T1,insertCss:z2}}},hooks(){return{beforeDOMElementCreation(){z2()},beforeI2svg(){z2()}}}},k=T||{};k[w]||(k[w]={});k[w].styles||(k[w].styles={});k[w].hooks||(k[w].hooks={});k[w].shims||(k[w].shims=[]);var b=k[w],F1=[],B1=function(){p.removeEventListener("DOMContentLoaded",B1),l2=1,F1.map(c=>c())},l2=!1;A&&(l2=(p.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(p.readyState),l2||p.addEventListener("DOMContentLoaded",B1));function a4(c){A&&(l2?setTimeout(c,0):F1.push(c))}function Q(c){let{tag:l,attributes:s={},children:a=[]}=c;return typeof c=="string"?P1(c):"<".concat(l," ").concat(J3(s),">").concat(a.map(Q).join(""),"</").concat(l,">")}function J2(c,l,s){if(c&&c[l]&&c[l][s])return{prefix:l,iconName:s,icon:c[l][s]}}var e4=function(l,s){return function(a,e,n,o){return l.call(s,a,e,n,o)}},L2=function(l,s,a,e){var n=Object.keys(l),o=n.length,f=e!==void 0?e4(s,e):s,z,r,L;for(a===void 0?(z=1,L=l[n[0]]):(z=0,L=a);z<o;z++)r=n[z],L=f(L,l[r],r,l);return L};function n4(c){let l=[],s=0,a=c.length;for(;s<a;){let e=c.charCodeAt(s++);if(e>=55296&&e<=56319&&s<a){let n=c.charCodeAt(s++);(n&64512)==56320?l.push(((e&1023)<<10)+(n&1023)+65536):(l.push(e),s--)}else l.push(e)}return l}function N2(c){let l=n4(c);return l.length===1?l[0].toString(16):null}function o4(c,l){let s=c.length,a=c.charCodeAt(l),e;return a>=55296&&a<=56319&&s>l+1&&(e=c.charCodeAt(l+1),e>=56320&&e<=57343)?(a-55296)*1024+e-56320+65536:a}function Z2(c){return Object.keys(c).reduce((l,s)=>{let a=c[s];return!!a.icon?l[a.iconName]=a.icon:l[s]=a,l},{})}function b2(c,l){let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},{skipHooks:a=!1}=s,e=Z2(l);typeof b.hooks.addPack=="function"&&!a?b.hooks.addPack(c,Z2(l)):b.styles[c]=i(i({},b.styles[c]||{}),e),c==="fas"&&b2("fa",l)}var{styles:X,shims:i4}=b,D1=Object.keys(E2),f4=D1.reduce((c,l)=>(c[l]=Object.keys(E2[l]),c),{}),O2=null,E1={},R1={},H1={},O1={},I1={};function t4(c){return~j3.indexOf(c)}function r4(c,l){let s=l.split("-"),a=s[0],e=s.slice(1).join("-");return a===c&&e!==""&&!t4(e)?e:null}var q1=()=>{let c=a=>L2(X,(e,n,o)=>(e[o]=L2(n,a,{}),e),{});E1=c((a,e,n)=>(e[3]&&(a[e[3]]=n),e[2]&&e[2].filter(f=>typeof f=="number").forEach(f=>{a[f.toString(16)]=n}),a)),R1=c((a,e,n)=>(a[n]=n,e[2]&&e[2].filter(f=>typeof f=="string").forEach(f=>{a[f]=n}),a)),I1=c((a,e,n)=>{let o=e[2];return a[n]=n,o.forEach(f=>{a[f]=n}),a});let l="far"in X||t.autoFetchSvg,s=L2(i4,(a,e)=>{let n=e[0],o=e[1],f=e[2];return o==="far"&&!l&&(o="fas"),typeof n=="string"&&(a.names[n]={prefix:o,iconName:f}),typeof n=="number"&&(a.unicodes[n.toString(16)]={prefix:o,iconName:f}),a},{names:{},unicodes:{}});H1=s.names,O1=s.unicodes,O2=n2(t.styleDefault,{family:t.familyDefault})};K3(c=>{O2=n2(c.styleDefault,{family:t.familyDefault})});q1();function I2(c,l){return(E1[c]||{})[l]}function z4(c,l){return(R1[c]||{})[l]}function E(c,l){return(I1[c]||{})[l]}function U1(c){return H1[c]||{prefix:null,iconName:null}}function L4(c){let l=O1[c],s=I2("fas",c);return l||(s?{prefix:"fas",iconName:s}:null)||{prefix:null,iconName:null}}function F(){return O2}var W1=()=>({prefix:null,iconName:null,rest:[]});function m4(c){let l=C,s=D1.reduce((a,e)=>(a[e]="".concat(t.cssPrefix,"-").concat(e),a),{});return N1.forEach(a=>{(c.includes(s[a])||c.some(e=>f4[a].includes(e)))&&(l=a)}),l}function n2(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{family:s=C}=l,a=U3[s][c];if(s===a2&&!c)return"fad";let e=Q2[s][c]||Q2[s][a],n=c in b.styles?c:null;return e||n||null}function M4(c){let l=[],s=null;return c.forEach(a=>{let e=r4(t.cssPrefix,a);e?s=e:a&&l.push(a)}),{iconName:s,rest:l}}function c1(c){return c.sort().filter((l,s,a)=>a.indexOf(l)===s)}function o2(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{skipLookups:s=!1}=l,a=null,e=C2.concat(v3),n=c1(c.filter(M=>e.includes(M))),o=c1(c.filter(M=>!C2.includes(M))),f=n.filter(M=>(a=M,!g1.includes(M))),[z=null]=f,r=m4(n),L=i(i({},M4(o)),{},{prefix:n2(z,{family:r})});return i(i(i({},L),d4({values:c,family:r,styles:X,config:t,canonical:L,givenPrefix:a})),p4(s,a,L))}function p4(c,l,s){let{prefix:a,iconName:e}=s;if(c||!a||!e)return{prefix:a,iconName:e};let n=l==="fa"?U1(e):{},o=E(a,e);return e=n.iconName||o||e,a=n.prefix||a,a==="far"&&!X.far&&X.fas&&!t.autoFetchSvg&&(a="fas"),{prefix:a,iconName:e}}var C4=N1.filter(c=>c!==C||c!==a2),u4=Object.keys(p2).filter(c=>c!==C).map(c=>Object.keys(p2[c])).flat();function d4(c){let{values:l,family:s,canonical:a,givenPrefix:e="",styles:n={},config:o={}}=c,f=s===a2,z=l.includes("fa-duotone")||l.includes("fad"),r=o.familyDefault==="duotone",L=a.prefix==="fad"||a.prefix==="fa-duotone";if(!f&&(z||r||L)&&(a.prefix="fad"),(l.includes("fa-brands")||l.includes("fab"))&&(a.prefix="fab"),!a.prefix&&C4.includes(s)&&(Object.keys(n).find(m=>u4.includes(m))||o.autoFetchSvg)){let m=g3.get(s).defaultShortPrefixId;a.prefix=m,a.iconName=E(a.prefix,a.iconName)||a.iconName}return(a.prefix==="fa"||e==="fa")&&(a.prefix=F()||"fas"),a}var S2=class{constructor(){this.definitions={}}add(){for(var l=arguments.length,s=new Array(l),a=0;a<l;a++)s[a]=arguments[a];let e=s.reduce(this._pullDefinitions,{});Object.keys(e).forEach(n=>{this.definitions[n]=i(i({},this.definitions[n]||{}),e[n]),b2(n,e[n]);let o=E2[C][n];o&&b2(o,e[n]),q1()})}reset(){this.definitions={}}_pullDefinitions(l,s){let a=s.prefix&&s.iconName&&s.icon?{0:s}:s;return Object.keys(a).map(e=>{let{prefix:n,iconName:o,icon:f}=a[e],z=f[2];l[n]||(l[n]={}),z.length>0&&z.forEach(r=>{typeof r=="string"&&(l[n][r]=f)}),l[n][o]=f}),l}},l1=[],q={},U={},x4=Object.keys(U);function h4(c,l){let{mixoutsTo:s}=l;return l1=c,q={},Object.keys(U).forEach(a=>{x4.indexOf(a)===-1&&delete U[a]}),l1.forEach(a=>{let e=a.mixout?a.mixout():{};if(Object.keys(e).forEach(n=>{typeof e[n]=="function"&&(s[n]=e[n]),typeof e[n]=="object"&&Object.keys(e[n]).forEach(o=>{s[n]||(s[n]={}),s[n][o]=e[n][o]})}),a.hooks){let n=a.hooks();Object.keys(n).forEach(o=>{q[o]||(q[o]=[]),q[o].push(n[o])})}a.provides&&a.provides(U)}),s}function w2(c,l){for(var s=arguments.length,a=new Array(s>2?s-2:0),e=2;e<s;e++)a[e-2]=arguments[e];return(q[c]||[]).forEach(o=>{l=o.apply(null,[l,...a])}),l}function H(c){for(var l=arguments.length,s=new Array(l>1?l-1:0),a=1;a<l;a++)s[a-1]=arguments[a];(q[c]||[]).forEach(n=>{n.apply(null,s)})}function B(){let c=arguments[0],l=Array.prototype.slice.call(arguments,1);return U[c]?U[c].apply(null,l):void 0}function k2(c){c.prefix==="fa"&&(c.prefix="fas");let{iconName:l}=c,s=c.prefix||F();if(l)return l=E(s,l)||l,J2(G1.definitions,s,l)||J2(b.styles,s,l)}var G1=new S2,g4=()=>{t.autoReplaceSvg=!1,t.observeMutations=!1,H("noAuto")},N4={i2svg:function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return A?(H("beforeI2svg",c),B("pseudoElements2svg",c),B("i2svg",c)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:l}=c;t.autoReplaceSvg===!1&&(t.autoReplaceSvg=!0),t.observeMutations=!0,a4(()=>{S4({autoReplaceSvgRoot:l}),H("watch",c)})}},b4={icon:c=>{if(c===null)return null;if(typeof c=="object"&&c.prefix&&c.iconName)return{prefix:c.prefix,iconName:E(c.prefix,c.iconName)||c.iconName};if(Array.isArray(c)&&c.length===2){let l=c[1].indexOf("fa-")===0?c[1].slice(3):c[1],s=n2(c[0]);return{prefix:s,iconName:E(s,l)||l}}if(typeof c=="string"&&(c.indexOf("".concat(t.cssPrefix,"-"))>-1||c.match(W3))){let l=o2(c.split(" "),{skipLookups:!0});return{prefix:l.prefix||F(),iconName:E(l.prefix,l.iconName)||l.iconName}}if(typeof c=="string"){let l=F();return{prefix:l,iconName:E(l,c)||c}}}},x={noAuto:g4,config:t,dom:N4,parse:b4,library:G1,findIconDefinition:k2,toHtml:Q},S4=function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:l=p}=c;(Object.keys(b.styles).length>0||t.autoFetchSvg)&&A&&t.autoReplaceSvg&&x.dom.i2svg({node:l})};function i2(c,l){return Object.defineProperty(c,"abstract",{get:l}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(s=>Q(s))}}),Object.defineProperty(c,"node",{get:function(){if(!A)return;let s=p.createElement("div");return s.innerHTML=c.html,s.children}}),c}function w4(c){let{children:l,main:s,mask:a,attributes:e,styles:n,transform:o}=c;if(H2(o)&&s.found&&!a.found){let{width:f,height:z}=s,r={x:f/z/2,y:.5};e.style=e2(i(i({},n),{},{"transform-origin":"".concat(r.x+o.x/16,"em ").concat(r.y+o.y/16,"em")}))}return[{tag:"svg",attributes:e,children:l}]}function k4(c){let{prefix:l,iconName:s,children:a,attributes:e,symbol:n}=c,o=n===!0?"".concat(l,"-").concat(t.cssPrefix,"-").concat(s):n;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:i(i({},e),{},{id:o}),children:a}]}]}function q2(c){let{icons:{main:l,mask:s},prefix:a,iconName:e,transform:n,symbol:o,title:f,maskId:z,titleId:r,extra:L,watchable:M=!1}=c,{width:m,height:u}=s.found?s:l,v=k3.includes(a),D=[t.replacementClass,e?"".concat(t.cssPrefix,"-").concat(e):""].filter(I=>L.classes.indexOf(I)===-1).filter(I=>I!==""||!!I).concat(L.classes).join(" "),h={children:[],attributes:i(i({},L.attributes),{},{"data-prefix":a,"data-icon":e,class:D,role:L.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(m," ").concat(u)})},S=v&&!~L.classes.indexOf("fa-fw")?{width:"".concat(m/u*16*.0625,"em")}:{};M&&(h.attributes[R]=""),f&&(h.children.push({tag:"title",attributes:{id:h.attributes["aria-labelledby"]||"title-".concat(r||Y())},children:[f]}),delete h.attributes.title);let d=i(i({},h),{},{prefix:a,iconName:e,main:l,mask:s,maskId:z,transform:n,symbol:o,styles:i(i({},S),L.styles)}),{children:g,attributes:O}=s.found&&l.found?B("generateAbstractMask",d)||{children:[],attributes:{}}:B("generateAbstractIcon",d)||{children:[],attributes:{}};return d.children=g,d.attributes=O,o?k4(d):w4(d)}function s1(c){let{content:l,width:s,height:a,transform:e,title:n,extra:o,watchable:f=!1}=c,z=i(i(i({},o.attributes),n?{title:n}:{}),{},{class:o.classes.join(" ")});f&&(z[R]="");let r=i({},o.styles);H2(e)&&(r.transform=c4({transform:e,startCentered:!0,width:s,height:a}),r["-webkit-transform"]=r.transform);let L=e2(r);L.length>0&&(z.style=L);let M=[];return M.push({tag:"span",attributes:z,children:[l]}),n&&M.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),M}function A4(c){let{content:l,title:s,extra:a}=c,e=i(i(i({},a.attributes),s?{title:s}:{}),{},{class:a.classes.join(" ")}),n=e2(a.styles);n.length>0&&(e.style=n);let o=[];return o.push({tag:"span",attributes:e,children:[l]}),s&&o.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),o}var{styles:m2}=b;function A2(c){let l=c[0],s=c[1],[a]=c.slice(4),e=null;return Array.isArray(a)?e={tag:"g",attributes:{class:"".concat(t.cssPrefix,"-").concat(r2.GROUP)},children:[{tag:"path",attributes:{class:"".concat(t.cssPrefix,"-").concat(r2.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(t.cssPrefix,"-").concat(r2.PRIMARY),fill:"currentColor",d:a[1]}}]}:e={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:l,height:s,icon:e}}var y4={found:!1,width:512,height:512};function v4(c,l){!k1&&!t.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(l,'" is missing.'))}function y2(c,l){let s=l;return l==="fa"&&t.styleDefault!==null&&(l=F()),new Promise((a,e)=>{if(s==="fa"){let n=U1(c)||{};c=n.iconName||c,l=n.prefix||l}if(c&&l&&m2[l]&&m2[l][c]){let n=m2[l][c];return a(A2(n))}v4(c,l),a(i(i({},y4),{},{icon:t.showMissingIcons&&c?B("missingIconAbstract")||{}:{}}))})}var a1=()=>{},v2=t.measurePerformance&&$&&$.mark&&$.measure?$:{mark:a1,measure:a1},_='FA "6.7.2"',P4=c=>(v2.mark("".concat(_," ").concat(c," begins")),()=>_1(c)),_1=c=>{v2.mark("".concat(_," ").concat(c," ends")),v2.measure("".concat(_," ").concat(c),"".concat(_," ").concat(c," begins"),"".concat(_," ").concat(c," ends"))},U2={begin:P4,end:_1},Z=()=>{};function e1(c){return typeof(c.getAttribute?c.getAttribute(R):null)=="string"}function T4(c){let l=c.getAttribute?c.getAttribute(B2):null,s=c.getAttribute?c.getAttribute(D2):null;return l&&s}function F4(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(t.replacementClass)}function B4(){return t.autoReplaceSvg===!0?c2.replace:c2[t.autoReplaceSvg]||c2.replace}function D4(c){return p.createElementNS("http://www.w3.org/2000/svg",c)}function E4(c){return p.createElement(c)}function V1(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{ceFn:s=c.tag==="svg"?D4:E4}=l;if(typeof c=="string")return p.createTextNode(c);let a=s(c.tag);return Object.keys(c.attributes||[]).forEach(function(n){a.setAttribute(n,c.attributes[n])}),(c.children||[]).forEach(function(n){a.appendChild(V1(n,{ceFn:s}))}),a}function R4(c){let l=" ".concat(c.outerHTML," ");return l="".concat(l,"Font Awesome fontawesome.com "),l}var c2={replace:function(c){let l=c[0];if(l.parentNode)if(c[1].forEach(s=>{l.parentNode.insertBefore(V1(s),l)}),l.getAttribute(R)===null&&t.keepOriginalSource){let s=p.createComment(R4(l));l.parentNode.replaceChild(s,l)}else l.remove()},nest:function(c){let l=c[0],s=c[1];if(~R2(l).indexOf(t.replacementClass))return c2.replace(c);let a=new RegExp("".concat(t.cssPrefix,"-.*"));if(delete s[0].attributes.id,s[0].attributes.class){let n=s[0].attributes.class.split(" ").reduce((o,f)=>(f===t.replacementClass||f.match(a)?o.toSvg.push(f):o.toNode.push(f),o),{toNode:[],toSvg:[]});s[0].attributes.class=n.toSvg.join(" "),n.toNode.length===0?l.removeAttribute("class"):l.setAttribute("class",n.toNode.join(" "))}let e=s.map(n=>Q(n)).join(`
`);l.setAttribute(R,""),l.innerHTML=e}};function n1(c){c()}function j1(c,l){let s=typeof l=="function"?l:Z;if(c.length===0)s();else{let a=n1;t.mutateApproach===I3&&(a=T.requestAnimationFrame||n1),a(()=>{let e=B4(),n=U2.begin("mutate");c.map(e),n(),s()})}}var W2=!1;function Y1(){W2=!0}function P2(){W2=!1}var s2=null;function o1(c){if(!j2||!t.observeMutations)return;let{treeCallback:l=Z,nodeCallback:s=Z,pseudoElementsCallback:a=Z,observeMutationsRoot:e=p}=c;s2=new j2(n=>{if(W2)return;let o=F();G(n).forEach(f=>{if(f.type==="childList"&&f.addedNodes.length>0&&!e1(f.addedNodes[0])&&(t.searchPseudoElements&&a(f.target),l(f.target)),f.type==="attributes"&&f.target.parentNode&&t.searchPseudoElements&&a(f.target.parentNode),f.type==="attributes"&&e1(f.target)&&~V3.indexOf(f.attributeName))if(f.attributeName==="class"&&T4(f.target)){let{prefix:z,iconName:r}=o2(R2(f.target));f.target.setAttribute(B2,z||o),r&&f.target.setAttribute(D2,r)}else F4(f.target)&&s(f.target)})}),A&&s2.observe(e,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function H4(){s2&&s2.disconnect()}function O4(c){let l=c.getAttribute("style"),s=[];return l&&(s=l.split(";").reduce((a,e)=>{let n=e.split(":"),o=n[0],f=n.slice(1);return o&&f.length>0&&(a[o]=f.join(":").trim()),a},{})),s}function I4(c){let l=c.getAttribute("data-prefix"),s=c.getAttribute("data-icon"),a=c.innerText!==void 0?c.innerText.trim():"",e=o2(R2(c));return e.prefix||(e.prefix=F()),l&&s&&(e.prefix=l,e.iconName=s),e.iconName&&e.prefix||(e.prefix&&a.length>0&&(e.iconName=z4(e.prefix,c.innerText)||I2(e.prefix,N2(c.innerText))),!e.iconName&&t.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(e.iconName=c.firstChild.data)),e}function q4(c){let l=G(c.attributes).reduce((e,n)=>(e.name!=="class"&&e.name!=="style"&&(e[n.name]=n.value),e),{}),s=c.getAttribute("title"),a=c.getAttribute("data-fa-title-id");return t.autoA11y&&(s?l["aria-labelledby"]="".concat(t.replacementClass,"-title-").concat(a||Y()):(l["aria-hidden"]="true",l.focusable="false")),l}function U4(){return{iconName:null,title:null,titleId:null,prefix:null,transform:N,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function i1(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},{iconName:s,prefix:a,rest:e}=I4(c),n=q4(c),o=w2("parseNodeAttributes",{},c),f=l.styleParser?O4(c):[];return i({iconName:s,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:a,transform:N,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:e,styles:f,attributes:n}},o)}var{styles:W4}=b;function X1(c){let l=t.autoReplaceSvg==="nest"?i1(c,{styleParser:!1}):i1(c);return~l.extra.classes.indexOf(y1)?B("generateLayersText",c,l):B("generateSvgReplacementMutation",c,l)}function G4(){return[...b3,...C2]}function f1(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!A)return Promise.resolve();let s=p.documentElement.classList,a=L=>s.add("".concat(K2,"-").concat(L)),e=L=>s.remove("".concat(K2,"-").concat(L)),n=t.autoFetchSvg?G4():g1.concat(Object.keys(W4));n.includes("fa")||n.push("fa");let o=[".".concat(y1,":not([").concat(R,"])")].concat(n.map(L=>".".concat(L,":not([").concat(R,"])"))).join(", ");if(o.length===0)return Promise.resolve();let f=[];try{f=G(c.querySelectorAll(o))}catch{}if(f.length>0)a("pending"),e("complete");else return Promise.resolve();let z=U2.begin("onTree"),r=f.reduce((L,M)=>{try{let m=X1(M);m&&L.push(m)}catch(m){k1||m.name==="MissingIcon"&&console.error(m)}return L},[]);return new Promise((L,M)=>{Promise.all(r).then(m=>{j1(m,()=>{a("active"),a("complete"),e("pending"),typeof l=="function"&&l(),z(),L()})}).catch(m=>{z(),M(m)})})}function _4(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;X1(c).then(s=>{s&&j1([s],l)})}function V4(c){return function(l){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(l||{}).icon?l:k2(l||{}),{mask:e}=s;return e&&(e=(e||{}).icon?e:k2(e||{})),c(a,i(i({},s),{},{mask:e}))}}var j4=function(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:s=N,symbol:a=!1,mask:e=null,maskId:n=null,title:o=null,titleId:f=null,classes:z=[],attributes:r={},styles:L={}}=l;if(!c)return;let{prefix:M,iconName:m,icon:u}=c;return i2(i({type:"icon"},c),()=>(H("beforeDOMElementCreation",{iconDefinition:c,params:l}),t.autoA11y&&(o?r["aria-labelledby"]="".concat(t.replacementClass,"-title-").concat(f||Y()):(r["aria-hidden"]="true",r.focusable="false")),q2({icons:{main:A2(u),mask:e?A2(e.icon):{found:!1,width:null,height:null,icon:{}}},prefix:M,iconName:m,transform:i(i({},N),s),symbol:a,title:o,maskId:n,titleId:f,extra:{attributes:r,styles:L,classes:z}})))},Y4={mixout(){return{icon:V4(j4)}},hooks(){return{mutationObserverCallbacks(c){return c.treeCallback=f1,c.nodeCallback=_4,c}}},provides(c){c.i2svg=function(l){let{node:s=p,callback:a=()=>{}}=l;return f1(s,a)},c.generateSvgReplacementMutation=function(l,s){let{iconName:a,title:e,titleId:n,prefix:o,transform:f,symbol:z,mask:r,maskId:L,extra:M}=s;return new Promise((m,u)=>{Promise.all([y2(a,o),r.iconName?y2(r.iconName,r.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(v=>{let[D,h]=v;m([l,q2({icons:{main:D,mask:h},prefix:o,iconName:a,transform:f,symbol:z,maskId:L,title:e,titleId:n,extra:M,watchable:!0})])}).catch(u)})},c.generateAbstractIcon=function(l){let{children:s,attributes:a,main:e,transform:n,styles:o}=l,f=e2(o);f.length>0&&(a.style=f);let z;return H2(n)&&(z=B("generateAbstractTransformGrouping",{main:e,transform:n,containerWidth:e.width,iconWidth:e.width})),s.push(z||e.icon),{children:s,attributes:a}}}},X4={mixout(){return{layer(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{classes:s=[]}=l;return i2({type:"layer"},()=>{H("beforeDOMElementCreation",{assembler:c,params:l});let a=[];return c(e=>{Array.isArray(e)?e.map(n=>{a=a.concat(n.abstract)}):a=a.concat(e.abstract)}),[{tag:"span",attributes:{class:["".concat(t.cssPrefix,"-layers"),...s].join(" ")},children:a}]})}}}},K4={mixout(){return{counter(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{title:s=null,classes:a=[],attributes:e={},styles:n={}}=l;return i2({type:"counter",content:c},()=>(H("beforeDOMElementCreation",{content:c,params:l}),A4({content:c.toString(),title:s,extra:{attributes:e,styles:n,classes:["".concat(t.cssPrefix,"-layers-counter"),...a]}})))}}}},Q4={mixout(){return{text(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:s=N,title:a=null,classes:e=[],attributes:n={},styles:o={}}=l;return i2({type:"text",content:c},()=>(H("beforeDOMElementCreation",{content:c,params:l}),s1({content:c,transform:i(i({},N),s),title:a,extra:{attributes:n,styles:o,classes:["".concat(t.cssPrefix,"-layers-text"),...e]}})))}}},provides(c){c.generateLayersText=function(l,s){let{title:a,transform:e,extra:n}=s,o=null,f=null;if(x1){let z=parseInt(getComputedStyle(l).fontSize,10),r=l.getBoundingClientRect();o=r.width/z,f=r.height/z}return t.autoA11y&&!a&&(n.attributes["aria-hidden"]="true"),Promise.resolve([l,s1({content:l.innerHTML,width:o,height:f,transform:e,title:a,extra:n,watchable:!0})])}}},$4=new RegExp('"',"ug"),t1=[1105920,1112319],r1=i(i(i(i({},{FontAwesome:{normal:"fas",400:"fas"}}),h3),H3),P3),T2=Object.keys(r1).reduce((c,l)=>(c[l.toLowerCase()]=r1[l],c),{}),J4=Object.keys(T2).reduce((c,l)=>{let s=T2[l];return c[l]=s[900]||[...Object.entries(s)][0][1],c},{});function Z4(c){let l=c.replace($4,""),s=o4(l,0),a=s>=t1[0]&&s<=t1[1],e=l.length===2?l[0]===l[1]:!1;return{value:N2(e?l[0]:l),isSecondary:a||e}}function c0(c,l){let s=c.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(l),e=isNaN(a)?"normal":a;return(T2[s]||{})[e]||J4[s]}function z1(c,l){let s="".concat(O3).concat(l.replace(":","-"));return new Promise((a,e)=>{if(c.getAttribute(s)!==null)return a();let o=G(c.children).filter(m=>m.getAttribute(d2)===l)[0],f=T.getComputedStyle(c,l),z=f.getPropertyValue("font-family"),r=z.match(G3),L=f.getPropertyValue("font-weight"),M=f.getPropertyValue("content");if(o&&!r)return c.removeChild(o),a();if(r&&M!=="none"&&M!==""){let m=f.getPropertyValue("content"),u=c0(z,L),{value:v,isSecondary:D}=Z4(m),h=r[0].startsWith("FontAwesome"),S=I2(u,v),d=S;if(h){let g=L4(v);g.iconName&&g.prefix&&(S=g.iconName,u=g.prefix)}if(S&&!D&&(!o||o.getAttribute(B2)!==u||o.getAttribute(D2)!==d)){c.setAttribute(s,d),o&&c.removeChild(o);let g=U4(),{extra:O}=g;O.attributes[d2]=l,y2(S,u).then(I=>{let t3=q2(i(i({},g),{},{icons:{main:I,mask:W1()},prefix:u,iconName:d,extra:O,watchable:!0})),t2=p.createElementNS("http://www.w3.org/2000/svg","svg");l==="::before"?c.insertBefore(t2,c.firstChild):c.appendChild(t2),t2.outerHTML=t3.map(r3=>Q(r3)).join(`
`),c.removeAttribute(s),a()}).catch(e)}else a()}else a()})}function l0(c){return Promise.all([z1(c,"::before"),z1(c,"::after")])}function s0(c){return c.parentNode!==document.head&&!~q3.indexOf(c.tagName.toUpperCase())&&!c.getAttribute(d2)&&(!c.parentNode||c.parentNode.tagName!=="svg")}function L1(c){if(A)return new Promise((l,s)=>{let a=G(c.querySelectorAll("*")).filter(s0).map(l0),e=U2.begin("searchPseudoElements");Y1(),Promise.all(a).then(()=>{e(),P2(),l()}).catch(()=>{e(),P2(),s()})})}var a0={hooks(){return{mutationObserverCallbacks(c){return c.pseudoElementsCallback=L1,c}}},provides(c){c.pseudoElements2svg=function(l){let{node:s=p}=l;t.searchPseudoElements&&L1(s)}}},m1=!1,e0={mixout(){return{dom:{unwatch(){Y1(),m1=!0}}}},hooks(){return{bootstrap(){o1(w2("mutationObserverCallbacks",{}))},noAuto(){H4()},watch(c){let{observeMutationsRoot:l}=c;m1?P2():o1(w2("mutationObserverCallbacks",{observeMutationsRoot:l}))}}}},M1=c=>{let l={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return c.toLowerCase().split(" ").reduce((s,a)=>{let e=a.toLowerCase().split("-"),n=e[0],o=e.slice(1).join("-");if(n&&o==="h")return s.flipX=!0,s;if(n&&o==="v")return s.flipY=!0,s;if(o=parseFloat(o),isNaN(o))return s;switch(n){case"grow":s.size=s.size+o;break;case"shrink":s.size=s.size-o;break;case"left":s.x=s.x-o;break;case"right":s.x=s.x+o;break;case"up":s.y=s.y-o;break;case"down":s.y=s.y+o;break;case"rotate":s.rotate=s.rotate+o;break}return s},l)},n0={mixout(){return{parse:{transform:c=>M1(c)}}},hooks(){return{parseNodeAttributes(c,l){let s=l.getAttribute("data-fa-transform");return s&&(c.transform=M1(s)),c}}},provides(c){c.generateAbstractTransformGrouping=function(l){let{main:s,transform:a,containerWidth:e,iconWidth:n}=l,o={transform:"translate(".concat(e/2," 256)")},f="translate(".concat(a.x*32,", ").concat(a.y*32,") "),z="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),r="rotate(".concat(a.rotate," 0 0)"),L={transform:"".concat(f," ").concat(z," ").concat(r)},M={transform:"translate(".concat(n/2*-1," -256)")},m={outer:o,inner:L,path:M};return{tag:"g",attributes:i({},m.outer),children:[{tag:"g",attributes:i({},m.inner),children:[{tag:s.icon.tag,children:s.icon.children,attributes:i(i({},s.icon.attributes),m.path)}]}]}}}},M2={x:0,y:0,width:"100%",height:"100%"};function p1(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return c.attributes&&(c.attributes.fill||l)&&(c.attributes.fill="black"),c}function o0(c){return c.tag==="g"?c.children:[c]}var i0={hooks(){return{parseNodeAttributes(c,l){let s=l.getAttribute("data-fa-mask"),a=s?o2(s.split(" ").map(e=>e.trim())):W1();return a.prefix||(a.prefix=F()),c.mask=a,c.maskId=l.getAttribute("data-fa-mask-id"),c}}},provides(c){c.generateAbstractMask=function(l){let{children:s,attributes:a,main:e,mask:n,maskId:o,transform:f}=l,{width:z,icon:r}=e,{width:L,icon:M}=n,m=Z3({transform:f,containerWidth:L,iconWidth:z}),u={tag:"rect",attributes:i(i({},M2),{},{fill:"white"})},v=r.children?{children:r.children.map(p1)}:{},D={tag:"g",attributes:i({},m.inner),children:[p1(i({tag:r.tag,attributes:i(i({},r.attributes),m.path)},v))]},h={tag:"g",attributes:i({},m.outer),children:[D]},S="mask-".concat(o||Y()),d="clip-".concat(o||Y()),g={tag:"mask",attributes:i(i({},M2),{},{id:S,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[u,h]},O={tag:"defs",children:[{tag:"clipPath",attributes:{id:d},children:o0(M)},g]};return s.push(O,{tag:"rect",attributes:i({fill:"currentColor","clip-path":"url(#".concat(d,")"),mask:"url(#".concat(S,")")},M2)}),{children:s,attributes:a}}}},f0={provides(c){let l=!1;T.matchMedia&&(l=T.matchMedia("(prefers-reduced-motion: reduce)").matches),c.missingIconAbstract=function(){let s=[],a={fill:"currentColor"},e={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};s.push({tag:"path",attributes:i(i({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});let n=i(i({},e),{},{attributeName:"opacity"}),o={tag:"circle",attributes:i(i({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return l||o.children.push({tag:"animate",attributes:i(i({},e),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:i(i({},n),{},{values:"1;0;1;1;0;1;"})}),s.push(o),s.push({tag:"path",attributes:i(i({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:l?[]:[{tag:"animate",attributes:i(i({},n),{},{values:"1;0;0;0;0;1;"})}]}),l||s.push({tag:"path",attributes:i(i({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:i(i({},n),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:s}}}},t0={hooks(){return{parseNodeAttributes(c,l){let s=l.getAttribute("data-fa-symbol"),a=s===null?!1:s===""?!0:s;return c.symbol=a,c}}}},r0=[s4,Y4,X4,K4,Q4,a0,e0,n0,i0,f0,t0];h4(r0,{mixoutsTo:x});var p0=x.noAuto,C0=x.config,K1=x.library,Q1=x.dom,u0=x.parse,d0=x.findIconDefinition,x0=x.toHtml,h0=x.icon,g0=x.layer,N0=x.text,b0=x.counter;var $1={prefix:"fas",iconName:"caret-right",icon:[256,512,[],"f0da","M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z"]};var J1={prefix:"fas",iconName:"caret-left",icon:[256,512,[],"f0d9","M9.4 278.6c-12.5-12.5-12.5-32.8 0-45.3l128-128c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 256c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-128-128z"]};var z0={prefix:"fas",iconName:"circle-check",icon:[512,512,[61533,"check-circle"],"f058","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"]},Z1=z0;var c3={prefix:"fas",iconName:"leaf",icon:[512,512,[],"f06c","M272 96c-78.6 0-145.1 51.5-167.7 122.5c33.6-17 71.5-26.5 111.7-26.5l88 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-16 0-72 0s0 0 0 0c-16.6 0-32.7 1.9-48.3 5.4c-25.9 5.9-49.9 16.4-71.4 30.7c0 0 0 0 0 0C38.3 298.8 0 364.9 0 440l0 16c0 13.3 10.7 24 24 24s24-10.7 24-24l0-16c0-48.7 20.7-92.5 53.8-123.2C121.6 392.3 190.3 448 272 448l1 0c132.1-.7 239-130.9 239-291.4c0-42.6-7.5-83.1-21.1-119.6c-2.6-6.9-12.7-6.6-16.2-.1C455.9 72.1 418.7 96 376 96L272 96z"]};var l3={prefix:"fas",iconName:"arrow-right",icon:[448,512,[8594],"f061","M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"]};var s3={prefix:"fas",iconName:"wrench",icon:[512,512,[128295],"f0ad","M352 320c88.4 0 160-71.6 160-160c0-15.3-2.2-30.1-6.2-44.2c-3.1-10.8-16.4-13.2-24.3-5.3l-76.8 76.8c-3 3-7.1 4.7-11.3 4.7L336 192c-8.8 0-16-7.2-16-16l0-57.4c0-4.2 1.7-8.3 4.7-11.3l76.8-76.8c7.9-7.9 5.4-21.2-5.3-24.3C382.1 2.2 367.3 0 352 0C263.6 0 192 71.6 192 160c0 19.1 3.4 37.5 9.5 54.5L19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L297.5 310.5c17 6.2 35.4 9.5 54.5 9.5zM80 408a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"]};var a3={prefix:"fas",iconName:"phone",icon:[512,512,[128222,128379],"f095","M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"]};var e3={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"]};var n3={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]};var o3={prefix:"fas",iconName:"check",icon:[448,512,[10003,10004],"f00c","M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"]};var i3={prefix:"fas",iconName:"triangle-exclamation",icon:[512,512,[9888,"exclamation-triangle","warning"],"f071","M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480L40 480c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"]};var f3={prefix:"fas",iconName:"paper-plane",icon:[512,512,[61913],"f1d8","M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480l0-83.6c0-4 1.5-7.8 4.2-10.8L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"]};K1.add(f3,a3,e3,o3,l3,Z1,i3,n3,s3,c3,J1,$1);Q1.watch();var f2=document.getElementById("navToggle"),y=document.getElementById("navMenu");f2.addEventListener("click",()=>{let c=f2.getAttribute("aria-expanded")==="true";f2.setAttribute("aria-expanded",String(!c)),c?(y.classList.remove("opacity-100","scale-100"),y.classList.add("opacity-0","scale-95"),setTimeout(()=>{y.classList.add("hidden")},300)):(y.classList.remove("hidden"),requestAnimationFrame(()=>{y.classList.remove("opacity-0","scale-95"),y.classList.add("opacity-100","scale-100")}))});document.querySelectorAll("#navMenu a").forEach(c=>{c.addEventListener("click",()=>{window.innerWidth<768&&(f2.setAttribute("aria-expanded","false"),y.classList.remove("opacity-100","scale-100"),y.classList.add("opacity-0","scale-95"),setTimeout(()=>{y.classList.add("hidden")},300))})});document.addEventListener("DOMContentLoaded",function(){let c=document.querySelectorAll("section[id]"),l=document.querySelectorAll("#navMenu a");function s(){let a="";c.forEach(e=>{let n=e.offsetTop-150;window.scrollY>=n&&(a=e.getAttribute("id"))}),l.forEach(e=>{e.getAttribute("href").replace("/#","")===a?e.setAttribute("aria-current","page"):e.removeAttribute("aria-current")})}window.addEventListener("scroll",s),s()});})();
/*! Bundled license information:

@fortawesome/fontawesome-svg-core/index.mjs:
@fortawesome/free-solid-svg-icons/index.mjs:
  (*!
   * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
   * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
   * Copyright 2024 Fonticons, Inc.
   *)
*/
