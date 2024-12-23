const loginbutton=document.getElementById("login")
loginbutton.addEventListener("click",()=>{
    let namestorage=localStorage.getItem("name")
    let emailstorage=localStorage.getItem("email")
    let inputusername=document.getElementById("username").value
    let inputuseremail=document.getElementById("useremail").value
    let errormessage=document.getElementById("errormessage")
    const namepattern=/^[a-zA-z]{3,}$/
    const emailpattern=/^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,}$/
    if (!namepattern.test(username.value)){
        errormessage.textContent="please enter valid name"
        return;
    }
    if (!emailpattern.test(useremail.value)){
        errormessage.textContent="please enter valid email"
        return;
    }
    
    if(namestorage==inputusername&&emailstorage==inputuseremail){
        alert("login done successful")
        window.open("../project/project.html")
    }else{
        alert("oops invalid credentials")
    }


})