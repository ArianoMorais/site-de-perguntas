import Modal from './modal.js'

const modal = Modal()
//pegar todos botoes com classe check

const checkButtons = document.querySelectorAll('.actions a.check')
//pegar quando o marvar como lido foi clicado

checkButtons.forEach(button => {
  //adicionar a escuta
  button.addEventListener('click', event => {
    //abrir modal
    modal.open()
  })
})
