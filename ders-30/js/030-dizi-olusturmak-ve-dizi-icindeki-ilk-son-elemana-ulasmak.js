//array-dizilerle calismak

//array olusturmak
let domain="kodluyoruz"
let isActive=false
let items=[15,25,35,isActive,domain]
console.log(items)

let emptyArray=[]//bos list

//array icerisindeki eleman/oge sayisini ogrenmek
console.log(
    items.length
)
//document.querySelector('#info').innerHTML=items.length

//array icindeki ilk elemanın cagirilmasi
console.log(items[0])

//array icindeki son elemanın cagirilmasi
console.log(items[items.length-1])

//array icindeki ortadaki elemanın cagirilmasi
console.log(
    "ortadaki değer:",
    items[Math.floor(items.length/2)]
)

//degisken icindeki bilginin array olup olmadıgının kontrol edilmesi

console.log(typeof(items))//object olarak çıktı veriyor

console.log(
    Array.isArray(items)
)
//hangileri isArray-> True verir

console.log("[] : ",Array.isArray([]))
console.log("1 : ",Array.isArray(1))
console.log("true : ",Array.isArray(true))