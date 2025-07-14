(()=>{function t3(c,l,s){return(l=z3(l))in c?Object.defineProperty(c,l,{value:s,enumerable:!0,configurable:!0,writable:!0}):c[l]=s,c}function q2(c,l){var s=Object.keys(c);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(c);l&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(c,e).enumerable})),s.push.apply(s,a)}return s}function i(c){for(var l=1;l<arguments.length;l++){var s=arguments[l]!=null?arguments[l]:{};l%2?q2(Object(s),!0).forEach(function(a){t3(c,a,s[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(s)):q2(Object(s)).forEach(function(a){Object.defineProperty(c,a,Object.getOwnPropertyDescriptor(s,a))})}return c}function r3(c,l){if(typeof c!="object"||!c)return c;var s=c[Symbol.toPrimitive];if(s!==void 0){var a=s.call(c,l||"default");if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(l==="string"?String:Number)(c)}function z3(c){var l=r3(c,"string");return typeof l=="symbol"?l:l+""}var W2=()=>{},P2={},M1={},p1=null,C1={mark:W2,measure:W2};try{typeof window<"u"&&(P2=window),typeof document<"u"&&(M1=document),typeof MutationObserver<"u"&&(p1=MutationObserver),typeof performance<"u"&&(C1=performance)}catch{}var{userAgent:G2=""}=P2.navigator||{},P=P2,p=M1,_2=p1,Q=C1,r0=!!P.document,A=!!p.documentElement&&!!p.head&&typeof p.addEventListener=="function"&&typeof p.createElement=="function",u1=~G2.indexOf("MSIE")||~G2.indexOf("Trident/"),L3=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,m3=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,d1={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},M3={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},x1=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],C="classic",s2="duotone",p3="sharp",C3="sharp-duotone",h1=[C,s2,p3,C3],u3={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},d3={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},x3=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),h3={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},g3=["fak","fa-kit","fakd","fa-kit-duotone"],V2={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},N3=["kit"],b3={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},S3=["fak","fakd"],w3={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},j2={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},$={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},k3=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],A3=["fak","fa-kit","fakd","fa-kit-duotone"],y3={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},v3={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},P3={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},m2={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},T3=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],M2=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...k3,...T3],F3=["solid","regular","light","thin","duotone","brands"],g1=[1,2,3,4,5,6,7,8,9,10],B3=g1.concat([11,12,13,14,15,16,17,18,19,20]),D3=[...Object.keys(P3),...F3,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",$.GROUP,$.SWAP_OPACITY,$.PRIMARY,$.SECONDARY].concat(g1.map(c=>"".concat(c,"x"))).concat(B3.map(c=>"w-".concat(c))),R3={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},w="___FONT_AWESOME___",p2=16,N1="fa",b1="svg-inline--fa",R="data-fa-i2svg",C2="data-fa-pseudo-element",E3="data-fa-pseudo-element-pending",T2="data-prefix",F2="data-icon",Y2="fontawesome-i2svg",H3="async",O3=["HTML","HEAD","STYLE","SCRIPT"],S1=(()=>{try{return!0}catch{return!1}})();function X(c){return new Proxy(c,{get(l,s){return s in l?l[s]:l[C]}})}var w1=i({},d1);w1[C]=i(i(i(i({},{"fa-duotone":"duotone"}),d1[C]),V2.kit),V2["kit-duotone"]);var U3=X(w1),u2=i({},h3);u2[C]=i(i(i(i({},{duotone:"fad"}),u2[C]),j2.kit),j2["kit-duotone"]);var X2=X(u2),d2=i({},m2);d2[C]=i(i({},d2[C]),w3.kit);var B2=X(d2),x2=i({},v3);x2[C]=i(i({},x2[C]),b3.kit);var z0=X(x2),I3=L3,k1="fa-layers-text",q3=m3,W3=i({},u3),L0=X(W3),G3=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],f2=M3,_3=[...N3,...D3],_=P.FontAwesomeConfig||{};function V3(c){var l=p.querySelector("script["+c+"]");if(l)return l.getAttribute(c)}function j3(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}p&&typeof p.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(l=>{let[s,a]=l,e=j3(V3(s));e!=null&&(_[a]=e)});var A1={styleDefault:"solid",familyDefault:C,cssPrefix:N1,replacementClass:b1,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};_.familyPrefix&&(_.cssPrefix=_.familyPrefix);var q=i(i({},A1),_);q.autoReplaceSvg||(q.observeMutations=!1);var t={};Object.keys(A1).forEach(c=>{Object.defineProperty(t,c,{enumerable:!0,set:function(l){q[c]=l,V.forEach(s=>s(t))},get:function(){return q[c]}})});Object.defineProperty(t,"familyPrefix",{enumerable:!0,set:function(c){q.cssPrefix=c,V.forEach(l=>l(t))},get:function(){return q.cssPrefix}});P.FontAwesomeConfig=t;var V=[];function Y3(c){return V.push(c),()=>{V.splice(V.indexOf(c),1)}}var v=p2,N={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function X3(c){if(!c||!A)return;let l=p.createElement("style");l.setAttribute("type","text/css"),l.innerHTML=c;let s=p.head.childNodes,a=null;for(let e=s.length-1;e>-1;e--){let n=s[e],o=(n.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=n)}return p.head.insertBefore(l,a),c}var K3="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function j(){let c=12,l="";for(;c-- >0;)l+=K3[Math.random()*62|0];return l}function W(c){let l=[];for(let s=(c||[]).length>>>0;s--;)l[s]=c[s];return l}function D2(c){return c.classList?W(c.classList):(c.getAttribute("class")||"").split(" ").filter(l=>l)}function y1(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Q3(c){return Object.keys(c||{}).reduce((l,s)=>l+"".concat(s,'="').concat(y1(c[s]),'" '),"").trim()}function a2(c){return Object.keys(c||{}).reduce((l,s)=>l+"".concat(s,": ").concat(c[s].trim(),";"),"")}function R2(c){return c.size!==N.size||c.x!==N.x||c.y!==N.y||c.rotate!==N.rotate||c.flipX||c.flipY}function $3(c){let{transform:l,containerWidth:s,iconWidth:a}=c,e={transform:"translate(".concat(s/2," 256)")},n="translate(".concat(l.x*32,", ").concat(l.y*32,") "),o="scale(".concat(l.size/16*(l.flipX?-1:1),", ").concat(l.size/16*(l.flipY?-1:1),") "),f="rotate(".concat(l.rotate," 0 0)"),z={transform:"".concat(n," ").concat(o," ").concat(f)},r={transform:"translate(".concat(a/2*-1," -256)")};return{outer:e,inner:z,path:r}}function J3(c){let{transform:l,width:s=p2,height:a=p2,startCentered:e=!1}=c,n="";return e&&u1?n+="translate(".concat(l.x/v-s/2,"em, ").concat(l.y/v-a/2,"em) "):e?n+="translate(calc(-50% + ".concat(l.x/v,"em), calc(-50% + ").concat(l.y/v,"em)) "):n+="translate(".concat(l.x/v,"em, ").concat(l.y/v,"em) "),n+="scale(".concat(l.size/v*(l.flipX?-1:1),", ").concat(l.size/v*(l.flipY?-1:1),") "),n+="rotate(".concat(l.rotate,"deg) "),n}var Z3=`:root, :host {
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
}`;function v1(){let c=N1,l=b1,s=t.cssPrefix,a=t.replacementClass,e=Z3;if(s!==c||a!==l){let n=new RegExp("\\.".concat(c,"\\-"),"g"),o=new RegExp("\\--".concat(c,"\\-"),"g"),f=new RegExp("\\.".concat(l),"g");e=e.replace(n,".".concat(s,"-")).replace(o,"--".concat(s,"-")).replace(f,".".concat(a))}return e}var K2=!1;function t2(){t.autoAddCss&&!K2&&(X3(v1()),K2=!0)}var c4={mixout(){return{dom:{css:v1,insertCss:t2}}},hooks(){return{beforeDOMElementCreation(){t2()},beforeI2svg(){t2()}}}},k=P||{};k[w]||(k[w]={});k[w].styles||(k[w].styles={});k[w].hooks||(k[w].hooks={});k[w].shims||(k[w].shims=[]);var b=k[w],P1=[],T1=function(){p.removeEventListener("DOMContentLoaded",T1),c2=1,P1.map(c=>c())},c2=!1;A&&(c2=(p.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(p.readyState),c2||p.addEventListener("DOMContentLoaded",T1));function l4(c){A&&(c2?setTimeout(c,0):P1.push(c))}function K(c){let{tag:l,attributes:s={},children:a=[]}=c;return typeof c=="string"?y1(c):"<".concat(l," ").concat(Q3(s),">").concat(a.map(K).join(""),"</").concat(l,">")}function Q2(c,l,s){if(c&&c[l]&&c[l][s])return{prefix:l,iconName:s,icon:c[l][s]}}var s4=function(l,s){return function(a,e,n,o){return l.call(s,a,e,n,o)}},r2=function(l,s,a,e){var n=Object.keys(l),o=n.length,f=e!==void 0?s4(s,e):s,z,r,L;for(a===void 0?(z=1,L=l[n[0]]):(z=0,L=a);z<o;z++)r=n[z],L=f(L,l[r],r,l);return L};function a4(c){let l=[],s=0,a=c.length;for(;s<a;){let e=c.charCodeAt(s++);if(e>=55296&&e<=56319&&s<a){let n=c.charCodeAt(s++);(n&64512)==56320?l.push(((e&1023)<<10)+(n&1023)+65536):(l.push(e),s--)}else l.push(e)}return l}function h2(c){let l=a4(c);return l.length===1?l[0].toString(16):null}function e4(c,l){let s=c.length,a=c.charCodeAt(l),e;return a>=55296&&a<=56319&&s>l+1&&(e=c.charCodeAt(l+1),e>=56320&&e<=57343)?(a-55296)*1024+e-56320+65536:a}function $2(c){return Object.keys(c).reduce((l,s)=>{let a=c[s];return!!a.icon?l[a.iconName]=a.icon:l[s]=a,l},{})}function g2(c,l){let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},{skipHooks:a=!1}=s,e=$2(l);typeof b.hooks.addPack=="function"&&!a?b.hooks.addPack(c,$2(l)):b.styles[c]=i(i({},b.styles[c]||{}),e),c==="fas"&&g2("fa",l)}var{styles:Y,shims:n4}=b,F1=Object.keys(B2),o4=F1.reduce((c,l)=>(c[l]=Object.keys(B2[l]),c),{}),E2=null,B1={},D1={},R1={},E1={},H1={};function i4(c){return~_3.indexOf(c)}function f4(c,l){let s=l.split("-"),a=s[0],e=s.slice(1).join("-");return a===c&&e!==""&&!i4(e)?e:null}var O1=()=>{let c=a=>r2(Y,(e,n,o)=>(e[o]=r2(n,a,{}),e),{});B1=c((a,e,n)=>(e[3]&&(a[e[3]]=n),e[2]&&e[2].filter(f=>typeof f=="number").forEach(f=>{a[f.toString(16)]=n}),a)),D1=c((a,e,n)=>(a[n]=n,e[2]&&e[2].filter(f=>typeof f=="string").forEach(f=>{a[f]=n}),a)),H1=c((a,e,n)=>{let o=e[2];return a[n]=n,o.forEach(f=>{a[f]=n}),a});let l="far"in Y||t.autoFetchSvg,s=r2(n4,(a,e)=>{let n=e[0],o=e[1],f=e[2];return o==="far"&&!l&&(o="fas"),typeof n=="string"&&(a.names[n]={prefix:o,iconName:f}),typeof n=="number"&&(a.unicodes[n.toString(16)]={prefix:o,iconName:f}),a},{names:{},unicodes:{}});R1=s.names,E1=s.unicodes,E2=e2(t.styleDefault,{family:t.familyDefault})};Y3(c=>{E2=e2(c.styleDefault,{family:t.familyDefault})});O1();function H2(c,l){return(B1[c]||{})[l]}function t4(c,l){return(D1[c]||{})[l]}function D(c,l){return(H1[c]||{})[l]}function U1(c){return R1[c]||{prefix:null,iconName:null}}function r4(c){let l=E1[c],s=H2("fas",c);return l||(s?{prefix:"fas",iconName:s}:null)||{prefix:null,iconName:null}}function T(){return E2}var I1=()=>({prefix:null,iconName:null,rest:[]});function z4(c){let l=C,s=F1.reduce((a,e)=>(a[e]="".concat(t.cssPrefix,"-").concat(e),a),{});return h1.forEach(a=>{(c.includes(s[a])||c.some(e=>o4[a].includes(e)))&&(l=a)}),l}function e2(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{family:s=C}=l,a=U3[s][c];if(s===s2&&!c)return"fad";let e=X2[s][c]||X2[s][a],n=c in b.styles?c:null;return e||n||null}function L4(c){let l=[],s=null;return c.forEach(a=>{let e=f4(t.cssPrefix,a);e?s=e:a&&l.push(a)}),{iconName:s,rest:l}}function J2(c){return c.sort().filter((l,s,a)=>a.indexOf(l)===s)}function n2(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{skipLookups:s=!1}=l,a=null,e=M2.concat(A3),n=J2(c.filter(M=>e.includes(M))),o=J2(c.filter(M=>!M2.includes(M))),f=n.filter(M=>(a=M,!x1.includes(M))),[z=null]=f,r=z4(n),L=i(i({},L4(o)),{},{prefix:e2(z,{family:r})});return i(i(i({},L),C4({values:c,family:r,styles:Y,config:t,canonical:L,givenPrefix:a})),m4(s,a,L))}function m4(c,l,s){let{prefix:a,iconName:e}=s;if(c||!a||!e)return{prefix:a,iconName:e};let n=l==="fa"?U1(e):{},o=D(a,e);return e=n.iconName||o||e,a=n.prefix||a,a==="far"&&!Y.far&&Y.fas&&!t.autoFetchSvg&&(a="fas"),{prefix:a,iconName:e}}var M4=h1.filter(c=>c!==C||c!==s2),p4=Object.keys(m2).filter(c=>c!==C).map(c=>Object.keys(m2[c])).flat();function C4(c){let{values:l,family:s,canonical:a,givenPrefix:e="",styles:n={},config:o={}}=c,f=s===s2,z=l.includes("fa-duotone")||l.includes("fad"),r=o.familyDefault==="duotone",L=a.prefix==="fad"||a.prefix==="fa-duotone";if(!f&&(z||r||L)&&(a.prefix="fad"),(l.includes("fa-brands")||l.includes("fab"))&&(a.prefix="fab"),!a.prefix&&M4.includes(s)&&(Object.keys(n).find(m=>p4.includes(m))||o.autoFetchSvg)){let m=x3.get(s).defaultShortPrefixId;a.prefix=m,a.iconName=D(a.prefix,a.iconName)||a.iconName}return(a.prefix==="fa"||e==="fa")&&(a.prefix=T()||"fas"),a}var N2=class{constructor(){this.definitions={}}add(){for(var l=arguments.length,s=new Array(l),a=0;a<l;a++)s[a]=arguments[a];let e=s.reduce(this._pullDefinitions,{});Object.keys(e).forEach(n=>{this.definitions[n]=i(i({},this.definitions[n]||{}),e[n]),g2(n,e[n]);let o=B2[C][n];o&&g2(o,e[n]),O1()})}reset(){this.definitions={}}_pullDefinitions(l,s){let a=s.prefix&&s.iconName&&s.icon?{0:s}:s;return Object.keys(a).map(e=>{let{prefix:n,iconName:o,icon:f}=a[e],z=f[2];l[n]||(l[n]={}),z.length>0&&z.forEach(r=>{typeof r=="string"&&(l[n][r]=f)}),l[n][o]=f}),l}},Z2=[],U={},I={},u4=Object.keys(I);function d4(c,l){let{mixoutsTo:s}=l;return Z2=c,U={},Object.keys(I).forEach(a=>{u4.indexOf(a)===-1&&delete I[a]}),Z2.forEach(a=>{let e=a.mixout?a.mixout():{};if(Object.keys(e).forEach(n=>{typeof e[n]=="function"&&(s[n]=e[n]),typeof e[n]=="object"&&Object.keys(e[n]).forEach(o=>{s[n]||(s[n]={}),s[n][o]=e[n][o]})}),a.hooks){let n=a.hooks();Object.keys(n).forEach(o=>{U[o]||(U[o]=[]),U[o].push(n[o])})}a.provides&&a.provides(I)}),s}function b2(c,l){for(var s=arguments.length,a=new Array(s>2?s-2:0),e=2;e<s;e++)a[e-2]=arguments[e];return(U[c]||[]).forEach(o=>{l=o.apply(null,[l,...a])}),l}function E(c){for(var l=arguments.length,s=new Array(l>1?l-1:0),a=1;a<l;a++)s[a-1]=arguments[a];(U[c]||[]).forEach(n=>{n.apply(null,s)})}function F(){let c=arguments[0],l=Array.prototype.slice.call(arguments,1);return I[c]?I[c].apply(null,l):void 0}function S2(c){c.prefix==="fa"&&(c.prefix="fas");let{iconName:l}=c,s=c.prefix||T();if(l)return l=D(s,l)||l,Q2(q1.definitions,s,l)||Q2(b.styles,s,l)}var q1=new N2,x4=()=>{t.autoReplaceSvg=!1,t.observeMutations=!1,E("noAuto")},h4={i2svg:function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return A?(E("beforeI2svg",c),F("pseudoElements2svg",c),F("i2svg",c)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:l}=c;t.autoReplaceSvg===!1&&(t.autoReplaceSvg=!0),t.observeMutations=!0,l4(()=>{N4({autoReplaceSvgRoot:l}),E("watch",c)})}},g4={icon:c=>{if(c===null)return null;if(typeof c=="object"&&c.prefix&&c.iconName)return{prefix:c.prefix,iconName:D(c.prefix,c.iconName)||c.iconName};if(Array.isArray(c)&&c.length===2){let l=c[1].indexOf("fa-")===0?c[1].slice(3):c[1],s=e2(c[0]);return{prefix:s,iconName:D(s,l)||l}}if(typeof c=="string"&&(c.indexOf("".concat(t.cssPrefix,"-"))>-1||c.match(I3))){let l=n2(c.split(" "),{skipLookups:!0});return{prefix:l.prefix||T(),iconName:D(l.prefix,l.iconName)||l.iconName}}if(typeof c=="string"){let l=T();return{prefix:l,iconName:D(l,c)||c}}}},x={noAuto:x4,config:t,dom:h4,parse:g4,library:q1,findIconDefinition:S2,toHtml:K},N4=function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:l=p}=c;(Object.keys(b.styles).length>0||t.autoFetchSvg)&&A&&t.autoReplaceSvg&&x.dom.i2svg({node:l})};function o2(c,l){return Object.defineProperty(c,"abstract",{get:l}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(s=>K(s))}}),Object.defineProperty(c,"node",{get:function(){if(!A)return;let s=p.createElement("div");return s.innerHTML=c.html,s.children}}),c}function b4(c){let{children:l,main:s,mask:a,attributes:e,styles:n,transform:o}=c;if(R2(o)&&s.found&&!a.found){let{width:f,height:z}=s,r={x:f/z/2,y:.5};e.style=a2(i(i({},n),{},{"transform-origin":"".concat(r.x+o.x/16,"em ").concat(r.y+o.y/16,"em")}))}return[{tag:"svg",attributes:e,children:l}]}function S4(c){let{prefix:l,iconName:s,children:a,attributes:e,symbol:n}=c,o=n===!0?"".concat(l,"-").concat(t.cssPrefix,"-").concat(s):n;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:i(i({},e),{},{id:o}),children:a}]}]}function O2(c){let{icons:{main:l,mask:s},prefix:a,iconName:e,transform:n,symbol:o,title:f,maskId:z,titleId:r,extra:L,watchable:M=!1}=c,{width:m,height:u}=s.found?s:l,y=S3.includes(a),B=[t.replacementClass,e?"".concat(t.cssPrefix,"-").concat(e):""].filter(O=>L.classes.indexOf(O)===-1).filter(O=>O!==""||!!O).concat(L.classes).join(" "),h={children:[],attributes:i(i({},L.attributes),{},{"data-prefix":a,"data-icon":e,class:B,role:L.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(m," ").concat(u)})},S=y&&!~L.classes.indexOf("fa-fw")?{width:"".concat(m/u*16*.0625,"em")}:{};M&&(h.attributes[R]=""),f&&(h.children.push({tag:"title",attributes:{id:h.attributes["aria-labelledby"]||"title-".concat(r||j())},children:[f]}),delete h.attributes.title);let d=i(i({},h),{},{prefix:a,iconName:e,main:l,mask:s,maskId:z,transform:n,symbol:o,styles:i(i({},S),L.styles)}),{children:g,attributes:H}=s.found&&l.found?F("generateAbstractMask",d)||{children:[],attributes:{}}:F("generateAbstractIcon",d)||{children:[],attributes:{}};return d.children=g,d.attributes=H,o?S4(d):b4(d)}function c1(c){let{content:l,width:s,height:a,transform:e,title:n,extra:o,watchable:f=!1}=c,z=i(i(i({},o.attributes),n?{title:n}:{}),{},{class:o.classes.join(" ")});f&&(z[R]="");let r=i({},o.styles);R2(e)&&(r.transform=J3({transform:e,startCentered:!0,width:s,height:a}),r["-webkit-transform"]=r.transform);let L=a2(r);L.length>0&&(z.style=L);let M=[];return M.push({tag:"span",attributes:z,children:[l]}),n&&M.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),M}function w4(c){let{content:l,title:s,extra:a}=c,e=i(i(i({},a.attributes),s?{title:s}:{}),{},{class:a.classes.join(" ")}),n=a2(a.styles);n.length>0&&(e.style=n);let o=[];return o.push({tag:"span",attributes:e,children:[l]}),s&&o.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),o}var{styles:z2}=b;function w2(c){let l=c[0],s=c[1],[a]=c.slice(4),e=null;return Array.isArray(a)?e={tag:"g",attributes:{class:"".concat(t.cssPrefix,"-").concat(f2.GROUP)},children:[{tag:"path",attributes:{class:"".concat(t.cssPrefix,"-").concat(f2.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(t.cssPrefix,"-").concat(f2.PRIMARY),fill:"currentColor",d:a[1]}}]}:e={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:l,height:s,icon:e}}var k4={found:!1,width:512,height:512};function A4(c,l){!S1&&!t.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(l,'" is missing.'))}function k2(c,l){let s=l;return l==="fa"&&t.styleDefault!==null&&(l=T()),new Promise((a,e)=>{if(s==="fa"){let n=U1(c)||{};c=n.iconName||c,l=n.prefix||l}if(c&&l&&z2[l]&&z2[l][c]){let n=z2[l][c];return a(w2(n))}A4(c,l),a(i(i({},k4),{},{icon:t.showMissingIcons&&c?F("missingIconAbstract")||{}:{}}))})}var l1=()=>{},A2=t.measurePerformance&&Q&&Q.mark&&Q.measure?Q:{mark:l1,measure:l1},G='FA "6.7.2"',y4=c=>(A2.mark("".concat(G," ").concat(c," begins")),()=>W1(c)),W1=c=>{A2.mark("".concat(G," ").concat(c," ends")),A2.measure("".concat(G," ").concat(c),"".concat(G," ").concat(c," begins"),"".concat(G," ").concat(c," ends"))},U2={begin:y4,end:W1},J=()=>{};function s1(c){return typeof(c.getAttribute?c.getAttribute(R):null)=="string"}function v4(c){let l=c.getAttribute?c.getAttribute(T2):null,s=c.getAttribute?c.getAttribute(F2):null;return l&&s}function P4(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(t.replacementClass)}function T4(){return t.autoReplaceSvg===!0?Z.replace:Z[t.autoReplaceSvg]||Z.replace}function F4(c){return p.createElementNS("http://www.w3.org/2000/svg",c)}function B4(c){return p.createElement(c)}function G1(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{ceFn:s=c.tag==="svg"?F4:B4}=l;if(typeof c=="string")return p.createTextNode(c);let a=s(c.tag);return Object.keys(c.attributes||[]).forEach(function(n){a.setAttribute(n,c.attributes[n])}),(c.children||[]).forEach(function(n){a.appendChild(G1(n,{ceFn:s}))}),a}function D4(c){let l=" ".concat(c.outerHTML," ");return l="".concat(l,"Font Awesome fontawesome.com "),l}var Z={replace:function(c){let l=c[0];if(l.parentNode)if(c[1].forEach(s=>{l.parentNode.insertBefore(G1(s),l)}),l.getAttribute(R)===null&&t.keepOriginalSource){let s=p.createComment(D4(l));l.parentNode.replaceChild(s,l)}else l.remove()},nest:function(c){let l=c[0],s=c[1];if(~D2(l).indexOf(t.replacementClass))return Z.replace(c);let a=new RegExp("".concat(t.cssPrefix,"-.*"));if(delete s[0].attributes.id,s[0].attributes.class){let n=s[0].attributes.class.split(" ").reduce((o,f)=>(f===t.replacementClass||f.match(a)?o.toSvg.push(f):o.toNode.push(f),o),{toNode:[],toSvg:[]});s[0].attributes.class=n.toSvg.join(" "),n.toNode.length===0?l.removeAttribute("class"):l.setAttribute("class",n.toNode.join(" "))}let e=s.map(n=>K(n)).join(`
`);l.setAttribute(R,""),l.innerHTML=e}};function a1(c){c()}function _1(c,l){let s=typeof l=="function"?l:J;if(c.length===0)s();else{let a=a1;t.mutateApproach===H3&&(a=P.requestAnimationFrame||a1),a(()=>{let e=T4(),n=U2.begin("mutate");c.map(e),n(),s()})}}var I2=!1;function V1(){I2=!0}function y2(){I2=!1}var l2=null;function e1(c){if(!_2||!t.observeMutations)return;let{treeCallback:l=J,nodeCallback:s=J,pseudoElementsCallback:a=J,observeMutationsRoot:e=p}=c;l2=new _2(n=>{if(I2)return;let o=T();W(n).forEach(f=>{if(f.type==="childList"&&f.addedNodes.length>0&&!s1(f.addedNodes[0])&&(t.searchPseudoElements&&a(f.target),l(f.target)),f.type==="attributes"&&f.target.parentNode&&t.searchPseudoElements&&a(f.target.parentNode),f.type==="attributes"&&s1(f.target)&&~G3.indexOf(f.attributeName))if(f.attributeName==="class"&&v4(f.target)){let{prefix:z,iconName:r}=n2(D2(f.target));f.target.setAttribute(T2,z||o),r&&f.target.setAttribute(F2,r)}else P4(f.target)&&s(f.target)})}),A&&l2.observe(e,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function R4(){l2&&l2.disconnect()}function E4(c){let l=c.getAttribute("style"),s=[];return l&&(s=l.split(";").reduce((a,e)=>{let n=e.split(":"),o=n[0],f=n.slice(1);return o&&f.length>0&&(a[o]=f.join(":").trim()),a},{})),s}function H4(c){let l=c.getAttribute("data-prefix"),s=c.getAttribute("data-icon"),a=c.innerText!==void 0?c.innerText.trim():"",e=n2(D2(c));return e.prefix||(e.prefix=T()),l&&s&&(e.prefix=l,e.iconName=s),e.iconName&&e.prefix||(e.prefix&&a.length>0&&(e.iconName=t4(e.prefix,c.innerText)||H2(e.prefix,h2(c.innerText))),!e.iconName&&t.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(e.iconName=c.firstChild.data)),e}function O4(c){let l=W(c.attributes).reduce((e,n)=>(e.name!=="class"&&e.name!=="style"&&(e[n.name]=n.value),e),{}),s=c.getAttribute("title"),a=c.getAttribute("data-fa-title-id");return t.autoA11y&&(s?l["aria-labelledby"]="".concat(t.replacementClass,"-title-").concat(a||j()):(l["aria-hidden"]="true",l.focusable="false")),l}function U4(){return{iconName:null,title:null,titleId:null,prefix:null,transform:N,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function n1(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},{iconName:s,prefix:a,rest:e}=H4(c),n=O4(c),o=b2("parseNodeAttributes",{},c),f=l.styleParser?E4(c):[];return i({iconName:s,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:a,transform:N,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:e,styles:f,attributes:n}},o)}var{styles:I4}=b;function j1(c){let l=t.autoReplaceSvg==="nest"?n1(c,{styleParser:!1}):n1(c);return~l.extra.classes.indexOf(k1)?F("generateLayersText",c,l):F("generateSvgReplacementMutation",c,l)}function q4(){return[...g3,...M2]}function o1(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!A)return Promise.resolve();let s=p.documentElement.classList,a=L=>s.add("".concat(Y2,"-").concat(L)),e=L=>s.remove("".concat(Y2,"-").concat(L)),n=t.autoFetchSvg?q4():x1.concat(Object.keys(I4));n.includes("fa")||n.push("fa");let o=[".".concat(k1,":not([").concat(R,"])")].concat(n.map(L=>".".concat(L,":not([").concat(R,"])"))).join(", ");if(o.length===0)return Promise.resolve();let f=[];try{f=W(c.querySelectorAll(o))}catch{}if(f.length>0)a("pending"),e("complete");else return Promise.resolve();let z=U2.begin("onTree"),r=f.reduce((L,M)=>{try{let m=j1(M);m&&L.push(m)}catch(m){S1||m.name==="MissingIcon"&&console.error(m)}return L},[]);return new Promise((L,M)=>{Promise.all(r).then(m=>{_1(m,()=>{a("active"),a("complete"),e("pending"),typeof l=="function"&&l(),z(),L()})}).catch(m=>{z(),M(m)})})}function W4(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;j1(c).then(s=>{s&&_1([s],l)})}function G4(c){return function(l){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(l||{}).icon?l:S2(l||{}),{mask:e}=s;return e&&(e=(e||{}).icon?e:S2(e||{})),c(a,i(i({},s),{},{mask:e}))}}var _4=function(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:s=N,symbol:a=!1,mask:e=null,maskId:n=null,title:o=null,titleId:f=null,classes:z=[],attributes:r={},styles:L={}}=l;if(!c)return;let{prefix:M,iconName:m,icon:u}=c;return o2(i({type:"icon"},c),()=>(E("beforeDOMElementCreation",{iconDefinition:c,params:l}),t.autoA11y&&(o?r["aria-labelledby"]="".concat(t.replacementClass,"-title-").concat(f||j()):(r["aria-hidden"]="true",r.focusable="false")),O2({icons:{main:w2(u),mask:e?w2(e.icon):{found:!1,width:null,height:null,icon:{}}},prefix:M,iconName:m,transform:i(i({},N),s),symbol:a,title:o,maskId:n,titleId:f,extra:{attributes:r,styles:L,classes:z}})))},V4={mixout(){return{icon:G4(_4)}},hooks(){return{mutationObserverCallbacks(c){return c.treeCallback=o1,c.nodeCallback=W4,c}}},provides(c){c.i2svg=function(l){let{node:s=p,callback:a=()=>{}}=l;return o1(s,a)},c.generateSvgReplacementMutation=function(l,s){let{iconName:a,title:e,titleId:n,prefix:o,transform:f,symbol:z,mask:r,maskId:L,extra:M}=s;return new Promise((m,u)=>{Promise.all([k2(a,o),r.iconName?k2(r.iconName,r.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(y=>{let[B,h]=y;m([l,O2({icons:{main:B,mask:h},prefix:o,iconName:a,transform:f,symbol:z,maskId:L,title:e,titleId:n,extra:M,watchable:!0})])}).catch(u)})},c.generateAbstractIcon=function(l){let{children:s,attributes:a,main:e,transform:n,styles:o}=l,f=a2(o);f.length>0&&(a.style=f);let z;return R2(n)&&(z=F("generateAbstractTransformGrouping",{main:e,transform:n,containerWidth:e.width,iconWidth:e.width})),s.push(z||e.icon),{children:s,attributes:a}}}},j4={mixout(){return{layer(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{classes:s=[]}=l;return o2({type:"layer"},()=>{E("beforeDOMElementCreation",{assembler:c,params:l});let a=[];return c(e=>{Array.isArray(e)?e.map(n=>{a=a.concat(n.abstract)}):a=a.concat(e.abstract)}),[{tag:"span",attributes:{class:["".concat(t.cssPrefix,"-layers"),...s].join(" ")},children:a}]})}}}},Y4={mixout(){return{counter(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{title:s=null,classes:a=[],attributes:e={},styles:n={}}=l;return o2({type:"counter",content:c},()=>(E("beforeDOMElementCreation",{content:c,params:l}),w4({content:c.toString(),title:s,extra:{attributes:e,styles:n,classes:["".concat(t.cssPrefix,"-layers-counter"),...a]}})))}}}},X4={mixout(){return{text(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:s=N,title:a=null,classes:e=[],attributes:n={},styles:o={}}=l;return o2({type:"text",content:c},()=>(E("beforeDOMElementCreation",{content:c,params:l}),c1({content:c,transform:i(i({},N),s),title:a,extra:{attributes:n,styles:o,classes:["".concat(t.cssPrefix,"-layers-text"),...e]}})))}}},provides(c){c.generateLayersText=function(l,s){let{title:a,transform:e,extra:n}=s,o=null,f=null;if(u1){let z=parseInt(getComputedStyle(l).fontSize,10),r=l.getBoundingClientRect();o=r.width/z,f=r.height/z}return t.autoA11y&&!a&&(n.attributes["aria-hidden"]="true"),Promise.resolve([l,c1({content:l.innerHTML,width:o,height:f,transform:e,title:a,extra:n,watchable:!0})])}}},K4=new RegExp('"',"ug"),i1=[1105920,1112319],f1=i(i(i(i({},{FontAwesome:{normal:"fas",400:"fas"}}),d3),R3),y3),v2=Object.keys(f1).reduce((c,l)=>(c[l.toLowerCase()]=f1[l],c),{}),Q4=Object.keys(v2).reduce((c,l)=>{let s=v2[l];return c[l]=s[900]||[...Object.entries(s)][0][1],c},{});function $4(c){let l=c.replace(K4,""),s=e4(l,0),a=s>=i1[0]&&s<=i1[1],e=l.length===2?l[0]===l[1]:!1;return{value:h2(e?l[0]:l),isSecondary:a||e}}function J4(c,l){let s=c.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(l),e=isNaN(a)?"normal":a;return(v2[s]||{})[e]||Q4[s]}function t1(c,l){let s="".concat(E3).concat(l.replace(":","-"));return new Promise((a,e)=>{if(c.getAttribute(s)!==null)return a();let o=W(c.children).filter(m=>m.getAttribute(C2)===l)[0],f=P.getComputedStyle(c,l),z=f.getPropertyValue("font-family"),r=z.match(q3),L=f.getPropertyValue("font-weight"),M=f.getPropertyValue("content");if(o&&!r)return c.removeChild(o),a();if(r&&M!=="none"&&M!==""){let m=f.getPropertyValue("content"),u=J4(z,L),{value:y,isSecondary:B}=$4(m),h=r[0].startsWith("FontAwesome"),S=H2(u,y),d=S;if(h){let g=r4(y);g.iconName&&g.prefix&&(S=g.iconName,u=g.prefix)}if(S&&!B&&(!o||o.getAttribute(T2)!==u||o.getAttribute(F2)!==d)){c.setAttribute(s,d),o&&c.removeChild(o);let g=U4(),{extra:H}=g;H.attributes[C2]=l,k2(S,u).then(O=>{let i3=O2(i(i({},g),{},{icons:{main:O,mask:I1()},prefix:u,iconName:d,extra:H,watchable:!0})),i2=p.createElementNS("http://www.w3.org/2000/svg","svg");l==="::before"?c.insertBefore(i2,c.firstChild):c.appendChild(i2),i2.outerHTML=i3.map(f3=>K(f3)).join(`
`),c.removeAttribute(s),a()}).catch(e)}else a()}else a()})}function Z4(c){return Promise.all([t1(c,"::before"),t1(c,"::after")])}function c0(c){return c.parentNode!==document.head&&!~O3.indexOf(c.tagName.toUpperCase())&&!c.getAttribute(C2)&&(!c.parentNode||c.parentNode.tagName!=="svg")}function r1(c){if(A)return new Promise((l,s)=>{let a=W(c.querySelectorAll("*")).filter(c0).map(Z4),e=U2.begin("searchPseudoElements");V1(),Promise.all(a).then(()=>{e(),y2(),l()}).catch(()=>{e(),y2(),s()})})}var l0={hooks(){return{mutationObserverCallbacks(c){return c.pseudoElementsCallback=r1,c}}},provides(c){c.pseudoElements2svg=function(l){let{node:s=p}=l;t.searchPseudoElements&&r1(s)}}},z1=!1,s0={mixout(){return{dom:{unwatch(){V1(),z1=!0}}}},hooks(){return{bootstrap(){e1(b2("mutationObserverCallbacks",{}))},noAuto(){R4()},watch(c){let{observeMutationsRoot:l}=c;z1?y2():e1(b2("mutationObserverCallbacks",{observeMutationsRoot:l}))}}}},L1=c=>{let l={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return c.toLowerCase().split(" ").reduce((s,a)=>{let e=a.toLowerCase().split("-"),n=e[0],o=e.slice(1).join("-");if(n&&o==="h")return s.flipX=!0,s;if(n&&o==="v")return s.flipY=!0,s;if(o=parseFloat(o),isNaN(o))return s;switch(n){case"grow":s.size=s.size+o;break;case"shrink":s.size=s.size-o;break;case"left":s.x=s.x-o;break;case"right":s.x=s.x+o;break;case"up":s.y=s.y-o;break;case"down":s.y=s.y+o;break;case"rotate":s.rotate=s.rotate+o;break}return s},l)},a0={mixout(){return{parse:{transform:c=>L1(c)}}},hooks(){return{parseNodeAttributes(c,l){let s=l.getAttribute("data-fa-transform");return s&&(c.transform=L1(s)),c}}},provides(c){c.generateAbstractTransformGrouping=function(l){let{main:s,transform:a,containerWidth:e,iconWidth:n}=l,o={transform:"translate(".concat(e/2," 256)")},f="translate(".concat(a.x*32,", ").concat(a.y*32,") "),z="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),r="rotate(".concat(a.rotate," 0 0)"),L={transform:"".concat(f," ").concat(z," ").concat(r)},M={transform:"translate(".concat(n/2*-1," -256)")},m={outer:o,inner:L,path:M};return{tag:"g",attributes:i({},m.outer),children:[{tag:"g",attributes:i({},m.inner),children:[{tag:s.icon.tag,children:s.icon.children,attributes:i(i({},s.icon.attributes),m.path)}]}]}}}},L2={x:0,y:0,width:"100%",height:"100%"};function m1(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return c.attributes&&(c.attributes.fill||l)&&(c.attributes.fill="black"),c}function e0(c){return c.tag==="g"?c.children:[c]}var n0={hooks(){return{parseNodeAttributes(c,l){let s=l.getAttribute("data-fa-mask"),a=s?n2(s.split(" ").map(e=>e.trim())):I1();return a.prefix||(a.prefix=T()),c.mask=a,c.maskId=l.getAttribute("data-fa-mask-id"),c}}},provides(c){c.generateAbstractMask=function(l){let{children:s,attributes:a,main:e,mask:n,maskId:o,transform:f}=l,{width:z,icon:r}=e,{width:L,icon:M}=n,m=$3({transform:f,containerWidth:L,iconWidth:z}),u={tag:"rect",attributes:i(i({},L2),{},{fill:"white"})},y=r.children?{children:r.children.map(m1)}:{},B={tag:"g",attributes:i({},m.inner),children:[m1(i({tag:r.tag,attributes:i(i({},r.attributes),m.path)},y))]},h={tag:"g",attributes:i({},m.outer),children:[B]},S="mask-".concat(o||j()),d="clip-".concat(o||j()),g={tag:"mask",attributes:i(i({},L2),{},{id:S,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[u,h]},H={tag:"defs",children:[{tag:"clipPath",attributes:{id:d},children:e0(M)},g]};return s.push(H,{tag:"rect",attributes:i({fill:"currentColor","clip-path":"url(#".concat(d,")"),mask:"url(#".concat(S,")")},L2)}),{children:s,attributes:a}}}},o0={provides(c){let l=!1;P.matchMedia&&(l=P.matchMedia("(prefers-reduced-motion: reduce)").matches),c.missingIconAbstract=function(){let s=[],a={fill:"currentColor"},e={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};s.push({tag:"path",attributes:i(i({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});let n=i(i({},e),{},{attributeName:"opacity"}),o={tag:"circle",attributes:i(i({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return l||o.children.push({tag:"animate",attributes:i(i({},e),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:i(i({},n),{},{values:"1;0;1;1;0;1;"})}),s.push(o),s.push({tag:"path",attributes:i(i({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:l?[]:[{tag:"animate",attributes:i(i({},n),{},{values:"1;0;0;0;0;1;"})}]}),l||s.push({tag:"path",attributes:i(i({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:i(i({},n),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:s}}}},i0={hooks(){return{parseNodeAttributes(c,l){let s=l.getAttribute("data-fa-symbol"),a=s===null?!1:s===""?!0:s;return c.symbol=a,c}}}},f0=[c4,V4,j4,Y4,X4,l0,s0,a0,n0,o0,i0];d4(f0,{mixoutsTo:x});var m0=x.noAuto,M0=x.config,Y1=x.library,X1=x.dom,p0=x.parse,C0=x.findIconDefinition,u0=x.toHtml,d0=x.icon,x0=x.layer,h0=x.text,g0=x.counter;var K1={prefix:"fas",iconName:"caret-right",icon:[256,512,[],"f0da","M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z"]};var Q1={prefix:"fas",iconName:"caret-left",icon:[256,512,[],"f0d9","M9.4 278.6c-12.5-12.5-12.5-32.8 0-45.3l128-128c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 256c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-128-128z"]};var t0={prefix:"fas",iconName:"circle-check",icon:[512,512,[61533,"check-circle"],"f058","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"]},$1=t0;var J1={prefix:"fas",iconName:"leaf",icon:[512,512,[],"f06c","M272 96c-78.6 0-145.1 51.5-167.7 122.5c33.6-17 71.5-26.5 111.7-26.5l88 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-16 0-72 0s0 0 0 0c-16.6 0-32.7 1.9-48.3 5.4c-25.9 5.9-49.9 16.4-71.4 30.7c0 0 0 0 0 0C38.3 298.8 0 364.9 0 440l0 16c0 13.3 10.7 24 24 24s24-10.7 24-24l0-16c0-48.7 20.7-92.5 53.8-123.2C121.6 392.3 190.3 448 272 448l1 0c132.1-.7 239-130.9 239-291.4c0-42.6-7.5-83.1-21.1-119.6c-2.6-6.9-12.7-6.6-16.2-.1C455.9 72.1 418.7 96 376 96L272 96z"]};var Z1={prefix:"fas",iconName:"arrow-right",icon:[448,512,[8594],"f061","M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"]};var c3={prefix:"fas",iconName:"wrench",icon:[512,512,[128295],"f0ad","M352 320c88.4 0 160-71.6 160-160c0-15.3-2.2-30.1-6.2-44.2c-3.1-10.8-16.4-13.2-24.3-5.3l-76.8 76.8c-3 3-7.1 4.7-11.3 4.7L336 192c-8.8 0-16-7.2-16-16l0-57.4c0-4.2 1.7-8.3 4.7-11.3l76.8-76.8c7.9-7.9 5.4-21.2-5.3-24.3C382.1 2.2 367.3 0 352 0C263.6 0 192 71.6 192 160c0 19.1 3.4 37.5 9.5 54.5L19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L297.5 310.5c17 6.2 35.4 9.5 54.5 9.5zM80 408a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"]};var l3={prefix:"fas",iconName:"phone",icon:[512,512,[128222,128379],"f095","M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"]};var s3={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"]};var a3={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]};var e3={prefix:"fas",iconName:"check",icon:[448,512,[10003,10004],"f00c","M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"]};var n3={prefix:"fas",iconName:"triangle-exclamation",icon:[512,512,[9888,"exclamation-triangle","warning"],"f071","M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480L40 480c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"]};var o3={prefix:"fas",iconName:"paper-plane",icon:[512,512,[61913],"f1d8","M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480l0-83.6c0-4 1.5-7.8 4.2-10.8L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"]};Y1.add(o3,l3,s3,e3,Z1,$1,n3,a3,c3,J1,Q1,K1);X1.watch();})();
/*! Bundled license information:

@fortawesome/fontawesome-svg-core/index.mjs:
@fortawesome/free-solid-svg-icons/index.mjs:
  (*!
   * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
   * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
   * Copyright 2024 Fonticons, Inc.
   *)
*/
