let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let seconds = document.getElementById("seconds");

let clock = setInterval (
    function time (){
let date_now = new Date ();
let hr = date_now.getHours();
let min = date_now.getMinutes();
let sec = date_now.getSeconds();


hour.textContent = hr;
minute.textContent = min;
seconds.textContent = sec;

    },1000
)