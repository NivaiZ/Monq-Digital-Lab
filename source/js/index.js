const button = document.querySelector('#button-submit');
const body = document.querySelector('.page-body__wrapper');
const darkRadio = document.querySelector('#dark-checkbox');
const container = document.querySelector('.container');
const containerSwitch = document.querySelector('.container-switch');
const groupCodeOne = document.getElementById('dropdown-code__part1');
const groupCodeTwo = document.getElementById('dropdown-code__part2');
const groupCodeThree = document.getElementById('dropdown-code__part3');
const darkCheckbox = document.getElementById('dark-checkbox').value;
const inputTitle = document.getElementById('dropdown-title');
const selectedGroupTwo = document.getElementById('dropdown-week').value;
const selectGroupFive = document.getElementById('input-size');
const selectedGroupThree = document.getElementById('dropdown-container').value;
const selectedGroupFour = document.getElementById('dropdown-select').value;
const groupthemeColor = document.getElementsByName('group-theme');

function store() {
  for (const color of groupthemeColor) {
    localStorage.setItem('theme', color.value);
  }
  localStorage.setItem('Input__Company', inputTitle.value);
  localStorage.setItem('Dropdown__Week', selectedGroupTwo);
  localStorage.setItem('Dark__Checkbox', darkCheckbox);
  localStorage.setItem('Dropdown__Container', selectedGroupThree);
  localStorage.setItem('Dropdown__Homepage', selectedGroupFour);
  localStorage.setItem('Input__Size', selectGroupFive.value);
  localStorage.setItem('Code1', groupCodeOne.value);
  localStorage.setItem('Code2', groupCodeTwo.value);
  localStorage.setItem('Code3', groupCodeThree.value);

}

const activeInputTitle = localStorage.getItem('Input__Company');
if (activeInputTitle !== '' || activeInputTitle !== '') {
  inputTitle.value = activeInputTitle;
} else {
  inputTitle.value = '';
}

const activeInputSize = localStorage.getItem('Input__Size');
if (activeInputSize !== '' || activeInputSize !== '') {
  selectGroupFive.value = activeInputSize;
} else {
  selectGroupFive.value = '';
}

const groupInputCodeOne = localStorage.getItem('Code1');
if (groupInputCodeOne !== '' || groupInputCodeOne !== '') {
  groupCodeOne.value = groupInputCodeOne;
} else {
  groupCodeOne.value = '';
}

const groupInputCodeTwo = localStorage.getItem('Code2');
if (groupInputCodeTwo !== '' || groupInputCodeTwo !== '') {
  groupCodeTwo.value = groupInputCodeTwo;
} else {
  groupCodeTwo.value = '';
}

const groupInputCodeThree = localStorage.getItem('Code3');
if (groupInputCodeThree !== '' || groupInputCodeThree !== '') {
  groupCodeThree.value = groupInputCodeThree;
} else {
  groupCodeThree.value = '';
}

function classHandler() {
  if (darkRadio.checked) {
    body.classList.add('page-body__wrapper--switch');
    container.classList.add('container-switch');
    body.classList.remove('page-body__wrapper');
  } else {
    body.classList.remove('page-body__wrapper--switch');
    body.classList.add('page-body__wrapper');
    container.classList.remove('container-switch');
  }
}

button.addEventListener('click', (e) => {
  e.preventDefault();
  classHandler();
  store();
});

