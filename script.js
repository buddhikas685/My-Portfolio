
// TYPING EFFECT

const text = "Web Developer | Software Engineering Student";

let i = 0;

function typing(){

    if(i < text.length){

        document.getElementById("typing").innerHTML += text.charAt(i);

        i++;

        setTimeout(typing,100);
    }
}

typing();

// SCROLL ANIMATION

window.addEventListener("scroll", reveal);

function reveal(){

    let reveals = document.querySelectorAll(".reveal");

    for(let i=0; i<reveals.length; i++){

        let windowHeight = window.innerHeight;

        let revealTop = reveals[i].getBoundingClientRect().top;

        let revealPoint = 100;

        if(revealTop < windowHeight - revealPoint){

            reveals[i].classList.add("active");
        }
    }
}

// FORM VALIDATION

document.getElementById("contactForm").addEventListener("submit", function(e){

    let name = document.getElementById("name").value;

    let email = document.getElementById("email").value;

    let message = document.getElementById("message").value;

    if(name == "" || email == "" || message == ""){

        alert("Please fill all fields");

        e.preventDefault();
    }
    else{

        alert("Message Sent");
    }
});
