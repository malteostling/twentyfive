document.querySelector(".fade-layer").addEventListener("click",ShowMenu)

document.querySelector(".menu-button").addEventListener("click",ShowMenu)

document.querySelector(".close-button").addEventListener("click",ShowMenu)

function ShowMenu(){
    let menu = document.querySelector("div.menu")
    menu.classList.toggle("show")
    close.classList.toggle("show")

    let close = document.querySelector("div.close")
    layer.classList.toggle("visible")

    let layer = document.querySelector(".fade-layer")
    layer.classList.toggle("visible")
}
