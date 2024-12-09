const getStartedBtn = document.querySelector('.get-started-btn');

getStartedBtn.addEventListener('click', () => {
  // Redirect to the next screen (e.g., sign-up form)
  window.location.href = 'signup.html';
});
// Assuming you have a backend API to send verification codes and validate them

const resendCodeButton = document.querySelector('.resend-code');

resendCodeButton.addEventListener('click', () => {
  // Send a request to your backend to resend the verification code
  // Display a message to the user indicating that a new code has been sent
});

const verificationForm = document.querySelector('form');

verificationForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const verificationCode = document.getElementById('verification-code').value;

  // Send a request to your backend to validate the verification code
  // If the code is valid, redirect the user to the next step (e.g., dashboard)
  // If the code is invalid, display an error message to the user
});