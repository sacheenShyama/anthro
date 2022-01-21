
import footerOffer from "./footer.js";
const footerPart = document.getElementById("footerPart");
footerPart.innerHTML = footerOffer();

let purapaisa=JSON.parse(localStorage.getItem("purapaisa"))
console.log(purapaisa)


let Total=document.getElementById("Total")
console.log(Total)
Total.innerText=`$${purapaisa}.00`;

let jumpto=document.getElementById("goToCheckAddress").addEventListener("click",function(){

let country=document.getElementById("country").value
let firstName=document.getElementById("firstName").value
let lastName=document.getElementById("lastName").value
let city=document.getElementById("city").value
let zip=document.getElementById("zipcode").value
let phone=document.getElementById("phone").value
let addressArray=[country,firstName,lastName,city,zip,phone]

// console.log(addressArray)
localStorage.setItem("address",JSON.stringify(addressArray))
    window.location.href="/CheckAddress.html"

})

console.log("helloo9")
