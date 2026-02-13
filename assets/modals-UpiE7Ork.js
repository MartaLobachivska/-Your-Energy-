import{getExerciseById as S,patchRating as y}from"./api-CA10J7K2.js";import{i as d}from"./icons-C9mw2FC3.js";import"./vendor-D1yz-ZLW.js";const o=document.querySelector("#exercise-modal"),v=document.querySelector(".ExercisesList");let u=null;v&&v.addEventListener("click",async t=>{const e=t.target.closest(".ExerciseStartBtn");if(e)try{const a=await S(e.dataset.id);a&&p(a)}catch(a){console.error(a)}});function p(t){u=t,o.innerHTML=L(t),o.classList.remove("IsHidden"),document.body.classList.add("NoScroll"),window.addEventListener("keydown",h),b(t)}function b(t){const e=document.querySelector(".BtnFavorite");if(!e)return;const r=(JSON.parse(localStorage.getItem("favorites"))||[]).some(s=>s._id===t._id);m(e,r),e.addEventListener("click",()=>{const s=JSON.parse(localStorage.getItem("favorites"))||[],n=s.findIndex(i=>i._id===t._id);n!==-1?(s.splice(n,1),m(e,!1)):(s.push(t),m(e,!0)),localStorage.setItem("favorites",JSON.stringify(s))})}function m(t,e){e?t.innerHTML=`Remove from favorites <svg class="ModalHeart" width="20" height="20">
                <use href="${d}#heart"></use>
              </svg>`:t.innerHTML=`Add to favorites <svg class="ModalHeart" width="20" height="20">
                <use href="${d}#heart"></use>
              </svg>`}function f(){if(o.classList.add("IsHidden"),o.innerHTML="",document.body.classList.remove("NoScroll"),window.removeEventListener("keydown",h),window.location.pathname.includes("favorite")){const t=new Event("favorites-updated");window.dispatchEvent(t)}}function h(t){t.code==="Escape"&&f()}o&&o.addEventListener("click",t=>{(t.target===o||t.target.closest("#modal-close"))&&f()});document.addEventListener("click",t=>{t.target.classList.contains("BtnRating")&&(o.innerHTML=$(u._id),E())});function E(){let t=0;const e=document.querySelectorAll(".StarInput"),a=document.querySelector("#rating-value"),r=document.getElementById("rating-form");e.forEach(s=>{s.addEventListener("click",n=>{t=Number(n.target.dataset.value),a.textContent=`${t}.0`,e.forEach(i=>i.classList.toggle("Active",i.dataset.value<=t))})}),r&&(r.onsubmit=async s=>{var l,c;s.preventDefault();const{email:n,comment:i}=s.target.elements;if(t===0)return alert("Please select a rating!");try{await y(u._id,{rate:t,email:n.value.trim(),comment:i.value.trim()}),alert("Thank you for your feedback!"),p(u)}catch(g){alert(((c=(l=g.response)==null?void 0:l.data)==null?void 0:c.message)||"Error submitting rating")}})}function L(t){const{gifUrl:e,name:a,rating:r,target:s,bodyPart:n,equipment:i,popularity:l,burnedCalories:c,description:g,_id:M}=t;return`
    <div class="ModalContent">
      <button type="button" class="ModalCloseBtn" id="modal-close">
        <svg class="ModalCloseIcon" width="28" height="28"><use href="${d}#cross"></use></svg>
      </button>
      <div class="ModalExerciseCard">
        <div class="ModalGifWrapper">
          <img src="${e}" alt="${a}" class="ModalGif" width="295" height="258" />
        </div>
        <div class="ModalDetails">
          <h2 class="ModalTitle">${a}</h2>
          <div class="ModalRatingRow">
              <span class="ModalRatingValue">${r.toFixed(1)}</span>
              ${w(r)}
          </div>
          <ul class="ModalStatsList">
            <li class="ModalStatItem"><span>Target</span> <strong>${s}</strong></li>
            <li class="ModalStatItem"><span>Body Part</span> <strong>${n}</strong></li>
            <li class="ModalStatItem"><span>Equipment</span> <strong>${i}</strong></li>
            <li class="ModalStatItem"><span>Popular</span> <strong>${l}</strong></li>
            <li class="ModalStatItem"><span>Burned calories</span> <strong>${c}/3 min</strong></li>
          </ul>
          <p class="ModalDescription">${g}</p>
          <div class="ModalBtns">
            <button class="BtnFavorite" data-id="${M}">Add to favorites</button>
            <button class="BtnRating" type="button">Give a rating</button>
          </div>
        </div>
      </div>
    </div>`}function $(t){return`
    <div class="ModalContent RatingModal">
      <button type="button" class="ModalCloseBtn" id="modal-close">
        <svg class="ModalCloseIcon" width="28" height="28"><use href="${d}#cross"></use></svg>
      </button>
      <p class="RatingLabel">Rating</p>
      <div class="RatingValueContainer">
        <span id="rating-value">0.0</span>
        <div class="StarRating">
            ${[1,2,3,4,5].map(e=>`<span class="StarInput" data-value="${e}">★</span>`).join("")}
        </div>
      </div>
      <form class="RatingForm" id="rating-form">
        <input type="email" name="email" placeholder="Email" required 
               pattern="^\\w+(\\.\\w+)?@[a-zA-Z_]+?\\.[a-zA-Z]{2,3}$" class="RatingInput"/>
        <textarea name="comment" placeholder="Your comment" required class="RatingTextarea"></textarea>
        <button type="submit" class="RatingSendBtn">Send</button>
      </form>
    </div>`}function w(t){let e="";for(let a=1;a<=5;a++)e+=`<span style="color: ${a<=Math.round(t)?"#EEA10C":"rgba(255,255,255,0.2)"}">★</span>`;return`<div class="ModalStars">${e}</div>`}export{p as openModal};
//# sourceMappingURL=modals-UpiE7Ork.js.map
