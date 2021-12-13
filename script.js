const claimBtn = document.querySelector('.claim-trial-btn');
const firstNameInput = document.querySelector('.first-name');
const lastNameInput = document.querySelector('.last-name');
const emailAddress = document.querySelector('.email-address');
const password = document.querySelector('.password');
const firstNameError = document.getElementById('first-name-error');
const lastNameError = document.getElementById('last-name-error');

claimBtn.addEventListener('click', submitInfo);

function submitInfo(event) {
  event.preventDefault();

  if (firstNameInput.value === '') {
    firstNameError.textContent = `First Name cannot be empty`;
    firstNameError.classList.add('errorMsg');
    firstNameInput.removeAttribute('placeholder');
    firstNameInput.classList.add('emptyInput', 'icon-error');
  } else {
    return null;
  }

  if (lastNameInput.value === '') {
    lastNameError.textContent = `Last Name cannot be empty`;
    lastNameError.classList.add('errorMsg');
    lastNameInput.removeAttribute('placeholder');
    lastNameInput.classList.add('emptyInput', 'icon-error');
  } else {
    return null;
  }
}
