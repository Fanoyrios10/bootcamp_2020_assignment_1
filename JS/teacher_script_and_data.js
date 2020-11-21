/*
let demo = {
  first_name: "Demo",
  last_name: "Demo",
  email: "TheDemoGamer@outlook.com",
  password : "Demo",
  subjects : "Demo"
};

let teacher1 = {
  first_name: "Suman",
  last_name: "Hamilton",
  email: "TheSomberGamer@gmail.com",
  password : "SXHg5UZy",
  subjects : "History"
};

let teacher2 = {
  first_name: "Yaseen",
  last_name: "Beattie",
  email: "TheReceptiveGamer@outlook.com",
  password : "C63ZDnka",
  subjects : "Programming"
};

let teacher3 = {
  first_name: "Mahir",
  last_name: "Bond",
  email: "TheWhisperingGamer@outlook.com",
  password : "HyWtkRF5",
  subjects : "Chemistry"
};

let teacher4 = {
  first_name: "Enya",
  last_name: "Farley",
  email: "TheTemporaryGamer@outlook.com",
  password : "zntYgDej",
  subjects : "Physics"
};

let teacher5 = {
  first_name: "Gus",
  last_name: "Baxter",
  email: "TheHard-to-findGamer@outlook.com",
  password : "37ZvPk78",
  subjects : "Sociology"
};

let teacher6 = {
  first_name: "Cooper",
  last_name: "Bullock",
  email: "ThePoisedGamer@outlook.com",
  password : "aGVsp39b",
  subjects : "Physical Education"
};
*/
// The position inside the arrays correspond with one another. For examle first_name[1] goes with last_name[1]
let teachers_number = [0,1,2,3,4,5,6];

let teachers_first_name = ["Demo","Suman","Yaseen","Mahir","Enya","Gus","Cooper"];

let teachers_last_name = ["Demo","Hamilton","Beattie","Bond","Farley","Baxter","Bullock"];

let teachers_email = ["TheDemoGamer@outlook.com","TheSomberGamer@gmail.com","TheReceptiveGamer@outlook.com","TheWhisperingGamer@outlook.com","TheTemporaryGamer@outlook.com","TheHard-to-findGamer@outlook.com","ThePoisedGamer@outlook.com"];

let teachers_Password = ["Demo","SXHg5UZy","C63ZDnka","HyWtkRF5","zntYgDej","37ZvPk78","aGVsp39b"];

let teachers_subjects = ["Demo","History","Programming","Chemistry","Physics","Sociology","Physical Education"];

let teachers_subject_not_available = ["none","none","none","none","none","none","none"];


if (sessionStorage.getItem('test') == null) {
  sessionStorage.setItem("teachers_number_old",JSON.stringify(teachers_number));
  sessionStorage.setItem("teachers_first_name_old",JSON.stringify(teachers_first_name));
  sessionStorage.setItem("teachers_last_name_old",JSON.stringify(teachers_last_name));
  sessionStorage.setItem("teachers_email_old",JSON.stringify(teachers_email));
  sessionStorage.setItem("teachers_Password_old",JSON.stringify(teachers_Password));
  sessionStorage.setItem("teachers_subjects_old",JSON.stringify(teachers_subjects));
  sessionStorage.setItem("teachers_subject_not_available_old",JSON.stringify(teachers_subject_not_available));
  window.alert("First Run Teachers");
}


teachers_number_old = JSON.parse(window.sessionStorage.getItem("teachers_number_old"));
teachers_first_name_old = JSON.parse(window.sessionStorage.getItem("teachers_first_name_old"));
teachers_last_name_old = JSON.parse(window.sessionStorage.getItem("teachers_last_name_old"));
teachers_email_old = JSON.parse(window.sessionStorage.getItem("teachers_email_old"));
teachers_Password_old = JSON.parse(window.sessionStorage.getItem("teachers_Password_old"));
teachers_subjects_old = JSON.parse(window.sessionStorage.getItem("teachers_subjects_old"));
teachers_subject_not_available_old = JSON.parse(window.sessionStorage.getItem("teachers_subject_not_available_old"));


function teacher_sign_up_form_extension() {
  let sign_up_teacher_checkbox = document.getElementById("teacher_sign_up_subject_not_available");
  let sign_up_teacher_hidden_section = document.getElementById("teacher_sign_up_hidden_section");
  let sign_up_teacher_main_pic = document.getElementById("sign_up_teacher_main_pic");
  let sign_up_teacher_form_container = document.getElementById("sign_up_teacher_form_container");
  if (sign_up_teacher_checkbox.checked == true) {
    sign_up_teacher_main_pic.style.height= "1186px";
    sign_up_teacher_form_container.style.height = "82%";
    sign_up_teacher_main_pic.style.transition = "2s";
    sign_up_teacher_form_container.style.transition = "2s";
    setTimeout(function (){sign_up_teacher_hidden_section.style.display = "block"}, 500);
    return true;
  } else{
    sign_up_teacher_main_pic.style.height= "986px";
    sign_up_teacher_form_container.style.height = "80%";
    sign_up_teacher_main_pic.style.transition = "2s";
    sign_up_teacher_form_container.style.transition = "2s";
    setTimeout(function (){sign_up_teacher_hidden_section.style.display = "none"}, 500);
    return false;
  }
}

function sign_up() {
  let sign_up_completion = document.getElementById("sign_up_complete");
  let sign_up_first_name = document.forms["sign_up_teacher_form"]["first_name"].value;
  let sign_up_last_name = document.forms["sign_up_teacher_form"]["last_name"].value;
  let sign_up_e_mail = document.forms["sign_up_teacher_form"]["e-mail"].value;
  let sign_up_password = document.forms["sign_up_teacher_form"]["password"].value;
  let sign_up_subject = document.forms["sign_up_teacher_form"]["subject"].value;
  let sign_up_subject_not_available = document.forms["sign_up_teacher_form"]["subject_not_available"].value;
  let pass;
  let x;
  if (sessionStorage.getItem('test') == null) {
    for (let i = 0; i <=teachers_email_old.length; i++) {
      if (teachers_email_old[i] == sign_up_e_mail) {
        window.alert("E-mail already exists");
        pass = 0;
        return false;
      }else{
        pass = 1;
        x = i;
      }
    }
  }else{
    for (let i = 0; i <=teachers_email_new.length; i++) {
      if (teachers_email_new[i] == sign_up_e_mail) {
        window.alert("E-mail already exists");
        pass = 0;
        return false;
      }else{
        pass = 1;
        x = i;
      }
    }
  }
  if (sign_up_first_name == "" || sign_up_last_name == "" || sign_up_e_mail == "" || sign_up_password == "" || sign_up_subject == "") {
    window.alert("Not all text inputs are filled in");
    return false;
  } else{
    if (sessionStorage.getItem('test') == null) {
      teachers_number_old.push(x);
      teachers_first_name_old.push(sign_up_first_name);
      teachers_last_name_old.push(sign_up_last_name);
      teachers_email_old.push(sign_up_e_mail);
      teachers_Password_old.push(sign_up_password);
      teachers_subjects_old.push(sign_up_subject);
      sessionStorage.setItem("teachers_number_new",JSON.stringify(teachers_number_old));
      sessionStorage.setItem("teachers_first_name_new",JSON.stringify(teachers_first_name_old));
      sessionStorage.setItem("teachers_last_name_new",JSON.stringify(teachers_last_name_old));
      sessionStorage.setItem("teachers_email_new",JSON.stringify(teachers_email_old));
      sessionStorage.setItem("teachers_Password_new",JSON.stringify(teachers_Password_old));
      sessionStorage.setItem("teachers_subjects_new",JSON.stringify(teachers_subjects_old));
      sessionStorage.setItem("teachers_subject_not_available_new",JSON.stringify(teachers_subject_not_available_old));
    }else{
      console.log(teachers_first_name_new);
      teachers_number_new = JSON.parse(window.sessionStorage.getItem("teachers_number_new"));
      teachers_first_name_new = JSON.parse(window.sessionStorage.getItem("teachers_first_name_new"));
      teachers_last_name_new = JSON.parse(window.sessionStorage.getItem("teachers_last_name_new"));
      teachers_email_new = JSON.parse(window.sessionStorage.getItem("teachers_email_new"));
      teachers_Password_new = JSON.parse(window.sessionStorage.getItem("teachers_Password_new"));
      teachers_subjects_new = JSON.parse(window.sessionStorage.getItem("teachers_subjects_new"));
      teachers_subject_not_available_new = JSON.parse(window.sessionStorage.getItem("teachers_subject_not_available_new"));
      teachers_number_new.push(x);
      teachers_first_name_new.push(sign_up_first_name);
      teachers_last_name_new.push(sign_up_last_name);
      teachers_email_new.push(sign_up_e_mail);
      teachers_Password_new.push(sign_up_password);
      teachers_subjects_new.push(sign_up_subject);
      sessionStorage.setItem("teachers_number_new",JSON.stringify(teachers_number_new));
      sessionStorage.setItem("teachers_first_name_new",JSON.stringify(teachers_first_name_new));
      sessionStorage.setItem("teachers_last_name_new",JSON.stringify(teachers_last_name_new));
      sessionStorage.setItem("teachers_email_new",JSON.stringify(teachers_email_new));
      sessionStorage.setItem("teachers_Password_new",JSON.stringify(teachers_Password_new));
      sessionStorage.setItem("teachers_subjects_new",JSON.stringify(teachers_subjects_new));
      sessionStorage.setItem("teachers_subject_not_available_new",JSON.stringify(teachers_subject_not_available_new));
    }
      if (sign_up_subject_not_available == "") {
        teachers_subject_not_available.push("none");
        sign_up_subject_not_available = "none";
      }else{
        teachers_subject_not_available_new.push(sign_up_subject_not_available);
      }
      sessionStorage.setItem('test', 1);
    sign_up_completion.style.display = "block";
    let new_teacher = [x,sign_up_first_name,sign_up_last_name,sign_up_e_mail,sign_up_password,sign_up_subject,sign_up_subject_not_available];
    setTimeout(function (){sign_up_completion.innerText = "Please wait."}, 1000);
    setTimeout(function (){sign_up_completion.innerText = "Please wait.."}, 2000);
    setTimeout(function (){sign_up_completion.innerText = "Please wait..."}, 3000);
    setTimeout(function (){sign_up_completion.innerText = "Done"}, 4000);
    setTimeout(function (){window.alert("Thank You for Signing Up " + sign_up_first_name + "! Please go to the Signing in Section so you can fill ou the form for the courses that you will be teaching at.")}, 4100);
    console.log(new_teacher);
    return true;
  }
}

teachers_number_new = JSON.parse(window.sessionStorage.getItem("teachers_number_new"));
teachers_first_name_new = JSON.parse(window.sessionStorage.getItem("teachers_first_name_new"));
teachers_last_name_new = JSON.parse(window.sessionStorage.getItem("teachers_last_name_new"));
teachers_email_new = JSON.parse(window.sessionStorage.getItem("teachers_email_new"));
teachers_Password_new = JSON.parse(window.sessionStorage.getItem("teachers_Password_new"));
teachers_subjects_new = JSON.parse(window.sessionStorage.getItem("teachers_subjects_new"));
teachers_subject_not_available_new = JSON.parse(window.sessionStorage.getItem("teachers_subject_not_available_new"));


function sign_in() {
  let email_sign_in = document.forms["sign_in_teacher_form"]["e-mail"].value;
  let password_sign_in = document.forms["sign_in_teacher_form"]["password"].value;
  console.log(email_sign_in);
  console.log(password_sign_in);
  let pass;
  if (email_sign_in === "" || password_sign_in === "") {
    window.alert("Not all inputs are filled in");
    return false;
  }else{
    pass = 1;
  }
  if (sessionStorage.getItem('test') == null) {
    for (let i = 0; i <= teachers_number_old.length; i++) {
      if (email_sign_in == teachers_email_old[i] || password_sign_in == teachers_Password_old[i]) {
        console.log(i);
        window.alert("Welcome back " + teachers_first_name[i] + "!!!");
        setTimeout (function (){location.href = "../teacher/teacher_home.html"}, 1000);
        return i;
      }else{
        pass = 0;
      }
    }
  }else {
    for (let i = 0; i <= teachers_number_new.length; i++) {
      if (email_sign_in == teachers_email_new[i] || password_sign_in == teachers_Password_new[i]) {
        console.log(i);
        window.alert("Welcome back " + teachers_first_name[i] + "!!!");
        setTimeout (function (){location.href = "../teacher/teacher_home.html"}, 1000);
        return i;
      }else{
        pass = 0;
      }
    }
  }
  if (pass === 0) {
    window.alert("Wrong e-mail or Password!!!");
    return false;
  }else{
    return false;
  }
}

window.onload = function secretary_create_table() {
  if (sessionStorage.getItem('test') == null) {
    for (let i = 1; i < teachers_number_old.length; i++) {  
      let trc = document.createElement("tr");
        var tdOne = document.createElement("td"); 
        tdOne.innerHTML = teachers_number_old[i];
        var tdTwo = document.createElement("td"); 
        tdTwo.innerHTML = teachers_first_name_old[i];
        var tdThree = document.createElement("td"); 
        tdThree.innerHTML = teachers_last_name_old[i];
        let tdFour = document.createElement("td");
        tdFour.innerHTML = teachers_email_old[i];
        let tdFive = document.createElement("td");
        tdFive.innerHTML = teachers_Password_old[i];
        let tdSix = document.createElement("td");
        tdSix.innerHTML = teachers_subjects_old[i];
        let tdSeven = document.createElement("td");
        tdSeven.innerHTML = teachers_subject_not_available_old[i];
        let Edit_Button = document.createElement("button");
        Edit_Button.innerText = "EDIT";
        let tdNine = document.createElement("td");
        tdNine = Edit_Button;
        let Update_Button = document.createElement("button");
        Update_Button.innerText = "UPDATE";
        let tdTen = document.createElement("td");
        tdTen = Update_Button;
        trc.appendChild(tdOne);
        trc.appendChild(tdTwo);
        trc.appendChild(tdThree);
        trc.appendChild(tdFour);
        trc.appendChild(tdFive);
        trc.appendChild(tdSix);
        trc.appendChild(tdSeven);
        trc.appendChild(tdNine);
        trc.appendChild(tdTen);
        document.getElementById("myTable").appendChild(trc);
    }
  }else{
    for (let i = 0; i < teachers_number_new.length; i++) {  
      let trc = document.createElement("tr");
        let tdOne = document.createElement("td"); 
        tdOne.innerHTML = teachers_number_new[i];
        let tdTwo = document.createElement("td"); 
        tdTwo.innerHTML = teachers_first_name_new[i];
        let tdThree = document.createElement("td"); 
        tdThree.innerHTML = teachers_last_name_new[i];
        let tdFour = document.createElement("td");
        tdFour.innerHTML = teachers_email_new[i];
        let tdFive = document.createElement("td");
        tdFive.innerHTML = teachers_Password_new[i];
        let tdSix = document.createElement("td");
        tdSix.innerHTML = teachers_subjects_new[i];
        let tdSeven = document.createElement("td");
        tdSeven.innerHTML = teachers_subject_not_available_new[i];
        let Edit_Button = document.createElement("button");
        Edit_Button.innerText = "EDIT";
        let tdNine = document.createElement("td");
        tdNine = Edit_Button;
        let Update_Button = document.createElement("button");
        Update_Button.innerText = "UPDATE";
        let tdTen = document.createElement("td");
        tdTen = Update_Button;
        trc.appendChild(tdOne);
        trc.appendChild(tdTwo);
        trc.appendChild(tdThree);
        trc.appendChild(tdFour);
        trc.appendChild(tdFive);
        trc.appendChild(tdSix);
        trc.appendChild(tdSeven);
        trc.appendChild(tdNine);
        trc.appendChild(tdTen);
        document.getElementById("myTable").appendChild(trc);
      }
  }
}
