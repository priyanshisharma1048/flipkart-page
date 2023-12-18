// common.js

(function () {
    const heart = document.getElementById('heart');
    heart.addEventListener('click', function () {
        if (heart.classList.value == "fa-regular fa-heart red") {
            localStorage.setItem("like", "False")
        } else {
            localStorage.setItem("like", "True")
        }
        heart.classList.toggle('red');
    });
})();

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

function loginForm() {
    const email = "priyanshisharma@1048gmail.com";
    const password = "kiyansh@24";
    if (email === document.getElementById("e-mail").value && password === document.getElementById("password").value) {
        localStorage.setItem("login", "true");
        alert("Login successfully");
        closeForm();
        updateLoginState();
    } else {
        localStorage.setItem("login", "false");
        alert("Email or password incorrect");
    }
}

function updateLoginState() {
    const isLoggedIn = localStorage.getItem('login') === 'true';
    const logoutSection = document.getElementById('logoutSection');
    const signIn = document.getElementById('signIn');
    const profilesection = document.getElementById('profilesection');

    if (isLoggedIn) {
        logoutSection.style.display = 'block';
        signIn.style.display = 'none';
        profilesection.style.display = 'block';
    } else {
        logoutSection.style.display = 'none';
        signIn.style.display = 'block';
        profilesection.style.display = 'none';
    }
}
