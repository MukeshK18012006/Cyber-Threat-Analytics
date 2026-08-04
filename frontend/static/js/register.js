/* ===========================================================
   Cybersecurity Threat Analytics
   Register Page JavaScript
=========================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector("form");

    const fullname = document.querySelector('input[name="fullname"]');

    const username = document.querySelector('input[name="username"]');

    const email = document.querySelector('input[name="email"]');

    const password = document.getElementById("password");

    const confirmPassword = document.getElementById("confirmPassword");

    /* =====================================================
       Create Password Toggle
    ===================================================== */

    createPasswordToggle(password);

    createPasswordToggle(confirmPassword);

    /* =====================================================
       Password Strength
    ===================================================== */

    const strength = document.createElement("small");

    strength.id = "password-strength";

    strength.style.display = "block";

    strength.style.marginTop = "8px";

    strength.style.fontWeight = "600";

    password.parentNode.appendChild(strength);

    password.addEventListener("input", function () {

        const value = password.value;

        if (value.length === 0) {

            strength.innerHTML = "";

            return;

        }

        if (value.length < 6) {

            strength.style.color = "#ef4444";

            strength.innerHTML = "Weak Password";

        }

        else if (value.length < 10) {

            strength.style.color = "#f59e0b";

            strength.innerHTML = "Medium Password";

        }

        else {

            strength.style.color = "#22c55e";

            strength.innerHTML = "Strong Password";

        }

    });

    /* =====================================================
       Confirm Password
    ===================================================== */

    const matchMessage = document.createElement("small");

    matchMessage.style.display = "block";

    matchMessage.style.marginTop = "8px";

    matchMessage.style.fontWeight = "600";

    confirmPassword.parentNode.appendChild(matchMessage);

    confirmPassword.addEventListener("keyup", function () {

        if (confirmPassword.value.length === 0) {

            matchMessage.innerHTML = "";

            return;

        }

        if (password.value === confirmPassword.value) {

            matchMessage.style.color = "#16a34a";

            matchMessage.innerHTML = "Passwords Match";

        }

        else {

            matchMessage.style.color = "#dc2626";

            matchMessage.innerHTML = "Passwords Do Not Match";

        }

    });

    /* =====================================================
       Form Validation
    ===================================================== */

    form.addEventListener("submit", function (e) {

        if (fullname.value.trim().length < 3) {

            alert("Enter a valid Full Name.");

            fullname.focus();

            e.preventDefault();

            return;

        }

        if (username.value.trim().length < 4) {

            alert("Username should contain at least 4 characters.");

            username.focus();

            e.preventDefault();

            return;

        }

        if (!validateEmail(email.value)) {

            alert("Enter a valid Email Address.");

            email.focus();

            e.preventDefault();

            return;

        }

        if (password.value.length < 6) {

            alert("Password must contain at least 6 characters.");

            password.focus();

            e.preventDefault();

            return;

        }

        if (password.value !== confirmPassword.value) {

            alert("Passwords do not match.");

            confirmPassword.focus();

            e.preventDefault();

            return;

        }

    });

});

/* ===========================================================
   Password Toggle
=========================================================== */

function createPasswordToggle(input) {

    const wrapper = document.createElement("div");

    wrapper.style.position = "relative";

    wrapper.style.display = "flex";

    wrapper.style.alignItems = "center";

    input.parentNode.insertBefore(wrapper, input);

    wrapper.appendChild(input);

    const toggle = document.createElement("span");

    toggle.innerHTML = "👁";

    toggle.style.position = "absolute";

    toggle.style.right = "15px";

    toggle.style.cursor = "pointer";

    toggle.style.userSelect = "none";

    toggle.style.fontSize = "18px";

    wrapper.appendChild(toggle);

    toggle.addEventListener("click", function () {

        if (input.type === "password") {

            input.type = "text";

            toggle.innerHTML = "🙈";

        }

        else {

            input.type = "password";

            toggle.innerHTML = "👁";

        }

    });

}

/* ===========================================================
   Email Validation
=========================================================== */

function validateEmail(email) {

    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

}