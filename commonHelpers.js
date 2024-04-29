import{A as q,S as v,i as y,a as k,b as A}from"./assets/vendor-7071a5c4.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function c(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(o){if(o.ep)return;o.ep=!0;const n=c(o);fetch(o.href,n)}})();document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".menu"),t=document.querySelector(".ac-menu-panel"),c=document.querySelector(".burger-btn"),s=document.querySelector(".menu-btn"),o=r=>{const m=r.getAttribute("href").substring(1),l=document.getElementById(m);if(l){const d=l.offsetTop-40;window.scrollTo({top:d,behavior:"smooth"})}};function n(){document.getElementById("myModal").classList.add("is-open")}function i(){document.getElementById("myModal").classList.remove("is-open")}c.addEventListener("click",function(){n()}),s.addEventListener("click",function(){i()}),e.addEventListener("click",function(){t.classList.toggle("active")}),document.querySelectorAll(".ac-menu-text").forEach(function(r){r.addEventListener("click",function(){o(this),t.classList.remove("active")})}),document.querySelectorAll('a[href^="#"]').forEach(r=>{r.addEventListener("click",function(m){m.preventDefault();const l=this.getAttribute("href").substring(1),d=document.getElementById(l);if(d){const S=d.offsetTop-40;window.scrollTo({top:S,behavior:"smooth"})}})})});const M=document.querySelectorAll(".menu-list");function B(){document.getElementById("myModal").classList.remove("is-open")}M.forEach(function(e){e.addEventListener("click",B)});window.onclick=function(e){const t=document.getElementById("myModal");e.target===t&&document.getElementById("myModal").classList.remove("is-open")};const f=(e,t={})=>{new q(e,t)},V=(e,t={})=>{new v(e,t)},I=()=>{f(".accordion-about-me .accordion-container",{openOnInit:[0]}),V(".about-me-swiper .swiper",{direction:"horizontal",loop:!0,slidesPerView:"auto",navigation:{nextEl:".about-me-swiper .button-next"},speed:600,spaceBetween:0,breakpoints:{320:{slidesPerView:2},768:{slidesPerView:3},1440:{slidesPerView:6}},keyboard:{enabled:!0,onlyInViewport:!1},slideActiveClass:"swiper-slide-active"})};I();const w=document.querySelectorAll(".cover-img-container"),P=document.querySelector(".cover-container");window.addEventListener("scroll",x);function x(){C(P)?w.forEach(e=>e.classList.add("animation-img")):w.forEach(e=>e.classList.remove("animation-img"))}function C(e){const t=e.getBoundingClientRect();return t.bottom>0&&t.right>0&&t.top<(window.innerHeight||document.documentElement.clientHeight)&&t.left<(window.innerWidth||document.documentElement.clientWidth)}const O=()=>{f(".faq-accordion-first.accordion-container"),f(".faq-accordion-second.accordion-container")};O();new v(".section.reviews .swiper",{direction:"horizontal",speed:400,spaceBetween:16,slidesPerView:4,navigation:{nextEl:".right-arrow",prevEl:".left-arrow"},keyboard:{enabled:!0,onlyInViewport:!1},breakpoints:{320:{slidesPerView:1},768:{slidesPerView:2},1440:{slidesPerView:4}},allowTouchMove:!0,slideActiveClass:!1});const p=document.querySelector(".section.reviews .swiper-wrapper"),g=document.querySelector(".section.reviews .no-content-warning"),u=document.querySelector(".section.reviews .nav");E();g.hidden=!0;let T=0,b;function $(e){if(e.length===0)g.hidden=!1,p.hidden=!0,u.disabled=!0;else{const c=e.map(({author:s,avatar_url:o,review:n})=>`
      <li class="swiper-slide" id="card">
        <img class="review-icon" src="${o}" />
        <h3 class="item-name">${s}</h3>
        <p class="item-comment">${n}</p>
      </li>
    `).join("");p.insertAdjacentHTML("beforeend",c)}}async function E(){try{const t=await(await fetch("https://portfolio-js.b.goit.study/api/reviews")).json();return b=t.length,t}catch(e){console.log(e)}}E().then(e=>{$(e),j()}).catch(e=>{console.log(e),y.error({title:"Opps",message:"No content found",position:"topLeft"}),g.hidden=!1,p.hidden=!0,u.disabled=!0});function j(){T===b-1?u.classList.add("disabled"):u.classList.remove("disabled")}const D="https://portfolio-js.b.goit.study/api";let h={email:"test@gmail.com",comment:"User's comment"};async function N(e,t={}){return await k.post(e,t)}function z(e){h.email=e}function F(e){h.comment=e}const L=document.querySelector(".feedback-form");L.addEventListener("submit",H);async function H(e){e.preventDefault();const t=e.target.elements.email.value,c=e.target.elements.comments.value;F(c),z(t);try{const{data:{message:s,title:o}}=await N(`${D}/requests`,h);A.create(`<div class="backdrop">
      <div class="modal">
      <button class="modal-btn" type="button" aria-label="Modal close button">
          <svg class="modal-icon-x" width="22px" height="22">
            <use href="../img/icons.svg#icon-x"></use>
          </svg>
        </button>

      <h3 class="modal-title">${o}</h1>
      <p class="modal-desc">${s}</p>
      </div>
      </div>`,{onShow:i=>{i.element().querySelector(".modal-btn").onclick=i.close,i.element().addEventListener("click",function(a){a.target.classList.contains("backdrop")&&i.close()}),window.addEventListener("keydown",function(a){a.key==="Escape"&&i.close()})}}).show(),L.reset()}catch{y.show({message:"Please ented a valid data!",color:"orange",position:"topRight"})}finally{}}
//# sourceMappingURL=commonHelpers.js.map
