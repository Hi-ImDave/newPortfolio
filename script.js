const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.main-container')
const navClose = document.getElementById('nav-close')
const modal = document.getElementById('myModal')
const btn = document.getElementById('open-btn')
const span = document.getElementsByClassName('close')[0]
const labels = document.querySelectorAll('.form-control label')
const panels = document.querySelectorAll('.panel')
const slides = document.getElementsByClassName('slides')
const dots = document.getElementsByClassName('dot')
const slidesArray = Array.from(slides)

open.addEventListener('click', () => container.classList.add('show-nav'))
close.addEventListener('click', () => container.classList.remove('show-nav'))
navClose.addEventListener('click', () => container.classList.remove('show-nav'))
btn.addEventListener('click', () => container.classList.remove('show-nav'))

panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    removeActiveClasses()
    panel.classList.add('active')
  })
})

removeActiveClasses = () => {
  panels.forEach((panel) => {
    panel.classList.remove('active')
  })
}

labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split('')
    .map(
      (letter, idx) =>
        `<span style="transition-delay:${idx * 50}ms">${letter}</span>`
    )
    .join('')
})

btn.onclick = () => {
  setTimeout((modal.style.display = 'flex'), 500)
}

span.onclick = () => {
  modal.style.display = 'none'
}

window.onclick = (event) => {
  if (event.target == modal) {
    modal.style.display = 'none'
  }
}

// SLIDES

// ADD REMOVE CLASS BASED ON SCREEN SIZE / ORIENTATION

let slideIndex = 1
showSlides(slideIndex)

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n))
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n))
}

function showSlides(n) {
  let i
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none'
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '')
  }
  slides[slideIndex - 1].style.display = 'block'
  dots[slideIndex - 1].className += ' active'
}
