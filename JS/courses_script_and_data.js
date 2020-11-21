let course_number = [0,1.1,1.2,1.3,2.1,2.2,2.3,3.1,3.2,3.3,4.1,4.2,4.3,5.1,5.2,5.3,6.1,6.2,6.3];

let course_title = ["demo","Ancient History","Medieval History","Reinasance History","JavaScript Programming", "C# Programming","Python Programming","Organic Chemistry","Atmospheric Chemistry","Food Chemistry","Solid State Physics","Biological Physics","Computational Physics","Classical Sociological Theory","Democracy Governance and anticipation","Introducing the Social Sciences","Fitness Through Movement","Elementary Physical Education","Introduction to Sport Management"];

let course_stream = ["demo","History","History","History","Programming","Programming","Programming","Chemistry","Chemistry","Chemistry","Physics","Physics","Physics","Sociology","Sociology","Sociology","Physical Education","Physical Education","Physical Education"];

let course_type = ["demo","Full Time:3000€","Part Time:2500€","Online:2000€","Full Time:3000€","Part Time:2500€","Online:2000€","Full Time:3000€","Part Time:2500€","Online:2000€","Full Time:3000€","Part Time:2500€","Online:2000€","Full Time:3000€","Part Time:2500€","Online:2000€","Full Time:3000€","Part Time:2500€","Online:2000€"];

let course_start_date_0 = [new Date(90, 0, 0),new Date(2020, 9, 3),new Date(2020, 9, 3),new Date(2020, 9, 3),new Date(2020, 9, 3),new Date(2020, 9, 3),new Date(2020, 9, 3),new Date(2020, 9, 3),new Date(2020, 9, 3),new Date(2020, 9, 3),new Date(2020, 9, 3),new Date(2020, 9, 3),new Date(2020, 9, 3),new Date(2020, 9, 3),new Date(2020, 9, 3),new Date(2020, 9, 3),new Date(2020, 9, 3),new Date(2020, 9, 3),new Date(2020, 9, 3)];

let course_start_date = course_start_date_0.map(d => d.toDateString());

let course_end_date_0 = [new Date(90, 0, 0),new Date(2021, 4, 10),new Date(2021, 7, 10),new Date(2021, 7, 10),new Date(2021, 04, 10),new Date(2021, 7, 10),new Date(2021, 7, 10),new Date(2021, 04, 10),new Date(2021, 7, 10),new Date(2021, 7, 10),new Date(2021, 04, 10),new Date(2021, 7, 10),new Date(2021, 7, 10),new Date(2021, 04, 10),new Date(2021, 7, 10),new Date(2021, 7, 10),new Date(2021, 04, 10),new Date(2021, 7, 10),new Date(2021, 7, 10)];
let course_end_date = course_end_date_0.map(d => d.toDateString());

if (sessionStorage.getItem('test3') == null) {
  sessionStorage.setItem("course_number_old",JSON.stringify(course_number));
  sessionStorage.setItem("course_title_old",JSON.stringify(course_title));
  sessionStorage.setItem("course_stream_old",JSON.stringify(course_stream));
  sessionStorage.setItem("course_type_old",JSON.stringify(course_type));
  sessionStorage.setItem("course_start_date_old",JSON.stringify(course_start_date));
  sessionStorage.setItem("course_end_date_old",JSON.stringify(course_end_date));
  window.alert("First Run Courses");
}

course_number_old = JSON.parse(window.sessionStorage.getItem("course_number_old"));
course_title_old = JSON.parse(window.sessionStorage.getItem("course_title_old"));
course_stream_old = JSON.parse(window.sessionStorage.getItem("course_stream_old"));
course_type_old = JSON.parse(window.sessionStorage.getItem("course_type_old"));
course_start_date_old = JSON.parse(window.sessionStorage.getItem("course_start_date_old"));
course_end_date_old = JSON.parse(window.sessionStorage.getItem("course_end_date_old"));


if (document.getElementById("stripe_header").innerHTML == "From here you can add, edit and update courses.") {
  window.onload = function load(){
    if (sessionStorage.getItem('test3') == null) {
      for (let i = 1; i < course_number_old.length; i++) {
        let trc = document.createElement("tr");
        var tdOne = document.createElement("td");
        tdOne.innerHTML = course_number_old[i];
        var tdTwo = document.createElement("td");
        tdTwo.innerHTML = course_title_old[i];
        var tdThree = document.createElement("td");
        tdThree.innerHTML = course_stream_old[i];
        let tdFour = document.createElement("td");
        tdFour.innerHTML = course_type_old[i];
        let tdFive = document.createElement("td");
        tdFive.innerHTML = course_start_date_old[i];
        let tdSix = document.createElement("td");
        tdSix.innerHTML = course_end_date_old[i];
        let Edit_Button = document.createElement("button");
        Edit_Button.innerText = "EDIT";
        Edit_Button.id = "Edit_course_button" + i;
        let tdNine = document.createElement("td");
        tdNine = Edit_Button;
        let Update_Button = document.createElement("button");
        Update_Button.id = "Update_course_button" + i;
        Update_Button.innerText = "UPDATE";
        let tdTen = document.createElement("td");
        tdTen = Update_Button;
        trc.appendChild(tdOne);
        trc.appendChild(tdTwo);
        trc.appendChild(tdThree);
        trc.appendChild(tdFour);
        trc.appendChild(tdFive);
        trc.appendChild(tdSix);
        trc.appendChild(tdNine);
        trc.appendChild(tdTen);
        document.getElementById("myTable").appendChild(trc);
        Edit_Button.addEventListener("click",function click_edit () {
          for (let x = 1; x <course_number_old.length; x++) {
            if (Edit_Button.id == "Edit_course_button" + x) {
              document.getElementById("form_container_secretary_courses_edit").style.display = "block";
              document.getElementById("header_form_secretary_edit_course").style.display = "block";
              document.getElementById("secretary_form_course_edit").style.display = "block";
              document.forms["secretary_form_course_edit"]["secretary_edit_a_course_number"].value = course_number_old[x];
              document.forms["secretary_form_course_edit"]["secretary_edit_a_course_Title_course"].value = course_title_old[x];
              document.forms["secretary_form_course_edit"]["secretary_edit_a_course_stream"].value = course_stream_old[x];
              document.forms["secretary_form_course_edit"]["secretary_edit_a_course_course_type"].value = course_type_old[x];
              var edit_position = x;
              sessionStorage.setItem("edit_position",JSON.stringify(edit_position));
              return edit_position;
              /*let date_start = course_start_date[x];
              let start_year = date_start.getFullYear();
              let start_month = date_start.getMonth();
              let start_day = date_start.getDate();
              let start_full_date = start_year + "-" + start_month + "-" + start_day;
              document.forms["secretary_form_course_edit"]["secretary_edit_a_course_start_day"].value =start_full_date;*/
            }
          }
        })
        Update_Button.addEventListener("click",function () {
          for (let x = 1; x <course_number_old.length; x++) {
            if (Update_Button.id == "Update_course_button" + x) {
              document.getElementById("form_container_secretary_courses_update").style.display = "block";
              document.getElementById("header_form_secretary_update_course").style.display = "block";
              document.getElementById("secretary_form_course_update").style.display = "block";
              document.forms["secretary_form_course_update"]["secretary_update_a_course_number"].value = course_number_old[x];
              document.forms["secretary_form_course_update"]["secretary_update_a_course_Title_course"].value = course_title_old[x];
              document.forms["secretary_form_course_update"]["secretary_update_a_course_stream"].value = course_stream_old[x];
              document.forms["secretary_form_course_update"]["secretary_update_a_course_course_type"].value = course_type_old[x];
              var update_position = x;
              sessionStorage.setItem("update_position",JSON.stringify(update_position));
              return update_position;
            }
          }
        })
      }
    } else {
      for (let i = 0; i < course_number_new.length; i++) {
        let trc = document.createElement("tr");
        let tdOne = document.createElement("td");
        tdOne.innerHTML = course_number_new[i];
        let tdTwo = document.createElement("td");
        tdTwo.innerHTML = course_title_new[i];
        let tdThree = document.createElement("td");
        tdThree.innerHTML = course_stream_new[i];
        let tdFour = document.createElement("td");
        tdFour.innerHTML = course_type_new[i];
        let tdFive = document.createElement("td");
        tdFive.innerHTML = course_start_date_new[i];
        let tdSix = document.createElement("td");
        tdSix.innerHTML = course_end_date_new[i];
        let Edit_Button = document.createElement("button");
        Edit_Button.innerText = "EDIT";
        Edit_Button.id = "Edit_course_button" + i;
        let tdNine = document.createElement("td");
        tdNine = Edit_Button;
        let Update_Button = document.createElement("button");
        Update_Button.id = "Update_course_button" + i;
        Update_Button.innerText = "UPDATE";
        let tdTen = document.createElement("td");
        tdTen = Update_Button;
        trc.appendChild(tdOne);
        trc.appendChild(tdTwo);
        trc.appendChild(tdThree);
        trc.appendChild(tdFour);
        trc.appendChild(tdFive);
        trc.appendChild(tdSix);
        trc.appendChild(tdNine);
        trc.appendChild(tdTen);
        document.getElementById("myTable").appendChild(trc);
        Edit_Button.addEventListener("click",function () {
          for (let x = 1; x <course_number_new.length; x++) {
            if (Edit_Button.id == "Edit_course_button" + x) {
              document.getElementById("form_container_secretary_courses_edit").style.display = "block";
              document.getElementById("header_form_secretary_edit_course").style.display = "block";
              document.getElementById("secretary_form_course_edit").style.display = "block";
              document.forms["secretary_form_course_edit"]["secretary_edit_a_course_number"].value = course_number_new[x];
              document.forms["secretary_form_course_edit"]["secretary_edit_a_course_Title_course"].value = course_title_new[x];
              document.forms["secretary_form_course_edit"]["secretary_edit_a_course_stream"].value = course_stream_new[x];
              document.forms["secretary_form_course_edit"]["secretary_edit_a_course_course_type"].value = course_type_new[x];
              var edit_position = x;
              sessionStorage.setItem("edit_position",JSON.stringify(edit_position));
              return edit_position;
            }
          }
        })
        Update_Button.addEventListener("click",function () {
          for (let x = 1; x <course_number_new.length; x++) {
            if (Update_Button.id == "Update_course_button" + x) {
              document.getElementById("form_container_secretary_courses_update").style.display = "block";
              document.getElementById("header_form_secretary_update_course").style.display = "block";
              document.getElementById("secretary_form_course_update").style.display = "block";
              document.forms["secretary_form_course_update"]["secretary_update_a_course_number"].value = course_number_new[x];
              document.forms["secretary_form_course_update"]["secretary_update_a_course_Title_course"].value = course_title_new[x];
              document.forms["secretary_form_course_update"]["secretary_update_a_course_stream"].value = course_stream_new[x];
              document.forms["secretary_form_course_update"]["secretary_update_a_course_course_type"].value = course_type_new[x];
              var update_position = x;
              sessionStorage.setItem("update_position",JSON.stringify(update_position));
              return update_position;
            }
          }
        })
      }
    }
  }
}

function update_Course() {
  update_position = JSON.parse(window.sessionStorage.getItem("update_position"));
  if (sessionStorage.getItem('test3') == null) {
    let de_number = course_number_old[update_position];
    let de__title = course_title_old[update_position];
    let de_Stream = course_stream_old[update_position];
    let de_Type = course_type_old[update_position];
    let de_start_date = course_start_date_old[update_position];
    let de_end_date = course_end_date_old[update_position];
    delete course_number_old[update_position];
    delete course_title_old[update_position];
    delete course_stream_old[update_position];
    delete course_type_old[update_position];
    delete course_start_date_old[update_position];
    delete course_end_date_old[update_position];
  }else{
    let de_number = course_number_new[update_position];
    let de__title = course_title_new[update_position];
    let de_Stream = course_stream_new[update_position];
    let de_Type = course_type_new[update_position];
    let de_start_date = course_start_date_new[update_position];
    let de_end_date = course_end_date_new[update_position];
    delete course_number_new[update_position];
    delete course_title_new[update_position];
    delete course_stream_new[update_position];
    delete course_type_new[update_position];
    delete course_start_date_new[update_position];
    delete course_end_date_new[update_position];
  }
  let update_number = document.forms["secretary_form_course_update"]["secretary_update_a_course_number"].value;
  let update_title = document.forms["secretary_form_course_update"]["secretary_update_a_course_Title_course"].value;
  let update_Stream = document.forms["secretary_form_course_update"]["secretary_update_a_course_stream"].value;
  let update_Type = document.forms["secretary_form_course_update"]["secretary_update_a_course_course_type"].value;
  let update_start_date = document.forms["secretary_form_course_update"]["secretary_update_a_course_start_day"].value;
  let update_end_date = document.forms["secretary_form_course_update"]["secretary_update_a_course_End_date"].value;
  if (sessionStorage.getItem('test3') == null) {
    for (let i = 1; i < course_number_old.length; i++) {
      if (course_number_old[i] == update_number || course_title_old[i] == update_title) {
        course_number_old.splice(update_position,0,de_number);
        course_title_old.splice(update_position,0,de__title);
        course_stream_old.splice(update_position,0,de_Stream);
        course_type_old.splice(update_position,0,de_Type);
        course_start_date_old.splice(update_position,0,de_start_date);
        course_end_date_old.splice(update_position,0,de_end_date);
        window.alert("Number or Title already exists!!!");
        return false;
      }
    }
  }else{
    for (let i = 1; i < course_number_new.length; i++) {
      if (course_number_new[i] == update_number || course_title_new[i] == update_title) {
        course_number_new.splice(update_position,0,de_number);
        course_title_new.splice(update_position,0,de__title);
        course_stream_new.splice(update_position,0,de_Stream);
        course_type_new.splice(update_position,0,de_Type);
        course_start_date_new.splice(update_position,0,de_start_date);
        course_end_date_new.splice(update_position,0,de_end_date);
        window.alert("Number or Title already exists!!!");
        return false;
      }
    }
  }
  if (sessionStorage.getItem('test3') == null) {
    course_number_old.splice(update_position,1,update_number);
    course_title_old.splice(update_position,1,update_title);
    course_stream_old.splice(update_position,1,update_Stream);
    course_type_old.splice(update_position,1,update_Type);
    course_start_date_old.splice(update_position,1,update_start_date);
    course_end_date_old.splice(update_position,1,update_end_date);
    sessionStorage.setItem("course_number_new",JSON.stringify(course_number_old));
    sessionStorage.setItem("course_title_new",JSON.stringify(course_title_old));
    sessionStorage.setItem("course_stream_new",JSON.stringify(course_stream_old));
    sessionStorage.setItem("course_type_new",JSON.stringify(course_type_old));
    sessionStorage.setItem("course_start_date_new",JSON.stringify(course_start_date_old));
    sessionStorage.setItem("course_end_date_new",JSON.stringify(course_end_date_old));
  }else{
    course_number_new.splice(update_position,1,update_number);
    course_title_new.splice(update_position,1,update_title);
    course_stream_new.splice(update_position,1,update_Stream);
    course_type_new.splice(update_position,1,update_Type);
    course_start_date_new.splice(update_position,1,update_start_date);
    course_end_date_new.splice(update_position,1,update_end_date);
    sessionStorage.setItem("course_number_new",JSON.stringify(course_number_new));
    sessionStorage.setItem("course_title_new",JSON.stringify(course_title_new));
    sessionStorage.setItem("course_stream_new",JSON.stringify(course_stream_new));
    sessionStorage.setItem("course_type_new",JSON.stringify(course_type_new));
    sessionStorage.setItem("course_start_date_new",JSON.stringify(course_start_date_new));
    sessionStorage.setItem("course_end_date_new",JSON.stringify(course_end_date_new));
  }
  sessionStorage.setItem('test3', 1);
  return true;
}

function edit_Course() {
  edit_position = JSON.parse(window.sessionStorage.getItem("edit_position"));
  if (sessionStorage.getItem('test3') == null) {
    let de_number = course_number_old[edit_position];
    let de__title = course_title_old[edit_position];
    let de_Stream = course_stream_old[edit_position];
    let de_Type = course_type_old[edit_position];
    let de_start_date = course_start_date_old[edit_position];
    let de_end_date = course_end_date_old[edit_position];
    delete course_number_old[edit_position];
    delete course_title_old[edit_position];
    delete course_stream_old[edit_position];
    delete course_type_old[edit_position];
    delete course_start_date_old[edit_position];
    delete course_end_date_old[edit_position];
  }else{
    let de_number = course_number_new[edit_position];
    let de__title = course_title_new[edit_position];
    let de_Stream = course_stream_new[edit_position];
    let de_Type = course_type_new[edit_position];
    let de_start_date = course_start_date_new[edit_position];
    let de_end_date = course_end_date_new[edit_position];
    delete course_number_new[edit_position];
    delete course_title_new[edit_position];
    delete course_stream_new[edit_position];
    delete course_type_new[edit_position];
    delete course_start_date_new[edit_position];
    delete course_end_date_new[edit_position];
  }
  let edit_number = document.forms["secretary_form_course_edit"]["secretary_edit_a_course_number"].value;
  let edit_title = document.forms["secretary_form_course_edit"]["secretary_edit_a_course_Title_course"].value;
  let edit_Stream = document.forms["secretary_form_course_edit"]["secretary_edit_a_course_stream"].value;
  let edit_Type = document.forms["secretary_form_course_edit"]["secretary_edit_a_course_course_type"].value;
  let edit_start_date = document.forms["secretary_form_course_edit"]["secretary_edit_a_course_start_day"].value;
  let edit_end_date = document.forms["secretary_form_course_edit"]["secretary_edit_a_course_End_date"].value;
  if (sessionStorage.getItem('test3') == null) {
    for (let i = 1; i < course_number_old.length; i++) {
      if (course_number_old[i] == edit_number || course_title_old[i] == edit_title) {
        course_number_old.splice(edit_position,0,de_number);
        course_title_old.splice(edit_position,0,de__title);
        course_stream_old.splice(edit_position,0,de_Stream);
        course_type_old.splice(edit_position,0,de_Type);
        course_start_date_old.splice(edit_position,0,de_start_date);
        course_end_date_old.splice(edit_position,0,de_end_date);
        window.alert("Number or Title already exists!!!");
        return false;
      }
    }
  }else{
    for (let i = 1; i < course_number_new.length; i++) {
      if (course_number_new[i] == edit_number || course_title_new[i] == edit_title) {
        course_number_new.splice(edit_position,0,de_number);
        course_title_new.splice(edit_position,0,de__title);
        course_stream_new.splice(edit_position,0,de_Stream);
        course_type_new.splice(edit_position,0,de_Type);
        course_start_date_new.splice(edit_position,0,de_start_date);
        course_end_date_new.splice(edit_position,0,de_end_date);
        window.alert("Number or Title already exists!!!");
        return false;
      }
    }
  }
  if (sessionStorage.getItem('test3') == null) {
    course_number_old.splice(edit_position,1,edit_number);
    course_title_old.splice(edit_position,1,edit_title);
    course_stream_old.splice(edit_position,1,edit_Stream);
    course_type_old.splice(edit_position,1,edit_Type);
    course_start_date_old.splice(edit_position,1,edit_start_date);
    course_end_date_old.splice(edit_position,1,edit_end_date);
    sessionStorage.setItem("course_number_new",JSON.stringify(course_number_old));
    sessionStorage.setItem("course_title_new",JSON.stringify(course_title_old));
    sessionStorage.setItem("course_stream_new",JSON.stringify(course_stream_old));
    sessionStorage.setItem("course_type_new",JSON.stringify(course_type_old));
    sessionStorage.setItem("course_start_date_new",JSON.stringify(course_start_date_old));
    sessionStorage.setItem("course_end_date_new",JSON.stringify(course_end_date_old));
  }else{
    course_number_new.splice(edit_position,1,edit_number);
    course_title_new.splice(edit_position,1,edit_title);
    course_stream_new.splice(edit_position,1,edit_Stream);
    course_type_new.splice(edit_position,1,edit_Type);
    course_start_date_new.splice(edit_position,1,edit_start_date);
    course_end_date_new.splice(edit_position,1,edit_end_date);
    sessionStorage.setItem("course_number_new",JSON.stringify(course_number_new));
    sessionStorage.setItem("course_title_new",JSON.stringify(course_title_new));
    sessionStorage.setItem("course_stream_new",JSON.stringify(course_stream_new));
    sessionStorage.setItem("course_type_new",JSON.stringify(course_type_new));
    sessionStorage.setItem("course_start_date_new",JSON.stringify(course_start_date_new));
    sessionStorage.setItem("course_end_date_new",JSON.stringify(course_end_date_new));
  }
  sessionStorage.setItem('test3', 1);
  return true;
}


function secretary_add_course_form_appear() {
  if (document.getElementById("secretary_add_course_form_appear_button").innerText == "Show Add Course Form") {
    document.getElementById("form_container_secretary_courses_add").style.display = "block";
    document.getElementById("header_form_secretary_add_course").style.display = "block";
    document.getElementById("secretary_form_course_add").style.display = "block";
    document.getElementById("secretary_add_course_form_appear_button").innerText = "Hide Add Course Form";
  } else{
    document.getElementById("form_container_secretary_courses_add").style.display = "none";
    document.getElementById("header_form_secretary_add_course").style.display = "none";
    document.getElementById("secretary_form_course_add").style.display = "none";
    document.getElementById("secretary_add_course_form_appear_button").innerText = "Show Add Course Form";
  }
}


if (document.getElementById("stripe_header").innerHTML == "From here you can add, edit and update courses.") {
  let oneYearLater = new Date();
  let sixMonthsLater = new Date();
  console.log(sixMonthsLater);
  oneYearLater.setFullYear(oneYearLater.getFullYear() + 1);
  sixMonthsLater.setMonth(sixMonthsLater.getMonth() + 6);
  secretary_create_a_course_start_day.min = new Date().toISOString().split("T")[0];
  secretary_create_a_course_start_day.max = sixMonthsLater.toISOString().split("T")[0];
  secretary_create_a_course_End_date.min = sixMonthsLater.toISOString().split("T")[0];
  secretary_create_a_course_End_date.max = oneYearLater.toISOString().split("T")[0];
}

function Add_Course() {
  let Add_number = document.forms["secretary_form_course_add"]["secretary_add_a_course_number"].value;
  let Add_title = document.forms["secretary_form_course_add"]["secretary_add_a_course_Title_course"].value;
  let Add_Stream = document.forms["secretary_form_course_add"]["secretary_create_a_course_stream"].value;
  let Add_Type = document.forms["secretary_form_course_add"]["secretary_create_a_course_course_type"].value;
  let Add_start_date = document.forms["secretary_form_course_add"]["secretary_create_a_course_start_day"].value;
  let Add_end_date = document.forms["secretary_form_course_add"]["secretary_create_a_course_End_date"].value;
  if (sessionStorage.getItem('test3') == null) {
    for (let i = 1; i < course_number_old.length; i++) {
      if (course_number_old[i] == Add_number || course_title_old[i] == Add_title) {
        window.alert("Number or Title already exists!!!");
        return false;
      }
    }
  }else{
    for (let i = 1; i < course_number_new.length; i++) {
      if (course_number_new[i] == Add_number || course_title_new[i] == Add_title) {
        window.alert("Number or Title already exists!!!");
        return false;
      }
    }
  }
  if (sessionStorage.getItem('test3') == null) {
    course_number_old.push(Add_number);
    course_title_old.push(Add_title);
    course_stream_old.push(Add_Stream);
    course_type_old.push(Add_Type);
    course_start_date_old.push(Add_start_date);
    course_end_date_old.push(Add_end_date);
    sessionStorage.setItem("course_number_new",JSON.stringify(course_number_old));
    sessionStorage.setItem("course_title_new",JSON.stringify(course_title_old));
    sessionStorage.setItem("course_stream_new",JSON.stringify(course_stream_old));
    sessionStorage.setItem("course_type_new",JSON.stringify(course_type_old));
    sessionStorage.setItem("course_start_date_new",JSON.stringify(course_start_date_old));
    sessionStorage.setItem("course_end_date_new",JSON.stringify(course_end_date_old));
  }else{
    course_number_new.push(Add_number);
    course_title_new.push(Add_title);
    course_stream_new.push(Add_Stream);
    course_type_new.push(Add_Type);
    course_start_date_new.push(Add_start_date);
    course_end_date_new.push(Add_end_date);
    sessionStorage.setItem("course_number_new",JSON.stringify(course_number_new));
    sessionStorage.setItem("course_title_new",JSON.stringify(course_title_new));
    sessionStorage.setItem("course_stream_new",JSON.stringify(course_stream_new));
    sessionStorage.setItem("course_type_new",JSON.stringify(course_type_new));
    sessionStorage.setItem("course_start_date_new",JSON.stringify(course_start_date_new));
    sessionStorage.setItem("course_end_date_new",JSON.stringify(course_end_date_new));
  }
  let new_course = [Add_number,Add_title,Add_Stream,Add_Type,Add_start_date,Add_end_date];
  sessionStorage.setItem('test3', 1);
  console.log(new_course);
  return new_course;
}

course_number_new = JSON.parse(window.sessionStorage.getItem("course_number_new"));
course_title_new = JSON.parse(window.sessionStorage.getItem("course_title_new"));
course_stream_new = JSON.parse(window.sessionStorage.getItem("course_stream_new"));
course_type_new = JSON.parse(window.sessionStorage.getItem("course_type_new"));
course_start_date_new = JSON.parse(window.sessionStorage.getItem("course_start_date_new"));
course_end_date_new = JSON.parse(window.sessionStorage.getItem("course_end_date_new"));

function sortCourseTable() {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("myTable");
  switching = true;
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 1; i < (rows.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("TD")[0];
      y = rows[i + 1].getElementsByTagName("TD")[0];
      //check if the two rows should switch place:
      if (Number(x.innerHTML) > Number(y.innerHTML)) {
        //if so, mark as a switch and break the loop:
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}

