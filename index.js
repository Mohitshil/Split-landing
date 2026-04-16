const container = document.querySelector('.container');
const split = document.querySelectorAll(".split");
const Left = document.querySelector(".left");
const right = document.querySelector(".right");

Left.addEventListener("mouseenter", () =>{
    container.classList.add("hover-left")
})

Left.addEventListener("mouseleave", () =>{
    container.classList.remove("hover-left")
});

right.addEventListener("mouseenter",() =>{
    container.classList.add("hover-right")
})

right.addEventListener("mouseleave",() =>{
    container.classList.remove("hover-right")
});
