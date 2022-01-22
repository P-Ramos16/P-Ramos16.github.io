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