const items = document.querySelectorAll(".div__item");
const chevron = document.querySelectorAll(".fas");
const contents = document.querySelectorAll(".content");

items.forEach((item, index) => item.addEventListener("click", (e) => {

    const itemShow = document.querySelector(".div__item.show");

    if (itemShow) {
        item.classList.remove("show");
        chevron[index].style.transform = "rotate(0deg)";
        contents[index].classList.remove("show");
    } else {
        item.classList.add("show");
        chevron[index].style.transform = "rotate(180deg)";
        contents[index].classList.add("show");
    }


}))
items.forEach(item => item.addEventListener("mouseover", () => {
    const box = document.querySelector(".box");
    box.classList.add("show");
}))
items.forEach(item => item.addEventListener("mouseout", () => {
    const box = document.querySelector(".box");
    box.classList.remove("show");
}))
