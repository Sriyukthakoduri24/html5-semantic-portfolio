let tasks =
JSON.parse(localStorage.getItem("tasks"))
|| [];

function saveTasks(){

localStorage.setItem(
"tasks",
JSON.stringify(tasks)
);

}

function displayTasks(list = tasks){

const taskList =
document.getElementById("taskList");

taskList.innerHTML = "";

list.forEach((task,index)=>{

taskList.innerHTML += `
<li style="
background:rgba(255,255,255,0.1);
padding:15px;
margin:10px 0;
border-radius:10px;
display:flex;
justify-content:space-between;
align-items:center;
">

<span>${task}</span>

<div>

<button
onclick="editTask(${index})">
Edit
</button>

<button
onclick="deleteTask(${index})">
Delete
</button>

</div>

</li>
`;

});

}

function addTask(){

const input =
document.getElementById("taskInput");

if(input.value.trim() !== ""){

tasks.push(input.value);

saveTasks();

displayTasks();

input.value = "";

}

}

function editTask(index){

let updatedTask =
prompt(
"Edit Task",
tasks[index]
);

if(updatedTask &&
updatedTask.trim() !== ""){

tasks[index] = updatedTask;

saveTasks();

displayTasks();

}

}

function deleteTask(index){

tasks.splice(index,1);

saveTasks();

displayTasks();

}

function filterTasks(){

const search =
document.getElementById("searchInput")
.value
.toLowerCase();

const filtered =
tasks.filter(task =>
task.toLowerCase().includes(search)
);

displayTasks(filtered);

}

displayTasks();