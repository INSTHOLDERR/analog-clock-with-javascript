function updateClock(){
    const hours = document.getElementById("hour")
    const minutes = document.getElementById("minute")
    const seconds = document.getElementById("second")

    const newDate =new Date()
    const h=newDate.getHours()
    const m=newDate.getMinutes()
    const s=newDate.getSeconds()

   const hourRow =  ((h / 12) * 360) + ((m/60)*30) + 90;
   const minuteRow  = ((m/ 60) * 360) + ((s/60)*6) + 90;
   const secondRow  =((s / 60) * 360) + 90

    hours.style.transform = `rotate(${hourRow}deg)`
    minutes.style.transform =`rotate(${minuteRow}deg)`
    seconds.style.transform =  `rotate(${secondRow}deg)`
}
updateClock()
setInterval(updateClock,1000)