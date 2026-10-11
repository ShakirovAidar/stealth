(function(){
  var L; try{ L = localStorage.getItem("lang"); }catch(e){}
  if(L!=="ru" && L!=="en") L = /^(ru|uk|be|kk|uz|ky|tg|hy|az|ka)/i.test(navigator.language||"") ? "ru" : "en";
  function set(l){
    L = l; try{ localStorage.setItem("lang",l); }catch(e){}
    document.documentElement.lang = l; document.documentElement.setAttribute("data-lang", l);
    var sw = document.getElementById("lang"); if(sw){ sw.dataset.l = l;
      [].forEach.call(sw.querySelectorAll("button"),function(b){ b.classList.toggle("on", b.dataset.l===l); }); }
    var T = document.body.getAttribute("data-title-"+l); if(T) document.title = T;
  }
  window.setLang = set; set(L);
})();
