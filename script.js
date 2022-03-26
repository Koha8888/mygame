const pixelCar = document.getElementsByClassName("pixel-car")[0]
const policeCar = document.getElementsByClassName("police-car")[0]

document.addEventListener("keydown", function (event) {
    jump();
})

function jump () {
    if (!pixelCar.classList.contains("jump")) {
        pixelCar.classList.add("jump")
    }
    setTimeout( function (){
        pixelCar.classList.remove("jump")
    },500)
}

const space = document.getElementsByClassName("space")[0]
space.addEventListener("click", () => {
    jump();
})

const start = document.getElementsByClassName("start")[0]
start.addEventListener("click", () => {
    setInterval(function (){
        let pixelCarTop = parseInt(window.getComputedStyle(pixelCar).getPropertyValue("top"));
        let policeCarLeft = parseInt(window.getComputedStyle(policeCar).getPropertyValue("left"));

        if (policeCarLeft < 50 && policeCarLeft > 0 && pixelCarTop >= 140) {
            alert("GAME OVER!")
        }
    },10)
})
