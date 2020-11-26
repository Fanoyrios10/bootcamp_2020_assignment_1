function change_background() {
  let background = document.getElementById("sign_up_student_main_pic");
  let subject_list = document.getElementById("subject").value;
  switch (subject_list) {
    case "History":
      background.style.backgroundImage = "url(../../Images/Classes/history_class.jpg)";
      background.style.transition = "2.5s";
      break;
    case "Programming":
      background.style.backgroundImage = "url(../../Images/Classes/Programming_class.jpg)";
      background.style.transition = "2.5s";
      break;
    case "Chemistry":
      background.style.backgroundImage = "url(../../Images/Classes/chemistry_class.jpg)";
      background.style.transition = "2.5s";
      break;
    case "Physics":
      background.style.backgroundImage = "url(../../Images/Classes/Physics_class.jpg)";
      background.style.transition = "2.5s";
      break;
    case "Sociology":
      background.style.backgroundImage = "url(../../Images/Classes/Sociology_Classs.jpg)";
      background.style.transition = "2.5s";
      break;
    case "Physical Education":
      background.style.backgroundImage = "url(../../Images/Classes/phiscal_education_class.jpg)";
      background.style.transition = "2.5s";
      break;
    default:
      break;
  }
}