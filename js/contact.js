const form = document.getElementById('formulario');
const formEmail = document.getElementById('formularioEmail');


let emailValido = false;
let emailValidoMsg = false;

let nomeValido = false;
let sobrenomeValido = false;
let msgValido = false;

const emailMsg = document.getElementById('email');
const emailForm = document.querySelector('.campo_email')
const campos = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span-required');
const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;
const nomeSobrenomeRegex = /^[a-zA-Z\s]+$/;
;

/* --- Adicionando o evento --- */

form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    if(campos[0].value != '') {
        validarNome();
    }

    if(campos[1].value != '') {
        validarSobrenome(); 
    }

    if(campos[2].value != '') {
        validarEmailForm(); 
    }

    if(campos[3].value != '') {
        validarMsg(); 
    }
    
})

/* --- Adicionando o evento --- */
    
formEmail.addEventListener('submit', (event) => {
    event.preventDefault();
    if(campos[4].value != '') {
        validarEmail();
    }
})


/* --- Função de mostrar erro --- */

function mostraErro(index) {
    campos[index].style.border = '2px solid red';
    spans[index].style.display = 'block';
}

/* --- Função de remover erro --- */

function removeErro(index) {
    campos[index].style.border = '';
    spans[index].style.display = 'none';
}

/* --- Condições das validações --- */

function validarNome() {

    if(!nomeSobrenomeRegex.test(campos[0].value) || campos[0].value.length < 3)
    {
        mostraErro(0);        
    }
    else {
        nomeValido = true;
        removeErro(0);
    }
}

function validarSobrenome() {

    if(!nomeSobrenomeRegex.test(campos[1].value) || campos[1].value.length < 3)
    {
        mostraErro(1);        
    }
    else 
    {
        sobrenomeValido = true
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
    if(campos[3].value.length < 10) 
    {
        mostraErro(3);
    }
    else 
    {
        msgValido = true;
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

/* --- Funções do onclick --- */

function continuar2() {

    if(emailValidoMsg == true) {
        localStorage.setItem("enderecoEmailContato", emailMsg.value);
        alert("Email enviado :)");
        
        emailValidoMsg = false;
        removeErro(4);
        campos[4].value = '';
    } else {
        alert("Email invalido.");
    } 
}

function enviar() {

    if(nomeValido == true && sobrenomeValido == true && emailValido == true && msgValido == true) {

    let listaCampos = JSON.parse(localStorage.getItem('listaCampos') || '[]')
    
    listaCampos.push(
    {
      nome: nome.value,
      sobrenome: sobrenome.value,
      email: emailForm.value,
      mensagem: msg.value
    }
    )
    localStorage.setItem("listaCampos", JSON.stringify(listaCampos));
    alert("Dados enviados :)");
    
    nomeValido = false;
    sobrenomeValido = false;
    emailValido = false;
    msgValido = false;
    
    removeErro(0);removeErro(1);removeErro(2);removeErro(3);
    campos[0].value = '';campos[1].value = '';campos[2].value = '';campos[3].value = '';
    } else {
        alert("Preencha corretamente todos os campos!");
    } 
}