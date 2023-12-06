let email=document.getElementById("email");
let Username=document.getElementById("Username");
let password=document.getElementById("password");
let button=document.getElementById("button");


function Button(){
    localStorage.setItem("user", JSON.stringify({email:email.value, Username:Username.value, password:password.value}));
} 


button.addEventListener("click", Button);

