function updateClock(){
    const hours = document.getElementById("hour")
    const minutes = document.getElementById("minute")
    const seconds = document.getElementById("second")

    const newDate =new Date()
    const h=newDate.getHours()
    const m=newDate.getMinutes()
    const s=newDate.getSeconds()

    const hourRow = (h - 3) * 30 + m * 0.5;
    const minuteRow  = (m - 15) * 6 + s * 0.1;
    const secondRow  = (s - 15) * 6;

    hours.style.transform = `rotate(${hourRow}deg)`;
    minutes.style.transform = `rotate(${minuteRow}deg)`;
    seconds.style.transform = `rotate(${secondRow}deg)`;
}
updateClock()
setInterval(updateClock,1000)