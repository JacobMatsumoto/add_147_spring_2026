//I'm gonna use part of this assignment to see if I can also put it towards my midterm project and save a little time
class toDoItem{
    constructor(date, title, description, completion){
        this.date = date;
        this.title = title;
        this.description = description;
        this.completion = completion;
    }

    displayTask() {
        return `Do by: ${this.date}<br>
        Title: ${this.title} <br>
        Description: ${this.description}
        `; //removed done status as it is replaced with a clicking button
    }

}

/* 

https://www.w3schools.com/jsref/met_document_createelement.asp -createElement from here

https://www.geeksforgeeks.org/javascript/javascript-adding-a-class-name-to-the-element/ -className use from here

https://www.w3schools.com/jsref/met_element_removeeventlistener.asp --good ref but didn't end up figuring out how to utilize it. Ended up scrapping it and finding a work around

works but needs improvements, format date and make it work more than once 



*/
const tasks = []; //unused

document.getElementById("submit").addEventListener("click", function(event){
    event.preventDefault();

    var taskDate = new Date(); //****TODO**** Format nicely
    var taskTitle = document.getElementById("title").value;
    var taskDescription = document.getElementById("description").value;

    var taskCompletetionStatus = false

    const newTask = new toDoItem(taskDate, taskTitle, taskDescription, taskCompletetionStatus)

    tasks.push(newTask)

    
    const taskP = document.createElement("p");
    taskP.className = "taskClass";
    taskP.innerHTML = newTask.displayTask();
    document.getElementById("taskText").appendChild(taskP);


    const taskStatus = document.createElement("img");
    // const congrats = document.createElement("p");

    if (newTask.completion == false) {
        taskStatus.src = "images/x.png";
        taskStatus.addEventListener("click", function(event) {
        if (newTask.completion == false){
            taskStatus.src = "images/check_mark.png";
            newTask.completion = true;
            // congrats.innerHTML = "Nicely done!";
        }
    });
    }
    else {
        taskStatus.src = "images/check_mark.png";
        // congrats.innerHTML = "Nicely done!";


    }
    
    document.getElementById("doneStatus").appendChild(taskStatus);
    // document.getElementById("doneStatus").appendChild(congrats);

});

//I commented out the congrats to see if I can fix it, can't they misalign when more get appended






