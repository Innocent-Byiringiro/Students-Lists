
let students = JSON.parse(localStorage.getItem("students")) || [];

document.getElementById("btn-add-student").addEventListener("click", function (e) {
    document.getElementById("formcontainer").classList.remove('hideorshow');
});

document.getElementById('btnclose').addEventListener('click', function (e) {
    preventDefault();
    document.getElementById("formcontainer").classList.add("hideorshow");
});

//step one
document.getElementById("submitdata").addEventListener("click", function (e) {
    e.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let id = students.length + 1;
    // step two
    let student = { id, name, email, phone };
    // step three: pushing
    students.push(student);
    // step four: storing
    localStorage.setItem("students", JSON.stringify(students));
    // step five
    location.reload();
});

let studentsList = document.getElementById("studentid");

for (let i = 0; i < students.length; i++) {
    let listItem = document.createElement('li');
    listItem.classList.add("listitem");
    let personalInfo = document.createElement('div');
    let actions = document.createElement('div');
    actions.classList.add("actions");

    let studentName = document.createElement("h3");
    let studentEmail = document.createElement("p");
    let studentPhone = document.createElement("p");
    let removeStudent = document.createElement("button");

    removeStudent.innerHTML = "<i class=\"fas fa-trash-alt\"></i>Remove";
    let update = document.createElement("button");
   
    
    update.innerHTML = "<i class=\"far fa-edit\"></i>Update";
    studentName.innerHTML = students[i].name;
    studentEmail.innerHTML = students[i].email;
    studentPhone.innerHTML = students[i].phone;

    //appending tags to ther parents
    personalInfo.appendChild(studentName);
    personalInfo.appendChild(studentEmail);
    personalInfo.appendChild(studentPhone);

    actions.appendChild(update)
    actions.appendChild(removeStudent);

    listItem.appendChild(personalInfo);
    listItem.appendChild(actions);
    studentsList.appendChild(listItem);
    removeStudent.addEventListener("click", function (e) {
        let newStudents = students.filter(function (student) {
            return student.id != students[i].id;
        });
        localStorage.setItem("students", JSON.stringify(newStudents));
        location.reload();
    });
    update.addEventListener("click", function (e) {
        document.getElementById("nameupdate").value = students[i].name;
        document.getElementById("emailupdate").value = students[i].email;
        document.getElementById("phoneupdate").value = students[i].phone;
        updateIndex=i;
        document.getElementById("formcontaineupdate").classList.remove("hideorshow");
    });
}
document.getElementById("submitdataupdate").addEventListener('click',function(e){
    e.preventDefault();
    let name=document.getElementById("nameupdate").value;
    let email=document.getElementById("emailupdate").value;
    let phone=document.getElementById("phoneupdate").value;
    let student = {name, email, phone};
    if(updateIndex !=null){
        students[updateIndex]=student;
        localStorage.setItem("students", JSON.stringify(students));
        location.reload();
    }
});


