function countdown(){
    theDay = new Date("2023/8/17").getTime()
    let x = setInterval(function () {
        let now = new Date();
        let distance = theDay - now.getTime();

        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        hours = hours.toLocaleString(undefined, {minimumIntegerDigits: 2});
        minutes = minutes.toLocaleString(undefined, {minimumIntegerDigits: 2});
        seconds = seconds.toLocaleString(undefined, {minimumIntegerDigits: 2});

        let d = "d "
        let h = "h "
        let m = "m "
        let s = "s "

        if (days + hours + minutes == 0) {
            document.querySelector(".countdown").innerText = seconds + s;
        }
        else if (days + hours == 0) {
            console.log("d"+days)
            console.log('h'+hours)
            document.querySelector(".countdown").innerText = minutes + m + seconds + s;
        }
        else if (days == 0) {
            document.querySelector(".countdown").innerText = hours + h
                + minutes + m + seconds + s;
        }
        else {
            document.querySelector(".countdown").innerText = days + d + hours + h
                + minutes + m + seconds + s;
        }

        // If the count down is finished, write some text 
        if (distance < 0) {
            clearInterval(x);
            document.querySelector(".tekma-countdown").innerText = "LIVE!";
        }

    }, 1000);
}
