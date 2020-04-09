const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email'); 
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//show input error message
function showError(input, message){
  //inputの親要素form-control
  const formControl = input.parentElement;
  formControl.className = 'form-control error'
  const small = formControl.querySelector('small');
  small.innerText = message;
  //messageに'username is required がパスされる
}

//show suceess outline
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

//Check email is valid 
function isValidEmail(email){
  //stackoverflow email validation copied
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


//Check required fields
function checkRequired(inputArr){
  inputArr.forEach(function(input){
    if(input.value.trim() === ''){
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}


//Check input length


//Get field name
function getFieldName(input){
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);

}
//Event listeners
form.addEventListener('submit', function(e){
  e.preventDefault();

  checkRequired([username, email, password, password2]);

  checkLength(username, 3, 15);
  checkLength(password, 6, 25);
});







//Event listenres
// form.addEventListener('submit', function(e){
//   e.preventDefault();
  
//   if(username.value === ''){
//     showError(username, 'Username is required.');
//   }else {
//     showSuccess(username);
//   }

//   if(email.value === ''){
//     showError(email, 'Email is required');
//   } else if(!isValidEmail(email.value)){
//     showError(email, 'Email is not valid');
//   } else {
//     showSuccess(email);
//   }

//   if(password.value === ''){
//     showError(password, 'Password is required');
//   } else {
//     showSuccess(password);
//   }

//   if(password2.value === ''){
//     showError(password2, 'Password 2 is required');
//   } else {
//     showSuccess(password2);
//   }

// });



