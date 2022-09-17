//button
openButton = document.querySelector("span.open");
closeButton = document.querySelector("span.close");
bgAdd = document.querySelector(".bg-add");
openButton.addEventListener("click", function () {
  openButton.classList.add("hide");
  closeButton.classList.remove("hide");
  bgAdd.classList.add("content-page");
});
closeButton.addEventListener("click", function () {
  closeButton.classList.add("hide");
  openButton.classList.remove("hide");
  bgAdd.classList.remove("content-page");
});
///owlcarousel

$(document).ready(function () {
  $(".owl-carousel").owlCarousel();
});

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: true,
    },
    600: {
      items: 2,
      nav: false,
    },
    1000: {
      items: 3,
      nav: true,
      loop: false,
    },
  },
});
var owl = $(".owl-carousel");
owl.owlCarousel({
  items: 4,
  loop: true,
  margin: 10,
  autoplay: true,
  autoplayTimeout: 1000,
  autoplayHoverPause: true,
});
$(".play").on("click", function () {
  owl.trigger("play.owl.autoplay", [1000]);
});
$(".stop").on("click", function () {
  owl.trigger("stop.owl.autoplay");
});
