!function(e){var t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=1)}([function(e,t,r){},function(e,t,r){"use strict";r.r(t);const o=["r","p","s"],n=e=>"r"===e?"Rock":"p"===e?"Paper":"Scissors";var c=r.p+"images/rock.png",s=r.p+"images/paper.png",a=r.p+"images/scissors.png";const l=document.querySelector("#play-game .chosen-option .player-choice img"),u=document.querySelector("#play-game .chosen-option .computer-choice img"),i=document.querySelector("#play-game .play-round p"),p=(e,t=(()=>{const e=Math.floor(Math.random()*o.length);return o[e]})())=>{console.log(n(e),n(t));const r="r"===e?c:"p"===e?s:a;l.src=r;const p="r"===t?c:"p"===t?s:a;switch(u.src=p,e+t){case"rs":case"pr":case"sp":return i.textContent=`You Win!, ${n(e)} beats ${n(t)}`,"W";case"rp":case"ps":case"sr":return i.textContent=`You Lose!, ${n(e)} loses to ${n(t)}`,"L";default:return i.textContent="Draw!, You both picked "+n(e),"D"}},d=document.getElementById("play-game"),y=d.querySelector(".playing"),m=y.querySelector("h2 .show-game-limit"),g=y.querySelector("p .show-winning-score"),f=document.querySelector("#play-game .choices"),S=f.querySelectorAll("div"),h=document.querySelector("#play-game .score-board"),q=h.querySelector(".player-score p"),b=h.querySelector(".computer-score p"),v=document.querySelector("#play-game .round-number"),x=v.querySelector("p span"),L=document.querySelector("#play-game .play-round"),C=(L.querySelector("p"),document.querySelector("#play-game .chosen-option")),O=document.querySelector("#play-game .final-result"),j=O.querySelector("h3 span"),w=O.querySelector("p span");let M;let k,E,P=0,_=0,W=0,Y=!1;S.forEach(e=>{e.addEventListener("click",e=>{const t=p(e.target.id);var r;console.log({check:t}),"W"===t?(P++,k="You Win!"):"L"===t?(_++,k="You Lose!"):k="Draw",W++,x.textContent=W,q.textContent=P,b.textContent=_,P===M&&(E="WIN",Y=!0),_===M&&(E="LOSE",Y=!0),r=k,console.log({result:r}),Y&&((e,t)=>{f.classList.add("hide"),y.classList.add("hide"),L.classList.add("hide"),C.classList.add("hide"),v.classList.add("hide"),O.classList.remove("hide"),j.textContent=e,w.textContent=t})(E,W)})});r(0);const $=document.getElementById("start-game"),D=$.querySelector("div"),I=$.querySelector("input");D.addEventListener("click",()=>{const e=I.value;$.classList.add("hide"),((e=5)=>{e<1&&(e=5),d.classList.remove("hide"),m.textContent=e,M=Math.floor(e/2)+1,g.textContent=M})(e)})}]);