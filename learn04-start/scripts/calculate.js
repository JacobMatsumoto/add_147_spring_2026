function addDate() {
    let today = new Date();
    document.getElementById("my_date") .innerHTML = today;
    document.getElementById("name"). value = "";
    document.getElementById("rm1length").value = "";
    document.getElementById("rm1width") . value = "";
    document.getElementById("rm1height") . value ="";
    document.getElementById("rm1cost") .value = "";
    document.getElementById("rm2length").value = "";
    document.getElementById("rm2width") . value = "";
    document.getElementById("rm2height") . value ="";
    document.getElementById("rm2cost") .value = "";
    document.getElementById("rm3length").value = "";
    document.getElementById("rm3width") . value = "";
    document.getElementById("rm3height") . value ="";
    document.getElementById("rm3cost") .value = "";

}

function estimate() { //I did this one a little different. This was just the logic of how to do it was in my head. 
    //less efficient but it was the first solution to pop into my head for this section
    numRooms = document.getElementById("rooms") . value;
    let name = document.getElementById("name").value;
    if (numRooms == 1){
        let length_rm1 = parseFloat(document.getElementById("rm1length").value);
        let width_rm1 = parseFloat(document.getElementById("rm1width").value);
        let height_rm1 = parseFloat(document.getElementById("rm1height").value);
        let totalSqFt_rm1 = ((length_rm1 * height_rm1 * 2) + (length_rm1 * width_rm1 *2));
        let cost_rm1 = (totalSqFt_rm1 * .65);
        document.getElementById("rm1cost").value = cost_rm1;
        var totalCost = cost_rm1.toFixed(2);
    }
    else if (numRooms == 2){
        let length_rm1 = parseFloat(document.getElementById("rm1length").value);
        let width_rm1 = parseFloat(document.getElementById("rm1width").value);
        let height_rm1 = parseFloat(document.getElementById("rm1height").value);
        let totalSqFt_rm1 = ((length_rm1 * height_rm1 * 2) + (length_rm1 * width_rm1 *2));
        let cost_rm1 = (totalSqFt_rm1 * .65);
        document.getElementById("rm1cost").value = cost_rm1;

        let length_rm2 = parseFloat(document.getElementById("rm2length").value);
        let width_rm2 = parseFloat(document.getElementById("rm2width").value);
        let height_rm2 = parseFloat(document.getElementById("rm2height").value);
        let totalSqFt_rm2 = ((length_rm2 * height_rm2 * 2) + (length_rm2 * width_rm2 *2));
        let cost_rm2 = (totalSqFt_rm2 * .65);
        document.getElementById("rm2cost").value = cost_rm2;
        var totalCost = (cost_rm1 + cost_rm2).toFixed(2);
    }
    else if (numRooms == 3){
        let length_rm1 = parseFloat(document.getElementById("rm1length").value);
        let width_rm1 = parseFloat(document.getElementById("rm1width").value);
        let height_rm1 = parseFloat(document.getElementById("rm1height").value);
        let totalSqFt_rm1 = ((length_rm1 * height_rm1 * 2) + (length_rm1 * width_rm1 *2));
        let cost_rm1 = (totalSqFt_rm1 * .65);
        document.getElementById("rm1cost").value = cost_rm1;

        let length_rm2 = parseFloat(document.getElementById("rm2length").value);
        let width_rm2 = parseFloat(document.getElementById("rm2width").value);
        let height_rm2 = parseFloat(document.getElementById("rm2height").value);
        let totalSqFt_rm2 = ((length_rm2 * height_rm2 * 2) + (length_rm2 * width_rm2 *2));
        let cost_rm2 = (totalSqFt_rm2 * .65);
        document.getElementById("rm2cost").value = cost_rm2;

        let length_rm3 = parseFloat(document.getElementById("rm3length").value);
        let width_rm3 = parseFloat(document.getElementById("rm3width").value);
        let height_rm3 = parseFloat(document.getElementById("rm3height").value);
        let totalSqFt_rm3 = ((length_rm3 * height_rm3 * 2) + (length_rm3 * width_rm3 *2));
        let cost_rm3 = (totalSqFt_rm3 * .65);
        document.getElementById("rm3cost").value = cost_rm3;
        var totalCost = (cost_rm1 + cost_rm2 + cost_rm3).toFixed(2);
    }

    if (isNaN(totalCost)){
        document.getElementById("estimate"). innerHTML = (name + ", Some fields are incorrect or missing");
    }
    else{
        document.getElementById("estimate"). innerHTML = (name + ", your estimate is " + totalCost);
    }
}

function showRooms(){
    numRooms = document.getElementById("rooms") . value;
    // alert(numRooms);
    if (numRooms == 1) {
    document.getElementById("room2") . style = "display: none";
    document.getElementById("room3") .style = "display: none";
    }

    else if (numRooms == 2) {
    document.getElementById("room2") .style = "display: block";
    document.getElementById("room3") .style = "display: none";
    }

    else if (numRooms == 3) {
    document.getElementById("room2") .style = "display: block";
    document.getElementById("room3") .style = "display: block";

    }

}
