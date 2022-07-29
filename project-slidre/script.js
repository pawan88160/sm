let slides = document.getElementsByClassName('slides');
let Dots = document.getElementsByClassName('dot');
let next = document.getElementById('next')
let prev = document.getElementById('prev')
let totalSlides = slides.length;
let i ;
let k ;
let j = 0;
next.addEventListener('click',()=>{
    j++
    goslides()
})
prev.addEventListener('click',()=>{
    j--
    goslides()
})

function goslides(){
    if(j>=totalSlides){
        j=0;
    }else if(j<0){
        j=totalSlides
    }
    for(let i = 0; i <totalSlides; i++){
        slides[i].classList.remove('active');
        slides[j].classList.add('active');
        Dots[i].classList.remove("activeDot");
        Dots[j].classList.add("activeDot");
    }
    setInterval(goslides,1000)
}
