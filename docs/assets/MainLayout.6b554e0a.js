import{ac as y,a6 as C,o,d as n,w as t,e,af as L,g as d,h as l,ae as h,a as S,ad as T,r as V,b as k,Q as c,f as $,u as v,a4 as D,aw as B,ax as F,aj as I}from"./index.f5414618.js";import{Q as N}from"./QToolbarTitle.e81bf757.js";import{c as g,b as x,Q as E,a as A,d as M}from"./QDrawer.e4f738ad.js";import{a as p,Q as j}from"./QList.4eeb9df3.js";import{a as G,Q as H}from"./QLayout.f10e9890.js";import"./use-dark.8a13ec11.js";const O=y({name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""}}});function P(a,i,f,m,u,r){return o(),n(x,{clickable:"",tag:"a",target:"_blank",href:a.link},{default:t(()=>[a.icon?(o(),n(g,{key:0,avatar:""},{default:t(()=>[e(L,{name:a.icon},null,8,["name"])]),_:1})):d("",!0),e(g,null,{default:t(()=>[e(p,null,{default:t(()=>[l(h(a.title),1)]),_:1}),e(p,{caption:""},{default:t(()=>[l(h(a.caption),1)]),_:1})]),_:1})]),_:1},8,["href"])}var U=C(O,[["render",P]]);const R=l(" TCC Eng. Sw. "),z=l(" Menu "),te={name:"MainLayout",setup(a){const i=S(),f=T(),m=[{title:"Docs",caption:"quasar.dev",icon:"school",link:"https://quasar.dev"},{title:"Github",caption:"github.com/quasarframework",icon:"code",link:"https://github.com/quasarframework"},{title:"Discord Chat Channel",caption:"chat.quasar.dev",icon:"chat",link:"https://chat.quasar.dev"},{title:"Forum",caption:"forum.quasar.dev",icon:"record_voice_over",link:"https://forum.quasar.dev"},{title:"Twitter",caption:"@quasarframework",icon:"rss_feed",link:"https://twitter.quasar.dev"},{title:"Facebook",caption:"@QuasarFramework",icon:"public",link:"https://facebook.quasar.dev"},{title:"Quasar Awesome",caption:"Community Quasar projects",icon:"favorite",link:"https://awesome.quasar.dev"}],u=i.isAuthenticated,r=V(!1),w=()=>r.value=!r.value,Q=()=>{i.SIGN_OUT(),f.push("/")};return(J,_)=>{const b=k("router-link"),q=k("router-view");return o(),n(G,{view:"lHh Lpr lFf"},{default:t(()=>[e(A,{elevated:""},{default:t(()=>[e(E,null,{default:t(()=>[e(c,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:w}),e(N,null,{default:t(()=>[e(b,{to:"/",style:{"text-decoration":"none",cursor:"pointer"},class:"text-white"},{default:t(()=>[R]),_:1})]),_:1}),$("div",null,[v(u)?d("",!0):(o(),n(c,{key:0,flat:"",dense:"",label:"Login",to:"/login"})),v(u)?(o(),n(c,{key:1,flat:"",dense:"",label:"Logout",onClick:Q,id:"logout-button"})):d("",!0)])]),_:1})]),_:1}),e(M,{modelValue:r.value,"onUpdate:modelValue":_[0]||(_[0]=s=>r.value=s),bordered:"","show-if-above":""},{default:t(()=>[e(j,null,{default:t(()=>[e(p,{header:""},{default:t(()=>[z]),_:1}),(o(),D(F,null,B(m,s=>e(U,I({key:s.title},s),null,16)),64))]),_:1})]),_:1},8,["modelValue"]),e(H,null,{default:t(()=>[e(q)]),_:1})]),_:1})}}};export{te as default};