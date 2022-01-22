var hrefBtnStatus = 0;
var hrefBtn = document.getElementById("hrefBtn");

function requestData() {


    var name = document.getElementById("name");
    var phone = document.getElementById("phone");
    var email = document.getElementById("email");
    name.innerHTML = sessionStorage.getItem("name");
    phone.innerHTML = sessionStorage.getItem("phone");
    email.innerHTML = sessionStorage.getItem("email");


    console.log(name)
    console.log(phone)
    console.log(email)
  
}
  
  function checkData(x) {
  
    var curriculum = document.getElementById("curriculum").value;
    
  
    if (curriculum.length > 2) {
        hrefBtn.setAttribute("href", "main.html");
        hrefBtn.setAttribute("style", "opacity:1;");
        hrefBtnStatus = 1;
    }
    else {
        if (x == null) {
            hrefBtn.setAttribute("href", "#");
            hrefBtn.setAttribute("style", "opacity:0.5;");
            hrefBtnStatus = 0;
        }
        else {
            alert("Existem campos ainda não preenchidos!")
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
  
  }