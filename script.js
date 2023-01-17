var selectedRow = null;

// show alerts
function showAlert(message, className){
    const div = document.createElement("div");
    div.className = `alert alert-${className}`;
    
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".container");
    const main = document.querySelector(".main");
    container.insertBefore(div, main);

    setTimeout(() => document.querySelector(".alert").remove(), 3000);

}

//Clear All fields
function clearFields(){
    document.querySelector("#firstName").value = "";
    document.querySelector("#lasttName").value = "";
    document.querySelector("#rollNum").value = "";

}

// ADD Data

document.querySelector("#student-form").addEventListener("submit", (e) => {
    e.preventDefault();

    //Get Form Values
    const firstName = document.querySelector("#firstName").value;
    const lastName = document.querySelector("#lastName").value;
    const rollNum = document.querySelector("#rollNum").value;

    //validate
    if(firstName == "" || lastName == "" || rollNum == "" )
    {
        showAlert("Please fill in all fields", "danger");
    }
});

// Delete Data

document.querySelector("#student-list").addEventListener("click", (e) =>{
    target = e.target;
    if(target.classList.contains("delete")){
        target.parentElement.parentElement.remove();
        showAlert("Student Data Deleted", "danger");
    }
})