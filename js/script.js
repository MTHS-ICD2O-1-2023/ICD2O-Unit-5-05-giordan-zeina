// Copyright (c) 2024 Giordan Zeina All rights reserved
//
// Created by: Giordan Zeina
// Created on: May 2024
// This file contains the JS functions for index.html

"use strict"

function myButtonClicked() {
  // input
  const lengthA = parseFloat(document.getElementById("side-a").value)
  const lengthB = parseFloat(document.getElementById("side-b").value)
  const lengthC = parseFloat(document.getElementById("side-c").value)

  // unsing the cosin law
  const angleA =
    Math.acos(
      (lengthB ** 2 + lengthC ** 2 - lengthA ** 2) / (2 * lengthB * lengthC)
    ) *
    (180 / Math.PI)
  const angleB =
    Math.acos(
      (lengthC ** 2 + lengthA ** 2 - lengthB ** 2) / (2 * lengthC * lengthA)
    ) *
    (180 / Math.PI)
  const angleC =
    Math.acos(
      (lengthA ** 2 + lengthB ** 2 - lengthC ** 2) / (2 * lengthA * lengthB)
    ) *
    (180 / Math.PI)

  const angleAFormatted = Number(angleA.toFixed(2))
  const angleBFormatted = Number(angleB.toFixed(2))
  const angleCFormatted = Number(angleC.toFixed(2))

  const sumOfAngles = angleAFormatted + angleBFormatted + angleCFormatted

  if (sumOfAngles == 180) {
    if (
      angleAFormatted != angleBFormatted &&
      angleAFormatted != angleCFormatted &&
      angleBFormatted != angleCFormatted
    ) {
      if (
        angleAFormatted == 90 ||
        angleBFormatted == 90 ||
        angleCFormatted == 90
      ) {
        document.getElementById("answer").innerHTML =
          "This is a right angle triangle."
      } else {
        document.getElementById("answer").innerHTML =
          "This is a scalene triangle."
      }
    } else if (
      angleAFormatted == angleBFormatted &&
      angleAFormatted == angleCFormatted
    ) {
      document.getElementById("answer").innerHTML =
        "This is a equilateral triangle"
    } else {
      if (
        angleAFormatted == 90 ||
        angleBFormatted == 90 ||
        angleCFormatted == 90
      ) {
        document.getElementById("answer").innerHTML =
          "This is a right angle triangle."
      } else {
        document.getElementById("answer").innerHTML =
          "This is an isosceles triangle."
      }
    }
  } else {
    document.getElementById("answer").innerHTML =
      "Please enter a valid triangle."
  }
}
