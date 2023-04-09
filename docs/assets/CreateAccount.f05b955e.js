import{Q as $}from"./QCardSection.9066b7ba.js";import{Q as F,a as s}from"./QForm.a105998f.js";import{i as U,c as g,j as h,k as z,au as A,Q as w,a1 as P,a as T,ai as E,r as D,d as c,w as y,b as I,o as V,f as n,e as u,ak as d,g as b,u as O,h as S}from"./index.18d1490b.js";import{a as L,h as W}from"./use-key-composition.15d2c090.js";import{Q as G}from"./QCard.5bc96ad5.js";import{u as R}from"./use-quasar.e58b7184.js";import"./focus-manager.33224ae2.js";import"./use-dark.aee72fee.js";var J=U({name:"QBtnGroup",props:{unelevated:Boolean,outline:Boolean,flat:Boolean,rounded:Boolean,square:Boolean,push:Boolean,stretch:Boolean,glossy:Boolean,spread:Boolean},setup(o,{slots:m}){const e=g(()=>{const f=["unelevated","outline","flat","rounded","square","push","stretch","glossy"].filter(v=>o[v]===!0).map(v=>`q-btn-group--${v}`).join(" ");return`q-btn-group row no-wrap${f.length>0?" "+f:""}`+(o.spread===!0?" q-btn-group--spread":" inline")});return()=>h("div",{class:e.value},z(m.default))}}),M=U({name:"QBtnToggle",props:{...L,modelValue:{required:!0},options:{type:Array,required:!0,validator:o=>o.every(m=>("label"in m||"icon"in m||"slot"in m)&&"value"in m)},color:String,textColor:String,toggleColor:{type:String,default:"primary"},toggleTextColor:String,outline:Boolean,flat:Boolean,unelevated:Boolean,rounded:Boolean,push:Boolean,glossy:Boolean,size:String,padding:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,readonly:Boolean,disable:Boolean,stack:Boolean,stretch:Boolean,spread:Boolean,clearable:Boolean,ripple:{type:[Boolean,Object],default:!0}},emits:["update:modelValue","clear","click"],setup(o,{slots:m,emit:e}){const f=g(()=>o.options.find(r=>r.value===o.modelValue)!==void 0),v=g(()=>({type:"hidden",name:o.name,value:o.modelValue})),B=W(v),C=g(()=>A(o)),t=g(()=>({rounded:o.rounded,dense:o.dense,...C.value})),a=g(()=>o.options.map((r,p)=>{const{attrs:q,value:x,slot:N,...i}=r;return{slot:N,props:{key:p,"aria-pressed":x===o.modelValue?"true":"false",...q,...i,...t.value,disable:o.disable===!0||i.disable===!0,color:x===o.modelValue?l(i,"toggleColor"):l(i,"color"),textColor:x===o.modelValue?l(i,"toggleTextColor"):l(i,"textColor"),noCaps:l(i,"noCaps")===!0,noWrap:l(i,"noWrap")===!0,size:l(i,"size"),padding:l(i,"padding"),ripple:l(i,"ripple"),stack:l(i,"stack")===!0,stretch:l(i,"stretch")===!0,onClick(j){k(x,r,j)}}}}));function k(r,p,q){o.readonly!==!0&&(o.modelValue===r?o.clearable===!0&&(e("update:modelValue",null,null),e("clear")):e("update:modelValue",r,p),e("click",q))}function l(r,p){return r[p]===void 0?o[p]:r[p]}function Q(){const r=a.value.map(p=>h(w,p.props,p.slot!==void 0?m[p.slot]:void 0));return o.name!==void 0&&o.disable!==!0&&f.value===!0&&B(r,"push"),P(m.default,r)}return()=>h(J,{class:"q-btn-toggle",...C.value,rounded:o.rounded,stretch:o.stretch,glossy:o.glossy,spread:o.spread},Q)}});const H={class:"row"},K=n("div",{class:"col-0 col-sm-5 bg-primary rounded-left-borders xs-hide"},[n("div",{class:"row full-width q-px-xl q-pb-xl full-height flex flex-center"},[n("div",{class:""},[n("div",{class:"text-h4 text-uppercase text-white fredoka",style:{"min-width":"220px"}},"Criar conta"),n("div",{class:"text-white q-my-sm text-subtitle1"},"Informe seus dados para a cria\xE7\xE3o da sua conta de acesso. ")])])],-1),X={class:"col-12 col-sm-7"},Y={class:"row q-ml-sm q-mt-sm sm-and-up-hide"},Z={class:"col-12 fredoka text-subtitle1"},_=S("TCC Eng. Sw. "),ee={class:"row q-pa-sm-sm q-pa-md"},le={class:"col-12"},ae=n("div",{class:"q-pt-lg"},[n("div",{class:"col text-h6 ellipsis flex justify-center"},[n("div",{class:"text-h4 text-uppercase q-my-none text-primary fredoka"},"Criar conta")])],-1),oe={class:"q-mt-lg"},te={class:"q-mt-sm"},ue=S(" Realizar "),ne=S("Login"),Ve={name:"CreateAccount",setup(o){T();const m=E();R();const e=D({tipo:"cliente",nome:null,usuario:null,senha:null,dataNascimento:"2000-01-01",endereco:null,cep:null,email:null,bairro:null,cidade:null,estado:null}),f=g(()=>m.isLoading),v=t=>t.tipo==="cliente",B=t=>t.tipo==="parceiro",C=async()=>{};return(t,a)=>{const k=I("router-link");return V(),c(G,{class:"q-ma-xl"},{default:y(()=>[n("div",H,[K,n("div",X,[n("div",Y,[n("div",Z,[u(k,{class:"text-primary",style:{"text-decoration":"none"},to:"/"},{default:y(()=>[_]),_:1})])]),n("div",ee,[n("div",le,[u($,null,{default:y(()=>[ae]),_:1}),u($,null,{default:y(()=>[u(F,{class:"q-gutter-md",onSubmit:C},{default:y(()=>[u(s,d({modelValue:e.value.usuario,"onUpdate:modelValue":a[0]||(a[0]=l=>e.value.usuario=l),label:"Nome de usu\xE1rio",type:"text"},t.$input),null,16,["modelValue"]),u(s,d({modelValue:e.value.senha,"onUpdate:modelValue":a[1]||(a[1]=l=>e.value.senha=l),label:"Senha",type:"password"},t.$input),null,16,["modelValue"]),u(s,d({modelValue:e.value.email,"onUpdate:modelValue":a[2]||(a[2]=l=>e.value.email=l),label:"Email",type:"email"},t.$input),null,16,["modelValue"]),u(s,d({modelValue:e.value.numeroCelular,"onUpdate:modelValue":a[3]||(a[3]=l=>e.value.numeroCelular=l),label:"Contato",type:"tel",mask:"(###) #####-####","fill-mask":"0","reverse-fill-mask":""},t.$input),null,16,["modelValue"]),u(M,{modelValue:e.value.tipo,"onUpdate:modelValue":a[4]||(a[4]=l=>e.value.tipo=l),spread:"",class:"my-custom-toggle","no-caps":"",rounded:"",unelevated:"","toggle-color":"primary",color:"white","text-color":"primary",options:[{label:"Sou cliente",value:"cliente"},{label:"Sou parceiro",value:"parceiro"}]},null,8,["modelValue"]),v(e.value)?(V(),c(s,d({key:0,modelValue:e.value.nome,"onUpdate:modelValue":a[5]||(a[5]=l=>e.value.nome=l),label:"Nome completo",type:"text"},t.$input),null,16,["modelValue"])):b("",!0),v(e.value)?(V(),c(s,d({key:1,modelValue:e.value.cpf,"onUpdate:modelValue":a[6]||(a[6]=l=>e.value.cpf=l),label:"CPF",mask:"###.###.###-##","fill-mask":"0","reverse-fill-mask":"",type:"text"},t.$input),null,16,["modelValue"])):b("",!0),v(e.value)?(V(),c(s,d({key:2,modelValue:e.value.dataNascimento,"onUpdate:modelValue":a[7]||(a[7]=l=>e.value.dataNascimento=l),label:"Data de nascimento",type:"date"},t.$input),null,16,["modelValue"])):b("",!0),B(e.value)?(V(),c(s,d({key:3,modelValue:e.value.razaoSocial,"onUpdate:modelValue":a[8]||(a[8]=l=>e.value.razaoSocial=l),label:"Raz\xE3o social",type:"text"},t.$input),null,16,["modelValue"])):b("",!0),B(e.value)?(V(),c(s,d({key:4,modelValue:e.value.nomeFantasia,"onUpdate:modelValue":a[9]||(a[9]=l=>e.value.nomeFantasia=l),label:"Nome fantasia",type:"text"},t.$input),null,16,["modelValue"])):b("",!0),B(e.value)?(V(),c(s,d({key:5,modelValue:e.value.cnpj,"onUpdate:modelValue":a[10]||(a[10]=l=>e.value.cnpj=l),label:"CNPJ",type:"text"},t.$input),null,16,["modelValue"])):b("",!0),u(s,d({modelValue:e.value.cep,"onUpdate:modelValue":a[11]||(a[11]=l=>e.value.cep=l),label:"CEP",mask:"#####-###",type:"text"},t.$input),null,16,["modelValue"]),u(s,d({modelValue:e.value.logradouro,"onUpdate:modelValue":a[12]||(a[12]=l=>e.value.logradouro=l),label:"Logradouro",type:"text"},t.$input),null,16,["modelValue"]),u(s,d({modelValue:e.value.bairro,"onUpdate:modelValue":a[13]||(a[13]=l=>e.value.bairro=l),label:"Bairro",type:"text"},t.$input),null,16,["modelValue"]),u(s,d({modelValue:e.value.cidade,"onUpdate:modelValue":a[14]||(a[14]=l=>e.value.cidade=l),label:"Cidade",type:"text"},t.$input),null,16,["modelValue"]),u(s,d({modelValue:e.value.estado,"onUpdate:modelValue":a[15]||(a[15]=l=>e.value.estado=l),label:"Estado",type:"email"},t.$input),null,16,["modelValue"]),u(s,d({modelValue:e.value.numero,"onUpdate:modelValue":a[16]||(a[16]=l=>e.value.numero=l),label:"N\xFAmero",type:"number"},t.$input),null,16,["modelValue"]),n("div",null,[u(w,{loading:O(f),class:"full-width",to:"/login",color:"primary",label:"Enviar",rounded:"",type:"submit"},null,8,["loading"]),n("div",oe,[n("div",te,[ue,u(k,{class:"text-primary",to:"/login"},{default:y(()=>[ne]),_:1})])])])]),_:1})]),_:1})])])])])]),_:1})}}};export{Ve as default};
