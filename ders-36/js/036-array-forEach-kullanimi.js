//Arra

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/forEach

//https://www.w3schools.com/jsref/jsref_foreach.asp

const PRODUCTS=["Laptop","Phone","Speaker","Desktop PC","Server","Mouse","Keyboard"]

//PRODUCTS.forEach((product,index,array)=> console.log(array[index]=product + " 111")) // console.log(product,index,array)


PRODUCTS.forEach((product,index,array)=>array[index]=`${product.toUpperCase()}`)
console.log(PRODUCTS)

/*
const userListDOM=document.querySelector('#userList')

for(let index=0;index<users.length;index++){
    const liDOM=document.createElement('li')
    liDOM.innerHTML=users[index]
    userListDOM.appendChild(liDOM)
  

}

*/ 
const userListDOM=document.querySelector('#userList')
PRODUCTS.forEach(item=>{
    const liDOM=document.createElement('li')
    liDOM.innerHTML=item
    userListDOM.append(liDOM)
})