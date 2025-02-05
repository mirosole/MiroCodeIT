document.addEventListener("DOMContentLoaded", function() {
    const signupBtn = document.getElementById("signupBtn");
    const contactInfo = document.getElementById("contactInfo");

    signupBtn.addEventListener("click", function() {
        contactInfo.classList.toggle("hidden");
    });
});
