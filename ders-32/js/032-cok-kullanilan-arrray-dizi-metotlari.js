//Çok Kullanılan Array(Dizi) Metotları ve Array içinde Array
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

//https://www.w3schools.com/js/js_array_methods.asp

let items=[1,2,3,4,5]

//Array içinde Array:

let femaleUsers=["Ayse","Hulya","Merve"]
let maleUsers=["Ahmet","Hasan","Mehmet"]

items.unshift(femaleUsers)

items.push(maleUsers)

console.log(items)
console.log(items[0].length)//Arrray icerisinde istedigimiz Array'in length bilgisini aldık.
console.log(items[0][0])//Ayse bilgisine ulastik

//Array icerisinden oge ayirmak->splice(pos,item?)
let newItems=items.splice(1,5)

console.log("newItems:",newItems)
console.log("items: ",items)

 

//Array icerisindeki ogenin index bilgisini bulmak ->indexOf('value')

items.unshift("lorem")
items.push("ipsum")

console.log(items[items.indexOf("ipsum")])

//Array Kopyalamak->slice,[...ES6]
let copyItems=items
console.log(items)


copyItems.pop()//son ogeyi cikarttik
console.log("copyItems: ",copyItems)
console.log("Items",items)

console.log("kopyalandiktan sonraki hali")

copyItems =items.slice()
copyItems.pop()//son ogeyi cikarttik
console.log("copyItems: ",copyItems)
console.log("Items",items)

let es6Items=[...items]//es6 ve sonrasında gelen kopyalama işlemi
console.log(es6Items)

//Ikı Array Bilgisini Birlestirmek ->[..ES6, ...ES6]

let allUsers=[...femaleUsers,...maleUsers]//es6 birden fazla array yapisini birlestirmek
console.log(allUsers)

//Array icerisindeki bilgiyi String'e cevirmek ->toString,join
console.log(allUsers.toString())
console.log(allUsers.join("---"))


//Istedigimiz Index Bilgisine Oge Eklemek ->splice(index,0,value)

allUsers.splice(allUsers.length-1,0,"Melissa")
allUsers.splice(Math.floor(allUsers.length/2),0,"Lorem")
console.log(allUsers)