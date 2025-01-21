radio.onReceivedValue(function (name, value) {
    if (name == "X") {
        magicbit.Servo(magicbit.Servos.S1, Math.map(value, 0, 180, 45, 135))
    }
    if (name == "B1") {
        if (value == 1) {
            magicbit.Servo(magicbit.Servos.S8, 0)
        } else {
            magicbit.Servo(magicbit.Servos.S8, 90)
        }
    }
    if (name == "B3") {
        if (value == 1) {
            magicbit.Servo(magicbit.Servos.S8, 180)
        } else {
            magicbit.Servo(magicbit.Servos.S8, 90)
        }
    }
    if (name == "Z") {
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    }
})
radio.setGroup(1)
