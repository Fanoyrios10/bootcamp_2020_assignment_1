function deleteLocalStorage() {
  localStorage.clear();
  window.alert("Local Data Storage Reset")
  location.reload();
}

function deleteSessionStorage() {
  sessionStorage.clear();
  window.alert("Session Data Storage Reset")
  location.reload();
}