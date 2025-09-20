let input = document.querySelector("input")
let img = document.querySelector("img")
let password = 123456;


function Checkfun(){
 let x = input.value;
 let promise = new Promise(function(res,rej){
  if(password==x){
    res("Password Match")
    }else{
    rej("wrong password")
  }
})
  promise.then(function(res){
  img.src = "https://media.tenor.com/UVmpVqlpVhQAAAAM/yess-yes.gif";
})
  .catch(function(err){
  console.log(err)
  img.src = "https://media.tenor.com/vLK4Mq3jiKIAAAAM/cat-no.gif";
 })
}
function Delayfun(){
img.src="https://loading.io/assets/mod/spinner/default/lg.gif"
setTimeout(Checkfun, 2000);
}
