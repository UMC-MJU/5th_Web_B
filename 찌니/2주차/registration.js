const nameInput = document.getElementById('name-input');
const nameError = document.getElementById('name-error');

nameInput.addEventListener('focus', function () {
  const nameValue = nameInput.value.trim();

  if (nameValue === '') {
    nameError.textContent = '필수 입력 항목입니다';
    nameError.style.color = 'red';
  } else {
    nameError.textContent = '';
  }
});

nameInput.addEventListener('blur', function () {
  nameError.textContent = '';
});

const nicknameInput = document.getElementById('nickname-input');
const nicknameError = document.getElementById('nickname-error');

document.getElementById('signup-form').addEventListener('input', function () {
  const nicknameValue = nicknameInput.value.trim();

  if (nicknameValue.length < 2 || nicknameValue.length > 5) {
    nicknameError.textContent = '닉네임은 2자에서 5자 사이여야 합니다';
    nicknameError.style.color = 'red';
  } else {
    nicknameError.textContent = '';
  }
});

nicknameInput.addEventListener('blur', function () {
  nicknameError.textContent = '';
});

document.addEventListener('DOMContentLoaded', function () {
  const passwordInput = document.getElementById('password-input');
  const passwordError = document.getElementById('password-error');
  const checkInput = document.getElementById('check-input');
  const checkError = document.getElementById('check-error');

  function validatePassword() {
    const passwordValue = passwordInput.value;
    const checkValue = checkInput.value;

    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const digitRegex = /[0-9]/;
    const specialCharRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/;

    if (
      !uppercaseRegex.test(passwordValue) ||
      !lowercaseRegex.test(passwordValue) ||
      !digitRegex.test(passwordValue) ||
      !specialCharRegex.test(passwordValue)
    ) {
      passwordError.textContent =
        '비밀번호는 최소한 하나의 대문자, 소문자, 숫자, 특수 문자를 포함해야 합니다';
      passwordError.style.color = 'red';
    } else {
      passwordError.textContent = '';
    }

    if (passwordValue !== checkValue) {
      checkError.textContent = '비밀번호가 일치하지 않습니다';
      checkError.style.color = 'red';
    } else {
      checkError.textContent = '';
    }
  }

  document
    .getElementById('signup-form')
    .addEventListener('input', validatePassword);

  passwordInput.addEventListener('blur', function () {
    passwordError.textContent = '';
  });

  checkInput.addEventListener('blur', function () {
    checkError.textContent = '';
  });
});

const Button = document.getElementById('submit-button');

function checkFormValidity() {
  const nameValue = nameInput.value.trim();
  const nicknameValue = nicknameInput.value.trim();
  const emailValue = emailInput.value.trim();
  const passwordValue = passwordInput.value;
  const checkValue = checkInput.value;

  const isNameValid = nameValue !== '';
  const isNicknameValid =
    nicknameValue.length >= 2 && nicknameValue.length <= 5;
  const isEmailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(
    emailValue
  );
  const isPasswordValid =
    /[A-Z]/.test(passwordValue) &&
    /[a-z]/.test(passwordValue) &&
    /[0-9]/.test(passwordValue) &&
    /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(passwordValue);
  const doPasswordsMatch = passwordValue === checkValue;

  if (
    isNameValid &&
    isNicknameValid &&
    isEmailValid &&
    isPasswordValid &&
    doPasswordsMatch
  ) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}

const submitButton = document.getElementById('submit-button');
const successModal = document.getElementById('success-modal');
const closeModalButton = document.getElementById('close-modal');

let isModalOpen = false;

submitButton.addEventListener('click', function () {
  openSuccessModal();
});

function openSuccessModal() {
  successModal.style.display = 'block';
  isModalOpen = true;
}

closeModalButton.addEventListener('click', function () {
  closeSuccessModal();
});

function closeSuccessModal() {
  successModal.style.display = 'none';
  isModalOpen = false;
}

window.addEventListener('beforeunload', function (e) {
  if (isModalOpen) {
    e.preventDefault();
    e.returnValue = '';
  }
});
