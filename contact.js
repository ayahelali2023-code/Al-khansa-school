const form = document.getElementById("contactForm");

const nameInput = document.getElementById("name");

const classInput = document.getElementById("class");

const successMessage = document.getElementById("successMessage");


// FORM SUBMIT

form.addEventListener("submit", function(e){

    e.preventDefault();

    let valid = true;


    // REMOVE ERRORS

    nameInput.classList.remove("error");

    classInput.classList.remove("error");


    // VALIDATION

    if(nameInput.value.trim() === ""){

        nameInput.classList.add("error");

        valid = false;

    }


    if(classInput.value.trim() === ""){

        classInput.classList.add("error");

        valid = false;

    }


    // SUCCESS

    if(valid){

        successMessage.style.display = "block";

        form.reset();

    }

});


// SUGGESTION BUTTONS

const suggestButtons = document.querySelectorAll(".suggest-btn");

const messageBox = document.getElementById("message");


suggestButtons.forEach(button => {

    button.addEventListener("click", () => {

        messageBox.value = button.innerText;

    });

});