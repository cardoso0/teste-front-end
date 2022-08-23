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

$('.card-container').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 2,
});