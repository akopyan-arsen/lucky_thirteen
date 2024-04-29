import{A as q,S as v,i as b,a as V,b as A}from"./assets/vendor-7071a5c4.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function r(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(o){if(o.ep)return;o.ep=!0;const n=r(o);fetch(o.href,n)}})();document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".menu"),t=document.querySelector(".ac-menu-panel"),r=document.querySelector(".burger-btn"),s=document.querySelector(".menu-btn"),o=document.querySelector(".mob-order-btn"),n=a=>{const m=a.getAttribute("href").substring(1),l=document.getElementById(m);if(l){const d=l.offsetTop-40;window.scrollTo({top:d,behavior:"smooth"})}};function i(){document.getElementById("myModal").classList.add("is-open")}function c(){document.getElementById("myModal").classList.remove("is-open")}r.addEventListener("click",function(){i()}),s.addEventListener("click",function(){c()}),o.addEventListener("click",function(){c()}),e.addEventListener("click",function(){t.classList.toggle("active")}),document.querySelectorAll(".ac-menu-text").forEach(function(a){a.addEventListener("click",function(){n(this),t.classList.remove("active")})}),document.querySelectorAll('a[href^="#"]').forEach(a=>{a.addEventListener("click",function(m){m.preventDefault();const l=this.getAttribute("href").substring(1),d=document.getElementById(l);if(d){const k=d.offsetTop-40;window.scrollTo({top:k,behavior:"smooth"})}})}),document.querySelectorAll(".menu-list").forEach(function(a){a.addEventListener("click",c)})});const p=(e,t={})=>{new q(e,t)},y=(e,t={})=>{new v(e,t)},P=()=>{p(".accordion-about-me .accordion-container",{openOnInit:[0]}),y(".about-me-swiper .swiper",{direction:"horizontal",loop:!0,slidesPerView:"auto",navigation:{nextEl:".about-me-swiper .button-next"},speed:600,spaceBetween:0,breakpoints:{320:{slidesPerView:2},768:{slidesPerView:3},1440:{slidesPerView:6}},keyboard:{enabled:!0,onlyInViewport:!1},slideActiveClass:"swiper-slide-active"})};P();const h=document.querySelectorAll(".cover-img-container"),B=document.querySelector(".cover-container");window.addEventListener("scroll",x);function x(){I(B)?h.forEach(e=>e.classList.add("animation-img")):h.forEach(e=>e.classList.remove("animation-img"))}function I(e){const t=e.getBoundingClientRect();return t.bottom>0&&t.right>0&&t.top<(window.innerHeight||document.documentElement.clientHeight)&&t.left<(window.innerWidth||document.documentElement.clientWidth)}function M(){y(".projects-swiper .swiper",{direction:"horizontal",slidesPerView:1,spaceBetween:25,navigation:{prevEl:".projects-swiper .swiper-button-prev",nextEl:".projects-swiper .swiper-button-next"},speed:600,keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},slideActiveClass:"swiper-slide-active"})}M();const j=()=>{p(".faq-accordion-first.accordion-container"),p(".faq-accordion-second.accordion-container")};j();new v(".section.reviews .swiper",{direction:"horizontal",speed:400,spaceBetween:16,slidesPerView:4,navigation:{nextEl:".right-arrow",prevEl:".left-arrow"},keyboard:{enabled:!0,onlyInViewport:!1},breakpoints:{320:{slidesPerView:1},768:{slidesPerView:2},1440:{slidesPerView:4}},allowTouchMove:!0});const f=document.querySelector(".section.reviews .swiper-wrapper"),w=document.querySelector(".section.reviews .no-content-warning"),u=document.querySelector(".section.reviews .nav");L();w.hidden=!0;let C=0,E;function O(e){if(e.length===0)w.hidden=!1,f.hidden=!0,u.disabled=!0;else{const r=e.map(({author:s,avatar_url:o,review:n})=>`
      <li class="swiper-slide" id="card">
        <img class="review-icon" src="${o}" />
        <h3 class="item-name">${s}</h3>
        <p class="item-comment">${n}</p>
      </li>
    `).join("");f.insertAdjacentHTML("beforeend",r)}}async function L(){try{const t=await(await fetch("https://portfolio-js.b.goit.study/api/reviews")).json();return E=t.length,t}catch(e){console.log(e)}}L().then(e=>{O(e),T()}).catch(e=>{console.log(e),b.error({title:"Opps",message:"No content found",position:"topLeft"}),w.hidden=!1,f.hidden=!0,u.disabled=!0});function T(){C===E-1?u.classList.add("disabled"):u.classList.remove("disabled")}const $="https://portfolio-js.b.goit.study/api";let g={email:"test@gmail.com",comment:"User's comment"};async function D(e,t={}){return await V.post(e,t)}function z(e){g.email=e}function N(e){g.comment=e}const S=document.querySelector(".feedback-form");S.addEventListener("submit",F);async function F(e){e.preventDefault();const t=e.target.elements.email.value,r=e.target.elements.comments.value;N(r),z(t);try{const{data:{message:s,title:o}}=await D(`${$}/requests`,g);A.create(`<div class="backdrop">
      <div class="modal">
      <button class="modal-btn" type="button" aria-label="Modal close button">
          <svg class="modal-icon-x" width="22px" height="22">
            <use href="./img/icons.svg#icon-x"></use>
          </svg>
        </button>

      <h3 class="modal-title">${o}</h1>
      <p class="modal-desc">${s}</p>
      </div>
      </div>`,{onShow:i=>{i.element().querySelector(".modal-btn").onclick=i.close,i.element().addEventListener("click",function(c){c.target.classList.contains("backdrop")&&i.close()}),window.addEventListener("keydown",function(c){c.key==="Escape"&&i.close()})}}).show(),S.reset()}catch{b.show({message:"Please ented a valid data!",color:"orange",position:"topRight"})}finally{}}
//# sourceMappingURL=commonHelpers.js.map
