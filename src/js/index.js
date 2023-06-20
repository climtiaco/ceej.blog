function displayCurrentTime() {
    var currentTime = new Date();

    let month = currentTime.getMonth() + 1;
    let day = currentTime.getDate();
    let year = currentTime.getFullYear();

    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    let ampm = hours >= 12 ? "PM" : "AM";

    // Convert to 12-hour Format
    hours = hours % 12;
    hours = hours ? hours : 12; // "0" should be displayed as "12"

    // Add leading zeros if necessary
    month = (month < 10 ? "0" : "") + month;
    day = (day < 10 ? "0" : "") + day;
    hours = (hours < 10 ? "0" : "") + hours;
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;

    var timeString = month + "/" + day + "/" + year + ", " + hours + ":" + minutes + ":" + seconds + " " + ampm;

    document.getElementById("current-time").textContent = timeString;
}

setInterval(displayCurrentTime, 1000);