var hrefBtnStatus = 0;

function updateData(x) {  // navbar responsiva
  
  var img = document.getElementById("infoImg"); 
  var name = document.getElementById("infoName");
  var loc = document.getElementById("infoLoc");
  var tel = document.getElementById("infoTel");
  var Oc = document.getElementById("infoOc");
  var site = document.getElementById("infoSite");
  var mainBtn = document.getElementById("mainBtn");

  console.log(x);

  mainBtn.setAttribute('onclick', "")
  mainBtn.setAttribute('href', "requestForm.html")

  if (x == "0") {
    var x = sessionStorage.getItem("loc");
    console.log(x);

  }

  if (x != null) {
    document.getElementById("infoImg").classList.remove("d-none");
    document.getElementById("mainTxt").classList.remove("d-none");
    document.getElementById("mainBtn").classList.remove("d-none");
    sessionStorage.setItem("loc", x);
  }

  if (x === "aeBraga") {
      img.style.backgroundImage = "url('../images/braga.jpg')";
      name.innerHTML = "Aeroporto de Braga"
      loc.innerHTML = "Palmeira"
      tel.innerHTML = "+351 253 626 530"
      Oc.innerHTML = "Ocupação: 45%"
      site.setAttribute('href', "https://en.wikipedia.org/wiki/Braga_Airport")
  }

  else if (x === "aePorto") {
      img.style.backgroundImage = "url('../images/porto.jpg')";
      name.innerHTML = "Aeroporto Francisco Sá Carneiro"
      loc.innerHTML = "Vila Nova da Telha"
      tel.innerHTML = "+351 22 943 2400"
      Oc.innerHTML = "Ocupação: 32%"
      site.setAttribute('href', "https://www.aeroportoporto.pt/pt/opo/home")
  }  

  else if (x === "aeViseu") {
    img.style.backgroundImage = "url('../images/viseu.jpg')";
    name.innerHTML = "Aerodromo de Viseu"
    loc.innerHTML = "Av. Aeródromo, Viseu"
    tel.innerHTML = "+351 232 459 849"
    Oc.innerHTML = "Ocupação: Indísponível"
    site.setAttribute('href', "https://en.wikipedia.org/wiki/Viseu_Airport")
    mainBtn.setAttribute('href', "")
    mainBtn.setAttribute('onclick', "noAvailable()")
  }

  else if (x === "aePombal") {
    img.style.backgroundImage = "url('../images/pombal.jpg')";
    name.innerHTML = "Aerodromo de Pombal"
    loc.innerHTML = "Pombal"
    tel.innerHTML = "+236 209 700"
    Oc.innerHTML = "Ocupação: 2%"
    site.setAttribute('href', "https://www.google.com/search?q=aerodromo%20pombal&source=lmns&bih=910&biw=1280&client=firefox-b-d&hl=en&sa=X&ved=2ahUKEwiWp7q6waL1AhUSkRQKHXf0CUMQvS56BAgKEDQ&tbs=lf:1,lf_ui:1&tbm=lcl&sxsrf=AOaemvJ-E_FBnDcUdsNygbdsCBNULc3YqA:1641657150650&rflfq=1&num=10&rldimm=10730194432246391283&lqi=ChBhZXJvZHJvbW8gcG9tYmFsSLP_78eGq4CACFocEAAYABgBIhBhZXJvZHJvbW8gcG9tYmFsMgJwdJIBB2FpcnBvcnSqAREQASoNIglhZXJvZHJvbW8oDA&phdesc=VNQilpMAjqc&rlst=f#rlfi=hd:;si:10730194432246391283,l,ChBhZXJvZHJvbW8gcG9tYmFsSLP_78eGq4CACFocEAAYABgBIhBhZXJvZHJvbW8gcG9tYmFsMgJwdJIBB2FpcnBvcnSqAREQASoNIglhZXJvZHJvbW8oDA,y,VNQilpMAjqc;mv:[[40.822829299999995,-7.3565953],[38.959928399999995,-8.909265699999999]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:1")
  }

  else if (x === "aeFatima") {
    img.style.backgroundImage = "url('../images/fatima.jpg')";
    name.innerHTML = "Aerodromo de Fátima"
    loc.innerHTML = "R. 15 de Janeiro, Fátima"
    tel.innerHTML = "+351 919 832 496"
    Oc.innerHTML = "Ocupação: 79%"
    site.setAttribute('href', "https://en.wikipedia.org/wiki/Fatima_Airport")
  }

  else if (x === "aeLisboa") {
    img.style.backgroundImage = "url('../images/lisboa.jpg')";
    name.innerHTML = "Aeroporto Humberto Delgado"
    loc.innerHTML = "Alameda das Comunidades Portuguesas, Lisboa"
    tel.innerHTML = "+351 21 841 3500"
    Oc.innerHTML = "Ocupação: 96%"
    site.setAttribute('href', "https://www.ana.pt/en/lis/home")
  }

  else if (x === "aeSetubal") {
    img.style.backgroundImage = "url('../images/setubal.jpg')";
    name.innerHTML = "Heliporto de São Torpes"
    loc.innerHTML = "São Torpes, Setubal"
    tel.innerHTML = "+351 ---"
    Oc.innerHTML = "Ocupação: 4%"
    site.setAttribute('href', "")
  }

  else if (x === "aeBeja") {
    img.style.backgroundImage = "url('../images/beja.jpg')";
    name.innerHTML = "Aeroporto de Beja"
    loc.innerHTML = "EM 528-2 km 3, Beja"
    tel.innerHTML = "+351 284 001 020"
    Oc.innerHTML = "Ocupação: 57%"
    site.setAttribute('href', "https://en.wikipedia.org/wiki/Beja_Airport")
  }

  else if (x === "aeFaro") {
    img.style.backgroundImage = "url('../images/faro.jpg')";
    name.innerHTML = "Aeroporto de Faro"
    loc.innerHTML = "8006-901, Faro"
    tel.innerHTML = "+351 289 800 800"
    Oc.innerHTML = "Ocupação: 86%"
    site.setAttribute('href', "https://en.wikipedia.org/wiki/Faro_Airport")
  }

  else {
    img.style.backgroundImage = "";
    name.innerHTML = "";
    loc.innerHTML = "";
    tel.innerHTML = "";
    Oc.innerHTML = "";
    site.setAttribute('href', "");
  }
} 


function requestData() {

  var btn = document.getElementById("btnRequest");
  var hrefBtn = document.getElementById("hrefBtn");

  var x = sessionStorage.getItem("loc");

  if (x != null) {
    btn.innerHTML = x
  }
}

function checkData() {

  var num = document.getElementById("num").value;
  var size = document.getElementById("size").value;
  var photo = document.getElementById("photo").value;
  

  var x = sessionStorage.getItem("loc");

  if (x != null) {

    if (num.length > 0 && size.length > 2 && photo.length > 2) {
      hrefBtn.setAttribute("href", "requestInfo.html");
      hrefBtn.setAttribute("style", "opacity:1;");
      hrefBtnStatus = 1;
    }
    else {
      hrefBtn.setAttribute("href", "#");
      hrefBtn.setAttribute("style", "opacity:0.5;");
      hrefBtnStatus = 0;
    }
  }
}

function sendData() {

  var x = sessionStorage.getItem("loc");
  

  if (hrefBtnStatus == 1) {
    var num = document.getElementById("num").value;
    var size = document.getElementById("size").value;
    var photo = document.getElementById("photo").value;
    var date = document.getElementById("date").value;

    sessionStorage.setItem("num", num);
    sessionStorage.setItem("size", size);
    sessionStorage.setItem("photo", photo);
    sessionStorage.setItem("date", date);
  }

  else {
    alert("Cuidado! Existem campos por preencher!");
  }

}


function formData() {

  var x = document.getElementById("num");
  var num = sessionStorage.getItem("num");


  var y = document.getElementById("loc");
  var loc = sessionStorage.getItem("loc");


  var z = document.getElementById("phone");
  var phone = sessionStorage.getItem("phone");


  var w = document.getElementById("name");
  var name = sessionStorage.getItem("name");

  var i = document.getElementById("date");
  var date = sessionStorage.getItem("date");

  x.innerHTML = num;

  y.innerHTML = loc;

  z.innerHTML = phone;

  w.innerHTML = name;

  console.log(date)
  i.innerHTML = date;


}

function noAvailable() {
  alert("Localização temporáriamente indisponível!");
  return false;
}