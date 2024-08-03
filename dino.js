let dino = document.querySelector(".dino");
let cactus = document.querySelector(".cactus");
let count = document.querySelector(".count");
let body = document.body

function jump() {
  if (dispatchEvent.classList != "jump") {
    dino.classList.add("jump");

    setTimeout(function () {
      dino.classList.remove("jump");
    }, 500);
  }
}

const funcLive = setInterval(function () {
  let dinoTepaga = parseInt(
    window.getComputedStyle(dino).getPropertyValue("top")
  );
  let cactusChapga = parseInt(
    window.getComputedStyle(cactus).getPropertyValue("left")
  );

  if (cactusChapga > 0 && cactusChapga < 60 && dinoTepaga >= 150) {
    dino.style.animationPlayState = "paused";
    cactus.style.animationPlayState = "paused";

    alert("OOOPS, GAME OVER!");
    window.location.replace("home.html");
    // window.location.reload()
  }
});

document.addEventListener("keydown", function () {
  jump();
  count.innerHTML++;
  if (count.innerHTML > 5 && count.innerHTML <= 10) {
    cactus.style.animation = "cactus 0.8s infinite linear";
    body.style.background = "crimson"
  }else if (count.innerHTML > 11 && count.innerHTML <= 20){
    cactus.style.animation = "cactus 0.4s infinite linear";
  }
});

// count qo'shish;
// dizayn chiroylilashtirish;
// sekn boshlanib keyn tezlashitish - count dan foydalanib;
// har 100ta sakragancha background almashsin;


