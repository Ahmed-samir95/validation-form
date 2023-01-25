// get inputs
const form = document.getElementById('form');
const userName = document.getElementById('userName');
const email = document.getElementById('email');
const passWord = document.getElementById('password');
const chPassword = document.getElementById('chPassword');

console.log(userName)

form.addEventListener('submit', (ele)=>{
    ele.preventDefault();

    checkInputs()
});

function checkInputs() {
    const userNameValue = userName.value.trim();
    const emailValue = email.value.trim();
    const passWordValue = passWord.value.trim();
    const chPassWordValue = chPassword.value.trim()

    if (userNameValue === '') {
        setErrorFor(userName, 'user name cannot be blanck');
    }else{
        setSuccessFor(userName)
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








