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
function isValidEmail(email) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(email).toLowerCase());
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


form.addEventListener("submit", function (e) {
  e.preventDefault();

  checkRequired([username, email, password, confirmPassword]);
});
