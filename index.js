let main = document.getElementById("main")
let filprice = document.querySelector("select")
let input = document.querySelector("input")


let api = "https://dummyjson.com/products";
let realData;

const getData = async()=>{
let res = await fetch(api)
let data = await res.json()
realData = data.products;
display(realData)

}
getData()

const display = (data)=>{
 main.innerHTML = ""
 data.map((el,index)=>{
 let name = document.createElement("h2");
 name.innerText = el.title;
 let p = document.createElement("h3");
 p.innerText = el.price;
 let img = document.createElement("img");
 img.setAttribute("class", "images")
 img.src = el.images[0];
 let div = document.createElement("div");

 div.append(img, name, p);
 main.append(div);

})
}
const filterpr =()=>{

if (filprice.value == "lth"){
     realData.sort((a, b) => {
       return a.price - b.price;
     });
}else if(filprice.value == "htl"){
     realData.sort((a, b) => {
       return b.price - a.price;
     });
}

display(realData)
}

input.addEventListener("input", ()=>{
  let x = event.target.value.toLowerCase()

  const filtered = realData.filter((data)=>{
  return data.title.toLowerCase().includes(x)

     
  })
  display(filtered)
  
  
})

