// Minimal JS for nav toggle and simple form behavior
document.addEventListener('DOMContentLoaded', function(){
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');
  if(toggle && nav){
    toggle.addEventListener('click', () => nav.classList.toggle('show'));
  }

  const form = document.querySelector('.contact-form');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      alert('Thank you! This is a demo template — hook the form to your backend to enable downloads.');
    });
  }
});
