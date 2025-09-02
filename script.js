const form = document.getElementById('whatsapp-form');

form.addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent form from reloading the page

  const name = document.getElementById('name').value;
  const message = document.getElementById('message').value;

  const phoneNumber = "233549307124"; // Replace with your WhatsApp number

  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    "Name: " + name + "\nMessage: " + message
  )}`;

  window.open(url, "_blank"); // Opens WhatsApp in a new tab
});
