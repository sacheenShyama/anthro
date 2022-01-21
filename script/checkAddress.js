
import footerOffer from "./footer.js";
const footerPart = document.getElementById("footerPart");
footerPart.innerHTML = footerOffer();


let purapaisa=JSON.parse(localStorage.getItem("purapaisa"))
console.log(purapaisa)


let Total=document.getElementById("Total")
console.log(Total)
Total.innerText=`$${purapaisa}.00`;

console.log("hello9")

let coreAddress=JSON.parse(localStorage.getItem("address"))
console.log(coreAddress)

let country=document.getElementById("country")
country.innerText=coreAddress[0]

let firstName=document.getElementById("firstName")
firstName.innerText=coreAddress[1]
let lastName=document.getElementById("lastName")
lastName.innerText=coreAddress[2]

let addressmain=document.getElementById("addressmain")
addressmain.innerText=coreAddress[3]

let zip=document.getElementById("zip")
zip.innerText=coreAddress[4]

let phone=document.getElementById("phone")
phone.innerText=coreAddress[5]

let goToCheckAddress=document.getElementById("goToCheckAddress").addEventListener("click",function(){

alert("thanky for purchase")
window.location.href="/home.html"

})