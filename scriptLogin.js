const formulario = document.querySelector('.formulario')
const inputEmail = document.querySelector('.loginEmail')
const inputSenha = document.querySelector('.loginSenha')

formulario.addEventListener('click', (e) => {
    const el = e.target
    if(el.classList.contains('botaoEntrar')){
    e.preventDefault()
    verificaCampos(e)
    }
})

function verificaCampos(){
    let valid = true

    for (let campo of formulario.querySelectorAll('.mensagem-erro')){
        campo.remove()
    }

    for (let i of formulario){
        i.style.border = '1px rgba(170, 170, 170, 0.726) solid';
    }

    if(!inputEmail.value){
        criaErro(inputEmail, 'Esse campo é obrigatório')
        valid = false
    } 

    if (!inputSenha.value){
        criaErro(inputSenha, 'Esse campo é obrigatório')
        valid = false
    }
}

function criaErro(campo, mensagem){
    const div = document.createElement("div")
    div.innerHTML = mensagem
    div.setAttribute('class','mensagem-erro')
    div.style.color = 'red'
    div.style.fontSize = '16px'
    campo.style.border = '1px rgba(255, 0, 0, 0.514) solid'
    campo.insertAdjacentElement('afterend', div)
}