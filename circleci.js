const btn = document.querySelector("#cta");
const p = document.querySelector("#text");

btn.addEventListener("click", function(e) {
    p.innerText = "You clicked it!"
})