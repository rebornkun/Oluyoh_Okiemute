// toggle style switcher
const styleSwitcherToggle = document.querySelector(".style_switcher_toggler");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style_switcher").classList.toggle("open");
})

// hide style switcher onscroll
window.addEventListener("scroll", () => {
    if(document.querySelector(".style_switcher").classList.contains("open")){
        document.querySelector(".style_switcher").classList.remove("open")
    }
})

// theme colors
const alternatestyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color){
    alternatestyles.forEach((style) => {
        if(color === style.getAttribute("title")){
            style.removeAttribute("disabled")
        }else{
            style.setAttribute("disabled","true")
        }
    })
}

// theme light and dark
const dayNight = document.querySelector(".day-night");

dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})

window.addEventListener("load", () => {
    if(document.body.classList.contains("dark")){
        dayNight.querySelector("i").classList.add("fa-sun");
    }else{
        dayNight.querySelector("i").classList.add("fa-moon");
    }
})