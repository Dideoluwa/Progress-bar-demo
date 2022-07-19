let prev = document.querySelector('.prev')
let next = document.querySelector('.next')
let component = document.querySelectorAll('.component')
let componentCount = component.length


let count = 0
const compCount = Array.from(component)


next.addEventListener('click', () => {
   if (count < componentCount - 1) {
     count++
   }
   component[count].classList.add('active')
})

prev.addEventListener('click', () => {
   component[count].classList.remove('active')
   if (count > 0) {
      count--
   }
   component[count].classList.add('active')
})