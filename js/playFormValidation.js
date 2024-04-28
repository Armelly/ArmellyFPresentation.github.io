const $$ = (id) => document.querySelector(id);

let form = $$(`#introForm`);
let fName = $$(`#fName`);
let fNameError = $$(`#fNameError`);
let lName = $$(`#lName`);
let lNameError = $$(`#lNameError`);
let username = $$(`#username`);
let usernameError = $$(`#usernameError`);
let phoneNumb = $$(`#phoneNumb`);
let phoneNError = $$(`#phoneNError`);
let city = $$(`#city`);
let cityError = $$(`#cityError`);
let email = $$(`#email`);
let emailError = $$(`#emailError`);
let clearB = $$(`#clear`);

function checkFName() {
  const reg = /^[\w `-]* *[\w]$/;
  const valid = reg.test(fName.value) && fName.value.length <= 20;

  fNameError.textContent = valid
    ? ``
    : `*Invalid First Name Format. must start/end with a letter, maximum 20 characters long`;
  return valid;
}

function checkLName() {
  const reg = /^[\w'-]* *[\w]$/;
  const valid = reg.test(lName.value) && lName.value.length <= 30;
  lNameError.textContent = valid
    ? ``
    : `*Invalid Last Name Format. must start/end with a letter, maximum 30 characters long`;
  return valid;
}

function checkUsername() {
  const reg = /^[A-Z][a-z]{3}[0-5]$/;
  const valid = reg.test(username.value);
  usernameError.textContent = valid
    ? ``
    : `*Username invalid format. Must start with 1 uppercase letter, 3 Lowercase letters, 1 number between 0-5 inclusively`;
  return valid;
}

function checkPN() {
  const reg = /^(\d{3}) \d{3}-\d{4}$/;
  const valid = reg.test(phoneNumb.value);
  phoneNError.textContent = valid
    ? ``
    : `Phone number invalid format. Valid ex.(123)-456-7899`;
  return valid;
}

function checkCity() {
  const reg = /^[A-Za-z]{1,42}$/;
  const valid = reg.test(city.value);
  cityError.textContent = valid ? `` : `Invalid format.`;
  return valid;
}

function checkEmail() {
  const reg = /^[\w\d.-_]+@[\w\d_]+\.(ca|org)$/;
  const valid = reg.test(email.value);
  emailError.textContent = valid
    ? ``
    : "Invalid email format. Ex. namevalue@domain.[ca or org] ";
  return valid;
}
clearB.onclick = clearResult;

function clearResult() {
  fName.value = ``;
  lName.value = ``;
  username.value = ``;
  phoneNumb.value = ` `;
  email.value = ``;
}

form.onsubmit = checkForm;

function checkForm() {
  let isValid = true;
  if (!checkFName()) isValid = false;
  if (!checkLName()) isValid = false;
  if (!checkUsername()) isValid = false;
  if (!checkPN()) isValid = false;
  if (!checkCity()) isValid = false;
  if (!checkEmail()) isValid = false;

  if (isValid) {
    localStorage.setItem("firstName", fName.value);
    localStorage.setItem("lastName", lName.value);
    localStorage.setItem("username", username.value);
    localStorage.setItem("phoneNumber", phoneNumb.value);
    localStorage.setItem("city", city.value);
    localStorage.setItem("email", email.value);
  } else return isValid;
}

fName.addEventListener("blur", checkFName);
lName.addEventListener("blur", checkLName);
username.addEventListener("blur", checkUsername);
phoneNumb.addEvenListener("blur", checkPN);
city.addEvenListener("blur", checkCity);
email.addEventListener("blur", checkEmail);
