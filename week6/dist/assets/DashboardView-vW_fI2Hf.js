import{a as c}from"./axios-G2rPRu76.js";import{_,c as u,a as e,b as a,w as s,q as p,g as m,F as h,r,o as i,d as o}from"./index-ZwFETGbo.js";var v={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"ryanpro",BASE_URL:"/vue_winter_practise/week6/dist/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_APP_URL:f}=v,g={data(){return{products:[],tempProduct:{imagesUrl:[]},success:!1}},methods:{checkLogin(){c.post(`${f}/api/user/check`).then(()=>{this.success=!0}).catch(()=>{this.$router.push("/login")})}},mounted(){const n=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,"$1");c.defaults.headers.common.Authorization=n,this.checkLogin()}},b={class:"navbar navbar-expand-lg bg-body-tertiary"},k={class:"container-fluid"},V=e("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[e("span",{class:"navbar-toggler-icon"})],-1),x={class:"navbar-nav me-auto mb-2 mb-lg-0"},P={class:"nav-item"},R={class:"nav-item"},$={class:"nav-item"},w={class:"nav-item"},E=e("h2",null,"這是後台",-1);function L(n,T,A,y,l,B){const t=r("RouterLink"),d=r("RouterView");return i(),u(h,null,[e("nav",b,[e("div",k,[V,e("ul",x,[e("li",P,[a(t,{class:"nav-link",to:"/admin/products"},{default:s(()=>[o("產品列表")]),_:1})]),e("li",R,[a(t,{class:"nav-link",to:""},{default:s(()=>[o("優惠券")]),_:1})]),e("li",$,[a(t,{class:"nav-link",to:"/admin/order"},{default:s(()=>[o("訂單管理")]),_:1})])]),e("div",null,[e("div",w,[a(t,{class:"nav-link",to:"/"},{default:s(()=>[o("回到前台")]),_:1})])])])]),E,l.success===!0?(i(),p(d,{key:0})):m("",!0)],64)}const D=_(g,[["render",L]]);export{D as default};
