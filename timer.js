function updateTimer() {
    // Set the target date and time
    var target = new Date("May 10, 2023 15:40:00 GMT-0800");

    // Calculate the duration until the target date and time
    var duration = target - new Date();

    // Extract the number of days, hours, minutes, and seconds from the duration
    var days = Math.floor(duration / (1000 * 60 * 60 * 24));
    var hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
    var minutes = Math.floor((duration / (1000 * 60)) % 60);
    var seconds = Math.floor((duration / 1000) % 60);

    // Update the timer element with the remaining time
    var headingElement = document.getElementById("heading");
    var timerElement = document.getElementById("time");
    if (duration <= 0) {
        headingElement.innerHTML = "Welcome To The West Coast!"
        timerElement.innerHTML = "Countdown complete!";
    } else {
        headingElement.innerHTML = "Counting Down Until You're Here:"
        timerElement.innerHTML = days + " days, " + hours + " hours, " + minutes + " minutes, " + seconds + " seconds";
    }
}

// Update the timer every second
setInterval(updateTimer, 1000);