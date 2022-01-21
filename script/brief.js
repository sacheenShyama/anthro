


let imagecontainer=document.getElementById("imageContainer")
let imageName=document.getElementById("imageName")
let imagePrice=document.getElementById("imagePrice")
let img=document.createElement("img")


let fullpage=JSON.parse(localStorage.getItem("zoominPage"))
// console.log(fullpage)

img.src=fullpage.Image
imageName.innerText=fullpage.Name
imagePrice.innerText=`Price:  $${fullpage.Price}.00`
imagecontainer.append(img)



// path for location

let openCheckout=document.getElementById("openCheckout");

openCheckout.addEventListener("click",function (){
    window.location.href="/checkout.html"
})