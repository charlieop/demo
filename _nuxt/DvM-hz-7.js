import{u as g,_ as y,a as b}from"./0j5ONxpu.js";import{_ as $,Y as S,Z as w,i as d,j as M,c as F,u as N,a as e,t as a,w as V,f as r,C as k,$ as l,a0 as B,x as c,F as q,o as C}from"./B_ARMfby.js";const D={class:"index-wrapper"},E={class:"index-model"},I={class:"form-group"},L=["placeholder"],R={for:"code-input"},j=["disabled"],P={class:"index-overlay"},T={__name:"index",setup(U){const m=S(),p=g(),f=w();function v(){m.open(y,{})}const t=d(""),_=M(()=>t.value.length===4&&!isNaN(t.value)),n=d(!1),i=d(!1);async function x(){i.value=!1,n.value=!0;const s=t.value;await p.fetchSummary(s)?(n.value=!1,f.push(`summaries/${s}`)):(n.value=!1,i.value=!0)}return(s,o)=>{const h=b;return C(),F(q,null,[N(h,{class:"settings",onClick:v}),e("div",D,[e("div",E,[e("h1",null,a(s.$t("index.title")),1),e("form",{onSubmit:o[1]||(o[1]=V(u=>x(),["prevent"]))},[e("div",I,[r(e("input",{id:"code-input",type:"text",placeholder:s.$t("index.codePlaceholder"),minlength:"4",maxlength:"4",required:"","onUpdate:modelValue":o[0]||(o[0]=u=>B(t)?t.value=u:null)},null,8,L),[[k,l(t)]]),e("label",R,a(s.$t("index.codeLabel")),1),e("button",{type:"submit",class:"primary",disabled:!l(_)},a(s.$t("index.submit")),9,j)])],32),r(e("div",{class:"error-msg"},a(s.$t("index.errorMsg")),513),[[c,l(i)]])])]),o[3]||(o[3]=e("div",{class:"index-bg"},null,-1)),r(e("div",P,[e("h2",null,a(s.$t("index.loading"))+"...",1),o[2]||(o[2]=e("div",{class:"index-loader"},null,-1))],512),[[c,l(n)]])],64)}}},z=$(T,[["__scopeId","data-v-02f51fe9"]]);export{z as default};