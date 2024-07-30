const counter = document.getElementById("counter")
const numberDiv = document.querySelector(".number")

counter.addEventListener("input", (e) => {
    const count = e.target.value;
//    numberDiv.innerHTML(count);
    numberDiv.innerHTML = "";
    numberDiv.insertAdjacentText("beforeend", count)
})