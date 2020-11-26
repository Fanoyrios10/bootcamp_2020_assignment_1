function change_background() {
  let background = document.getElementById("sign_up_teacher_main_pic");
  let subject_list = document.getElementById("subject").value;
  let sign_up_teacher_hidden_section = document.getElementById("teacher_sign_up_hidden_section");
  let sign_up_teacher_main_pic = document.getElementById("sign_up_teacher_main_pic");
  let sign_up_teacher_form_container = document.getElementById("sign_up_teacher_form_container");
  switch (subject_list) {
    case "History":
      background.style.backgroundImage = "url(../../Images/Classes/history_class.jpg)";
      background.style.transition = "2.5s";
      sign_up_teacher_main_pic.style.height= "986px";
      sign_up_teacher_form_container.style.height = "80%";
      sign_up_teacher_main_pic.style.transition = "2s";
      sign_up_teacher_form_container.style.transition = "2s";
      setTimeout(function (){sign_up_teacher_hidden_section.style.display = "none"}, 500);
      break;
    case "Programming":
      background.style.backgroundImage = "url(../../Images/Classes/Programming_class.jpg)";
      background.style.transition = "2.5s";
      sign_up_teacher_main_pic.style.height= "986px";
      sign_up_teacher_form_container.style.height = "80%";
      sign_up_teacher_main_pic.style.transition = "2s";
      sign_up_teacher_form_container.style.transition = "2s";
      setTimeout(function (){sign_up_teacher_hidden_section.style.display = "none"}, 500);
      break;
    case "Chemistry":
      background.style.backgroundImage = "url(../../Images/Classes/chemistry_class.jpg)";
      background.style.transition = "2.5s";
      sign_up_teacher_main_pic.style.height= "986px";
      sign_up_teacher_form_container.style.height = "80%";
      sign_up_teacher_main_pic.style.transition = "2s";
      sign_up_teacher_form_container.style.transition = "2s";
      setTimeout(function (){sign_up_teacher_hidden_section.style.display = "none"}, 500);
      break;
    case "Physics":
      background.style.backgroundImage = "url(../../Images/Classes/Physics_class.jpg)";
      background.style.transition = "2.5s";
      sign_up_teacher_main_pic.style.height= "986px";
      sign_up_teacher_form_container.style.height = "80%";
      sign_up_teacher_main_pic.style.transition = "2s";
      sign_up_teacher_form_container.style.transition = "2s";
      setTimeout(function (){sign_up_teacher_hidden_section.style.display = "none"}, 500);  
      break;
    case "Sociology":
      background.style.backgroundImage = "url(../../Images/Classes/Sociology_Classs.jpg)";
      background.style.transition = "2.5s";
      sign_up_teacher_main_pic.style.height= "986px";
      sign_up_teacher_form_container.style.height = "80%";
      sign_up_teacher_main_pic.style.transition = "2s";
      sign_up_teacher_form_container.style.transition = "2s";
      setTimeout(function (){sign_up_teacher_hidden_section.style.display = "none"}, 500);  
      break;
    case "Physical Education":
      background.style.backgroundImage = "url(../../Images/Classes/phiscal_education_class.jpg)";
      background.style.transition = "2.5s";
      sign_up_teacher_main_pic.style.height= "986px";
      sign_up_teacher_form_container.style.height = "80%";
      sign_up_teacher_main_pic.style.transition = "2s";
      sign_up_teacher_form_container.style.transition = "2s";
      setTimeout(function (){sign_up_teacher_hidden_section.style.display = "none"}, 500);
      break;
      case "none":
        sign_up_teacher_main_pic.style.height= "1186px";
        sign_up_teacher_form_container.style.height = "82%";
        sign_up_teacher_main_pic.style.transition = "2s";
        sign_up_teacher_form_container.style.transition = "2s";
        setTimeout(function (){sign_up_teacher_hidden_section.style.display = "block"}, 500);
    default:
      break;
  }
}