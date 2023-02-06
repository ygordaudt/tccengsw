import{Q as _,a as r}from"./QCard.774202d0.js";import{Q as h,a as f}from"./QForm.526e627e.js";import{a as x,ah as v,r as g,c as q,d as w,w as t,b as y,o as b,f as s,e,aj as k,u as d,Q,h as a}from"./index.b9dadcd4.js";import{u as C}from"./use-quasar.d9afca8e.js";import{r as S}from"./fieldRules.141a7f49.js";import{s as V}from"./notification.b77fc569.js";import"./use-dark.5ee3a7de.js";const E={class:"row"},B=s("div",{class:"col-0 col-sm-5 bg-primary rounded-left-borders xs-hide"},[s("div",{class:"row full-width q-px-xl q-pb-xl full-height flex flex-center"},[s("div",{class:""},[s("div",{class:"text-h4 text-uppercase text-white fredoka",style:{"min-width":"220px"}},"Esqueceu a senha?"),s("div",{class:"text-white q-my-sm text-subtitle1"},"Informe seu e-mail para enviarmos o link de redefini\xE7\xE3o da senha! ")])])],-1),F={class:"col-12 col-sm-7"},N={class:"row q-ml-sm q-mt-sm sm-and-up-hide"},P={class:"col-12 fredoka text-subtitle1"},j=a("TCC Eng. Sw. "),z={class:"row q-pa-sm-sm q-pa-md"},I={class:"col-12"},L=s("div",{class:"q-pt-lg"},[s("div",{class:"col text-h6 ellipsis flex justify-center"},[s("div",{class:"text-h4 text-uppercase q-my-none text-primary fredoka"},"Resetar senha")])],-1),R={class:"q-mt-lg"},T={class:"q-mt-sm"},U=a(" Realizar "),$=a("Login"),W={name:"ForgotPassword",setup(O){x();const n=v();C();const o=g(""),c=q(()=>n.isLoading),m=async()=>{V("Um link para redefinir sua senha foi enviado para seu e-mail! O E-mail pode demorar alguns minutos para chegar.")};return(u,l)=>{const i=y("router-link");return b(),w(_,{class:"q-ma-xl"},{default:t(()=>[s("div",E,[B,s("div",F,[s("div",N,[s("div",P,[e(i,{class:"text-primary",style:{"text-decoration":"none"},to:"/"},{default:t(()=>[j]),_:1})])]),s("div",z,[s("div",I,[e(r,null,{default:t(()=>[L]),_:1}),e(r,null,{default:t(()=>[e(h,{class:"q-gutter-md",onSubmit:m},{default:t(()=>[e(f,k({modelValue:o.value,"onUpdate:modelValue":l[0]||(l[0]=p=>o.value=p),rules:[d(S).required],label:"Email","lazy-rules":"",type:"email"},u.$input),null,16,["modelValue","rules"]),s("div",null,[e(Q,{loading:d(c),class:"full-width",color:"primary",label:"Enviar",rounded:"",type:"submit"},null,8,["loading"]),s("div",R,[s("div",T,[U,e(i,{class:"text-primary",to:"/login"},{default:t(()=>[$]),_:1})])])])]),_:1})]),_:1})])])])])]),_:1})}}};export{W as default};
