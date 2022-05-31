const mensagemErro = document.querySelector('#error')
const form = document.querySelector('form')
const numGatinho = document.querySelector('input')

//validação no submit
form.addEventListener('submit', validateForm)

function validateForm(e){
    if(numGatinho.value<0 || numGatinho.value>4 || numGatinho.value == ''){
        // console.log(e, numGatinho.value)
        mensagemErro.innerText = 'Adicionar um valor entre 0 e 4'
        e.preventDefault() //preventDefault cancela o evento (impede a requisição)
    }
}

//validação no keyup
form.addEventListener('keyup', validateForm)

function validateForm(e){
    if(numGatinho.value<0 || numGatinho.value>4 || numGatinho.value == ''){
        // console.log(e, numGatinho.value)
        mensagemErro.innerText = 'Adicionar um valor entre 0 e 4'
        e.preventDefault()
    }else{
        mensagemErro.innerText = ''
    }
}