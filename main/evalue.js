var openTab = false;

function getUserInfo() {
    var name = sessionStorage.getItem("name");
    var email = sessionStorage.getItem("email");

    document.getElementById("userName").innerHTML = name;
    document.getElementById("userEmail").innerHTML = email;
}

function displayTab() {
    if (!openTab) {
        document.getElementById("userTab").classList.remove("d-none");
        document.getElementById("userTab").classList.add("d-block");
        openTab = true;
    }

    else {
        document.getElementById("userTab").classList.remove("d-block");
        document.getElementById("userTab").classList.add("d-none");
        openTab = false;
    }
}

function rating(x) {
    console.log(x);
    if (x == 1) {
        document.getElementById("star1").style.filter = "grayscale(0%)";
        document.getElementById("star2").style.filter = "grayscale(100%)";
        document.getElementById("star3").style.filter = "grayscale(100%)";
        document.getElementById("star4").style.filter = "grayscale(100%)";
        document.getElementById("star5").style.filter = "grayscale(100%)";
        document.getElementById("disappear").classList.remove("d-none");
    }

    if (x == 2) {
        document.getElementById("star1").style.filter = "grayscale(0%)";
        document.getElementById("star2").style.filter = "grayscale(0%)";
        document.getElementById("star3").style.filter = "grayscale(100%)";
        document.getElementById("star4").style.filter = "grayscale(100%)";
        document.getElementById("star5").style.filter = "grayscale(100%)";
        document.getElementById("disappear").classList.remove("d-none");
    }

    if (x == 3) {
        document.getElementById("star1").style.filter = "grayscale(0%)";
        document.getElementById("star2").style.filter = "grayscale(0%)";
        document.getElementById("star3").style.filter = "grayscale(0%)";
        document.getElementById("star4").style.filter = "grayscale(100%)";
        document.getElementById("star5").style.filter = "grayscale(100%)";
        document.getElementById("disappear").classList.remove("d-none");
    }

    if (x == 4) {
        document.getElementById("star1").style.filter = "grayscale(0%)";
        document.getElementById("star2").style.filter = "grayscale(0%)";
        document.getElementById("star3").style.filter = "grayscale(0%)";
        document.getElementById("star4").style.filter = "grayscale(0%)";
        document.getElementById("star5").style.filter = "grayscale(100%)";
        document.getElementById("disappear").classList.add("d-none");
    }

    if (x == 5) {
        document.getElementById("star1").style.filter = "grayscale(0%)";
        document.getElementById("star2").style.filter = "grayscale(0%)";
        document.getElementById("star3").style.filter = "grayscale(0%)";
        document.getElementById("star4").style.filter = "grayscale(0%)";
        document.getElementById("star5").style.filter = "grayscale(0%)";
        document.getElementById("disappear").classList.add("d-none");
    }

    else {
    }
}

function thankYou() {
    var x = confirm("Obrigado pela sua avaliação!");

    if (x) {
        window.location.href = 'main.html';
    }
}