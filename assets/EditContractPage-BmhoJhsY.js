import{u as V,r as a,A as F,T as q,Q as z,e as Q,f as W,a as R,j as e,B as i,M as O}from"./index-D_Je3U8E.js";import{S as G}from"./Separator-ByB699LM.js";import{S as x,a as H}from"./SectionTitle-BCAYL0my.js";import{D as s,E as J}from"./Edit-GG4YlHQq.js";import{u as K,C as Y,b as E}from"./Input-ILcMCOfW.js";import"./hoist-non-react-statics.cjs-DwsWGffi.js";const ae=()=>{var S;const{jobId:o,screenwriterId:j,contractId:h}=V(),{authUser:c,authSwrFetcher:N}=a.useContext(F),{theme:I,showAlert:d}=a.useContext(q),{contract:M,saveContract:f}=a.useContext(z),{createContract:b,updateContract:C}=a.useContext(Q),r=W(),[D,m]=a.useState(!1),[T,n]=a.useState(!1),{data:p}=R(o?`/job/view?id=${o}`:null,N),{data:l}=R(j?`/screenwriter/view?id=${j}`:null,N),{register:g,control:$,trigger:A,formState:{isDirty:v,errors:u},handleSubmit:y,watch:w}=K({mode:"onChange",defaultValues:M}),X=a.useCallback(async()=>{r("/acknowledgement",{state:{initialCountdown:5,heading:"你的合約申請已成功遞交！",paragraphs:["3scenes.io 將會於 3 個工作天內審閱申請，成功申請將會刊登於本平台。","如有任何查詢，請聯絡 info@3scenes.io"],countdownText:"頁面將於{countdown}秒後返回 Dashboard",redirectPath:"/dashboard"}})},[r]),B=a.useCallback(async t=>{(await f({...t,status:"draft"})).id?(d({severity:"SUCCESS",content:"草稿已成功儲存！"}),r("/dashboard")):(n(!1),d({severity:"ERROR",content:"抱歉，系統遇到技術問題，請稍後重試。若問題持續，請與我們聯絡。"}))},[r,f,d]),L=a.useCallback(()=>{n(!0)},[]),P=a.useCallback(async t=>{n(!0),t.id?(await C({...t,jobId:o,screenwriterId:j,status:"open"})).id?X():(n(!1),d({severity:"ERROR",content:"抱歉，系統遇到技術問題，請稍後重試。若問題持續，請與我們聯絡。"})):(await b({...t,jobId:o,screenwriterId:j,status:"open"})).id?X():(n(!1),d({severity:"ERROR",content:"抱歉，系統遇到技術問題，請稍後重試。若問題持續，請與我們聯絡。"}))},[b,X,C]);return e.jsx("div",{className:"flex max-w-2xl justify-center",children:e.jsxs("form",{className:"flex max-w-lg flex-col",children:[e.jsx("h1",{className:"text-center font-sans text-xl font-bold md:text-left md:text-3xl",children:"草擬合約"}),e.jsxs("p",{className:"font-serif",children:["您必須在",e.jsx("span",{className:"text-red",children:"XXXX"}),"個工作天內完成合約草擬，否則此合作會被取消。"]}),e.jsx(G,{className:"hidden md:block"}),e.jsxs("div",{className:"mt-12 flex flex-col gap-y-16",children:[e.jsxs("section",{className:"leading-8",children:[e.jsx(x,{current:1,total:6,title:"委託方"}),e.jsxs("div",{children:[e.jsx(s,{label:"委託方",value:`${(S=p==null?void 0:p.company)==null?void 0:S.name}(以下簡稱「甲方」) `}),e.jsx(s,{label:"聯絡人",value:e.jsx("span",{className:"text-red",children:"XXXX"})}),e.jsx(s,{label:"聯絡電話",value:e.jsx("span",{className:"text-red",children:"XXXX"})}),e.jsx(s,{label:"電郵地址",value:e.jsx("span",{className:"text-red",children:"XXXX"})}),e.jsx(s,{label:"商業登記",value:e.jsx("span",{className:"text-red",children:"XXXX"})})]}),e.jsx(i,{className:"mt-4",text:"編輯資料",icon:e.jsx(J,{className:"h-6 w-6"}),onClick:()=>{r(`/profile/${c==null?void 0:c.id}/edit`)}}),e.jsx("p",{className:"mt-4 text-sm text-indigo",children:"資料從個人檔案中提取，如需更改，請到該頁編輯。"}),e.jsxs("div",{children:[e.jsx(s,{label:"受託方",value:`${c==null?void 0:c.displayName}(以下簡稱「乙方」) `}),e.jsx(s,{label:"聯絡人",value:e.jsx("span",{className:"text-red",children:"XXXX"})}),e.jsx(s,{label:"聯絡電話",value:e.jsx("span",{className:"text-red",children:"XXXX"})}),e.jsx(s,{label:"電郵地址",value:e.jsx("span",{className:"text-red",children:"XXXX"})}),e.jsx(s,{label:"商業登記",value:e.jsx("span",{className:"text-red",children:"XXXX"})})]}),e.jsxs("p",{className:"mt-4 text-sm text-indigo",children:["資料從",l==null?void 0:l.name,"個人檔案中提取，",l==null?void 0:l.name,"稍後可在草擬中更改。"]})]}),e.jsxs("section",{className:"leading-8",children:[e.jsx(x,{current:2,total:6,title:"合約目的"}),e.jsxs("ol",{className:"ml-4 list-decimal",children:[e.jsx("li",{children:e.jsx(s,{label:"合約目的",value:"項目（電影或電視），某製作公司聘請某編劇寫劇本。"})}),e.jsx("li",{children:e.jsx(s,{label:"版權所屬",value:e.jsx(Y,{name:"copyrightOwner",control:$,rules:{required:"請選擇版權所屬"},render:({field:t})=>e.jsx(H,{...t,options:["情況1：較常見的情況，劇本是委託性質的工作。（commissioned work / work- for-hire） 即原概念是源自某製作公司，編劇是協助完善概念，又或者是編劇是在包薪金的情況下，編劇構思出的概念。以上兩種情況，一般來說，版權屬以投資金錢的付費編劇的電影或製作公司。","情況2：在編劇沒有受聘的情況下，如原概念是源自編劇並且產生，編劇在沒收取過任何人的稿費，則版權屬於編劇本人；如商談拍成電影或電視劇，編劇作為原創者可出售部份或全部版權，跟電影或製作公司商討一個雙方滿意的商業決定及具法律約束力的安排。"],label:"版權所屬",hintText:"（單選）",componentTheme:I,errors:u})})})}),e.jsx("li",{children:e.jsx(s,{label:"意圖",value:"甲方、乙方雙方願意努力完成合約。"})}),e.jsx("li",{children:e.jsx("p",{children:"根據香港特別行政區的法律遵守。"})})]})]}),e.jsxs("section",{className:"leading-8",children:[e.jsx(x,{current:3,total:6,title:"工作內容及要求"}),e.jsxs("ol",{className:"ml-4 list-decimal",children:[e.jsx("li",{children:"乙方編寫原創／改編電影劇本，直至獲得甲方最終認可後形成最終拍攝劇本；"}),e.jsx("li",{children:"乙方要開會和資料蒐集；"}),e.jsx("li",{children:"各階段工作的生效日期。【註：視乎項目規模，通常訂明於半年至一年內完成】"}),e.jsxs("li",{children:["乙方交付的內容：【註：視乎合作形式，可包含以上單一或全部】",e.jsxs("ol",{type:"i",className:"ml-6 list-[lower-roman]",children:[e.jsx("li",{children:"劇本大綱；"}),e.jsx("li",{children:"人物小傳；"}),e.jsx("li",{children:"劇本詳細分場及"}),e.jsx("li",{children:"劇本初稿"}),e.jsx("li",{children:"修改稿 （視乎需要多少稿，因人而異）"}),e.jsx("li",{children:"最終拍攝劇本等"})]})]}),e.jsx("li",{children:"乙方工作是否包括跟場編劇【註：請編劇自行考慮工作和時間成本】"})]})]}),e.jsxs("section",{className:"leading-8",children:[e.jsx(x,{current:4,total:6,title:"工作成果、進度及交付要求"}),e.jsx("p",{children:"乙方須按照如下時間安排和要求向甲方提供下列工作成果（下稱「成果」）："}),e.jsxs("p",{children:["提交日期：合約生效後",e.jsx("span",{className:"text-red",children:"XXXX"}),"星期提交相關內容"]}),e.jsxs("ol",{className:"ml-4 list-decimal",children:[e.jsxs("li",{children:["於",e.jsx("span",{className:"text-red",children:"20XX年X月X日"}),"前，就階段，提交相關內容（如：故事大綱和人物小傳）。為各種內容定下",e.jsx("span",{className:"text-red",children:"XX"}),"字數要求。"]}),e.jsxs("li",{children:["每完成一階段，甲方有",e.jsx("span",{className:"text-red",children:"XX"}),"X日審核和回饋意見。"]}),e.jsxs("li",{children:["甲方回饋意見後，乙方有",e.jsx("span",{className:"text-red",children:"XX"}),"日修改。"]}),e.jsxs("li",{children:["最終拍攝劇本不應少於",e.jsx("span",{className:"text-red",children:"XX"}),"字,並可滿足影片片長不少於",e.jsx("span",{className:"text-red",children:"XX"}),"分鐘之要求。"]}),e.jsx("li",{children:"在創作過程中，如甲方、乙方成員雙方對創作出現意見分歧，以甲方意見為準。"})]}),e.jsxs("div",{children:[e.jsx("span",{children:"拍攝劇本字數不得少於"}),e.jsx(E,{fieldName:"minDurationInMinute",register:g,watch:w,errors:u,placeholder:"請填寫字數",maxLength:10})]}),e.jsxs("div",{children:[e.jsx("span",{children:"可滿足影片片長不少於"}),e.jsx(E,{fieldName:"minDurationInMinute",register:g,watch:w,errors:u,placeholder:"請填寫片長分鐘",maxLength:10})]})]}),e.jsxs("section",{className:"leading-8",children:[e.jsx(x,{current:5,total:6,title:"服務費及支付"}),e.jsxs("ol",{className:"ml-4 list-decimal",children:[e.jsx("li",{children:"甲方同意乙方如約履行相應階段的義務後，按如下比例以轉帳方式分期向乙方支付服務費【應列明含稅與否】"}),e.jsxs("li",{children:["支付方法如下：第一期 ( 開筆費/開會費或傳統稱為「訂金」 ) :",e.jsx("br",{}),e.jsxs("ol",{className:"ml-6 list-[lower-alpha]",children:[e.jsxs("li",{children:["各方簽署生效後",e.jsx("span",{className:"text-red",children:"XX"}),"個工作日內"]}),e.jsxs("li",{children:["支付上述服務費的百份之",e.jsx("span",{className:"text-red",children:"XX"})," ","（",e.jsx("span",{className:"text-red",children:"XX"}),"%），"]}),e.jsxs("li",{children:["即港幣",e.jsx("span",{className:"text-red",children:"XX"}),"元整 （阿拉伯數字",e.jsx("span",{className:"text-red",children:"XX"}),"）。"]})]}),e.jsx("br",{}),"第二期：（如故事大綱 ＋ 人物小傳）: 付款方式參考以上第一期的三個重點。",e.jsx("br",{}),"第三期 : 劇本初稿",e.jsx("br",{}),"第四期 : 劇本二稿",e.jsx("br",{}),"第五期: 最終拍攝稿。【如此類推，視乎雙方定立第幾稿為最終拍攝稿】"]}),e.jsxs("li",{children:["發票：",e.jsxs("ol",{className:"ml-6 list-[lower-alpha]",children:[e.jsx("li",{children:"乙方提供發票以收取每期稿費。"}),e.jsxs("li",{children:["( 如與香港地區以外製作單位合作 ) 乙方須在收到甲方每次付款後",e.jsx("span",{className:"text-red",children:"XX"}),"個工作日內向甲方開具相應金額之有效加值稅專用發票。"]})]})]}),e.jsxs("li",{children:["乙方確認，乙方的帳戶資訊如下所示：",e.jsx("br",{}),"帳號名稱：",e.jsx("span",{className:"text-red",children:"XX"}),e.jsx("br",{}),"開戶銀行：",e.jsx("span",{className:"text-red",children:"XX"}),e.jsx("br",{}),"銀行帳號：",e.jsx("span",{className:"text-red",children:"XX"}),e.jsx("br",{})]})]}),e.jsxs("p",{className:"mt-4 text-sm text-indigo",children:["資料從",l==null?void 0:l.name,"個人檔案中提取，",l==null?void 0:l.name,"稍後可在草擬中更改。"]})]}),e.jsxs("section",{className:"leading-8",children:[e.jsx(x,{current:6,total:6,title:"甲方權利和義務"}),e.jsxs("ol",{className:"ml-4 list-decimal",children:[e.jsx("li",{children:"一般委託劇本情況： 甲方對劇本創作擁有最終決定權。"}),e.jsxs("li",{children:["雙方終止合約時，在甲方提出合理原因的前提下，並經雙方盡一切合理的努力協商後，甲方有權不支付後續任何費用。",e.jsx("br",{}),"情況如：項目停止退進 、編劇不在時限內交稿、編劇工作未合甲方需求。）"]}),e.jsx("li",{children:"編劇署名事宜。"}),e.jsx("li",{children:"甲方有權了解乙方進度。"}),e.jsx("li",{children:"甲方應按照本協議約定向乙方支付相應服務費。"}),e.jsx("li",{children:"乙方保密。"}),e.jsx("li",{children:"乙方的創作內容不侵犯任何第三人權利；"}),e.jsx("li",{children:"乙方成員創作的任何成果應當為乙方成員本人親自完成,不得由他人代為完成。"}),e.jsx("li",{children:"如乙方在履行合約期間受邀為任何第三方創作/編寫/改編相同題材的故事/劇本需通知甲方並獲得甲方同意方可接受。"}),e.jsx("li",{children:"乙方成員在創作過程中遵守職業道德和法律規定，不含誹謗、不剽竊和抄襲或翻譯他人作品。"}),e.jsx("li",{children:"乙方成員是否跟場。（一般是，跟場才列明。）"}),e.jsx("li",{children:"甲方在影片的衍生品。"}),e.jsx("li",{children:"甲方有權轉讓本協定中享有之權利。"}),e.jsx("li",{children:"保證甲方能隨時與乙方成員聯絡。"})]})]}),e.jsxs("section",{className:"flex justify-end gap-x-8 py-10",children:[e.jsx(i,{text:"取消",type:"reset",onClick:()=>m(!0)}),e.jsx(i,{text:"儲存草稿",onClick:()=>{y(B)()}}),e.jsx(i,{className:`${v?"border-indigo bg-indigo":"bg-zinc-400"} text-white`,text:h?"更新合約":"建立合約",disabled:!v,onClick:async()=>{await A()&&L()}})]})]}),e.jsx(O,{isOpen:D,onClose:()=>m(!1),children:e.jsxs("div",{className:"mx-auto flex w-64 flex-col items-center gap-y-2 py-10 text-center",children:[e.jsxs("div",{className:"font-serif text-3xl font-bold",children:["你確定要取消",h?"更新":"建立",e.jsx("br",{}),"新合約嗎？"]}),e.jsx("div",{className:"font-light",children:"3scenes 不會紀錄未儲存資料"}),e.jsxs("div",{className:"flex gap-x-3",children:[e.jsx(i,{text:"繼續建立",type:"button",onClick:()=>m(!1)}),e.jsx(i,{text:"取消建立",type:"button",onClick:()=>r("/dashboard")})]})]})}),e.jsx(O,{isOpen:T,onClose:()=>n(!1),children:e.jsxs("div",{className:"mx-auto flex w-64 flex-col items-center gap-y-2 py-10 text-center",children:[e.jsxs("div",{className:"font-serif text-3xl font-bold",children:["你確定要",h?"更新":"建立",e.jsx("br",{}),"合約嗎？"]}),e.jsx("div",{className:"font-light",children:"徵稿啟事將刊登於 3Scenes 網頁"}),e.jsxs("div",{className:"flex gap-x-3",children:[e.jsx(i,{text:"返回",type:"button",onClick:()=>n(!1)}),e.jsx(i,{className:"border-indigo bg-indigo text-white",text:h?"更新合約":"建立合約",type:"button",onClick:y(P)})]})]})})]})})};export{ae as default};