function updatePage(x) {  
    console.log(x)

    if (x == 1) {
        document.getElementById("mainAcc").innerHTML = `
        <h1>Sign Up</h1>
        <h4 style="margin-top:2vh;">Para criar a sua conta, siga os passos no ecrã</h4>
        <div class="mainPart">
            <input style="width:49.5%; float:left;" type="text" class="accInput" placeholder="Nome">
            <input style="width:49.5%; float:right;" type="text" class="accInput" placeholder="Apelido">
            <input type="text" class="accInput" placeholder="Email">
            <input type="password" class="accInput" placeholder="Password">
            <select name="cars" class="accInput" id="cars">
              <option value="pais">Pais</option>
              <option value="portugal">Portugal</option>
              <option value="espanha">Espanha</option>
              <option value="franca">França</option>
              <option value="alemanha">Alemanha</option>
              <option value="inglaterra">Inglaterra</option>
            </select>
            <input type="tel" class="accInput" placeholder="Telemóvel">
            <h5 style="margin:2vh;">
                <input type="checkbox" class="checkbox0" name="horns">
                Eu aceito os <span style="color:#373483;">Termos e Condições</span>
            </h5>
            <button class="accBtn" onclick="updatePage(2)">Continuar <span style="font-size: 0.9em;" class="glyphicon glyphicon-chevron-right"></span></button>
        </div>
        `;
    }

    else if (x == 2) {
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var phone = document.getElementById("phone").value;
    
        sessionStorage.setItem("name", name);
        sessionStorage.setItem("email", email);
        sessionStorage.setItem("phone", phone);

        document.getElementById("mainAcc").innerHTML = `
        <h1>Sign Up</h1>
        <h4 style="margin-top:5vh;">Insira o código enviado para o seu telemóvel</h4>
        <div class="mainPart">
            <input style="margin: 10vh 0px 10vh 0px;text-align: center;padding: 0%;" type="text" class="accInput" placeholder="XX - XX - XX">

            <button class="accBtn" onclick="updatePage(3)" style="margin-bottom: 1.5vh;" >Continuar <span style="font-size: 0.9em;" class="glyphicon glyphicon-chevron-right"></span></button>
            <button class="accBtn" onclick="updatePage(1)"><span style="font-size: 0.9em;" class="glyphicon glyphicon-chevron-left">Voltar</span></button>
        </div>
        `;
    }

    else if (x == 3) {
        document.getElementById("mainAcc").innerHTML = `
        <h1>Sign Up</h1>
        <div class="mainPart">
            <img src="../acc/images/edfb70966c8a7f21486d760454bbe0a6_373483.svg" style="margin:2.5vh 0px 2.5vh 0px;width: 70%;">
            <h2 style="margin-top:5vh;color: #373483;">Conta Criada com sucesso!</h2>
            <a href="tutorial.html"><button class="accBtn"  style="margin-bottom: 1.5vh;" >Continuar <span style="font-size: 0.9em;" class="glyphicon glyphicon-chevron-right"></span></button></a>
        </div>
        `;
    }
} 



function checkData() {

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;

    var check = document.getElementById("check").checked;

    var hrefBtn = document.getElementById("hrefBtn");

    console.log(name.length)
    console.log(email.length)
    console.log(phone.length)
    console.log(check)

    if (name.length > 1 && email.length > 2 && phone.length > 6 && check) {
      hrefBtn.setAttribute("onclick", "updatePage(2)");
      hrefBtn.setAttribute("style", "opacity:1;");
    }


    else {
        hrefBtn.setAttribute("onclick", "");
        hrefBtn.setAttribute("style", "opacity:0.5;");
    }
}