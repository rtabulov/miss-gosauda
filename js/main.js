AOS.init();

var nav = document.querySelector('.nav');
console.log(nav);

window.addEventListener('scroll', function() {
  if (window.scrollY >= 500) {
    nav.classList.add('opaque');
  } else {
    nav.classList.remove('opaque');
  }
});
