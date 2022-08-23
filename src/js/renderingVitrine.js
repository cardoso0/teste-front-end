const productsLi = (item, index) => {
  $('.vitrine-content-list').append(
    `<li>
  <div class="vitrine-content-top">
    <button>40% OFF</button>
    <a href="#"><img src="./src/assets/header/mid/Heart.png" alt=""></a>
  </div>
  <figure onclick="handleClick(event)">
    <div><img class="${index}" src="${item.photo}" alt=""></div>
    <figcaption class="product-name">${item.productName}</figcaption>
  </figure>
  <div class="vitrine-content-priece">
    <div class="container-price">
      <p class="price-old">De R$ 96,69</p>
      <p class="price">Por <span>R$ 90,69</span></p>
    </div>
    <div class="container-assinatura">
      <p class="assinatura-1">R$ 85,69</p>
      <p class="assinatura-2">Para assinantes</p>
    </div>
  </div>
  <button class="price-btn" >ADICIONAR</button>
</li>`
  )
}

const displayVitrine = async () => {
  const products = await getProducts()
  products.forEach((item, index) => {
    productsLi(item, index)
  })
}
displayVitrine()