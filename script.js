// Add your code to this file

let border = document.querySelector("img")
border.style.border = "dotted"
border.style.color = "#FFCB05"

let borders = document.querySelectorAll(".pokemon_images")
for (let i = 0; i < borders.length; i++) {
    borders[i].style.border = "dotted"
    borders[i].style.color = "#FFCB05"
}
let background = document.querySelectorAll("body")
for (let i = 0; i < background.length; i++) {
    background[i].style["background-color"] = "darkblue"
}
let title = document.querySelector("h1")
title.style.textDecoration = "underline"
let names = document.querySelectorAll(".pokemon_names")
for (i = 0; i < names.length; i++) {
    names[i].style.color = "#FDEFA6"
}
let intro = document.querySelector("h2")
intro.innerHTML = "Here are Pokemon's incredible Gen 1 starters!"
intro.style.textAlign = "center"
let bulb_cont = document.getElementById("bulbasaur_container")
bulb_cont.style["background-color"] = "darkcyan"
let footer = document.querySelector("footer")
footer.innerHTML = "All Star Code - DOM Project"
footer.style.fontStyle = "italic"
footer.style.textDecoration = "overline underline"
