(()=>{function d3(c,l,s){return(l=h3(l))in c?Object.defineProperty(c,l,{value:s,enumerable:!0,configurable:!0,writable:!0}):c[l]=s,c}function K2(c,l){var s=Object.keys(c);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(c);l&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(c,e).enumerable})),s.push.apply(s,a)}return s}function t(c){for(var l=1;l<arguments.length;l++){var s=arguments[l]!=null?arguments[l]:{};l%2?K2(Object(s),!0).forEach(function(a){d3(c,a,s[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(s)):K2(Object(s)).forEach(function(a){Object.defineProperty(c,a,Object.getOwnPropertyDescriptor(s,a))})}return c}function x3(c,l){if(typeof c!="object"||!c)return c;var s=c[Symbol.toPrimitive];if(s!==void 0){var a=s.call(c,l||"default");if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(l==="string"?String:Number)(c)}function h3(c){var l=x3(c,"string");return typeof l=="symbol"?l:l+""}var $2=()=>{},H2={},N1={},b1=null,S1={mark:$2,measure:$2};try{typeof window<"u"&&(H2=window),typeof document<"u"&&(N1=document),typeof MutationObserver<"u"&&(b1=MutationObserver),typeof performance<"u"&&(S1=performance)}catch{}var{userAgent:Q2=""}=H2.navigator||{},E=H2,u=N1,J2=b1,l2=S1,g0=!!E.document,v=!!u.documentElement&&!!u.head&&typeof u.addEventListener=="function"&&typeof u.createElement=="function",w1=~Q2.indexOf("MSIE")||~Q2.indexOf("Trident/"),g3=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,N3=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,k1={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},b3={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},y1=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],g="classic",i2="duotone",S3="sharp",w3="sharp-duotone",A1=[g,i2,S3,w3],k3={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},y3={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},A3=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),v3={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},P3=["fak","fa-kit","fakd","fa-kit-duotone"],Z2={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},T3=["kit"],F3={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},E3=["fak","fakd"],B3={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},c1={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},s2={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},D3=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],R3=["fak","fa-kit","fakd","fa-kit-duotone"],H3={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},I3={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},O3={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},h2={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},q3=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],g2=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...D3,...q3],U3=["solid","regular","light","thin","duotone","brands"],v1=[1,2,3,4,5,6,7,8,9,10],W3=v1.concat([11,12,13,14,15,16,17,18,19,20]),G3=[...Object.keys(O3),...U3,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",s2.GROUP,s2.SWAP_OPACITY,s2.PRIMARY,s2.SECONDARY].concat(v1.map(c=>"".concat(c,"x"))).concat(W3.map(c=>"w-".concat(c))),_3={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},y="___FONT_AWESOME___",N2=16,P1="fa",T1="svg-inline--fa",I="data-fa-i2svg",b2="data-fa-pseudo-element",V3="data-fa-pseudo-element-pending",I2="data-prefix",O2="data-icon",l1="fontawesome-i2svg",j3="async",X3=["HTML","HEAD","STYLE","SCRIPT"],F1=(()=>{try{return!0}catch{return!1}})();function Z(c){return new Proxy(c,{get(l,s){return s in l?l[s]:l[g]}})}var E1=t({},k1);E1[g]=t(t(t(t({},{"fa-duotone":"duotone"}),k1[g]),Z2.kit),Z2["kit-duotone"]);var Y3=Z(E1),S2=t({},v3);S2[g]=t(t(t(t({},{duotone:"fad"}),S2[g]),c1.kit),c1["kit-duotone"]);var s1=Z(S2),w2=t({},h2);w2[g]=t(t({},w2[g]),B3.kit);var q2=Z(w2),k2=t({},I3);k2[g]=t(t({},k2[g]),F3.kit);var N0=Z(k2),K3=g3,B1="fa-layers-text",$3=N3,Q3=t({},k3),b0=Z(Q3),J3=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],p2=b3,Z3=[...T3,...G3],K=E.FontAwesomeConfig||{};function c4(c){var l=u.querySelector("script["+c+"]");if(l)return l.getAttribute(c)}function l4(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}u&&typeof u.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(l=>{let[s,a]=l,e=l4(c4(s));e!=null&&(K[a]=e)});var D1={styleDefault:"solid",familyDefault:g,cssPrefix:P1,replacementClass:T1,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};K.familyPrefix&&(K.cssPrefix=K.familyPrefix);var _=t(t({},D1),K);_.autoReplaceSvg||(_.observeMutations=!1);var r={};Object.keys(D1).forEach(c=>{Object.defineProperty(r,c,{enumerable:!0,set:function(l){_[c]=l,$.forEach(s=>s(r))},get:function(){return _[c]}})});Object.defineProperty(r,"familyPrefix",{enumerable:!0,set:function(c){_.cssPrefix=c,$.forEach(l=>l(r))},get:function(){return _.cssPrefix}});E.FontAwesomeConfig=r;var $=[];function s4(c){return $.push(c),()=>{$.splice($.indexOf(c),1)}}var F=N2,w={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function a4(c){if(!c||!v)return;let l=u.createElement("style");l.setAttribute("type","text/css"),l.innerHTML=c;let s=u.head.childNodes,a=null;for(let e=s.length-1;e>-1;e--){let n=s[e],o=(n.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=n)}return u.head.insertBefore(l,a),c}var e4="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Q(){let c=12,l="";for(;c-- >0;)l+=e4[Math.random()*62|0];return l}function V(c){let l=[];for(let s=(c||[]).length>>>0;s--;)l[s]=c[s];return l}function U2(c){return c.classList?V(c.classList):(c.getAttribute("class")||"").split(" ").filter(l=>l)}function R1(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function n4(c){return Object.keys(c||{}).reduce((l,s)=>l+"".concat(s,'="').concat(R1(c[s]),'" '),"").trim()}function t2(c){return Object.keys(c||{}).reduce((l,s)=>l+"".concat(s,": ").concat(c[s].trim(),";"),"")}function W2(c){return c.size!==w.size||c.x!==w.x||c.y!==w.y||c.rotate!==w.rotate||c.flipX||c.flipY}function o4(c){let{transform:l,containerWidth:s,iconWidth:a}=c,e={transform:"translate(".concat(s/2," 256)")},n="translate(".concat(l.x*32,", ").concat(l.y*32,") "),o="scale(".concat(l.size/16*(l.flipX?-1:1),", ").concat(l.size/16*(l.flipY?-1:1),") "),i="rotate(".concat(l.rotate," 0 0)"),z={transform:"".concat(n," ").concat(o," ").concat(i)},f={transform:"translate(".concat(a/2*-1," -256)")};return{outer:e,inner:z,path:f}}function i4(c){let{transform:l,width:s=N2,height:a=N2,startCentered:e=!1}=c,n="";return e&&w1?n+="translate(".concat(l.x/F-s/2,"em, ").concat(l.y/F-a/2,"em) "):e?n+="translate(calc(-50% + ".concat(l.x/F,"em), calc(-50% + ").concat(l.y/F,"em)) "):n+="translate(".concat(l.x/F,"em, ").concat(l.y/F,"em) "),n+="scale(".concat(l.size/F*(l.flipX?-1:1),", ").concat(l.size/F*(l.flipY?-1:1),") "),n+="rotate(".concat(l.rotate,"deg) "),n}var t4=`:root, :host {
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
}`;function H1(){let c=P1,l=T1,s=r.cssPrefix,a=r.replacementClass,e=t4;if(s!==c||a!==l){let n=new RegExp("\\.".concat(c,"\\-"),"g"),o=new RegExp("\\--".concat(c,"\\-"),"g"),i=new RegExp("\\.".concat(l),"g");e=e.replace(n,".".concat(s,"-")).replace(o,"--".concat(s,"-")).replace(i,".".concat(a))}return e}var a1=!1;function C2(){r.autoAddCss&&!a1&&(a4(H1()),a1=!0)}var f4={mixout(){return{dom:{css:H1,insertCss:C2}}},hooks(){return{beforeDOMElementCreation(){C2()},beforeI2svg(){C2()}}}},A=E||{};A[y]||(A[y]={});A[y].styles||(A[y].styles={});A[y].hooks||(A[y].hooks={});A[y].shims||(A[y].shims=[]);var k=A[y],I1=[],O1=function(){u.removeEventListener("DOMContentLoaded",O1),n2=1,I1.map(c=>c())},n2=!1;v&&(n2=(u.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(u.readyState),n2||u.addEventListener("DOMContentLoaded",O1));function r4(c){v&&(n2?setTimeout(c,0):I1.push(c))}function c2(c){let{tag:l,attributes:s={},children:a=[]}=c;return typeof c=="string"?R1(c):"<".concat(l," ").concat(n4(s),">").concat(a.map(c2).join(""),"</").concat(l,">")}function e1(c,l,s){if(c&&c[l]&&c[l][s])return{prefix:l,iconName:s,icon:c[l][s]}}var z4=function(l,s){return function(a,e,n,o){return l.call(s,a,e,n,o)}},u2=function(l,s,a,e){var n=Object.keys(l),o=n.length,i=e!==void 0?z4(s,e):s,z,f,L;for(a===void 0?(z=1,L=l[n[0]]):(z=0,L=a);z<o;z++)f=n[z],L=i(L,l[f],f,l);return L};function L4(c){let l=[],s=0,a=c.length;for(;s<a;){let e=c.charCodeAt(s++);if(e>=55296&&e<=56319&&s<a){let n=c.charCodeAt(s++);(n&64512)==56320?l.push(((e&1023)<<10)+(n&1023)+65536):(l.push(e),s--)}else l.push(e)}return l}function y2(c){let l=L4(c);return l.length===1?l[0].toString(16):null}function m4(c,l){let s=c.length,a=c.charCodeAt(l),e;return a>=55296&&a<=56319&&s>l+1&&(e=c.charCodeAt(l+1),e>=56320&&e<=57343)?(a-55296)*1024+e-56320+65536:a}function n1(c){return Object.keys(c).reduce((l,s)=>{let a=c[s];return!!a.icon?l[a.iconName]=a.icon:l[s]=a,l},{})}function A2(c,l){let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},{skipHooks:a=!1}=s,e=n1(l);typeof k.hooks.addPack=="function"&&!a?k.hooks.addPack(c,n1(l)):k.styles[c]=t(t({},k.styles[c]||{}),e),c==="fas"&&A2("fa",l)}var{styles:J,shims:M4}=k,q1=Object.keys(q2),p4=q1.reduce((c,l)=>(c[l]=Object.keys(q2[l]),c),{}),G2=null,U1={},W1={},G1={},_1={},V1={};function C4(c){return~Z3.indexOf(c)}function u4(c,l){let s=l.split("-"),a=s[0],e=s.slice(1).join("-");return a===c&&e!==""&&!C4(e)?e:null}var j1=()=>{let c=a=>u2(J,(e,n,o)=>(e[o]=u2(n,a,{}),e),{});U1=c((a,e,n)=>(e[3]&&(a[e[3]]=n),e[2]&&e[2].filter(i=>typeof i=="number").forEach(i=>{a[i.toString(16)]=n}),a)),W1=c((a,e,n)=>(a[n]=n,e[2]&&e[2].filter(i=>typeof i=="string").forEach(i=>{a[i]=n}),a)),V1=c((a,e,n)=>{let o=e[2];return a[n]=n,o.forEach(i=>{a[i]=n}),a});let l="far"in J||r.autoFetchSvg,s=u2(M4,(a,e)=>{let n=e[0],o=e[1],i=e[2];return o==="far"&&!l&&(o="fas"),typeof n=="string"&&(a.names[n]={prefix:o,iconName:i}),typeof n=="number"&&(a.unicodes[n.toString(16)]={prefix:o,iconName:i}),a},{names:{},unicodes:{}});G1=s.names,_1=s.unicodes,G2=f2(r.styleDefault,{family:r.familyDefault})};s4(c=>{G2=f2(c.styleDefault,{family:r.familyDefault})});j1();function _2(c,l){return(U1[c]||{})[l]}function d4(c,l){return(W1[c]||{})[l]}function H(c,l){return(V1[c]||{})[l]}function X1(c){return G1[c]||{prefix:null,iconName:null}}function x4(c){let l=_1[c],s=_2("fas",c);return l||(s?{prefix:"fas",iconName:s}:null)||{prefix:null,iconName:null}}function B(){return G2}var Y1=()=>({prefix:null,iconName:null,rest:[]});function h4(c){let l=g,s=q1.reduce((a,e)=>(a[e]="".concat(r.cssPrefix,"-").concat(e),a),{});return A1.forEach(a=>{(c.includes(s[a])||c.some(e=>p4[a].includes(e)))&&(l=a)}),l}function f2(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{family:s=g}=l,a=Y3[s][c];if(s===i2&&!c)return"fad";let e=s1[s][c]||s1[s][a],n=c in k.styles?c:null;return e||n||null}function g4(c){let l=[],s=null;return c.forEach(a=>{let e=u4(r.cssPrefix,a);e?s=e:a&&l.push(a)}),{iconName:s,rest:l}}function o1(c){return c.sort().filter((l,s,a)=>a.indexOf(l)===s)}function r2(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{skipLookups:s=!1}=l,a=null,e=g2.concat(R3),n=o1(c.filter(m=>e.includes(m))),o=o1(c.filter(m=>!g2.includes(m))),i=n.filter(m=>(a=m,!y1.includes(m))),[z=null]=i,f=h4(n),L=t(t({},g4(o)),{},{prefix:f2(z,{family:f})});return t(t(t({},L),w4({values:c,family:f,styles:J,config:r,canonical:L,givenPrefix:a})),N4(s,a,L))}function N4(c,l,s){let{prefix:a,iconName:e}=s;if(c||!a||!e)return{prefix:a,iconName:e};let n=l==="fa"?X1(e):{},o=H(a,e);return e=n.iconName||o||e,a=n.prefix||a,a==="far"&&!J.far&&J.fas&&!r.autoFetchSvg&&(a="fas"),{prefix:a,iconName:e}}var b4=A1.filter(c=>c!==g||c!==i2),S4=Object.keys(h2).filter(c=>c!==g).map(c=>Object.keys(h2[c])).flat();function w4(c){let{values:l,family:s,canonical:a,givenPrefix:e="",styles:n={},config:o={}}=c,i=s===i2,z=l.includes("fa-duotone")||l.includes("fad"),f=o.familyDefault==="duotone",L=a.prefix==="fad"||a.prefix==="fa-duotone";if(!i&&(z||f||L)&&(a.prefix="fad"),(l.includes("fa-brands")||l.includes("fab"))&&(a.prefix="fab"),!a.prefix&&b4.includes(s)&&(Object.keys(n).find(M=>S4.includes(M))||o.autoFetchSvg)){let M=A3.get(s).defaultShortPrefixId;a.prefix=M,a.iconName=H(a.prefix,a.iconName)||a.iconName}return(a.prefix==="fa"||e==="fa")&&(a.prefix=B()||"fas"),a}var v2=class{constructor(){this.definitions={}}add(){for(var l=arguments.length,s=new Array(l),a=0;a<l;a++)s[a]=arguments[a];let e=s.reduce(this._pullDefinitions,{});Object.keys(e).forEach(n=>{this.definitions[n]=t(t({},this.definitions[n]||{}),e[n]),A2(n,e[n]);let o=q2[g][n];o&&A2(o,e[n]),j1()})}reset(){this.definitions={}}_pullDefinitions(l,s){let a=s.prefix&&s.iconName&&s.icon?{0:s}:s;return Object.keys(a).map(e=>{let{prefix:n,iconName:o,icon:i}=a[e],z=i[2];l[n]||(l[n]={}),z.length>0&&z.forEach(f=>{typeof f=="string"&&(l[n][f]=i)}),l[n][o]=i}),l}},i1=[],W={},G={},k4=Object.keys(G);function y4(c,l){let{mixoutsTo:s}=l;return i1=c,W={},Object.keys(G).forEach(a=>{k4.indexOf(a)===-1&&delete G[a]}),i1.forEach(a=>{let e=a.mixout?a.mixout():{};if(Object.keys(e).forEach(n=>{typeof e[n]=="function"&&(s[n]=e[n]),typeof e[n]=="object"&&Object.keys(e[n]).forEach(o=>{s[n]||(s[n]={}),s[n][o]=e[n][o]})}),a.hooks){let n=a.hooks();Object.keys(n).forEach(o=>{W[o]||(W[o]=[]),W[o].push(n[o])})}a.provides&&a.provides(G)}),s}function P2(c,l){for(var s=arguments.length,a=new Array(s>2?s-2:0),e=2;e<s;e++)a[e-2]=arguments[e];return(W[c]||[]).forEach(o=>{l=o.apply(null,[l,...a])}),l}function O(c){for(var l=arguments.length,s=new Array(l>1?l-1:0),a=1;a<l;a++)s[a-1]=arguments[a];(W[c]||[]).forEach(n=>{n.apply(null,s)})}function D(){let c=arguments[0],l=Array.prototype.slice.call(arguments,1);return G[c]?G[c].apply(null,l):void 0}function T2(c){c.prefix==="fa"&&(c.prefix="fas");let{iconName:l}=c,s=c.prefix||B();if(l)return l=H(s,l)||l,e1(K1.definitions,s,l)||e1(k.styles,s,l)}var K1=new v2,A4=()=>{r.autoReplaceSvg=!1,r.observeMutations=!1,O("noAuto")},v4={i2svg:function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return v?(O("beforeI2svg",c),D("pseudoElements2svg",c),D("i2svg",c)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:l}=c;r.autoReplaceSvg===!1&&(r.autoReplaceSvg=!0),r.observeMutations=!0,r4(()=>{T4({autoReplaceSvgRoot:l}),O("watch",c)})}},P4={icon:c=>{if(c===null)return null;if(typeof c=="object"&&c.prefix&&c.iconName)return{prefix:c.prefix,iconName:H(c.prefix,c.iconName)||c.iconName};if(Array.isArray(c)&&c.length===2){let l=c[1].indexOf("fa-")===0?c[1].slice(3):c[1],s=f2(c[0]);return{prefix:s,iconName:H(s,l)||l}}if(typeof c=="string"&&(c.indexOf("".concat(r.cssPrefix,"-"))>-1||c.match(K3))){let l=r2(c.split(" "),{skipLookups:!0});return{prefix:l.prefix||B(),iconName:H(l.prefix,l.iconName)||l.iconName}}if(typeof c=="string"){let l=B();return{prefix:l,iconName:H(l,c)||c}}}},b={noAuto:A4,config:r,dom:v4,parse:P4,library:K1,findIconDefinition:T2,toHtml:c2},T4=function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:l=u}=c;(Object.keys(k.styles).length>0||r.autoFetchSvg)&&v&&r.autoReplaceSvg&&b.dom.i2svg({node:l})};function z2(c,l){return Object.defineProperty(c,"abstract",{get:l}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(s=>c2(s))}}),Object.defineProperty(c,"node",{get:function(){if(!v)return;let s=u.createElement("div");return s.innerHTML=c.html,s.children}}),c}function F4(c){let{children:l,main:s,mask:a,attributes:e,styles:n,transform:o}=c;if(W2(o)&&s.found&&!a.found){let{width:i,height:z}=s,f={x:i/z/2,y:.5};e.style=t2(t(t({},n),{},{"transform-origin":"".concat(f.x+o.x/16,"em ").concat(f.y+o.y/16,"em")}))}return[{tag:"svg",attributes:e,children:l}]}function E4(c){let{prefix:l,iconName:s,children:a,attributes:e,symbol:n}=c,o=n===!0?"".concat(l,"-").concat(r.cssPrefix,"-").concat(s):n;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:t(t({},e),{},{id:o}),children:a}]}]}function V2(c){let{icons:{main:l,mask:s},prefix:a,iconName:e,transform:n,symbol:o,title:i,maskId:z,titleId:f,extra:L,watchable:m=!1}=c,{width:M,height:d}=s.found?s:l,h=E3.includes(a),N=[r.replacementClass,e?"".concat(r.cssPrefix,"-").concat(e):""].filter(U=>L.classes.indexOf(U)===-1).filter(U=>U!==""||!!U).concat(L.classes).join(" "),C={children:[],attributes:t(t({},L.attributes),{},{"data-prefix":a,"data-icon":e,class:N,role:L.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(M," ").concat(d)})},x=h&&!~L.classes.indexOf("fa-fw")?{width:"".concat(M/d*16*.0625,"em")}:{};m&&(C.attributes[I]=""),i&&(C.children.push({tag:"title",attributes:{id:C.attributes["aria-labelledby"]||"title-".concat(f||Q())},children:[i]}),delete C.attributes.title);let p=t(t({},C),{},{prefix:a,iconName:e,main:l,mask:s,maskId:z,transform:n,symbol:o,styles:t(t({},x),L.styles)}),{children:S,attributes:q}=s.found&&l.found?D("generateAbstractMask",p)||{children:[],attributes:{}}:D("generateAbstractIcon",p)||{children:[],attributes:{}};return p.children=S,p.attributes=q,o?E4(p):F4(p)}function t1(c){let{content:l,width:s,height:a,transform:e,title:n,extra:o,watchable:i=!1}=c,z=t(t(t({},o.attributes),n?{title:n}:{}),{},{class:o.classes.join(" ")});i&&(z[I]="");let f=t({},o.styles);W2(e)&&(f.transform=i4({transform:e,startCentered:!0,width:s,height:a}),f["-webkit-transform"]=f.transform);let L=t2(f);L.length>0&&(z.style=L);let m=[];return m.push({tag:"span",attributes:z,children:[l]}),n&&m.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),m}function B4(c){let{content:l,title:s,extra:a}=c,e=t(t(t({},a.attributes),s?{title:s}:{}),{},{class:a.classes.join(" ")}),n=t2(a.styles);n.length>0&&(e.style=n);let o=[];return o.push({tag:"span",attributes:e,children:[l]}),s&&o.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),o}var{styles:d2}=k;function F2(c){let l=c[0],s=c[1],[a]=c.slice(4),e=null;return Array.isArray(a)?e={tag:"g",attributes:{class:"".concat(r.cssPrefix,"-").concat(p2.GROUP)},children:[{tag:"path",attributes:{class:"".concat(r.cssPrefix,"-").concat(p2.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(r.cssPrefix,"-").concat(p2.PRIMARY),fill:"currentColor",d:a[1]}}]}:e={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:l,height:s,icon:e}}var D4={found:!1,width:512,height:512};function R4(c,l){!F1&&!r.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(l,'" is missing.'))}function E2(c,l){let s=l;return l==="fa"&&r.styleDefault!==null&&(l=B()),new Promise((a,e)=>{if(s==="fa"){let n=X1(c)||{};c=n.iconName||c,l=n.prefix||l}if(c&&l&&d2[l]&&d2[l][c]){let n=d2[l][c];return a(F2(n))}R4(c,l),a(t(t({},D4),{},{icon:r.showMissingIcons&&c?D("missingIconAbstract")||{}:{}}))})}var f1=()=>{},B2=r.measurePerformance&&l2&&l2.mark&&l2.measure?l2:{mark:f1,measure:f1},Y='FA "6.7.2"',H4=c=>(B2.mark("".concat(Y," ").concat(c," begins")),()=>$1(c)),$1=c=>{B2.mark("".concat(Y," ").concat(c," ends")),B2.measure("".concat(Y," ").concat(c),"".concat(Y," ").concat(c," begins"),"".concat(Y," ").concat(c," ends"))},j2={begin:H4,end:$1},a2=()=>{};function r1(c){return typeof(c.getAttribute?c.getAttribute(I):null)=="string"}function I4(c){let l=c.getAttribute?c.getAttribute(I2):null,s=c.getAttribute?c.getAttribute(O2):null;return l&&s}function O4(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(r.replacementClass)}function q4(){return r.autoReplaceSvg===!0?e2.replace:e2[r.autoReplaceSvg]||e2.replace}function U4(c){return u.createElementNS("http://www.w3.org/2000/svg",c)}function W4(c){return u.createElement(c)}function Q1(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{ceFn:s=c.tag==="svg"?U4:W4}=l;if(typeof c=="string")return u.createTextNode(c);let a=s(c.tag);return Object.keys(c.attributes||[]).forEach(function(n){a.setAttribute(n,c.attributes[n])}),(c.children||[]).forEach(function(n){a.appendChild(Q1(n,{ceFn:s}))}),a}function G4(c){let l=" ".concat(c.outerHTML," ");return l="".concat(l,"Font Awesome fontawesome.com "),l}var e2={replace:function(c){let l=c[0];if(l.parentNode)if(c[1].forEach(s=>{l.parentNode.insertBefore(Q1(s),l)}),l.getAttribute(I)===null&&r.keepOriginalSource){let s=u.createComment(G4(l));l.parentNode.replaceChild(s,l)}else l.remove()},nest:function(c){let l=c[0],s=c[1];if(~U2(l).indexOf(r.replacementClass))return e2.replace(c);let a=new RegExp("".concat(r.cssPrefix,"-.*"));if(delete s[0].attributes.id,s[0].attributes.class){let n=s[0].attributes.class.split(" ").reduce((o,i)=>(i===r.replacementClass||i.match(a)?o.toSvg.push(i):o.toNode.push(i),o),{toNode:[],toSvg:[]});s[0].attributes.class=n.toSvg.join(" "),n.toNode.length===0?l.removeAttribute("class"):l.setAttribute("class",n.toNode.join(" "))}let e=s.map(n=>c2(n)).join(`
`);l.setAttribute(I,""),l.innerHTML=e}};function z1(c){c()}function J1(c,l){let s=typeof l=="function"?l:a2;if(c.length===0)s();else{let a=z1;r.mutateApproach===j3&&(a=E.requestAnimationFrame||z1),a(()=>{let e=q4(),n=j2.begin("mutate");c.map(e),n(),s()})}}var X2=!1;function Z1(){X2=!0}function D2(){X2=!1}var o2=null;function L1(c){if(!J2||!r.observeMutations)return;let{treeCallback:l=a2,nodeCallback:s=a2,pseudoElementsCallback:a=a2,observeMutationsRoot:e=u}=c;o2=new J2(n=>{if(X2)return;let o=B();V(n).forEach(i=>{if(i.type==="childList"&&i.addedNodes.length>0&&!r1(i.addedNodes[0])&&(r.searchPseudoElements&&a(i.target),l(i.target)),i.type==="attributes"&&i.target.parentNode&&r.searchPseudoElements&&a(i.target.parentNode),i.type==="attributes"&&r1(i.target)&&~J3.indexOf(i.attributeName))if(i.attributeName==="class"&&I4(i.target)){let{prefix:z,iconName:f}=r2(U2(i.target));i.target.setAttribute(I2,z||o),f&&i.target.setAttribute(O2,f)}else O4(i.target)&&s(i.target)})}),v&&o2.observe(e,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function _4(){o2&&o2.disconnect()}function V4(c){let l=c.getAttribute("style"),s=[];return l&&(s=l.split(";").reduce((a,e)=>{let n=e.split(":"),o=n[0],i=n.slice(1);return o&&i.length>0&&(a[o]=i.join(":").trim()),a},{})),s}function j4(c){let l=c.getAttribute("data-prefix"),s=c.getAttribute("data-icon"),a=c.innerText!==void 0?c.innerText.trim():"",e=r2(U2(c));return e.prefix||(e.prefix=B()),l&&s&&(e.prefix=l,e.iconName=s),e.iconName&&e.prefix||(e.prefix&&a.length>0&&(e.iconName=d4(e.prefix,c.innerText)||_2(e.prefix,y2(c.innerText))),!e.iconName&&r.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(e.iconName=c.firstChild.data)),e}function X4(c){let l=V(c.attributes).reduce((e,n)=>(e.name!=="class"&&e.name!=="style"&&(e[n.name]=n.value),e),{}),s=c.getAttribute("title"),a=c.getAttribute("data-fa-title-id");return r.autoA11y&&(s?l["aria-labelledby"]="".concat(r.replacementClass,"-title-").concat(a||Q()):(l["aria-hidden"]="true",l.focusable="false")),l}function Y4(){return{iconName:null,title:null,titleId:null,prefix:null,transform:w,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function m1(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},{iconName:s,prefix:a,rest:e}=j4(c),n=X4(c),o=P2("parseNodeAttributes",{},c),i=l.styleParser?V4(c):[];return t({iconName:s,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:a,transform:w,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:e,styles:i,attributes:n}},o)}var{styles:K4}=k;function c3(c){let l=r.autoReplaceSvg==="nest"?m1(c,{styleParser:!1}):m1(c);return~l.extra.classes.indexOf(B1)?D("generateLayersText",c,l):D("generateSvgReplacementMutation",c,l)}function $4(){return[...P3,...g2]}function M1(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!v)return Promise.resolve();let s=u.documentElement.classList,a=L=>s.add("".concat(l1,"-").concat(L)),e=L=>s.remove("".concat(l1,"-").concat(L)),n=r.autoFetchSvg?$4():y1.concat(Object.keys(K4));n.includes("fa")||n.push("fa");let o=[".".concat(B1,":not([").concat(I,"])")].concat(n.map(L=>".".concat(L,":not([").concat(I,"])"))).join(", ");if(o.length===0)return Promise.resolve();let i=[];try{i=V(c.querySelectorAll(o))}catch{}if(i.length>0)a("pending"),e("complete");else return Promise.resolve();let z=j2.begin("onTree"),f=i.reduce((L,m)=>{try{let M=c3(m);M&&L.push(M)}catch(M){F1||M.name==="MissingIcon"&&console.error(M)}return L},[]);return new Promise((L,m)=>{Promise.all(f).then(M=>{J1(M,()=>{a("active"),a("complete"),e("pending"),typeof l=="function"&&l(),z(),L()})}).catch(M=>{z(),m(M)})})}function Q4(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;c3(c).then(s=>{s&&J1([s],l)})}function J4(c){return function(l){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(l||{}).icon?l:T2(l||{}),{mask:e}=s;return e&&(e=(e||{}).icon?e:T2(e||{})),c(a,t(t({},s),{},{mask:e}))}}var Z4=function(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:s=w,symbol:a=!1,mask:e=null,maskId:n=null,title:o=null,titleId:i=null,classes:z=[],attributes:f={},styles:L={}}=l;if(!c)return;let{prefix:m,iconName:M,icon:d}=c;return z2(t({type:"icon"},c),()=>(O("beforeDOMElementCreation",{iconDefinition:c,params:l}),r.autoA11y&&(o?f["aria-labelledby"]="".concat(r.replacementClass,"-title-").concat(i||Q()):(f["aria-hidden"]="true",f.focusable="false")),V2({icons:{main:F2(d),mask:e?F2(e.icon):{found:!1,width:null,height:null,icon:{}}},prefix:m,iconName:M,transform:t(t({},w),s),symbol:a,title:o,maskId:n,titleId:i,extra:{attributes:f,styles:L,classes:z}})))},c0={mixout(){return{icon:J4(Z4)}},hooks(){return{mutationObserverCallbacks(c){return c.treeCallback=M1,c.nodeCallback=Q4,c}}},provides(c){c.i2svg=function(l){let{node:s=u,callback:a=()=>{}}=l;return M1(s,a)},c.generateSvgReplacementMutation=function(l,s){let{iconName:a,title:e,titleId:n,prefix:o,transform:i,symbol:z,mask:f,maskId:L,extra:m}=s;return new Promise((M,d)=>{Promise.all([E2(a,o),f.iconName?E2(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(h=>{let[N,C]=h;M([l,V2({icons:{main:N,mask:C},prefix:o,iconName:a,transform:i,symbol:z,maskId:L,title:e,titleId:n,extra:m,watchable:!0})])}).catch(d)})},c.generateAbstractIcon=function(l){let{children:s,attributes:a,main:e,transform:n,styles:o}=l,i=t2(o);i.length>0&&(a.style=i);let z;return W2(n)&&(z=D("generateAbstractTransformGrouping",{main:e,transform:n,containerWidth:e.width,iconWidth:e.width})),s.push(z||e.icon),{children:s,attributes:a}}}},l0={mixout(){return{layer(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{classes:s=[]}=l;return z2({type:"layer"},()=>{O("beforeDOMElementCreation",{assembler:c,params:l});let a=[];return c(e=>{Array.isArray(e)?e.map(n=>{a=a.concat(n.abstract)}):a=a.concat(e.abstract)}),[{tag:"span",attributes:{class:["".concat(r.cssPrefix,"-layers"),...s].join(" ")},children:a}]})}}}},s0={mixout(){return{counter(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{title:s=null,classes:a=[],attributes:e={},styles:n={}}=l;return z2({type:"counter",content:c},()=>(O("beforeDOMElementCreation",{content:c,params:l}),B4({content:c.toString(),title:s,extra:{attributes:e,styles:n,classes:["".concat(r.cssPrefix,"-layers-counter"),...a]}})))}}}},a0={mixout(){return{text(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:s=w,title:a=null,classes:e=[],attributes:n={},styles:o={}}=l;return z2({type:"text",content:c},()=>(O("beforeDOMElementCreation",{content:c,params:l}),t1({content:c,transform:t(t({},w),s),title:a,extra:{attributes:n,styles:o,classes:["".concat(r.cssPrefix,"-layers-text"),...e]}})))}}},provides(c){c.generateLayersText=function(l,s){let{title:a,transform:e,extra:n}=s,o=null,i=null;if(w1){let z=parseInt(getComputedStyle(l).fontSize,10),f=l.getBoundingClientRect();o=f.width/z,i=f.height/z}return r.autoA11y&&!a&&(n.attributes["aria-hidden"]="true"),Promise.resolve([l,t1({content:l.innerHTML,width:o,height:i,transform:e,title:a,extra:n,watchable:!0})])}}},e0=new RegExp('"',"ug"),p1=[1105920,1112319],C1=t(t(t(t({},{FontAwesome:{normal:"fas",400:"fas"}}),y3),_3),H3),R2=Object.keys(C1).reduce((c,l)=>(c[l.toLowerCase()]=C1[l],c),{}),n0=Object.keys(R2).reduce((c,l)=>{let s=R2[l];return c[l]=s[900]||[...Object.entries(s)][0][1],c},{});function o0(c){let l=c.replace(e0,""),s=m4(l,0),a=s>=p1[0]&&s<=p1[1],e=l.length===2?l[0]===l[1]:!1;return{value:y2(e?l[0]:l),isSecondary:a||e}}function i0(c,l){let s=c.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(l),e=isNaN(a)?"normal":a;return(R2[s]||{})[e]||n0[s]}function u1(c,l){let s="".concat(V3).concat(l.replace(":","-"));return new Promise((a,e)=>{if(c.getAttribute(s)!==null)return a();let o=V(c.children).filter(M=>M.getAttribute(b2)===l)[0],i=E.getComputedStyle(c,l),z=i.getPropertyValue("font-family"),f=z.match($3),L=i.getPropertyValue("font-weight"),m=i.getPropertyValue("content");if(o&&!f)return c.removeChild(o),a();if(f&&m!=="none"&&m!==""){let M=i.getPropertyValue("content"),d=i0(z,L),{value:h,isSecondary:N}=o0(M),C=f[0].startsWith("FontAwesome"),x=_2(d,h),p=x;if(C){let S=x4(h);S.iconName&&S.prefix&&(x=S.iconName,d=S.prefix)}if(x&&!N&&(!o||o.getAttribute(I2)!==d||o.getAttribute(O2)!==p)){c.setAttribute(s,p),o&&c.removeChild(o);let S=Y4(),{extra:q}=S;q.attributes[b2]=l,E2(x,d).then(U=>{let C3=V2(t(t({},S),{},{icons:{main:U,mask:Y1()},prefix:d,iconName:p,extra:q,watchable:!0})),M2=u.createElementNS("http://www.w3.org/2000/svg","svg");l==="::before"?c.insertBefore(M2,c.firstChild):c.appendChild(M2),M2.outerHTML=C3.map(u3=>c2(u3)).join(`
`),c.removeAttribute(s),a()}).catch(e)}else a()}else a()})}function t0(c){return Promise.all([u1(c,"::before"),u1(c,"::after")])}function f0(c){return c.parentNode!==document.head&&!~X3.indexOf(c.tagName.toUpperCase())&&!c.getAttribute(b2)&&(!c.parentNode||c.parentNode.tagName!=="svg")}function d1(c){if(v)return new Promise((l,s)=>{let a=V(c.querySelectorAll("*")).filter(f0).map(t0),e=j2.begin("searchPseudoElements");Z1(),Promise.all(a).then(()=>{e(),D2(),l()}).catch(()=>{e(),D2(),s()})})}var r0={hooks(){return{mutationObserverCallbacks(c){return c.pseudoElementsCallback=d1,c}}},provides(c){c.pseudoElements2svg=function(l){let{node:s=u}=l;r.searchPseudoElements&&d1(s)}}},x1=!1,z0={mixout(){return{dom:{unwatch(){Z1(),x1=!0}}}},hooks(){return{bootstrap(){L1(P2("mutationObserverCallbacks",{}))},noAuto(){_4()},watch(c){let{observeMutationsRoot:l}=c;x1?D2():L1(P2("mutationObserverCallbacks",{observeMutationsRoot:l}))}}}},h1=c=>{let l={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return c.toLowerCase().split(" ").reduce((s,a)=>{let e=a.toLowerCase().split("-"),n=e[0],o=e.slice(1).join("-");if(n&&o==="h")return s.flipX=!0,s;if(n&&o==="v")return s.flipY=!0,s;if(o=parseFloat(o),isNaN(o))return s;switch(n){case"grow":s.size=s.size+o;break;case"shrink":s.size=s.size-o;break;case"left":s.x=s.x-o;break;case"right":s.x=s.x+o;break;case"up":s.y=s.y-o;break;case"down":s.y=s.y+o;break;case"rotate":s.rotate=s.rotate+o;break}return s},l)},L0={mixout(){return{parse:{transform:c=>h1(c)}}},hooks(){return{parseNodeAttributes(c,l){let s=l.getAttribute("data-fa-transform");return s&&(c.transform=h1(s)),c}}},provides(c){c.generateAbstractTransformGrouping=function(l){let{main:s,transform:a,containerWidth:e,iconWidth:n}=l,o={transform:"translate(".concat(e/2," 256)")},i="translate(".concat(a.x*32,", ").concat(a.y*32,") "),z="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),f="rotate(".concat(a.rotate," 0 0)"),L={transform:"".concat(i," ").concat(z," ").concat(f)},m={transform:"translate(".concat(n/2*-1," -256)")},M={outer:o,inner:L,path:m};return{tag:"g",attributes:t({},M.outer),children:[{tag:"g",attributes:t({},M.inner),children:[{tag:s.icon.tag,children:s.icon.children,attributes:t(t({},s.icon.attributes),M.path)}]}]}}}},x2={x:0,y:0,width:"100%",height:"100%"};function g1(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return c.attributes&&(c.attributes.fill||l)&&(c.attributes.fill="black"),c}function m0(c){return c.tag==="g"?c.children:[c]}var M0={hooks(){return{parseNodeAttributes(c,l){let s=l.getAttribute("data-fa-mask"),a=s?r2(s.split(" ").map(e=>e.trim())):Y1();return a.prefix||(a.prefix=B()),c.mask=a,c.maskId=l.getAttribute("data-fa-mask-id"),c}}},provides(c){c.generateAbstractMask=function(l){let{children:s,attributes:a,main:e,mask:n,maskId:o,transform:i}=l,{width:z,icon:f}=e,{width:L,icon:m}=n,M=o4({transform:i,containerWidth:L,iconWidth:z}),d={tag:"rect",attributes:t(t({},x2),{},{fill:"white"})},h=f.children?{children:f.children.map(g1)}:{},N={tag:"g",attributes:t({},M.inner),children:[g1(t({tag:f.tag,attributes:t(t({},f.attributes),M.path)},h))]},C={tag:"g",attributes:t({},M.outer),children:[N]},x="mask-".concat(o||Q()),p="clip-".concat(o||Q()),S={tag:"mask",attributes:t(t({},x2),{},{id:x,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[d,C]},q={tag:"defs",children:[{tag:"clipPath",attributes:{id:p},children:m0(m)},S]};return s.push(q,{tag:"rect",attributes:t({fill:"currentColor","clip-path":"url(#".concat(p,")"),mask:"url(#".concat(x,")")},x2)}),{children:s,attributes:a}}}},p0={provides(c){let l=!1;E.matchMedia&&(l=E.matchMedia("(prefers-reduced-motion: reduce)").matches),c.missingIconAbstract=function(){let s=[],a={fill:"currentColor"},e={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};s.push({tag:"path",attributes:t(t({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});let n=t(t({},e),{},{attributeName:"opacity"}),o={tag:"circle",attributes:t(t({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return l||o.children.push({tag:"animate",attributes:t(t({},e),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:t(t({},n),{},{values:"1;0;1;1;0;1;"})}),s.push(o),s.push({tag:"path",attributes:t(t({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:l?[]:[{tag:"animate",attributes:t(t({},n),{},{values:"1;0;0;0;0;1;"})}]}),l||s.push({tag:"path",attributes:t(t({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:t(t({},n),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:s}}}},C0={hooks(){return{parseNodeAttributes(c,l){let s=l.getAttribute("data-fa-symbol"),a=s===null?!1:s===""?!0:s;return c.symbol=a,c}}}},u0=[f4,c0,l0,s0,a0,r0,z0,L0,M0,p0,C0];y4(u0,{mixoutsTo:b});var S0=b.noAuto,w0=b.config,l3=b.library,s3=b.dom,k0=b.parse,y0=b.findIconDefinition,A0=b.toHtml,v0=b.icon,P0=b.layer,T0=b.text,F0=b.counter;var a3={prefix:"fas",iconName:"caret-right",icon:[256,512,[],"f0da","M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z"]};var e3={prefix:"fas",iconName:"caret-left",icon:[256,512,[],"f0d9","M9.4 278.6c-12.5-12.5-12.5-32.8 0-45.3l128-128c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 256c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-128-128z"]};var d0={prefix:"fas",iconName:"circle-check",icon:[512,512,[61533,"check-circle"],"f058","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"]},n3=d0;var o3={prefix:"fas",iconName:"leaf",icon:[512,512,[],"f06c","M272 96c-78.6 0-145.1 51.5-167.7 122.5c33.6-17 71.5-26.5 111.7-26.5l88 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-16 0-72 0s0 0 0 0c-16.6 0-32.7 1.9-48.3 5.4c-25.9 5.9-49.9 16.4-71.4 30.7c0 0 0 0 0 0C38.3 298.8 0 364.9 0 440l0 16c0 13.3 10.7 24 24 24s24-10.7 24-24l0-16c0-48.7 20.7-92.5 53.8-123.2C121.6 392.3 190.3 448 272 448l1 0c132.1-.7 239-130.9 239-291.4c0-42.6-7.5-83.1-21.1-119.6c-2.6-6.9-12.7-6.6-16.2-.1C455.9 72.1 418.7 96 376 96L272 96z"]};var i3={prefix:"fas",iconName:"arrow-right",icon:[448,512,[8594],"f061","M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"]};var t3={prefix:"fas",iconName:"wrench",icon:[512,512,[128295],"f0ad","M352 320c88.4 0 160-71.6 160-160c0-15.3-2.2-30.1-6.2-44.2c-3.1-10.8-16.4-13.2-24.3-5.3l-76.8 76.8c-3 3-7.1 4.7-11.3 4.7L336 192c-8.8 0-16-7.2-16-16l0-57.4c0-4.2 1.7-8.3 4.7-11.3l76.8-76.8c7.9-7.9 5.4-21.2-5.3-24.3C382.1 2.2 367.3 0 352 0C263.6 0 192 71.6 192 160c0 19.1 3.4 37.5 9.5 54.5L19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L297.5 310.5c17 6.2 35.4 9.5 54.5 9.5zM80 408a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"]};var f3={prefix:"fas",iconName:"phone",icon:[512,512,[128222,128379],"f095","M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"]};var r3={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"]};var z3={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]};var L3={prefix:"fas",iconName:"check",icon:[448,512,[10003,10004],"f00c","M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"]};var m3={prefix:"fas",iconName:"triangle-exclamation",icon:[512,512,[9888,"exclamation-triangle","warning"],"f071","M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480L40 480c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"]};var M3={prefix:"fas",iconName:"paper-plane",icon:[512,512,[61913],"f1d8","M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480l0-83.6c0-4 1.5-7.8 4.2-10.8L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"]};l3.add(M3,f3,r3,L3,i3,n3,m3,z3,t3,o3,e3,a3);s3.watch();var L2=document.getElementById("navToggle"),P=document.getElementById("navMenu");L2.addEventListener("click",()=>{let c=L2.getAttribute("aria-expanded")==="true";L2.setAttribute("aria-expanded",String(!c)),c?(P.classList.remove("opacity-100","scale-100"),P.classList.add("opacity-0","scale-95"),setTimeout(()=>{P.classList.add("hidden")},300)):(P.classList.remove("hidden"),requestAnimationFrame(()=>{P.classList.remove("opacity-0","scale-95"),P.classList.add("opacity-100","scale-100")}))});document.querySelectorAll("#navMenu a").forEach(c=>{c.addEventListener("click",()=>{window.innerWidth<768&&(L2.setAttribute("aria-expanded","false"),P.classList.remove("opacity-100","scale-100"),P.classList.add("opacity-0","scale-95"),setTimeout(()=>{P.classList.add("hidden")},300))})});document.addEventListener("DOMContentLoaded",function(){let c=document.querySelectorAll("section[id]"),l=document.querySelectorAll("#navMenu a");function s(){let a="";c.forEach(e=>{let n=e.offsetTop-150;window.scrollY>=n&&(a=e.getAttribute("id"))}),l.forEach(e=>{e.getAttribute("href").replace("/#","")===a?e.setAttribute("aria-current","page"):e.removeAttribute("aria-current")})}window.addEventListener("scroll",s),s()});var T=document.getElementById("toast"),x0=document.getElementById("toast-message");function j(c,l="success"){x0.textContent=c,T.classList.remove("bg-green-500","bg-red-500"),T.classList.add(l==="success"?"bg-green-500":"bg-red-500"),T.classList.add(l==="success"?"text-black":"text-white"),T.classList.remove("hidden"),requestAnimationFrame(()=>{T.classList.remove("translate-x-full","opacity-0"),T.classList.add("translate-x-0","opacity-100")}),setTimeout(()=>{T.classList.remove("translate-x-0","opacity-100"),T.classList.add("translate-x-full","opacity-0"),setTimeout(()=>{T.classList.add("hidden")},500)},4e3)}document.addEventListener("DOMContentLoaded",()=>{let c=document.getElementById("contactForm");c.addEventListener("submit",function(l){l.preventDefault();let s=document.getElementById("naam"),a=document.getElementById("email"),e=document.getElementById("dienst"),n=document.getElementById("onderwerp"),o=!0,i=(m,M,d)=>{let h=document.getElementById(M);h.classList.remove("hidden"),h.textContent=d,m.setAttribute("aria-invalid","true")},z=(m,M)=>{let d=document.getElementById(M);d.classList.add("hidden"),d.textContent="",m.setAttribute("aria-invalid","false")};if(s.value.trim()===""?(i(s,"error-naam","Naam is verplicht."),o=!1):z(s,"error-naam"),/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(a.value.trim())?z(a,"error-email"):(i(a,"error-email","Voer een geldig e-mailadres in."),o=!1),e.value?z(e,"error-dienst"):(i(e,"error-dienst","Selecteer een dienst."),o=!1),n.value.trim().length<5?(i(n,"error-onderwerp","Onderwerp moet minstens 5 tekens bevatten."),o=!1):z(n,"error-onderwerp"),!o){j("Controleer de invoervelden aub.","error");return}let L=new FormData(c);fetch(c.action,{method:"POST",body:L,headers:{Accept:"application/json"}}).then(m=>m.json()).then(m=>{if(m.success)c.reset(),c.querySelectorAll("[aria-invalid]").forEach(M=>M.setAttribute("aria-invalid","false")),j("Bedankt! Je aanvraag is verzonden.","success");else if(m.errors){for(let[M,d]of Object.entries(m.errors)){let h=document.getElementById(M),N=document.getElementById("error-"+M);h&&N&&(N.textContent=d,N.classList.remove("hidden"),h.setAttribute("aria-invalid","true"))}j("Er zijn enkele fouten. Controleer je invoer.","error")}else j("Onbekende fout. Probeer opnieuw.","error")}).catch(()=>{j("Verbindingsfout. Probeer het later opnieuw.","error")})})});var m2=[{url:"assets/img/dak_reiniging.webp?v=20250713",position:"center top"},{url:"assets/img/dak_herstelling.webp?v=20250713",position:"center center"}],p3=0,Y2=!0,R=document.getElementById("carousel-reiniging"),X=document.getElementById("carousel-herstelling");R.style.backgroundImage=`url('${m2[0].url}')`;R.style.backgroundPosition=m2[0].position;R.style.opacity=1;X.style.opacity=0;function h0(){let c=(p3+1)%m2.length,l=m2[c];Y2?(X.style.backgroundImage=`url('${l.url}')`,X.style.backgroundPosition=l.position,X.style.opacity=1,R.style.opacity=0):(R.style.backgroundImage=`url('${l.url}')`,R.style.backgroundPosition=l.position,R.style.opacity=1,X.style.opacity=0),Y2=!Y2,p3=c}[R,X].forEach(c=>{c.style.transition="opacity 1s ease-in-out",c.style.backgroundSize="cover",c.style.backgroundAttachment="fixed"});setInterval(h0,5e3);(function(){let c=document.getElementById("customSlider"),s=c.querySelectorAll(".slide").length;function a(){return window.innerWidth>=1024?3:window.innerWidth>=768?2:1}let e=0,n=a(),o=document.getElementById("pagination");function i(){o.innerHTML="";let C=Math.ceil(s/n);for(let x=0;x<C;x++){let p=document.createElement("button");p.classList.add("w-4","h-4","rounded-full","bg-blue-400","cursor-pointer","opacity-50","hover:opacity-80","transition-opacity"),x===0&&p.classList.add("opacity-100"),p.addEventListener("click",()=>{e=x*n,f(),z()}),o.appendChild(p)}}function z(){let C=o.children,x=Math.floor(e/n);for(let p=0;p<C.length;p++)C[p].classList.toggle("opacity-100",p===x),C[p].classList.toggle("opacity-50",p!==x)}function f(){e<0&&(e=s-n),e>s-n&&(e=0);let C=100/n,x=-(e*C);c.style.transform=`translateX(${x}%)`,z()}document.getElementById("prevSlide").addEventListener("click",()=>{e-=n,e<0&&(e=s-n),f()}),document.getElementById("nextSlide").addEventListener("click",()=>{e+=n,e>s-n&&(e=0),f()});let L=0,m=!1;c.addEventListener("touchstart",C=>{L=C.touches[0].clientX,m=!0,N()}),c.addEventListener("touchmove",C=>{if(!m)return;let p=C.touches[0].clientX-L;p>50?(e-=n,e<0&&(e=s-n),f(),m=!1):p<-50&&(e+=n,e>s-n&&(e=0),f(),m=!1)}),c.addEventListener("touchend",()=>{m=!1,h()}),window.addEventListener("resize",()=>{let C=n;n=a(),n!==C&&(e=0,i(),f())});let M=null,d=1e4;function h(){N(),M=setInterval(()=>{e+=n,e>s-n&&(e=0),f()},d)}function N(){clearInterval(M)}c.addEventListener("mouseenter",N),c.addEventListener("mouseleave",h),i(),f(),h()})();})();
/*! Bundled license information:

@fortawesome/fontawesome-svg-core/index.mjs:
@fortawesome/free-solid-svg-icons/index.mjs:
  (*!
   * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
   * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
   * Copyright 2024 Fonticons, Inc.
   *)
*/
