
//function to convert between C and F
function convert(degree) {
    if (degree == "C") {
        F = document.getElementById("c").value * 9 / 5 + 32;
        document.getElementById("f").value = Math.round(F);
    } else	{
        C = (document.getElementById("f").value -32) * 5 / 9;
        document.getElementById("c").value = Math.round(C);
    }
}

//function to convert between C and K
function convert2(degree) {
    if (degree == "C2") {
        K = (document.getElementById("cToK").value + 273.15);
        document.getElementById("kToC").value = Math.round(K);
    } else {
        C2 = (document.getElementById("kToC").value -273.15);
        document.getElementById("cToK").value = Math.round(C2);
    }
}

//function to convert between F and K
function convert3(degree) {
    if (degree == "F2") {
        K2 = (document.getElementById("fToK").value +459.67) * 5/9;
        document.getElementById("kToF").value = Math.round(K2);
    } else {
        F2 = document.getElementById("kToF").value * (9/5) - 459.67;
        document.getElementById("fToK").value = Math.round(F2);
    }
}

