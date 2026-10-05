let studentForm = document.getElementById("studentForm");

studentForm.addEventListener("submit", function(event) {

    event.preventDefault();

    let fullName = document.getElementById("fullName").value;

    alert("Application submitted successfully for " + fullName + "!");
});