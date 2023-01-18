const form = document.querySelector("#form");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const number = document.querySelector("#number");
const passwordCheck = document.querySelector("#password2");
function checkInput() {
  const nameValue = name.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
 const passwordCheckValue = passwordCheck.value.trim();
//  validation for name
  if (nameValue === "") {
    errorMsg(name, "Name cannot be empty");
  } else if (nameValue.length < 3) {
    errorMsg(name, "Atleast three characters");
  } else {
    success(name);
  }
// email validation
if(emailValue === ''){
  errorMsg(email, "Email cannot be empty")
}
else if(!isEmail(emailValue)){
  errorMsg(email, "Email is not valid")
}
else{
  success(email)
}
if(passwordValue === ''){
  errorMsg(password, "Password cannot be empty")
}
else if(passwordValue.length < 8){
  errorMsg(password, "Atleast eight characters")
}
else{
  success(password)
}
if(passwordCheckValue === ''){
  errorMsg(passwordCheck, "Password cannot be empty")
}
else if (passwordCheckValue !== passwordValue){
  errorMsg(passwordCheck, "Password mismatch")
}
else{
  success(passwordCheck)
}
const getSelectedValue = document.querySelector( 'input[name="season"]:checked');   
 if(getSelectedValue == null) {   
         
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
  formControl.className = "form-control success"
}
function isEmail(email) {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInput();
});
