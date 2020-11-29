let assignments_number = [0];

let assignments_title = ["demo"];

let assignments_description = ["demo"];

let assignments_submission = [new Date()];

let assignments_oral_mark = ["demo"];

let assignments_total_mark = ["demo"];

let assignments_course_link = ["demo"];

let assignments_student_name_assigned = ["demo"];

if (localStorage.getItem('test4') == null) {
  localStorage.setItem("assignments_number_old",JSON.stringify(assignments_number));
  localStorage.setItem("assignments_title_old",JSON.stringify(assignments_title));
  localStorage.setItem("assignments_description_old",JSON.stringify(assignments_description));
  localStorage.setItem("assignments_submission_old",JSON.stringify(assignments_submission));
  localStorage.setItem("assignments_oral_mark_old",JSON.stringify(assignments_oral_mark));
  localStorage.setItem("assignments_total_mark_old",JSON.stringify(assignments_total_mark));
  localStorage.setItem("assignments_course_link_old",JSON.stringify(assignments_course_link));
  localStorage.setItem("assignments_student_name_assigned_old",JSON.stringify(assignments_student_name_assigned));
  //window.alert("First Run Assignments");
}

assignments_number_old = JSON.parse(window.localStorage.getItem("assignments_number_old"));
assignments_title_old = JSON.parse(window.localStorage.getItem("assignments_title_old"));
assignments_description_old = JSON.parse(window.localStorage.getItem("assignments_description_old"));
assignments_submission_old = JSON.parse(window.localStorage.getItem("assignments_submission_old"));
assignments_oral_mark_old = JSON.parse(window.localStorage.getItem("assignments_oral_mark_old"));
assignments_total_mark_old = JSON.parse(window.localStorage.getItem("assignments_total_mark_old"));
assignments_course_link_old = JSON.parse(window.localStorage.getItem("assignments_course_link_old"));
assignments_student_name_assigned_old = JSON.parse(window.localStorage.getItem("assignments_student_name_assigned_old"));

if (localStorage.getItem('test4') == null) {
  localStorage.setItem("assignments_number_new",JSON.stringify(assignments_number_old));
  localStorage.setItem("assignments_title_new",JSON.stringify(assignments_title_old));
  localStorage.setItem("assignments_description_new",JSON.stringify(assignments_description_old));
  localStorage.setItem("assignments_submission_new",JSON.stringify(assignments_submission_old));
  localStorage.setItem("assignments_oral_mark_new",JSON.stringify(assignments_oral_mark_old));
  localStorage.setItem("assignments_total_mark_new",JSON.stringify(assignments_total_mark_old));
  localStorage.setItem("assignments_course_link_new",JSON.stringify(assignments_course_link_old));
  localStorage.setItem("assignments_student_name_assigned_new",JSON.stringify(assignments_student_name_assigned_old));
}

assignments_number_new = JSON.parse(window.localStorage.getItem("assignments_number_new"));
assignments_title_new = JSON.parse(window.localStorage.getItem("assignments_title_new"));
assignments_description_new = JSON.parse(window.localStorage.getItem("assignments_description_new"));
assignments_submission_new = JSON.parse(window.localStorage.getItem("assignments_submission_new"));
assignments_oral_mark_new = JSON.parse(window.localStorage.getItem("assignments_oral_mark_new"));
assignments_total_mark_new = JSON.parse(window.localStorage.getItem("assignments_total_mark_new"));
assignments_course_link_new = JSON.parse(window.localStorage.getItem("assignments_course_link_new"));
assignments_student_name_assigned_new = JSON.parse(window.localStorage.getItem("assignments_student_name_assigned_new"));

if (document.getElementById("stripe_header").innerHTML == "From here you can view the assignments. Assignments are entirely handled by the Trainers.") {
  if (localStorage.getItem('test4') == null) {
    for (let i = 0; i < assignments_number_old.length; i++) {
      let trc = document.createElement("tr");
      var tdOne = document.createElement("td"); 
      tdOne.innerHTML = assignments_number_old[i];
      var tdTwo = document.createElement("td"); 
      tdTwo.innerHTML = assignments_title_old[i];
      var tdThree = document.createElement("td"); 
      tdThree.innerHTML = assignments_description_old[i];
      let tdFour = document.createElement("td");
      tdFour.innerHTML = assignments_submission_old[i];
      let tdFive = document.createElement("td");
      tdFive.innerHTML = assignments_oral_mark_old[i];
      let tdSix = document.createElement("td");
      tdSix.innerHTML = assignments_total_mark_old[i];
      let tdSeven = document.createElement("td");
      tdSeven.innerHTML = assignments_course_link_old[i];
      let tdEight = document.createElement("td");
      tdEight.innerHTML = assignments_student_name_assigned_old[i];
      trc.appendChild(tdOne);
      trc.appendChild(tdTwo);
      trc.appendChild(tdThree);
      trc.appendChild(tdFour);
      trc.appendChild(tdFive);
      trc.appendChild(tdSix);
      trc.appendChild(tdSeven);
      trc.appendChild(tdEight);
      document.getElementById("secretary_assignments_table").appendChild(trc);
    }
  }else{
    for (let i = 0; i < assignments_number_new.length; i++) {
      let trc = document.createElement("tr");
        var tdOne = document.createElement("td"); 
        tdOne.innerHTML = assignments_number_new[i];
        var tdTwo = document.createElement("td"); 
        tdTwo.innerHTML = assignments_title_new[i];
        var tdThree = document.createElement("td"); 
        tdThree.innerHTML = assignments_description_new[i];
        let tdFour = document.createElement("td");
        tdFour.innerHTML = assignments_submission_new[i];
        let tdFive = document.createElement("td");
        tdFive.innerHTML = assignments_oral_mark_new[i];
        let tdSix = document.createElement("td");
        tdSix.innerHTML = assignments_total_mark_new[i];
        let tdSeven = document.createElement("td");
        tdSeven.innerHTML = assignments_course_link_new[i];
        let tdEight = document.createElement("td");
        tdEight.innerHTML = assignments_student_name_assigned_new[i];
        trc.appendChild(tdOne);
        trc.appendChild(tdTwo);
        trc.appendChild(tdThree);
        trc.appendChild(tdFour);
        trc.appendChild(tdFive);
        trc.appendChild(tdSix);
        trc.appendChild(tdSeven);
        trc.appendChild(tdEight);
        document.getElementById("secretary_assignments_table").appendChild(trc);
    }
  }
}

if (document.getElementById("stripe_header").innerHTML == "From here you can view and edit some of your personal information and choose the course you wish to attend.You can also add,edit and update assignments. If you wish to change something that is not in this form you will have to contact the secreatry.") {
    if (localStorage.getItem('test4') == null) {
      for (let i = 0; i < assignments_number_old.length; i++) {  
        let trc = document.createElement("tr");
          var tdOne = document.createElement("td"); 
          tdOne.innerHTML = assignments_number_old[i];
          var tdTwo = document.createElement("td"); 
          tdTwo.innerHTML = assignments_title_old[i];
          var tdThree = document.createElement("td"); 
          tdThree.innerHTML = assignments_description_old[i];
          let tdFour = document.createElement("td");
          tdFour.innerHTML = assignments_submission_old[i];
          let tdFive = document.createElement("td");
          tdFive.innerHTML = assignments_oral_mark_old[i];
          let tdSix = document.createElement("td");
          tdSix.innerHTML = assignments_total_mark_old[i];
          let tdSeven = document.createElement("td");
          tdSeven.innerHTML = assignments_course_link_old[i];
          let tdEight = document.createElement("td");
          tdEight.innerHTML = assignments_student_name_assigned_old[i];
          let Edit_Button = document.createElement("button");
          Edit_Button.innerText = "EDIT";
          Edit_Button.id = "Edit_Assignment_button" + i;
          let tdNine = document.createElement("td");
          tdNine = Edit_Button;
          let Update_Button = document.createElement("button");
          Update_Button.innerText = "UPDATE";
          Update_Button.id = "Update_Assignment_button" + i;
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
          document.getElementById("table_teacher_home_assignments").appendChild(trc);
          Edit_Button.addEventListener("click",function () {
            for (let x = 0; x <assignments_number_old.length; x++) {
              if (Edit_Button.id == "Edit_Assignment_button" + x) {
                document.getElementById("Edit_Asignment_form_container").style.display = "block";
                if (localStorage.getItem('test3') == null) {
                  for (let i = 1; i < course_title_old.length; i++) {
                    let teacher_course_list_assiignment = document.createElement("option");
                    teacher_course_list_assiignment.innerHTML = course_title_old[i];
                    teacher_course_list_assiignment.name = course_title_old[i];
                    document.getElementById("course_teacher_select_assignment_edit").appendChild(teacher_course_list_assiignment);
                  }
                }else{
                  for (let i = 1; i < course_title_new.length; i++) {
                    let teacher_course_list_assiignment = document.createElement("option");
                    teacher_course_list_assiignment.innerHTML = course_title_new[i];
                    teacher_course_list_assiignment.name = course_title_new[i];
                    document.getElementById("course_teacher_select_assignment_edit").appendChild(teacher_course_list_assiignment);
                  }
                }
                if (localStorage.getItem('test2') == null) {
                  for (let i = 1; i < students_number_old.length; i++) {
                    let teacher_students_list_assiignment = document.createElement("option");
                    teacher_students_list_assiignment.innerHTML = students_last_name_old[i];
                    teacher_students_list_assiignment.name = students_last_name_old[i];
                    document.getElementById("student_teacher_select_assignment_edit").appendChild(teacher_students_list_assiignment);
                  }
                }else{
                  for (let i = 1; i < students_number_new.length; i++) {
                    let teacher_students_list_assiignment = document.createElement("option");
                    teacher_students_list_assiignment.innerHTML = students_last_name_new[i];
                    teacher_students_list_assiignment.name = students_last_name_new[i];
                    document.getElementById("student_teacher_select_assignment_edit").appendChild(teacher_students_list_assiignment);
                  }
                }
                document.forms["edit_assignment_teacher_form"]["number_edit"].value = assignments_number_old[x];
                document.forms["edit_assignment_teacher_form"]["title_edit"].value = assignments_title_old[x];
                document.forms["edit_assignment_teacher_form"]["Description_edit"].value = assignments_description_old[x];
                document.forms["edit_assignment_teacher_form"]["Deadline_edit"].value = assignments_submission_old[x];
                document.forms["edit_assignment_teacher_form"]["Oral_edit"].value = assignments_oral_mark_old[x];
                document.forms["edit_assignment_teacher_form"]["Total_edit"].value = assignments_total_mark_old[x];
                document.forms["edit_assignment_teacher_form"]["course_teacher_select_assignment_edit"].value = assignments_course_link_old[x];
                document.forms["edit_assignment_teacher_form"]["student_teacher_select_assignment_edit"].value = assignments_student_name_assigned_old[x];
                var edit_assignments_position = x;
                localStorage.setItem("edit_assignments_position",JSON.stringify(edit_assignments_position));
                return edit_assignments_position;
              }
            }
          })
          Update_Button.addEventListener("click",function () {
            for (let x = 0; x <assignments_number_old.length; x++) {
              if (Update_Button.id == "Update_Assignment_button" + x) {
                document.getElementById("Update_Asignment_form_container").style.display = "block";
                if (localStorage.getItem('test3') == null) {
                  for (let i = 1; i < course_title_old.length; i++) {
                    let teacher_course_list_assiignment = document.createElement("option");
                    teacher_course_list_assiignment.innerHTML = course_title_old[i];
                    teacher_course_list_assiignment.name = course_title_old[i];
                    document.getElementById("course_teacher_select_assignment_update").appendChild(teacher_course_list_assiignment);
                  }
                }else{
                  for (let i = 1; i < course_title_new.length; i++) {
                    let teacher_course_list_assiignment = document.createElement("option");
                    teacher_course_list_assiignment.innerHTML = course_title_new[i];
                    teacher_course_list_assiignment.name = course_title_new[i];
                    document.getElementById("course_teacher_select_assignment_update").appendChild(teacher_course_list_assiignment);
                  }
                }
                if (localStorage.getItem('test2') == null) {
                  for (let i = 1; i < students_number_old.length; i++) {
                    let teacher_students_list_assiignment = document.createElement("option");
                    teacher_students_list_assiignment.innerHTML = students_last_name_old[i];
                    teacher_students_list_assiignment.name = students_last_name_old[i];
                    document.getElementById("student_teacher_select_assignment_update").appendChild(teacher_students_list_assiignment);
                  }
                }else{
                  for (let i = 1; i < students_number_new.length; i++) {
                    let teacher_students_list_assiignment = document.createElement("option");
                    teacher_students_list_assiignment.innerHTML = students_last_name_new[i];
                    teacher_students_list_assiignment.name = students_last_name_new[i];
                    document.getElementById("student_teacher_select_assignment_update").appendChild(teacher_students_list_assiignment);
                  }
                }
                document.forms["update_assignment_teacher_form"]["number_update"].value = assignments_number_old[x];
                document.forms["update_assignment_teacher_form"]["title_update"].value = assignments_title_old[x];
                document.forms["update_assignment_teacher_form"]["Description_update"].value = assignments_description_old[x];
                document.forms["update_assignment_teacher_form"]["Deadline_update"].value = assignments_submission_old[x];
                document.forms["update_assignment_teacher_form"]["Oral_update"].value = assignments_oral_mark_old[x];
                document.forms["update_assignment_teacher_form"]["Total_update"].value = assignments_total_mark_old[x];
                document.forms["update_assignment_teacher_form"]["course_teacher_select_assignment_update"].value = assignments_course_link_old[x];
                document.forms["update_assignment_teacher_form"]["student_teacher_select_assignment_update"].value = assignments_student_name_assigned_old[x];
                var update_assignments_position = x;
                localStorage.setItem("update_assignments_position",JSON.stringify(update_assignments_position));
                return update_assignments_position;
              }
            }
          })
      }
    }else{
      for (let i = 0; i < assignments_number_new.length; i++) {  
        let trc = document.createElement("tr");
          var tdOne = document.createElement("td"); 
          tdOne.innerHTML = assignments_number_new[i];
          var tdTwo = document.createElement("td"); 
          tdTwo.innerHTML = assignments_title_new[i];
          var tdThree = document.createElement("td"); 
          tdThree.innerHTML = assignments_description_new[i];
          let tdFour = document.createElement("td");
          tdFour.innerHTML = assignments_submission_new[i];
          let tdFive = document.createElement("td");
          tdFive.innerHTML = assignments_oral_mark_new[i];
          let tdSix = document.createElement("td");
          tdSix.innerHTML = assignments_total_mark_new[i];
          let tdSeven = document.createElement("td");
          tdSeven.innerHTML = assignments_course_link_new[i];
          let tdEight = document.createElement("td");
          tdEight.innerHTML = assignments_student_name_assigned_new[i];
          let Edit_Button = document.createElement("button");
          Edit_Button.innerText = "EDIT";
          Edit_Button.id = "Edit_Assignment_button" + i;
          let tdNine = document.createElement("td");
          tdNine = Edit_Button;
          let Update_Button = document.createElement("button");
          Update_Button.innerText = "UPDATE";
          Update_Button.id = "Update_Assignment_button" + i;
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
          document.getElementById("table_teacher_home_assignments").appendChild(trc);
          Edit_Button.addEventListener("click",function () {
            for (let x = 0; x <assignments_number_new.length; x++) {
              if (Edit_Button.id == "Edit_Assignment_button" + x) {
                document.getElementById("Edit_Asignment_form_container").style.display = "block";
                if (localStorage.getItem('test3') == null) {
                  for (let i = 1; i < course_title_old.length; i++) {
                    let teacher_course_list_assiignment = document.createElement("option");
                    teacher_course_list_assiignment.innerHTML = course_title_old[i];
                    teacher_course_list_assiignment.name = course_title_old[i];
                    document.getElementById("course_teacher_select_assignment_edit").appendChild(teacher_course_list_assiignment);
                  }
                }else{
                  for (let i = 1; i < course_title_new.length; i++) {
                    let teacher_course_list_assiignment = document.createElement("option");
                    teacher_course_list_assiignment.innerHTML = course_title_new[i];
                    teacher_course_list_assiignment.name = course_title_new[i];
                    document.getElementById("course_teacher_select_assignment_edit").appendChild(teacher_course_list_assiignment);
                  }
                }
                if (localStorage.getItem('test2') == null) {
                  for (let i = 1; i < students_number_old.length; i++) {
                    let teacher_students_list_assiignment = document.createElement("option");
                    teacher_students_list_assiignment.innerHTML = students_last_name_old[i];
                    teacher_students_list_assiignment.name = students_last_name_old[i];
                    document.getElementById("student_teacher_select_assignment_edit").appendChild(teacher_students_list_assiignment);
                  }
                }else{
                  for (let i = 1; i < students_number_new.length; i++) {
                    let teacher_students_list_assiignment = document.createElement("option");
                    teacher_students_list_assiignment.innerHTML = students_last_name_new[i];
                    teacher_students_list_assiignment.name = students_last_name_new[i];
                    document.getElementById("student_teacher_select_assignment_edit").appendChild(teacher_students_list_assiignment);
                  }
                }
                document.forms["edit_assignment_teacher_form"]["number_edit"].value = assignments_number_new[x];
                document.forms["edit_assignment_teacher_form"]["title_edit"].value = assignments_title_new[x];
                document.forms["edit_assignment_teacher_form"]["Description_edit"].value = assignments_description_new[x];
                document.forms["edit_assignment_teacher_form"]["Deadline_edit"].value = assignments_submission_new[x];
                document.forms["edit_assignment_teacher_form"]["Oral_edit"].value = assignments_oral_mark_new[x];
                document.forms["edit_assignment_teacher_form"]["Total_edit"].value = assignments_total_mark_new[x];
                document.forms["edit_assignment_teacher_form"]["course_teacher_select_assignment_edit"].value = assignments_course_link_new[x];
                document.forms["edit_assignment_teacher_form"]["student_teacher_select_assignment_edit"].value = assignments_student_name_assigned_new[x];
                var edit_assignments_position = x;
                localStorage.setItem("edit_assignments_position",JSON.stringify(edit_assignments_position));
                return edit_assignments_position;
              }
            }
          })
          Update_Button.addEventListener("click",function () {
            for (let x = 0; x <assignments_number_new.length; x++) {
              if (Update_Button.id == "Update_Assignment_button" + x) {
                document.getElementById("Update_Asignment_form_container").style.display = "block";
                if (localStorage.getItem('test3') == null) {
                  for (let i = 1; i < course_title_old.length; i++) {
                    let teacher_course_list_assiignment = document.createElement("option");
                    teacher_course_list_assiignment.innerHTML = course_title_old[i];
                    teacher_course_list_assiignment.name = course_title_old[i];
                    document.getElementById("course_teacher_select_assignment_update").appendChild(teacher_course_list_assiignment);
                  }
                }else{
                  for (let i = 1; i < course_title_new.length; i++) {
                    let teacher_course_list_assiignment = document.createElement("option");
                    teacher_course_list_assiignment.innerHTML = course_title_new[i];
                    teacher_course_list_assiignment.name = course_title_new[i];
                    document.getElementById("course_teacher_select_assignment_update").appendChild(teacher_course_list_assiignment);
                  }
                }
                if (localStorage.getItem('test2') == null) {
                  for (let i = 1; i < students_number_old.length; i++) {
                    let teacher_students_list_assiignment = document.createElement("option");
                    teacher_students_list_assiignment.innerHTML = students_last_name_old[i];
                    teacher_students_list_assiignment.name = students_last_name_old[i];
                    document.getElementById("student_teacher_select_assignment_update").appendChild(teacher_students_list_assiignment);
                  }
                }else{
                  for (let i = 1; i < students_number_new.length; i++) {
                    let teacher_students_list_assiignment = document.createElement("option");
                    teacher_students_list_assiignment.innerHTML = students_last_name_new[i];
                    teacher_students_list_assiignment.name = students_last_name_new[i];
                    document.getElementById("student_teacher_select_assignment_update").appendChild(teacher_students_list_assiignment);
                  }
                }
                document.forms["update_assignment_teacher_form"]["number_update"].value = assignments_number_new[x];
                document.forms["update_assignment_teacher_form"]["title_update"].value = assignments_title_new[x];
                document.forms["update_assignment_teacher_form"]["Description_update"].value = assignments_description_new[x];
                document.forms["update_assignment_teacher_form"]["Deadline_update"].value = assignments_submission_new[x];
                document.forms["update_assignment_teacher_form"]["Oral_update"].value = assignments_oral_mark_new[x];
                document.forms["update_assignment_teacher_form"]["Total_update"].value = assignments_total_mark_new[x];
                document.forms["update_assignment_teacher_form"]["course_teacher_select_assignment_update"].value = assignments_course_link_new[x];
                document.forms["update_assignment_teacher_form"]["student_teacher_select_assignment_update"].value = assignments_student_name_assigned_new[x];
                var update_assignments_position = x;
                localStorage.setItem("update_assignments_position",JSON.stringify(update_assignments_position));
                return update_assignments_position;
              }
            }
          })
        }
    }
  }

function add_assignment_teacher() {
  let number = document.forms["add_assignment_teacher_form"]["number"].value;
  let title = document.forms["add_assignment_teacher_form"]["title"].value;
  let description = document.forms["add_assignment_teacher_form"]["Description"].value;
  let deadline = document.forms["add_assignment_teacher_form"]["Deadline"].value;
  let oral = document.forms["add_assignment_teacher_form"]["Oral"].value;
  let total = document.forms["add_assignment_teacher_form"]["Total"].value;
  let course = document.forms["add_assignment_teacher_form"]["course_teacher_select_assignment"].value;
  let student = document.forms["add_assignment_teacher_form"]["student_teacher_select_assignment"].value;
  let oraln = parseInt(oral);
  let totaln = parseInt(total);
  let total2 = oraln + totaln;
  if (localStorage.getItem('test4') == null) {
    for (let i = 0; i < assignments_number_old.length; i++) {
      if (number == assignments_number_old) {
        window.alert("Number already exists!!!")
        return false
      }
    }
  }else{
    for (let i = 0; i < assignments_number_new.length; i++) {
      if (number == assignments_number_new) {
        window.alert("Number already exists!!!")
        return false
      }
    }
  }
  if (total2 != 100) {
    window.alert("Oral and Total do not add up to 100!!!")
    return false;
  }
  if (localStorage.getItem('test4') == null) {
    assignments_number_old.push(number);
    assignments_title_old.push(title);
    assignments_description_old.push(description);
    assignments_submission_old.push(deadline);
    assignments_oral_mark_old.push(oraln);
    assignments_total_mark_old.push(totaln);
    assignments_course_link_old.push(course);
    assignments_student_name_assigned_old.push(student);
    localStorage.setItem("assignments_number_new",JSON.stringify(assignments_number_old));
    localStorage.setItem("assignments_title_new",JSON.stringify(assignments_title_old));
    localStorage.setItem("assignments_description_new",JSON.stringify(assignments_description_old));
    localStorage.setItem("assignments_submission_new",JSON.stringify(assignments_submission_old));
    localStorage.setItem("assignments_oral_mark_new",JSON.stringify(assignments_oral_mark_old));
    localStorage.setItem("assignments_total_mark_new",JSON.stringify(assignments_total_mark_old));
    localStorage.setItem("assignments_course_link_new",JSON.stringify(assignments_course_link_old));
    localStorage.setItem("assignments_student_name_assigned_new",JSON.stringify(assignments_student_name_assigned_old));
  }else{
    assignments_number_new.push(number);
    assignments_title_new.push(title);
    assignments_description_new.push(description);
    assignments_submission_new.push(deadline);
    assignments_oral_mark_new.push(oraln);
    assignments_total_mark_new.push(totaln);
    assignments_course_link_new.push(course);
    assignments_student_name_assigned_new.push(student);
    localStorage.setItem("assignments_number_new",JSON.stringify(assignments_number_new));
    localStorage.setItem("assignments_title_new",JSON.stringify(assignments_title_new));
    localStorage.setItem("assignments_description_new",JSON.stringify(assignments_description_new));
    localStorage.setItem("assignments_submission_new",JSON.stringify(assignments_submission_new));
    localStorage.setItem("assignments_oral_mark_new",JSON.stringify(assignments_oral_mark_new));
    localStorage.setItem("assignments_total_mark_new",JSON.stringify(assignments_total_mark_new));
    localStorage.setItem("assignments_course_link_new",JSON.stringify(assignments_course_link_new));
    localStorage.setItem("assignments_student_name_assigned_new",JSON.stringify(assignments_student_name_assigned_new));
  }
  if (localStorage.getItem('test2') == null) {
    for (let i = 0; i < students_number_old.length; i++) {
      if (students_last_name_old[i] === student) {
        delete students_assignments_old[i];
        students_assignments_old.splice(i,1,title);
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
    }
  }else{
    for (let i = 0; i < students_number_new.length; i++) {
      if (students_last_name_new[i] === student) {
        delete students_assignments_new[i];
        students_assignments_new.splice(i,1,title);
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
    }
  }
  localStorage.setItem('test4', 1);
  localStorage.setItem('test2', 1);
  return true;
}

assignments_number_new = JSON.parse(window.localStorage.getItem("assignments_number_new"));
assignments_title_new = JSON.parse(window.localStorage.getItem("assignments_title_new"));
assignments_description_new = JSON.parse(window.localStorage.getItem("assignments_description_new"));
assignments_submission_new = JSON.parse(window.localStorage.getItem("assignments_submission_new"));
assignments_oral_mark_new = JSON.parse(window.localStorage.getItem("assignments_oral_mark_new"));
assignments_total_mark_new = JSON.parse(window.localStorage.getItem("assignments_total_mark_new"));
assignments_course_link_new = JSON.parse(window.localStorage.getItem("assignments_course_link_new"));
assignments_student_name_assigned_new = JSON.parse(window.localStorage.getItem("assignments_student_name_assigned_new"));

function edit_assignment_teacher() {
  let edit_assignments_position = JSON.parse(window.localStorage.getItem("edit_assignments_position"));
  let number = document.forms["edit_assignment_teacher_form"]["number_edit"].value;
  let title = document.forms["edit_assignment_teacher_form"]["title_edit"].value;
  let description = document.forms["edit_assignment_teacher_form"]["Description_edit"].value;
  let deadline = document.forms["edit_assignment_teacher_form"]["Deadline_edit"].value;
  let oral = document.forms["edit_assignment_teacher_form"]["Oral_edit"].value;
  let total = document.forms["edit_assignment_teacher_form"]["Total_edit"].value;
  let course = document.forms["edit_assignment_teacher_form"]["course_teacher_select_assignment_edit"].value;
  let student = document.forms["edit_assignment_teacher_form"]["student_teacher_select_assignment_edit"].value;
  let oraln = parseInt(oral);
  let totaln = parseInt(total);
  let total2 = oraln + totaln;
  if (total2 != 100) {
    window.alert("Oral and Total do not add up to 100!!!")
    return false;
  }
  if (localStorage.getItem('test4') == null) {
    delete assignments_number_old[edit_assignments_position];
    delete assignments_title_old[edit_assignments_position];
    delete assignments_description_old[edit_assignments_position];
    delete assignments_submission_old[edit_assignments_position];
    delete assignments_oral_mark_old[edit_assignments_position];
    delete assignments_total_mark_old[edit_assignments_position];
    delete assignments_course_link_old[edit_assignments_position];
    delete assignments_student_name_assigned_old[edit_assignments_position];
  }else{
    delete assignments_number_new[edit_assignments_position];
    delete assignments_title_new[edit_assignments_position];
    delete assignments_description_new[edit_assignments_position];
    delete assignments_submission_new[edit_assignments_position];
    delete assignments_oral_mark_new[edit_assignments_position];
    delete assignments_total_mark_new[edit_assignments_position];
    delete assignments_course_link_new[edit_assignments_position];
    delete assignments_student_name_assigned_new[edit_assignments_position];
  }
  if (localStorage.getItem('test4') == null) {
    for (let i = 0; i < assignments_number_old.length; i++) {
      if (number == assignments_number_old) {
        window.alert("Number already exists!!!")
        return false
      }
    }
  }else{
    for (let i = 0; i < assignments_number_new.length; i++) {
      if (number == assignments_number_new) {
        window.alert("Number already exists!!!")
        return false
      }
    }
  }
  if (localStorage.getItem('test4') == null) {
    assignments_number_old.splice(edit_assignments_position,1,number);
    assignments_title_old.splice(edit_assignments_position,1,title);
    assignments_description_old.splice(edit_assignments_position,1,description);
    assignments_submission_old.splice(edit_assignments_position,1,deadline);
    assignments_oral_mark_old.splice(edit_assignments_position,1,oraln);
    assignments_total_mark_old.splice(edit_assignments_position,1,totaln);
    assignments_course_link_old.splice(edit_assignments_position,1,course);
    assignments_student_name_assigned_old.splice(edit_assignments_position,1,student);
    localStorage.setItem("assignments_number_new",JSON.stringify(assignments_number_old));
    localStorage.setItem("assignments_title_new",JSON.stringify(assignments_title_old));
    localStorage.setItem("assignments_description_new",JSON.stringify(assignments_description_old));
    localStorage.setItem("assignments_submission_new",JSON.stringify(assignments_submission_old));
    localStorage.setItem("assignments_oral_mark_new",JSON.stringify(assignments_oral_mark_old));
    localStorage.setItem("assignments_total_mark_new",JSON.stringify(assignments_total_mark_old));
    localStorage.setItem("assignments_course_link_new",JSON.stringify(assignments_course_link_old));
    localStorage.setItem("assignments_student_name_assigned_new",JSON.stringify(assignments_student_name_assigned_old));
  }else{
    assignments_number_new.splice(edit_assignments_position,1,number);
    assignments_title_new.splice(edit_assignments_position,1,title);
    assignments_description_new.splice(edit_assignments_position,1,description);
    assignments_submission_new.splice(edit_assignments_position,1,deadline);
    assignments_oral_mark_new.splice(edit_assignments_position,1,oraln);
    assignments_total_mark_new.splice(edit_assignments_position,1,totaln);
    assignments_course_link_new.splice(edit_assignments_position,1,course);
    assignments_student_name_assigned_new.splice(edit_assignments_position,1,student);
    localStorage.setItem("assignments_number_new",JSON.stringify(assignments_number_new));
    localStorage.setItem("assignments_title_new",JSON.stringify(assignments_title_new));
    localStorage.setItem("assignments_description_new",JSON.stringify(assignments_description_new));
    localStorage.setItem("assignments_submission_new",JSON.stringify(assignments_submission_new));
    localStorage.setItem("assignments_oral_mark_new",JSON.stringify(assignments_oral_mark_new));
    localStorage.setItem("assignments_total_mark_new",JSON.stringify(assignments_total_mark_new));
    localStorage.setItem("assignments_course_link_new",JSON.stringify(assignments_course_link_new));
    localStorage.setItem("assignments_student_name_assigned_new",JSON.stringify(assignments_student_name_assigned_new));
  }
  localStorage.setItem('test4', 1);
  return true;
}

function update_assignment_teacher() {
  let update_assignments_position = JSON.parse(window.localStorage.getItem("update_assignments_position"));
  let number = document.forms["update_assignment_teacher_form"]["number_update"].value;
  let title = document.forms["update_assignment_teacher_form"]["title_update"].value;
  let description = document.forms["update_assignment_teacher_form"]["Description_update"].value;
  let deadline = document.forms["update_assignment_teacher_form"]["Deadline_update"].value;
  let oral = document.forms["update_assignment_teacher_form"]["Oral_update"].value;
  let total = document.forms["update_assignment_teacher_form"]["Total_update"].value;
  let course = document.forms["update_assignment_teacher_form"]["course_teacher_select_assignment_update"].value;
  let student = document.forms["update_assignment_teacher_form"]["student_teacher_select_assignment_update"].value;
  let oraln = parseInt(oral);
  let totaln = parseInt(total);
  let total2 = oraln + totaln;
  if (total2 != 100) {
    window.alert("Oral and Total do not add up to 100!!!")
    return false;
  }
  if (localStorage.getItem('test4') == null) {
    delete assignments_number_old[update_assignments_position];
    delete assignments_title_old[update_assignments_position];
    delete assignments_description_old[update_assignments_position];
    delete assignments_submission_old[update_assignments_position];
    delete assignments_oral_mark_old[update_assignments_position];
    delete assignments_total_mark_old[update_assignments_position];
    delete assignments_course_link_old[update_assignments_position];
    delete assignments_student_name_assigned_old[update_assignments_position];
  }else{
    delete assignments_number_new[update_assignments_position];
    delete assignments_title_new[update_assignments_position];
    delete assignments_description_new[update_assignments_position];
    delete assignments_submission_new[update_assignments_position];
    delete assignments_oral_mark_new[update_assignments_position];
    delete assignments_total_mark_new[update_assignments_position];
    delete assignments_course_link_new[update_assignments_position];
    delete assignments_student_name_assigned_new[update_assignments_position];
  }
  if (localStorage.getItem('test4') == null) {
    for (let i = 0; i < assignments_number_old.length; i++) {
      if (number == assignments_number_old) {
        window.alert("Number already exists!!!")
        return false
      }
    }
  }else{
    for (let i = 0; i < assignments_number_new.length; i++) {
      if (number == assignments_number_new) {
        window.alert("Number already exists!!!")
        return false
      }
    }
  }
  if (localStorage.getItem('test4') == null) {
    assignments_number_old.splice(update_assignments_position,1,number);
    assignments_title_old.splice(update_assignments_position,1,title);
    assignments_description_old.splice(update_assignments_position,1,description);
    assignments_submission_old.splice(update_assignments_position,1,deadline);
    assignments_oral_mark_old.splice(update_assignments_position,1,oraln);
    assignments_total_mark_old.splice(update_assignments_position,1,totaln);
    assignments_course_link_old.splice(update_assignments_position,1,course);
    assignments_student_name_assigned_old.splice(update_assignments_position,1,student);
    localStorage.setItem("assignments_number_new",JSON.stringify(assignments_number_old));
    localStorage.setItem("assignments_title_new",JSON.stringify(assignments_title_old));
    localStorage.setItem("assignments_description_new",JSON.stringify(assignments_description_old));
    localStorage.setItem("assignments_submission_new",JSON.stringify(assignments_submission_old));
    localStorage.setItem("assignments_oral_mark_new",JSON.stringify(assignments_oral_mark_old));
    localStorage.setItem("assignments_total_mark_new",JSON.stringify(assignments_total_mark_old));
    localStorage.setItem("assignments_course_link_new",JSON.stringify(assignments_course_link_old));
    localStorage.setItem("assignments_student_name_assigned_new",JSON.stringify(assignments_student_name_assigned_old));
  }else{
    assignments_number_new.splice(update_assignments_position,1,number);
    assignments_title_new.splice(update_assignments_position,1,title);
    assignments_description_new.splice(update_assignments_position,1,description);
    assignments_submission_new.splice(update_assignments_position,1,deadline);
    assignments_oral_mark_new.splice(update_assignments_position,1,oraln);
    assignments_total_mark_new.splice(update_assignments_position,1,totaln);
    assignments_course_link_new.splice(update_assignments_position,1,course);
    assignments_student_name_assigned_new.splice(update_assignments_position,1,student);
    localStorage.setItem("assignments_number_new",JSON.stringify(assignments_number_new));
    localStorage.setItem("assignments_title_new",JSON.stringify(assignments_title_new));
    localStorage.setItem("assignments_description_new",JSON.stringify(assignments_description_new));
    localStorage.setItem("assignments_submission_new",JSON.stringify(assignments_submission_new));
    localStorage.setItem("assignments_oral_mark_new",JSON.stringify(assignments_oral_mark_new));
    localStorage.setItem("assignments_total_mark_new",JSON.stringify(assignments_total_mark_new));
    localStorage.setItem("assignments_course_link_new",JSON.stringify(assignments_course_link_new));
    localStorage.setItem("assignments_student_name_assigned_new",JSON.stringify(assignments_student_name_assigned_new));
  }
  localStorage.setItem('test4', 1);
  return true;
}

function goBack() {
  location.href = "secretary_home.html";
}
