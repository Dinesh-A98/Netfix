
let form = document.getElementById("form")
let emil = document.getElementById("email")
let password = document.getElementById("password")

form.addEventListener('submit',(e) =>{
 console.log( e.preventDefault())

      
        formvalitation()
         
})

 function formvalitation(){

    let emilid = emil.value.trim()
    let passwordid = password.value.trim() 

    console.log(emilid,passwordid)

    if(emilid ===""){
        setError(emil, "Email is emety 😬 ")
    }
    else{
        setSucess(emil,"👍")
    }

    if(passwordid ===""){
        setError(password , "Passwor is emety 😬")
    }
    else{
        setSucess(password,"👍")
    }

   
 }

 function setError(input,message){
    let inputgroup = input.parentElement;
     let inputvalue = inputgroup.querySelector("#error")

     inputvalue.innerHTML = message
     inputgroup.classList.add("seterror");
     inputgroup.classList.remove("setsucess");

 }

 
 function setSucess(input,message){
    let inputgroup = input.parentElement;
     let inputvalue = inputgroup.querySelector("#error")

     inputvalue.innerHTML = message;
     inputgroup.classList.remove("seterror");
     inputgroup.classList.add("setsucess");
 }

