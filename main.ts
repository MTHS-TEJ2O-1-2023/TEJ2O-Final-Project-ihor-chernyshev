/* Copyright (c) 2020 MTHS All rights reserved
 * Created by: Ihor Chernyshev
 * Created on: Jan 2024
 * This program will allow you to control Micro:Bit from your phone via Bluetooth
*/

// setup
basic.showIcon(IconNames.Happy)

// says that bluetooh is connceted
bluetooth.onBluetoothConnected(function () {
  pins.digitalWritePin(DigitalPin.P2, 1)
  basic.pause(300)
  pins.digitalWritePin(DigitalPin.P2, 0)
})

// go straight
devices.onGamepadButton(MesDpadButtonInfo.AUp, function () {
  robotbit.MotorRun(robotbit.Motors.M1A, 250)
  robotbit.MotorRun(robotbit.Motors.M2A, 250)
})

// go back
devices.onGamepadButton(MesDpadButtonInfo.BUp, function () {
  robotbit.MotorRun(robotbit.Motors.M1A, -250)
  robotbit.MotorRun(robotbit.Motors.M2A, -250)
})

// turn left
devices.onGamepadButton(MesDpadButtonInfo.CUp, function () {
  robotbit.MotorRun(robotbit.Motors.M1A, 250)
  robotbit.MotorRun(robotbit.Motors.M2A, 50)
})

// turn right
devices.onGamepadButton(MesDpadButtonInfo.DUp, function () {
  robotbit.MotorRun(robotbit.Motors.M1A, 50)
  robotbit.MotorRun(robotbit.Motors.M2A, 250)
})

// stop
devices.onGamepadButton(MesDpadButtonInfo._1Up, function () {
  robotbit.MotorStopAll()
})

// turn on lights
devices.onGamepadButton(MesDpadButtonInfo._3Up, function () {
  pins.digitalWritePin(DigitalPin.P1, 1)
})

// turn off lights
devices.onGamepadButton(MesDpadButtonInfo._4Up, function () {
  pins.digitalWritePin(DigitalPin.P1, 0)
})

// if bluetooth is disconnected
bluetooth.onBluetoothDisconnected(function () {
  robotbit.MotorStopAll()
  pins.digitalWritePin(DigitalPin.P2, 1)
})
