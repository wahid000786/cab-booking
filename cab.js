const outstation = document.getElementById("outstation");
const local = document.getElementById("local");
const airport = document.getElementById("airport");
const trip = document.getElementById("trip");

function showoutstation() {
    outstation.style.display = "block";
    local.style.display = "none";
    airport.style.display = "none";
}


function showlocal() {
    outstation.style.display = "none";
    local.style.display = "block";
    airport.style.display = "none";
}


function showairport() {
    outstation.style.display = "none";
    local.style.display = "none";
    airport.style.display = "block";
}


function showtrip() {
    if (trip.value == "to-the-airport") {
        document.getElementById("tripview").innerHTML = "Pick Up Address"            
    }
    else {
        document.getElementById("tripview").innerHTML = "Drop Address"
    }
}



