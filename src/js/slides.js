const slids = async () => {
  await getProducts()
  $('.vitrine-content-list').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        }
      },
    ]
  });
}
slids()

$('#categories-container').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
      }
    },
  ]
});

$('#brand-container').slick({
  infinite: true,
  slidesToShow: 6,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        infinite: true,
      }
    },
  ]
});

$('#instagram-container').slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 2,
});