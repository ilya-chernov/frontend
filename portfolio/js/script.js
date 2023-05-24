// receiving a portfolio button
let menuButton = document.getElementById('portfolio')
// receiving a skills button
let skillsButton = document.getElementById('skills')

const portfolio = document.querySelector('.projects');

const skills = document.querySelector('.skills');






skillsButton.addEventListener("click", function() {
    skillsButton.style.backgroundColor = '#575757'
    skillsButton.style.color = '#fff'
    menuButton.style.color = 'black'
    menuButton.style.backgroundColor = '#fff'
    portfolio.style.display = 'none';
    skills.style.display = 'flex';


})

menuButton.addEventListener("click", function() {

    skillsButton.style.backgroundColor = '#fff'
    skillsButton.style.color = '#575757'
    menuButton.style.color = 'white'
    menuButton.style.backgroundColor = '#575757'

    portfolio.style.display = 'flex';
    skills.style.display = 'none';
})