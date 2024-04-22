const formEmailHome = document.getElementById('formularioEmailHome');
const campo = document.querySelectorAll('.requiredHome');
const span = document.querySelectorAll('.span-required');
const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;

let emailValido = false;
const email = document.getElementById('email');


/* --- Adicionando o evento --- */

formEmailHome.addEventListener('submit', (event) => {
    event.preventDefault();
    
    if(campo[0].value != '') {
        validarEmailHome();
    }
})

/* --- Função de mostrar erro Home --- */

function mostraErro(index) {
    campo[index].style.border = '2px solid red';
    span[index].style.display = 'block';
}

/* --- Função de remover erro Home --- */

function removeErro(index) {
    campo[index].style.border = '';
    span[index].style.display = 'none';
}


/* --- Condição da validação --- */

function validarEmailHome() {

    if(!emailRegex.test(campo[0].value)) {
        mostraErro(0);
    } else {
        emailValido = true;
        removeErro(0); 
    }
}

/* --- Função do onclick --- */

function continuar() {

    if(emailValido == true) {
        localStorage.setItem("enderecoEmail", email.value);
        alert("Email enviado :)");
        
        emailValido = false;
        removeErro(0);
        campo[0].value = '';
    } else {
        alert("Email invalido.");
    } 
}