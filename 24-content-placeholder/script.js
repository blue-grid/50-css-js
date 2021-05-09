const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile-img')
const theName = document.getElementById('name')
const date = document.getElementById('date')
// Animations
const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 4000)

function getData() {
    header.innerHTML = 
    '<img src="https://images.unsplash.com/photo-1620548055714-c8daec71d708?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="">'
    title.innerHTML = 'Sample Card Title for Test'
    excerpt.innerHTML = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, doloremque.'
    profile_img.innerHTML = '<img src="https://randomuser.me/api/portraits/men/60.jpg" alt="">'
    theName.innerHTML = 'John Doe'
    date.innerHTML = 'Nov 15, 2021'   
    
    animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'))
    animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'))
}
