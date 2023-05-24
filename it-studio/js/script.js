let menu = document.getElementById('header')
let menu_items = document.querySelectorAll('.menu > li > a')
console.log(menu_items[0])

il = menu_items.length



window.onscroll = function (e) {  
    menu.style.background = 'white'
    menu.style.boxShadow =  '0px 0px 10px rgba(111, 111, 111, 0.25)'
    
    for (i = 0; i <= il; i++) {
        menu_items[i].style.color = 'black'
    }
    
    
    } 