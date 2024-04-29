const imagesCover = document.querySelectorAll(".cover-img-container")
const images_container = document.querySelector(".cover-container")


window.addEventListener("scroll", coversAnimation)



function coversAnimation() {
    if (ifCoversInVievport(images_container)) {
        imagesCover.forEach(elem => elem.classList.add("animation-img"))
    } else {
        imagesCover.forEach(elem => elem.classList.remove("animation-img"))
}
}

function ifCoversInVievport(elem) {
    const position = elem.getBoundingClientRect()
    return (
        position.bottom > 0 &&
        position.right > 0 &&
        position.top < (window.innerHeight || document.documentElement.clientHeight) &&
        position.left < (window.innerWidth || document.documentElement.clientWidth)
    );
}