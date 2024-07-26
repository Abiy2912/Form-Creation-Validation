document.getElementById('registration-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting

  // Get form values
  const username = document.getElementById('username').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  const feedback = document.getElementById('form-feedback');

  // Clear previous feedback
  feedback.style.display = 'none';
  feedback.textContent = '';

  // Validate username
  if (username.length < 3) {
      feedback.textContent = 'Username must be at least 3 characters long.';
      feedback.style.display = 'block';
      return;
  }

  // Validate email
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
      feedback.textContent = 'Please enter a valid email address.';
      feedback.style.display = 'block';
      return;
  }

  // Validate password
  if (password.length < 6) {
      feedback.textContent = 'Password must be at least 6 characters long.';
      feedback.style.display = 'block';
      return;
  }

  // If all validations pass
  feedback.textContent = 'Registration successful!';
  feedback.style.color = '#4CAF50'; // Change feedback color to green
  feedback.style.backgroundColor = '#DFF2BF'; // Change background color to light green
  feedback.style.display = 'block';
});
