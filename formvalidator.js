function validateForm(event) {
    let myForm = document.querySelector("#myForm");

    const email=document.getElementById("email").value;
    const reEmail=doucument.getElementById("reEmail"); 

    myForm.email1.style.backgroundColor = "gray";
    myForm.reEmail.style.backgroundColor = "gray";

    if (myForm.email1.value == myForm.reEmail.value) {
        myForm.email1.style.backgroundColor = "Green";
    }

    if (myForm.email1.value != myForm.reEmail.value) {
        myForm.reEmail.style.backgroundColor = "Red"; 
    }

}
let myForm = document.querySelector("#myForm");
myForm.validate.addEventListener("click", validateForm);

//document.getElementById("emailForm").addEventListener("submit", function(event) { 
    //event.preventDefault(); 

    //const email = document.getElementById("email").value;
    //const confirmEmail= document.getElementByID("confirmEmail");
    //const errorMessage = document.getElementById("errorMessage");
    //if (email !== confirmEmail) {
       //errorMessage.textContent = "Email Addresses do not match";
    //}
    //else {
        //errorMessage.textContent = ""; 
        //alert("Email addresses match. Form Submitted")
    //}
//})
