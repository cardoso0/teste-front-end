const modal = document.querySelector('.modal-wrapper')
const vitrine = document.querySelector('.vitrine-content-list')
const modalContent = document.querySelector('.modal-content')

const detailsModal = (item) => {
  return `
    <div class="modal-content-img"><img src="${item.photo}" alt=""></div>
    <div class="modal-content-details">
    <h1>${item.productName}</h1>
    <i>R$ ${item.price}</i>
    <p>${item.descriptionShort}</p>
    <a href="#">Veja mais detalhes do produto</a>
    </div>`
}
const handleClick = async (event) => {
  modalContent.innerHTML = ''
  modal.style.display = 'block'
  const imgClass = event.target.classList[0]

  const products = await getProducts()
  products.forEach((item, index) => {
    if (imgClass == index) {
      $('.modal-content')
        .append(detailsModal(item))
    }
  })
}

modal.addEventListener('click', event => {
  const classNameOfClickedElement = event.target.classList[0]
  const classNames = ['modal-close', 'modal-link', 'modal-wrapper']
  const shouldClosePopup = classNames.some(className =>
    className === classNameOfClickedElement)

  if (shouldClosePopup) {
    modal.style.display = 'none'
  }
})