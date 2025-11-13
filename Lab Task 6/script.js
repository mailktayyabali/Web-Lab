let heading = document.getElementById("title");
heading.style.color = "blue";

let messages = document.getElementsByClassName("message");
messages[0].innerText = " Class Accessed Successfully !";

let paragraphs = document.getElementsByTagName("p");
paragraphs[0].style.fontWeight = "bold";

let firstPara = document.querySelector(".message");
firstPara.style.color = " green ";

let allParas = document.querySelectorAll("p");
allParas.forEach((p) => (p.style.fontSize = "18px"));

document.getElementById ("container").innerHTML = " <b > New HTML Added ! </b>";

let text = document.getElementById ("title").innerText ;
console.log ( text ) ;

let btn = document . getElementById ("btn") ;
btn.setAttribute ("title" , "Click this button") ;
console.log (btn.getAttribute ("id") ) ;

let heading1 = document.getElementById ("title") ;
heading1.style.backgroundColor = "yellow";
heading1.style.padding = "10px";

let newDiv = document.createElement ("div") ;
let textNode = document.createTextNode (" This is a new Div !") ;
newDiv.appendChild (textNode) ;
document.body.appendChild (newDiv) ;

let newPara = document.createElement ("p") ;
newPara.textContent = " This paragraph was added !";
document.getElementById("container").appendChild(newPara) ;

let div = document.getElementById ("container") ;
div.append (" Appended text !");
div.prepend (" Prepended text !");

let para = document.querySelector ("p") ;
para.remove () ; 

let button = document.getElementById ("btn") ;
console.log ( button.parentNode ) ;

let container = document.getElementById ("container") ;
console.log (container.children) ;

let first = container.firstChild ;
let last = container.lastChild ;
console.log ( first , last ) ;

let para1 = document.querySelector ("p") ;
console.log ( para.nextSibling ) ;

let heading2 = document.getElementById ("title") ;
heading2.classList.add ("highlight") ;
heading2.classList.toggle ("active6") ;

let newItem = document.createElement ("p") ;
newItem.textContent = " Inserted paragraph !";
let container1 = document.getElementById ("container") ;
container1.insertBefore ( newItem , container.firstChild ) ;

// let newPara1 = document.createElement ("p") ;
// newPara1.textContent = " I replaced the old one !";
// container.replaceChild ( newPara1 , container . children [0]) ;

document . getElementById ("btn") . addEventListener ("click" , function () {
 alert (" Button clicked !") ;
 }) ;
// lab ex 1
let dynamicDiv = document.createElement("div");
dynamicDiv.textContent = "This is a dynamically created div.";
document.body.appendChild(dynamicDiv);

// lab ex 2
document.getElementById("btn").addEventListener("click", function() {
  let title = document.getElementById("title");
  title.style.color = "red";
  title.style.fontSize = "24px";
});
// lab ex 3
let containerElement = document.getElementById("container");
let children = containerElement.children;
for (let i = 0; i < children.length; i++) {
  console.log(children[i]);
}
// lab ex 4
let paraA = document.createElement("p");
paraA.textContent = "This is the new paragraph replacing the old one.";
let paraB = document.querySelector("p");
paraB.parentNode.replaceChild(paraA, paraB);

setTimeout(function () {
  paraA.remove();
}, 3000);

//lab ex 5
const input = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("todoList");
addBtn.addEventListener("click", () => {
  const task = input.value.trim(); 
  if (task === "") {
    alert("Please enter a task!");
    return;
  }
  const li = document.createElement("li");
  li.textContent = task;

  list.appendChild(li);
  input.value = "";
});
const email = document . getElementById (" email ") ;
 const msg = document . getElementById (" msg ") ;

 email.addEventListener (" input " , () => {
 const pattern1 = /^[^\ s@ ]+ @ [^\ s@ ]+\.[^\ s@ ]+$/;
 if( pattern1.test ( email . value ) ) {
 msg.textContent = "Valid Email ";
 msg.style.color = "green";
 }else{
 msg . textContent = " Invalid Email ";
 msg . style . color = " red ";
 }
 }) ;
 //Image Gallery with Lightbox
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

//Dark/Light Theme
const toggle = document.getElementById("toggleTheme");
const body = document.body;

toggle.addEventListener("click", () => {
body.classList.toggle("dark");

localStorage.setItem("theme", body.classList.contains("dark") ? "dark" : "light");
});

window.onload = () => {
if ( localStorage.getItem ("theme") === "dark") {
body.classList.add("dark");
}
};

//Dynamic Table Generation
document.getElementById("generate").addEventListener("click", () => {
let rows = document.getElementById("rows").value;
let cols = document.getElementById("cols").value;
let table = document.createElement("table");
table.border = "1";

for ( let i = 0; i < rows ; i ++) {
let tr = document.createElement("tr") ;
for (let j = 0; j < cols; j++) {
let td = document.createElement("td");
td.textContent = `R${ i +1} C${ j +1}`;
tr.appendChild(td);
}
table.appendChild(tr);
}

let container = document.getElementById("tableContainer");
container.innerHTML = "";
container.appendChild(table);
});
