/*<li class= "listitems">
<div>
<h2> Innocent Buiringiro</h2>
<p>ibyiringiro99@gmail.com</p>
<p>0783801791</p>
</div>
<div class="actions">
<button>Remove student</button>
</div>  
</li>
*/
const students=[
{
    name:"Innocent Buiringiro",
    email:"ibyiringiro99@gmail.com",
    phone:"0783801791",
},
{
    name:"Ndayambaje Gaetan",
    email:"gaetandeo@gmail.com", 
    phone:"078678543",
},
{
    name:"Alex Mbonigabo", 
    email:"mbonigaboa@gmail.com", 
    phone:"078132894"
},
];

let studentsList=document.getElementById("studentid");
for(let i=0;i<students.length;i++){
let listItem=document.createElement('li');
listItem.classList.add("listitem");
let personalInfo=document.createElement('div');
let actions=document.createElement('div');
actions.classList.add("actions");

let studentName=document.createElement("h3");
let studentEmail=document.createElement('p');
let studentPhone=document.createElement('p');
let removeStudent=document.createElement('button');

//setting data to tags
removeStudent.innerHTML="Remove student";
studentName.innerHTML=students[i].name;
studentEmail.innerHTML=students[i].email;
studentPhone.innerHTML=students[i].phone;

//appending tags to ther parents
personalInfo.appendChild(studentName);
personalInfo.appendChild(studentEmail);
personalInfo.appendChild(studentPhone);

actions.appendChild(removeStudent);

listItem.appendChild(personalInfo);
listItem.appendChild(actions);
studentsList.appendChild(listItem);
}