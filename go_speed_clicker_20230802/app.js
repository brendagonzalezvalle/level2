


// Make a site that tracks how many times the user has clicked anywhere on the page (or a specific button if you prefer) and displays that click count to the user. Then, using localStorage or sessionStorage, make it so the number of clicks will remain on the screen even after the site is refreshed.
const getLocalStorage = localStorage.getItem("click")
const buttonClicked = document.getElementById("button")
let count = 0

console.log(getLocalStorage)
console.log("button")

document.getElementById("totalClicks").innerHTML= getLocalStorage

const clickCounts = buttonClicked.addEventListener("click", function(){
    
    count += 1;
    console.log(count)

    // Display that click count to the user
   const totalsSavedToStorage = document.getElementById("totalClicks").innerHTML = count

   localStorage.setItem("click", (totalsSavedToStorage))
   const getLocalStorage = localStorage.getItem("click")
   console.log(getLocalStorage)


})


