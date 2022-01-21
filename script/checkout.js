let ecartItem=JSON.parse(localStorage.getItem("ecartItem")) ||[]
console.log(ecartItem)

let Total=document.getElementById("Total")

let appendMain=document.getElementById("appendMain")

let total=0;
function buildItemCart(eI){

    eI.map((eI,i)=>{
 total+=eI.Price;

        let mainRow=document.createElement("div")
        mainRow.className="row mt-5 tin"
        appendMain.append(mainRow)
        
        let ItemDetail=document.createElement("div")
        ItemDetail.className="col-8 tin"
        
        
        let puraItem=document.createElement("div")
        puraItem.className="col tin"
        puraItem.innerHTML=`
        <select class="form-select" aria-label="Default select example">
  <option selected>1</option>
  <option value="1">2</option>
  <option value="2">3</option>
  <option value="3">4</option>
  <option value="3">5</option>
  <option value="3">6</option>
  <option value="3">7</option>
  <option value="3">8</option>
</select>
        `
        
        let akelaPrice=document.createElement("div")
        akelaPrice.className="col tin"
        akelaPrice.innerText=` $${eI.Price}.00`
        
        mainRow.append(ItemDetail,puraItem,akelaPrice)
        
        let photoRow=document.createElement("div")
        photoRow.className="row tin"
        ItemDetail.append(photoRow)
        
        let chotaPhoto=document.createElement("div")
        chotaPhoto.className="col-4 tin"
        
        let chotaPhotoDetail=document.createElement("div")
        chotaPhotoDetail.className="col tin"
        chotaPhotoDetail.innerHTML=`
        
        <p class="lead">${eI.Name}</p>
        <p class="h5" >Style: <span>#52354008374</span> </p>
        <p>Color:Natural</p>
        <p>Fit plus</p>`
        let removeButton=document.createElement("p");
        removeButton.className="text-end text-primary"
        removeButton.innerText=" | Remove  |";


        chotaPhotoDetail.append(removeButton)

removeButton.addEventListener("click",()=>{
    // console.log(eI)
    removeFromCart(eI,i)
})
        photoRow.append(chotaPhoto,chotaPhotoDetail)
        let img=document.createElement("img")
        img.src=eI.Image;
        
        chotaPhoto.append(img)
    });
    console.log(total)
    Total.innerText=`$${total}.00`

}

function removeFromCart(eI,i){
console.log(eI)
console.log(i)
ecartItem.splice(i,1)

}
buildItemCart(ecartItem)

// const remove=document.getElementById("remove").addEventListener("click",()=>{
//     console.log("hello")
// })

// console.log(remove)

function addresspage(){
    localStorage.setItem("purapaisa",JSON.stringify(total))
    window.location.href="/Address.html"
}