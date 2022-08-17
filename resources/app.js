function showBurgerMenu() {
    document.getElementById('burger-menu').style.visibility = "visible";
    document.getElementById('hamburger-menu').style.visibility = "hidden";
    document.getElementById('close-x').style.visibility = "visible";
    document.getElementById('container').style.background = "rgb(0, 0, 0, .5)";
    document.getElementById('container').style.height = "100vh";
    document.getElementById('container').style.position = "absolute";
    document.getElementById('container').style.top = 0;
    document.getElementById('container').style.left = 0;
}

// need to add a div next to the nav div and set its color to transparent black rgb(0, 0, 0, .5)

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

  

  const subMenuFeatures = document.getElementById('sub-menu-features');

//   function showHideSubMenuFeatures() {
//       if (subMenuFeatures.style.visibility.hidden === true) {
//         document.getElementById('sub-menu-features').style.visibility = "visible";
//         document.getElementById('sub-menu-features').style.maxHeight = "initial";
//          document.getElementById('features-up').style.visibility = "visible";
//         document.getElementById('features-down').style.visibility = "hidden";
//      } else if (subMenuFeatures.style.visibility.hidden === false) {
//          document.getElementById('sub-menu-features').style.visibility = "hidden";
//           document.getElementById('sub-menu-features').style.maxHeight = "initial";
//         document.getElementById('features-up').style.visibility = "hidden";
//          document.getElementById('features-down').style.visibility = "visible";

//      }
//        }

let featuresId = document.getElementById("features-id").classList.toggle();

function showHideSubMenuFeatures() {
    if (featuresId.isChecked() === true) {
            document.getElementById('sub-menu-features').style.visibility = "visible";
                 document.getElementById('sub-menu-features').style.maxHeight = "initial";
                 document.getElementById('features-up').style.visibility = "visible";
                 document.getElementById('features-down').style.visibility = "hidden";
              }else if (featuresId.isChecked() === false) {
                   document.getElementById('sub-menu-features').style.visibility = "hidden";
                   document.getElementById('sub-menu-features').style.maxHeight = "initial";
                   document.getElementById('features-up').style.visibility = "hidden";
                   document.getElementById('features-down').style.visibility = "visible";

              }
}

//         function showSubMenuFeatures() {
//             if (subMenuFeatures.isChecked() === true) {
//           document.getElementById('sub-menu-features').style.visibility = "visible";
//           document.getElementById('sub-menu-features').style.maxHeight = "initial";
//           document.getElementById('features-up').style.visibility = "visible";
//          document.getElementById('features-down').style.visibility = "hidden";
//      }
//       }
  

//     function hideSubMenuFeatures() {
//     if (subMenuFeatures.isChecked() === false) {
//      document.getElementById('sub-menu-features').style.visibility = "hidden";
//      document.getElementById('sub-menu-features').style.maxHeight = "initial";
//      document.getElementById('features-up').style.visibility = "hidden";
//      document.getElementById('features-down').style.visibility = "visible";
//     }
//    }

  function showSubMenuCompany() {
    document.getElementById('sub-menu-company').style.visibility = "visible" ;
    document.getElementById('sub-menu-company').style.maxHeight = "initial" ;
    document.getElementById('company-up').style.visibility = "visible";
    document.getElementById('company-down').style.visibility = "hidden";
  }

  function hideSubMenuCompany() {
    document.getElementById('sub-menu-company').style.visibility = "hidden" ;
    document.getElementById('sub-menu-company').style.maxHeight = "initial" ;
    document.getElementById('company-up').style.visibility = "hidden";
    document.getElementById('company-down').style.visibility = "visible";
  }


//  function arrowUp() {
//      document.getElementsByClassName('arrow-up').style.visibility = "visible";
//      document.getElementsByClassName('arrow-down').style.visibility = "hidden";
//  }


//for the terminal 
//git add .
//git commit -m "message"
//git push
// and it will upload the new code to git hub account