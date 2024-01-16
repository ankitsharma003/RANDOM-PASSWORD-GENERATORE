const passwordBox = document.getElementById("password");
const lengthbox = document.getElementById("length");
const uppercace = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercace = "abcdefghijklmnopqrstuvwxyz";
const number = "1234567890";
const symbol = "!@#$%^&*()_+~`'";
const allchar = uppercace + lowercace + number + symbol;

function getpassword() {
  var length = lengthbox.value;
  if (length >= 4) {
    let password = "";
    password += uppercace[Math.floor(Math.random() * uppercace.length)];
    password += lowercace[Math.floor(Math.random() * lowercace.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];
    while (length > password.length) {
      password += allchar[Math.floor(Math.random() * allchar.length)];
    }
    passwordBox.value = password;
  } else {
    alert("enter length more then 4");
  }
}
function copyps() {
  passwordBox.select();
  document.execCommand("copy");
}
