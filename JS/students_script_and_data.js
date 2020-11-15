// The position inside the arrays correspond with one another. For examle first_name[1] goes with last_name[1]
let students_number = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40];

let students_first_name = ["Demo","Maksymilian","Tamera","Helena","Ronny","Shyla","Eesa","Mark","Deacon","Annette","Tia","Blanka","Yehuda","Ivan","Tanvir","Jaxson","Fatimah","Taybah","Kamile","Connor","Caroline","Frederick","Bethanie","Aubrey","Kavita","Reid","Brax","Mihai","Adeline","Divine","Chanel","Forrest","Roma", "Dollie","Hal","Uwais","Luella","Haroon","Isla-Mae","Susanna","Rima"];

let students_last_name = ["Demo","Grant","Barnes","Henry","Mccormik","Hunt","Melia","Higgins","Langley","Mora","Mcclain","Waters","Richard","Lozano","Bradshaw","Daniels","Hodges","Summers","Boone","Murray","Crowther","Major","Sinclair","Pemberton","Pacheco","Dalby","Leigh","Merritt","Roberson","Rawlings","Levy","Burgess","Sykes","Rodriguez","Coombes","Tucker","Sheridan","Copeland","Evans","Kumar","Burris"];

let students_date_of_birth = [new Date(1990, 01, 01),new Date(1960, 01, 02),new Date(1996, 05, 22),new Date(1996, 05, 24),new Date(1996, 07, 24),new Date(1996, 10, 25),new Date(1996, 05, 17),new Date(1996, 02, 09),new Date(1996, 06, 30),new Date(1996, 07, 07),new Date(1996, 02, 14),new Date(1997, 11, 29),new Date(1997, 12, 17),new Date(1997, 10, 02),new Date(1997, 08, 06),new Date(1997, 02, 05),new Date(1998, 06, 15),new Date(1999, 10, 02),new Date(1999, 05, 21),new Date(1999, 02, 06),new Date(1999, 05, 22),new Date(2000, 01, 01),new Date(2000, 06, 09),new Date(2000, 09, 22),new Date(2000, 06, 12),new Date(2001, 04, 25),new Date(2001, 04, 11),new Date(2001, 05, 18),new Date(2002, 05, 07),new Date(2002, 03, 29),new Date(2002, 09, 16),new Date(1999, 05, 21),new Date(1999, 05, 21),new Date(1999, 05, 21),new Date(2002, 05, 21),new Date(2002, 05, 11),new Date(2002, 09, 14),new Date(2002, 04, 10),new Date(2002, 09, 10),new Date(2002, 04, 23),new Date(2002, 10, 09)];

let students_tutitions_fees = ["Full time:3000€","Part Time:2500€","Online:2000€","Full time:3000€","Part Time:2500€","Online:2000€","Full time:3000€","Part Time:2500€","Online:2000€","Full time:3000€","Part Time:2500€","Online:2000€","Full time:3000€","Part Time:2500€","Online:2000€","Full time:3000€","Part Time:2500€","Online:2000€","Full time:3000€","Part Time:2500€","Online:2000€","Full time:3000€","Part Time:2500€","Online:2000€","Full time:3000€","Part Time:2500€","Online:2000€","Full time:3000€","Part Time:2500€","Online:2000€","Full time:3000€","Part Time:2500€","Online:2000€","Full time:3000€","Part Time:2500€","Online:2000€","Full time:3000€","Part Time:2500€","Online:2000€","Full time:3000€","Part Time:2500€"];

let students_emails = ["demostudent@outlook.com","jusdisgi@msn.com","flakeg@mac.com","akoblin@me.com","gator@live.com","tokuhirom@gmail.com","ramollin@icloud.com","scarolan@yahoo.ca","geekoid@aol.com","vlefevre@comcast.net","corrada@yahoo.com","padme@yahoo.com","mavilar@outlook.com","chlim@msn.com","frikazoyd@live.com","naupa@sbcglobal.net","howler@icloud.com","kayvonf@att.net","scato@yahoo.com","aibrahim@outlook.com","payned@hotmail.com","matloff@me.com","purvis@msn.com","dwheeler@yahoo.com","euice@att.net","richard@aol.com","jnolan@aol.com","tmaek@att.net","frode@icloud.com","wbarker@live.com","evilopie@live.com","gboss@yahoo.com","nelson@live.com","library@gmail.com","agapow@verizon.net","killerinstinct@outlook.com","kassiesa@comcast.net","sumdumass@optonline.net","mpiotr@msn.com","mmccool@msn.com","themer@yahoo.ca"];

let passwords_students = ["demo","RED6xetX","aVY74J6G","YhZx7cze","fRbT2nv4","NK2AMgnv","vj8NG7rY","mB9xRb8r","sQmG9aFf","H6pv83Ay","QxFqWR5g","Cr9G3ZUg","LZ3DzMdB","dwAh2f3K","LUJXsz4A","XPbr7Hqc","gnaK3R6j","CsgV6YFf","rMb7Cz2y","sL8n7NwZ","bmaLR2c5","L4TNtHbk","LHw93WFV","Mbu6k8QG","Qcw5bCWR","ZFTb5nuc","re7UgmFJ","vz6ZT59V","d8uf9Y7m","GETcaY4p","wDHX2sy4","W9vEY5Tq","XMJa49qu","QNzgH4Pc","g9Zmf2sC","rh9CUFsM","FzCg9h3b","Qvg9uYb7","MVr4BTAk","XDM2tBeS","Gc96LRpr"];

let subjects_students = ["demo","History","Programming","Chemistry","Physics","Sociology","Physical Education","History","Programming","Chemistry","Physics","Sociology","Physical Education","History","Programming","Chemistry","Physics","Sociology","Physical Education","History","Programming","Chemistry","Physics","Sociology","Physical Education","History","Programming","Chemistry","Physics","Sociology","Physical Education","History","Programming","Chemistry","Physics","Sociology","Physical Education","History","Programming","Chemistry","Physics"];

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
  for (let i = 0; i <=students_emails.length; i++) {
    if (students_emails[i] === sign_up_e_mail) {
      window.alert("E-mail already exists");
      pass = 0;
      return false;
    }else{
      pass = 1;
    }
  }
  if (sign_up_first_name == "" || sign_up_last_name == "" || sign_up_e_mail == "" || sign_up_password == "" || sign_up_subject == "" || sign_up_date_of_birth == "" || sign_up_tutition_fees == "") {
    window.alert("Not all text inputs are filled in");
    return false;
  } else{
    students_number.push(i);
    students_first_name.push(sign_up_first_name);
    students_last_name.push(sign_up_last_name);
    students_emails.push(sign_up_e_mail);
    passwords_students.push(sign_up_password);
    subjects_students.push(sign_up_subject);
    students_date_of_birth.push(sign_up_date_of_birth);
    students_tutitions_fees.push(sign_up_tutition_fees);
    console.log(students_last_name);
    sign_up_completion.style.display = "block";
    let new_student = [i,sign_up_first_name,sign_up_last_name,sign_up_e_mail,sign_up_password,sign_up_subject,sign_up_date_of_birth,sign_up_tutition_fees];
    localStorage.setItem("newest",JSON.stringify(new_student));
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

function sign_in() {
  let email_sign_in = document.forms["sign_in_student_form"]["e-mail"].value;
  let password_sign_in = document.forms["sign_in_student_form"]["password"].value;
  console.log(email_sign_in);
  console.log(password_sign_in);
  let pass;
  if (email_sign_in === "" || password_sign_in === "") {
    window.alert("Not all inputs are filled in");
    return false;
  }else{
    pass = 1;
  }
  for (let i = 0; i <= students_number.length; i++) {
    if (email_sign_in == students_emails[i] || password_sign_in == passwords_students[i]) {
      console.log(i);
      window.alert("Welcome back " + students_first_name[i] + "!!!");
      setTimeout (function (){location.href = "../student/student_home.html"}, 1000);
      return i;
    }else{
      pass = 0;
    }
  }if (pass === 0) {
    window.alert("Wrong e-mail or Password!!!");
    return false;
  }else{
    return false;
  }
}