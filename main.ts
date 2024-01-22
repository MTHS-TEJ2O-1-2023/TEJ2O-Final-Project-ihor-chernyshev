/* Copyright (c) 2020 MTHS All rights reserved
 * Created by: Ihor Chernyshev
 * Created on: Jan 2024
 * This program allows you to control Micro:Bit from your phone via Bluetooth
*/

// setup
basic.showIcon(IconNames.Happy)

// go straight
devices.onGamepadButton(MesDpadButtonInfo.AUp, function () {
  robotbit.MotorRun(robotbit.Motors.M1A, 255)
  robotbit.MotorRun(robotbit.Motors.M2A, 255)
})

// go back
devices.onGamepadButton(MesDpadButtonInfo.BUp, function () {
  robotbit.MotorRun(robotbit.Motors.M1A, -254)
  robotbit.MotorRun(robotbit.Motors.M2A, -254)
})

// turn left
devices.onGamepadButton(MesDpadButtonInfo.CUp, function () {
  robotbit.MotorRun(robotbit.Motors.M1A, 255)
  robotbit.MotorRun(robotbit.Motors.M2A, 80)
})

// turn right
devices.onGamepadButton(MesDpadButtonInfo.DUp, function () {
  robotbit.MotorRun(robotbit.Motors.M1A, 80)
  robotbit.MotorRun(robotbit.Motors.M2A, 255)
})

// stop
devices.onGamepadButton(MesDpadButtonInfo._1Up, function () {
  robotbit.MotorStopAll()
})
