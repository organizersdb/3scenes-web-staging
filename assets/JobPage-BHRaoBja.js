import{j as s,f as C,B as f,M as b,r as n,J as N,k as L}from"./index-D_Je3U8E.js";import{A as k}from"./Avatar-DDAoMGYo.js";import{D as w}from"./DiscordButton-DuXtYCjK.js";import{O as S}from"./OpportunityDetail-D3u6RcTK.js";import{P as y}from"./ProposalDetail-Be8svhDg.js";import{B as D}from"./Back-wPoXBxy0.js";import"./Separator-ByB699LM.js";import"./SceneCard-z2ZceIV2.js";import"./index-Bet9U9ah.js";function P(){return s.jsxs("svg",{width:"40",height:"40",viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[s.jsx("mask",{id:"mask0_1862_1156",maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"40",height:"40",children:s.jsx("rect",{width:"40",height:"40",fill:"#D9D9D9"})}),s.jsx("g",{mask:"url(#mask0_1862_1156)",children:s.jsx("path",{d:"M14.1667 28.782L20 24.3398L25.8333 28.782L23.6068 21.5641L29.4081 17.4829H22.3055L20 9.95942L17.688 17.4829H10.5855L16.3868 21.5641L14.1667 28.782ZM20.0056 35C17.9356 35 15.9912 34.6064 14.1723 33.8192C12.3534 33.032 10.7639 31.959 9.40387 30.6003C8.04385 29.2415 6.96986 27.6535 6.18192 25.8363C5.39397 24.0191 5 22.0755 5 20.0056C5 17.9313 5.3936 15.9812 6.18079 14.1552C6.96801 12.3291 8.041 10.7407 9.39975 9.38996C10.7585 8.03921 12.3465 6.96986 14.1637 6.18192C15.9809 5.39397 17.9245 5 19.9944 5C22.0687 5 24.0188 5.3936 25.8448 6.18079C27.6709 6.96801 29.2593 8.03637 30.61 9.38587C31.9608 10.7354 33.0301 12.3223 33.8181 14.1466C34.606 15.9709 35 17.9202 35 19.9944C35 22.0644 34.6064 24.0088 33.8192 25.8277C33.032 27.6466 31.9636 29.2361 30.6141 30.5961C29.2646 31.9562 27.6777 33.0301 25.8534 33.8181C24.0291 34.606 22.0798 35 20.0056 35ZM20 33.5898C23.7849 33.5898 26.9961 32.2699 29.6335 29.6303C32.271 26.9907 33.5898 23.7806 33.5898 20C33.5898 16.2151 32.271 13.0039 29.6335 10.3665C26.9961 7.72899 23.7849 6.41025 20 6.41025C16.2194 6.41025 13.0092 7.72899 10.3697 10.3665C7.73006 13.0039 6.41025 16.2151 6.41025 20C6.41025 23.7806 7.73006 26.9907 10.3697 29.6303C13.0092 32.2699 16.2194 33.5898 20 33.5898Z",fill:"#FAFAFA"})})]})}const B=({onSelect:a,...l})=>{const{screenwriter:e,script:i,jobId:t,screenwriterId:c}=l,d=C();return s.jsxs("div",{className:"border-b border-black py-8",onClick:()=>a(l),children:[s.jsxs("div",{className:"flex justify-between",children:[s.jsx(k,{name:e==null?void 0:e.name,title:e==null?void 0:e.type,img:e==null?void 0:e.avatar,size:"large"}),s.jsxs("div",{className:"flex items-center gap-x-4",children:[s.jsx(P,{}),s.jsx(w,{variant:"icon"}),s.jsx(f,{className:"border-indigo bg-indigo text-white",text:"開始合作",onClick:()=>d(`/contract/${t}/${c}/start`)})]})]}),s.jsxs("div",{className:"mt-8",children:[s.jsxs("div",{children:["LOGLINE: ",i==null?void 0:i.logline]}),s.jsxs("div",{className:"mt-4",children:["故事大綱： ",i==null?void 0:i.outline]})]})]})},J=({proposals:a,onSelect:l})=>s.jsx("div",{className:"px-10",children:a.map(e=>s.jsx(B,{...e,onSelect:l},e.id))}),m=({proposals:a,onSelect:l})=>s.jsxs("div",{className:"p-4",children:[s.jsx("div",{className:"flex justify-between"}),s.jsx(J,{proposals:a,onSelect:l})]}),M=({job:a,isOpen:l,onClose:e})=>a?s.jsx(b,{isOpen:l,onClose:e,className:"p-8 md:h-fit md:w-[90%]",children:s.jsx(S,{...a})}):s.jsx(s.Fragment,{}),H=()=>{var p,j;const[a,l]=n.useState(!1),[e,i]=n.useState("all"),{job:t,isLoading:c}=n.useContext(N),[d,r]=n.useState(null),g=C(),v=n.useMemo(()=>{var o,h,u;return t?[{label:`所有申請（${((o=t.proposals)==null?void 0:o.length)??0}）`,value:"all"},{label:`已標記（${((h=t.proposals)==null?void 0:h.filter(({isShortlisted:x})=>x).length)??0}）`,value:"shortlisted"},{label:`已封存（${((u=t.proposals)==null?void 0:u.filter(({isArchived:x})=>x).length)??0}）`,value:"archived"}]:[]},[t]);return!t||c?s.jsx("div",{children:"Loading..."}):s.jsxs(s.Fragment,{children:[s.jsxs("section",{children:[s.jsx(D,{}),s.jsxs("div",{className:"flex justify-between",children:[s.jsxs("div",{className:"flex items-baseline gap-x-2",children:[s.jsx("h1",{className:"font-serif text-3xl",children:t.title}),s.jsx("button",{className:"text-gray-500 underline",onClick:()=>l(!0),children:"查看細節"})]}),t.status==="draft"&&s.jsx(f,{text:"編輯啟事",onClick:()=>g(`/job/${t.id}/edit`)})]})]}),s.jsxs("section",{children:[s.jsx(L,{options:v,value:e,onChange:o=>i(o)}),e==="all"&&s.jsx(m,{proposals:t.proposals??[],onSelect:o=>r(o)}),e==="shortlisted"&&s.jsx(m,{proposals:((p=t.proposals)==null?void 0:p.filter(({isShortlisted:o})=>o))??[],onSelect:r}),e==="archived"&&s.jsx(m,{proposals:((j=t.proposals)==null?void 0:j.filter(({isArchived:o})=>o))??[],onSelect:r})]}),s.jsx(M,{job:t,isOpen:a,onClose:()=>l(!a)}),s.jsx(y,{proposal:d,onClose:()=>r(null)})]})};export{H as default};