//Arrow function kullanımı
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

function hello(firstName){
    console.log(`${firstName}`)

}
hello("Javascript")

const helloFuncV1=(firstName)=> {console.log(`Merhaba ${firstName}`)}
helloFuncV1("helloFuncV1")

const helloFuncV2=firstName=> {console.log(`Merhaba ${firstName}`)}//bir parametre bir dönüş işlemi
helloFuncV2("helloFuncV2")

const helloFuncV3=(firstName, lastName)=>
 {console.log(`Merhaba ${firstName} ${lastName}`)}

helloFuncV3("helloFuncV3","Last Name info")

const helloFuncV4=(firstName,lastName)=>{
    let info=`Merhaba ${firstName} ${lastName}`
    console.log(info)
    return info
}

helloFuncV4("helloFuncV4","Other Info")