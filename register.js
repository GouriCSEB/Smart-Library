function handleRegister(e) {
    e.preventDefault();
    
    const fullname = document.getElementById("fullname").value;
    const email = document.getElementById("email").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
  
    if (password !== confirmPassword) {
      alert("Passwords do not match. Please try again.");
      return;
    }
  
    if (fullname && email && username && password) {
      alert("Registration successful! Redirecting to login page.");
      window.location.href = "login.html";
    } else {
      alert("Please fill in all fields.");
    }
  }
  