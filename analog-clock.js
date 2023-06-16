
let hour = document.getElementById("hours");
let minute = document.getElementById("minutes");
let second = document.getElementById("seconds");
let day = document.getElementById("day");
setInterval(() => {
    let d = new Date;
    let htime = d.getHours();
    let mtime = d.getMinutes();
    let stime = d.getSeconds();
    let weekDay = d.getDay();

    let hrotate = 30 * htime + mtime/2;
    let mrotate = 6 * mtime;
    let srotate = 6 * stime;

        if(weekDay == 1){ 
            day.innerText = 'Monday';
        }
        else if(weekDay == 2){ 
            day.innerText = 'Tuesday';
        }
        else if(weekDay == 3){ 
            day.innerText = 'Wednesday';
        }
        else if(weekDay == 4){ 
            day.innerText = 'Thursday';
        }
        else if(weekDay == 5){ 
            day.innerText = 'Friday';
        }
        else if(weekDay == 6){ 
            day.innerText = 'Saturday';
        }
        else {
            day.innerText = 'Sunday';
        }
    // day.innerText = weekDay;

    hour.style.transform = `rotate(${hrotate}deg)`
    minute.style.transform = `rotate(${mrotate}deg)`
    second.style.transform = `rotate(${srotate}deg)`
}, 1000);