let username=localStorage.getItem("login_data");
let main=document.getElementById("main");
let gain=document.getElementById("gain");
let navbar=document.getElementById("navbar");
let total=document.getElementById("total");
let cart_arr=JSON.parse(localStorage.getItem("cartData"))||[];


cart_arr.forEach(function(el){
    if(!el.currentQunatity){
        el.currentQunatity=1;
    }
})
    



display(cart_arr)

if(username != null){
   navbar.innerHTML=null;

   let name=document.createElement("h4")
   name.innerText=username

   let paybtn = document.createElement("button")
   paybtn.innerText="Phonpay"

  paybtn.addEventListener("click",function(){
  window.location.href="https://www.phonepe.com/"

   })
   let logout=document.createElement("button")
   logout.addEventListener("click",logoutfun)
   logout.innerText="logout"


    navbar.append(name,paybtn,logout)
}



function logoutfun(){
    
    localStorage.removeItem("login_data");
    window.location.href="../html/login.html";
    
}




function display(product){

  main.innerHTML = null
  product.map(function(el,index){
  
  let count = 0;
  let Quantity= el.currentQunatity || 1
  let name=document.createElement("h2")
  name.innerText=el.title;
  let price=document.createElement("h3")
  price.innerText= Math.floor(el.price * Quantity);
  let img=document.createElement("img")
  img.src=el.images[0]





// **********
  let phonepay=document.createElement("h4")
  phonepay.innerText=phonepay

  let check=document.createElement("h4")
  check.addEventListener("click",function(){

  window.location.href="https://www.phonepe.com/";
  })
  check.innerText="check"
// **********






    let removebtn=document.createElement("button")
    removebtn.innerText="Remove";
    removebtn.addEventListener("click",function(){
    removefun(el,index)
 })

    let QunatityDiv=document.createElement("div")
    QunatityDiv.setAttribute("class","qunatityDiv")


    let minusbtn = document.createElement("button")
    minusbtn.innerText = "-";


    let quantityText = document.createElement("span")
    quantityText.innerText = Quantity;


    let plusbtn = document.createElement("button");
    plusbtn.innerText = "+";


    plusbtn.addEventListener("click",function(){
    Quantity++;
    el.currentQunatity = Quantity
    price.innerText= Math.floor(el.price) * Quantity;
    quantityText.innerText = Quantity;
    updateTotal();

    })

    minusbtn.addEventListener("click",function(){
    Quantity--;
    quantityText.innerText = Quantity;
    price.innerText= Math.floor(el.price )* Quantity;
    updateTotal();

    })

    QunatityDiv.append(minusbtn,quantityText,plusbtn)
    let div=document.createElement("div")
    div.append(img,name,price,check,removebtn,QunatityDiv);
    main.append(div);
    
   })
}





updateTotal()

function updateTotal(){
    let newTotal=0;
    cart_arr.forEach(function(el){
    newTotal=newTotal+Math.floor(el.price)*el.currentQunatity
    })

    total.innerText=`Total Amount is ${newTotal}`
}

function removefun(item,i){

    cart_arr.splice(i,1)
    localStorage.setItem("cartData",JSON.stringify(cart_arr));
    display(cart_arr)
    updateTotal();

}