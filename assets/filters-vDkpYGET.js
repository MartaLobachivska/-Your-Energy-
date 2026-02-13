import{getFilters as x,getExercises as E}from"./api-CA10J7K2.js";import{i as I}from"./icons-mdIB9KqP.js";import"./vendor-D1yz-ZLW.js";function M(e){return e.map(({_id:t,name:s,rating:n,burnedCalories:o,time:i,bodyPart:a,target:v})=>`
      <li class="ExerciseItem">
        <div class="ExerciseCardTop">
          <span class="ExerciseBadge">WORKOUT</span>
          
          <div class="ExerciseRatingContainer">
            <span class="ExerciseRating">${Math.round(n).toFixed(1)}</span>
            <svg class="ExerciseStarIcon" width="13" height="13">
              <use href="${I}#star"></use>
            </svg>
          </div>

          <button class="ExerciseStartBtn" data-id="${t}">
            Start
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5 14L14 7.5M14 7.5L7.5 1M14 7.5H1" stroke="#242424" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
        </div>

        <div class="ExerciseCardTitle">
          <div class="ExerciseIconWrapper">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="12" fill="#242424" />
                <path d="M18.8234 8.72544C18.6138 8.47504 18.2403 8.44212 17.9899 8.65092L16.349 10.0294L15.5943 8.15967C15.5675 8.08949 15.5267 8.03057 15.4799 7.97859C15.3257 7.63549 15.058 7.34091 14.6889 7.17023C14.5286 7.09745 14.3631 7.05846 14.1977 7.0394C14.1613 7.02034 14.1283 6.99521 14.0868 6.98222L11.199 6.17732C11.037 6.13314 10.8741 6.16173 10.7407 6.2397C10.5821 6.29342 10.4461 6.40865 10.3811 6.57587L9.29378 9.37178C9.17594 9.67589 9.3267 10.019 9.63168 10.1386C9.93492 10.2564 10.2789 10.1048 10.3976 9.79978L11.316 7.43882L12.6312 7.80444C12.5991 7.85643 12.5645 7.90495 12.5385 7.9604L10.8524 11.6149C10.8282 11.6686 10.8152 11.7232 10.7979 11.7787L8.7488 15.214L5.31955 16.3611C4.9314 16.6514 4.84909 17.1981 5.13587 17.5862C5.42439 17.9752 5.97282 18.0575 6.36011 17.7708L9.86907 16.5621C9.97651 16.4841 10.0545 16.3819 10.1134 16.2719C10.1576 16.2251 10.2078 16.1878 10.2416 16.1298L11.4633 14.0816L13.6319 15.9296L11.3116 18.5445C10.9919 18.9049 11.024 19.4603 11.3862 19.7791C11.7474 20.1005 12.3011 20.0667 12.6225 19.7046L15.5181 16.4426C15.6082 16.342 15.6619 16.2259 15.6983 16.1047C15.7199 16.0388 15.7199 15.9704 15.7251 15.9019C15.7251 15.8673 15.7381 15.8361 15.7355 15.804C15.7277 15.5649 15.6307 15.3327 15.4349 15.1672L13.4395 13.4656C13.5834 13.3287 13.7055 13.1658 13.7939 12.9743L15.0866 10.1749L15.5007 11.2779C15.5181 11.3758 15.551 11.472 15.6203 11.5525C15.6827 11.627 15.7624 11.6764 15.8473 11.7111C15.856 11.7111 15.8664 11.7111 15.8768 11.7189C15.9305 11.7379 15.9851 11.7561 16.0414 11.7587C16.1081 11.7648 16.1757 11.7561 16.2441 11.7371C16.2459 11.7362 16.2467 11.7362 16.2467 11.7362C16.2649 11.7319 16.2831 11.7353 16.3013 11.7275C16.3975 11.6912 16.4711 11.6296 16.5344 11.5577L18.8893 9.55892C19.1397 9.34838 19.034 8.97583 18.8234 8.72544Z" fill="#F4F4F4" />
                <path d="M15.8448 7.30102C16.7564 7.30102 17.4954 6.56206 17.4954 5.65051C17.4954 4.73896 16.7564 4 15.8448 4C14.9333 4 14.1943 4.73896 14.1943 5.65051C14.1943 6.56206 14.9333 7.30102 15.8448 7.30102Z" fill="#F4F4F4" />
            </svg>
          </div>
          <h3 class="ExerciseName">${f(s)}</h3>
        </div>

        <ul class="ExerciseInfoList">
          <li class="ExerciseInfoItem">
            <span class="InfoLabel">Burned calories:</span>
            <span class="InfoValue">${o} / ${i} min</span>
          </li>
          <li class="ExerciseInfoItem">
            <span class="InfoLabel">Body part:</span>
            <span class="InfoValue">${f(a)}</span>
          </li>
          <li class="ExerciseInfoItem">
            <span class="InfoLabel">Target:</span>
            <span class="InfoValue">${f(v)}</span>
          </li>
        </ul>
      </li>
      `).join("")}function f(e){return e?e.charAt(0).toUpperCase()+e.slice(1):""}const c=document.querySelector(".ExercisesList"),h=document.querySelectorAll(".FilterBtn"),d=document.getElementById("pagination"),m=document.querySelector(".BreadcrumbCurrent"),L=document.querySelector(".BreadcrumbDivider"),l=document.getElementById("search-form"),T=document.querySelector(".FiltersNav");let r={filter:"Muscles",categoryName:"",keyword:"",page:1,view:"categories"};T&&c&&b();async function b(){C(r.filter),await p(r.filter,1),B()}function B(){h.forEach(e=>{e.addEventListener("click",async t=>{t.preventDefault();const s=t.currentTarget.dataset.filter;if(t.currentTarget.classList.contains("Active")&&r.view==="exercises")return k(s);t.currentTarget.classList.contains("Active")||(r.filter=s,r.page=1,r.view="categories",r.categoryName="",C(s),m.textContent="",L.style.display="none",l.classList.add("IsHidden"),await p(r.filter,r.page))})}),c.addEventListener("click",async e=>{if(r.view==="exercises")return;const t=e.target.closest(".FilterItem");if(!t)return;const s=t.dataset.name,n=t.dataset.filter;r.view="exercises",r.categoryName=s,r.page=1,L.style.display="inline-block",m.textContent=y(s),l.classList.remove("IsHidden"),await g(n,s,1)}),d==null||d.addEventListener("click",async e=>{if(!e.target.classList.contains("PgBtn"))return;const t=Number(e.target.dataset.page);r.page=t,r.view==="categories"?await p(r.filter,t):await g(r.filter,r.categoryName,t),window.scrollTo({top:c.offsetTop-100,behavior:"smooth"})}),l==null||l.addEventListener("submit",async e=>{e.preventDefault();const s=e.currentTarget.elements.keyword.value.trim().toLowerCase();r.keyword=s,r.page=1,await g(r.filter,r.categoryName,r.page)})}async function k(e){r.filter=e,r.page=1,r.view="categories",r.categoryName="",l.reset(),C(e),m.textContent="",L.style.display="none",l.classList.add("IsHidden"),await p(r.filter,r.page)}async function p(e,t){try{c.innerHTML='<p class="Loader">Loading...</p>';const s=await x(e,t);s.results.length>0&&(c.innerHTML=$(s.results),w(s.totalPages,t))}catch(s){console.error(s),c.innerHTML="<p>Error loading categories.</p>"}}async function g(e,t,s){try{c.innerHTML='<p class="Loader">Loading exercises...</p>';let n="muscles";e==="Body parts"&&(n="bodypart"),e==="Equipment"&&(n="equipment");const o={[n]:t.toLowerCase(),page:s,limit:10,keyword:r.keyword},i=await E(o);i.results&&i.results.length>0?(c.innerHTML=M(i.results),w(i.totalPages,s)):(c.innerHTML=`
        <p class="NoResultsMessage">
          Unfortunately, <strong>no results</strong> were found matching your search, please try again.
        </p>`,d.innerHTML="")}catch(n){console.error(n),c.innerHTML="<p>Error loading exercises.</p>"}}function w(e,t){if(!d||(d.innerHTML="",e<=1))return;const s=[],n=5;t>1&&(s.push(u("<<",1,"Arrow")),s.push(u("<",t-1,"Arrow")));let o=Math.max(1,t-2),i=Math.min(e,o+n-1);i-o<n-1&&(o=Math.max(1,i-n+1));for(let a=o;a<=i;a++)s.push(u(a,a,a===t?"Active":""));if(i<e){if(i<e-1){const a=document.createElement("span");a.textContent="...",a.className="PgDots",s.push(a)}s.push(u(e,e,""))}t<e&&(s.push(u(">",t+1,"Arrow")),s.push(u(">>",e,"Arrow"))),s.forEach(a=>d.appendChild(a))}function u(e,t,s){const n=document.createElement("button");return n.className=`PgBtn ${s}`,n.textContent=e,n.dataset.page=t,n}function C(e){h.forEach(t=>{t.classList.toggle("Active",t.dataset.filter===e)})}function $(e){return e.map(t=>`
    <li class="FilterItem" 
        data-name="${t.name}" 
        data-filter="${t.filter}"
        style="background: linear-gradient(0deg, rgba(17,17,17,0.5), rgba(17,17,17,0.5)), url('${t.imgURL}') center/cover no-repeat;">
        <div class="FilterText">
            <h3>${y(t.name)}</h3>
            <p>${t.filter}</p>
        </div>
    </li>
  `).join("")}function y(e){return e?e.charAt(0).toUpperCase()+e.slice(1):""}
//# sourceMappingURL=filters-vDkpYGET.js.map
