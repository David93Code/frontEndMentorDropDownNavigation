function showBurgerMenu() {
    document.getElementById('burger-menu').style.visibility = "visible";
    document.getElementById('hamburger-menu').style.visibility = "hidden";
    document.getElementById('close-x').style.visibility = "visible";
    document.getElementById('container').style.background = "rgb(0, 0, 0, .5)";
    document.getElementById('container').style.height = "100vh";
    document.getElementById('container').style.position = "absolute";
    document.getElementById('container').style.top = 0;
    document.getElementById('container').style.left = 0;
    document.getElementById('container').style.bottom = 0;
   
}



function hideBurgerMenu() {
    document.getElementById('burger-menu').style.visibility = "hidden";
    document.getElementById('hamburger-menu').style.visibility = "visible";
    document.getElementById('close-x').style.visibility = "hidden";
    document.getElementById('container').style.background = "transparent";
    document.getElementById('sub-menu-features').style.visibility = "hidden";
     document.getElementById('sub-menu-company').style.visibility = "hidden";
   
    document.getElementById('features-up').style.visibility = "hidden";
    document.getElementById('features-down').style.visibility = "hidden";
    document.getElementById('company-up').style.visibility = "hidden";
   document.getElementById('company-down').style.visibility = "hidden";

}

function showSubMenu(btnID) {
    console.log(btnID);
    const subMenu= document.getElementById("sub-menu-" + btnID);
    if (subMenu.style.visibility == "visible") {
        subMenu.style.visibility = "hidden";
        subMenu.style.maxHeight = "0px";
        document.getElementById(btnID + "-down").src = "./resources/images/icon-arrow-down.svg";
    } else {
        subMenu.style.visibility = "visible";
        subMenu.style.maxHeight = "fit-content";
        document.getElementById(btnID + "-down").src = "./resources/images/icon-arrow-up.svg";
    }
   
}

