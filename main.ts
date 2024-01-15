/* Copyright (c) 2020 MTHS All rights reserved
 * Created by: Ihor Chernyshev
 * Created on: Jan 2024
 * This program will allow you to control Micro:Bit from your phone via Bluetooth
*/

basic.showIcon(IconNames.Happy)

devices.onGamepadButton(MesDpadButtonInfo.ADown, function () {
  robotbit.MotorRun(robotbit.Motors.M1A, 200)
  robotbit.MotorRun(robotbit.Motors.M2A, 200)
})

devices.onGamepadButton(MesDpadButtonInfo.BDown, function () {
  robotbit.MotorRun(robotbit.Motors.M1A, -200)
  robotbit.MotorRun(robotbit.Motors.M2A, -200)
})
