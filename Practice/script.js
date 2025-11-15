let button2= document.querySelector('.btn-2');
function alertbtn() {
    alert("hlo i am alert")
}
button2.addEventListener('click',alertbtn)

let button3 = document.querySelector('.box-3');
function Chnagebg() {
    document.body.style.backgroundColor = "red";
};
button3.addEventListener("mouseover",Chnagebg);