let api = "http://www.omdbapi.com/?i=tt3896198&apikey=105fb6bc";
let input = document.querySelector("input")
let search_box = document.getElementById("search_box");



const getData = async()=>{
    let x = input.value;
    let res = await fetch(`${api}&s=${x}`)
    let data = await res.json()
    
    display(data.Search)
}

 function Delay(){
   setTimeout(getData,1000)
 }

function display(data){
  search_box.innerHTML=""
  data.forEach(({Title,Poster,Year})=>{
  

    let title = document.createElement("h4")
    title.innerText=Title
    let year = document.createElement("h5")
    year.innerText=Year
    let img = document.createElement("img")
    img.src=Poster
    let div = document.createElement("div")

    div.append(img,title,year)

    search_box.append(div)
  })
}
 

