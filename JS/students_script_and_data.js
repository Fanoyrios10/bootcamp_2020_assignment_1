// The position inside the arrays correspond with one another. For examle first_name[1] goes with last_name[1]
let students_number = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40];

let students_first_name = ["Demo","Maksymilian","Tamera","Helena","Ronny","Shyla","Eesa","Mark","Deacon","Annette","Tia","Blanka","Yehuda","Ivan","Tanvir","Jaxson","Fatimah","Taybah","Kamile","Connor","Caroline","Frederick","Bethanie","Aubrey","Kavita","Reid","Brax","Mihai","Adeline","Divine","Chanel","Forrest","Roma", "Dollie","Hal","Uwais","Luella","Haroon","Isla-Mae","Susanna","Rima"];

let students_last_name = ["Demo","Grant","Barnes","Henry","Mccormik","Hunt","Melia","Higgins","Langley","Mora","Mcclain","Waters","Richard","Lozano","Bradshaw","Daniels","Hodges","Summers","Boone","Murray","Crowther","Major","Sinclair","Pemberton","Pacheco","Dalby","Leigh","Merritt","Roberson","Rawlings","Levy","Burgess","Sykes","Rodriguez","Coombes","Tucker","Sheridan","Copeland","Evans","Kumar","Burris"];

students_date_of_birth_0 = [new Date(90, 1, 1),new Date(96, 0, 2),new Date(96, 0, 22),new Date(96, 5, 24),new Date(96, 7, 24),new Date(96, 10, 25),new Date(96, 5, 17),new Date(96, 2, 9),new Date(96, 6, 30),new Date(96, 7, 7),new Date(96, 2, 14),new Date(97, 11, 29),new Date(97, 11, 17),new Date(97, 10, 2),new Date(97, 8, 6),new Date(97, 2, 5),new Date(98, 6, 15),new Date(99, 10, 2),new Date(99, 5, 21),new Date(99, 2, 06),new Date(99, 5, 22),new Date(2000, 0, 1),new Date(2000, 6, 9),new Date(2000, 9, 22),new Date(2000, 6, 12),new Date(2001, 4, 25),new Date(2001, 4, 11),new Date(2001, 5, 18),new Date(2002, 5, 7),new Date(2002, 3, 29),new Date(2002, 9, 16),new Date(1999, 5, 21),new Date(1999, 5, 21),new Date(1999, 5, 21),new Date(2002, 5, 21),new Date(2002, 5, 11),new Date(2002, 9, 14),new Date(2002, 4, 10),new Date(2002, 9, 10),new Date(2002, 4, 23),new Date(2002, 10, 09)];

let students_date_of_birth = students_date_of_birth_0.map(d => d.toDateString());

let students_tutitions_fees = ["Full time:3000€","Part Time:2500€","Online:2000€","Full time:3000€","Part Time:2500€","Online:2000€","Full time:3000€","Part Time:2500€","Online:2000€","Full time:3000€","Part Time:2500€","Online:2000€","Full time:3000€","Part Time:2500€","Online:2000€","Full time:3000€","Part Time:2500€","Online:2000€","Full time:3000€","Part Time:2500€","Online:2000€","Full time:3000€","Part Time:2500€","Online:2000€","Full time:3000€","Part Time:2500€","Online:2000€","Full time:3000€","Part Time:2500€","Online:2000€","Full time:3000€","Part Time:2500€","Online:2000€","Full time:3000€","Part Time:2500€","Online:2000€","Full time:3000€","Part Time:2500€","Online:2000€","Full time:3000€","Part Time:2500€"];

let students_emails = ["demostudent@outlook.com","jusdisgi@msn.com","flakeg@mac.com","akoblin@me.com","gator@live.com","tokuhirom@gmail.com","ramollin@icloud.com","scarolan@yahoo.ca","geekoid@aol.com","vlefevre@comcast.net","corrada@yahoo.com","padme@yahoo.com","mavilar@outlook.com","chlim@msn.com","frikazoyd@live.com","naupa@sbcglobal.net","howler@icloud.com","kayvonf@att.net","scato@yahoo.com","aibrahim@outlook.com","payned@hotmail.com","matloff@me.com","purvis@msn.com","dwheeler@yahoo.com","euice@att.net","richard@aol.com","jnolan@aol.com","tmaek@att.net","frode@icloud.com","wbarker@live.com","evilopie@live.com","gboss@yahoo.com","nelson@live.com","library@gmail.com","agapow@verizon.net","killerinstinct@outlook.com","kassiesa@comcast.net","sumdumass@optonline.net","mpiotr@msn.com","mmccool@msn.com","themer@yahoo.ca"];

let passwords_students = ["demo","RED6xetX","aVY74J6G","YhZx7cze","fRbT2nv4","NK2AMgnv","vj8NG7rY","mB9xRb8r","sQmG9aFf","H6pv83Ay","QxFqWR5g","Cr9G3ZUg","LZ3DzMdB","dwAh2f3K","LUJXsz4A","XPbr7Hqc","gnaK3R6j","CsgV6YFf","rMb7Cz2y","sL8n7NwZ","bmaLR2c5","L4TNtHbk","LHw93WFV","Mbu6k8QG","Qcw5bCWR","ZFTb5nuc","re7UgmFJ","vz6ZT59V","d8uf9Y7m","GETcaY4p","wDHX2sy4","W9vEY5Tq","XMJa49qu","QNzgH4Pc","g9Zmf2sC","rh9CUFsM","FzCg9h3b","Qvg9uYb7","MVr4BTAk","XDM2tBeS","Gc96LRpr"];

let subjects_students = ["demo","History","Programming","Chemistry","Physics","Sociology","Physical Education","History","Programming","Chemistry","Physics","Sociology","Physical Education","History","Programming","Chemistry","Physics","Sociology","Physical Education","History","Programming","Chemistry","Physics","Sociology","Physical Education","History","Programming","Chemistry","Physics","Sociology","Physical Education","History","Programming","Chemistry","Physics","Sociology","Physical Education","History","Programming","Chemistry","Physics"];

if (sessionStorage.getItem('test2') == null) {
  sessionStorage.setItem("students_number_old",JSON.stringify(students_number));
  sessionStorage.setItem("students_first_name_old",JSON.stringify(students_first_name));
  sessionStorage.setItem("students_last_name_old",JSON.stringify(students_last_name));
  sessionStorage.setItem("students_date_of_birth_old",JSON.stringify(students_date_of_birth));
  sessionStorage.setItem("students_tutitions_fees_old",JSON.stringify(students_tutitions_fees));
  sessionStorage.setItem("students_emails_old",JSON.stringify(students_emails));
  sessionStorage.setItem("passwords_students_old",JSON.stringify(passwords_students));
  sessionStorage.setItem("subjects_students_old",JSON.stringify(subjects_students));
  window.alert("First Run Students");
}

students_number_old = JSON.parse(window.sessionStorage.getItem("students_number_old"));
students_first_name_old = JSON.parse(window.sessionStorage.getItem("students_first_name_old"));
students_last_name_old = JSON.parse(window.sessionStorage.getItem("students_last_name_old"));
students_emails_old = JSON.parse(window.sessionStorage.getItem("students_emails_old"));
students_date_of_birth_old = JSON.parse(window.sessionStorage.getItem("students_date_of_birth_old"));
students_tutitions_fees_old = JSON.parse(window.sessionStorage.getItem("students_tutitions_fees_old"));
passwords_students_old = JSON.parse(window.sessionStorage.getItem("passwords_students_old"));
subjects_students_old = JSON.parse(window.sessionStorage.getItem("subjects_students_old"));


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
  if (sessionStorage.getItem('test2') == null) {
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
    if (sessionStorage.getItem('test2') == null) {
      students_number_old.push(x);
      students_first_name_old.push(sign_up_first_name);
      students_last_name_old.push(sign_up_last_name);
      students_emails_old.push(sign_up_e_mail);
      passwords_students_old.push(sign_up_password);
      subjects_students_old.push(sign_up_subject);
      students_date_of_birth_old.push(sign_up_date_of_birth);
      students_tutitions_fees_old.push(sign_up_tutition_fees);
      sessionStorage.setItem("students_number_new",JSON.stringify(students_number_old));
      sessionStorage.setItem("students_first_name_new",JSON.stringify(students_first_name_old));
      sessionStorage.setItem("students_last_name_new",JSON.stringify(students_last_name_old));
      sessionStorage.setItem("students_date_of_birth_new",JSON.stringify(students_date_of_birth_old));
      sessionStorage.setItem("students_tutitions_fees_new",JSON.stringify(students_tutitions_fees_old));
      sessionStorage.setItem("students_emails_new",JSON.stringify(students_emails_old));
      sessionStorage.setItem("passwords_students_new",JSON.stringify(passwords_students_old));
      sessionStorage.setItem("subjects_students_new",JSON.stringify(subjects_students_old));
    }else{
      students_number_new = JSON.parse(window.sessionStorage.getItem("students_number_new"));
      students_first_name_new = JSON.parse(window.sessionStorage.getItem("students_first_name_new"));
      students_last_name_new = JSON.parse(window.sessionStorage.getItem("students_last_name_new"));
      students_emails_new = JSON.parse(window.sessionStorage.getItem("students_emails_new"));
      students_date_of_birth_new = JSON.parse(window.sessionStorage.getItem("students_date_of_birth_new"));
      students_tutitions_fees_new = JSON.parse(window.sessionStorage.getItem("students_tutitions_fees_new"));
      passwords_students_new = JSON.parse(window.sessionStorage.getItem("passwords_students_new"));
      subjects_students_new = JSON.parse(window.sessionStorage.getItem("subjects_students_new"));
      students_number_new.push(x);
      students_first_name_new.push(sign_up_first_name);
      students_last_name_new.push(sign_up_last_name);
      students_emails_new.push(sign_up_e_mail);
      passwords_students_new.push(sign_up_password);
      subjects_students_new.push(sign_up_subject);
      students_date_of_birth_new.push(sign_up_date_of_birth);
      students_tutitions_fees_new.push(sign_up_tutition_fees);
      sessionStorage.setItem("students_number_new",JSON.stringify(students_number_new));
      sessionStorage.setItem("students_first_name_new",JSON.stringify(students_first_name_new));
      sessionStorage.setItem("students_last_name_new",JSON.stringify(students_last_name_new));
      sessionStorage.setItem("students_date_of_birth_new",JSON.stringify(students_date_of_birth_new));
      sessionStorage.setItem("students_tutitions_fees_new",JSON.stringify(students_tutitions_fees_new));
      sessionStorage.setItem("students_emails_new",JSON.stringify(students_emails_new));
      sessionStorage.setItem("passwords_students_new",JSON.stringify(passwords_students_new));
      sessionStorage.setItem("subjects_students_new",JSON.stringify(subjects_students_new));
    }
    sign_up_completion.style.display = "block";
    let new_student = [x,sign_up_first_name,sign_up_last_name,sign_up_e_mail,sign_up_password,sign_up_subject,sign_up_date_of_birth,sign_up_tutition_fees];
    sessionStorage.setItem('test2', 1);
    setTimeout(function (){sign_up_completion.innerText = "Please wait."}, 1000);
    setTimeout(function (){sign_up_completion.innerText = "Please wait.."}, 2000);
    setTimeout(function (){sign_up_completion.innerText = "Please wait..."}, 3000);
    setTimeout(function (){sign_up_completion.innerText = "Done"}, 4000);
    setTimeout(function (){window.alert("Thank You for Signing Up " + sign_up_first_name + "! Please go to the Signing in Section so you can fill ou the form for the courses that you will be teaching at.")}, 4100);
    console.log(new_student);
    return new_student;
  }
}

students_number_new = JSON.parse(window.sessionStorage.getItem("students_number_new"));
students_first_name_new = JSON.parse(window.sessionStorage.getItem("students_first_name_new"));
students_last_name_new = JSON.parse(window.sessionStorage.getItem("students_last_name_new"));
students_emails_new = JSON.parse(window.sessionStorage.getItem("students_emails_new"));
students_date_of_birth_new = JSON.parse(window.sessionStorage.getItem("students_date_of_birth_new"));
students_tutitions_fees_new = JSON.parse(window.sessionStorage.getItem("students_tutitions_fees_new"));
passwords_students_new = JSON.parse(window.sessionStorage.getItem("passwords_students_new"));
subjects_students_new = JSON.parse(window.sessionStorage.getItem("subjects_students_new"));

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
  if (sessionStorage.getItem('test2') == null) {
    for (let i = 0; i <= students_number_old.length; i++) {
      if (email_sign_in == students_emails_old[i] || password_sign_in == passwords_students_old[i]) {
        console.log(i);
        window.alert("Welcome back " + students_first_name[i] + "!!!");
        setTimeout (function (){location.href = "../student/student_home.html"}, 1000);
        return i;
      }else{
        pass = 0;
      }
    }
  }else{
    for (let i = 0; i <= students_number_new.length; i++) {
      if (email_sign_in == students_emails_new[i] || password_sign_in == passwords_students_new[i]) {
        console.log(i);
        window.alert("Welcome back " + students_first_name[i] + "!!!");
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


if (document.getElementById("stripe_header").innerHTML == "From here you can edit and update students.") {
  window.onload = () => {
  if (sessionStorage.getItem('test2') == null) {
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
        let tdSeven = document.createElement("td");
        tdSeven.innerHTML = passwords_students_old[i];
        let tdEight = document.createElement("td");
        tdEight.innerHTML = subjects_students_old[i];
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
        trc.appendChild(tdEight);
        trc.appendChild(tdNine);
        trc.appendChild(tdTen);
        document.getElementById("myTable").appendChild(trc);
    }
  }else{
    for (let i = 0; i < students_number_new.length; i++) {  
      let trc = document.createElement("tr");
        let tdOne = document.createElement("td"); 
        tdOne.innerHTML = students_number_new[i];
        let tdTwo = document.createElement("td"); 
        tdTwo.innerHTML = students_first_name_new[i];
        let tdThree = document.createElement("td"); 
        tdThree.innerHTML = students_last_name_new[i];
        let tdFour = document.createElement("td");
        tdFour.innerHTML = students_emails_new[i];
        let tdFive = document.createElement("td");
        tdFive.innerHTML = students_date_of_birth_new[i];
        let tdSix = document.createElement("td");
        tdSix.innerHTML = students_tutitions_fees_new[i];
        let tdSeven = document.createElement("td");
        tdSeven.innerHTML = passwords_students_new[i];
        let tdEight = document.createElement("td");
        tdEight.innerHTML = subjects_students_new[i];
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
        trc.appendChild(tdEight);
        trc.appendChild(tdNine);
        trc.appendChild(tdTen);
        document.getElementById("myTable").appendChild(trc);
      }
    }
  }
}
