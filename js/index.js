document.addEventListener("DOMContentLoaded", function () {
    // 버튼에 대한 참조 얻기
    const themeButton = document.getElementById("theme-button");

    // 어두운 모드 상태 여부 확인
    let isDarkMode = false;

    const toggleDarkMode = () => {
        // Toggle dark mode
        isDarkMode = !isDarkMode;

        // Get the button's image element
        const icon = themeButton.querySelector("img");
        const linkedin = document.getElementById("linkedin");
        const github = document.getElementById("github");

        // Change the icon based on the mode
        if (isDarkMode) {
            icon.src = "img/lightmode.png"; // Change to the light mode icon
            linkedin.src = "img/linkedin_light.png";
            github.src = "img/git_light.png";
            themeButton.querySelector("span").textContent = "Light Mode ";
            document.body.classList.add("dark-mode"); // Add dark mode styles to the body
        } else {
            icon.src = "img/darkmode.png"; // Change to the dark mode icon
            linkedin.src = "img/linkedin.png";
            github.src = "img/git.png";
            themeButton.querySelector("span").textContent = "Dark Mode "; // Change button text
            document.body.classList.remove("dark-mode"); // Remove dark mode styles from the body
        }
    };

    // 버튼에 클릭 이벤트 리스너 추가
    themeButton.addEventListener("click", toggleDarkMode);

    // Form validation and submission logic
    const signPetitionForm = document.getElementById("sign-petition");
    const signNowButton = document.getElementById("sign-now-button"); // "Sign Now" 버튼 추가

    // 이메일 유효성 검사 함수
    const validateEmail = (email) => {
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return regex.test(email);
    };

    const modal = document.getElementById("myModal"); // Define modal outside of the listener
    function updateSignatureCount() {
        // Find the existing counter element and remove it
        const counter = document.getElementById("counter");
        if (counter) {
            counter.remove();
        }

        // Create a new counter element and set its text
        const newCounter = document.createElement("p");
        newCounter.id = "counter";
        newCounter.textContent = `🖊️ ${count} people have shared feedback.`;

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

        // Create a new paragraph element for the signature
        const signatureParagraph = document.createElement("p");

        if (validateEmail(email)) {
            // If the email format is correct, display the email content and count
            signatureParagraph.textContent = `🖊️  ${name} said "${subject}" via email: ${email}`;
        } else {
            signatureParagraph.textContent = `"Invalid email format"`;
        }

        // Find the signatures section and append the new signature
        const signaturesSection = document.querySelector(".signatures");
        signaturesSection.appendChild(signatureParagraph);

        // Update the signature count
        count += 1;
        updateSignatureCount();

        // Reset the form fields
        signPetitionForm.reset();
    };

    signNowButton.addEventListener("click", addSignature); // "Sign Now" 버튼 클릭 시 addSignature 함수 호출

    signPetitionForm.addEventListener("submit", (e) => {
        e.preventDefault(); // Prevent default form submission

        let containsErrors = false;
        const petitionInputs = signPetitionForm.elements;

        for (let i = 0; i < petitionInputs.length; i++) {
            if (petitionInputs[i].value.length < 2) {
                containsErrors = true;
                petitionInputs[i].classList.add("error");
            } else {
                petitionInputs[i].classList.remove("error");
            }
        }

        const emailInput = document.getElementById("email");
        const errorMessage = document.getElementById("email-error");

        const email = emailInput.value;

        if (!validateEmail(email)) {
            // Invalid email format
            errorMessage.textContent = "Invalid email format";
            modal.style.display = "block"; // Show modal
        } else {
            // Valid email format and no other errors
            errorMessage.textContent = ""; // Clear error message
            modal.style.display = "none"; // Hide modal
            addSignature(e);
        }
    });
});
