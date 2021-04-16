const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')


btn.addEventListener('click', () => {
    search.classList.toggle('active')
    input.focus()
})

window.addEventListener('click', function(e) {
    if (!btn.contains(e.target) && (!input.contains(e.target))) {
        search.classList.remove('active')
    }
})

