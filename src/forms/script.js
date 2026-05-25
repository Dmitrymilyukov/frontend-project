const button = document.querySelector("#form-button")
const phone = document.querySelector("#phone")
const email = document.querySelector("#email")
const password = document.querySelector("#password")
const phoneError = document.querySelector("#phone-error")
const emailError = document.querySelector("#email-error")
const passwordError = document.querySelector("#password-error")

function validatePhone () {
    if (phone.value.length > 11) {
        phone.classList.add('invalid')
        phoneError.innerText = 'Номер неправльный, слишком большой'
        return 
    }
    if (phone.value[0] != 7 ) {
        phone.classList.add('invalid')
        phoneError.innerText = 'Номер неправльный'
        return 
    }
    phone.classList.remove('invalid')
    phoneError.innerText = ''
}

button.addEventListener("click", (event) => {
   event.preventDefault()
    validatePhone ()
})