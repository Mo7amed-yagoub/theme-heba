"use strict";(self.webpackChunkTheme_One=self.webpackChunkTheme_One||[]).push([[167],{132:(e,a,l)=>{l.d(a,{H:()=>t});class s extends salla.AppHelpers{setHost(e){this.host=e}getElement(e){return this.host.querySelector(e)}getAttribute(e,a){var l;return null===(l=this.getElement(e))||void 0===l?void 0:l.getAttribute(a)}val(e){return this.getAttribute(e,"value")}isUser(){return"user"===salla.config.get("user.type")}}const t=new s},18:(e,a,l)=>{l.r(a),l.d(a,{salla_localization:()=>n});var s=l(378),t=l(132);const n=class{constructor(e){var a,l;(0,s.r)(this,e),this.language=salla.config.get("language",{}),this.currency=salla.config.get("currency",{}),t.H.setHost(this.host),salla.event.on("localization::show",(()=>this.show())),salla.event.on("languages::translations.loaded",(()=>{this.languagesTitle=salla.lang.get("common.titles.language"),this.currenciesTitle=salla.lang.get("common.titles.currency"),this.ok=salla.lang.get("common.elements.ok")})),this.languageSlot=(null===(a=t.H.getElement('[slot="language"]'))||void 0===a?void 0:a.innerHTML)||'<label class="s-localization-label" for="lang-{code}"><span>{name}</span><div class="s-localization-flag flag iti__flag iti__{country_code}"></div></label>',this.currencySlot=(null===(l=t.H.getElement('[slot="currency"]'))||void 0===l?void 0:l.innerHTML)||'<label class="s-localization-label" for="currency-{code}"><span>{name}</span><small class="s-localization-currency">{code}</small></label>',this.languages=Object.values(salla.config.get("languages",{})),this.currencies=Object.values(salla.config.get("currencies",{}))}async show(){return this.modal.show()}async hide(){return this.modal.hide()}onChangeCurrency(e){this.currency=salla.config.get("currencies."+e.target.value)}onChangeLanguage(e){this.language=salla.config.get("languages."+e.target.value)}async submit(){let e;console.log("this.currency.code::::",this.currency,this.currency.code),this.btn.load().then((()=>this.currency.code===salla.config.get("user.currency")||(e=window.location.href)&&salla.currency.api.change(this.currency.code))).then((()=>this.language.code===salla.config.get("user.language")||(e=this.language.url))).then((()=>this.btn.stop())).then((()=>this.hide())).then((()=>e&&(window.location.href=e)))}render(){return(0,s.h)("salla-modal",{id:"salla-localization",class:"hidden",ref:e=>this.modal=e,width:"xs"},(0,s.h)("div",{slot:"header"},(0,s.h)("slot",{name:"header"})),(0,s.h)("div",{class:"s-localization-inner"},this.languages.length>1?(0,s.h)("div",{class:"s-localization-section"},(0,s.h)("label",{class:"s-localization-title"},this.languagesTitle),(0,s.h)("div",{class:"s-localization-section-inner"},this.languages.length<6?this.languages.map((e=>(0,s.h)("div",{class:"s-localization-item"},(0,s.h)("input",{class:"s-localization-input",type:"radio",checked:this.language.code==e.code,onChange:()=>this.language=e,name:"language",id:"lang-"+e.code.toLowerCase(),value:e.code}),(0,s.h)("div",{id:"language-slot",innerHTML:this.languageSlot.replace(/\{name\}/g,e.name).replace(/\{code\}/g,e.code).replace(/\{country_code\}/g,e.country_code)})))):(0,s.h)("select",{class:"s-branches-select",name:"currency",onChange:e=>this.onChangeLanguage(e)},this.languages.map((e=>(0,s.h)("option",{value:e.code,selected:this.language.code==e.code},e.name)))))):"",this.currencies.length>1?(0,s.h)("div",{class:"s-localization-section"},(0,s.h)("label",{class:"s-localization-title"},this.currenciesTitle),(0,s.h)("div",{class:"s-localization-section-inner"},this.currencies.length<6?this.currencies.map((e=>(0,s.h)("div",{class:"s-localization-item"},(0,s.h)("input",{class:"s-localization-input",type:"radio",name:"currency",checked:this.currency.code==e.code,onChange:()=>this.currency=e,id:"currency-"+e.code,value:e.code}),(0,s.h)("div",{id:"currency-slot",innerHTML:this.currencySlot.replace(/\{name\}/g,e.name).replace(/\{code\}/g,e.code).replace(/\{country_code\}/g,e.country_code)})))):(0,s.h)("select",{class:"s-branches-select",name:"currency",onChange:e=>this.onChangeCurrency(e)},this.currencies.map((e=>(0,s.h)("option",{value:e.code,selected:this.currency.code==e.code},e.name)))))):""),(0,s.h)("slot",{name:"footer"},(0,s.h)("salla-button",{wide:!0,ref:e=>this.btn=e,onClick:()=>this.submit()},this.ok)))}componentDidRender(){this.host.querySelectorAll("#currency-slot").forEach((e=>e.replaceWith(e.firstChild))),this.host.querySelectorAll("#language-slot").forEach((e=>e.replaceWith(e.firstChild)))}get host(){return(0,s.g)(this)}}}}]);