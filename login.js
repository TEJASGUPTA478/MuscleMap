function validateForm(event) {
  const emailInput = document.getElementById('email').value;
  const errorMsg = document.getElementById('email-error');

  if (emailInput.indexOf('@') === -1) {
    event.preventDefault();
    errorMsg.style.display = 'block';
    return false;
  }

  errorMsg.style.display = 'none';
  alert("Successfully logged in!");
  return true;
}
