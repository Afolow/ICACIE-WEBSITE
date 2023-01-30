//nav btn
const navSlider = () => {
  const navBtn = document.querySelector(".nav-btn");
  const nav = document.querySelector(".nav-links");

  navBtn.addEventListener("click", () => {
    //Toggle nav
    nav.classList.toggle("nav-active");

    //navBtn animation
    navBtn.classList.toggle("toggle");
  });
};

navSlider();

// card slider accommodation page and
const containerHotels = [...document.querySelectorAll(".container-hotels")];
const nxtBtn = [...document.querySelectorAll(".nxt-btn")];
const preBtn = [...document.querySelectorAll(".pre-btn")];

containerHotels.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  // nxtBtn[i].addEventListener("click", () => {
  //   item.scrollLeft += containerWidth;
  // });
  nxtBtn[i].addEventListener("click", function () {
    item.scrollLeft += containerWidth;
  });

  preBtn[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth;
  });
});
