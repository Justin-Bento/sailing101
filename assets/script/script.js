"Use Strict"

let navMenu = document.getElementById("navPhoneMenu");
let navLinks = document.getElementById("navLinks");
let navLogo = document.getElementById("navLinks");


function navOpen() {

  if (navLinks.style.display == "none") { //the navigation will apper once the button is clicked
    navLinks.style.display = "block" 
  } else { //howerver if it is clicked again the content will dissapper
    navLinks.style.display = "none"
  }
  
}
document.getElementById("navPhoneMenu").addEventListener("toggle", function() {
  navOpen();
})

