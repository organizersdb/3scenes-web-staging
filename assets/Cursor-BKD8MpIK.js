import{r as l,j as f}from"./index-D_Je3U8E.js";function v(){const e=l.useRef(null),i=l.useRef(!1),r=l.useCallback(()=>{var n,c,u,d;const t=document.querySelectorAll(":hover");let s=!1;for(let o=3;o<t.length;++o)if(((n=t[o])==null?void 0:n.dataset.hover)!=="false"&&(typeof((c=t[o])==null?void 0:c.onclick)=="function"||t[o].tagName==="A")){s=!0;break}s&&!i.current?((u=e==null?void 0:e.current)==null||u.classList.add("scale-[4]","mix-blend-difference"),i.current=!0):!s&&i.current&&((d=e==null?void 0:e.current)==null||d.classList.remove("scale-[4]","mix-blend-difference"),i.current=!1)},[]),a=l.useCallback(({clientX:t,clientY:s})=>{const n=e.current;n&&(n.style.left=`${t}px`,n.style.top=`${s}px`,r())},[r]);return l.useEffect(()=>(window.addEventListener("scroll",r),window.addEventListener("mousemove",a),()=>{window.removeEventListener("scroll",r),window.removeEventListener("mousemove",a)}),[r,a]),f.jsx("div",{ref:e,className:"pointer-events-none fixed z-[9999] hidden h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-80 backdrop-invert transition duration-300 ease-in-out md:block"})}export{v as default};
