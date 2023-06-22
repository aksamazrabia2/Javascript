//*******************Değişken Tanımlama Kuralları***********************
//https://www.w3schools.com/js/js_conventions.asp
//https://google.github.io/styleguide/jsguide.html#features-local-variable-declarations
//https://www.robinwieruch.de/javascript-naming-conventions/

//## Değişken Genel Tanımlama Kuralları
//camelCase Kullanımı:

let fullname=""//bu değil
let kodluyoruzserverinfo=""//bu değil
let kodluyoruz_server_info=""//bu değil
let fullName=""
let kodluyoruzServerInfo=""
let kodluyoruzSERverInfo=""//bu doğru kullanım değil


//let firstName="Rabia", lastName="Aksamaz"
let firstName="Rabia"
let lastName="Aksamaz"
console.log(firstName,lastName)


//UPPER_CASE Kullanımı:
const password="1234"//bu doğru kullanım değil
const PASSWORD="13445"//doğru kullanım 
const SERVER_PASSWORD="1324"

//değişkenlerde türkçe ve diğer dillerin kullanımı
let türkçeBilgi='Türkçe bilgi yazdırılıyor....'//dopru kullanım değil
//let türkçeBilgi  //olmazz
let info='Türkçe bilgi yazdırılıyor....'
console.log(info)

//anlamsız değişken adları kullanmayın!

//https://stackoverflow.com/questions/184618/what-is-the-best-comment-in-source-code-you-have-ever-encountered
//When I wrote this , only God and I understood what I was doing
//Now, God only knows

let x=1;//bu kullanım doğru değil
//x,y,z,k,i,e gibi anlamsız değişken isimlerini kullanmayın!



//Ek Bilgi:
//1: boolean tanımlanırken is/has kullanimi:

let isActive=true
let hasPassword=false

//2:Line Length<80
//asdfghjkasdıfjdsfıodsjfıdsfjdskfjdskfjdskfdkfdskfdsjfkdsfpofedopfsdofjdsfjdsfjo
//bu şekilde uzun olmamalı