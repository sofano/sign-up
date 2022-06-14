//handle of the other gender

const check = document.querySelector('#other');
const gender = document.querySelector('.precise');
const options = document.querySelectorAll("input[type='radio']");
console.log(check.checked)

const input = document.createElement('input')
input.setAttribute('type', 'text')
input.setAttribute('id','precise')
input.setAttribute('name','gender')

const label = document.createElement('label');
label.setAttribute('for','precise')
label.textContent = 'please precise gender :'

Array.from(options).forEach(node=>node.addEventListener('change' , handleGender));

function handleGender(e){
    if(e.target == check){
        gender.appendChild(label);
        gender.appendChild(input)   
    }else if(gender.childElementCount >1){
        gender.removeChild(label)
        gender.removeChild(input)
    }
} 
// handle of the match password

const password = document.querySelector('#password1');
const pwRef = document.querySelector('#password');
const from = document.querySelector('form');

from.addEventListener('submit', handlePW);

function handlePW(e){
    if(password.value != pwRef.value){
        e.preventDefault();
        alert('password don\'t match !!')
    }

}