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
        Title: ${this.title}<br>
        Description: ${this.description}<br>
        Completion: ${this.completion}<br>
        `;
    }

}
//works but needs improvements, format date and make it work more than once
document.getElementById("submit").addEventListener("click", function(event){
    event.preventDefault();

    var taskDate = new Date(); //****TODO**** Format nicely
    var taskTitle = document.getElementById("title").value;
    var taskDescription = document.getElementById("description").value;
    var taskCompletetionStatus = false

    const task5 = new toDoItem(taskDate, taskTitle, taskDescription, taskCompletetionStatus) 
    //****TODO**** Make it so it can loop and keep making tasks, use array? Save to seperate file? Json? Pickling?
    document.getElementById("class5").innerHTML = task5.displayTask();

});

//realistically it would pull this from a function and form and then put variables in but this is just a sample test
const task1 = new toDoItem('3/5/2026', 'Clean Room', 'Clean up your room! Don\'t forget to vacuum', false );
const task2 = new toDoItem('3/3/2026', 'Clean Bathroom', 'Clean up your bathroom! Careful with the bleach', true );
const task3 = new toDoItem('3/7/2026', 'Calc Homework', 'Don\'t forget to do your calc homework', false );
const task4 = new toDoItem('3/8/2026', 'Walk Dog', 'Take the dog for a walk today', false );

document.getElementById("class1").innerHTML = task1.displayTask();
document.getElementById("class2").innerHTML = task2.displayTask();
document.getElementById("class3").innerHTML = task3.displayTask();
document.getElementById("class4").innerHTML = task4.displayTask();