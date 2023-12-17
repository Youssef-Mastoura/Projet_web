document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');

  form.addEventListener('submit', function (event) {
    event.preventDefault(); 

    const nom = document.getElementById('nom').value;
    const prenom = document.getElementById('prenom').value;
    const CIN = document.getElementById('CIN').value;
    const email = document.getElementById('email').value;
    const telephone = document.getElementById('telephone').value;
    const age = document.getElementById('age').value;
    const nationality = document.getElementById('nationality').value;

    if (!/^[A-Za-z]+$/.test(nom)) {
      alert('Please enter a valid nom without numeric characters.');
      return;
    }

    if (!/^[A-Za-z]+$/.test(prenom)) {
      alert('Please enter a valid prenom without numeric characters.');
      return;
    }

    if (!/^\d{8}$/.test(CIN)) {
      alert('Please enter a valid CIN (8 digits).');
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    if (!/^\d{8}$/.test(telephone)) {
      alert('Please enter a valid telephone number (8 digits).');
      return;
    }

    if (!/^\d{2}$/.test(age)) {
      alert('Please enter a valid age (2 digits).');
      return;
    }

    if (!/^[A-Za-z]+$/.test(nationality)) {
      alert('Please enter a valid nationality without numeric characters.');
      return;
    }

    alert('Form submitted successfully!');
    form.reset(); 
  });
});