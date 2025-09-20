let main = document.getElementById("main")
let api = "https://fakestoreapi.com/products";

async function gatData(){
  let res = await fetch(api)
  let data = await res.json()

data.map((el)=>{
    console.log(el)
    let name = document.createElement("h2")
    name.innerText = el.title;
    let price = document.createElement("h3")
    price.innerText = el.price
    let img = document.createElement("img")
    img.src = el.image
    let div = document.createElement("div")

    div.append(img,name.price)

    main.apppend(div)
    
  })
}
