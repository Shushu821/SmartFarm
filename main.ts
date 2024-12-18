basic.forever(function () {
    basic.showIcon(IconNames.Happy)
    basic.showString("Welcome to the Smart Farm.")
    basic.showString("Farm temperature:")
    basic.showString("" + (Sensor.tempC(AnalogPin.P0)))
    basic.showString("Farm Brightness:")
    basic.showString("" + (Sensor.lightLevel(AnalogPin.P0)))
})
