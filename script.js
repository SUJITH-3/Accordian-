const ques = document.querySelectorAll(".faq")
ques.forEach((element) => {
    element.addEventListener("click", () => {
        element.children[1].classList.toggle("display")
        element.children[0].children[1].classList.toggle("display-toggle-img")
    })
})


