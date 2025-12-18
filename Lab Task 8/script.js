let nameinput = document.getElementById('name');
let nameError=document.getElementById('nameError');
let emailinput = document.getElementById('email');
let emailError = document.getElementById('emailError');
let passwordinput = document.getElementById('password');
let passwordError = document.getElementById('passwordError');
const button=document.getElementById("button");
const display= document.getElementById("displaycount");
let body = document.body;
let gallery = document.getElementById("gallery");
let lightbox = document.getElementById("lightbox");
let lightImage = document.getElementById("lightImage");

gallery.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    lightImage.src = e.target.src;
    lightbox.style.display = "block";
  }
});
lightbox.addEventListener("click", () => {
  lightbox.style.display = "none";
});
nameinput.addEventListener("input",()=>{
    let name = nameinput.value;
    if(name.length < 3){
        nameError.textContent = "Name must be at least 3 characters long.";
        nameError.style.color = "red";
    } else {
        nameError.textContent = "Name looks good!";
        nameError.style.color = "green";
    }
});
emailinput.addEventListener("input",()=>{
    let email= emailinput.value;
    let pattern= [/^[^\s@]+@[^\s@]+\.[^\s@]+$/];
    if(!pattern[0].test(email)){
        emailError.textContent = "Please enter a valid email address.";
        emailError.style.color = "red";
    } else {
        emailError.textContent = "Email looks good!";
        emailError.style.color = "green";
    }
});
passwordinput.addEventListener("input",()=>{
    let password=passwordinput.value;
    if(password.length()<6){
        passwordError.textContent = "Password must be at least 6 characters long.";
        passwordError.style.color = "red";
    }
    else {  
        passwordError.textContent = "Password looks good!";
        passwordError.style.color = "green";
    }
});
let Count=0;
button.addEventListener("click",()=>{
    Count++;
    display.textContent= Count;
});

