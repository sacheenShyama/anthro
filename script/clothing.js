// console.log("hello");



let Clothing = document.getElementById("Clothing");

let ecart = JSON.parse(localStorage.getItem("ecartItem")) || [];

function data(image, name, price) {
  (this.Image = image), (this.Name = name), (this.Price = price);
}
let detail = [
  (Data1 = new data(
    "./CloImage/clothing/new (1).webp",
    "seafolly Textured",
    99
  )),
  (Data2 = new data("./CloImage/clothing/new (2).webp", "Maeve button", 67)),
  (Data3 = new data("./CloImage/clothing/new (3).webp", "Maeve seamed", 63)),
  (Data4 = new data(
    "./CloImage/clothing/new (4).webp",
    "Maeve Jacquard Sweater",
    97
  )),
  (Data5 = new data(
    "./CloImage/clothing/new (5).webp",
    "Faithfull Cropped",
    33
  )),
  (Data6 = new data("./CloImage/clothing/new (6).webp", "Pilcro The low", 69)),
  (Data7 = new data("./CloImage/clothing/new (7).webp", "Pleated Pants", 11)),
  (Data8 = new data("./CloImage/clothing/new (8).webp", "Floral Midi", 87)),
  (Data9 = new data("./CloImage/clothing/new (9).webp", "Maeve Colette", 111)),
  (Data10 = new data("./CloImage/clothing/new (10).webp", "lzle", 109)),
  (Data11 = new data("./CloImage/clothing/new (11).webp", "Devyn", 119)),
  (Data12 = new data(
    "./CloImage/clothing/new (12).webp",
    "Maxi Tunic buttondown",
    11
  )),
  (Data13 = new data(
    "./CloImage/clothing/new (13).webp",
    "Portia High Waisted",
    80
  )),
  (Data14 = new data("./CloImage/clothing/new (14).webp", "Carys Mock", 81)),
  (Data15 = new data("./CloImage/clothing/new (15).webp", "Luca Bikini", 76)),
  (Data16 = new data(
    "./CloImage/clothing/new (16).webp",
    "Solid & Striped Cora",
    90
  )),
  (Data17 = new data(
    "./CloImage/clothing/new (17).webp",
    "Shoulder poplin",
    191
  )),
  (Data18 = new data(
    "./CloImage/clothing/new (18).webp",
    "Palms printed",
    151
  )),
  (Data19 = new data("./CloImage/clothing/new (19).webp", "Solid Belted", 51)),
  (Data20 = new data(
    "./CloImage/clothing/new (20).webp",
    "Ladybug Sweater",
    61
  )),
  (Data21 = new data(
    "./CloImage/clothing/new (21).webp",
    "Scotch & bsoda",
    41
  )),
  (Data22 = new data("./CloImage/clothing/new (22).webp", "Puff-sleeved", 31)),
  (Data23 = new data("./CloImage/clothing/new (23).webp", "Kinit midi", 71)),
  (Data24 = new data("./CloImage/clothing/new (24).webp", "Seamed Vest", 90)),
  (Data25 = new data("./CloImage/clothing/new (25).webp", "Blazer", 76)),
  (Data26 = new data("./CloImage/clothing/new (26).webp", "Neck down", 99)),
  (Data27 = new data("./CloImage/clothing/new (27).webp", "poplin midi", 60)),
  (Data28 = new data("./CloImage/clothing/new (28).webp", "Ribbed tee", 43)),
  (Data29 = new data("./CloImage/clothing/new (29).webp", "Picro tavi", 98)),
  (Data30 = new data("./CloImage/clothing/new (30).webp", "Pilcro", 67)),
  (Data31 = new data("./CloImage/clothing/new (31).webp", "Oxford tunic", 49)),
  (Data32 = new data("./CloImage/clothing/new (32).webp", "Colette wide", 88)),
  (Data33 = new data("./CloImage/clothing/new (33).webp", "ribbec med", 59)),
  (Data34 = new data("./CloImage/clothing/new (34).webp", "Barre midi", 120)),
  (Data35 = new data(
    "./CloImage/clothing/new (35).webp",
    "Poplin cropped",
    182
  )),
  (Data36 = new data("./CloImage/clothing/new (36).webp", "The bo", 94)),
  (Data37 = new data(
    "./CloImage/clothing/new (37).webp",
    "Alla mid dress",
    69
  )),
  (Data38 = new data("./CloImage/clothing/new (38).webp", "Sheer femme", 76)),
  (Data39 = new data(
    "./CloImage/clothing/new (39).webp",
    "the colotte ponte",
    80
  )),
  (Data40 = new data(
    "./CloImage/clothing/new (40).webp",
    "Ruffled contrast",
    45
  )),
];
// var selected=document.getElementById("selected").value;

function handle(){  
    var selected=document.getElementById("selected").value;
    console.log(selected)
    if(selected== "high"){
        for (var i = 0; i < detail.length - 1; i++) {
                    for (var j = 0; j < detail.length - i - 1; j++) {
                      if (detail[j].Price < detail[j + 1].Price) {
                        let swap = detail[j];
                        detail[j] = detail[j + 1];
                        detail[j + 1] = swap;
                      }
                    }
                  }
                  console.log(detail);
                  appendData(detail, Clothing);

    }else if(selected=="low"){

        for (var i = 0; i < detail.length - 1; i++) {
            for (var j = 0; j < detail.length - i - 1; j++) {
              if (detail[j].Price > detail[j + 1].Price) {
                let swap = detail[j];
                detail[j] = detail[j + 1];
                detail[j + 1] = swap;
              }
            }
          }
          console.log(detail);
          appendData(detail, Clothing);

    }
    appendData(detail, Clothing);
}


appendData(detail, Clothing);


// let highToLow=document.getElementById("highToLow").addEventListener("click",function(){
//     for (var i = 0; i < detail.length - 1; i++) {
//         for (var j = 0; j < detail.length - i - 1; j++) {
//           if (detail[j].Price < detail[j + 1].Price) {
//             let swap = detail[j];
//             detail[j] = detail[j + 1];
//             detail[j + 1] = swap;
//           }
//         }
//       }
//       console.log(detail);
//       appendData(detail, Clothing);
// })

// handlePriceSort();

function appendData(cd, Clothing) {
    // mainDiv.innerHTML=null;
    Clothing.innerHTML=null;
  cd.forEach((cd) => {
    let mainDiv = document.createElement("div");

    // console.log(cd)
    mainDiv.className = "col-3";

    let ImageDiv = document.createElement("div");
    ImageDiv.className = "imagecontainer";
    ImageDiv.addEventListener("click", function () {
      addtoCart(cd);
    });

    let img = document.createElement("img");
    img.src = cd.Image;
    img.className = "GotoBrief";

    ImageDiv.append(img);

    let pName = document.createElement("p");
    pName.className = "h-6 clothName";
    pName.innerText = cd.Name;
    let pPrice = document.createElement("p");
    pPrice.classList = "h-6 p-0 mt-3 clothPrice";
    pPrice.innerText = ` $ ${cd.Price}.00`;

    mainDiv.append(ImageDiv, pName, pPrice);
    Clothing.append(mainDiv);
  });
}


function addtoCart(cd) {
  console.log(cd);
  ecart.push(cd);
  localStorage.setItem("ecartItem", JSON.stringify(ecart));

  localStorage.setItem("zoominPage", JSON.stringify(cd));
  window.location.href = "./brief.html";
}
