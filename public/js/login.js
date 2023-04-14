// Retreiving values
const loginForm = document.querySelector("#login-form");
const signupForm = document.querySelector("#signup-form");

const loginHandler = async (event) => {
  event.preventDefault();
  
  const username = document.querySelector("#username").value.trim();
  const password = document.querySelector("#password").value.trim();
  
  if (username && password) {
    // Attempt login
    const response = await fetch("/user/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });

    // If response is okay, redirect to dashboard. If not, alert user
    if (response.ok) {
      document.location.replace("/user/dashboard");
    } else {
      alert("User does not exist");
      document.location.replace("/notExist");
    }
  } else {
    document.location.replace('/emptyLogin');
  }
};

const signupHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector("#username").value.trim();
  const password = document.querySelector("#password").value.trim();

  if (username && password) {
    // Creating user account
    const response = await fetch("/user/signup", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      document.location.replace("/user/dashboard");
    } else {
      alert("Failed to create user");
      document.location.replace("/emptySignup");
    }
  } else {
    document.location.replace('/emptySignup');
  }
};

if (loginForm !== null) {
  loginForm.addEventListener("submit", loginHandler);
}
if (signupForm !== null) {
  signupForm.addEventListener("submit", signupHandler);
}
