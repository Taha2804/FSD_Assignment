/**
 * Q3: JavaScript Form Validation
 * Demonstrating:
 * 1. JavaScript Validation
 * 2. Regular Expressions (Email & 10-digit Phone)
 * 3. DOM Manipulation (Error badges, Password Visibility toggle)
 * 4. Event Handling (Input, Blur, Submit, Reset)
 * 5. Form Handling (preventDefault, validation aggregation)
 */

// Cache DOM Form Elements
const form = document.getElementById('registration-form');
const fullNameInput = document.getElementById('fullname');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const successBanner = document.getElementById('success-banner');
const btnReset = document.getElementById('btn-reset');

// Password Visibility Toggles
const togglePasswordBtn = document.getElementById('toggle-password');
const toggleConfirmPasswordBtn = document.getElementById('toggle-confirmPassword');

// Regular Expressions
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const PHONE_REGEX = /^\d{10}$/;

/**
 * Sets an error state on a form field
 * @param {HTMLInputElement} inputElement
 * @param {string} message
 */
function setFieldError(inputElement, message) {
  const group = inputElement.closest('.form-group');
  const errorSpan = group.querySelector('.error-msg');

  group.classList.remove('has-success');
  group.classList.add('has-error');
  errorSpan.textContent = message;
}

/**
 * Sets a success state on a form field
 * @param {HTMLInputElement} inputElement
 */
function setFieldSuccess(inputElement) {
  const group = inputElement.closest('.form-group');
  const errorSpan = group.querySelector('.error-msg');

  group.classList.remove('has-error');
  group.classList.add('has-success');
  errorSpan.textContent = '';
}

/**
 * Clears validation states on a form field
 * @param {HTMLInputElement} inputElement
 */
function clearFieldStatus(inputElement) {
  const group = inputElement.closest('.form-group');
  const errorSpan = group.querySelector('.error-msg');

  group.classList.remove('has-error', 'has-success');
  errorSpan.textContent = '';
}

/**
 * Field Validators
 */
function validateFullName() {
  const val = fullNameInput.value.trim();
  if (val === '') {
    setFieldError(fullNameInput, 'Full name is required');
    return false;
  }
  if (val.length < 2) {
    setFieldError(fullNameInput, 'Full name must be at least 2 characters');
    return false;
  }
  setFieldSuccess(fullNameInput);
  return true;
}

function validateEmail() {
  const val = emailInput.value.trim();
  if (val === '') {
    setFieldError(emailInput, 'Email address is required');
    return false;
  }
  if (!EMAIL_REGEX.test(val)) {
    setFieldError(emailInput, 'Please enter a valid email address (e.g. name@domain.com)');
    return false;
  }
  setFieldSuccess(emailInput);
  return true;
}

function validatePhone() {
  const val = phoneInput.value.trim();
  if (val === '') {
    setFieldError(phoneInput, 'Phone number is required');
    return false;
  }
  if (!PHONE_REGEX.test(val)) {
    setFieldError(phoneInput, 'Phone number must be exactly 10 digits');
    return false;
  }
  setFieldSuccess(phoneInput);
  return true;
}

function validatePassword() {
  const val = passwordInput.value;
  if (val === '') {
    setFieldError(passwordInput, 'Password is required');
    return false;
  }
  if (val.length < 6) {
    setFieldError(passwordInput, 'Password must be at least 6 characters long');
    return false;
  }
  setFieldSuccess(passwordInput);

  // If confirm password already has text, re-validate confirm field too
  if (confirmPasswordInput.value.length > 0) {
    validateConfirmPassword();
  }
  return true;
}

function validateConfirmPassword() {
  const passVal = passwordInput.value;
  const confirmVal = confirmPasswordInput.value;

  if (confirmVal === '') {
    setFieldError(confirmPasswordInput, 'Please confirm your password');
    return false;
  }
  if (confirmVal !== passVal) {
    setFieldError(confirmPasswordInput, 'Passwords do not match');
    return false;
  }
  setFieldSuccess(confirmPasswordInput);
  return true;
}

/**
 * Toggle Password Visibility helper
 */
function setupPasswordToggle(button, input) {
  button.addEventListener('click', () => {
    const eyeOpen = button.querySelector('.eye-open');
    const eyeClosed = button.querySelector('.eye-closed');
    const isCurrentlyPassword = input.getAttribute('type') === 'password';

    if (isCurrentlyPassword) {
      input.setAttribute('type', 'text');
      eyeOpen.classList.add('hidden');
      eyeClosed.classList.remove('hidden');
    } else {
      input.setAttribute('type', 'password');
      eyeOpen.classList.remove('hidden');
      eyeClosed.classList.add('hidden');
    }
  });
}

setupPasswordToggle(togglePasswordBtn, passwordInput);
setupPasswordToggle(toggleConfirmPasswordBtn, confirmPasswordInput);

// Real-time blur event validation
fullNameInput.addEventListener('blur', validateFullName);
emailInput.addEventListener('blur', validateEmail);
phoneInput.addEventListener('blur', validatePhone);
passwordInput.addEventListener('blur', validatePassword);
confirmPasswordInput.addEventListener('blur', validateConfirmPassword);

// Clean error state on active typing
[fullNameInput, emailInput, phoneInput, passwordInput, confirmPasswordInput].forEach((input) => {
  input.addEventListener('input', () => {
    const group = input.closest('.form-group');
    if (group.classList.contains('has-error')) {
      // Re-evaluate on typing
      if (input === fullNameInput) validateFullName();
      else if (input === emailInput) validateEmail();
      else if (input === phoneInput) validatePhone();
      else if (input === passwordInput) validatePassword();
      else if (input === confirmPasswordInput) validateConfirmPassword();
    }
  });
});

// Form Submission Handler
form.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent page refresh / server submission

  // Execute all validators
  const isNameValid = validateFullName();
  const isEmailValid = validateEmail();
  const isPhoneValid = validatePhone();
  const isPasswordValid = validatePassword();
  const isConfirmValid = validateConfirmPassword();

  const isFormValid = isNameValid && isEmailValid && isPhoneValid && isPasswordValid && isConfirmValid;

  if (isFormValid) {
    // Show success banner
    successBanner.classList.remove('hidden');
    const successMsg = document.getElementById('success-message');
    successMsg.textContent = `Welcome ${fullNameInput.value.trim()}! Your registration has been validated successfully.`;

    // Scroll to success banner smoothly
    successBanner.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  } else {
    // Hide success banner if any validation fails
    successBanner.classList.add('hidden');

    // Focus on first invalid input
    const firstInvalid = form.querySelector('.form-group.has-error input');
    if (firstInvalid) {
      firstInvalid.focus();
    }
  }
});

// Reset Button Handler
btnReset.addEventListener('click', () => {
  // Clear all validation styles
  [fullNameInput, emailInput, phoneInput, passwordInput, confirmPasswordInput].forEach(clearFieldStatus);
  successBanner.classList.add('hidden');
  fullNameInput.focus();
});
