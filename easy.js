const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const score = document.getElementById("score");

//tạo hàm để nhảy
function jump() {
    if (dino.classList != "jump") {
        dino.classList.add("jump");

        setTimeout(function () {
            dino.classList.remove("jump");
        }, 300);
    }
}

document.addEventListener("keydown", function (event) {
    jump();
});

//tạo cách tính điểm và điều kiện thua
setInterval(() => {
    const dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
    const cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'));
    score.innerText++;
if (cactusLeft < 0) {
    cactus.style.display = 'none';
} else {
    cactus.style.display = ''
}

if (cactusLeft < 100 && cactusLeft > 50 && dinoTop > 350) {
    alert("Your score is: " + score.innerText +
        "\n\nPlay again?");
    location.reload();
}

}, 50);
