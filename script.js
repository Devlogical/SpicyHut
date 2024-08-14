const form =document.querySelector('#form');
const fname=document.querySelector('#fname');
const lname =document.querySelector('#lname');
const email =document.querySelector('#email');
const password =document.querySelector('#password');
const address =document.querySelector('#address');
const gender =document.querySelector('#gender');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    validateinput();
})
function validateinput(){
    const usernameVal=username.value.trim();
    const emailVal=email.value.trim();
    const passwordVal=password.value.trim();
    const addressVal=address.value.trim();

    if(usernameVal===''){
        setError(username,'username is required')
    }
    else{
        setsucess(username);
    }
    if(emailVal===''){
        setError(email,'email is required');
    }else{
        (!validateEmail(emailVal));
    }
}

function setError(element,message){
 const inputgroup=element.parentElement;
 const errorElement=inputgroup.querySelector('.error');
 errorElement.innertext=message;
 inputgroup.classList.add('error');
}
