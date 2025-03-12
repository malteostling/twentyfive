document.querySelector(".fade-layer").addEventListener("click", ShowMenu)

document.querySelector(".menu-button").addEventListener("click", ShowMenu)
document.querySelector(".close").addEventListener("click", ShowMenu)
document.querySelector(".button1").addEventListener("click", Sortpris)
document.querySelector(".button2").addEventListener("click", Sortkpk)
document.querySelector(".button3").addEventListener("click", Sortkoffin)


function ShowMenu() {

    let close = document.querySelector("div.close")
    let button = document.querySelector("div.menu-button")

    let menu = document.querySelector("div.menu")
    close.classList.toggle("visible"), menu.classList.toggle("show"), button.classList.toggle("invisible")

    let layer = document.querySelector(".fade-layer")
    layer.classList.toggle("visible")  
}


function Sortpris() {
 /*Tagen från w3schools https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_sort_table_number*/
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("Table");
    switching = true;
    while (switching) {
        switching = false;
        rows = table.rows;
        for (i = 1; i < (rows.length - 1); i++) {
          shouldSwitch = false;
          x = rows[i].getElementsByTagName("TD")[2];
          y = rows[i + 1].getElementsByTagName("TD")[2];
          if (Number(x.innerHTML) > Number(y.innerHTML)) {
            shouldSwitch = true;
            break;
          }
        }
        if (shouldSwitch) {
          rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
          switching = true;
        }
      }

}
function Sortkpk() {
    /*Tagen från w3schools men ändrad så att den kollar på högsta tallet https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_sort_table_number */
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("Table");
    switching = true;
    while (switching) {
        switching = false;
        rows = table.rows;
        for (i = 1; i < (rows.length - 1); i++) {
          shouldSwitch = false;
          x = rows[i].getElementsByTagName("TD")[3];
          y = rows[i + 1].getElementsByTagName("TD")[3];
          if (Number(x.innerHTML) < Number(y.innerHTML)) {
            shouldSwitch = true;
            break;
          }
        }
        if (shouldSwitch) {
          rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
          switching = true;
        }
      }
}

function Sortkoffin() {
     /*Tagen från w3schools men ändrad så att den kollar på högsta tallet https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_sort_table_number */
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("Table");
    switching = true;
    while (switching) {
        switching = false;
        rows = table.rows;
        for (i = 1; i < (rows.length - 1); i++) {
          shouldSwitch = false;
          x = rows[i].getElementsByTagName("TD")[1];
          y = rows[i + 1].getElementsByTagName("TD")[1];
          if (Number(x.innerHTML) < Number(y.innerHTML)) {
            shouldSwitch = true;
            break;
          }
        }
        if (shouldSwitch) {
          rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
          switching = true;
        }
      }

}