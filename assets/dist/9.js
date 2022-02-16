"use strict";(self.webpackChunkTheme_One=self.webpackChunkTheme_One||[]).push([[9],{9:(t,e,s)=>{s.r(e),s.d(e,{salla_rating:()=>i});var a=s(378),r=s(863);const i=class{constructor(t){(0,a.r)(this,t),this.stepsCount=0,this.currentIndex=0,this.submitted=[],this.rate_the_store=salla.lang.get("pages.rating.rate_the_store"),this.write_store_rate=salla.lang.get("pages.rating.write_store_rate"),this.rate_product_stars=salla.lang.get("pages.rating.rate_product_stars"),this.write_product_rate=salla.lang.get("pages.rating.write_product_rate"),this.rate_shipping=salla.lang.get("pages.rating.rate_shipping"),this.write_shipping_rate=salla.lang.get("pages.rating.write_shipping_rate"),this.thanks=salla.lang.get("pages.rating.thanks"),this.back=salla.lang.get("common.elements.back"),this.next=salla.lang.get("common.elements.next"),r.H.setHost(this.host),salla.event.on("rating::show",(()=>this.show())),salla.event.on("languages::translations.loaded",(()=>{this.rate_the_store=salla.lang.get("pages.rating.rate_the_store"),this.write_store_rate=salla.lang.get("pages.rating.write_store_rate"),this.rate_product_stars=salla.lang.get("pages.rating.rate_product_stars"),this.write_product_rate=salla.lang.get("pages.rating.write_product_rate"),this.rate_shipping=salla.lang.get("pages.rating.rate_shipping"),this.write_shipping_rate=salla.lang.get("pages.rating.write_shipping_rate"),this.thanks=salla.lang.get("pages.rating.thanks"),this.back=salla.lang.get("common.elements.back"),this.next=salla.lang.get("common.elements.next")}))}async show(){return this.modal.show().then((()=>this.order||salla.feedback.api.order(salla.config.get("page.id")).then((t=>this.order=t.data)))).then((()=>this.modal.setTitle(salla.lang.get("pages.rating.rate_order")+' <span class="unicode">(#'+this.order.id+")</span>"))).then((()=>this.modal.stopLoading())).then((()=>this.stepsCount=[this.order.testimonials_enabled,this.order.products_enabled,this.order.shipping_enabled].filter((t=>t)).length)).then((()=>setTimeout((()=>this.initiateRating()),100)))}async hide(){return this.modal.hide()}initiateRating(){this.handleWizard(),this.highlightSelectedStars(),salla.document.event.onSubmit(".s-rating-stars-element",(function(t){t.preventDefault();let e=t.target.querySelectorAll(".s-rating-btn-star.hovered"),s=e[e.length-1];if(!s)return;let a=parseInt(s.dataset.star,10);t.target.querySelector(".rating_hidden_input").value=a,t.target.querySelectorAll(".s-rating-btn-star").forEach(((t,e)=>r.H.toggleElement(t,"selected","un-selected",(()=>e<a)))),t.target.querySelectorAll('.s-rating-btn-star[aria-pressed="true"]').forEach((t=>t.removeAttribute("aria-pressed"))),s.setAttribute("aria-pressed","")}))}handleWizard(){this.steps=this.host.querySelectorAll(".s-rating-step"),this.dots=this.host.querySelectorAll(".s-rating-step-dot"),this.showActiveStep()}showActiveStep(t=null){var e;this.currentTab=t||this.steps[this.currentIndex],r.H.toggle(".s-rating-step-dot","s-rating-bg-gray","s-rating-bg-primary",(t=>t!=this.dots[this.currentIndex])).toggle(".s-rating-step","s-rating-active","s-rating-hidden",(t=>t==this.currentTab)),0!=this.currentIndex&&(r.H.toggleElement(this.currentTab,"s-rating-unactive","s-rating-hidden",(()=>!0)),setTimeout((()=>r.H.toggleElement(this.currentTab,"s-rating-active","s-rating-unactive",(()=>!0))),300));let s=null===(e=this.steps[this.currentIndex+1])||void 0===e?void 0:e.dataset.type;this.nextBtn.querySelector(".s-button-text").innerHTML=s?salla.lang.get("pages.rating.rate")+" "+salla.lang.get("pages.rating."+s):salla.lang.get("pages.rating.send_ratings"),setTimeout((()=>{var t;return this.body.setAttribute("style","height:"+(null===(t=this.currentTab)||void 0===t?void 0:t.scrollHeight)+"px")}))}highlightSelectedStars(){let t=["hovered"];r.H.all(".s-rating-stars-element",(e=>{let s=e.querySelectorAll(".s-rating-btn-star");e.addEventListener("mouseout",(()=>s.forEach((e=>e.classList.remove(...t))))),s.forEach(((e,a)=>{e.addEventListener("mouseover",(()=>{if(e.classList.add(...t),a<=1)"BUTTON"===e.previousElementSibling.tagName&&e.previousElementSibling.classList.add(...t);else for(let e=0;e<a;e++)s[e].classList.add(...t)})),e.addEventListener("mouseout",(()=>e.classList.remove(...t)))}))}))}previousTab(){this.currentIndex>0&&this.currentIndex--,r.H.toggleElement(this.backBtn,"s-rating-unvisiable","block",(()=>0==this.currentIndex)),this.showActiveStep()}submit(){this.submittedBefore()||this.validate(),salla.config.canLeave=!1,this.nextBtn.load().then((()=>this.submittedBefore()||this.sendFeedback())).then((()=>this.currentTab.querySelectorAll("[name],.s-rating-btn-star").forEach((t=>t.setAttribute("disabled",""))))).then((()=>this.currentIndex<this.stepsCount&&this.currentIndex++)).then((()=>this.showActiveStep())).then((()=>r.H.toggle("#prev-btn","block","s-rating-unvisiable",(()=>!0)))).finally((()=>{this.nextBtn.stop(),salla.config.canLeave=!0,this.currentIndex==this.stepsCount&&this.showThankYou(),this.modal.isClosable=!1}))}submittedBefore(){return this.submitted.includes(this.currentIndex)}validate(t=null,e=null){if(!t&&"products"==this.currentTab.dataset.type)return this.currentTab.querySelectorAll(".rating-outer-form").forEach((t=>this.validate(t,"product")));let s=(t=t||this.currentTab).querySelector(".rating_hidden_input").value,a=t.querySelector(".s-rating-comment"),i=t.querySelector(".s-rating-validation-msg");if(s&&a.value&&a.value.length>3)return a.classList.remove("s-rating-has-error"),void(i.innerHTML="");throw e=e||t.dataset.type,r.H.toggleElement(a,"save","s-rating-has-error",(t=>t.value.length>3)),i.innerHTML=s?salla.lang.get("common.errors.not_less_than_chars",{chars:4})+" "+a.getAttribute("placeholder"):salla.lang.get(`pages.rating.rate_${e}_stars`).replace(" (:item)","")}sendFeedback(){let t={};if(this.currentTab.querySelectorAll("[name]").forEach((e=>{let s=salla.helpers.inputData(e.name,e.value,t);t[s.name]=s.value})),0!=Object.keys(t).length)return t.order_id=salla.config.get("page.id"),t.type=this.currentTab.dataset.type,this.submitted.push(this.currentIndex),salla.feedback.api[this.currentTab.dataset.type](t)}showThankYou(){let t=10,e=setInterval((()=>{this.thanksTime.innerHTML="00:0"+t--,t>0||(clearInterval(e),this.thanksTime.remove(),this.hide().then((()=>window.location.reload())))}),1e3);this.host.querySelector(".s-rating-footer").classList.add("s-rating-unvisiable"),this.showActiveStep(this.thanksTab)}renderRatingStars(t,e="rating"){return(0,a.h)("form",{class:"s-rating-stars-element"},(0,a.h)("input",{type:"hidden",class:"rating_hidden_input",name:e,value:""}),[1,2,3,4,5].map((e=>(0,a.h)("button",{type:"submit",class:"s-rating-btn-star s-rating-btn-star-"+t,"data-star":e},(0,a.h)("i",{class:"sicon-star2"})))))}render(){return(0,a.h)(a.H,null,(0,a.h)("salla-modal",{isLoading:!0,width:"md",ref:t=>this.modal=t},this.order?[(0,a.h)("div",{class:"s-rating-wrapper",ref:t=>this.body=t},this.order.testimonials_enabled?(0,a.h)("div",{class:"rating-outer-form s-rating-step-wrap s-rating-step s-rating-hidden","data-type":"store"},(0,a.h)("div",{class:"s-rating-rounded-icon"},(0,a.h)("img",{src:salla.config.get("store.logo","https://assets.salla.sa/cp/assets/images/logo-new.png"),alt:"store name",class:"s-rating-store-logo"})),(0,a.h)("h2",{class:"s-rating-title"},this.rate_the_store),(0,a.h)("div",{class:"s-rating-stars-company"}," ",this.renderRatingStars("large")),(0,a.h)("textarea",{id:"storeReview",name:"comment",class:"s-rating-comment",placeholder:this.write_store_rate}),(0,a.h)("small",{class:"s-rating-validation-msg"})):"",this.order.products_enabled?(0,a.h)("section",{class:"s-rating-step s-rating-hidden","data-type":"products"},this.order.products.map(((t,e)=>(0,a.h)("div",{class:"rating-outer-form s-rating-product","data-stars-error":this.rate_product_stars},(0,a.h)("img",{src:t.product.thumbnail,alt:t.product.name,class:"s-rating-product-img"}),(0,a.h)("div",{class:"s-rating-product-details"},(0,a.h)("h3",{class:"s-rating-product-title"}," ",t.product.name),(0,a.h)("div",{class:"s-rating-stars-product"}," ",this.renderRatingStars("small",`products[${e}][rating]`)),(0,a.h)("input",{type:"hidden",name:`products[${e}][product_id]`,value:t.product.id}),(0,a.h)("textarea",{placeholder:this.write_product_rate,name:`products[${e}][comment]`,class:"s-rating-comment"}),(0,a.h)("small",{class:"s-rating-validation-msg"})))))):"",this.order.shipping_enabled?(0,a.h)("div",{class:"rating-outer-form s-rating-step-wrap s-rating-step s-rating-hidden","data-type":"shipping"},(0,a.h)("input",{type:"hidden",name:"shipping_company_id",value:this.order.shipping.company.id}),this.order.shipping.company.logo?(0,a.h)("div",{class:"s-rating-rounded-icon"},(0,a.h)("img",{src:this.order.shipping.company.logo,class:"s-rating-shipping-logo",alt:this.order.shipping.company.name})):(0,a.h)("span",{class:"s-rating-icon sicon-shipping-fast"}),(0,a.h)("div",{class:"s-rating-title"}," ",this.rate_shipping+" "+this.order.shipping.company.name),(0,a.h)("div",{class:"s-rating-stars-company"},this.renderRatingStars("large")),(0,a.h)("textarea",{name:"comment",class:"s-rating-comment",placeholder:this.write_shipping_rate}),(0,a.h)("small",{class:"s-rating-validation-msg"})):"",(0,a.h)("div",{class:"s-rating-thanks s-rating-hidden",ref:t=>this.thanksTab=t},(0,a.h)("span",{class:"s-rating-icon sicon-check-circle2"}),(0,a.h)("h3",{class:"s-rating-thanks-title"},this.thanks),(0,a.h)("div",{class:"s-rating-thanks-msg",innerHTML:this.order.thanks_message}),(0,a.h)("time",{class:"s-rating-thanks-time",ref:t=>this.thanksTime=t}))),(0,a.h)("div",{class:"s-rating-footer"},(0,a.h)("button",{ref:t=>this.backBtn=t,onClick:()=>this.previousTab(),class:"s-rating-btn s-rating-unvisiable"},this.back),this.stepsCount>1?(0,a.h)("ul",{class:"s-rating-dots"},[0,1,2].slice(0,this.stepsCount).map((()=>(0,a.h)("li",{class:"s-rating-bg-gray s-rating-step-dot"})))):"",(0,a.h)("salla-button",{"loader-position":"center",ref:t=>this.nextBtn=t,onClick:()=>this.submit()},this.next))]:""))}componentDidRender(){this.modal.querySelectorAll("[hidden]").forEach((t=>t.removeAttribute("hidden")))}componentDidLoad(){salla.event.dispatch("rating::ready",this)}get host(){return(0,a.g)(this)}};i.style=":host{display:block}.unicode{unicode-bidi:plaintext}"},863:(t,e,s)=>{s.d(e,{H:()=>r}),salla.event.setMaxListeners(20);class a extends salla.AppHelpers{setHost(t){this.host=t}getElement(t){return this.host.querySelector(t)}getAttribute(t,e){var s;return null===(s=this.getElement(t))||void 0===s?void 0:s.getAttribute(e)}val(t){return this.getAttribute(t,"value")}isUser(){return"user"===salla.config.get("user.type")}}const r=new a}}]);