//****************DOM İçinden Öge Seçimi*******************

//https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
//https://developer.mozilla.org/en-US/docs/Web/API/document/querySelector


//let h2=document.getElementsByTagName('h2')  //kullanışlı olmadı
let title=document.getElementById('title')
console.log(title.innerHTML)
title.innerHTML="Degisen Bilgi"
console.log(title.innerHTML)


//let link=document.querySelector("ul#list>li>a")
let link=document.querySelector("#kodluyoruzLink")
link.innerHTML+=" degisti"
link.style.color="red"
link.classList.add('btn')