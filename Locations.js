function get_location() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(show_position, show_error);
    } else {
        document.getElementById('location').innerHTML = "Geolocation is not supported by your browser"
    }
}

function show_position(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`)
    .then(response => response.json())
    .then(data => {
        const city = data.address.city || data.address.town || data.address.village;
        const state = data.address.state;

        document.getElementById("location").innerHTML = `City: ${city}\nState: ${state}`
    })
    .catch(error => {
        document.getElementById("location").innerHTML = "Unable to retrieve location data"
    });
}

function show_error(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            document.getElementById("location").innerHTML = "User denied the request for Geolocation.";
            break;
        case error.POSITION_UNAVAILABLE:
            document.getElementById("location").innerHTML = "Location information is unavailable.";
            break;
        case error.TIMEOUT:
            document.getElementById("location").innerHTML = "The request to get user location timed out.";
            break;
        case error.UNKNOWN_ERROR:
            document.getElementById("location").innerHTML = "An unknown error occurred.";
            break;
    }
}

window.onload = get_location