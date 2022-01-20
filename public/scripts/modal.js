export default function Modal() {
  function open() {
    //funcionalidade de atribuir classe active para modal

    document.querySelector('.modal-wrapper').classList.add('active')
  }
  function close() {}

  return {
    open,
    close
  }
}
