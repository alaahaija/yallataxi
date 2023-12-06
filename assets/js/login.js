let password=document.getElementById("password")
let email=document.getElementById("email")
let button=document.getElementById("button")

let userData=JSON.parse(localStorage.getItem("user") )

console.log(userData)
function onChange(){
    if (userData.email===email.value && userData.password===password.value)
        button.href="./order.html" 
}

email.addEventListener("change",onChange );

password.addEventListener("change",onChange );

