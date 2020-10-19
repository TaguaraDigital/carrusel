const slide = document.getElementById('slide')
const prev = document.getElementById('prev')
const next = document.getElementById('next')

amountSlide = slide.children.length

let activeSlide = 1;

showSlide = () => {
    slide.style.transform = `translateX(${activeSlide *-1 * slide.clientWidth / amountSlide}px)`
    slide.style.transition = `transform .5s ease`
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