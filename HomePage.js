const navbar = document.querySelector(".header__one");
document.addEventListener("DOMContentLoaded", function () {
  const aboutLink = document.querySelector('a[href="about.html"]');

  if (aboutLink) {
    aboutLink.addEventListener("click", function (event) {
      event.preventDefault();
      window.location.href = "about.html";
    });
  }
  window.addEventListener("scroll", function () {
    navbar.classList.toggle("sticky", window.scrollY > 100);
  });

  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    autoplay: {
      delay: 2500,
    },
    effect: "fade",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
});
