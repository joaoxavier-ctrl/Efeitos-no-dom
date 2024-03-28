const contato = document.querySelector('#contato');
const texto = document.querySelector('.texto');

const dados = {};

function handleChange(event){
    console.log(dados);
    dados[event.target.name] = event.target.value;
}


contato.addEventListener('change', handleChange);