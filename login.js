const loginBtn = document.getElementById("login-button")
loginBtn.addEventListener("click", function (event) {
    event.preventDefault()
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    console.log(email, password)
    if (email === "" || password === "") {
        alert("Please fill all the fields")
    }
    const users = JSON.parse(localStorage.getItem("users")) || []
    const matchedUser = users.find(function(user) {
        return user.email === email && user.password === password
    })
    if (matchedUser) {
        alert("Login Successful")
        window.location.href = "index.html"
    } 
    else {
        alert("Invalid email or password")
    }
    })
