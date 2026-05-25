const button = document.querySelector("#form-button");
const phone = document.querySelector("#phone");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const phoneError = document.querySelector("#phone-error");
const emailError = document.querySelector("#email-error");
const passwordError = document.querySelector("#password-error");
function validatePhone() {
    if (phone.value.length > 11) {
        phone.classList.add('invalid');
        phoneError.innerText = "\u041D\u043E\u043C\u0435\u0440 \u043D\u0435\u043F\u0440\u0430\u0432\u043B\u044C\u043D\u044B\u0439, \u0441\u043B\u0438\u0448\u043A\u043E\u043C \u0431\u043E\u043B\u044C\u0448\u043E\u0439";
        return;
    }
    if (phone.value[0] != 7) {
        phone.classList.add('invalid');
        phoneError.innerText = "\u041D\u043E\u043C\u0435\u0440 \u043D\u0435\u043F\u0440\u0430\u0432\u043B\u044C\u043D\u044B\u0439";
        return;
    }
    phone.classList.remove('invalid');
    phoneError.innerText = '';
}
button.addEventListener("click", (event)=>{
    event.preventDefault();
    validatePhone();
});

//# sourceMappingURL=forms.3651335f.js.map
