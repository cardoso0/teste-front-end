const slids = async () => {
  await getProducts()
  $('.vitrine-content-list').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
  });
}
slids()

$('#categories-container').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 4,
});

$('#brand-container').slick({
  infinite: true,
  slidesToShow: 6,
  slidesToScroll: 2,
});

$('#instagram-container').slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 2,
});