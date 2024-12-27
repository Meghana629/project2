let name=document.getElementById("name")
let email=document.getElementById("email")
let password=document.getElementById("password")
let button=document.getElementById("signup")
let errormessage=document.getElementById("errormessage")
button.addEventListener("click",(e)=>{
    e.preventDefault()
    
    const namevalue=name.value
    const emailvalue=email.value
    const passwordvalue=password.value

    localStorage.setItem("name",namevalue)
    localStorage.setItem("email",emailvalue)
    localStorage.setItem("password",passwordvalue)
    const namepattern=/^[a-zA-z" "]{3,}$/
    const emailpattern=/^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,}$/
    const passwordpattern=/^[a-zA-Z0-9.*][a-zA-Z\d]{8,}$/
    if (!namepattern.test(name.value)){
        errormessage.textContent="please enter atleast 9 charcters of your name"
        return;
    }
    if (!emailpattern.test(email.value)){
        errormessage.textContent="please enter valid email"
        return;
    }
    if (!passwordpattern.test(password.value)){
        errormessage.textContent="please enter atleast 9 characters valid password"
        return
    }
    errormessage.textContent=""
    window.location.href="../loginpage/login.html"

})
