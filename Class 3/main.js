Name_of_Student_array = [];

function submit() {
    
    var student_name_1 = document.getElementById("Name_of_Student_1").value;
    var student_name_2 = document.getElementById("Name_of_Student_2").value;
    var student_name_3 = document.getElementById("Name_of_Student_3").value;
    var student_name_4 = document.getElementById("Name_of_Student_4").value;

    Name_of_Student_array.push(student_name_1);
    Name_of_Student_array.push(student_name_2);
    Name_of_Student_array.push(student_name_3);
    Name_of_Student_array.push(student_name_4);

    console.log(Name_of_Student_array);

    document.getElementById("display_name").innerHTML = Name_of_Student_array;

    document.getElementById("Button_Submit").style.display = "none";

    document.getElementById("Button_Sort").style.display = "inline-block";
}

function sort() {
    
    Name_of_Student_array.sort();
    console.log(Name_of_Student_array);
    document.getElementById("display_name").innerHTML = Name_of_Student_array;
}