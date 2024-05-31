let strip = neopixel.create(DigitalPin.P14, 4, NeoPixelMode.RGB)
let R = 0
let G = 0
let B = 0
basic.forever(function () {
    for (let index = 0; index <= 3; index++) {
        R = randint(10, 255)
        G = randint(10, 255)
        B = randint(10, 255)
        strip.clear()
        strip.setPixelColor(index, neopixel.rgb(R, G, B))
        basic.pause(500)
        strip.show()
    }
})
