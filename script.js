const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

function showError(input,message){
    const FormControl = input.parentElement;
    FormControl.className = 'form-control error';
    const small = FormControl.querySelector('small');
    small.innerText = message;
}

function showSuccess(input){
    const FormControl = input.parentElement;
    FormControl.className = 'form-control success';
}

function FeildName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function checkFields(inputArr){
    inputArr.forEach(function(input){
        if(input.value.trim() === ''){
            showError(input,`${FeildName(input)} is required`);
        }else{
            showSuccess(input);
        }
    });
}

function validateEmail(input){
    const email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const check = email.test(String(input.value).toLowerCase());
    if(!check){
        showError(input,'Email is not valid');
    }
}

function checkLenght(inputArr){
    inputArr.forEach(function(input){
        if(input.value.length < 6){
            showError(input,'It must have atleast six characters')
        }
    })
}
function passwordsMatch(a,b){
    if(a.value !== b.value){
        showError(b,'Passwords do not match')
    }
}

form.addEventListener('submit',function(e){
    e.preventDefault();
    checkFields([username,email,password,password2]);
    validateEmail(email);
    checkLenght([username,password]);
    passwordsMatch(password,password2);
})