document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('registration-form');
  const feedbackDiv = document.getElementById('form-feedback');

  form.addEventListener('submit', (event) => {
      event.preventDefault();

      const username = document.getElementById('username').value.trim();
      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value.trim();

      let isValid = true;
      const messages = [];

      if (username.length < 3) {
          isValid = false;
          messages.push('Username must be at least 3 characters long.');
      }

      if (!email.includes('@') || !email.includes('.')) {
          isValid = false;
          messages.push('Email must be valid.');
      }

      if (password.length < 8) {
          isValid = false;
          messages.push('Password must be at least 8 characters long.');
      }

      feedbackDiv.style.display = 'block';
      if (isValid) {
          feedbackDiv.textContent = 'Form submitted successfully!';
          feedbackDiv.style.color = "#28a745";
      } else {
          feedbackDiv.innerHTML = messages.join("<br>");
          feedbackDiv.style.color = "#dc3545";
      }
  });
});
















































/*document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
  });

  const feedbackDiv = document.getElementById("form-feedback");
  const username = document.getElementById('username').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  let isValid = true;
  let messages = [];

  if (username.length < 3) {
    isValid = false;
    messages.push("Username must be at least 3 characters long.");
  }
  if (!email.includes("@") || !email.includes(".")) {
    isValid = false;
    messages.push("Please enter a valid email address.");
  }
  if (password.length < 8) {
    isValid = false;
    messages.push("Password must be at least 8 characters long.");
  }

  // Make feedbackDiv visible
  feedbackDiv.style.display = "block";

  if (isValid = true) {
    // Registration successful
    feedbackDiv.textContent = "Registration successful!";
    feedbackDiv.style.color = "#28a745";
  } else {
    // Display error messages
    feedbackDiv.innerHTML = messages.join("<br>");
    feedbackDiv.style.color = "#dc3545";
  }
      
















  });


*/
























    /*
  
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
  });
  */
