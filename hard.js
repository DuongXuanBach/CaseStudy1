const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const dragon = document.getElementById("dragon");
const score = document.getElementById("score");
const rock = document.getElementById("rock");

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
    const dragonLeft = parseInt(window.getComputedStyle(dragon).getPropertyValue('left'));
    const rockLeft = parseInt(window.getComputedStyle(rock).getPropertyValue('left'));
    score.innerText++;
    //chạm cây
    if (cactusLeft < 0) {
        cactus.style.display = 'none';
    } else {
        cactus.style.display = ''
    }
    if (cactusLeft < 100 && cactusLeft > 50 && dinoTop > 300) {
        alert("Your score is: " + score.innerText +
            "\n\nPlay again?");
        location.reload();
    }
    //chạm đá
    if (rockLeft < 0) {
        rock.style.display = 'none';
    } else {
        rock.style.display = ''
    }
    if (rockLeft < 100 && rockLeft > 50 && dinoTop > 300) {
        alert("Your score is: " + score.innerText +
            "\n\nPlay again?");
        location.reload();
    }
    //chạm rồng
    if (dragonLeft < 0) {
        dragon.style.display = 'none';
    } else {
        dragon.style.display = ''
    }
    if (dragonLeft < 100 && dragonLeft > 50 && dinoTop > 300) {
        alert("Your score is: " + score.innerText +
            "\n\nPlay again?");
        location.reload();
    }
}, 50);
