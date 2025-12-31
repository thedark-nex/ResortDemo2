const hero = document.querySelector(".hero");

const backgrounds = [
  "images/bg1.jpg",
  "images/bg2.jpg",
  "images/bg3.jpg",
  "images/bg4.jpg"
];

let index = 0;

function changeBackground() {
  hero.style.backgroundImage = `url(${backgrounds[index]})`;
  index = (index + 1) % backgrounds.length;
}

changeBackground();
setInterval(changeBackground, 8000);

/* BOOKING FORM */
document.getElementById("bookingForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const confirmRedirect = confirm("Booking submitted! Continue to WhatsApp?");
  if (confirmRedirect) {
    window.open(
      "https://wa.me/2349018289732?text=Hello%20I%20would%20like%20to%20book%20a%20stay%20at%20The12%20by%20Naji%20Resort",
      "_blank"
    );
  }
});