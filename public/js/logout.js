const logout = document.querySelector('#logout');
if (logout) {
logout.addEventListener('click', async (event) => {
  event.preventDefault();
  const response = await fetch('/user/logout', {
    method: 'POST',
    headers: { "Content-Type": "application/json" }
  })

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert(response.statusText)
  }
});
}