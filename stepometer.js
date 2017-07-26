let command_B = 0
let command_A = 0
let my_event_id = 0
let connected = 0
bluetooth.onBluetoothConnected(() => {
    connected = 1
    basic.showString("C")
})
bluetooth.onBluetoothDisconnected(() => {
    connected = 0
    basic.showString("D")
})
input.onGesture(Gesture.Shake, () => {
    if (connected == 1) {
        control.raiseEvent(
        my_event_id,
        command_A
        )
        basic.showLeds(`
            . . . . .
            . . # . .
            . # # # .
            . . # . .
            . . . . .
            `)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
my_event_id = 8888
command_A = 1
command_B = 2
basic.showString("DC")
