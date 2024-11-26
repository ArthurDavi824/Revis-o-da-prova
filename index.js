/* Getting input elements */
const firstName = document.getElementById("first-name")
const lastName = document.getElementById("last-name")
const emailAddress = document.getElementById("email-address")
const password = document.getElementById("password")

/* Getting label elements */
const firstNameLabel = document.getElementById("first-name-label")
const lastNameLabel = document.getElementById("last-name-label")
const emailAddressLabel = document.getElementById("email-address-label")
const passwordLabel = document.getElementById("password-label")

/* Assigning name and password format */
let nameFormat = /^[a-zA-Z\s]+$/
let emailFormat = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
let passwordFormat = /^[A-Za-z]\w{7,14}$/

/* Checking Inputs based on blur event listener */
function blurFirstName () {
    if (!firstName.value) {
        firstNameLabel.innerHTML = "First Name cannot be empty"
    }
    else{
        if (nameFormat.test(firstName.value)) {
            firstNameLabel.innerHTML = ""
        }
        else{
            firstNameLabel.innerHTML = "First Name is not correct"
        }
    }
}

function blurLastName () {
    if (!lastName.value) {
        lastNameLabel.innerHTML = "Last Name cannot be empty"
    }
    else{
        if (nameFormat.test(lastName.value)) {
            lastNameLabel.innerHTML = ""
        }
        else{
            lastNameLabel.innerHTML = "Last Name is not correct"
        }
    }
}

function blurEmailAddress () {
    if (!emailAddress.value) {
        emailAddressLabel.innerHTML = "Email Address cannot be empty"
    }
    else{
        if (emailFormat.test(emailAddress.value)) {
            emailAddressLabel.innerHTML = ""
        }
        else{
            emailAddressLabel.innerHTML = "Email Address is not correct"
        }
    }
}

function blurPassword () {
    if (!password.value) {
        passwordLabel.innerHTML = "Password cannot be empty"
    }
    else{
        if (passwordFormat.test(password.value)) {
            passwordLabel.innerHTML = ""
        }
        else{
            passwordLabel.innerHTML = "Password is not correct"
        }
    }
}

/* Checking submit response */
function checkFirstName() {
    if (!firstName.value) {
        firstNameLabel.innerHTML = "First Name cannot be empty"
    }
    else{
        if (nameFormat.test(firstName.value)) {
            firstNameLabel.innerHTML = ""
        }
        else{
            firstNameLabel.innerHTML = "First Name is not correct"
        }
    }
}

function checkLastName() {
    if (!lastName.value) {
        lastNameLabel.innerHTML = "Last Name cannot be empty"
    }
    else{
        if (nameFormat.test(lastName.value)) {
            lastNameLabel.innerHTML = ""
        }
        else{
            lastNameLabel.innerHTML = "Last Name is not correct"
        }
    }
}

function checkEmailAddress() {
    if (!emailAddress.value) {
        emailAddressLabel.innerHTML = "Email Address cannot be empty"
    }
    else{
        if (emailFormat.test(emailAddress.value)) {
            emailAddressLabel.innerHTML = ""
        }
        else{
            emailAddressLabel.innerHTML = "Email Address is not correct"
        }
    }
}

function checkPassword() {
    if (!password.value) {
        passwordLabel.innerHTML = "Password cannot be empty"
    }
    else{
        if (passwordFormat.test(password.value)) {
            passwordLabel.innerHTML = ""
        }
        else{
            passwordLabel.innerHTML = "Password is not correct"
        }
    }
}

document.getElementById("form").addEventListener("submit", event => {
    event.preventDefault()

    checkFirstName()
    checkLastName()
    checkEmailAddress()
    checkPassword()
})


