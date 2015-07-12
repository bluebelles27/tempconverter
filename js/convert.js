//Temperature Conversion Function(s)
//Modified from examples on W3C

function convertTemperature() {
    var temp1, temp2, tempunits1, tempunits2;
    temp1 = document.getElementById("temp1").value;
    tempunits1 = document.getElementById("tempunits1").value;
    tempunits2 = document.getElementById("tempunits2").value;

    if (tempunits1 === tempunits2) {
        alert("You have entered the same units.")
    } else if (tempunits1 === "Celsius" && tempunits2 === "Fahrenheit"){
        document.getElementById("temp2").value = (temp1 * (9/5) + 32);
    } else if (tempunits1 === "Celsius" && tempunits2 === "Kelvin") {
        document.getElementById("temp2").value = (Number(temp1) + 273.15);
    } else if (tempunits1 === "Fahrenheit" && tempunits2 === "Celsius") {
        document.getElementById("temp2").value = ((temp1 - 32) * (5/9));
    } else if (tempunits1 === "Fahrenheit" && tempunits2 === "Kelvin") {
        document.getElementById("temp2").value = ((temp1 - 32) * (5/9) + 273.15);
    } else if (tempunits1 === "Kelvin" && tempunits2 === "Celsius") {
        document.getElementById("temp2").value = (temp1 - 273.15);
    } else if (tempunits1 === "Kelvin" && tempunits2 === "Fahrenheit") {
        document.getElementById("temp2").value = ((temp1 - 273.15) * (9/5) +32);
    } else {
        alert("You have entered invalid data");
    }
}

function convertLength() {
    var length1, length2, length1, length2;
    length1 = document.getElementById("length1").value;
    lengthunits1 = document.getElementById("lengthunits1").value;
    lengthunits2 = document.getElementById("lengthunits2").value;

    if (lengthunits1 === lengthunits2) {
        alert("You have entered the same units.")
    } else if (lengthunits1 === "Centimeters" && lengthunits2 === "Inches"){
        document.getElementById("length2").value = (length1 * 0.39370);
    } else if (lengthunits1 === "Centimeters" && lengthunits2 === "Feet") {
        document.getElementById("length2").value = (length1 * 0.032808);
    } else if (lengthunits1 === "Inches" && lengthunits2 === "Centimeters") {
        document.getElementById("length2").value = (length1 / 0.39370);
    } else if (lengthunits1 === "Inches" && lengthunits2 === "Feet") {
        document.getElementById("length2").value = (length1 / 12);
    } else if (lengthunits1 === "Feet" && lengthunits2 === "Centimeters") {
        document.getElementById("length2").value = (length1 / 0.032808);
    } else if (lengthunits1 === "Feet" && lengthunits2 === "Inches") {
        document.getElementById("length2").value = (length1 * 12);
    } else {
        alert("You have entered invalid data");
    }
}

function convertMass() {
    var mass1, mass2, mass1, mass2;
    mass1 = document.getElementById("mass1").value;
    massunits1 = document.getElementById("massunits1").value;
    massunits2 = document.getElementById("massunits2").value;

    if (massunits1 === massunits2) {
        alert("You have entered the same units.")
    } else if (massunits1 === "Ounces" && massunits2 === "Pounds"){
        document.getElementById("mass2").value = (mass1 / 16);
    } else if (massunits1 === "Ounces" && lengthunits2 === "Grams") {
        document.getElementById("mass2").value = (mass1 * 28.3495231);
    } else if (massunits1 === "Pounds" && lengthunits2 === "Ounces") {
        document.getElementById("mass2").value = (mass1 * 16);
    } else if (massunits1 === "Pounds" && lengthunits2 === "Grams") {
        document.getElementById("mass2").value = (mass1 * 453.59237);
    } else if (massunits1 === "Grams" && lengthunits2 === "Ounces") {
        document.getElementById("mass2").value = (mass1 / 28.3495231);
    } else if (massunits1 === "Grams" && lengthunits2 === "Pounds") {
        document.getElementById("mass2").value = (mass1 / 453.59237);
    } else {
        alert("You have entered invalid data");
    }
}

