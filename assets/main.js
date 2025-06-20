const scrollToTopButton = document.querySelector(".scroll-to-top-button");
const bars = document.querySelector(".fa-bars");
const aside = document.querySelector(".aside");
const adminMain = document.querySelector(".admin-main");
const adminFooter = document.querySelector(".admin-footer");

//========================================================
// Scroll to Top Function
//========================================================
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = () => {
  scrollFunction();
};

const scrollFunction = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopButton.classList.add("flex");
  } else {
    scrollToTopButton.classList.remove("flex");
  }
};

// When the user clicks on the button, scroll to the top of the document
const scrollToTop = () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
};

scrollToTopButton.addEventListener("click", () => {
  scrollToTop();
});

//========================================================
// Preloader Function
//========================================================
let preloader = document.querySelector("#preloader");
if (preloader) {
  window.addEventListener("load", () => {
    preloader.remove();
  });
}

//========================================================
// Admin Aside bar Show/Hide Function
//========================================================
bars.addEventListener("click", () => {
  aside.classList.toggle("left");
});

if (window.innerWidth > 768) {
  bars.addEventListener("click", () => {
    adminMain.classList.toggle("no-margin-left");
    adminFooter.classList.toggle("no-margin-left");
  });
}

//========================================================
// Admin Hamburger Button Animate Function
//========================================================
// const hamburgerBtn = document.querySelector(".hamburger-button");
// const hamburgerIcon = hamburgerBtn.querySelector("i");

// hamburgerBtn.addEventListener("click", () => {
//   hamburgerBtn.classList.toggle("active");

//   if (hamburgerIcon.classList.contains("fa-bars")) {
//     hamburgerIcon.classList.remove("fa-bars");
//     hamburgerIcon.classList.add("fa-times"); // or fa-times if you're using older FA
//   } else {
//     hamburgerIcon.classList.remove("fa-times");
//     hamburgerIcon.classList.add("fa-bars");
//   }
// });
