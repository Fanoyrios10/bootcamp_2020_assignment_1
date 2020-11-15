
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

// The position inside the arrays correspond with one another. For examle first_name[1] goes with last_name[1]
let teachers_first_name = ["Demo","Suman","Yaseen","Mahir","Enya","Gus","Cooper"];
let teachers_last_name = ["Demo","Hamilton","Beattie","Bond","Farley","Baxter","Bullock"];
let teachers_email = ["TheDemoGamer@outlook.com","TheSomberGamer@gmail.com","TheReceptiveGamer@outlook.com","TheWhisperingGamer@outlook.com","TheTemporaryGamer@outlook.com","TheHard-to-findGamer@outlook.com","ThePoisedGamer@outlook.com"];
let teachers_Password = ["Demo","SXHg5UZy","C63ZDnka","HyWtkRF5","zntYgDej","37ZvPk78","aGVsp39b"];
let teachers_subjects = ["Demo","History","Programming","Chemistry","Physics","Sociology","Physical Education"];
let teachers_subject_not_available = ["none","none","none","none","none","none","none"];

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
  for (let i = 0; i <=teachers_email.length; i++) {
    if (teachers_email[i] === sign_up_e_mail) {
      window.alert("E-mail already exists");
      pass = 0;
      return false;
    }else{
      pass = 1;
    }
  }
  if (sign_up_first_name == "" || sign_up_last_name == "" || sign_up_e_mail == "" || sign_up_password == "" || sign_up_subject == "") {
    window.alert("Not all text inputs are filled in");
    return false;
  } else{
    teachers_first_name.push(sign_up_first_name);
    teachers_last_name.push(sign_up_last_name);
    teachers_email.push(sign_up_e_mail);
    teachers_Password.push(sign_up_password);
    teachers_subjects.push(sign_up_subject);
      if (sign_up_subject_not_available == "") {
        teachers_subject_not_available.push("none");
        sign_up_subject_not_available = "none";
      }else{
        teachers_subject_not_available.push(sign_up_subject_not_available);
      }
    sign_up_completion.style.display = "block";
    let new_teacher = [sign_up_first_name,sign_up_last_name,sign_up_e_mail,sign_up_password,sign_up_subject,sign_up_subject_not_available];
    localStorage.setItem("newest",JSON.stringify(new_teacher));
    setTimeout(function (){sign_up_completion.innerText = "Please wait."}, 1000);
    setTimeout(function (){sign_up_completion.innerText = "Please wait.."}, 2000);
    setTimeout(function (){sign_up_completion.innerText = "Please wait..."}, 3000);
    setTimeout(function (){sign_up_completion.innerText = "Done"}, 4000);
    setTimeout(function (){window.alert("Thank You for Signing Up " + sign_up_first_name + "! Please go to the Signing in Section so you can fill ou the form for the courses that you will be teaching at.")}, 4100);
    let newest = JSON.parse(window.localStorage.getItem("newest"));
    console.log(newest);
    return newest;
  }
}
console.log(newest);
