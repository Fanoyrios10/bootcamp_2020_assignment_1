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

let teachers_desired_courses = ["none","none","none","none","none","none","none"];

let teachers_actual_courses = ["none","none","none","none","none","none","none"];


if (localStorage.getItem('test') == null) {
  localStorage.setItem("teachers_number_old",JSON.stringify(teachers_number));
  localStorage.setItem("teachers_first_name_old",JSON.stringify(teachers_first_name));
  localStorage.setItem("teachers_last_name_old",JSON.stringify(teachers_last_name));
  localStorage.setItem("teachers_email_old",JSON.stringify(teachers_email));
  localStorage.setItem("teachers_Password_old",JSON.stringify(teachers_Password));
  localStorage.setItem("teachers_subjects_old",JSON.stringify(teachers_subjects));
  localStorage.setItem("teachers_subject_not_available_old",JSON.stringify(teachers_subject_not_available));
  localStorage.setItem("teachers_desired_courses_old",JSON.stringify(teachers_desired_courses));
  localStorage.setItem("teachers_actual_courses_old",JSON.stringify(teachers_actual_courses));
  //window.alert("First Run Teachers");
}


teachers_number_old = JSON.parse(window.localStorage.getItem("teachers_number_old"));
teachers_first_name_old = JSON.parse(window.localStorage.getItem("teachers_first_name_old"));
teachers_last_name_old = JSON.parse(window.localStorage.getItem("teachers_last_name_old"));
teachers_email_old = JSON.parse(window.localStorage.getItem("teachers_email_old"));
teachers_Password_old = JSON.parse(window.localStorage.getItem("teachers_Password_old"));
teachers_subjects_old = JSON.parse(window.localStorage.getItem("teachers_subjects_old"));
teachers_subject_not_available_old = JSON.parse(window.localStorage.getItem("teachers_subject_not_available_old"));
teachers_desired_courses_old = JSON.parse(window.localStorage.getItem("teachers_desired_courses_old"));
teachers_actual_courses_old = JSON.parse(window.localStorage.getItem("teachers_actual_courses_old"));


if (localStorage.getItem('test') == null) {
  localStorage.setItem("teachers_number_new",JSON.stringify(teachers_number_old));
  localStorage.setItem("teachers_first_name_new",JSON.stringify(teachers_first_name_old));
  localStorage.setItem("teachers_last_name_new",JSON.stringify(teachers_last_name_old));
  localStorage.setItem("teachers_email_new",JSON.stringify(teachers_email_old));
  localStorage.setItem("teachers_Password_new",JSON.stringify(teachers_Password_old));
  localStorage.setItem("teachers_subjects_new",JSON.stringify(teachers_subjects_old));
  localStorage.setItem("teachers_subject_not_available_new",JSON.stringify(teachers_subject_not_available_old));
  localStorage.setItem("teachers_desired_courses_new",JSON.stringify(teachers_desired_courses_old));
  localStorage.setItem("teachers_actual_courses_new",JSON.stringify(teachers_actual_courses_old));
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
  if (localStorage.getItem('test') == null) {
    if (sign_up_subject_not_available == "") {
      teachers_subject_not_available_old.push("none");
      sign_up_subject_not_available = "none";
    }else{
      teachers_subject_not_available_old.push(sign_up_subject_not_available);
    }
  }else{
    if (sign_up_subject_not_available == "") {
      teachers_subject_not_available_new.push("none");
      sign_up_subject_not_available = "none";
    }else{
      teachers_subject_not_available_new.push(sign_up_subject_not_available);
    }
  }
  if (localStorage.getItem('test') == null) {
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
    if (localStorage.getItem('test') == null) {
      teachers_number_old.push(x);
      teachers_first_name_old.push(sign_up_first_name);
      teachers_last_name_old.push(sign_up_last_name);
      teachers_email_old.push(sign_up_e_mail);
      teachers_Password_old.push(sign_up_password);
      teachers_subjects_old.push(sign_up_subject);
      teachers_desired_courses_old.push("none");
      teachers_actual_courses_old.push("none");
      localStorage.setItem("teachers_number_new",JSON.stringify(teachers_number_old));
      localStorage.setItem("teachers_first_name_new",JSON.stringify(teachers_first_name_old));
      localStorage.setItem("teachers_last_name_new",JSON.stringify(teachers_last_name_old));
      localStorage.setItem("teachers_email_new",JSON.stringify(teachers_email_old));
      localStorage.setItem("teachers_Password_new",JSON.stringify(teachers_Password_old));
      localStorage.setItem("teachers_subjects_new",JSON.stringify(teachers_subjects_old));
      localStorage.setItem("teachers_subject_not_available_new",JSON.stringify(teachers_subject_not_available_old));
      localStorage.setItem("teachers_desired_courses_new",JSON.stringify(teachers_desired_courses_old));
      localStorage.setItem("teachers_actual_courses_new",JSON.stringify(teachers_actual_courses_old));
    }else{
      teachers_number_new.push(x);
      teachers_first_name_new.push(sign_up_first_name);
      teachers_last_name_new.push(sign_up_last_name);
      teachers_email_new.push(sign_up_e_mail);
      teachers_Password_new.push(sign_up_password);
      teachers_subjects_new.push(sign_up_subject);
      teachers_desired_courses_new.push("none");
      teachers_actual_courses_new.push("none");
      localStorage.setItem("teachers_number_new",JSON.stringify(teachers_number_new));
      localStorage.setItem("teachers_first_name_new",JSON.stringify(teachers_first_name_new));
      localStorage.setItem("teachers_last_name_new",JSON.stringify(teachers_last_name_new));
      localStorage.setItem("teachers_email_new",JSON.stringify(teachers_email_new));
      localStorage.setItem("teachers_Password_new",JSON.stringify(teachers_Password_new));
      localStorage.setItem("teachers_subjects_new",JSON.stringify(teachers_subjects_new));
      localStorage.setItem("teachers_subject_not_available_new",JSON.stringify(teachers_subject_not_available_new));
      localStorage.setItem("teachers_desired_courses_new",JSON.stringify(teachers_desired_courses_new));
      localStorage.setItem("teachers_actual_courses_new",JSON.stringify(teachers_actual_courses_new));
    }
      localStorage.setItem('test', 1);
      window.alert("Thank you very much for signing up to our school " + sign_up_first_name + "!!!. Go to sign in and enter your account so you can choose your desired course and manage the assignments.");
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

teachers_number_new = JSON.parse(window.localStorage.getItem("teachers_number_new"));
teachers_first_name_new = JSON.parse(window.localStorage.getItem("teachers_first_name_new"));
teachers_last_name_new = JSON.parse(window.localStorage.getItem("teachers_last_name_new"));
teachers_email_new = JSON.parse(window.localStorage.getItem("teachers_email_new"));
teachers_Password_new = JSON.parse(window.localStorage.getItem("teachers_Password_new"));
teachers_subjects_new = JSON.parse(window.localStorage.getItem("teachers_subjects_new"));
teachers_subject_not_available_new = JSON.parse(window.localStorage.getItem("teachers_subject_not_available_new"));
teachers_desired_courses_new = JSON.parse(window.localStorage.getItem("teachers_desired_courses_new"));
teachers_actual_courses_new = JSON.parse(window.localStorage.getItem("teachers_actual_courses_new"));

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
  if (localStorage.getItem('test') == null) {
    for (let i = 0; i < teachers_number_old.length; i++) {
      if (email_sign_in == teachers_email_old[i] && password_sign_in == teachers_Password_old[i]) {
        let teacher_sign_in_id = teachers_number_old[i];
        localStorage.setItem("teacher_sign_in_id",JSON.stringify(teacher_sign_in_id));
        window.alert("Welcome back " + teachers_first_name_old[i] + "!!!");
        location.href = "../teacher/teacher_home.html"
        return i;
      }else{
        pass = 0;
      }
    }
  }else {
    for (let i = 0; i <= teachers_number_new.length; i++) {
      if (email_sign_in == teachers_email_new[i] && password_sign_in == teachers_Password_new[i]) {
        let teacher_sign_in_id = teachers_number_new[i];
        localStorage.setItem("teacher_sign_in_id",JSON.stringify(teacher_sign_in_id));
        window.alert("Welcome back " + teachers_first_name_new[i] + "!!!");
        location.href = "../teacher/teacher_home.html"
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

let secretary_course_teacher_list_edit;
let secretary_course_teacher_list_update;

if (document.getElementById("stripe_header").innerHTML == "From here you can edit and update Trainers. Click on the edit or update button next to a trainer and a form will pop up at the bottom of the webpage with his information pre-filled. Use the buttons just below so you can hide the forms and sort the table.") {
  if (localStorage.getItem('test') == null) {
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
        let tdSix = document.createElement("td");
        tdSix.innerHTML = teachers_subjects_old[i];
        let tdSeven = document.createElement("td");
        tdSeven.innerHTML = teachers_subject_not_available_old[i];
        let tdFive = document.createElement("td");
        tdFive.innerHTML = teachers_desired_courses_old[i];
        let tdEight = document.createElement("td");
        tdEight.innerHTML = teachers_actual_courses_old[i];
        let Edit_Button = document.createElement("button");
        Edit_Button.innerText = "EDIT";
        Edit_Button.id = "Edit_Teacher_button" + i;
        let tdNine = document.createElement("td");
        tdNine = Edit_Button;
        let Update_Button = document.createElement("button");
        Update_Button.innerText = "UPDATE";
        Update_Button.id = "Update_Teacher_button" + i;
        let tdTen = document.createElement("td");
        tdTen = Update_Button;
        trc.appendChild(tdOne);
        trc.appendChild(tdTwo);
        trc.appendChild(tdThree);
        trc.appendChild(tdFour);
        trc.appendChild(tdSix);
        trc.appendChild(tdSeven);
        trc.appendChild(tdFive);
        trc.appendChild(tdEight);
        trc.appendChild(tdNine);
        trc.appendChild(tdTen);
        document.getElementById("secretary_teachers_table").appendChild(trc);
        Edit_Button.addEventListener("click",function () {
          for (let x = 0; x <teachers_number_old.length; x++) {
            if (Edit_Button.id == "Edit_Teacher_button" + x) {
              document.getElementById("secretary_edit_teacher_form_container").style.display = "block";
              if (secretary_course_teacher_list_edit == null) {
                if (localStorage.getItem('test') == null) {
                  for (let i = 1; i < course_title_old.length; i++) {
                    let secretary_course_list_teacher = document.createElement("option");
                    secretary_course_list_teacher.innerHTML = course_title_old[i];
                    secretary_course_list_teacher.name = course_title_old[i];
                    secretary_course_teacher_list_edit = true;
                    document.getElementById("secretary_Course_teacher_edit").appendChild(secretary_course_list_teacher);
                  }
                }else{
                  for (let i = 1; i < course_title_new.length; i++) {
                    let secretary_course_list_teacher = document.createElement("option");
                    secretary_course_list_teacher.innerHTML = course_title_new[i];
                    secretary_course_list_teacher.name = course_title_new[i];
                    secretary_course_teacher_list_edit = true;
                    document.getElementById("secretary_Course_teacher_edit").appendChild(secretary_course_list_teacher);
                  }
                }
              }
              document.forms["secretary_edit_teacher_form"]["first_name_edit"].value = teachers_first_name_old[x];
              document.forms["secretary_edit_teacher_form"]["last_name_edit"].value = teachers_last_name_old[x];
              document.forms["secretary_edit_teacher_form"]["e-mail_edit"].value = teachers_email_old[x];
              document.forms["secretary_edit_teacher_form"]["subject_edit"].value = teachers_subjects_old[x];
              document.forms["secretary_edit_teacher_form"]["secretary_Course_teacher_edit"].value = teachers_desired_courses_old[x];
              var edit_teacher_position = x;
              localStorage.setItem("edit_teacher_position",JSON.stringify(edit_teacher_position));
              return edit_teacher_position;
            }
          }
        })
        Update_Button.addEventListener("click",function () {
          for (let x = 0; x <teachers_number_old.length; x++) {
            if (Update_Button.id == "Update_Teacher_button" + x) {
              document.getElementById("secretary_update_teacher_form_container").style.display = "block";
              if (secretary_course_teacher_list_update == null) {
                if (localStorage.getItem('test') == null) {
                  for (let i = 1; i < course_title_old.length; i++) {
                    let secretary_course_list_teacher = document.createElement("option");
                    secretary_course_list_teacher.innerHTML = course_title_old[i];
                    secretary_course_list_teacher.name = course_title_old[i];
                    secretary_course_teacher_list_update = true;
                    document.getElementById("secretary_Course_teacher_update").appendChild(secretary_course_list_teacher);
                  }
                }else{
                  for (let i = 1; i < course_title_new.length; i++) {
                    let secretary_course_list_teacher = document.createElement("option");
                    secretary_course_list_teacher.innerHTML = course_title_new[i];
                    secretary_course_list_teacher.name = course_title_new[i];
                    secretary_course_teacher_list_update = true;
                    document.getElementById("secretary_Course_teacher_update").appendChild(secretary_course_list_teacher);
                  }
                }
              }
              document.forms["secretary_update_teacher_form"]["first_name_update"].value = teachers_first_name_old[x];
              document.forms["secretary_update_teacher_form"]["last_name_update"].value = teachers_last_name_old[x];
              document.forms["secretary_update_teacher_form"]["e-mail_update"].value = teachers_email_old[x];
              document.forms["secretary_update_teacher_form"]["subject_update"].value = teachers_subjects_old[x];
              document.forms["secretary_update_teacher_form"]["secretary_Course_teacher_update"].value = teachers_desired_courses_old[x];
              var update_teacher_position = x;
              localStorage.setItem("update_teacher_position",JSON.stringify(update_teacher_position));
              return update_teacher_position;
            }
          }
        })
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
        let tdSix = document.createElement("td");
        tdSix.innerHTML = teachers_subjects_new[i];
        let tdSeven = document.createElement("td");
        tdSeven.innerHTML = teachers_subject_not_available_new[i];
        let tdFive = document.createElement("td");
        tdFive.innerHTML = teachers_desired_courses_new[i];
        let Edit_Button = document.createElement("button");
        let tdEight = document.createElement("td");
        tdEight.innerHTML = teachers_actual_courses_new[i];
        Edit_Button.innerText = "EDIT";
        Edit_Button.id = "Edit_Teacher_button" + i;
        let tdNine = document.createElement("td");
        tdNine = Edit_Button;
        let Update_Button = document.createElement("button");
        Update_Button.innerText = "UPDATE";
        Update_Button.id = "Update_Teacher_button" + i;
        let tdTen = document.createElement("td");
        tdTen = Update_Button;
        trc.appendChild(tdOne);
        trc.appendChild(tdTwo);
        trc.appendChild(tdThree);
        trc.appendChild(tdFour);
        trc.appendChild(tdSix);
        trc.appendChild(tdSeven);
        trc.appendChild(tdFive);
        trc.appendChild(tdEight);
        trc.appendChild(tdNine);
        trc.appendChild(tdTen);
        document.getElementById("secretary_teachers_table").appendChild(trc);
        Edit_Button.addEventListener("click",function () {
          for (let x = 0; x <teachers_number_new.length; x++) {
            if (Edit_Button.id == "Edit_Teacher_button" + x) {
              document.getElementById("secretary_edit_teacher_form_container").style.display = "block";
              if (secretary_course_teacher_list_edit == null) {
                if (localStorage.getItem('test') == null) {
                  for (let i = 1; i < course_title_new.length; i++) {
                    let secretary_course_list_teacher = document.createElement("option");
                    secretary_course_list_teacher.innerHTML = course_title_new[i];
                    secretary_course_list_teacher.name = course_title_new[i];
                    secretary_course_teacher_list_edit = true;
                    document.getElementById("secretary_Course_teacher_edit").appendChild(secretary_course_list_teacher);
                  }
                }else{
                  for (let i = 1; i < course_title_new.length; i++) {
                    let secretary_course_list_teacher = document.createElement("option");
                    secretary_course_list_teacher.innerHTML = course_title_new[i];
                    secretary_course_list_teacher.name = course_title_new[i];
                    secretary_course_teacher_list_edit = true;
                    document.getElementById("secretary_Course_teacher_edit").appendChild(secretary_course_list_teacher);
                  }
                }
              }
              document.forms["secretary_edit_teacher_form"]["first_name_edit"].value = teachers_first_name_new[x];
              document.forms["secretary_edit_teacher_form"]["last_name_edit"].value = teachers_last_name_new[x];
              document.forms["secretary_edit_teacher_form"]["e-mail_edit"].value = teachers_email_new[x];
              document.forms["secretary_edit_teacher_form"]["subject_edit"].value = teachers_subjects_new[x];
              document.forms["secretary_edit_teacher_form"]["secretary_Course_teacher_edit"].value = teachers_desired_courses_new[x];
              var edit_teacher_position = x;
              localStorage.setItem("edit_teacher_position",JSON.stringify(edit_teacher_position));
              return edit_teacher_position;
            }
          }
        })
        Update_Button.addEventListener("click",function () {
          for (let x = 0; x <teachers_number_new.length; x++) {
            if (Update_Button.id == "Update_Teacher_button" + x) {
              document.getElementById("secretary_update_teacher_form_container").style.display = "block";
              if (secretary_course_teacher_list_update == null) {
                if (localStorage.getItem('test') == null) {
                  for (let i = 1; i < course_title_new.length; i++) {
                    let secretary_course_list_teacher = document.createElement("option");
                    secretary_course_list_teacher.innerHTML = course_title_new[i];
                    secretary_course_list_teacher.name = course_title_new[i];
                    secretary_course_teacher_list_update = true;
                    document.getElementById("secretary_Course_teacher_update").appendChild(secretary_course_list_teacher);
                  }
                }else{
                  for (let i = 1; i < course_title_new.length; i++) {
                    let secretary_course_list_teacher = document.createElement("option");
                    secretary_course_list_teacher.innerHTML = course_title_new[i];
                    secretary_course_list_teacher.name = course_title_new[i];
                    secretary_course_teacher_list_update = true;
                    document.getElementById("secretary_Course_teacher_update").appendChild(secretary_course_list_teacher);
                  }
                }
              }
              document.forms["secretary_update_teacher_form"]["first_name_update"].value = teachers_first_name_new[x];
              document.forms["secretary_update_teacher_form"]["last_name_update"].value = teachers_last_name_new[x];
              document.forms["secretary_update_teacher_form"]["e-mail_update"].value = teachers_email_new[x];
              document.forms["secretary_update_teacher_form"]["subject_update"].value = teachers_subjects_new[x];
              document.forms["secretary_update_teacher_form"]["secretary_Course_teacher_update"].value = teachers_desired_courses_new[x];
              var update_teacher_position = x;
              localStorage.setItem("update_teacher_position",JSON.stringify(update_teacher_position));
              return update_teacher_position;
            }
          }
        })
      }
  }
}


if (document.getElementById("stripe_header").innerHTML == "From here you can view and edit some of your personal information and choose the course you wish to attend.You can also add,edit and update assignments. If you wish to change something that is not in this form you will have to contact the secreatry.") {
  let teacher_sign_in_id = JSON.parse(window.localStorage.getItem("teacher_sign_in_id"));
  console.log(teacher_sign_in_id);
    if (localStorage.getItem('test') == null) {
      document.getElementById("table_teacher_home_number").innerHTML = teachers_number_old[teacher_sign_in_id];
      document.getElementById("table_teacher_home_first_name").innerHTML = teachers_first_name_old[teacher_sign_in_id];
      document.getElementById("table_teacher_home_last_name").innerHTML = teachers_last_name_old[teacher_sign_in_id];
      document.getElementById("table_teacher_home_email").innerHTML = teachers_email_old[teacher_sign_in_id];
      document.getElementById("table_teacher_home_password").innerHTML = teachers_Password_old[teacher_sign_in_id];
      document.getElementById("table_teacher_home_subject").innerHTML = teachers_subjects_old[teacher_sign_in_id];
      document.getElementById("table_teacher_home_desired_subject").innerHTML = teachers_subject_not_available_old[teacher_sign_in_id];
      document.getElementById("table_teacher_home_actual_course").innerHTML = teachers_actual_courses_old[teacher_sign_in_id];
    }else{
      document.getElementById("table_teacher_home_number").innerHTML = teachers_number_new[teacher_sign_in_id];
      document.getElementById("table_teacher_home_first_name").innerHTML = teachers_first_name_new[teacher_sign_in_id];
      document.getElementById("table_teacher_home_last_name").innerHTML = teachers_last_name_new[teacher_sign_in_id];
      document.getElementById("table_teacher_home_email").innerHTML = teachers_email_new[teacher_sign_in_id];
      document.getElementById("table_teacher_home_password").innerHTML = teachers_Password_new[teacher_sign_in_id];
      document.getElementById("table_teacher_home_subject").innerHTML = teachers_subjects_new[teacher_sign_in_id];
      document.getElementById("table_teacher_home_desired_subject").innerHTML = teachers_subject_not_available_new[teacher_sign_in_id];
      document.getElementById("table_teacher_home_actual_course").innerHTML = teachers_actual_courses_new[teacher_sign_in_id];
    }
  if (localStorage.getItem('test') == null) {
    document.getElementById("table_teacher_home_desired_course").innerHTML = teachers_desired_courses_old[teacher_sign_in_id];
  }else{
    document.getElementById("table_teacher_home_desired_course").innerHTML = teachers_desired_courses_new[teacher_sign_in_id];
    }
}

function teacher_sign_out() {
  localStorage.removeItem("teacher_sign_in_id");
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
  let teacher_sign_in_id = JSON.parse(window.localStorage.getItem("teacher_sign_in_id"));
  if (localStorage.getItem('test') == null) {
    document.forms["edit_personal_teacher_form"]["first_name"].value = teachers_first_name_old[teacher_sign_in_id];
    document.forms["edit_personal_teacher_form"]["last_name"].value = teachers_last_name_old[teacher_sign_in_id];
    document.forms["edit_personal_teacher_form"]["e-mail"].value = teachers_email_old[teacher_sign_in_id];
    document.forms["edit_personal_teacher_form"]["password"].value = teachers_Password_old[teacher_sign_in_id];
  }else{
    document.forms["edit_personal_teacher_form"]["first_name"].value = teachers_first_name_new[teacher_sign_in_id];
    document.forms["edit_personal_teacher_form"]["last_name"].value = teachers_last_name_new[teacher_sign_in_id];
    document.forms["edit_personal_teacher_form"]["e-mail"].value = teachers_email_new[teacher_sign_in_id];
    document.forms["edit_personal_teacher_form"]["password"].value = teachers_Password_new[teacher_sign_in_id];
  }
  return true;
}

function edit_personal_teacher() {
  let teacher_sign_in_id = JSON.parse(window.localStorage.getItem("teacher_sign_in_id"));
  let first_name = document.forms["edit_personal_teacher_form"]["first_name"].value;
  let last_name = document.forms["edit_personal_teacher_form"]["last_name"].value;
  let email = document.forms["edit_personal_teacher_form"]["e-mail"].value;
  let password = document.forms["edit_personal_teacher_form"]["password"].value;
  if (localStorage.getItem('test') == null) {
    delete teachers_first_name_old[teacher_sign_in_id];
    delete teachers_last_name_old[teacher_sign_in_id];
    delete teachers_email_old[teacher_sign_in_id];
    delete teachers_Password_old[teacher_sign_in_id];
  }else{
    delete teachers_first_name_new[teacher_sign_in_id];
    delete teachers_last_name_new[teacher_sign_in_id];
    delete teachers_email_new[teacher_sign_in_id];
    delete teachers_Password_new[teacher_sign_in_id];
  }
  if (localStorage.getItem('test') == null) {
    for (let i = 1; i <= teachers_number_old.length; i++) {
      if (teachers_email_old[i] == email) {
        window.alert("E-mail already exists!!!");
        return false;
      }
    }
  }else{
    for (let i = 1; i <= teachers_number_new.length; i++) {
      if (teachers_email_new[i] == email) {
        window.alert("E-mail already exists!!!");
        return false;
      }
    }
  }
  if (localStorage.getItem('test') == null) {
    teachers_first_name_old.splice(teacher_sign_in_id,1,first_name);
    teachers_last_name_old.splice(teacher_sign_in_id,1,last_name);
    teachers_Password_old.splice(teacher_sign_in_id,1,password);
    teachers_email_old.splice(teacher_sign_in_id,1,email);
    localStorage.setItem("teachers_number_new",JSON.stringify(teachers_number_old));
    localStorage.setItem("teachers_first_name_new",JSON.stringify(teachers_first_name_old));
    localStorage.setItem("teachers_last_name_new",JSON.stringify(teachers_last_name_old));
    localStorage.setItem("teachers_email_new",JSON.stringify(teachers_email_old));
    localStorage.setItem("teachers_Password_new",JSON.stringify(teachers_Password_old));
    localStorage.setItem("teachers_subjects_new",JSON.stringify(teachers_subjects_old));
    localStorage.setItem("teachers_subject_not_available_new",JSON.stringify(teachers_subject_not_available_old));
    localStorage.setItem("teachers_desired_courses_new",JSON.stringify(teachers_desired_courses_old));
    localStorage.setItem("teachers_actual_courses_new",JSON.stringify(teachers_actual_courses_old));
}else{
    teachers_first_name_new.splice(teacher_sign_in_id,1,first_name);
    teachers_last_name_new.splice(teacher_sign_in_id,1,last_name);
    teachers_Password_new.splice(teacher_sign_in_id,1,password);
    teachers_email_new.splice(teacher_sign_in_id,1,email);
    localStorage.setItem("teachers_number_new",JSON.stringify(teachers_number_new));
    localStorage.setItem("teachers_first_name_new",JSON.stringify(teachers_first_name_new));
    localStorage.setItem("teachers_last_name_new",JSON.stringify(teachers_last_name_new));
    localStorage.setItem("teachers_email_new",JSON.stringify(teachers_email_new));
    localStorage.setItem("teachers_Password_new",JSON.stringify(teachers_Password_new));
    localStorage.setItem("teachers_subjects_new",JSON.stringify(teachers_subjects_new));
    localStorage.setItem("teachers_subject_not_available_new",JSON.stringify(teachers_subject_not_available_new));
    localStorage.setItem("teachers_desired_courses_new",JSON.stringify(teachers_desired_courses_new));
    localStorage.setItem("teachers_actual_courses_new",JSON.stringify(teachers_actual_courses_new));
}
  localStorage.setItem('test', 1);
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
  if (localStorage.getItem('test3') == null) {
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
  let teacher_sign_in_id = JSON.parse(window.localStorage.getItem("teacher_sign_in_id"));
  let desire_subject_teacher = document.forms["course_and_Subject_teacher"]["subject_teacher_select"].value;
  let desire_Course_teacher = document.forms["course_and_Subject_teacher"]["course_teacher_select"].value;
  console.log(desire_Course_teacher);
  if (localStorage.getItem('test') == null) {
    delete teachers_subject_not_available_old[teacher_sign_in_id];
    delete teachers_desired_courses_old[teacher_sign_in_id];
    teachers_subject_not_available_old.splice(teacher_sign_in_id,1,desire_subject_teacher);
    teachers_desired_courses_old.splice(teacher_sign_in_id,1,desire_Course_teacher);
    localStorage.setItem("teachers_number_new",JSON.stringify(teachers_number_old));
    localStorage.setItem("teachers_first_name_new",JSON.stringify(teachers_first_name_old));
    localStorage.setItem("teachers_last_name_new",JSON.stringify(teachers_last_name_old));
    localStorage.setItem("teachers_email_new",JSON.stringify(teachers_email_old));
    localStorage.setItem("teachers_Password_new",JSON.stringify(teachers_Password_old));
    localStorage.setItem("teachers_subjects_new",JSON.stringify(teachers_subjects_old));
    localStorage.setItem("teachers_subject_not_available_new",JSON.stringify(teachers_subject_not_available_old));
    localStorage.setItem("teachers_desired_courses_new",JSON.stringify(teachers_desired_courses_old));
    localStorage.setItem("teachers_actual_courses_new",JSON.stringify(teachers_actual_courses_old));
    console.log(teachers_desired_courses_old);
  }else{
    delete teachers_subject_not_available_new[teacher_sign_in_id];
    delete teachers_desired_courses_new[teacher_sign_in_id];
    teachers_subject_not_available_new.splice(teacher_sign_in_id,1,desire_subject_teacher);
    teachers_desired_courses_new.splice(teacher_sign_in_id,1,desire_Course_teacher);
    localStorage.setItem("teachers_number_new",JSON.stringify(teachers_number_new));
    localStorage.setItem("teachers_first_name_new",JSON.stringify(teachers_first_name_new));
    localStorage.setItem("teachers_last_name_new",JSON.stringify(teachers_last_name_new));
    localStorage.setItem("teachers_email_new",JSON.stringify(teachers_email_new));
    localStorage.setItem("teachers_Password_new",JSON.stringify(teachers_Password_new));
    localStorage.setItem("teachers_subjects_new",JSON.stringify(teachers_subjects_new));
    localStorage.setItem("teachers_subject_not_available_new",JSON.stringify(teachers_subject_not_available_new));
    localStorage.setItem("teachers_desired_courses_new",JSON.stringify(teachers_desired_courses_new));
    localStorage.setItem("teachers_actual_courses_new",JSON.stringify(teachers_actual_courses_new));
    console.log(teachers_desired_courses_new);
  }
  localStorage.setItem('test', 1);
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
  if (localStorage.getItem('test3') == null) {
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
  if (localStorage.getItem('test2') == null) {
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

function secretary_edit_teacher() {
  let edit_teacher_position = JSON.parse(window.localStorage.getItem("edit_teacher_position"));
  let first_name = document.forms["secretary_edit_teacher_form"]["first_name_edit"].value;
  let last_name = document.forms["secretary_edit_teacher_form"]["last_name_edit"].value;
  let email = document.forms["secretary_edit_teacher_form"]["e-mail_edit"].value;
  let subject = document.forms["secretary_edit_teacher_form"]["subject_edit"].value;
  let course = document.forms["secretary_edit_teacher_form"]["secretary_Course_teacher_edit"].value;
  if (localStorage.getItem('test') == null) {
    delete teachers_first_name_old[edit_teacher_position];
    delete teachers_last_name_old[edit_teacher_position];
    delete teachers_email_old[edit_teacher_position];
    delete teachers_subjects_old[edit_teacher_position];
    delete teachers_desired_courses_old[edit_teacher_position];
    delete teachers_subject_not_available_old[edit_teacher_position];
    delete teachers_actual_courses_old[edit_teacher_position];
  }else{
    delete teachers_first_name_new[edit_teacher_position];
    delete teachers_last_name_new[edit_teacher_position];
    delete teachers_email_new[edit_teacher_position];
    delete teachers_subjects_new[edit_teacher_position];
    delete teachers_desired_courses_new[edit_teacher_position];
    delete teachers_subject_not_available_new[edit_teacher_position];
    delete teachers_actual_courses_new[edit_teacher_position];
  }
  if (localStorage.getItem('test') == null) {
    for (let i = 1; i <= teachers_number_old.length; i++) {
      if (teachers_email_old[i] == email) {
        window.alert("E-mail already exists!!!");
        return false;
      }
    }
  }else{
    for (let i = 1; i <= teachers_number_new.length; i++) {
      if (teachers_email_new[i] == email) {
        window.alert("E-mail already exists!!!");
        return false;
      }
    }
  }
  if (localStorage.getItem('test') == null) {
    teachers_first_name_old.splice(edit_teacher_position,1,first_name);
    teachers_last_name_old.splice(edit_teacher_position,1,last_name);
    teachers_subjects_old.splice(edit_teacher_position,1,subject);
    teachers_email_old.splice(edit_teacher_position,1,email);
    teachers_desired_courses_old.splice(edit_teacher_position,1,"none");
    teachers_subject_not_available_old.splice(edit_teacher_position,1,"none");
    teachers_actual_courses_old.splice(edit_teacher_position,1,course);
    localStorage.setItem("teachers_number_new",JSON.stringify(teachers_number_old));
    localStorage.setItem("teachers_first_name_new",JSON.stringify(teachers_first_name_old));
    localStorage.setItem("teachers_last_name_new",JSON.stringify(teachers_last_name_old));
    localStorage.setItem("teachers_email_new",JSON.stringify(teachers_email_old));
    localStorage.setItem("teachers_Password_new",JSON.stringify(teachers_Password_old));
    localStorage.setItem("teachers_subjects_new",JSON.stringify(teachers_subjects_old));
    localStorage.setItem("teachers_subject_not_available_new",JSON.stringify(teachers_subject_not_available_old));
    localStorage.setItem("teachers_desired_courses_new",JSON.stringify(teachers_desired_courses_old));
    localStorage.setItem("teachers_actual_courses_new",JSON.stringify(teachers_actual_courses_old));
}else{
    teachers_first_name_new.splice(edit_teacher_position,1,first_name);
    teachers_last_name_new.splice(edit_teacher_position,1,last_name);
    teachers_subjects_new.splice(edit_teacher_position,1,subject);
    teachers_email_new.splice(edit_teacher_position,1,email);
    teachers_desired_courses_new.splice(edit_teacher_position,1,"none");
    teachers_subject_not_available_new.splice(edit_teacher_position,1,"none");
    teachers_actual_courses_new.splice(edit_teacher_position,1,course);
    localStorage.setItem("teachers_number_new",JSON.stringify(teachers_number_new));
    localStorage.setItem("teachers_first_name_new",JSON.stringify(teachers_first_name_new));
    localStorage.setItem("teachers_last_name_new",JSON.stringify(teachers_last_name_new));
    localStorage.setItem("teachers_email_new",JSON.stringify(teachers_email_new));
    localStorage.setItem("teachers_Password_new",JSON.stringify(teachers_Password_new));
    localStorage.setItem("teachers_subjects_new",JSON.stringify(teachers_subjects_new));
    localStorage.setItem("teachers_subject_not_available_new",JSON.stringify(teachers_subject_not_available_new));
    localStorage.setItem("teachers_desired_courses_new",JSON.stringify(teachers_desired_courses_new));
    localStorage.setItem("teachers_actual_courses_new",JSON.stringify(teachers_actual_courses_new));
}
  localStorage.setItem('test', 1);
  return true;
}

function secretary_update_teacher() {
  let update_teacher_position = JSON.parse(window.localStorage.getItem("update_teacher_position"));
  let first_name = document.forms["secretary_update_teacher_form"]["first_name_update"].value;
  let last_name = document.forms["secretary_update_teacher_form"]["last_name_update"].value;
  let email = document.forms["secretary_update_teacher_form"]["e-mail_update"].value;
  let subject = document.forms["secretary_update_teacher_form"]["subject_update"].value;
  let course = document.forms["secretary_update_teacher_form"]["secretary_Course_teacher_update"].value;
  if (localStorage.getItem('test') == null) {
    delete teachers_first_name_old[update_teacher_position];
    delete teachers_last_name_old[update_teacher_position];
    delete teachers_email_old[update_teacher_position];
    delete teachers_subjects_old[update_teacher_position];
    delete teachers_desired_courses_old[update_teacher_position];
    delete teachers_subject_not_available_old[update_teacher_position];
    delete teachers_actual_courses_old[update_teacher_position];
  }else{
    delete teachers_first_name_new[update_teacher_position];
    delete teachers_last_name_new[update_teacher_position];
    delete teachers_email_new[update_teacher_position];
    delete teachers_subjects_new[update_teacher_position];
    delete teachers_desired_courses_new[update_teacher_position];
    delete teachers_subject_not_available_new[update_teacher_position];
    delete teachers_actual_courses_new[update_teacher_position];
  }
  if (localStorage.getItem('test') == null) {
    for (let i = 1; i <= teachers_number_old.length; i++) {
      if (teachers_email_old[i] == email) {
        window.alert("E-mail already exists!!!");
        return false;
      }
    }
  }else{
    for (let i = 1; i <= teachers_number_new.length; i++) {
      if (teachers_email_new[i] == email) {
        window.alert("E-mail already exists!!!");
        return false;
      }
    }
  }
  if (localStorage.getItem('test') == null) {
    teachers_first_name_old.splice(update_teacher_position,1,first_name);
    teachers_last_name_old.splice(update_teacher_position,1,last_name);
    teachers_subjects_old.splice(update_teacher_position,1,subject);
    teachers_email_old.splice(update_teacher_position,1,email);
    teachers_desired_courses_old.splice(update_teacher_position,1,"none");
    teachers_subject_not_available_old.splice(update_teacher_position,1,"none");
    teachers_actual_courses_old.splice(update_teacher_position,1,course);
    localStorage.setItem("teachers_number_new",JSON.stringify(teachers_number_old));
    localStorage.setItem("teachers_first_name_new",JSON.stringify(teachers_first_name_old));
    localStorage.setItem("teachers_last_name_new",JSON.stringify(teachers_last_name_old));
    localStorage.setItem("teachers_email_new",JSON.stringify(teachers_email_old));
    localStorage.setItem("teachers_Password_new",JSON.stringify(teachers_Password_old));
    localStorage.setItem("teachers_subjects_new",JSON.stringify(teachers_subjects_old));
    localStorage.setItem("teachers_subject_not_available_new",JSON.stringify(teachers_subject_not_available_old));
    localStorage.setItem("teachers_desired_courses_new",JSON.stringify(teachers_desired_courses_old));
    localStorage.setItem("teachers_actual_courses_new",JSON.stringify(teachers_actual_courses_old));
}else{
    teachers_first_name_new.splice(update_teacher_position,1,first_name);
    teachers_last_name_new.splice(update_teacher_position,1,last_name);
    teachers_subjects_new.splice(update_teacher_position,1,subject);
    teachers_email_new.splice(update_teacher_position,1,email);
    teachers_desired_courses_new.splice(update_teacher_position,1,"none");
    teachers_subject_not_available_new.splice(update_teacher_position,1,"none");
    teachers_actual_courses_new.splice(update_teacher_position,1,course);
    localStorage.setItem("teachers_number_new",JSON.stringify(teachers_number_new));
    localStorage.setItem("teachers_first_name_new",JSON.stringify(teachers_first_name_new));
    localStorage.setItem("teachers_last_name_new",JSON.stringify(teachers_last_name_new));
    localStorage.setItem("teachers_email_new",JSON.stringify(teachers_email_new));
    localStorage.setItem("teachers_Password_new",JSON.stringify(teachers_Password_new));
    localStorage.setItem("teachers_subjects_new",JSON.stringify(teachers_subjects_new));
    localStorage.setItem("teachers_subject_not_available_new",JSON.stringify(teachers_subject_not_available_new));
    localStorage.setItem("teachers_desired_courses_new",JSON.stringify(teachers_desired_courses_new));
    localStorage.setItem("teachers_actual_courses_new",JSON.stringify(teachers_actual_courses_new));
}
  localStorage.setItem('test', 1);
  return true;
}


function sortTeacherTable() {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("secretary_teachers_table");
  switching = true;
  while (switching) {
    switching = false;
    rows = table.rows;
    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("TD")[0];
      y = rows[i + 1].getElementsByTagName("TD")[0];
      if (Number(x.innerHTML) > Number(y.innerHTML)) {
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}

function teacherSecretaryHideEditForm() {
  document.getElementById("secretary_edit_teacher_form_container").style.display = "none";
}

function teachertSecretaryHideUpdateForm() {
  document.getElementById("secretary_update_teacher_form_container").style.display = "none";
}

function goBack() {
  location.href = "secretary_home.html";
}
