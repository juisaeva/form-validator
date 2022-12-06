const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

//функция вывода ошибки
function showError(input, message) {
  const formControl = input.parentElement;
  const errorMessage = formControl.querySelector("small");
  formControl.className = "form-control error";
  errorMessage.innerText = message;
}

//зеленая подсветка при успешном вводе данных
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

//проверка валидности почты
function checkEmail(input) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(re.test(input.value.trim( ))) {
        showSuccess(input);
    } else {
        showError(input, 'Почта введена неправильно')
    }
 
}

//функция проверки обязательных полей для ввода
function checkRequired(inputArr) {
    inputArr.forEach(function(input){

        if(input.value.trim() === '') {
            showError(input, 'Обязательное поле для ввода');
        } else {
            showSuccess(input);
        }

    });
}

//функция проверки длины введеных данных
function checkLength(input, min, max) {
    if(input.value.length < min) {
        showError(input, `Не менее ${min} символов`);

    } else if(input.value.length > max) {
        showError(input, `Не более ${max} символов`);

    } else {
        showSuccess(input);
    }
}

//функцияб, проверяющая совпадают ли пароли
function checkPasswordsMatch(input1, input2) {
    if(input1.value !== input2.value) {
        showError(input2, 'Пароли не совпадают');
    }
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  checkRequired([username, email, password, confirmPassword]);
  checkLength(username, 5, 15);
  checkLength(password, 6, 25);
  checkEmail(email);
  checkPasswordsMatch(password, confirmPassword);
});
