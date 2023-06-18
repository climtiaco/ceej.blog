function displayCurrentTime() {
    var currentDateTime = new Date();

    var month = currentDateTime.getMonth() + 1;
    var day = currentDateTime.getDate();
    var year = currentDateTime.getFullYear();

    var hours = currentDateTime.getHours();
    var minutes = currentDateTime.getMinutes();
    var seconds = currentDateTime.getSeconds();
    var ampm = hours >= 12 ? "PM" : "AM";

    // Convert to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12;

// Adding leading zeroes to time if necessary
    month = (month < 10 ? "0" : "") + month;
    day = (day < 10 ? "0" : "") + day;
    hours = (hours < 10 ? "0" : "") + hours;
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;

    var dateTimeString = month + "/" + day + "/" + year + " " + hours + ":" + minutes + ":" + seconds + " " + ampm;

    document.getElementById("current-time").textContent = dateTimeString;
}

setInterval(displayCurrentTime, 1000);