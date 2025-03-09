document.querySelector(".fade-layer").addEventListener("click", ShowMenu)

document.querySelector(".menu-button").addEventListener("click", ShowMenu)
document.querySelector(".close").addEventListener("click", ShowMenu)


function ShowMenu() {

    let close = document.querySelector("div.close")
    let button = document.querySelector("div.menu-button")

    let menu = document.querySelector("div.menu")
    close.classList.toggle("visible"), menu.classList.toggle("show"), button.classList.toggle("invisible")

    let layer = document.querySelector(".fade-layer")
    layer.classList.toggle("visible")  


  

   
}
