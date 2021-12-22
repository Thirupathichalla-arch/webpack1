
import ("./index.css")
import("./index.css")
import Icon from './file.jpg';

function component() {

    
    const element = document.createElement('div');
    element.innerHTML ="hello world";
    element.classList.add('red');
    const myIcon = new Image();
     myIcon.src = Icon;
     element.appendChild(myIcon);
     myIcon.classList.add('img');
    
    return element;
  }
 
  document.body.appendChild(component());