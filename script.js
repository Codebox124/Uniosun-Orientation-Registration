const form = document.querySelector("#form");
const name = document.querySelector("#name");
const regNo = document.querySelector("#reg-number");
const phoneNo = document.querySelector("#phone-number");
const email = document.querySelector("#email");

function checkInput() {
  const nameValue = name.value.trim();
  const emailValue = email.value.trim();
  const regNoValue = regNo.value.trim();
  const phoneNoValue = phoneNo.value.trim();

  //  validation for name
  if (nameValue === "") {
    errorMsg(name, "Name cannot be empty");
  } else if (nameValue.length < 3) {
    errorMsg(name, "Atleast three characters");
  } else {
    success(name);
  }
  // email validation
  if (emailValue === "") {
    errorMsg(email, "Email cannot be empty");
  } else if (!isEmail(emailValue)) {
    errorMsg(email, "Email is not valid");
  } else {
    success(email);
  }
  // validation for RegNo
  if (regNoValue === "") {
    errorMsg(regNo, "Reg No can't be empty");
  } else if (regNoValue.length < 14 || regNoValue.length > 14) {
    errorMsg(regNo, "Not a Valid Registration Number");
  } else {
    success(regNo);
  }
  // validation for phone No
  if (phoneNoValue === "") {
    errorMsg(phoneNo, "Phone Number can't be empty");
  } else if (isNaN(phoneNoValue)) {
    errorMsg(phoneNo, "Not a valid Phone Number");
  } else {
    success(phoneNo);
  }
}
function errorMsg(input, value) {
  const formControl = input.parentElement;
  const message = formControl.querySelector("small");
  message.innerText = value;
  formControl.className = "form-control error";
}
function success(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}
function isEmail(email) {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInput();
});
