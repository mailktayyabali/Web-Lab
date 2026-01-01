document.getElementById("regForm").addEventListener("submit", function (e) {
    e.preventDefault();  // stop page refresh
    let msg = document.getElementById("msg");

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let dept = document.getElementById("dept").value;

    let genderSelected = document.querySelector("input[name='gender']:checked");
    let courseSelected = document.querySelector(".course:checked");

    // BASIC VALIDATIONS
    if (name === "") {
        msg.textContent = "Name is required.";
        return;
    }

    if (email === "") {
        msg.textContent = "Email is required.";
        return;
    }

    // simple email pattern
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        msg.textContent = "Invalid email format.";
        return;
    }

    // phone: Pakistani format (11 digits)
    let phonePattern = /^[0-9]{11}$/;
    if (!phonePattern.test(phone)) {
        msg.textContent = "Phone must be 11 digits.";
        return;
    }

    if (!genderSelected) {
        msg.textContent = "Please select gender.";
        return;
    }

    if (dept === "") {
        msg.textContent = "Please select a department.";
        return;
    }

    if (!courseSelected) {
        msg.textContent = "Select at least one course.";
        return;
    }

    // SUCCESS
    msg.style.color = "green";
    msg.textContent = "Form submitted successfully!";
});
