setInterval(setClock,1000)

var secHand= document.querySelector('[data-seconds-hand]')
var minHand= document.querySelector('[data-minutes-hand]')
var hourHand= document.querySelector('[data-hour-hand]')

var dateDiv=document.getElementById("date")
var monthDiv=document.getElementById("month")
var yearDiv=document.getElementById("year")

function setClock(){
    var date= new Date();
    const seconds = date.getSeconds()/60;
    const minutes = (seconds+date.getMinutes())/60;
    const hours =(minutes+ date.getHours())/12;
    Rotation(secHand,seconds)
    Rotation(minHand,minutes)
    Rotation(hourHand,hours)
}
function Rotation(element, rotationRatio){
    element.style.setProperty('--rotation', rotationRatio*360)
}
setClock()

var date= new Date();
var curDate=date.getDate()
var month=date.getMonth()+1
var year =date.getFullYear()

dateDiv.innerHTML=`${curDate}`
monthDiv.innerHTML=`${month}`
yearDiv.innerHTML=`${year}`


