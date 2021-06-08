const clicouEmTrocar= (evento) =>{
    evento.preventDefault();

    let imagem2= document.getElementById('Pills');
    imagem2.src= 'red.jpg';
};

const iniciar = ()=> {
    document.getElementById('troca').addEventListener('click', clicouEmTrocar);
};

document.addEventListener('DOMContentLoaded', iniciar);