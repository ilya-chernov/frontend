let elem = document.getElementById("menu-button");
let sidebar = document.getElementById('side');

sidebarPos = 0

elem.addEventListener('click', function() {
    if (sidebarPos == 0) {
        sidebar.style.width = '100%'
        sidebar.style.justifyContent = 'left'
        elem.style.textAlign = 'center'
        sidebar.style.transition = '0.5s'
        sidebarPos = 1
    } else {
        sidebar.style.width = '80px'
        elem.style.textAlign = 'left'
        sidebarPos = 0
    }
    
})
