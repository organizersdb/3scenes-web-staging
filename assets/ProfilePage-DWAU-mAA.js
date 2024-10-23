import{j as e,d as g,r as o,T as N,w as b,B as f,A as v,a as w,M as C}from"./index-D_Je3U8E.js";import{S as y}from"./Separator-ByB699LM.js";import{u as R,b as p}from"./Input-ILcMCOfW.js";function k({className:s}){return e.jsxs("svg",{className:s,width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("mask",{id:"mask0_3244_1089",maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"24",height:"24",children:e.jsx("rect",{width:"24",height:"24",fill:"#D9D9D9"})}),e.jsx("g",{mask:"url(#mask0_3244_1089)",children:e.jsx("path",{d:"M12 11.3843C11.175 11.3843 10.4688 11.0905 9.88125 10.503C9.29375 9.91553 9 9.20928 9 8.38428C9 7.55928 9.29375 6.85303 9.88125 6.26553C10.4688 5.67803 11.175 5.38428 12 5.38428C12.825 5.38428 13.5313 5.67803 14.1188 6.26553C14.7063 6.85303 15 7.55928 15 8.38428C15 9.20928 14.7063 9.91553 14.1188 10.503C13.5313 11.0905 12.825 11.3843 12 11.3843ZM5 18.6153V16.969C5 16.5562 5.12017 16.1699 5.3605 15.8103C5.601 15.4508 5.92442 15.1716 6.33075 14.9728C7.27442 14.5203 8.21867 14.1809 9.1635 13.9545C10.1083 13.7284 11.0538 13.6153 12 13.6153C12.9462 13.6153 13.8917 13.7284 14.8365 13.9545C15.7813 14.1809 16.7256 14.5203 17.6693 14.9728C18.0756 15.1716 18.399 15.4508 18.6395 15.8103C18.8798 16.1699 19 16.5562 19 16.969V18.6153H5ZM6 17.6153H18V16.969C18 16.7472 17.9285 16.5389 17.7855 16.344C17.6427 16.1492 17.4449 15.9844 17.1923 15.8498C16.3693 15.4511 15.5207 15.1457 14.6465 14.9335C13.7723 14.7214 12.8902 14.6153 12 14.6153C11.1098 14.6153 10.2277 14.7214 9.3535 14.9335C8.47933 15.1457 7.63075 15.4511 6.80775 15.8498C6.55508 15.9844 6.35733 16.1492 6.2145 16.344C6.0715 16.5389 6 16.7472 6 16.969V17.6153ZM12 10.3843C12.55 10.3843 13.0208 10.1884 13.4125 9.79678C13.8042 9.40511 14 8.93428 14 8.38428C14 7.83428 13.8042 7.36344 13.4125 6.97178C13.0208 6.58011 12.55 6.38428 12 6.38428C11.45 6.38428 10.9792 6.58011 10.5875 6.97178C10.1958 7.36344 10 7.83428 10 8.38428C10 8.93428 10.1958 9.40511 10.5875 9.79678C10.9792 10.1884 11.45 10.3843 12 10.3843Z",fill:"#4C00C7"})})]})}const S=({displayName:s,contactEmail:a,phone:i,company:n})=>e.jsxs("div",{className:"grid md:grid-cols-12 md:px-12",children:[e.jsx("aside",{className:"sticky col-span-3 mt-24 hidden self-start md:block",children:e.jsx(g,{anchors:H})}),e.jsxs("div",{className:"col-span-9",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("h1",{className:"font-sans text-3xl font-bold",children:"我的帳户"}),e.jsxs("div",{className:"flex items-center gap-x-2",children:[e.jsx(k,{className:"h-8 w-8"}),e.jsx("div",{className:"w-fit rounded bg-indigo px-2 py-1 text-white",children:"編劇"})]})]}),e.jsx(y,{}),e.jsxs("section",{id:"account-info",className:"mb-10",children:[e.jsx("h2",{className:" mt-10 font-sans text-xl font-bold",children:"帳户資料"}),e.jsxs("ul",{className:"mt-5 leading-10",children:[e.jsxs("li",{children:["聯絡人名稱：",s]}),e.jsxs("li",{children:["聯絡電話：",i]}),e.jsxs("li",{children:["登入電郵地址：",a]}),n&&e.jsxs(e.Fragment,{children:[e.jsxs("li",{children:["公司名稱：",n.name]}),e.jsxs("li",{children:["公司地址：",n.address]}),e.jsxs("li",{children:["商業登記號碼：",n.br]})]})]}),e.jsx("p",{className:"mt-4 text-indigo",children:"如要更改資料，請電郵 info@3scenes.io"})]})]})]}),H=[{anchor:"account-info",text:"帳户資料"}],M=({companyId:s,onClose:a})=>{const{showAlert:i}=o.useContext(N),{createRepresentative:n}=o.useContext(b),r=async h=>{const j={...h,companyId:s,roles:["manager"]},m=await n(j);a(),m.userId?window.location.reload():i({severity:"ERROR",content:"抱歉，系統遇到技術問題，請稍後重試。若問題持續，請與我們聯絡。"})},{register:l,formState:{errors:t},handleSubmit:c,watch:d}=R({mode:"onChange"});return e.jsxs("form",{className:"flex flex-col",children:[e.jsx(p,{watch:d,fieldName:"representativeName",register:l,errors:t,placeholder:"帳户聯絡人名稱",maxLength:50}),e.jsx(p,{watch:d,fieldName:"representativeEmail",register:l,errors:t,placeholder:"電郵地址",maxLength:50}),e.jsx(p,{watch:d,fieldName:"representativeMobile",register:l,errors:t,placeholder:"聯絡電話",maxLength:50}),e.jsxs("div",{className:"mt-4 flex gap-x-4",children:[e.jsx(f,{text:"返回",type:"button",onClick:a}),e.jsx(f,{className:"border-indigo bg-indigo text-white",text:"新增",type:"button",onClick:c(r)})]})]})};function I(){return e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("mask",{id:"mask0_3245_788",maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"24",height:"24",children:e.jsx("rect",{width:"24",height:"24",fill:"#D9D9D9"})}),e.jsx("g",{mask:"url(#mask0_3245_788)",children:e.jsx("path",{d:"M7.6155 20.0002C7.168 20.0002 6.78683 19.8429 6.472 19.5282C6.15733 19.2134 6 18.8322 6 18.3847V6.00021H5V5.00021H9V4.23096H15V5.00021H19V6.00021H18V18.3847C18 18.845 17.8458 19.2294 17.5375 19.5377C17.2292 19.846 16.8448 20.0002 16.3845 20.0002H7.6155ZM17 6.00021H7V18.3847C7 18.5642 7.05767 18.7117 7.173 18.8272C7.2885 18.9425 7.436 19.0002 7.6155 19.0002H16.3845C16.5385 19.0002 16.6796 18.9361 16.8077 18.808C16.9359 18.6798 17 18.5387 17 18.3847V6.00021ZM9.80775 17.0002H10.8078V8.00021H9.80775V17.0002ZM13.1923 17.0002H14.1923V8.00021H13.1923V17.0002Z",fill:"#1C1B1F"})})]})}const F=({companyId:s})=>{const{showAlert:a}=o.useContext(N),{authUser:i,isInitializing:n,authSwrFetcher:r}=o.useContext(v),{deleteRepresentative:l}=o.useContext(b),[t,c]=o.useState(!1),[d,h]=o.useState(null),{data:j}=w(`/representative?companyId=${s}`,r);if(n||!i)return e.jsx(e.Fragment,{});const m=j==null?void 0:j.filter(x=>x.userId!==i.id),V=async x=>{const u=await l(x);h(null),u.status===200?window.location.reload():a({severity:"ERROR",content:"抱歉，系統遇到技術問題，請稍後重試。若問題持續，請與我們聯絡。"})};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"border border-black",children:[e.jsxs("div",{className:"flex items-center justify-between p-4",children:[e.jsx("span",{className:"font-bold",children:"成員帳户電郵地址"}),e.jsx(f,{text:"建立成員帳户",onClick:()=>c(!0)})]}),e.jsx("div",{className:"h-[300px] overflow-y-auto border-t border-black",children:m!=null&&m.length?e.jsx("ul",{children:m.map((x,u)=>e.jsxs("li",{className:"flex justify-between border-b border-b-black px-4 py-2 text-sm font-light",children:[e.jsx("span",{children:`${u+1}. ${x.email}`}),e.jsx("div",{onClick:()=>h(x),children:e.jsx(I,{})})]},x.userId))}):e.jsx("div",{className:"flex h-[300px] w-full items-center justify-center",children:e.jsx("p",{children:"新增電郵地址，授權同事使用3scenes"})})})]}),e.jsx(C,{isOpen:t,onClose:()=>c(!1),children:e.jsxs("div",{className:"mx-auto flex flex-col items-center gap-y-2 py-10 text-center",children:[e.jsx("div",{className:"font-serif text-3xl font-bold",children:"新增成員帳户"}),e.jsx("div",{className:"font-light",children:"帳户必須與管理員電郵域名相同"}),e.jsx("div",{className:"flex gap-x-3",children:e.jsx(M,{companyId:s,onClose:()=>c(!1)})})]})}),e.jsx(C,{isOpen:!!d,onClose:()=>h(null),children:e.jsxs("div",{className:"mx-auto flex flex-col items-center gap-y-2 py-10 text-center",children:[e.jsx("div",{className:"font-serif text-3xl font-bold",children:"你確定要刪除此成員帳户？"}),e.jsxs("div",{className:"mt-6 flex gap-x-3",children:[e.jsx(f,{text:"返回",type:"button",onClick:()=>h(null)}),e.jsx(f,{className:"border-indigo bg-indigo text-white",text:"刪除",type:"button",onClick:()=>{d&&V(d)}})]})]})})]})},A=({company:s})=>{var i;const a=(i=s.roles)==null?void 0:i.includes("admin");return e.jsxs("div",{className:"grid md:grid-cols-12 md:px-12",children:[e.jsx("aside",{className:"sticky top-[220px] col-span-3 hidden self-start md:block",children:e.jsx(g,{anchors:D.filter(n=>{var r;for(const l of n.access)if((r=s.roles)!=null&&r.includes(l))return!0})})}),e.jsxs("div",{className:"col-span-9",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("h1",{className:"font-sans text-3xl font-bold",children:"我的帳户"}),e.jsxs("div",{className:"flex items-center gap-x-2",children:[e.jsx(k,{className:"h-8 w-8"}),e.jsx("div",{className:"w-fit rounded bg-indigo px-2 py-1 text-white",children:a?"電影公司管理員":"電影公司成員"})]})]}),e.jsx(y,{}),e.jsxs("section",{id:"account-info",className:"mb-10",children:[e.jsx("h2",{className:" mt-10 font-sans text-xl font-bold",children:"帳户資料"}),e.jsxs("ul",{className:"mt-5 leading-10",children:[e.jsxs("li",{children:["公司名稱：",s.name]}),e.jsxs("li",{children:["地址：",s.address]}),e.jsxs("li",{children:["聯絡人名稱：",s.contactPerson]}),e.jsxs("li",{children:["聯絡電話：",s.phone]}),e.jsxs("li",{children:["商業登記號碼：",s.br]})]}),e.jsx("p",{className:"mt-4 text-indigo",children:"如要更改資料，請電郵 info@3scenes.io"})]}),a&&s.id&&e.jsxs("section",{id:"manage-accounts",children:[e.jsx("h2",{className:" mt-10 font-sans text-xl font-bold",children:"管理帳户"}),e.jsxs("ul",{className:"ml-4 mt-6 flex list-disc flex-col gap-y-6",children:[e.jsx("li",{children:"電影公司管理員可建立最多10個成員帳户，協助公司其他同事自行發佈啟示及管理合約。"}),e.jsx("li",{children:"只有電影公司管理員可管理其成員帳户，成員帳户並沒有相關權限。"}),e.jsx("li",{children:"成員帳户必須使用與管理員帳户相同電郵域名。"})]}),e.jsx("div",{className:"mt-10",children:e.jsx(F,{companyId:s.id})})]})]})]})},D=[{anchor:"account-info",text:"帳户資料",access:["admin","manager"]},{anchor:"manage-accounts",text:"管理帳户",access:["admin"]}],B=()=>{const{authUser:s,authSwrFetcher:a}=o.useContext(v),{data:i}=w(`/profile/get?id=${s==null?void 0:s.id}`,a);if(!s)return e.jsx(e.Fragment,{});if(!s.id)return e.jsx("div",{children:"No Proile ID provided"});if(!i)return e.jsx(e.Fragment,{});if(s.isScreenwriter){const{displayName:n,contactEmail:r,screenwriters:l}=i,t=l[0],c=t.br?{name:t.brCompany,address:t.address,br:t.br}:void 0;return e.jsx(S,{displayName:n,contactEmail:r||"",phone:t.phone||"",company:c})}else{const{companies:n,representatives:r}=i,l=n[0],t=r.find(c=>c.companyId===l.id);return e.jsx(A,{company:{...l,roles:t==null?void 0:t.roles}})}};export{B as default};
