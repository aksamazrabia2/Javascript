//DOM Etkinlikleriyle Çalışmak 
//https://www.w3schools.com/jsref/dom_obj_event.asp
//https://developer.mozilla.org/en-US/docs/Web/Events

let greeting=document.querySelector("#greeting")
greeting.addEventListener("mouseover", domClick)//mouse la üstüne geldikçe
//click yazarak da tıklandıpında yapabiliriz

function domClick() {
    console.log("etkinlik denetlendi")
    this.style.color=="red" ? this.style.color="black" : this.style.color="red"
  } 