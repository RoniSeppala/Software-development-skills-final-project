const menuButton = document.querySelector(".hamburger-menu")
const menu = document.querySelector(".menu")
const menuList = document.querySelector(".menu-list")
const menuBranding = document.querySelector(".branding")
const menuItems = document.querySelectorAll(".menu-item")

let showMenu = false;

menuButton.addEventListener('click', () => {
    if (!showMenu){ //if menu not showing, change menu visible
        menuButton.classList.add('cross')
        menu.classList.add('show')
        menuList.classList.add('show')
        menuBranding.classList.add('show')
        menuItems.forEach(element => {
            element.classList.add('show')
        });

        showMenu = true;
    } else {  //else change menu invisible
        menuButton.classList.remove('cross')
        menu.classList.remove('show')
        menuList.classList.remove('show')
        menuBranding.classList.remove('show')
        menuItems.forEach(element => {
            element.classList.remove('show')
        });

        showMenu = false;
    }
})