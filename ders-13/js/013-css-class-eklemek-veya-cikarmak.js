//css class eklemek veya cikartmak


let greeting=document.querySelector("#greeting")


greeting.classList.add("text-primary")
greeting.classList.add("title")
greeting.classList.add("new-info","second-class","third-class")//birden fazla eklemek

greeting.classList.remove("title","second-class","third-class")//birden fazla silmek
console.log(greeting.classList)