const togglebtn= document.getElementById("toggleBtn");
const body = document.body;
togglebtn.addEventListener("click",function () {
    body.classList.toggle("dark-mode");
});