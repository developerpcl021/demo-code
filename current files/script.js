(function ($) {
  $(".col-img-slide").slick({
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    variableWidth: true,
    prevArrow:
      "<button type='button' class='slick-prev inline-flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 duration-300'><svg class='w-4 h-4 text-gray-400' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 6 10'> <path stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M5 1 1 5l4 4'></path> </svg></button>",
    nextArrow:
      "<button type='button' class='slick-next inline-flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 duration-300'><svg class='w-4 h-4 text-gray-400' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 6 10'> <path stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m1 9 4-4-4-4'></path> </svg></button>",
  });

  $(".swatch_click").click(function () {
    var a = $(this).data("variant");
    var l = $(this)
      .parents(".finsle")
      .find('.item[data-ver="' + a + '"]')
      .attr("data-slick-index");

    $(this).parents(".finsle").find(".col-img-slide").slick("slickGoTo", l, !0);
  });
})(jQuery);
