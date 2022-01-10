
function myFunction() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    let ok = true;
    if (username != "admin" || password != "sneakers") {
        document.getElementById("username").style.backgroundColor = "rgba(255, 82, 82, 0.637)";
        document.getElementById("password").style.backgroundColor = "rgba(255, 82, 82, 0.637)";
        alert("Nom d'utilisateur ou mot de passe incorrect")
        ok = false;
    }
    else {
        document.location.href="tab.html";
        alert("Password Match!!!");
    }
    return ok;
}

