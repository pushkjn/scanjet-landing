addEventListener("DOMContentLoaded", () => {
    function closeByOuterClick(e) {
        if ((e.target.className.indexOf("menu__span") == -1) && (e.target.className.indexOf("menu__suboption") == -1)) {
            closeMenu();
            document.removeEventListener("click", closeByOuterClick);
        }
    }
    function closeByEsc(e) {
        e = e || window.event;
        let isEscape = false;
        if ("key" in e) {
            isEscape = (e.key === "Escape" || e.key === "Esc");
        } else {
            isEscape = (e.keyCode === 27);
        }
        if (isEscape) {
            menu.style.display = "none";
            document.removeEventListener("keydown", closeByEsc);
        }
    }
    function openMenu(e) {
        menu.style.display = "block";
        document.body.style.overflow = "hidden";
        e.stopPropagation();
        document.addEventListener("click", closeByOuterClick);
        document.addEventListener("keydown", closeByEsc);
    }
    function closeMenu() {
        menu.style.display = "none";
        document.body.style.overflow = "auto";
    }
    let menu = document.querySelector(".menu");
    let submenu = document.querySelector(".submenu");
    let openButtons = Array.from(document.querySelectorAll(".burger-icon"));
    let closeButtons = Array.from(document.querySelectorAll(".menu__close"));
    openButtons.forEach(el => {
        el.addEventListener("click", openMenu);
    })
    closeButtons.forEach(el => {
        el.addEventListener("click", closeMenu)
    })
})