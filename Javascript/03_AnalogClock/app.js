console.log('connected');

const hour=document.querySelector('.hrs');
const minute=document.querySelector('.min');
const second=document.querySelector('.sec');

setInterval(runClock, 1000);

function runClock(){
    const time= new Date();
    const sec= time.getSeconds()/60;
    const min= (sec+time.getMinutes())/60;
    const hrs= (min+time.getHours())/12;

    // console.log( hrs, min, sec);
    hour.style.setProperty('--rotation', hrs*360);
    minute.style.setProperty('--rotation', min*360);
    second.style.setProperty('--rotation', sec*360);
}

const change=document.querySelector('body')

function colorChange(){
    const userEnteredColor=document.getElementById('color').value;
    console.log(userEnteredColor);

    change.style.setProperty('--theme-color', userEnteredColor)

}