const productsLi = (item) => {
  $('.vitrine-content-list').append(
    `<li>
  <div class="vitrine-content-top">
    <button>40% OFF</button>
    <a href="#"><img src="./src/assets/header/mid/Heart.png" alt=""></a>
  </div>
  <figure>
    <div><img src="${item.photo}" alt=""></div>
    <figcaption>${item.productName}</figcaption>
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
  <button class="price-btn ${item.productName}" onClick="handleClick(event)">ADICIONAR</button>
</li>`
  )
}

const displayVitrine = async () => {
  const products = await getProducts()
  // console.log(products)
  products.forEach(item => {
    productsLi(item)
  })
}
displayVitrine()