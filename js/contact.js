const form = document.getElementById('formulario');
const formEmail = document.getElementById('formularioEmail');


let emailValido = false;
let emailValidoMsg = false;
const emailMsg = document.getElementById('email');
const campos = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span-required');
const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;

/* --- Adicionando o evento --- */

form.addEventListener('submit', (event) => {
    event.preventDefault();
    validarNome();
    validarSobrenome(); 
    validarEmailForm();
    validarMsg();
})
    
formEmail.addEventListener('submit', (event) => {
    event.preventDefault();
    validarEmail();
})


/* --- Função de mostrar erro Home --- */

function mostraErro(index) {
    campos[index].style.border = '2px solid red';
    spans[index].style.display = 'block';
}

/* --- Função de remover erro Home --- */

function removeErro(index) {
    campos[index].style.border = '';
    spans[index].style.display = 'none';
}

/* --- Condições das validações --- */

function validarNome() {

    if(campos[0].value.length < 3) 
    {
        mostraErro(0);
    } 
    else 
    {
        removeErro(0);
    }
}

function validarSobrenome() {

    if(campos[1].value.length < 3) 
    {
        mostraErro(1);
    } 
    else 
    {
        removeErro(1);
    }
}

function validarEmailForm() {

    if(!emailRegex.test(campos[2].value))
    {
        mostraErro(2);        
    }
    else {
        emailValido = true;
        removeErro(2);
    }
}

function validarMsg() {
    if(campos[3].value == "") 
    {
        mostraErro(3);
    }
    else 
    {
        removeErro(3);
    }
}

function validarEmail() {

    if(!emailRegex.test(campos[4].value))
    {
        mostraErro(4);
    }
    else {
        emailValidoMsg = true;
        removeErro(4);
    }
}


function continuar2() {

    if(emailValidoMsg == true) {
        localStorage.setItem("textoEmailContato", emailMsg.value);
        alert("Email enviado!");
        formEmail.reset();
    } else {
        alert("Email invalido!");
    } 
}

function enviar() {

    if(validarNome && validarSobrenome && emailValido == true && validarMsg) {

    let listaCampos = JSON.parse(localStorage.getItem('listaCampos'))
    
    listaCampos.push(
    {
      nome: nome.value,
      sobrenome: sobrenome.value,
      email: email.value,
      mensagem: msg.value
    }
    )
    localStorage.setItem("listaCampos", JSON.stringify(listaCampos));
    alert("Email enviado!");
    form.reset();
    } else {
        alert("Preencha todos os campos!");
    } 
}

