// get inputs
const form = document.getElementById('form');
const userName = document.getElementById('userName');
const email = document.getElementById('email');
const passWord = document.getElementById('password');
const chPassword = document.getElementById('chPassword');

console.log(email)


form.addEventListener('submit', (ele)=> {
    ele.preventDefault();

    checkInputs()
});

function checkInputs() {
    const userNameValue = userName.value.trim();
    const emailValue = email.value.trim();
    const passWordValue = passWord.value.trim();
    const chPassWordValue = chPassword.value.trim()
    // check user name input
    if (userNameValue === '') {
        setErrorFor(userName, 'user name cannot be blanck');
    }else{
        setSuccessFor(userName)
    }

    // check email input
    if (emailValue === '') {
        setErrorFor(email, 'Email cannot be blanck');
    }else if(!isEmailValid(emailValue)) {
        setErrorFor(email, 'Email is not valid');
    }else{
        setSuccessFor(email)
    }

}

function setErrorFor(input, massage) {
    const control = input.parentElement;
    const small = control.querySelector('small');
    small.innerText = massage;
    control.className = 'control error'
};

function setSuccessFor(input) {
    const control = input.parentElement;
    control.className = 'control success'
}

function isEmailValid(emailV) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(emailV);

}





