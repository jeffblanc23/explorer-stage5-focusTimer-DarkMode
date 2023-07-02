export default function() {

    const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
    const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")

    const buttonForest = new Audio("https://drive.google.com/u/0/uc?id=1CRHkV72WUMdcqec5GT_KdsqFz0z3VAOA&export=download")
    const buttonRain = new Audio("https://drive.google.com/u/0/uc?id=1Ip8xBqAUJ-bty51Wz8JBtX_bWXCgA0P2&export=download")
    const buttonCafeteria = new Audio("https://drive.google.com/u/0/uc?id=1OxLKpCwg2wrxXFNUHgZxJ51QEt0ac5RA&export=download")
    const buttonFireplace = new Audio("https://drive.google.com/u/0/uc?id=1MakaBPxJvTa_whaSM3kEbRcxiVd1GRCB&export=download")
    
    buttonForest.volume = 0.5;
    buttonRain.volume = 0.5;
    buttonFireplace.volume = 0.5;
    buttonCafeteria.volume = 0.5;
    
    function pressButton() {
        buttonPressAudio.play()
    }

    function timeEnd() {
        kitchenTimer.play()
    }
    
    function Forest() {
        buttonForest.play()
        buttonForest.loop = true
        buttonRain.pause()
        buttonRain.currentTime = 0
        buttonCafeteria.pause()
        buttonCafeteria.currentTime = 0
        buttonFireplace.pause()
        buttonFireplace.currentTime = 0
    }

    function Rain() {
        buttonRain.play()
        buttonRain.loop = true
        buttonForest.pause()
        buttonForest.currentTime = 0
        buttonCafeteria.pause()
        buttonCafeteria.currentTime = 0
        buttonFireplace.pause()
        buttonFireplace.currentTime = 0
    }

    function Fireplace() {
        buttonFireplace.play()
        buttonFireplace.loop = true
        buttonForest.pause()
        buttonForest.currentTime = 0
        buttonRain.pause()
        buttonRain.currentTime = 0
        buttonCafeteria.pause()
        buttonCafeteria.currentTime = 0
    }

    function Cafeteria() {
        buttonCafeteria.play()
        buttonCafeteria.loop = true
        buttonForest.pause()
        buttonForest.currentTime = 0
        buttonRain.pause()
        buttonRain.currentTime = 0
        buttonFireplace.pause()
        buttonFireplace.currentTime = 0
    }

    function volumeUp() {
        if (!buttonForest.paused && buttonForest.volume + 0.10 <= 1) {
            buttonForest.volume += 0.10
            if (buttonForest.volume > 0.9) buttonForest.volume = 1
            console.log('Volume ' + (buttonForest.volume*10).toFixed(1))}
        if (!buttonRain.paused && buttonRain.volume + 0.10 <= 1) {
            buttonRain.volume += 0.10
            if (buttonRain.volume > 0.9) buttonRain.volume = 1
            console.log('Volume ' + (buttonRain.volume*10).toFixed(1))}
        if (!buttonCafeteria.paused && buttonCafeteria.volume + 0.10 <= 1) {
            buttonCafeteria.volume += 0.10
            if (buttonForest.volume > 0.9) buttonCafeteria.volume = 1
            console.log('Volume ' + (buttonCafeteria.volume*10).toFixed(1))}
        if (!buttonFireplace.paused && buttonFireplace.volume + 0.10 <= 1) {
            buttonFireplace.volume += 0.10
            if (buttonFireplace.volume > 0.9) buttonFireplace.volume = 1
            console.log('Volume ' + (buttonFireplace.volume*10).toFixed(1))}
    }

    function volumeDown() {
        if (!buttonForest.paused && buttonForest.volume - 0.10 >= 0) {
            buttonForest.volume -= 0.10 
            if (buttonForest.volume < 0.1) buttonForest.volume = 0
            console.log('Volume '+ (buttonForest.volume*10).toFixed(1))}
        if (!buttonRain.paused && buttonRain.volume - 0.10 >= 0) {
            buttonRain.volume -= 0.10 
            if (buttonRain.volume < 0.1) buttonRain.volume = 0
            console.log('Volume '+ (buttonRain.volume*10).toFixed(1))}
        if (!buttonCafeteria.paused && buttonCafeteria.volume - 0.10 >= 0) {
            buttonCafeteria.volume -= 0.10 
            if (buttonCafeteria.volume < 0.1) buttonCafeteria.volume = 0
            console.log('Volume '+ (buttonCafeteria.volume*10).toFixed(1))}
        if (!buttonFireplace.paused && buttonFireplace.volume - 0.10 >= 0) {
            buttonFireplace.volume -= 0.10 
            if (buttonFireplace.volume < 0.1) buttonFireplace.volume = 0
            console.log('Volume '+ (buttonFireplace.volume*10).toFixed(1))}
    }

    return {
        pressButton,
        timeEnd,
        Forest,
        Rain,
        Fireplace,
        Cafeteria,
        volumeUp,
        volumeDown
    }
}