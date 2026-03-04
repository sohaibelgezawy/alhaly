document.getElementById("myForm").addEventListener("submit", function (e) {
    e.preventDefault();

    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var message = document.getElementById("message").value.trim();
   

    var nameError = document.getElementById("name-error");
    var emailError = document.getElementById("email-error");
    var messageError = document.getElementById("message-error");

    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";


    var valid = true;
    if (name === "") {
        nameError.textContent = "please enter your name";
        valid = false;
    }
    else if (name.length < 3 || name.length > 15) {
        nameError.textContent = "Must be 3-15 characters";
        valid = false;
    }
    if (email === "") {
        emailError.textContent = "please enter your email";
        valid = false;
    }
    else if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
        emailError.textContent = "PLS Enter valid  email";
        valid = false;
    }

})
let btn = document.getElementById("topBtn");

window.onscroll = function(){
    if(document.documentElement.scrollTop > 200){
        btn.style.display = "block";
    }else{
        btn.style.display = "none";
    }
}

function goTop(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}




