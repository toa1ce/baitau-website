const NAME_REGEXP = /^[а-яА-Я a-zA-Z]+$/; 
 
const nameInput = document.getElementById('name-input'); 
 
nameInput.addEventListener('input', function() { 
  if (check(nameInput.value)) { 
    nameInput.classList.add('valid'); 
  } else { 
    nameInput.classList.remove('valid'); 
  } 
}); 
 
function check(v) { 
  return NAME_REGEXP.test(v) && v.trim().length > 2
} 
 
function checkPhone() { 
  const nameInputField = document.getElementById("name-input"); 
   
  if (check(nameInputField.value)) { 
    nameInputField.classList.add("correct"); 
    nameInputField.classList.remove("incorrect"); 
  } else { 
    nameInputField.classList.add("incorrect"); 
    nameInputField.classList.remove("correct"); 
  } 
}

const phoneInput = document.getElementById('phone-input');
phoneInput.addEventListener('blur', (e) => {
  if (phoneInput.value.trim().length > 8) {
    phoneInput.classList.add('valid');
  } else {
    phoneInput.classList.remove('valid');
  }
})

phoneInput.addEventListener('focus', (e) => {
    phoneInput.classList.remove('valid');
 })

// nameInput.addEventListener('input', function() {
//   if (nameInput.value.trim().length > 2) {
//     nameInput.classList.add('valid');
//   } else {
//     nameInput.classList.remove('valid');
//   }
// });

function checkPhone() {
  const phoneInputField = document.getElementById("phone-input");
  const enteredPhone = phoneInputField.value.trim();
  
  // Check if the entered name is correct or incorrect here.
  // You can use regular expressions or other validation methods to perform this check.
  // For example, you can check if the entered name only contains alphabets and spaces.
  
  const phoneRegex = /^[0-9 + - ]+$/;
  const isPhoneValid = phoneRegex.test(enteredName);
  
  if (isPhoneValid) {
    phoneInputField.classList.add("correct");
    phoneInputField.classList.remove("incorrect");
  } else {
    phoneInputField.classList.add("incorrect");
    phoneInputField.classList.remove("correct");
  }
}
