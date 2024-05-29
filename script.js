const bar = document.getElementById("hamburg");
const navbar = document.getElementsByClassName("navbar")[0];
const closeIcon = document.getElementById("close");


bar.addEventListener("click", () => {
    navbar.classList.add("active");
})
closeIcon.addEventListener("click", () => {
    navbar.classList.remove("active");
})
