const countcontainer = document.querySelector('.countdown-container')
const date = document.querySelector('#date');
const days1 = document.querySelector('#days');
const hours1 = document.querySelector('#hours');
const mins1= document.querySelector('#mins');
const secs1 = document.querySelector('#seconds')
const birthday =new Date('06/19/2022');
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24; // milliseconds 
//const today = new Date();
//console.log(today);
let timerId;


function countDown(){
    const today = new Date();
    const timeSpan = birthday - today;
    
    
    console.log(timeSpan);
    
    if(timeSpan <= -day){
        countcontainer.innerText = "HOPE YOU HAD A GOOD BIRTHDAY";
        clearInterval(timerId);
        return
    }

    if(timeSpan<=0){
        countcontainer.innerHTML = "HAPPY BIRTHDAYYYY!!";
        clearInterval(timerId);
        return;
    }

    const days = Math.floor(timeSpan/day);
    const hours = Math.floor((timeSpan % day)/ hour);
    const minutes = Math.floor((timeSpan% hour)/ minute);
    const seconds = Math.floor((timeSpan % minute) / second);

    days1.innerHTML = days;
    hours1.innerHTML = hours;
    mins1.innerHTML = minutes;
    secs1.innerHTML = seconds;


}
//console.log(newYears)
timerId = setInterval(countDown, second);
