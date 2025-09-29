let form = document.querySelector("form");
form.addEventListener("submit",signup);
let signup_arr = JSON.parse(localStorage.getItem("signup_arr")) || [];

function signup(){
    event.preventDefault();
  let signup_obj = {
  name: document.getElementById("name").value,
  mobile: document.getElementById("Mobile").value, 
  username: document.getElementById("username").value,
  password: document.getElementById("password").value
}
   signup_arr.push(signup_obj);
   console.log(signup_arr);
   

  localStorage.setItem("signup_arr", JSON.stringify(signup_arr));
   alert("User Registered");
   window.location.href="../html/login.html";
}
