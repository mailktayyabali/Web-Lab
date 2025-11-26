const button=document.getElementById("btn");
const display= document.getElementById("countDisplay");
let count=0;
button.addEventListener("click",function () {
    ++count;
    display.textContent="click "+count;
});