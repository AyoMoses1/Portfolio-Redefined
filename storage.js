const ContactForm = document.querySelector('#footer_form');


ContactForm.addEventListener('input', (e) => {
  e.preventDefault();
  const obj = {
    fullName: document.querySelector('#name').value,
    emailAdress: document.querySelector('#email').value,
    message: document.querySelector('#textarea').value,
  };

  localStorage.setItem('formEntry', JSON.stringify(obj));
});

const retrievedObject = localStorage.getItem('formEntry');
const getValue = JSON.parse(retrievedObject);

window.addEventListener('load', () => {
  if (localStorage.getItem('formEntry')) {
    document.querySelector('#name').value = getValue.fullName;
    document.querySelector('#email').value = getValue.emailAdress;
    document.querySelector('#textarea').value = getValue.message;
  }
});