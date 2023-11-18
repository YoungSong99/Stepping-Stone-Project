document.addEventListener("DOMContentLoaded", function () {

    <!-- Darkmode -->
    const themeButton = document.getElementById("theme-button");
    let isDarkMode = false;

    const toggleDarkMode = () => {
        // Toggle dark mode
        isDarkMode = !isDarkMode;

        // Get the button's image element
        const icon = themeButton.querySelector("img");
        const linkedin = document.getElementById("linkedin");
        const github = document.getElementById("github");

        // Update the button's image and text
        if (isDarkMode) {
            icon.src = "img/lightmode.png";
            linkedin.src = "img/linkedin_light.png";
            github.src = "img/git_light.png";
            themeButton.querySelector("span").textContent = "Light Mode ";
            document.body.classList.add("dark-mode"); // Add dark mode styles to the body
        } else {
            icon.src = "img/darkmode.png";
            linkedin.src = "img/linkedin.png";
            github.src = "img/git.png";
            themeButton.querySelector("span").textContent = "Dark Mode "; // Change button text
            document.body.classList.remove("dark-mode"); // Remove dark mode styles from the body
        }
    };

    themeButton.addEventListener("click", toggleDarkMode);




    // Form validation and submission logic
    const signPetitionForm = document.getElementById("sign-petition");
    const signNowButton = document.getElementById("sign-now-button");

    const validateEmail = (email) => {
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return regex.test(email);
    };

    const modal = document.getElementById('myModal');
    const closeModalButton = document.querySelector(".close"); // 수정된 부분

    closeModalButton.onclick = function() {
        modal.style.display = "none";
    };

    // 모달 밖을 클릭했을 때 닫기
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };

    // ESC 키로 모달 닫기
    document.addEventListener('keydown', function(event) {
        if (event.key === "Escape") {
            modal.style.display = "none";
        }
    });
    function updateSignatureCount() {
        // Find the existing counter element and remove it
        const counter = document.getElementById("counter");
        if (counter) {
            counter.remove();
        }

        // Create a new counter element and set its text
        const newCounter = document.createElement("p");
        newCounter.id = "counter";
        newCounter.innerHTML = `️<b>🖤   ${count} people have shared feedback.</b>`;

        // Append the new counter to the signatures section
        const signaturesSection = document.querySelector(".signatures");
        signaturesSection.appendChild(newCounter);
    };


    let count = 3;
    updateSignatureCount();


    const addSignature = (event) => {
        event.preventDefault();
        // Get the name and subject from the form inputs
        const name = document.getElementById("name").value;
        const subject = document.getElementById("subject").value;
        const email = document.getElementById("email").value;
        const emailInput = document.getElementById("email");


        // Create a new paragraph element for the signature
        const signatureParagraph = document.createElement("p");
        var span = document.getElementsByClassName("close")[0];
        const emailError = document.getElementById('email-error');


        if (validateEmail(email)) {
            // If the email format is correct, display the email content and count
            signatureParagraph.textContent = `🖊️ ${name} said "${subject}"`;
            // Find the signatures section and append the new signature
            const signaturesSection = document.querySelector(".signatures");
            signaturesSection.appendChild(signatureParagraph);

            // Update the signature count
            count += 1;
            updateSignatureCount();
            signPetitionForm.reset();
            modal.style.display = "block";
        } else {
            emailInput.classList.add("error");
            emailError.style.display = "block"; // Display the error message
        }
    };

    signNowButton.addEventListener("click", addSignature); // "Sign Now" 버튼 클릭 시 addSignature 함수 호출

});


$(function(){
    $('.animate').scrolla({
        mobile: true,
        once: false
    });
});

document.addEventListener('DOMContentLoaded', function() {

    document.getElementById("motion-button").addEventListener("click", function() {
        // .motion class
        let motionElements = document.querySelectorAll('.motion');
        motionElements.forEach(function(element) {
            element.classList.remove('motion');
        });

        // .animate class
        let animateElements = document.querySelectorAll('.animate');
        animateElements.forEach(function(element) {
            element.classList.remove('animate');
        });
    });
});