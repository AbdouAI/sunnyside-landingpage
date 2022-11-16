const menuLogo=document.getElementById("menuLogo");
const menu=document.getElementById("menuID");
const triangle=document.getElementById("triangleID");

menuLogo.addEventListener("click", function(){
    menu.classList.toggle("active");
    triangle.classList.toggle("active");
    menuLogo.classList.toggle("menu-logo-active")
})

document.querySelectorAll(".menuLNK").forEach(n => n.
addEventListener("click", () => {
    menu.classList.remove("active");
    triangle.classList.remove("active");
    menuLogo.classList.remove("menu-logo-active")
}))

window.onresize=function(){
    if(window.innerWidth>=648){
        triangle.classList="triangle";
        menu.classList="menu";
        menuLogo.classList="menu-logo";
    }
}