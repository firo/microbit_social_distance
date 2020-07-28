radio.onReceivedString(function (receivedString) {
    if (radio.receivedPacket(RadioPacketProperty.SignalStrength) > -90) {
        basic.showIcon(IconNames.No)
        basic.pause(1000)
        basic.clearScreen()
    } else {
        basic.showIcon(IconNames.Heart)
    }
})
radio.setGroup(1)
basic.forever(function () {
    radio.sendString("firo")
    basic.pause(2000)
})
