import{Q as x,a as u}from"./QForm.526e627e.js";import{a as v,ah as w,ad as q,ai as g,a1 as y,c as m,d as b,w as t,b as C,o as k,f as s,e,aj as _,u as d,Q as S,h as o}from"./index.b9dadcd4.js";import{Q as V,a as Q}from"./QCard.774202d0.js";import{r as n}from"./fieldRules.141a7f49.js";import{s as B}from"./notification.b77fc569.js";import"./use-dark.5ee3a7de.js";const E={class:"row"},L={class:"col-0 col-sm-5 bg-primary rounded-left-borders xs-hide"},N={class:"row q-ml-sm q-mt-sm"},U={class:"col-12 fredoka text-subtitle1"},$=o("TCC Eng. Sw. "),z=s("div",{class:"row full-width q-px-xl q-pb-xl full-height flex flex-center"},[s("div",{class:""},[s("div",{class:"text-h4 text-uppercase text-white fredoka",style:{"min-width":"220px"}},"Bem vindo!"),s("div",{class:"text-white q-my-sm text-subtitle1"},"Informe suas credenciais para realizar login!")])],-1),P={class:"col-12 col-sm-7"},T={class:"row q-ml-sm q-mt-sm sm-and-up-hide"},j={class:"col-12 fredoka text-subtitle1"},F=o(" TCC Eng. Sw. "),I={class:"row q-pa-sm-sm q-pa-md"},R={class:"col-12"},A=s("div",{class:"q-mb-xl"},[s("div",{class:"flex justify-center"},[s("div",{class:"text-h4 text-uppercase q-my-none text-weight-bold text-primary fredoka"},"Login")])],-1),D={class:"q-mt-lg"},G={class:"q-mt-sm"},H=o(" Ainda n\xE3o possui uma conta? "),J=o("Cadastrar-se"),K={class:"q-mt-sm"},M=o(" Esqueceu a senha? Clique "),O=o("aqui!"),os={name:"LoginPage",setup(W){const p=v(),h=w();q(),g();const a=y({});m(()=>p.getUser),m(()=>h.isLoading);const f=async()=>{B("Usu\xE1rio logado com sucesso")};return(c,l)=>{const r=C("router-link");return k(),b(V,{class:"q-ma-xl"},{default:t(()=>[s("div",E,[s("div",L,[s("div",N,[s("div",U,[e(r,{class:"text-white",style:{"text-decoration":"none"},to:"/"},{default:t(()=>[$]),_:1})])]),z]),s("div",P,[s("div",T,[s("div",j,[e(r,{class:"text-primary",style:{"text-decoration":"none"},to:"/"},{default:t(()=>[F]),_:1})])]),s("div",I,[s("div",R,[e(Q,null,{default:t(()=>[A,e(x,{class:"q-gutter-md",onSubmit:f},{default:t(()=>[e(u,_({modelValue:a.username,"onUpdate:modelValue":l[0]||(l[0]=i=>a.username=i),rules:[d(n).required],label:"Nome de usu\xE1rio","lazy-rules":"",name:"username"},c.$input),null,16,["modelValue","rules"]),e(u,_({modelValue:a.password,"onUpdate:modelValue":l[1]||(l[1]=i=>a.password=i),rules:[d(n).required,d(n).minLength(6)],label:"Senha","lazy-rules":"",name:"password",type:"password"},c.$input),null,16,["modelValue","rules"]),s("div",null,[e(S,{class:"full-width fredoka",color:"primary",label:"Entrar",rounded:""}),s("div",D,[s("div",G,[H,e(r,{class:"text-primary",to:"/create-account"},{default:t(()=>[J]),_:1})]),s("div",K,[M,e(r,{class:"text-primary",to:"/forgot-password"},{default:t(()=>[O]),_:1})])])])]),_:1})]),_:1})])])])])]),_:1})}}};export{os as default};
