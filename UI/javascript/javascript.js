
const pwd = document.getElementById('password');
const eye = document.getElementById('eyeSlash');




const togglePass=()=>{

    eye.classList.toggle('active');

    (pwd =='password')?pwd.type = 'text' : pwd.type = 'password';
}


eye.addEventListener('click',togglePass);
