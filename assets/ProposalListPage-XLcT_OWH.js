import{j as e,l as h,B as j,r as l,A as u,a as f,L as S}from"./index-D_Je3U8E.js";import{S as v}from"./Search-CkF12ahv.js";import{P as y}from"./ProposalDetail-Be8svhDg.js";import"./DiscordButton-DuXtYCjK.js";import"./Avatar-DDAoMGYo.js";import"./Separator-ByB699LM.js";import"./SceneCard-z2ZceIV2.js";import"./index-Bet9U9ah.js";const C=({id:s,script:a,jobTitle:c,updatedAt:n,onSelect:r})=>s?e.jsxs("div",{className:"border-b border-gray-500 py-4",children:[e.jsx("h1",{children:a==null?void 0:a.title}),e.jsxs("div",{className:"grid grid-cols-4 md:grid-cols-12",children:[e.jsx("div",{className:"col-span-4",children:c}),e.jsx("div",{className:"col-span-4",children:n?`${h(new Date(n*1e3).toUTCString())}最後更新`:""}),e.jsx("div",{className:"col-span-4 justify-self-center py-8 md:justify-self-end md:py-0",children:e.jsx(j,{text:"查看申請",onClick:()=>r(s)})})]})]}):e.jsx(e.Fragment,{}),L=()=>{var x,m;const{authUser:s,authSwrFetcher:a}=l.useContext(u),[c,n]=l.useState(null),[r,p]=l.useState({page:0,pageSize:100,searchText:""}),{data:i,isLoading:d}=f(`/proposal?page=${r.page}&pageSize=${r.pageSize}&searchText=${r.searchText}&screenwriterId=${(x=s==null?void 0:s.screenwriter)==null?void 0:x.id}`,a),g=l.useCallback(t=>{p(o=>({...o,searchText:t}))},[]);return s?!i||d?e.jsx(e.Fragment,{}):e.jsxs("div",{className:"grid-col grid gap-y-4 py-4 md:p-4",children:[e.jsx("div",{className:"flex flex-col items-center gap-y-2 md:flex-row md:justify-between md:gap-y-0",children:e.jsx("h1",{children:"我的投稿"})}),e.jsx(v,{value:r.searchText??"",onChange:g}),e.jsx("div",{children:d?e.jsx(S,{}):(m=i==null?void 0:i.data)==null?void 0:m.sort((t,o)=>t.createdAt&&o.createdAt?o.createdAt-t.createdAt:0).map(t=>e.jsx(C,{...t,onSelect:n},t.id))}),e.jsx(y,{proposal:i.data.find(t=>t.id===c),onClose:()=>n(null)})]}):e.jsx(e.Fragment,{})};export{L as default};
