const inicio = document.querySelector('.ativo')
const itensPerguntasERespostas = document.querySelectorAll('.item')

inicio.classList.remove('ativo')

itensPerguntasERespostas.forEach(function (item) {
    item.addEventListener('click', function(){        

        const itemAtivoAtual = document.querySelector('.ativo')

        item.classList.add('ativo')

        itemAtivoAtual.classList.remove('ativo')

    })
})