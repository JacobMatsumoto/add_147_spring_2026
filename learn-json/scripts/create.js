class contact {
    constructor(fName, lName, email, phoneNumber) {
        this.fName = fName;
        this.lName = lName;
        this.email = email;
        this.phoneNumber = phoneNumber;
    }
}




function addme() {
    let first = document.getElementById("fname").value;
    let last = document.getElementById("lname").value;
    let email = document.getElementById("email").value;
    let phoneNum = document.getElementById("phone").value;

    const newContact = new contact(first, last, email, phoneNum);
    const myJSON = JSON.stringify(newContact);

    document.getElementById("json-value").innerHTML = myJSON;
}

