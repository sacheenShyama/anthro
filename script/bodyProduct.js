
function appendData(data, location) {
    data.forEach((el) => {
      let div = document.createElement("div");
      let p = document.createElement("p");
      let img = document.createElement("img");
      img.src = el.image;
      p.innerText = el.title;
      div.append(img, p);
      location.append(div);
    });
  }
  
  export { getData, appendData };
  