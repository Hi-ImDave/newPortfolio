const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.main-container')
const navClose = document.getElementById('nav-close')
const modal = document.getElementById('myModal')
const btn = document.getElementById('open-btn')
const span = document.getElementsByClassName('close')[0]
const labels = document.querySelectorAll('.form-control label')
const panels = document.querySelectorAll('.panel')

open.addEventListener('click', () => container.classList.add('show-nav'))
close.addEventListener('click', () => container.classList.remove('show-nav'))
navClose.addEventListener('click', () => container.classList.remove('show-nav'))

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
  modal.style.display = 'flex'
}

span.onclick = () => {
  modal.style.display = 'none'
}

window.onclick = (event) => {
  if (event.target == modal) {
    modal.style.display = 'none'
  }
}
