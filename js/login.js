const userEmail = "admin";
const userPassword = "admin";
document.querySelector("#login-btn").addEventListener("click", function () {
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  if (email == "" && password == "") {
    alert("please try again");
  } else if (email !== email || userPassword !== password) {
    alert("User Not Match");
  } else if (userEmail === email && userPassword === password) {
    location.href = "../bank.html";
  } else {
    alert("invalide user");
  }
});
