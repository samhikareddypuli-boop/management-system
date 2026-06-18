const regBtn = document.getElementById("reg-button")
//console.log(regBtn)
regBtn.addEventListener("click", function(){
    event.preventDefault()
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    const rePassword = document.getElementById("re-password").value
    console.log(name, email, password, rePassword)
    if(name==="" || email==="" || password==="" || rePassword===""){
        alert("Please fill all the fields")
    }
    if(password!==rePassword){
        alert("Password Mismatch")
        return
    }
    const user = {
        name: name,
        email: email,
        password: password
    }
    let users = JSON.parse(localStorage.getItem("users")) || []
    users.push(user)
    console.log(users)
    localStorage.setItem("users", JSON.stringify(users))
    alert("Registration Successful")
    window.location.href = "login.html"
})
