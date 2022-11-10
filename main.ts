let dx = 0
let y = 0
let x = 0
basic.forever(function () {
    basic.clearScreen()
    y = 0
    if (x == 0) {
        dx = 1
    } else if (x == 4) {
        dx = -1
    }
    x += dx
    for (let index = 0; index < 5; index++) {
        led.plot(x, y)
        y += 1
    }
    basic.pause(150)
})
basic.forever(function () {
    basic.clearScreen()
    basic.pause(25)
    y = 0
    if (x == 0) {
        dx = 1
    } else if (x == 4) {
        dx = -1
    }
    x += dx
    for (let index = 0; index < 5; index++) {
        led.plotBrightness(x, y, 150)
        y += 1
    }
    basic.pause(150)
})
basic.forever(function () {
    basic.clearScreen()
    basic.pause(50)
    y = 0
    if (x == 0) {
        dx = 1
    } else if (x == 4) {
        dx = -1
    }
    x += dx
    for (let index = 0; index < 5; index++) {
        led.plotBrightness(x, y, 50)
        y += 1
    }
    basic.pause(150)
})
