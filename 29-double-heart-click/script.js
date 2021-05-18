const likeMe = document.querySelector('.likeMe')
const times = document.querySelector('#times')

let clickTime = 0
let timesClicked = 0

likeMe.addEventListener('click', (e) => {
    if (clickTime === 0) {
        clickTime = new Date().getTime()
   } else {
       if((new Date().getTime() - clickTime) < 800) {
            createHeart(e)
            clickTime = 0
       } else {
           clickTime = new Date().getTime()
       }
   }
})

const createHeart = (e) => {
    const heart = document.createElement('i')
    heart.classList.add('fas', 'fa-heart')

    const x = e.clientX
    const y = e.clientY

    const leftOffset = e.target.offsetLeft
    const TopOffset = e.target.offsetTop

    const xInside = x - leftOffset
    const yInside = y - TopOffset

    heart.style.top = `${yInside}px`
    heart.style.left = `${xInside}px`

    likeMe.appendChild(heart)

    times.innerHTML = ++timesClicked

    setTimeout(() => heart.remove(), 1000)

}