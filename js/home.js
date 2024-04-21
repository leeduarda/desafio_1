const formEmailHome = document.getElementById('formularioEmailHome');
const campo = document.querySelectorAll('.requiredHome');
const span = document.querySelectorAll('.span-required');
const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;

let emailValor = document.getElementById('email').value;

let emailValido = false;
const email = document.getElementById('email');



/* --- Adicionando o evento --- */

formEmailHome.addEventListener('submit', (event) => {
    event.preventDefault();
    validarEmailHome();
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


/* --- Condições das validações --- */

function validarEmailHome() {

    if(!emailRegex.test(campo[0].value)) {
        mostraErro(0);
    } else {
        emailValido = true;
        removeErro(0); 
    }
}


function continuar() {

    if(emailValido == true) {
        localStorage.setItem("textoEmail", email.value);
        alert("Email enviado!");
        formEmailHome.reset();
    } else {
        alert("Email invalido!");
    } 
}


// function continuar() {
//     if(validarEmailHome == "") {
//         let textoEmail = JSON.parse(localStorage.getItem('textoEmail') || '[]')

//     textoEmail.push(
//         {
//             email: email.value,
//         }
//     )

//     localStorage.setItem('textoEmail', JSON.stringify(textoEmail))
//     }
    
// }