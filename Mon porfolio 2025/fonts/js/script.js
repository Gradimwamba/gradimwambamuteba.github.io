const headerUl = document.querySelector(".header-ul");
const bars = document.querySelector(".bars");
const body = document.querySelector(".slider")

bars.addEventListener('click', ()=>{
    headerUl.classList.toggle('open')
})

body.addEventListener('click', ()=>{
    headerUl.classList.remove("open")
})


//scrollreveal

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})

sr.reveal(`.title-h1`, {origin:'left'})
sr.reveal(`.title-h11`, {origin:'right'})
sr.reveal(`.slider-desc`, {origin:'left'})
sr.reveal(`.btn`, {origin:'right'})
sr.reveal(`.apropos-left`, { origin: 'left'})
sr.reveal(`.apropos-right`, {origin: 'right'})
sr.reveal(`.about-row`, {origin: 'bottom'})
sr.reveal(`.container-form`, {delay: 300 ,origin:'bottom', interval: 100})