var btn = document.getElementById('x');

btn.addEventListener("click", function() {
  var i = 3000;
  var int = setInterval(function() {
    window.scrollTo(0, i);
    i -= 20
    if (i <= 0) clearInterval(int);
  }, 20);
})



window.addEventListener('scroll' , () => {
  var header = document.querySelector('.header');
  if( document.documentElement.scrollTop > 0){
  header.style.opacity = "0.8"
  }else{
  header.style.opacity = "1"
  }
});