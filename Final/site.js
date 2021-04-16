const menuToggle = document.getElementsByClassName('menu-toggle')
const navLinks = document.getElementsByClassName('navbar-links')

menuToggle.addEventlistener('click' , () => { 
    navLinks.classList.toggle('active')
})