
import ("./index.css")


let logo = document.querySelector(".logo");

logo.innerHTML = `<img src = "./imag/file.jpg"/>`;

let Page = document.getElementById("page");

let out = document.getElementById("in");
let button = document.getElementById("button");

button.onclick = ()=>{
    printNotes();
}

function printNotes(){
    Page.innerHTML = null;
    let p = document.createElement('p');
    p.classList.add("con");
    p.innerText = out.value;
    Page.append(p);
}