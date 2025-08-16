let burger = document.getElementById("burger")
let burgerBox = document.getElementById("burgerBox")


let burgerOpen = 0
burger.addEventListener("click",() => {
    if (burgerOpen == 0) {
        burgerBox.style.right = "50%"
        burgerOpen++
    }
    else {
        burgerBox.style.right = "100%"
        burgerOpen--
    }
})

