const nameInput = document.getElementById("name")
const emailInput = document.getElementById("email")
const passwordInput = document.getElementById("password")

const nameError = document.getElementById("nameError")
const emailError = document.getElementById("emailError")
const passwordError = document.getElementById("passwordError")

const submitBtn = document.getElementById("submitBtn")

function validateName(){

if(nameInput.value.trim()===""){
nameError.textContent="Name cannot be empty"
return false
}

nameError.textContent=""
return true
}

function validateEmail(){

const pattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/

if(!pattern.test(emailInput.value)){
emailError.textContent="Enter a valid email"
return false
}

emailError.textContent=""
return true
}

function validatePassword(){

if(passwordInput.value.length<6){
passwordError.textContent="Password must be at least 6 characters"
return false
}

passwordError.textContent=""
return true
}

function checkForm(){

const nameValid=validateName()
const emailValid=validateEmail()
const passwordValid=validatePassword()

submitBtn.disabled=!(nameValid && emailValid && passwordValid)

}

nameInput.addEventListener("input",checkForm)
emailInput.addEventListener("input",checkForm)
passwordInput.addEventListener("input",checkForm)

document.getElementById("form").addEventListener("submit",function(e){

e.preventDefault()

alert("Account created successfully!")

})