const time_days = document.getElementById("time_days");
const time_hours = document.getElementById("time_hours");
const time_minutes = document.getElementById("time_minutes");
const time_seconds = document.getElementById("time_seconds");

function updateCountdown() {
    let target = new Date(2026, 0);
    let remaining_time_in_seconds = Math.floor((target.getTime() - now.getTime()) / 1000);

    let seconds = remaining_time_in_seconds % 60;
    let minutes = Math.floor(remaining_time_in_seconds / 60) % 60;
    let hours = Math.floor(remaining_time_in_seconds / 60 / 60) % 24;
    let days = Math.floor(remaining_time_in_seconds / 60 / 60 / 24);

    if (seconds < 10) seconds = "0" + seconds;
    if (minutes < 10) minutes = "0" + minutes;
    if (hours < 10) hours = "0" + hours;
    if (days < 10) days = "0" + days;

    time_seconds.innerHTML = seconds;
    time_minutes.innerHTML = minutes;
    time_hours.innerHTML = hours;
    time_days.innerHTML = days;

    setTimeout(updateCountdown, update_interval);
}

updateCountdown();