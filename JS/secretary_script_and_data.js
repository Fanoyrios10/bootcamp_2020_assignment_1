let secretary_email = "goodwood@greenwood.com";

let secretary_password = "LiKQ2610";

function sign_in() {
  let email_sign_in = document.forms["sign_in_secretary_form"]["e-mail"].value;
  let password_sign_in = document.forms["sign_in_secretary_form"]["password"].value;
  if (email_sign_in === "" || password_sign_in === "") {
    window.alert("Not all inputs are filled in");
    return false;
  }else if (email_sign_in === secretary_email || password_sign_in === secretary_password){
    location.href = "../secretary/secretary_home.html"
    return true;
  }else{
    window.alert("Wrong e-mail or Password!!!");
    return false;
  }
}