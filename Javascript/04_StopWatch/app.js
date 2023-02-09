const btnStart=document.querySelector('.start');
const btnStop=document.querySelector('.stop');
const btnReset=document.querySelector('.reset');

let hrs=min=sec=ms=0;
let startTimer;

btnStart.addEventListener('click', ()=>{
    // alert('Start Button Clicked');

    btnStart.classList.add('start-active');
    btnStop.classList.remove('stop-active');

    startTimer=setInterval(()=>{
        // console.log('hiii');
        ms++; //ms=ms+1
        if(ms==100){
            sec++;
            ms=0;
        }
        if(sec==60){
            min++;
            sec=0;
        }
        if(min==60){
            hrs++;
            min=0;
        }
        updatedDisplay();
    }, 10);
});

btnStop.addEventListener('click', ()=>{
    // alert('Stop Button Clicked');

    btnStart.classList.remove('start-active');
    btnStop.classList.add('stop-active');

    clearInterval(startTimer);
});

btnReset.addEventListener('click', ()=>{
    // alert('Reset Button Clicked');

    btnStart.classList.remove('start-active');
    btnStop.classList.remove('stop-active');

    hrs=min=sec=ms=0;
    clearInterval(startTimer);
    updatedDisplay();
});


function updatedDisplay(){
    phrs=hrs<10?'0'+hrs:hrs;
    pmin=min<10?'0'+min:min;
    psec=sec<10?'0'+sec:sec;
    pms=ms<10?'0'+ms:ms;
    document.querySelector('.hrs').innerText= phrs;
    document.querySelector('.min').innerText= pmin;
    document.querySelector('.sec').innerText= psec;
    document.querySelector('.ms').innerText= pms;
}
