let ldate = new Date("1 Jan ,2026 00:00:00").getTime();
let sdate = new Date("1 Jan ,2025 00:00:00").getTime();


function gettime(){
    let now = new Date().getTime();
    let rem = ldate - now;

    if(rem<=0)
    {
        document.getElementById("days").innerHTML = 0;
        document.getElementById("hours").innerHTML = 0;
        document.getElementById("minutes").innerHTML = 0;
        document.getElementById("seconds").innerHTML = 0;

        document.getElementById("bar").style.width = 100 + "%";
        return;
    }
    let days = Math.floor(rem / (1000 * 60 * 60 * 24));
    let hrs = Math.floor((rem % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let mins = Math.floor((rem % (1000 * 60 * 60)) / (1000 * 60));
    let secs = Math.floor((rem % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days==0?'00':days;
    document.getElementById("hours").innerHTML = hrs == 0 ? "00" : hrs;
    document.getElementById("minutes").innerHTML = mins == 0 ? "00" : mins;
    document.getElementById("seconds").innerHTML = secs == 0 ? "00" : secs;

    let covered = now - sdate;
    let cper = covered*100/(ldate-sdate);
    document.getElementById("bar").style.width = cper+'%';

}


setInterval(gettime,1000);