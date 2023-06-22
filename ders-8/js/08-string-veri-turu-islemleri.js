//******************String Veri Türü İşlemleri*************************
//https://www.w3schools.com/jsref/jsref_obj_string.asp

let email="rabiaaksamaz@gmail.com"
let firstName="rabia"
let lastName="AKSAMAZ"

//string karakter sayısı->length
console.log(email.length)

//İlk Karakteri Bulmak ->[0];
console.log(firstName[0])
console.log(firstName.charAt(0))

//büyük harf/küçük harf:

firstName=firstName.toUpperCase()
console.log(firstName) 

firstName=firstName.toLowerCase()
console.log(firstName) 


//string içinde istediğimiz bilgiyi aramak ve yerini bulmak ->search

console.log(email.search("@"))
console.log( email[12])

console.log(email.search('olmayan')) //-1

//belli bir yere kadar al ->slice(domain bilgisi):

console.log(email.slice(0,12))

let DOMAIN=email.slice(email.search("@")+1)
console.log(DOMAIN)

console.log(DOMAIN.slice(0,DOMAIN.indexOf('.'))) //sadece gmail kısmını aldık.

//bilgiyi değiştir ->replace
email=email.replace('gmail.com','kodluyoruz.org')
console.log(email)

//istediğim bilgi var mı? ->includes:
email.includes('sdfdsfds')//false
email.includes('@') //true


//istediğim bilgiyle başladı mı? bitti mi ->startsWidth,endsWith:

console.log(email.endsWith('kodluyoruz.org'))

//İlk Harflerini büyük yapmak

firstName="FIST"
lastName="LAST"
let fullName=`${firstName[0].toUpperCase()}${firstName.slice(1).toLowerCase()} ${lastName[0].toUpperCase()}${lastName.slice(1).toLowerCase()}`

console.log(fullName)