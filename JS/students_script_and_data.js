"use strict";

// The position inside the arrays correspond with one another. For examle first_name[1] goes with last_name[1]
let students_number = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40];

let students_first_name = ["Demo","Maksymilian","Tamera","Helena","Ronny","Shyla","Eesa","Mark","Deacon","Annette","Tia","Blanka","Yehuda","Ivan","Tanvir","Jaxson","Fatimah","Taybah","Kamile","Connor","Caroline","Frederick","Bethanie","Aubrey","Kavita","Reid","Brax","Mihai","Adeline","Divine","Chanel","Forrest","Roma", "Dollie","Hal","Uwais","Luella","Haroon","Isla-Mae","Susanna","Rima"];

let students_last_name = ["Demo","Grant","Barnes","Henry","Mccormik","Hunt","Melia","Higgins","Langley","Mora","Mcclain","Waters","Richard","Lozano","Bradshaw","Daniels","Hodges","Summers","Boone","Murray","Crowther","Major","Sinclair","Pemberton","Pacheco","Dalby","Leigh","Merritt","Roberson","Rawlings","Levy","Burgess","Sykes","Rodriguez","Coombes","Tucker","Sheridan","Copeland","Evans","Kumar","Burris"];

let students_date_of_birth_l = [new Date(90, 1, 1),new Date(96, 0, 2),new Date(96, 0, 22),new Date(96, 5, 24),new Date(96, 7, 24),new Date(96, 10, 25),new Date(96, 5, 17),new Date(96, 2, 9),new Date(96, 6, 30),new Date(96, 7, 7),new Date(96, 2, 14),new Date(97, 11, 29),new Date(97, 11, 17),new Date(97, 10, 2),new Date(97, 8, 6),new Date(97, 2, 5),new Date(98, 6, 15),new Date(99, 10, 2),new Date(99, 5, 21),new Date(99, 2, 6),new Date(99, 5, 22),new Date(2000, 0, 1),new Date(2000, 6, 9),new Date(2000, 9, 22),new Date(2000, 6, 12),new Date(2001, 4, 25),new Date(2001, 4, 11),new Date(2001, 5, 18),new Date(2002, 5, 7),new Date(2002, 3, 29),new Date(2002, 9, 16),new Date(1999, 5, 21),new Date(1999, 5, 21),new Date(1999, 5, 21),new Date(2002, 5, 21),new Date(2002, 5, 11),new Date(2002, 9, 14),new Date(2002, 4, 10),new Date(2002, 9, 10),new Date(2002, 4, 23),new Date(2002, 10, 9)];

let students_date_of_birth = students_date_of_birth_l.map(d => d.toDateString());

let students_tutitions_fees = ["Full time:3000€","Part time:2500€","Online:2000€","Full time:3000€","Part time:2500€","Online:2000€","Full time:3000€","Part time:2500€","Online:2000€","Full time:3000€","Part time:2500€","Online:2000€","Full time:3000€","Part time:2500€","Online:2000€","Full time:3000€","Part time:2500€","Online:2000€","Full time:3000€","Part time:2500€","Online:2000€","Full time:3000€","Part time:2500€","Online:2000€","Full time:3000€","Part time:2500€","Online:2000€","Full time:3000€","Part time:2500€","Online:2000€","Full time:3000€","Part time:2500€","Online:2000€","Full time:3000€","Part time:2500€","Online:2000€","Full time:3000€","Part time:2500€","Online:2000€","Full time:3000€","Part time:2500€"];

let students_emails = ["demostudent@outlook.com","jusdisgi@msn.com","flakeg@mac.com","akoblin@me.com","gator@live.com","tokuhirom@gmail.com","ramollin@icloud.com","scarolan@yahoo.ca","geekoid@aol.com","vlefevre@comcast.net","corrada@yahoo.com","padme@yahoo.com","mavilar@outlook.com","chlim@msn.com","frikazoyd@live.com","naupa@sbcglobal.net","howler@icloud.com","kayvonf@att.net","scato@yahoo.com","aibrahim@outlook.com","payned@hotmail.com","matloff@me.com","purvis@msn.com","dwheeler@yahoo.com","euice@att.net","richard@aol.com","jnolan@aol.com","tmaek@att.net","frode@icloud.com","wbarker@live.com","evilopie@live.com","gboss@yahoo.com","nelson@live.com","library@gmail.com","agapow@verizon.net","killerinstinct@outlook.com","kassiesa@comcast.net","sumdumass@optonline.net","mpiotr@msn.com","mmccool@msn.com","themer@yahoo.ca"];

let passwords_students = ["demo","RED6xetX","aVY74J6G","YhZx7cze","fRbT2nv4","NK2AMgnv","vj8NG7rY","mB9xRb8r","sQmG9aFf","H6pv83Ay","QxFqWR5g","Cr9G3ZUg","LZ3DzMdB","dwAh2f3K","LUJXsz4A","XPbr7Hqc","gnaK3R6j","CsgV6YFf","rMb7Cz2y","sL8n7NwZ","bmaLR2c5","L4TNtHbk","LHw93WFV","Mbu6k8QG","Qcw5bCWR","ZFTb5nuc","re7UgmFJ","vz6ZT59V","d8uf9Y7m","GETcaY4p","wDHX2sy4","W9vEY5Tq","XMJa49qu","QNzgH4Pc","g9Zmf2sC","rh9CUFsM","FzCg9h3b","Qvg9uYb7","MVr4BTAk","XDM2tBeS","Gc96LRpr"];

let subjects_students = ["demo","History","Programming","Chemistry","Physics","Sociology","Physical Education","History","Programming","Chemistry","Physics","Sociology","Physical Education","History","Programming","Chemistry","Physics","Sociology","Physical Education","History","Programming","Chemistry","Physics","Sociology","Physical Education","History","Programming","Chemistry","Physics","Sociology","Physical Education","History","Programming","Chemistry","Physics","Sociology","Physical Education","History","Programming","Chemistry","Physics"];

let students_courses = ["demo","Ancient History","JavaScript Programming","Organic Chemistry","Solid State Physics","Classical Sociological Theory","Fitness Through Movement","Medieval History","C# Programming","Atmospheric Chemistry","Biological Physics","Democracy Governance and anticipation","Elementary Physical Education","Reinasance History","Python Programming","Food Chemistry","Computational Physics","Introducing the Social Sciences","Introduction to Sport Management","Ancient History","JavaScript Programming","Organic Chemistry","Solid State Physics","Classical Sociological Theory","Fitness Through Movement","Medieval History","C# Programming","Atmospheric Chemistry","Biological Physics","Democracy Governance and anticipation","Elementary Physical Education","Reinasance History","Python Programming","Food Chemistry","Computational Physics","Introducing the Social Sciences","Introduction to Sport Management","Ancient History","JavaScript Programming","Organic Chemistry","Solid State Physics"];

let students_assignments = ["demo","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""];

let students_courses_desires = ["demo","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""];

if (localStorage.getItem('test2') == null) {
  localStorage.setItem("students_number_old",JSON.stringify(students_number));
  localStorage.setItem("students_first_name_old",JSON.stringify(students_first_name));
  localStorage.setItem("students_last_name_old",JSON.stringify(students_last_name));
  localStorage.setItem("students_date_of_birth_old",JSON.stringify(students_date_of_birth));
  localStorage.setItem("students_tutitions_fees_old",JSON.stringify(students_tutitions_fees));
  localStorage.setItem("students_emails_old",JSON.stringify(students_emails));
  localStorage.setItem("passwords_students_old",JSON.stringify(passwords_students));
  localStorage.setItem("subjects_students_old",JSON.stringify(subjects_students));
  localStorage.setItem("students_courses_old",JSON.stringify(students_courses));
  localStorage.setItem("students_assignments_old",JSON.stringify(students_assignments));
  localStorage.setItem("students_courses_desires_old",JSON.stringify(students_courses_desires));
  //window.alert("First Run Students");
}

let students_number_old = JSON.parse(window.localStorage.getItem("students_number_old"));
let students_first_name_old = JSON.parse(window.localStorage.getItem("students_first_name_old"));
let students_last_name_old = JSON.parse(window.localStorage.getItem("students_last_name_old"));
let students_emails_old = JSON.parse(window.localStorage.getItem("students_emails_old"));
let students_date_of_birth_old = JSON.parse(window.localStorage.getItem("students_date_of_birth_old"));
let students_tutitions_fees_old = JSON.parse(window.localStorage.getItem("students_tutitions_fees_old"));
let passwords_students_old = JSON.parse(window.localStorage.getItem("passwords_students_old"));
let subjects_students_old = JSON.parse(window.localStorage.getItem("subjects_students_old"));
let students_courses_old = JSON.parse(window.localStorage.getItem("students_courses_old"));
let students_assignments_old = JSON.parse(window.localStorage.getItem("students_assignments_old"));
let students_courses_desires_old = JSON.parse(window.localStorage.getItem("students_courses_desires_old"));

if (localStorage.getItem('test2') == null) {
  localStorage.setItem("students_number_new",JSON.stringify(students_number_old));
  localStorage.setItem("students_first_name_new",JSON.stringify(students_first_name_old));
  localStorage.setItem("students_last_name_new",JSON.stringify(students_last_name_old));
  localStorage.setItem("students_date_of_birth_new",JSON.stringify(students_date_of_birth_old));
  localStorage.setItem("students_tutitions_fees_new",JSON.stringify(students_tutitions_fees_old));
  localStorage.setItem("students_emails_new",JSON.stringify(students_emails_old));
  localStorage.setItem("passwords_students_new",JSON.stringify(passwords_students_old));
  localStorage.setItem("subjects_students_new",JSON.stringify(subjects_students_old));
  localStorage.setItem("students_courses_new",JSON.stringify(students_courses_old));
  localStorage.setItem("students_assignments_new",JSON.stringify(students_assignments_old));
  localStorage.setItem("students_courses_desires_new",JSON.stringify(students_courses_desires_old));
}

function sign_up() {
  let sign_up_completion = document.getElementById("sign_up_complete");
  let sign_up_first_name = document.forms["sign_up_student_form"]["first_name"].value;
  let sign_up_last_name = document.forms["sign_up_student_form"]["last_name"].value;
  let sign_up_e_mail = document.forms["sign_up_student_form"]["e-mail"].value;
  let sign_up_password = document.forms["sign_up_student_form"]["password"].value;
  let sign_up_subject = document.forms["sign_up_student_form"]["subject"].value;
  let sign_up_date_of_birth = document.forms["sign_up_student_form"]["Date_Of_Birth"].value;
  let sign_up_tutition_fees = document.forms["sign_up_student_form"]["Tutition_fees"].value;
  let pass;
  let x;
  if (localStorage.getItem('test2') == null) {
    for (let i = 0; i <=students_emails_old.length; i++) {
      if (students_emails_old[i] === sign_up_e_mail) {
        window.alert("E-mail already exists");
        pass = 0;
        return false;
      }else{
        pass = 1;
        x = i;
      }
    }
  }else{
    for (let i = 0; i <=students_emails_new.length; i++) {
      if (students_emails_new[i] === sign_up_e_mail) {
        window.alert("E-mail already exists");
        pass = 0;
        return false;
      }else{
        pass = 1;
        x = i;
      }
    }
  }
  if (sign_up_first_name == "" || sign_up_last_name == "" || sign_up_e_mail == "" || sign_up_password == "" || sign_up_subject == "" || sign_up_date_of_birth == "" || sign_up_tutition_fees == "") {
    window.alert("Not all text inputs are filled in");
    return false;
  } else{
    if (localStorage.getItem('test2') == null) {
      students_number_old.push(x);
      students_first_name_old.push(sign_up_first_name);
      students_last_name_old.push(sign_up_last_name);
      students_emails_old.push(sign_up_e_mail);
      passwords_students_old.push(sign_up_password);
      subjects_students_old.push(sign_up_subject);
      students_date_of_birth_old.push(sign_up_date_of_birth);
      students_tutitions_fees_old.push(sign_up_tutition_fees);
      students_courses_old.push("");
      students_assignments_old.push("");
      students_courses_desires_old.push("");
      localStorage.setItem("students_number_new",JSON.stringify(students_number_old));
      localStorage.setItem("students_first_name_new",JSON.stringify(students_first_name_old));
      localStorage.setItem("students_last_name_new",JSON.stringify(students_last_name_old));
      localStorage.setItem("students_date_of_birth_new",JSON.stringify(students_date_of_birth_old));
      localStorage.setItem("students_tutitions_fees_new",JSON.stringify(students_tutitions_fees_old));
      localStorage.setItem("students_emails_new",JSON.stringify(students_emails_old));
      localStorage.setItem("passwords_students_new",JSON.stringify(passwords_students_old));
      localStorage.setItem("subjects_students_new",JSON.stringify(subjects_students_old));
      localStorage.setItem("students_courses_new",JSON.stringify(students_courses_old));
      localStorage.setItem("students_assignments_new",JSON.stringify(students_assignments_old));
      localStorage.setItem("students_courses_desires_new",JSON.stringify(students_courses_desires_old));
    }else{
      students_number_new.push(x);
      students_first_name_new.push(sign_up_first_name);
      students_last_name_new.push(sign_up_last_name);
      students_emails_new.push(sign_up_e_mail);
      passwords_students_new.push(sign_up_password);
      subjects_students_new.push(sign_up_subject);
      students_date_of_birth_new.push(sign_up_date_of_birth);
      students_tutitions_fees_new.push(sign_up_tutition_fees);
      students_courses_new.push("");
      students_assignments_new.push("");
      students_courses_desires_new.push("");
      localStorage.setItem("students_number_new",JSON.stringify(students_number_new));
      localStorage.setItem("students_first_name_new",JSON.stringify(students_first_name_new));
      localStorage.setItem("students_last_name_new",JSON.stringify(students_last_name_new));
      localStorage.setItem("students_date_of_birth_new",JSON.stringify(students_date_of_birth_new));
      localStorage.setItem("students_tutitions_fees_new",JSON.stringify(students_tutitions_fees_new));
      localStorage.setItem("students_emails_new",JSON.stringify(students_emails_new));
      localStorage.setItem("passwords_students_new",JSON.stringify(passwords_students_new));
      localStorage.setItem("subjects_students_new",JSON.stringify(subjects_students_new));
      localStorage.setItem("students_courses_new",JSON.stringify(students_courses_new));
      localStorage.setItem("students_assignments_new",JSON.stringify(students_assignments_new));
      localStorage.setItem("students_courses_desires_new",JSON.stringify(students_courses_desires_new));
    }
    sign_up_completion.style.display = "block";
    window.alert("Thank you very much for signing up to our school " + sign_up_first_name + "!!!. Go to sign in and enter your account so you can choose your desired course.");
    let new_student = [x,sign_up_first_name,sign_up_last_name,sign_up_e_mail,sign_up_password,sign_up_subject,sign_up_date_of_birth,sign_up_tutition_fees];
    localStorage.setItem('test2', 1);
    setTimeout(function (){sign_up_completion.innerText = "Please wait."}, 1000);
    setTimeout(function (){sign_up_completion.innerText = "Please wait.."}, 2000);
    setTimeout(function (){sign_up_completion.innerText = "Please wait..."}, 3000);
    setTimeout(function (){sign_up_completion.innerText = "Done"}, 4000);
    setTimeout(function (){window.alert("Thank You for Signing Up " + sign_up_first_name + "! Please go to the Signing in Section so you can fill ou the form for the courses that you will be teaching at.")}, 4100);
    console.log(new_student);
    return new_student;
  }
}

let students_number_new = JSON.parse(window.localStorage.getItem("students_number_new"));
let students_first_name_new = JSON.parse(window.localStorage.getItem("students_first_name_new"));
let students_last_name_new = JSON.parse(window.localStorage.getItem("students_last_name_new"));
let students_emails_new = JSON.parse(window.localStorage.getItem("students_emails_new"));
let students_date_of_birth_new = JSON.parse(window.localStorage.getItem("students_date_of_birth_new"));
let students_tutitions_fees_new = JSON.parse(window.localStorage.getItem("students_tutitions_fees_new"));
let passwords_students_new = JSON.parse(window.localStorage.getItem("passwords_students_new"));
let subjects_students_new = JSON.parse(window.localStorage.getItem("subjects_students_new"));
let students_courses_new = JSON.parse(window.localStorage.getItem("students_courses_new"));
let students_assignments_new = JSON.parse(window.localStorage.getItem("students_assignments_new"));
let students_courses_desires_new = JSON.parse(window.localStorage.getItem("students_courses_desires_new"));


function sign_in() {
  let email_sign_in = document.forms["sign_in_student_form"]["e-mail"].value;
  let password_sign_in = document.forms["sign_in_student_form"]["password"].value;
  let pass;
  if (email_sign_in === "" || password_sign_in === "") {
    window.alert("Not all inputs are filled in");
    return false;
  }else{
    pass = 1;
  }
  if (localStorage.getItem('test2') == null) {
    for (let i = 0; i <= students_number_old.length; i++) {
      if (email_sign_in == students_emails_old[i] && password_sign_in == passwords_students_old[i]) {
        console.log(i);
        window.alert("Welcome back " + students_first_name_old[i] + "!!!");
        let student_sign_in_id = students_number_old[i];
        localStorage.setItem("student_sign_in_id",JSON.stringify(student_sign_in_id));
        setTimeout (function (){location.href = "../student/student_home.html"}, 1000);
        return i;
      }else{
        pass = 0;
      }
    }
  }else{
    for (let i = 0; i <= students_number_new.length; i++) {
      if (email_sign_in == students_emails_new[i] && password_sign_in == passwords_students_new[i]) {
        console.log(i);
        window.alert("Welcome back " + students_first_name_new[i] + "!!!");
        let student_sign_in_id = students_number_new[i];
        localStorage.setItem("student_sign_in_id",JSON.stringify(student_sign_in_id));
        setTimeout (function (){location.href = "../student/student_home.html"}, 1000);
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
    return true;
  }
}

if (document.getElementById("stripe_header").innerHTML == "From here you can view and edit some of your personal information and choose the course you wish to attend. If you wish to change something that is not in this form you will have to contact the secreatry.") {
  window.onload = () => {
    let student_sign_in_id = JSON.parse(window.localStorage.getItem("student_sign_in_id"));
    if (localStorage.getItem('test2') == null) {
      document.getElementById("table_student_home_number").innerHTML = students_number_old[student_sign_in_id];
      document.getElementById("table_student_home_first_name").innerHTML = students_first_name_old[student_sign_in_id];
      document.getElementById("table_student_home_last_name").innerHTML = students_last_name_old[student_sign_in_id];
      document.getElementById("table_student_home_date_of_Birth").innerHTML = students_date_of_birth_old[student_sign_in_id];
      document.getElementById("table_student_home_tutition_fees").innerHTML = students_tutitions_fees_old[student_sign_in_id];
      document.getElementById("table_student_home_email").innerHTML = students_emails_old[student_sign_in_id];
      document.getElementById("table_student_home_password").innerHTML = passwords_students_old[student_sign_in_id];
      document.getElementById("table_student_home_subject").innerHTML = subjects_students_old[student_sign_in_id];
      document.getElementById("table_student_home_desired_course").innerHTML = students_courses_desires_old[student_sign_in_id];
    }else{
      document.getElementById("table_student_home_number").innerHTML = students_number_new[student_sign_in_id];
      document.getElementById("table_student_home_first_name").innerHTML = students_first_name_new[student_sign_in_id];
      document.getElementById("table_student_home_last_name").innerHTML = students_last_name_new[student_sign_in_id];
      document.getElementById("table_student_home_date_of_Birth").innerHTML = students_date_of_birth_new[student_sign_in_id];
      document.getElementById("table_student_home_tutition_fees").innerHTML = students_tutitions_fees_new[student_sign_in_id];
      document.getElementById("table_student_home_email").innerHTML = students_emails_new[student_sign_in_id];
      document.getElementById("table_student_home_password").innerHTML = passwords_students_new[student_sign_in_id];
      document.getElementById("table_student_home_subject").innerHTML = subjects_students_new[student_sign_in_id];
      document.getElementById("table_student_home_desired_course").innerHTML = students_courses_desires_new[student_sign_in_id];
    }
  if (localStorage.getItem('test3') == null) {
    document.getElementById("table_student_home_course").innerHTML = students_courses_old[student_sign_in_id];
  }else{
    document.getElementById("table_student_home_course").innerHTML = students_courses_new[student_sign_in_id];
    }
    if (localStorage.getItem('test4') == null) {
      document.getElementById("table_student_home_assignment").innerHTML = students_assignments_old[student_sign_in_id];
    }else{
      document.getElementById("table_student_home_assignment").innerHTML = students_assignments_new[student_sign_in_id];
    }
  }
}

function student_sign_out() {
  localStorage.removeItem("student_sign_in_id");
  location.href = "../Sign_in/Sign_In_Student.html";
}

let secretary_course_list_edit;
let secretary_course_list_update;

if (document.getElementById("stripe_header").innerHTML == "From here you can edit and update students. Click on the edit or update button next to a student and a form will pop up at the bottom of the webpage with his information pre-filled. Use the buttons just below so you can hide the forms and sort the table.") {
  window.onload = () => {
  if (localStorage.getItem('test2') == null) {
    for (let i = 1; i < students_number_old.length; i++) {
      let trc = document.createElement("tr");
        var tdOne = document.createElement("td"); 
        tdOne.innerHTML = students_number_old[i];
        var tdTwo = document.createElement("td"); 
        tdTwo.innerHTML = students_first_name_old[i];
        var tdThree = document.createElement("td"); 
        tdThree.innerHTML = students_last_name_old[i];
        let tdFour = document.createElement("td");
        tdFour.innerHTML = students_emails_old[i];
        let tdFive = document.createElement("td");
        tdFive.innerHTML = students_date_of_birth_old[i];
        let tdSix = document.createElement("td");
        tdSix.innerHTML = students_tutitions_fees_old[i];
        let tdEight = document.createElement("td");
        tdEight.innerHTML = subjects_students_old[i];
        let tdNine = document.createElement("td");
        tdNine.innerHTML = students_courses_old[i];
        let tdTen = document.createElement("td");
        tdTen.innerHTML = students_assignments_old[i];
        let tdEleven = document.createElement("td");
        tdEleven.innerHTML = students_courses_desires_old[i];
        let Edit_Button = document.createElement("button");
        Edit_Button.innerText = "EDIT";
        Edit_Button.id = "Edit_Student_button" + i;
        let tdTwelve = document.createElement("td");
        tdTwelve = Edit_Button;
        let Update_Button = document.createElement("button");
        Update_Button.innerText = "UPDATE";
        Update_Button.id = "Update_Student_button" + i;
        let tdThirteen = document.createElement("td");
        tdThirteen = Update_Button;
        trc.appendChild(tdOne);
        trc.appendChild(tdTwo);
        trc.appendChild(tdThree);
        trc.appendChild(tdFour);
        trc.appendChild(tdFive);
        trc.appendChild(tdSix);
        trc.appendChild(tdEight);
        trc.appendChild(tdNine);
        trc.appendChild(tdTen);
        trc.appendChild(tdEleven);
        trc.appendChild(tdTwelve);
        trc.appendChild(tdThirteen);
        document.getElementById("secretary_students_table").appendChild(trc);
        Edit_Button.addEventListener("click",function () {
          for (let x = 0; x <students_number_old.length; x++) {
            if (Edit_Button.id == "Edit_Student_button" + x) {
              document.getElementById("secretary_edit_student_form_container").style.display = "block";
              if (secretary_course_list_edit == null) {
                if (localStorage.getItem('test3') == null) {
                  for (let i = 1; i < course_title_old.length; i++) {
                    let secretary_course_list_student = document.createElement("option");
                    secretary_course_list_student.innerHTML = course_title_old[i];
                    secretary_course_list_student.name = course_title_old[i];
                    secretary_course_list_edit = true;
                    document.getElementById("secretary_Course_student_edit").appendChild(secretary_course_list_student);
                  }
                }else{
                  for (let i = 1; i < course_title_new.length; i++) {
                    let secretary_course_list_student = document.createElement("option");
                    secretary_course_list_student.innerHTML = course_title_new[i];
                    secretary_course_list_student.name = course_title_new[i];
                    secretary_course_list_edit = true;
                    document.getElementById("secretary_Course_student_edit").appendChild(secretary_course_list_student);
                  }
                }
              }
              document.forms["secretary_edit_student_form"]["first_name_edit"].value = students_first_name_old[x];
              document.forms["secretary_edit_student_form"]["last_name_edit"].value = students_last_name_old[x];
              document.forms["secretary_edit_student_form"]["e-mail_edit"].value = students_emails_old[x];
              document.forms["secretary_edit_student_form"]["Date_Of_Birth_edit"].value = students_date_of_birth_old[x];
              document.forms["secretary_edit_student_form"]["Tutition_fees_edit"].value = students_tutitions_fees_old[x];
              document.forms["secretary_edit_student_form"]["subject_edit"].value = subjects_students_old[x];
              document.forms["secretary_edit_student_form"]["secretary_Course_student_edit"].value = students_courses_old[x];
              var edit_student_position = x;
              localStorage.setItem("edit_student_position",JSON.stringify(edit_student_position));
              return edit_student_position;
            }
          }
        })
        Update_Button.addEventListener("click",function () {
          for (let x = 0; x <students_number_old.length; x++) {
            if (Update_Button.id == "Update_Student_button" + x) {
              document.getElementById("secretary_update_student_form_container").style.display = "block";
              if (secretary_course_list_update == null) {
                if (localStorage.getItem('test3') == null) {
                  for (let i = 1; i < course_title_old.length; i++) {
                    let secretary_course_list_student = document.createElement("option");
                    secretary_course_list_student.innerHTML = course_title_old[i];
                    secretary_course_list_student.name = course_title_old[i];
                    secretary_course_list_update = true;
                    document.getElementById("secretary_Course_student_update").appendChild(secretary_course_list_student);
                  }
                }else{
                  for (let i = 1; i < course_title_new.length; i++) {
                    let secretary_course_list_student = document.createElement("option");
                    secretary_course_list_student.innerHTML = course_title_new[i];
                    secretary_course_list_student.name = course_title_new[i];
                    secretary_course_list_update = true;
                    document.getElementById("secretary_Course_student_update").appendChild(secretary_course_list_student);
                  }
                }
              }
              document.forms["secretary_update_student_form"]["first_name_update"].value = students_first_name_old[x];
              document.forms["secretary_update_student_form"]["last_name_update"].value = students_last_name_old[x];
              document.forms["secretary_update_student_form"]["e-mail_update"].value = students_emails_old[x];
              document.forms["secretary_update_student_form"]["Date_Of_Birth_update"].value = students_date_of_birth_old[x];
              document.forms["secretary_update_student_form"]["Tutition_fees_update"].value = students_tutitions_fees_old[x];
              document.forms["secretary_update_student_form"]["subject_update"].value = subjects_students_old[x];
              document.forms["secretary_update_student_form"]["secretary_Course_student_update"].value = students_courses_old[x];
              var update_student_position = x;
              localStorage.setItem("update_student_position",JSON.stringify(update_student_position));
              return update_student_position;
            }
          }
        })
    }
  }else{
    for (let i = 0; i < students_number_new.length; i++) {
      let trc = document.createElement("tr");
      var tdOne = document.createElement("td"); 
      tdOne.innerHTML = students_number_new[i];
      var tdTwo = document.createElement("td"); 
      tdTwo.innerHTML = students_first_name_new[i];
      var tdThree = document.createElement("td"); 
      tdThree.innerHTML = students_last_name_new[i];
      let tdFour = document.createElement("td");
      tdFour.innerHTML = students_emails_new[i];
      let tdFive = document.createElement("td");
      tdFive.innerHTML = students_date_of_birth_new[i];
      let tdSix = document.createElement("td");
      tdSix.innerHTML = students_tutitions_fees_new[i];
      let tdEight = document.createElement("td");
      tdEight.innerHTML = subjects_students_new[i];
      let tdNine = document.createElement("td");
      tdNine.innerHTML = students_courses_new[i];
      let tdTen = document.createElement("td");
      tdTen.innerHTML = students_assignments_new[i];
      let tdEleven = document.createElement("td");
      tdEleven.innerHTML = students_courses_desires_new[i];
      let Edit_Button = document.createElement("button");
      Edit_Button.innerText = "EDIT";
      Edit_Button.id = "Edit_Student_button" + i;
      let tdTwelve = document.createElement("td");
      tdTwelve = Edit_Button;
      let Update_Button = document.createElement("button");
      Update_Button.innerText = "UPDATE";
      Update_Button.id = "Update_Student_button" + i;
      let tdThirteen = document.createElement("td");
      tdThirteen = Update_Button;
      trc.appendChild(tdOne);
      trc.appendChild(tdTwo);
      trc.appendChild(tdThree);
      trc.appendChild(tdFour);
      trc.appendChild(tdFive);
      trc.appendChild(tdSix);
      trc.appendChild(tdEight);
      trc.appendChild(tdNine);
      trc.appendChild(tdTen);
      trc.appendChild(tdEleven);
      trc.appendChild(tdTwelve);
      trc.appendChild(tdThirteen);
      document.getElementById("secretary_students_table").appendChild(trc);
      Edit_Button.addEventListener("click",function () {
        for (let x = 0; x <students_number_new.length; x++) {
          if (Edit_Button.id == "Edit_Student_button" + x) {
            document.getElementById("secretary_edit_student_form_container").style.display = "block";
            if (secretary_course_list_edit == null) {
              if (localStorage.getItem('test3') == null) {
                for (let i = 1; i < course_title_new.length; i++) {
                  let secretary_course_list_student = document.createElement("option");
                  secretary_course_list_student.innerHTML = course_title_new[i];
                  secretary_course_list_student.name = course_title_new[i];
                  secretary_course_list_edit = true;
                  document.getElementById("secretary_Course_student_edit").appendChild(secretary_course_list_student);
                }
              }else{
                for (let i = 1; i < course_title_new.length; i++) {
                  let secretary_course_list_student = document.createElement("option");
                  secretary_course_list_student.innerHTML = course_title_new[i];
                  secretary_course_list_student.name = course_title_new[i];
                  secretary_course_list_edit = true;
                  document.getElementById("secretary_Course_student_edit").appendChild(secretary_course_list_student);
                }
              }
            }
            document.forms["secretary_edit_student_form"]["first_name_edit"].value = students_first_name_new[x];
            document.forms["secretary_edit_student_form"]["last_name_edit"].value = students_last_name_new[x];
            document.forms["secretary_edit_student_form"]["e-mail_edit"].value = students_emails_new[x];
            document.forms["secretary_edit_student_form"]["Date_Of_Birth_edit"].value = students_date_of_birth_new[x];
            document.forms["secretary_edit_student_form"]["Tutition_fees_edit"].value = students_tutitions_fees_new[x];
            document.forms["secretary_edit_student_form"]["subject_edit"].value = subjects_students_new[x];
            document.forms["secretary_edit_student_form"]["secretary_Course_student_edit"].value = students_courses_new[x];
            var edit_student_position = x;
            localStorage.setItem("edit_student_position",JSON.stringify(edit_student_position));
            return edit_student_position;
          }
        }
      })
      Update_Button.addEventListener("click",function () {
        for (let x = 0; x <students_number_new.length; x++) {
          if (Update_Button.id == "Update_Student_button" + x) {
            document.getElementById("secretary_update_student_form_container").style.display = "block";
            if (secretary_course_list_update == null) {
              if (localStorage.getItem('test3') == null) {
                for (let i = 1; i < course_title_new.length; i++) {
                  let secretary_course_list_student = document.createElement("option");
                  secretary_course_list_student.innerHTML = course_title_new[i];
                  secretary_course_list_student.name = course_title_new[i];
                  secretary_course_list_update = true;
                  document.getElementById("secretary_Course_student_update").appendChild(secretary_course_list_student);
                }
              }else{
                for (let i = 1; i < course_title_new.length; i++) {
                  let secretary_course_list_student = document.createElement("option");
                  secretary_course_list_student.innerHTML = course_title_new[i];
                  secretary_course_list_student.name = course_title_new[i];
                  secretary_course_list_update = true;
                  document.getElementById("secretary_Course_student_update").appendChild(secretary_course_list_student);
                }
              }
            }
            document.forms["secretary_update_student_form"]["first_name_update"].value = students_first_name_new[x];
            document.forms["secretary_update_student_form"]["last_name_update"].value = students_last_name_new[x];
            document.forms["secretary_update_student_form"]["e-mail_update"].value = students_emails_new[x];
            document.forms["secretary_update_student_form"]["Date_Of_Birth_update"].value = students_date_of_birth_new[x];
            document.forms["secretary_update_student_form"]["Tutition_fees_update"].value = students_tutitions_fees_new[x];
            document.forms["secretary_update_student_form"]["subject_update"].value = subjects_students_new[x];
            document.forms["secretary_update_student_form"]["secretary_Course_student_update"].value = students_courses_new[x];
            var update_student_position = x;
            localStorage.setItem("update_student_position",JSON.stringify(update_student_position));
            return update_student_position;
          }
        }
      })
    }
    }
  }
}

function student_edit_personal_information_form() {
  if (document.getElementById("Edit_my_personal_Information_button").innerHTML == "Edit my personal Information Show Form") {
    document.getElementById("edit_personal_student_form_container").style.display = "block";
    document.getElementById("Edit_my_personal_Information_button").innerHTML = "Edit my personal Information Hide Form";
  }else{
    document.getElementById("edit_personal_student_form_container").style.display = "none";
    document.getElementById("Edit_my_personal_Information_button").innerHTML = "Edit my personal Information Show Form";
  }
  let student_sign_in_id = JSON.parse(window.localStorage.getItem("student_sign_in_id"));
  if (localStorage.getItem('test2') == null) {
    document.forms["edit_personal_student_form"]["first_name"].value = students_first_name_old[student_sign_in_id];
    document.forms["edit_personal_student_form"]["last_name"].value = students_last_name_old[student_sign_in_id];
    document.forms["edit_personal_student_form"]["Date_Of_Birth"].value = students_date_of_birth_old[student_sign_in_id];
    document.forms["edit_personal_student_form"]["e-mail"].value = students_emails_old[student_sign_in_id];
    document.forms["edit_personal_student_form"]["password"].value = passwords_students_old[student_sign_in_id];
  }else{
    document.forms["edit_personal_student_form"]["first_name"].value = students_first_name_new[student_sign_in_id];
    document.forms["edit_personal_student_form"]["last_name"].value = students_last_name_new[student_sign_in_id];
    document.forms["edit_personal_student_form"]["Date_Of_Birth"].value = students_date_of_birth_new[student_sign_in_id];
    document.forms["edit_personal_student_form"]["e-mail"].value = students_emails_new[student_sign_in_id];
    document.forms["edit_personal_student_form"]["password"].value = passwords_students_new[student_sign_in_id];
  }
}

function edit_personal_student() {
  let student_sign_in_id = JSON.parse(window.localStorage.getItem("student_sign_in_id"));
  let first_name = document.forms["edit_personal_student_form"]["first_name"].value;
  let last_name = document.forms["edit_personal_student_form"]["last_name"].value;
  let birthday = document.forms["edit_personal_student_form"]["Date_Of_Birth"].value;
  let email = document.forms["edit_personal_student_form"]["e-mail"].value;
  let password = document.forms["edit_personal_student_form"]["password"].value;
  if (localStorage.getItem('test2') == null) {
    let de_first_name = students_first_name_old[student_sign_in_id];
    let de_last_name = students_last_name_old[student_sign_in_id];
    let de_birthday = students_date_of_birth_old[student_sign_in_id];
    let de_email = students_emails_old[student_sign_in_id];
    let de_password = passwords_students_old[student_sign_in_id];
    delete students_first_name_old[student_sign_in_id];
    delete students_last_name_old[student_sign_in_id];
    delete students_date_of_birth_old[student_sign_in_id];
    delete students_emails_old[student_sign_in_id];
    delete passwords_students_old[student_sign_in_id];
  }else{
    let de_first_name = students_first_name_new[student_sign_in_id];
    let de_last_name = students_last_name_new[student_sign_in_id];
    let de_birthday = students_date_of_birth_new[student_sign_in_id];
    let de_email = students_emails_new[student_sign_in_id];
    let de_password = passwords_students_new[student_sign_in_id];
    delete students_first_name_new[student_sign_in_id];
    delete students_last_name_new[student_sign_in_id];
    delete students_date_of_birth_new[student_sign_in_id];
    delete students_emails_new[student_sign_in_id];
    delete passwords_students_new[student_sign_in_id];
  }
  if (localStorage.getItem('test2') == null) {
    for (let i = 1; i <= students_number_old.length; i++) {
      if (students_emails_old[i] == email) {
        students_first_name_old.splice(student_sign_in_id,0,de_first_name);
        students_last_name_old.splice(student_sign_in_id,0,de_last_name);
        students_date_of_birth_old.splice(student_sign_in_id,0,de_birthday);
        students_emails_old.splice(student_sign_in_id,0,de_email);
        passwords_students_old.splice(student_sign_in_id,0,de_password);
        window.alert("E-mail already exists!!!");
        return false;
      }
    }
  }else{
    for (let i = 1; i <= students_number_new.length; i++) {
      if (students_emails_new[i] == email) {
        students_first_name_new.splice(student_sign_in_id,0,de_first_name);
        students_last_name_new.splice(student_sign_in_id,0,de_last_name);
        students_date_of_birth_new.splice(student_sign_in_id,0,de_birthday);
        students_emails_new.splice(student_sign_in_id,0,de_email);
        passwords_students_new.splice(student_sign_in_id,0,de_password);
        window.alert("E-mail already exists!!!");
        return false;
      }
    }
  }
  if (localStorage.getItem('test2') == null) {
    students_first_name_old.splice(student_sign_in_id,1,first_name);
    students_last_name_old.splice(student_sign_in_id,1,last_name);
    students_date_of_birth_old.splice(student_sign_in_id,1,birthday);
    students_emails_old.splice(student_sign_in_id,1,email);
    passwords_students_old.splice(student_sign_in_id,1,password);
    localStorage.setItem("students_number_new",JSON.stringify(students_number_old));
    localStorage.setItem("students_first_name_new",JSON.stringify(students_first_name_old));
    localStorage.setItem("students_last_name_new",JSON.stringify(students_last_name_old));
    localStorage.setItem("students_date_of_birth_new",JSON.stringify(students_date_of_birth_old));
    localStorage.setItem("students_tutitions_fees_new",JSON.stringify(students_tutitions_fees_old));
    localStorage.setItem("students_emails_new",JSON.stringify(students_emails_old));
    localStorage.setItem("passwords_students_new",JSON.stringify(passwords_students_old));
    localStorage.setItem("subjects_students_new",JSON.stringify(subjects_students_old));
    localStorage.setItem("students_courses_new",JSON.stringify(students_courses_old));
    localStorage.setItem("students_assignments_new",JSON.stringify(students_assignments_old));
    localStorage.setItem("students_courses_desires_new",JSON.stringify(students_courses_desires_old));
  }else{
    students_first_name_new.splice(student_sign_in_id,1,first_name);
    students_last_name_new.splice(student_sign_in_id,1,last_name);
    students_date_of_birth_new.splice(student_sign_in_id,1,birthday);
    students_emails_new.splice(student_sign_in_id,1,email);
    passwords_students_new.splice(student_sign_in_id,1,password);
    localStorage.setItem("students_number_new",JSON.stringify(students_number_new));
    localStorage.setItem("students_first_name_new",JSON.stringify(students_first_name_new));
    localStorage.setItem("students_last_name_new",JSON.stringify(students_last_name_new));
    localStorage.setItem("students_date_of_birth_new",JSON.stringify(students_date_of_birth_new));
    localStorage.setItem("students_tutitions_fees_new",JSON.stringify(students_tutitions_fees_new));
    localStorage.setItem("students_emails_new",JSON.stringify(students_emails_new));
    localStorage.setItem("passwords_students_new",JSON.stringify(passwords_students_new));
    localStorage.setItem("subjects_students_new",JSON.stringify(subjects_students_new));
    localStorage.setItem("students_courses_new",JSON.stringify(students_courses_new));
    localStorage.setItem("students_assignments_new",JSON.stringify(students_assignments_new));
    localStorage.setItem("students_courses_desires_new",JSON.stringify(students_courses_desires_new));
  }
  localStorage.setItem('test2', 1);
  return true;
}

function student_choose_desired_course() {
  let student_sign_in_id = JSON.parse(window.localStorage.getItem("student_sign_in_id"));
  if (document.getElementById("student_choose_a_course_button").innerHTML == "Choose a course I wish to attend Show Form") {
    document.getElementById("course_student_form_container").style.display = "block";
    document.getElementById("student_choose_a_course_button").innerHTML = "Choose a course I wish to attend Hide Form";
  }else{
    document.getElementById("course_student_form_container").style.display = "none";
    document.getElementById("student_choose_a_course_button").innerHTML = "Choose a course I wish to attend Show Form";
  }
  if (localStorage.getItem('test3') == null) {
    for (let i = 1; i < course_title_old.length; i++) {
      let student_course_list = document.createElement("option");
      student_course_list.innerHTML = course_title_old[i];
      student_course_list.name = course_title_old[i];
      document.getElementById("course_student_select").appendChild(student_course_list);
    }
  }else{
    for (let i = 1; i < course_title_new.length; i++) {
      let student_course_list = document.createElement("option");
      student_course_list.innerHTML = course_title_new[i];
      student_course_list.name = course_title_new[i];
      document.getElementById("course_student_select").appendChild(student_course_list);
    }
  }
}

function course_personal_student() {
  let student_sign_in_id = JSON.parse(window.localStorage.getItem("student_sign_in_id"));
  let desired_lesson_input_student = document.forms["course_student_form"]["course_student_select"].value;
  if (localStorage.getItem('test2') == null) {
    delete students_courses_desires_old[student_sign_in_id];
    students_courses_desires_old.splice(student_sign_in_id,1,desired_lesson_input_student);
    localStorage.setItem("students_number_new",JSON.stringify(students_number_old));
    localStorage.setItem("students_first_name_new",JSON.stringify(students_first_name_old));
    localStorage.setItem("students_last_name_new",JSON.stringify(students_last_name_old));
    localStorage.setItem("students_date_of_birth_new",JSON.stringify(students_date_of_birth_old));
    localStorage.setItem("students_tutitions_fees_new",JSON.stringify(students_tutitions_fees_old));
    localStorage.setItem("students_emails_new",JSON.stringify(students_emails_old));
    localStorage.setItem("passwords_students_new",JSON.stringify(passwords_students_old));
    localStorage.setItem("subjects_students_new",JSON.stringify(subjects_students_old));
    localStorage.setItem("students_courses_new",JSON.stringify(students_courses_old));
    localStorage.setItem("students_assignments_new",JSON.stringify(students_assignments_old));
    localStorage.setItem("students_courses_desires_new",JSON.stringify(students_courses_desires_old));
  }else{
    delete students_courses_desires_new[student_sign_in_id];
    students_courses_desires_new.splice(student_sign_in_id,1,desired_lesson_input_student);
    localStorage.setItem("students_number_new",JSON.stringify(students_number_new));
    localStorage.setItem("students_first_name_new",JSON.stringify(students_first_name_new));
    localStorage.setItem("students_last_name_new",JSON.stringify(students_last_name_new));
    localStorage.setItem("students_date_of_birth_new",JSON.stringify(students_date_of_birth_new));
    localStorage.setItem("students_tutitions_fees_new",JSON.stringify(students_tutitions_fees_new));
    localStorage.setItem("students_emails_new",JSON.stringify(students_emails_new));
    localStorage.setItem("passwords_students_new",JSON.stringify(passwords_students_new));
    localStorage.setItem("subjects_students_new",JSON.stringify(subjects_students_new));
    localStorage.setItem("students_courses_new",JSON.stringify(students_courses_new));
    localStorage.setItem("students_assignments_new",JSON.stringify(students_assignments_new));
    localStorage.setItem("students_courses_desires_new",JSON.stringify(students_courses_desires_new));
  }
  localStorage.setItem('test2', 1);
  return true;
}

function secretary_edit_student() {
  let edit_student_position = JSON.parse(window.localStorage.getItem("edit_student_position"));
  let first_name = document.forms["secretary_edit_student_form"]["first_name_edit"].value;
  let last_name = document.forms["secretary_edit_student_form"]["last_name_edit"].value;
  let birthday = document.forms["secretary_edit_student_form"]["Date_Of_Birth_edit"].value;
  let email = document.forms["secretary_edit_student_form"]["e-mail_edit"].value;
  let fees = document.forms["secretary_edit_student_form"]["Tutition_fees_edit"].value;
  let subject = document.forms["secretary_edit_student_form"]["subject_edit"].value;
  let course = document.forms["secretary_edit_student_form"]["secretary_Course_student_edit"].value;
  if (localStorage.getItem('test2') == null) {
   delete students_first_name_old[edit_student_position];
   delete students_last_name_old[edit_student_position];
   delete students_emails_old[edit_student_position];
   delete students_date_of_birth_old[edit_student_position];
   delete students_tutitions_fees_old[edit_student_position];
   delete subjects_students_old[edit_student_position];
   delete students_courses_old[edit_student_position];
   delete students_courses_desires_old[edit_student_position];
  }else{
    delete students_first_name_new[edit_student_position];
    delete students_last_name_new[edit_student_position];
    delete students_emails_new[edit_student_position];
    delete students_date_of_birth_new[edit_student_position];
    delete students_tutitions_fees_new[edit_student_position];
    delete subjects_students_new[edit_student_position];
    delete students_courses_new[edit_student_position];
    delete students_courses_desires_new[edit_student_position];
  }
  if (localStorage.getItem('test2') == null) {
    for (let i = 1; i <= students_number_old.length; i++) {
      if (students_emails_old[i] == email) {
        window.alert("E-mail already exists!!!");
        return false;
      }
    }
  }else{
    for (let i = 1; i <= students_number_new.length; i++) {
      if (students_emails_new[i] == email) {
        window.alert("E-mail already exists!!!");
        return false;
      }
    }
  }
  if (localStorage.getItem('test2') == null) {
    students_first_name_old.splice(edit_student_position,1,first_name);
    students_last_name_old.splice(edit_student_position,1,last_name);
    students_date_of_birth_old.splice(edit_student_position,1,birthday);
    students_emails_old.splice(edit_student_position,1,email);
    students_tutitions_fees_old.splice(edit_student_position,1,fees);
    subjects_students_old.splice(edit_student_position,1,subject);
    students_courses_old.splice(edit_student_position,1,course);
    localStorage.setItem("students_number_new",JSON.stringify(students_number_old));
    localStorage.setItem("students_first_name_new",JSON.stringify(students_first_name_old));
    localStorage.setItem("students_last_name_new",JSON.stringify(students_last_name_old));
    localStorage.setItem("students_date_of_birth_new",JSON.stringify(students_date_of_birth_old));
    localStorage.setItem("students_tutitions_fees_new",JSON.stringify(students_tutitions_fees_old));
    localStorage.setItem("students_emails_new",JSON.stringify(students_emails_old));
    localStorage.setItem("passwords_students_new",JSON.stringify(passwords_students_old));
    localStorage.setItem("subjects_students_new",JSON.stringify(subjects_students_old));
    localStorage.setItem("students_courses_new",JSON.stringify(students_courses_old));
    localStorage.setItem("students_assignments_new",JSON.stringify(students_assignments_old));
    localStorage.setItem("students_courses_desires_new",JSON.stringify(students_courses_desires_old));
  }else{
    students_first_name_new.splice(edit_student_position,1,first_name);
    students_last_name_new.splice(edit_student_position,1,last_name);
    students_date_of_birth_new.splice(edit_student_position,1,birthday);
    students_emails_new.splice(edit_student_position,1,email);
    students_tutitions_fees_new.splice(edit_student_position,1,fees);
    subjects_students_new.splice(edit_student_position,1,subject);
    students_courses_new.splice(edit_student_position,1,course);
    localStorage.setItem("students_number_new",JSON.stringify(students_number_new));
    localStorage.setItem("students_first_name_new",JSON.stringify(students_first_name_new));
    localStorage.setItem("students_last_name_new",JSON.stringify(students_last_name_new));
    localStorage.setItem("students_date_of_birth_new",JSON.stringify(students_date_of_birth_new));
    localStorage.setItem("students_tutitions_fees_new",JSON.stringify(students_tutitions_fees_new));
    localStorage.setItem("students_emails_new",JSON.stringify(students_emails_new));
    localStorage.setItem("passwords_students_new",JSON.stringify(passwords_students_new));
    localStorage.setItem("subjects_students_new",JSON.stringify(subjects_students_new));
    localStorage.setItem("students_courses_new",JSON.stringify(students_courses_new));
    localStorage.setItem("students_assignments_new",JSON.stringify(students_assignments_new));
    localStorage.setItem("students_courses_desires_new",JSON.stringify(students_courses_desires_new));
  }
  localStorage.setItem('test2', 1);
  return true;
}

function secretary_update_student() {
  let update_student_position = JSON.parse(window.localStorage.getItem("update_student_position"));
  let first_name = document.forms["secretary_update_student_form"]["first_name_update"].value;
  let last_name = document.forms["secretary_update_student_form"]["last_name_update"].value;
  let birthday = document.forms["secretary_update_student_form"]["Date_Of_Birth_update"].value;
  let email = document.forms["secretary_update_student_form"]["e-mail_update"].value;
  let fees = document.forms["secretary_update_student_form"]["Tutition_fees_update"].value;
  let subject = document.forms["secretary_update_student_form"]["subject_update"].value;
  let course = document.forms["secretary_update_student_form"]["secretary_Course_student_update"].value;
  if (localStorage.getItem('test2') == null) {
   delete students_first_name_old[update_student_position];
   delete students_last_name_old[update_student_position];
   delete students_emails_old[update_student_position];
   delete students_date_of_birth_old[update_student_position];
   delete students_tutitions_fees_old[update_student_position];
   delete subjects_students_old[update_student_position];
   delete students_courses_old[update_student_position];
   delete students_courses_desires_old[update_student_position];
  }else{
    delete students_first_name_new[update_student_position];
    delete students_last_name_new[update_student_position];
    delete students_emails_new[update_student_position];
    delete students_date_of_birth_new[update_student_position];
    delete students_tutitions_fees_new[update_student_position];
    delete subjects_students_new[update_student_position];
    delete students_courses_new[update_student_position];
    delete students_courses_desires_new[update_student_position];
  }
  if (localStorage.getItem('test2') == null) {
    for (let i = 1; i <= students_number_old.length; i++) {
      if (students_emails_old[i] == email) {
        window.alert("E-mail already exists!!!");
        return false;
      }
    }
  }else{
    for (let i = 1; i <= students_number_new.length; i++) {
      if (students_emails_new[i] == email) {
        window.alert("E-mail already exists!!!");
        return false;
      }
    }
  }
  if (localStorage.getItem('test2') == null) {
    students_first_name_old.splice(update_student_position,1,first_name);
    students_last_name_old.splice(update_student_position,1,last_name);
    students_date_of_birth_old.splice(update_student_position,1,birthday);
    students_emails_old.splice(update_student_position,1,email);
    students_tutitions_fees_old.splice(update_student_position,1,fees);
    subjects_students_old.splice(update_student_position,1,subject);
    students_courses_old.splice(update_student_position,1,course);
    localStorage.setItem("students_number_new",JSON.stringify(students_number_old));
    localStorage.setItem("students_first_name_new",JSON.stringify(students_first_name_old));
    localStorage.setItem("students_last_name_new",JSON.stringify(students_last_name_old));
    localStorage.setItem("students_date_of_birth_new",JSON.stringify(students_date_of_birth_old));
    localStorage.setItem("students_tutitions_fees_new",JSON.stringify(students_tutitions_fees_old));
    localStorage.setItem("students_emails_new",JSON.stringify(students_emails_old));
    localStorage.setItem("passwords_students_new",JSON.stringify(passwords_students_old));
    localStorage.setItem("subjects_students_new",JSON.stringify(subjects_students_old));
    localStorage.setItem("students_courses_new",JSON.stringify(students_courses_old));
    localStorage.setItem("students_assignments_new",JSON.stringify(students_assignments_old));
    localStorage.setItem("students_courses_desires_new",JSON.stringify(students_courses_desires_old));
  }else{
    students_first_name_new.splice(update_student_position,1,first_name);
    students_last_name_new.splice(update_student_position,1,last_name);
    students_date_of_birth_new.splice(update_student_position,1,birthday);
    students_emails_new.splice(update_student_position,1,email);
    students_tutitions_fees_new.splice(update_student_position,1,fees);
    subjects_students_new.splice(update_student_position,1,subject);
    students_courses_new.splice(update_student_position,1,course);
    localStorage.setItem("students_number_new",JSON.stringify(students_number_new));
    localStorage.setItem("students_first_name_new",JSON.stringify(students_first_name_new));
    localStorage.setItem("students_last_name_new",JSON.stringify(students_last_name_new));
    localStorage.setItem("students_date_of_birth_new",JSON.stringify(students_date_of_birth_new));
    localStorage.setItem("students_tutitions_fees_new",JSON.stringify(students_tutitions_fees_new));
    localStorage.setItem("students_emails_new",JSON.stringify(students_emails_new));
    localStorage.setItem("passwords_students_new",JSON.stringify(passwords_students_new));
    localStorage.setItem("subjects_students_new",JSON.stringify(subjects_students_new));
    localStorage.setItem("students_courses_new",JSON.stringify(students_courses_new));
    localStorage.setItem("students_assignments_new",JSON.stringify(students_assignments_new));
    localStorage.setItem("students_courses_desires_new",JSON.stringify(students_courses_desires_new));
  }
  localStorage.setItem('test2', 1);
  return true;
}

function sortStudentTable() {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("secretary_students_table");
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

function studentSecretaryHideEditForm() {
  document.getElementById("secretary_edit_student_form_container").style.display = "none";
}

function studentSecretaryHideUpdateForm() {
  document.getElementById("secretary_update_student_form_container").style.display = "none";
}

function goBack() {
  location.href = "secretary_home.html";
}


