function showHoro() {
    event.preventDefault()
    let horoscope 
    let monthInput = document.getElementById("monthInput").value;

    switch (monthInput) {
    case "Jan":
        horoscope = `<h2>Aquarius</h2> <br>
        <img src="assets/img/icon_aquarius.png">
        <p>Have you been feeling a bit bored with your life lately? Well, good news! Today offers you a great…</p>`
    break
    
    case "Feb":
        horoscope = `<h2>Pisces</h2> <br>
        <img src="assets/img/icon_pisces.png">
        <p>Communication is very important today — written, spoken, and even nonverbal body language will all…</p>`
        break
    
    case "Mar":
        horoscope = `<h2>Aries</h2> <br>
        <img src="assets/img/icon_aries.png">
        <p>Today your patience might be tested when one or more of your projects gets put on hold by someone…</p>`
        break

    case "Apr":
        horoscope = `<h2>Taurus</h2> <br>
        <img src="assets/img/icon_taurus.png">
        <p>Your intense energy makes you a great candidate for a leadership position right now, so if you are…</p>`
        break

    case "May":
        horoscope = `<h2>Gemini</h2> <br>
        <img src="assets/img/icon_gemini.png">
        <p>If you aren't sure if you are ready to commit to a party, a date, a new job, or anything else that…</p>`
        break

    case "Jun":
        horoscope = `<h2>Cancer</h2> <br>
        <img src="assets/img/icon_cancer.png">
        <p>Too many different elements in your life are overlapping with each other right now — and it's your…</p>`
        break
    
    case "Jul":
        horoscope = `<h2>Leo</h2> <br>
        <img src="assets/img/icon_leo.png">
        <p>The issues you'll be dealing with today are very complicated ones—you will have to navigate your…</p>`
        break

    case "Aug":
        horoscope = `<h2>Virgo</h2> <br>
        <img src="assets/img/icon_virgo.png">
        <p>You'll get along best with people who appeal to your more analytical side, today. Surprisingly, all…</p>`
        break

    case "Sep":
        horoscope = `<h2>Libra</h2> <br>
        <img src="assets/img/icon_libra.png">
        <p>Pick a cultural event that's coming up and get some tickets for it today.</p>`
        break
    
    case "Oct":
        horoscope = `<h2>Scorpio</h2> <br>
        <img src="assets/img/icon_scorpio.png">
        <p>Someone will challenge a belief that you've held for a very long time today—and they will say an…</p>`
        break

    case "Nov":
        horoscope = `<h2>SAGITTARIUS</h2> <br>
        <img src="assets/img/icon_sagittarius.png">
        <p>Someone in your life needs to step up and take on more responsibility—and you need to tell them to....</p>`
        break

    case "Dec":
        horoscope = `<h2>Capricorn</h2> <br>
        <img src="assets/img/icon_capricorn.png">
        <p>Breaking the rules is not always a bad thing—especially if the rules limit your creativity.</p>`
        break
        default :
        horoscope = `<h2>Bitte Monat eingeben!</h2>`
    }
    
    document.getElementById("output").innerHTML = horoscope
}