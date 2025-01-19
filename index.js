import{a as h,S as b,i as p}from"./assets/vendor-BDaiwwc1.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))t(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&t(c)}).observe(document,{childList:!0,subtree:!0});function o(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(r){if(r.ep)return;r.ep=!0;const s=o(r);fetch(r.href,s)}})();let y=1;const l=document.querySelector(".loader"),n=document.querySelector(".loader-wrapper");async function w(a){const o=`https://pixabay.com/api/?${new URLSearchParams({key:"45176737-eefebace9d6de0f5929b63080",q:a,image_type:"photo",orientation:"horizontal",safesearch:"true",page:1,per_page:15})}`;l.style.display="inline-block",document.querySelector(".gallery").style.display="none",document.querySelector(".load-more").style.display="none";try{return(await h.get(o)).data}catch(t){console.log(t)}finally{l.style.display="none",document.querySelector(".gallery").style.display="flex",y=2}}async function L(a){const o=`https://pixabay.com/api/?${new URLSearchParams({key:"45176737-eefebace9d6de0f5929b63080",q:a,image_type:"photo",orientation:"horizontal",safesearch:"true",page:y,per_page:15})}`;l.style.display="inline-block",l&&n&&(l.style.display="inline-block",n.classList.add("top-center")),document.querySelector(".load-more").style.display="none";try{return(await h.get(o)).data}catch(t){console.log(t)}finally{l&&n&&(l.style.display="none",n.classList.remove("top-center")),document.querySelector(".load-more").style.display="block",y+=1}}function f(a){const e=document.querySelector(".gallery"),o=a.map(t=>`<li class="gallery-item">
              <a class="gallery-link" href="${t.largeImageURL}">
              <img
                  class="gallery-image"
                  src="${t.previewURL}"
                  data-source="${t.largeImageURL}"
                  alt="${t.tags}"
              />
              <div class="image-details">
            <div class="details-element">
              <p class="details-title">Likes</p>
              <p class="details-value">${t.likes}</p>
            </div>
            <div class="details-element">
              <p class="details-title">Views</p>
              <p class="details-value">${t.views}</p>
            </div>
            <div class="details-element">
              <p class="details-title">Comments</p>
              <p class="details-value">${t.comments}</p>
            </div>
            <div class="details-element">
              <p class="details-title">Downloads</p>
              <p class="details-value">${t.downloads}</p>
            </div>
          </div>
              </a>
              </li>`).join("");e.insertAdjacentHTML("beforeend",o),g.refresh()}let g=new b(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});g.on("show.simplelightbox");const S=document.querySelector(".search-form"),d=document.querySelector(".gallery"),u=document.querySelector(".load-more");let i="",m=0,v=0;S.addEventListener("submit",async a=>{if(a.preventDefault(),i=document.querySelector(".search-input").value.trim(),i==="")p.error({id:"error",message:"The search field cannot be empty",position:"topRight",transitionIn:"fadeInDown"}),d.innerHTML="";else try{const e=await w(i);console.log(e),e.hits.length===0?(p.error({id:"error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",transitionIn:"fadeInDown"}),d.innerHTML=""):(d.innerHTML="",f(e.hits),u.style.display="block",v=e.totalHits,m=e.hits.length)}catch(e){console.error("Error:",e)}});u.addEventListener("click",async a=>{if(a.preventDefault(),m>=v)p.error({id:"error",message:"We're sorry, but you've reached the end of search results.",position:"topRight",transitionIn:"fadeInDown"}),u.style.display="none";else try{const e=await L(i);f(e.hits),m+=e.hits.length;const t=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:2*t.height+24,left:0,behavior:"smooth"})}catch(e){console.error("Error:",e)}});
//# sourceMappingURL=index.js.map
