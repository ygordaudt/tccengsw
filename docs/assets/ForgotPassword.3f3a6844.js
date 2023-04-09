import{Q as r}from"./QCardSection.9066b7ba.js";import{Q as _,a as f}from"./QForm.a105998f.js";import{a as h,ai as x,r as v,c as g,d as q,w as t,b as w,o as y,f as s,e,ak as b,u as d,Q as k,h as o}from"./index.18d1490b.js";import{Q}from"./QCard.5bc96ad5.js";import{u as C}from"./use-quasar.e58b7184.js";import{r as S}from"./fieldRules.141a7f49.js";import{s as V}from"./notification.26ec9410.js";import"./use-key-composition.15d2c090.js";import"./use-dark.aee72fee.js";import"./focus-manager.33224ae2.js";const E={class:"row"},B=s("div",{class:"col-0 col-sm-5 bg-primary rounded-left-borders xs-hide"},[s("div",{class:"row full-width q-px-xl q-pb-xl full-height flex flex-center"},[s("div",{class:""},[s("div",{class:"text-h4 text-uppercase text-white fredoka",style:{"min-width":"220px"}},"Esqueceu a senha?"),s("div",{class:"text-white q-my-sm text-subtitle1"},"Informe seu e-mail para enviarmos o link de redefini\xE7\xE3o da senha! ")])])],-1),F={class:"col-12 col-sm-7"},N={class:"row q-ml-sm q-mt-sm sm-and-up-hide"},P={class:"col-12 fredoka text-subtitle1"},z=o("TCC Eng. Sw. "),I={class:"row q-pa-sm-sm q-pa-md"},L={class:"col-12"},R=s("div",{class:"q-pt-lg"},[s("div",{class:"col text-h6 ellipsis flex justify-center"},[s("div",{class:"text-h4 text-uppercase q-my-none text-primary fredoka"},"Resetar senha")])],-1),T={class:"q-mt-lg"},U={class:"q-mt-sm"},$=o(" Realizar "),j=o("Login"),Z={name:"ForgotPassword",setup(O){h();const n=x();C();const a=v(""),m=g(()=>n.isLoading),c=async()=>{V("Um link para redefinir sua senha foi enviado para seu e-mail! O E-mail pode demorar alguns minutos para chegar.")};return(u,l)=>{const i=w("router-link");return y(),q(Q,{class:"q-ma-xl"},{default:t(()=>[s("div",E,[B,s("div",F,[s("div",N,[s("div",P,[e(i,{class:"text-primary",style:{"text-decoration":"none"},to:"/"},{default:t(()=>[z]),_:1})])]),s("div",I,[s("div",L,[e(r,null,{default:t(()=>[R]),_:1}),e(r,null,{default:t(()=>[e(_,{class:"q-gutter-md",onSubmit:c},{default:t(()=>[e(f,b({modelValue:a.value,"onUpdate:modelValue":l[0]||(l[0]=p=>a.value=p),rules:[d(S).required],label:"Email","lazy-rules":"",type:"email"},u.$input),null,16,["modelValue","rules"]),s("div",null,[e(k,{loading:d(m),class:"full-width",color:"primary",label:"Enviar",rounded:"",type:"submit"},null,8,["loading"]),s("div",T,[s("div",U,[$,e(i,{class:"text-primary",to:"/login"},{default:t(()=>[j]),_:1})])])])]),_:1})]),_:1})])])])])]),_:1})}}};export{Z as default};
