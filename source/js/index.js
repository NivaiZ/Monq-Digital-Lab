const body = document.querySelector('.page-body__wrapper');
const darkRadio = document.getElementById('dark-checkbox');
const lightRadio = document.getElementById('light-checkbox');
const container = document.querySelector('.container');
const pageBody = document.querySelector('.page-body');

function submitButtonHandler(event) {

  event.preventDefault();

  const form = document.getElementById('dropdown-form');

  const formData = new FormData(form);

  for (const field of formData) {
    const [key, value] = field;

    if (value) localStorage.setItem(key, value)

    else if (localStorage.getItem(key) !== undefined)

      localStorage.removeItem(key);
  }

  if (darkRadio.checked) {
    body.classList.add('page-body__wrapper--switch');
    container.classList.add('container-switch');
    body.classList.remove('page-body__wrapper');
    localStorage.setItem('dark-mode', true);

  } else if (lightRadio.checked) {
    body.classList.remove('page-body__wrapper--switch');
    body.classList.add('page-body__wrapper');
    container.classList.remove('container-switch');
    localStorage.setItem('dark-mode', false);
  }
  const currentTheme = localStorage.getItem('dark-mode');
  if (currentTheme === 'true') {
    pageBody.classList.add('dark-theme');
  } else if (currentTheme === 'false') {
    pageBody.classList.add('light-theme');
    pageBody.classList.remove('dark-theme');
  }
}

function pageOpeningHandler() {

  const form = document.getElementById('dropdown-form');

  const textInputs = form.querySelectorAll('input');

  for (const textInput of textInputs) {

    const textInputName = textInput.name;

    if (!textInputName) continue

    const savedValue = localStorage.getItem(textInputName);

    if (!savedValue) continue

    textInput.value = savedValue;
  }
  const currentTheme = localStorage.getItem('dark-mode');
  if (currentTheme) pageBody.classList.add('dark-theme');

}

const submitButton = document.querySelector('.block-dropdown__button--submit');

submitButton.addEventListener('click', submitButtonHandler, SaveSelectValue, LoadSelectValue);

document.addEventListener('DOMContentLoaded', pageOpeningHandler);

function SaveSelectValue(el) {
  localStorage.setItem(el.name, el.value);
}
function LoadSelectValue(el) {
  return localStorage.getItem(el.name);
}

let selectCheckWeek = document.querySelector("[name='week']");
selectCheckWeek.value = LoadSelectValue(selectCheckWeek);

let selectCheckContainer = document.querySelector("[name='container']");
selectCheckContainer.value = LoadSelectValue(selectCheckContainer);

let selectCheckHomepage = document.querySelector("[name='homepage']");
selectCheckHomepage.value = LoadSelectValue(selectCheckHomepage);
