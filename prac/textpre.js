const textin=document.getElementById("textInput");
const preview=document.getElementById("preview");
const btn=document.getElementById("btn");
const body=document.body;
btn.addEventListener("click",function() {
    textin.value="";
    preview.textContent="";
})
textin.addEventListener("input",function () {
    const text= textin.value;
    preview.textContent=text;
    preview.style.color="red";
    console.log("User typed:", text)
});