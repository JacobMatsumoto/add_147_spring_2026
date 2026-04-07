//I'm gonna use part of this assignment to see if I can also put it towards my midterm project and save a little time
class toDoItem{
    //to-Do items as a class to be able to call functions from the objects I make.
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




*/
const tasks = []; //unused so far, would use for storing in a json, didn't have the time to unfortunately, and it leaves project scope
//Could use this for a future project though

document.getElementById("submit").addEventListener("click", function(event){
    /*
        When clicking the submit button on the page this creates a div as well as p and img in the script populates them, and puts them into the HTML
        creating new toDo objects as it is clicked, it also appends each object to a list outside this for future saving to a json.
    */
    event.preventDefault();

    const taskDate = new Date(); //*TODO* Format nicely *DONE*
    const year = taskDate.getFullYear();
    const month = (taskDate.getMonth() + 1);
    const day = taskDate.getDate();
    let hour = taskDate.getHours();
    let amOrPm = "AM" 
    if (hour >= 12){ //checks for am or pm on clock
        amOrPm = "PM";
        if (hour > 12) 
            hour = hour - 12;

    }
    let min = taskDate.getMinutes();

    if (min < 10){
        min = "0" + min;
    }

    const formatedDate = `${year}/${month}/${day} ${hour}:${min} ${amOrPm}`;
    //All this here just generates a date and then formates it

    var taskTitle = document.getElementById("title").value;
    var taskDescription = document.getElementById("description").value;

    var taskCompletetionStatus = false

    const newTask = new toDoItem(formatedDate, taskTitle, taskDescription, taskCompletetionStatus) //creating a new toDoItem object then appending to a list 

    tasks.push(newTask)

    const toDoDiv = document.createElement("div"); //"parent" div hosting the smaller divs for the text and img
    toDoDiv.className = "taskClass row";
    // toDoDiv.id = "taskDiv" //didn't need ids for this since they are already variables I have, so I don't need to assign ids for what I do
    document.getElementById("taskObjects").appendChild(toDoDiv);

    const toDoTextDiv = document.createElement("div"); //text "child div"
    // toDoTextDiv.id = "taskTextDiv"
    toDoTextDiv.className = "col-md-6";
    toDoDiv.appendChild(toDoTextDiv);

    const toDoImgDiv = document.createElement("div"); //img "child div"
    // toDoImgDiv.id = "taskImgDiv"
    toDoImgDiv.className = "col-md-2";
    toDoDiv.appendChild(toDoImgDiv);

    const taskP = document.createElement("p"); 
    taskP.className = "taskClass";
    taskP.innerHTML = newTask.displayTask();
    toDoTextDiv.appendChild(taskP);
    
    const taskStatus = document.createElement("img");
    //creating a <p> & <img> each time you submit a new task

    const congrats = document.createElement("p"); 

    if (newTask.completion == false) {
        taskStatus.src = "images/x.png";
        taskStatus.addEventListener("click", function(event) {
        if (newTask.completion == false){
            taskStatus.src = "images/check_mark.png";
            newTask.completion = true;
        }
    });
    }
    else {
        taskStatus.src = "images/check_mark.png";
    }
    
    toDoImgDiv.appendChild(taskStatus);


});

//I commented out the congrats to see if I can fix it, can't they misalign when more get appended
//It also ex






