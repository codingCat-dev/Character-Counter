'use strict';

const counter = document.querySelector('.counter');
const counterInput = document.querySelector('.counter-input');
const counterButton = document.querySelector('.btn');

const getInputLength = () => {
  counter.textContent = counterInput.value.length;
};

const cleanInput = () => {
  counterInput.value = '';
  counter.textContent = 0;
};
counterInput.addEventListener('keyup', getInputLength);
counterButton.addEventListener('click', cleanInput);
