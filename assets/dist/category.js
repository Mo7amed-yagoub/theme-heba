(()=>{if(document.getElementById("filters-menu")){const e=new MmenuLight(document.querySelector("#filters-menu"),"(max-width: 1024px)","( slidingSubmenus: false)").offcanvas({position:"right"});document.querySelector("a[href='#filters-menu']").addEventListener("click",(t=>{t.preventDefault(),e.close(),e.open()})),document.querySelectorAll(".close-mobile-menu").forEach((t=>{t.addEventListener("click",(t=>{t.preventDefault(),e.close()}))}))}document.querySelectorAll(".close-mobile-menu").forEach((e=>{e.addEventListener("click",(e=>{e.preventDefault(),drawer.close()}))}))})();