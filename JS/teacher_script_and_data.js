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
let subjects = ["History","Programming","Chemistry","Physics","Sociology","Physical Education"];

let teachers_number = [0,1,2,3,4,5,6];

let teachers_first_name = ["Demo","Suman","Yaseen","Mahir","Enya","Gus","Cooper"];

let teachers_last_name = ["Demo","Hamilton","Beattie","Bond","Farley","Baxter","Bullock"];

let teachers_email = ["TheDemoGamer@outlook.com","TheSomberGamer@gmail.com","TheReceptiveGamer@outlook.com","TheWhisperingGamer@outlook.com","TheTemporaryGamer@outlook.com","TheHard-to-findGamer@outlook.com","ThePoisedGamer@outlook.com"];

let teachers_Password = ["Demo","SXHg5UZy","C63ZDnka","HyWtkRF5","zntYgDej","37ZvPk78","aGVsp39b"];

let teachers_subjects = ["Demo","History","Programming","Chemistry","Physics","Sociology","Physical Education"];

let teachers_subject_not_available = ["none","none","none","none","none","none","none"];

let teachers_desired_courses = ["none","67","none","none","none","none","none"];

if (sessionStorage.getItem('test') == null) {
  sessionStorage.setItem("teachers_number_old",JSON.stringify(teachers_number));
  sessionStorage.setItem("teachers_first_name_old",JSON.stringify(teachers_first_name));
  sessionStorage.setItem("teachers_last_name_old",JSON.stringify(teachers_last_name));
  sessionStorage.setItem("teachers_email_old",JSON.stringify(teachers_email));
  sessionStorage.setItem("teachers_Password_old",JSON.stringify(teachers_Password));
  sessionStorage.setItem("teachers_subjects_old",JSON.stringify(teachers_subjects));
  sessionStorage.setItem("teachers_subject_not_available_old",JSON.stringify(teachers_subject_not_available));
  sessionStorage.setItem("teachers_desired_courses_old",JSON.stringify(teachers_desired_courses));
  window.alert("First Run Teachers");
}


teachers_number_old = JSON.parse(window.sessionStorage.getItem("teachers_number_old"));
teachers_first_name_old = JSON.parse(window.sessionStorage.getItem("teachers_first_name_old"));
teachers_last_name_old = JSON.parse(window.sessionStorage.getItem("teachers_last_name_old"));
teachers_email_old = JSON.parse(window.sessionStorage.getItem("teachers_email_old"));
teachers_Password_old = JSON.parse(window.sessionStorage.getItem("teachers_Password_old"));
teachers_subjects_old = JSON.parse(window.sessionStorage.getItem("teachers_subjects_old"));
teachers_subject_not_available_old = JSON.parse(window.sessionStorage.getItem("teachers_subject_not_available_old"));
teachers_desired_courses_old = JSON.parse(window.sessionStorage.getItem("teachers_desired_courses_old"));

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
  if (sign_up_subject_not_available == "") {
    teachers_subject_not_available.push("none");
    sign_up_subject_not_available = "none";
  }else{
    teachers_subject_not_available_new.push(sign_up_subject_not_available);
  }
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
      teachers_desired_courses_old.push("none");
      sessionStorage.setItem("teachers_number_new",JSON.stringify(teachers_number_old));
      sessionStorage.setItem("teachers_first_name_new",JSON.stringify(teachers_first_name_old));
      sessionStorage.setItem("teachers_last_name_new",JSON.stringify(teachers_last_name_old));
      sessionStorage.setItem("teachers_email_new",JSON.stringify(teachers_email_old));
      sessionStorage.setItem("teachers_Password_new",JSON.stringify(teachers_Password_old));
      sessionStorage.setItem("teachers_subjects_new",JSON.stringify(teachers_subjects_old));
      sessionStorage.setItem("teachers_subject_not_available_new",JSON.stringify(teachers_subject_not_available_old));
      sessionStorage.setItem("teachers_desired_courses_new",JSON.stringify(teachers_desired_courses_old));

    }else{
      teachers_number_new.push(x);
      teachers_first_name_new.push(sign_up_first_name);
      teachers_last_name_new.push(sign_up_last_name);
      teachers_email_new.push(sign_up_e_mail);
      teachers_Password_new.push(sign_up_password);
      teachers_subjects_new.push(sign_up_subject);
      teachers_desired_courses_new.push("none");
      sessionStorage.setItem("teachers_number_new",JSON.stringify(teachers_number_new));
      sessionStorage.setItem("teachers_first_name_new",JSON.stringify(teachers_first_name_new));
      sessionStorage.setItem("teachers_last_name_new",JSON.stringify(teachers_last_name_new));
      sessionStorage.setItem("teachers_email_new",JSON.stringify(teachers_email_new));
      sessionStorage.setItem("teachers_Password_new",JSON.stringify(teachers_Password_new));
      sessionStorage.setItem("teachers_subjects_new",JSON.stringify(teachers_subjects_new));
      sessionStorage.setItem("teachers_subject_not_available_new",JSON.stringify(teachers_subject_not_available_new));
      sessionStorage.setItem("teachers_desired_courses_new",JSON.stringify(teachers_desired_courses_new));
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
teachers_desired_courses_new = JSON.parse(window.sessionStorage.getItem("teachers_desired_courses_new"));

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
        let teacher_sign_in_id = teachers_number_old[i];
        console.log(teacher_sign_in_id);
        sessionStorage.setItem("teacher_sign_in_id",JSON.stringify(teacher_sign_in_id));
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
        let teacher_sign_in_id = teachers_number_new[i];
        sessionStorage.setItem("teacher_sign_in_id",JSON.stringify(teacher_sign_in_id));
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

if (document.getElementById("stripe_header").innerHTML == "From here you can edit and update Trainers..") {
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
}

if (document.getElementById("stripe_header").innerHTML == "From here you can view and edit some of your personal information and choose the course you wish to attend.You can also add,edit and update assignments. If you wish to change something that is not in this form you will have to contact the secreatry.") {
  let teacher_sign_in_id = JSON.parse(window.sessionStorage.getItem("teacher_sign_in_id"));
  console.log(teacher_sign_in_id);
    if (sessionStorage.getItem('test') == null) {
      document.getElementById("table_teacher_home_number").innerHTML = teachers_number_old[teacher_sign_in_id];
      document.getElementById("table_teacher_home_first_name").innerHTML = teachers_first_name_old[teacher_sign_in_id];
      document.getElementById("table_teacher_home_last_name").innerHTML = teachers_last_name_old[teacher_sign_in_id];
      document.getElementById("table_teacher_home_email").innerHTML = teachers_email_old[teacher_sign_in_id];
      document.getElementById("table_teacher_home_password").innerHTML = teachers_Password_old[teacher_sign_in_id];
      document.getElementById("table_teacher_home_subject").innerHTML = teachers_subjects_old[teacher_sign_in_id];
      document.getElementById("table_teacher_home_desired_subject").innerHTML = teachers_subject_not_available_old[teacher_sign_in_id];
    }else{
      document.getElementById("table_teacher_home_number").innerHTML = teachers_number_new[teacher_sign_in_id];
      document.getElementById("table_teacher_home_first_name").innerHTML = teachers_first_name_new[teacher_sign_in_id];
      document.getElementById("table_teacher_home_last_name").innerHTML = teachers_last_name_new[teacher_sign_in_id];
      document.getElementById("table_teacher_home_email").innerHTML = teachers_email_new[teacher_sign_in_id];
      document.getElementById("table_teacher_home_password").innerHTML = teachers_Password_new[teacher_sign_in_id];
      document.getElementById("table_teacher_home_subject").innerHTML = teachers_subjects_new[teacher_sign_in_id];
      document.getElementById("table_teacher_home_desired_subject").innerHTML = teachers_subject_not_available_new[teacher_sign_in_id];
    }
  if (sessionStorage.getItem('test3') == null) {
    document.getElementById("table_teacher_home_desired_course").innerHTML = teachers_desired_courses_old[teacher_sign_in_id];
  }else{
    document.getElementById("table_teacher_home_desired_course").innerHTML = teachers_desired_courses_new[teacher_sign_in_id];
    }
}

function teacher_sign_out() {
  sessionStorage.removeItem("teacher_sign_in_id");
  location.href = "../Sign_in/Sign_In_Teacher.html";
}


function teacher_edit_personal_information_form() {
  if (document.getElementById("teacher_edit_my_personal_Information_button").innerHTML == "Edit my personal Information Show Form") {
    document.getElementById("edit_personal_teacher_form_container").style.display = "block";
    document.getElementById("teacher_edit_my_personal_Information_button").innerHTML = "Edit my personal Information Hide Form";
  }else{
    document.getElementById("edit_personal_teacher_form_container").style.display = "none";
    document.getElementById("teacher_edit_my_personal_Information_button").innerHTML = "Edit my personal Information Show Form";
  }
  let teacher_sign_in_id = JSON.parse(window.sessionStorage.getItem("teacher_sign_in_id"));
  if (sessionStorage.getItem('test') == null) {
    document.forms["edit_personal_teacher_form"]["first_name"].value = teachers_first_name_old[teacher_sign_in_id];
    document.forms["edit_personal_teacher_form"]["last_name"].value = teachers_last_name_old[teacher_sign_in_id];
    document.forms["edit_personal_teacher_form"]["e-mail"].value = teachers_emails_old[teacher_sign_in_id];
    document.forms["edit_personal_teacher_form"]["password"].value = teachers_Password_old[teacher_sign_in_id];
  }else{
    document.forms["edit_personal_teacher_form"]["first_name"].value = teachers_first_name_new[teacher_sign_in_id];
    document.forms["edit_personal_teacher_form"]["last_name"].value = teachers_last_name_new[teacher_sign_in_id];
    document.forms["edit_personal_teacher_form"]["e-mail"].value = teachers_emails_new[teacher_sign_in_id];
    document.forms["edit_personal_teacher_form"]["password"].value = teachers_Password_new[teacher_sign_in_id];
  }
  return true;
}

function teacher_choose_desired_course_form() {
  if (document.getElementById("teacher_choose_a_course_button").innerHTML == "Choose a subject and course I wish to teach at Show Form") {
    document.getElementById("desire_course_and_Subject_teacher_form_container").style.display = "block";
    document.getElementById("teacher_choose_a_course_button").innerHTML = "Choose a subject and course I wish to teach at Hide Form";
  }else{
    document.getElementById("desire_course_and_Subject_teacher_form_container").style.display = "none";
    document.getElementById("teacher_choose_a_course_button").innerHTML = "Choose a subject and course I wish to teach at Show Form";
  }
  for (let i = 0; i < subjects.length; i++) {
    let teacher_subject_list = document.createElement("option");
    teacher_subject_list.innerHTML = subjects[i];
    console.log(i);
    teacher_subject_list.name = subjects[i];
    document.getElementById("subject_teacher_select").appendChild(teacher_subject_list);
  }
  if (sessionStorage.getItem('test3') == null) {
    for (let i = 1; i < course_title_old.length; i++) {
      let teacher_course_list = document.createElement("option");
      teacher_course_list.innerHTML = course_title_old[i];
      teacher_course_list.name = course_title_old[i];
      document.getElementById("course_teacher_select").appendChild(teacher_course_list);
    }
  }else{
    for (let i = 1; i < course_title_new.length; i++) {
      let teacher_course_list = document.createElement("option");
      teacher_course_list.innerHTML = course_title_new[i];
      teacher_course_list.name = course_title_new[i];
      document.getElementById("course_teacher_select").appendChild(teacher_course_list);
    }
  }
}

function desire_course_and_Subject_teacher() {
  let teacher_sign_in_id = JSON.parse(window.sessionStorage.getItem("teacher_sign_in_id"));
  let desire_subject_teacher = document.forms["course_and_Subject_teacher"]["subject_teacher_select"].value;
  let desire_Course_teacher = document.forms["course_and_Subject_teacher"]["course_teacher_select"].value;
  console.log(desire_Course_teacher);
  if (sessionStorage.getItem('test') == null) {
    delete teachers_subject_not_available_old[teacher_sign_in_id];
    delete teachers_desired_courses_old[teacher_sign_in_id];
    teachers_subject_not_available_old.splice(teacher_sign_in_id,1,desire_subject_teacher);
    teachers_desired_courses_old.splice(teacher_sign_in_id,1,desire_Course_teacher);
    sessionStorage.setItem("teachers_number_new",JSON.stringify(teachers_number_old));
    sessionStorage.setItem("teachers_first_name_new",JSON.stringify(teachers_first_name_old));
    sessionStorage.setItem("teachers_last_name_new",JSON.stringify(teachers_last_name_old));
    sessionStorage.setItem("teachers_email_new",JSON.stringify(teachers_email_old));
    sessionStorage.setItem("teachers_Password_new",JSON.stringify(teachers_Password_old));
    sessionStorage.setItem("teachers_subjects_new",JSON.stringify(teachers_subjects_old));
    sessionStorage.setItem("teachers_subject_not_available_new",JSON.stringify(teachers_subject_not_available_old));
    sessionStorage.setItem("teachers_desired_courses_new",JSON.stringify(teachers_desired_courses_old));
    console.log(teachers_desired_courses_old);
  }else{
    delete teachers_subject_not_available_new[teacher_sign_in_id];
    delete teachers_desired_courses_new[teacher_sign_in_id];
    teachers_subject_not_available_new.splice(teacher_sign_in_id,1,desire_subject_teacher);
    teachers_desired_courses_new.splice(teacher_sign_in_id,1,desire_Course_teacher);
    sessionStorage.setItem("teachers_number_new",JSON.stringify(teachers_number_new));
    sessionStorage.setItem("teachers_first_name_new",JSON.stringify(teachers_first_name_new));
    sessionStorage.setItem("teachers_last_name_new",JSON.stringify(teachers_last_name_new));
    sessionStorage.setItem("teachers_email_new",JSON.stringify(teachers_email_new));
    sessionStorage.setItem("teachers_Password_new",JSON.stringify(teachers_Password_new));
    sessionStorage.setItem("teachers_subjects_new",JSON.stringify(teachers_subjects_new));
    sessionStorage.setItem("teachers_subject_not_available_new",JSON.stringify(teachers_subject_not_available_new));
    sessionStorage.setItem("teachers_desired_courses_new",JSON.stringify(teachers_desired_courses_new));
    console.log(teachers_desired_courses_new);
  }
  sessionStorage.setItem('test', 1);
  return true;
}

function teacher_add_an_assignment() {
  if (document.getElementById("teacher_add_an_assignment_button").innerHTML == "Create a new Assignment Show Form") {
    document.getElementById("Add_Asignment_form_container").style.display = "block";
    document.getElementById("teacher_add_an_assignment_button").innerHTML = "Create a new Assignment Hide Form";
  }else{
  document.getElementById("Add_Asignment_form_container").style.display = "none";
  document.getElementById("teacher_add_an_assignment_button").innerHTML = "Create a new Assignment Show Form";
}
  if (sessionStorage.getItem('test3') == null) {
    for (let i = 1; i < course_title_old.length; i++) {
      let teacher_course_list_assiignment = document.createElement("option");
      teacher_course_list_assiignment.innerHTML = course_title_old[i];
      teacher_course_list_assiignment.name = course_title_old[i];
      document.getElementById("course_teacher_select_assignment").appendChild(teacher_course_list_assiignment);
    }
  }else{
    for (let i = 1; i < course_title_new.length; i++) {
      let teacher_course_list_assiignment = document.createElement("option");
      teacher_course_list_assiignment.innerHTML = course_title_new[i];
      teacher_course_list_assiignment.name = course_title_new[i];
      document.getElementById("course_teacher_select_assignment").appendChild(teacher_course_list_assiignment);
    }
  }
  if (sessionStorage.getItem('test2') == null) {
    for (let i = 1; i < students_number_old.length; i++) {
      let teacher_students_list_assiignment = document.createElement("option");
      teacher_students_list_assiignment.innerHTML = students_last_name_old[i];
      teacher_students_list_assiignment.name = students_last_name_old[i];
      document.getElementById("student_teacher_select_assignment").appendChild(teacher_students_list_assiignment);
    }
  }else{
    for (let i = 1; i < students_number_new.length; i++) {
      let teacher_students_list_assiignment = document.createElement("option");
      teacher_students_list_assiignment.innerHTML = students_last_name_new[i];
      teacher_students_list_assiignment.name = students_last_name_new[i];
      document.getElementById("student_teacher_select_assignment").appendChild(teacher_students_list_assiignment);
    }
  }
}