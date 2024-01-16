/* Copyright (c) 2020 MTHS All rights reserved
 * Created by: Ihor Chernyshev
 * Created on: Jan 2024
 * This program will allow you to control Micro:Bit from your phone via Bluetooth
*/

// variables
let test1 = 0


// setup
basic.showIcon(IconNames.Happy)

// go straight
devices.onGamepadButton(MesDpadButtonInfo.AUp, function () {
  robotbit.MotorRun(robotbit.Motors.M1A, 200)
  robotbit.MotorRun(robotbit.Motors.M2A, 200)
})

// go back
devices.onGamepadButton(MesDpadButtonInfo.BUp, function () {
  robotbit.MotorRun(robotbit.Motors.M1A, -200)
  robotbit.MotorRun(robotbit.Motors.M2A, -200)
})

// stop
devices.onGamepadButton(MesDpadButtonInfo._1Up, function () {
  robotbit.MotorRun(robotbit.Motors.M1A, 0)
  robotbit.MotorRun(robotbit.Motors.M2A, 0)
})
