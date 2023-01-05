const formButton = document.querySelector('.form_button');
function validate() {
  const text = document.getElementById("email").value;
  const validator = /^[a-z]+\@[^\s]+\.[^\s]+$/g;
  document.forms[0].onsubmit = function email(e) {
    if (!(validator.test(text))) {
      document.getElementById("error-message").innerHTML = "Please use lowercase to enter valid email address!";
      document.getElementById("error-message").style.visibility = "";
      document.getElementById("error-message").style.color = "white";
      document.getElementById("error-message").style.background = "red";
      document.getElementById("error-message").style.textAlign = "center";
      e.preventDefault();
    }
  };
}
formButton.addEventListener("click", () => {
  validate();
});
