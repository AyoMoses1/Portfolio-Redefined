const hamburgerOpen = document.querySelector('.hamburger_open')
const hamburgerClose = document.querySelector('.hamburger_close')

const hamburger =  document.querySelector('.hamburger_nav')

hamburgerOpen.addEventListener('click', function(){
  hamburger.classList.toggle('active')
})

hamburgerClose.addEventListener('click', function(){
  hamburger.classList.toggle('active')
})

const hamburgerLinks = document.querySelectorAll('.ham_link')

hamburgerLinks.forEach(link => {
  link.addEventListener('click', function(){
    hamburger.classList.remove("active")
  })
})