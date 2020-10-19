const slide = document.getElementById('slide')
const slideOrder = document.getElementById('slide-order')
const prev = document.getElementById('prev')
const prevOrder = document.getElementById('prev-order')
const next = document.getElementById('next')
const nextOrder = document.getElementById('next-order')

amountSlide = slide.children.length
amountSlideOrder = slideOrder.children.length

let activeSlide = 1;
let activeSlideOrder = 0;

showSlide = () => {
    slide.style.transform = `translateX(${activeSlide *-1 * slide.clientWidth / amountSlide}px)`
    slide.style.transition = `transform .5s ease`
}

showSlideOrder = (next) => {
    
    slideOrder.children[activeSlideOrder].style.order = 0
    activeSlideOrder += next
    console.log(activeSlideOrder)
    
    if (activeSlideOrder === amountSlideOrder) activeSlideOrder = 0
    if (activeSlideOrder < 0) activeSlideOrder = amountSlideOrder - 1

    slideOrder.children[activeSlideOrder].style.order = -1
    slideOrder.style.transition = `all 3s ease`
}

next.addEventListener('click',()=>{
    if (activeSlide >= amountSlide - 1) return;
    activeSlide += 1
    showSlide()
});

prev.addEventListener('click',()=>{
    if (activeSlide <= 0 ) return;
    activeSlide -= 1
    showSlide()
});

nextOrder.addEventListener('click',()=>{
    showSlideOrder(1)
});

prevOrder.addEventListener('click',()=>{
    showSlideOrder(-1)
});

slide.addEventListener('transitionend', () => {
    if(activeSlide === 0){
        activeSlide = amountSlide - 2
        slide.style.transform = `translateX(${activeSlide *-1 * slide.clientWidth / amountSlide}px)`
        slide.style.transition = `none`
    }
    if(activeSlide === amountSlide - 1){
        activeSlide = 1
        slide.style.transform = `translateX(${activeSlide *-1 * slide.clientWidth / amountSlide}px)`
        slide.style.transition = `none`
    }
})

showSlide()