// ======================================================
// Cybersecurity Threat Analytics
// Login JavaScript
// Bundle 2.2.2
// ======================================================

document.addEventListener("DOMContentLoaded", function () {

    // ==========================================
    // Elements
    // ==========================================

    const form = document.querySelector("form");

    const email = document.querySelector("input[name='email']");

    const password = document.getElementById("password");

    const togglePassword = document.getElementById("togglePassword");

    const loginButton = document.querySelector(".login-btn");



    // ==========================================
    // Password Show / Hide
    // ==========================================

    if (togglePassword) {

        togglePassword.addEventListener("click", function () {

            if (password.type === "password") {

                password.type = "text";

                togglePassword.innerHTML = "🙈";

            }

            else {

                password.type = "password";

                togglePassword.innerHTML = "👁";

            }

        });

    }



    // ==========================================
    // Create Error Message
    // ==========================================

    function showError(input, message) {

        removeError(input);

        const error = document.createElement("small");

        error.className = "error-message";

        error.innerText = message;

        input.parentElement.appendChild(error);

        input.classList.add("input-error");

    }



    // ==========================================
    // Remove Error
    // ==========================================

    function removeError(input) {

        const error = input.parentElement.querySelector(".error-message");

        if (error) {

            error.remove();

        }

        input.classList.remove("input-error");

    }



    // ==========================================
    // Email Validation
    // ==========================================

    function validateEmail() {

        const value = email.value.trim();

        const pattern =

            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (value === "") {

            showError(email, "Email is required");

            return false;

        }

        if (!pattern.test(value)) {

            showError(email, "Enter a valid email");

            return false;

        }

        removeError(email);

        return true;

    }



    // ==========================================
    // Password Validation
    // ==========================================

    function validatePassword() {

        const value = password.value.trim();

        if (value === "") {

            showError(password, "Password is required");

            return false;

        }

        if (value.length < 6) {

            showError(password, "Minimum 6 characters required");

            return false;

        }

        removeError(password);

        return true;

    }



    // ==========================================
    // Live Validation
    // ==========================================

    email.addEventListener("keyup", validateEmail);

    password.addEventListener("keyup", validatePassword);



    // ==========================================
    // Form Submit
    // ==========================================

    form.addEventListener("submit", function (e) {

        const emailValid = validateEmail();

        const passwordValid = validatePassword();

        if (!emailValid || !passwordValid) {

            e.preventDefault();

            return;

        }

        loginButton.innerHTML = "Logging in...";

        loginButton.disabled = true;

    });

});