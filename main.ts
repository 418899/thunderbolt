let x = 0
let y = 0
let z = 1
basic.forever(function () {
    if (x <= 0) {
        z = 1
    } else if (x >= 4) {
        z = -1
    }
    x += z
    led.plot(x, y)
    basic.pause(100)
    basic.clearScreen()
})
