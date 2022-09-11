const map = document.querySelector(".map__container");
const mapImg = document.getElementById("mapImg");
let dots = Array.from(document.querySelectorAll(".map__dot"));

map.scrollBy(200, 0); /* to show center of the map at the beginning */

mapImg.onload = () => {
    let condition = () => {
        return (mapImg.getBoundingClientRect().height != currentHeight) || (mapImg.getBoundingClientRect().width != currentWidth)
    }

    let getNumberStyle = (str) => {
        return Number(str.replace(/[a-z]/gi, ''))
    }

    let currentHeight = mapImg.getBoundingClientRect().height;
    let currentWidth = mapImg.getBoundingClientRect().width;

    const correctPlacement = (w, h) => {
        dots.forEach(el => {
            let left = getNumberStyle(getComputedStyle(el).left) / w;
            let top = getNumberStyle(getComputedStyle(el).top) / h;
            let newLeft = left * mapImg.getBoundingClientRect().width;
            let newTop = top * mapImg.getBoundingClientRect().height;
            el.style.left = newLeft + 'px';
            el.style.top = newTop + 'px';
        })
    }

    correctPlacement(1307, 768);

    window.onresize = () => {
        map.scrollBy(200, 0);
        if (condition()) {
            correctPlacement(currentWidth, currentHeight);
            currentWidth = mapImg.getBoundingClientRect().width;
            currentHeight = mapImg.getBoundingClientRect().height;
        }
    }
}
