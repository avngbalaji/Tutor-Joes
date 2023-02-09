const clock = document.querySelector('.clock');

function runClock(){
    var time= new Date();
    // console.log(time);
    var hrs=time.getHours();
    // console.log(hrs);
    var min=time.getMinutes();
    // console.log(min);
    var sec=time.getSeconds();
    // console.log(sec);
    // var txt="AM"
    // console.log(txt);
    // if(hrs>12){
    //     hrs=hrs-12;
    //     txt="PM";
    // }else if(hrs==0){
    //     hrs=12;
    //     txt="AM";
    // }
    hrs=hrs<10?'0'+hrs:hrs;
    min=min<10?'0'+min:min;
    sec=sec<10?'0'+sec:sec;

    // clock.innerHTML=`${hrs}:${min}:${sec} - ${txt}`
    clock.innerHTML=`${hrs}:${min}:${sec}`

    if(sec%2==0){
        // console.log('even sec');
    }
    else{
        // console.log('odd sec');

    }
}

runClock();
setInterval(runClock, 1000);