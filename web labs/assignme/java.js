let tasks = [];

if(localStorage.getItem("myTasks")){
    tasks = JSON.parse(localStorage.getItem("myTasks"));
}

function save(){
    localStorage.setItem("myTasks", JSON.stringify(tasks));
}

function addTask(){
    let t = document.getElementById("taskTitle").value;
    let d = document.getElementById("taskDesc").value;
    let p = document.getElementById("taskPrio").value;

    if(t == "" || d == ""){
        alert("Please fill all fields");
        return;
    }

    let obj = {
        title: t,
        desc: d,
        priority: p
    };

    tasks.push(obj);
    save();
    showTasks();

    document.getElementById("taskTitle").value = "";
    document.getElementById("taskDesc").value = "";
}

function showTasks(){
    let box = document.getElementById("tasks");
    box.innerHTML = "";

    let f = document.getElementById("taskFilter").value;

    for(let i=0; i<tasks.length; i++){

        if(f != "all" && tasks[i].priority != f){
            continue;
        }

        let div = document.createElement("div");
        div.className = "task";

        div.innerHTML = `
            <b>${tasks[i].title}</b><br>
            ${tasks[i].desc}<br>
            <small>${tasks[i].priority}</small><br><br>

            <button onclick="editTask(${i})">Edit</button>
            <button onclick="deleteTask(${i})">Delete</button>
        `;

        box.appendChild(div);
    }
}

function editTask(i){
    let newTitle = prompt("New Title", tasks[i].title);
    let newDesc = prompt("New Description", tasks[i].desc);
    let newPrio = prompt("New Priority: High/Medium/Low", tasks[i].priority);

    if(newTitle && newDesc && newPrio){
        tasks[i].title = newTitle;
        tasks[i].desc = newDesc;
        tasks[i].priority = newPrio;
        save();
        showTasks();
    }
}

function deleteTask(i){
    let ok = confirm("Delete task?");
    if(ok){
        tasks.splice(i,1);
        save();
        showTasks();
    }
}

function toggleTheme(){
    document.body.classList.toggle("dark");
}

showTasks();
