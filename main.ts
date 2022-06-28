let nivel_de_luz = 0
basic.forever(function () {
    nivel_de_luz = input.lightLevel()
    if (nivel_de_luz < 10) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else if (nivel_de_luz > 10) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
