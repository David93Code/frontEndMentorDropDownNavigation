function showBurgerMenu() {
    document.getElementById('burger-menu').style.visibility = "visible";
    document.getElementById('hamburger-menu').style.visibility = "hidden";
    document.getElementById('close-x').style.visibility = "visible";
    document.getElementsByTagName('body')[0].style.background = "rgb(0, 0, 0, .5)";
}

// need to add a div next to the nav div and set its color to transparent black rgb(0, 0, 0, .5)

function hideBurgerMenu() {
    document.getElementById('burger-menu').style.visibility = "hidden";
    document.getElementById('hamburger-menu').style.visibility = "visible";
    document.getElementById('close-x').style.visibility = "hidden";
}