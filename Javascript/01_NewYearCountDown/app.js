console.log('NewYear Countdown');
const days = document.querySelector("#days");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");
function CountTime(){
    const currentYear = new Date().getFullYear();
    // console.log(currentYear);
    // console.log(currentYear + 1);

    const currentDate = new Date();
    // console.log(currentDate);

    const newYear = new Date(`January 1 ${currentYear + 1} 00:00:00`);
    // console.log(newYear);

    const diff = newYear - currentDate;
    // console.log(diff);

    const d = Math.floor(diff/1000/60/60/24);
    // console.log(d);
    const h = Math.floor((diff/1000/60/60)%24);
    // console.log(h);
    const m = Math.floor((diff/1000/60)%60);
    // console.log(m);
    const s = Math.floor((diff/1000)%60);
    // console.log(s);

    console.log(d+" "+h+" "+m+" "+s);

    days.innerHTML=d<10?"0"+d:d;
    hours.innerHTML=h<10?"0"+h:h;
    minutes.innerHTML=m<10?"0"+m:m;
    seconds.innerHTML=s<10?"0"+s:s;
}

CountTime();
setInterval(CountTime, 1000);

