import Wallop from 'wallop'

let wallopElem = document.querySelector('.Wallop')
let sliderControllerChildrens = document.querySelectorAll('.FeatureItems-sliderController li')

if (wallopElem) {
  let wallopSlider = new Wallop(wallopElem)

  let timer = 8000

  let nextSlide = () => {
    setTimeout(() => {
      wallopSlider.next()
      nextSlide()
    }, timer)
  }

  nextSlide()

  wallopSlider.on('change', (evt) => {
    // find the button and apply is-active class
    // find it's siblings and remove class
    // console.log(evt.detail.currentItemIndex)
    // console.log('called on change')
    removeClassAllElements()
    let index = evt.detail.currentItemIndex

    addClassCurrentElement(index)
  })

  let removeClassAllElements = () => {
    sliderControllerChildrens.forEach(elem => {
      elem.className = ''
    })
  }

  let addClassCurrentElement = (index) => {
    sliderControllerChildrens.forEach(elem => {
      if (Number(elem.getAttribute('data-slide')) === index) {
        elem.className = 'is-active'
      }
    })
  }
}
