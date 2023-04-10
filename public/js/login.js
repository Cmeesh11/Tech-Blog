// Retreiving values
const login = document.querySelector("#login-button").value.trim();
const username = document.querySelector("#username").value.trim();
const password = document.querySelector("#password").value.trim();

const loginHandler = async (event) => {
  event.preventDefault();

  if (email && password) {
    // Attempt login
    const response = await fetch("/user/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    // If response is okay, redirect to dashboard. If not, alert user
    if (response.ok) {
      document.location.replace("/user/dashboard");
    } else {
      alert(response.statusText);
    }
  }
};

login.addEventListener("submit", loginHandler);
