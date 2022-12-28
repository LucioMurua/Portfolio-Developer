const nameField = document.getElementById("name")
const companyField = document.querySelector("[name=company]")
const emailField = document.querySelector("[name=email]")
const messageField = document.getElementById("message")
const form = document.getElementById("form")

const validateEmptyField = (e) => {
    const field = e.target
    const fieldValue = e.target.value
    if (fieldValue.length === 0) {
        field.style.backgroundColor = "rgb(243, 68, 68)"
    }else{
        field.style.backgroundColor = "rgb(33, 72, 131)"
    }
}

nameField.addEventListener("blur", validateEmptyField)
emailField.addEventListener("blur", validateEmptyField)
companyField.addEventListener("blur", validateEmptyField)
messageField.addEventListener("blur", validateEmptyField)

form.addEventListener('submit', (e)=>{
    if (nameField.value.length === 0) {
        nameField.style.backgroundColor = "rgb(243, 68, 68)"
        e.preventDefault()
    } else {
        nameField.style.backgroundColor = "rgb(33, 72, 131)"
    }
    if (emailField.value.length === 0) {
        emailField.style.backgroundColor = "rgb(243, 68, 68)"
        e.preventDefault()
    } else {
        emailField.style.backgroundColor = "rgb(33, 72, 131)"
    }
    if (companyField.value.length === 0) {
        companyField.style.backgroundColor = "rgb(243, 68, 68)"
        e.preventDefault()
    } else {
        companyField.style.backgroundColor = "rgb(33, 72, 131)"
    }
    if (messageField.value.length === 0) {
        messageField.style.backgroundColor = "rgb(243, 68, 68)"
        e.preventDefault()
    } else {
        messageField.style.backgroundColor = "rgb(33, 72, 131)"
    }
})

