// BOOKING FORM
document.getElementById("bookingForm").addEventListener("submit", function(e){
  e.preventDefault();

  const name = nameField.value;
  const phone = phoneField.value;
  const room = room.value;
  const checkin = checkinField.value;
  const checkout = checkoutField.value;

  alert("Booking received!");

  if(confirm("Continue to WhatsApp booking?")){
    const msg =
      `Hello, I want to book a stay at The12 by Naji Resort.%0A
Name: ${name}%0A
Phone: ${phone}%0A
Room: ${room}%0A
Check-in: ${checkin}%0A
Check-out: ${checkout}`;

    window.open(`https://wa.me/2349018289732?text=${msg}`, "_blank");
  }
});

// BACKGROUND ROTATION (WORKING)
const backgrounds = [
  "images/bg1.jpg",
  "images/bg2.jpg",
  "images/bg3.jpg",
  "images/bg4.jpg",
  "images/bg5.jpg",
  "images/bg6.jpg"
];

const sections = document.querySelectorAll(".section");
let index = 0;

// SET INITIAL
sections.forEach(sec => {
  sec.style.backgroundImage = `url(${backgrounds[0]})`;
});

// ROTATE
setInterval(() => {
  index = (index + 1) % backgrounds.length;
  sections.forEach(sec => {
    sec.style.backgroundImage = `url(${backgrounds[index]})`;
  });
}, 15000);