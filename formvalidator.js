function validateForm() {
    let x = document.forms["myForm"]["email"].value;
    let y = document.forms["myForm"]["reEmail"].value;
        if (x !== y) {
            window.prompt("Emails must match");
            return false; 
        }
    }
