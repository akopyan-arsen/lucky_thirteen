import{A as d,S as u}from"./assets/vendor-6dcf4018.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();document.addEventListener("DOMContentLoaded",function(){const n=document.querySelector(".menu"),e=document.querySelector(".ac-menu-panel");n.addEventListener("click",function(){e.classList.toggle("active")});const r=t=>{const o=t.getAttribute("href").substring(1),i=document.getElementById(o);if(i){const l=i.offsetTop-40;window.scrollTo({top:l,behavior:"smooth"})}};document.querySelectorAll(".ac-menu-text").forEach(function(t){t.addEventListener("click",function(){r(this),e.classList.remove("active")})})});let a=document.querySelectorAll(".menu-list");function m(){document.getElementById("myModal").classList.remove("is-open")}a.forEach(function(n){n.addEventListener("click",m)});window.onclick=function(n){const e=document.getElementById("myModal");n.target===e&&document.getElementById("myModal").classList.remove("is-open")};document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll('a[href^="#"]').forEach(n=>{n.addEventListener("click",function(e){e.preventDefault()})}),scroll(this)});const f=(n,e={})=>{new d(n,e)},p=(n,e={})=>{new u(n,e)},g=()=>{f(".accordion-about-me .accordion-container",{openOnInit:[0]}),p(".about-me-swiper .swiper",{direction:"horizontal",loop:!0,slidesPerView:"auto",navigation:{nextEl:".about-me-swiper .button-next"},speed:600,spaceBetween:0,breakpoints:{320:{slidesPerView:2},768:{slidesPerView:3},1440:{slidesPerView:6}},keyboard:{enabled:!0,onlyInViewport:!1},slideActiveClass:"swiper-slide-active"})},s=document.querySelectorAll(".cover-img-container"),y=document.querySelector(".cover-container");window.addEventListener("scroll",v);function v(){w(y)?s.forEach(n=>n.classList.add("animation-img")):s.forEach(n=>n.classList.remove("animation-img"))}function w(n){const e=n.getBoundingClientRect();return e.bottom>0&&e.right>0&&e.top<(window.innerHeight||document.documentElement.clientHeight)&&e.left<(window.innerWidth||document.documentElement.clientWidth)}g();
//# sourceMappingURL=commonHelpers.js.map
