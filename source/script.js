//scroll to top
function scrollToTop() {
  const position = document.documentElement.scrollTop || document.body.scrollTop;

  if (position > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo({
      top: position - position / 8,
      behavior: "smooth"
    });
  }
}

window.addEventListener('scroll', function() {
  const button = document.querySelector('.back-to-top');
  if (window.scrollY > 100) {
    button.classList.add('show');
  } else {
    button.classList.remove('show');
  }
});

document.querySelector('.back-to-top').addEventListener('click', function(e) {
  e.preventDefault();
  scrollToTop();
});

