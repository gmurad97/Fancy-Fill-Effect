let replayBtn = document.getElementById("replayBtn");
let maskedImage = document.getElementById("afill");

replayBtn.addEventListener("click", () =>{
    maskedImage.classList.remove("animation-fill");
    setTimeout(() => maskedImage.classList.add("animation-fill"), 128);
});