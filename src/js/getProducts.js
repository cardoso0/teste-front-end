const getProducts = async () => {
  try {
    const { data } = await 
      axios.get('https://app.econverse.com.br/teste-front-end/junior/caoselheiro/lista-produtos/produtos.json');
    const response = data.products
    return response
  } catch (error) {
    console.error(error);
  }
}