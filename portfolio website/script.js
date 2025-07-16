var typed = new Typed((".skills"),{
    strings : ["CSE Student","Frontend Developer","Volunteer","IEEE Member"],
    typeSpeed : 100,
    backSpeed : 100,
    backDelay : 1000,
    loop : true
});

document.querySelector('.read-more-btn').addEventListener('click', function() {
  document.querySelector('.about').classList.toggle('show-full');
  this.textContent = this.textContent === 'Read More' ? 'Read Less' : 'Read More';
});

const menuIcon = document.querySelector('#menu-icon');
const navList = document.querySelector('nav ul');

menuIcon.addEventListener('click', () => {
  navList.classList.toggle('active');
});
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.3
  });

  sections.forEach(section => {
    observer.observe(section);
  });
});

const scriptURL = 'https://script.google.com/macros/s/AKfycbwA8IqVFZSvMO7VOpew5xASy0HZyebecy-g1CJGvx_WbFNsP0VE12gzhDRrg1PqzX4eDw/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")
form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      msg.innerHTML = "Message send succesfully"
      setTimeout(function(){
        msg.innerHTML = ""
      },5000)
      form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})