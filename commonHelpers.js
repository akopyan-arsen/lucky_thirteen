import{A as g,S as w}from"./assets/vendor-6dcf4018.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function d(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(t){if(t.ep)return;t.ep=!0;const n=d(t);fetch(t.href,n)}})();document.addEventListener("DOMContentLoaded",function(){const o=document.querySelector(".menu"),e=document.querySelector(".ac-menu-panel"),d=document.querySelector(".burger-btn"),c=document.querySelector(".menu-btn"),t=r=>{const a=r.getAttribute("href").substring(1),s=document.getElementById(a);if(s){const l=s.offsetTop-40;window.scrollTo({top:l,behavior:"smooth"})}};function n(){document.getElementById("myModal").classList.add("is-open")}function i(){document.getElementById("myModal").classList.remove("is-open")}d.addEventListener("click",function(){n()}),c.addEventListener("click",function(){i()}),o.addEventListener("click",function(){e.classList.toggle("active")}),document.querySelectorAll(".ac-menu-text").forEach(function(r){r.addEventListener("click",function(){t(this),e.classList.remove("active")})}),document.querySelectorAll('a[href^="#"]').forEach(r=>{r.addEventListener("click",function(a){a.preventDefault();const s=this.getAttribute("href").substring(1),l=document.getElementById(s);if(l){const p=l.offsetTop-40;window.scrollTo({top:p,behavior:"smooth"})}})})});const y=document.querySelectorAll(".menu-list");function v(){document.getElementById("myModal").classList.remove("is-open")}y.forEach(function(o){o.addEventListener("click",v)});window.onclick=function(o){const e=document.getElementById("myModal");o.target===e&&document.getElementById("myModal").classList.remove("is-open")};const u=(o,e={})=>{new g(o,e)},f=(o,e={})=>{new w(o,e)},b=()=>{u(".accordion-about-me .accordion-container",{openOnInit:[0]}),f(".about-me-swiper .swiper",{direction:"horizontal",loop:!0,slidesPerView:"auto",navigation:{nextEl:".about-me-swiper .button-next"},speed:600,spaceBetween:0,breakpoints:{320:{slidesPerView:2},768:{slidesPerView:3},1440:{slidesPerView:6}},keyboard:{enabled:!0,onlyInViewport:!1},slideActiveClass:"swiper-slide-active"})};b();const m=document.querySelectorAll(".cover-img-container"),h=document.querySelector(".cover-container");window.addEventListener("scroll",E);function E(){L(h)?m.forEach(o=>o.classList.add("animation-img")):m.forEach(o=>o.classList.remove("animation-img"))}function L(o){const e=o.getBoundingClientRect();return e.bottom>0&&e.right>0&&e.top<(window.innerHeight||document.documentElement.clientHeight)&&e.left<(window.innerWidth||document.documentElement.clientWidth)}function A(){f(".projects-swiper .swiper",{direction:"horizontal",slidesPerView:1,spaceBetween:25,navigation:{prevEl:".projects-swiper .swiper-button-prev",nextEl:".projects-swiper .swiper-button-next"},speed:600,keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},slideActiveClass:"swiper-slide-active"})}A();const I=()=>{u(".faq-accordion-first.accordion-container"),u(".faq-accordion-second.accordion-container")};I();
//# sourceMappingURL=commonHelpers.js.map
