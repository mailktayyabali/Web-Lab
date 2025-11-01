// Toggle between Sign In and Sign Up forms
const signupForm = document.getElementById("signup-form");
const signinForm = document.getElementById("signin-form");

document.getElementById("show-signin").addEventListener("click", (e) => {
  e.preventDefault();
  signupForm.classList.remove("active");
  signinForm.classList.add("active");
});

document.getElementById("show-signup").addEventListener("click", (e) => {
  e.preventDefault();
  signinForm.classList.remove("active");
  signupForm.classList.add("active");
});
