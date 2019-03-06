function check() {
pw1 = document.getElementById("password").value
pw2 = document.getElementById("confirmPassword").value

if (pw1 != pw2) {
  document.getElementById("password").style.border = "1px solid red"
  document.getElementById("confirmPassword").style.border = "1px solid red"
}else{
  document.getElementById("password").style.border = "1px solid green"
  document.getElementById("confirmPassword").style.border = "1px solid green"
}
}
