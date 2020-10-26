
// TAURUS:
// Apr 
// Your intense energy makes you a great candidate for a leadership position right now, so if you are…

// GEMINI: 
// May  
// If you aren't sure if you are ready to commit to a party, a date, a new job, or anything else that…

// CANCER: 
// Jun
// Too many different elements in your life are overlapping with each other right now—and it's your…

// LEO: 
// Jul 
// The issues you'll be dealing with today are very complicated ones—you will have to navigate your…

// VIRGO: 
// Aug
// You'll get along best with people who appeal to your more analytical side, today. Surprisingly, all…

// LIBRA: 
// Sep 
// Pick a cultural event that's coming up and get some tickets for it today.

// SCORPIO: 
// Oct 
// Someone will challenge a belief that you've held for a very long time today—and they will say an…

// SAGITTARIUS: 
// Nov 
// Someone in your life needs to step up and take on more responsibility—and you need to tell them to....

// CAPRICORN: 
// Dec 
// Breaking the rules is not always a bad thing—especially if the rules limit your creativity. 


function showHoro() {
    event.preventDefault()
    let horoscope 
    let monthInput = document.getElementById("monthInput").value;

    switch (monthInput) {
    case "Jan":
        horoscope = `<h2>Aquarius</h2> <br>
        <img src="assets/img/icon_aquarius.png">
        <p>Have you been feeling a bit bored with your life lately? Well, good news! Today offers you a great…</p> <br>`
    break
    
    case "Feb":
        horoscope = `<h2>Pisces</h2> <br>
        <img src="assets/img/icon_pisces.png">
        <p>Communication is very important today — written, spoken, and even nonverbal body language will all…</p> <br>`
        break
    
    case "Mar":
        horoscope = `<h2>Aries</h2> <br>
        <img src="assets/img/icon_pisces.png">
        <p>Today your patience might be tested when one or more of your projects gets put on hold by someone…</p> <br>`
        break

    }

    document.getElementById("output").innerHTML = horoscope
}