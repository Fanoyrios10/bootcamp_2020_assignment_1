let course_number = [0,1.1,1.2,1.3,2.1,2.2,2.3,3.1,3.2,3.3,4.1,4.2,4.3,5.1,5.2,5.3,6.1,6.2,6.3];

let course_title = ["demo","Ancient History","Medieval History","Reinasance History","JavaScript Programming", "C# Programming","Python Programming","Organic Chemistry","Atmospheric Chemistry","Food Chemistry","Solid State Physics","Biological Physics","Computational Physics","Classical Sociological Theory","Democracy Governance and anticipation","Introducing the Social Sciences","Fitness Through Movement","Elementary Physical Education","Introduction to Sport Management"];

let course_stream = ["demo","History","History","History","Programming","Programming","Programming","Chemistry","Chemistry","Chemistry","Physics","Physics","Physics","Sociology","Sociology","Sociology","Physical Education","Physical Education","Physical Education"];

let course_type = ["demo","Full time:3000€","Part Time:2500€","Online:2000€","Full time:3000€","Part Time:2500€","Online:2000€","Full time:3000€","Part Time:2500€","Online:2000€","Full time:3000€","Part Time:2500€","Online:2000€","Full time:3000€","Part Time:2500€","Online:2000€","Full time:3000€","Part Time:2500€","Online:2000€"];

let course_start_date = ["demo",new Date(2020, 09, 03),new Date(2020, 09, 03),new Date(2020, 09, 03),new Date(2020, 09, 03),new Date(2020, 09, 03),new Date(2020, 09, 03),new Date(2020, 09, 03),new Date(2020, 09, 03),new Date(2020, 09, 03),new Date(2020, 09, 03),new Date(2020, 09, 03),new Date(2020, 09, 03),new Date(2020, 09, 03),new Date(2020, 09, 03),new Date(2020, 09, 03),new Date(2020, 09, 03),new Date(2020, 09, 03),new Date(2020, 09, 03)];

let course_end_date = ["demo",new Date(2021, 04, 10),new Date(2021, 07, 10),new Date(2021, 07, 10),new Date(2021, 04, 10),new Date(2021, 07, 10),new Date(2021, 07, 10),new Date(2021, 04, 10),new Date(2021, 07, 10),new Date(2021, 07, 10),new Date(2021, 04, 10),new Date(2021, 07, 10),new Date(2021, 07, 10),new Date(2021, 04, 10),new Date(2021, 07, 10),new Date(2021, 07, 10),new Date(2021, 04, 10),new Date(2021, 07, 10),new Date(2021, 07, 10)];

if (sessionStorage.getItem('test3') == null) {
  sessionStorage.setItem("course_number_old",JSON.stringify(course_number));
  sessionStorage.setItem("course_title_old",JSON.stringify(course_title));
  sessionStorage.setItem("course_stream_old",JSON.stringify(course_stream));
  sessionStorage.setItem("course_type_old",JSON.stringify(course_type));
  sessionStorage.setItem("course_start_date_old",JSON.stringify(course_start_date));
  sessionStorage.setItem("course_end_date_old",JSON.stringify(course_end_date));
}

course_number_old = JSON.parse(window.sessionStorage.getItem("course_number_old"));
course_title_old = JSON.parse(window.sessionStorage.getItem("course_title_old"));
course_stream_old = JSON.parse(window.sessionStorage.getItem("course_stream_old"));
course_type_old = JSON.parse(window.sessionStorage.getItem("course_type_old"));
course_start_date_old = JSON.parse(window.sessionStorage.getItem("course_start_date_old"));
course_end_date_old = JSON.parse(window.sessionStorage.getItem("course_end_date_old"));

function secretary_create_table_courses() {
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
        trc.appendChild(tdNine);
        trc.appendChild(tdTen);
        document.getElementById("myTable").appendChild(trc);
    }
  }else{
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
        trc.appendChild(tdNine);
        trc.appendChild(tdTen);
        document.getElementById("myTable").appendChild(trc);
      }
  }
}
