const checkbox = document.getElementById("checkbox")
const userName = document.getElementById('userName');
const password = document.getElementById('password');
const fullName = document.getElementById('fullName');
const email = document.getElementById('email');
const repeatPassword = document.getElementById('repeatPassword');

const submitButton = document.querySelector("submit")
submit.onclick = validateForm;

const popUpBtn = document.getElementById("popUpBtn")
popUpBtn.onclick = closeModal;

const loginLink = document.getElementById("loginLink");
loginLink.onclick = closeModal

checkbox.addEventListener("change", function() {
  
  if (checkbox.checked) {
    console.log("Соглсен")
  } else {
    console.log("Не согласен")
  }
})

fullName.onkeydown = function noDigits(event) {
  if ("1234567890".indexOf(event.key) != -1)
  event.preventDefault();
}

userName.onkeydown = function noCommas(event) {
  if (".,".indexOf(event.key) != -1)
  event.preventDefault();
}

function validateForm() {
  if (!fullName.value) {
    alert('Введите полное имя');
    return;  }

  if (!userName.value) {
    alert('Введите фамилию');
    return;  }

  if (!email.value) {
    alert('Введите ваш E-mail');
    return;
  }

  if (!password.value) {
    alert('Заполните пароль');
    return;
  }
  if (password.value.length < 8) {
    alert('Пароль должен содержать не менее 8 символов');
    return;
  }

  if (!repeatPassword.value) {
    alert('Повторите пароль')
    return;
  }

  if (password.value !== repeatPassword.value) {
    alert('Пароли не совпадают');
    return;
  }

  if (!checkbox.checked) {
    alert('Выберите чекбокс согласия');
    return;
  }

  document.getElementById('modal').style.display = 'block';
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';

  clearForm()
  removeModal()
  changeText()
  submit.onclick = validateLoginForm
}

function changeText() {
  document.getElementsByClassName('changeText')[0].innerText = "Log in to the system"
  submit.textContent = "Sign In"
}

function clearForm() {
  fullNamevalue = '';
  userName.value = '';
  email.value = '';
  password.value = '';
  repeatPassword.value = '';
  checkbox.checked = false;
}

function removeModal() {
  document.getElementById('fullNameContainer').remove()
  document.getElementById('emailContainer').remove()
  document.getElementById('repeatPasswordContainer').remove()
  document.getElementById('checkboxContainer').remove()
  document.querySelector('.ready').remove()
}

function validateLoginForm() {

  if (!userName.value || !password.value) {
    alert('Заполните все текстовые поля');
    return;
  }

  alert(`Добро пожаловать, ${userName.value}!`);
}

console.log('Изменения в ветке dev-2');
console.log('Сообщение от первого разработчика');