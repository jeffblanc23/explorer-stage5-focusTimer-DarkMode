import Controls from "./controls.js"
import {
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonSet,
    buttonPlus5,
    buttonLess5,
    buttonForest,
    buttonRain,
    buttonCafeteria,
    buttonFireplace,
    buttonLight,
    buttonDark,
    forestVolUp,
    forestVolDown,
    rainVolUp,
    rainVolDown,
    cafeteriaVolUp,
    cafeteriaVolDown,
    fireplaceVolUp,
    fireplaceVolDown
} from "./elements.js"

export default function Events({controls, timer, sound}) {
    buttonPlay.addEventListener('click', () => {
        controls.play()
        timer.countdown()
        sound.pressButton()
    })
    
    buttonPause.addEventListener('click', () => {
        controls.pause()
        timer.hold()
        sound.pressButton()
    })
    
    buttonStop.addEventListener('click', () => {
        controls.reset()
        timer.reset()
        sound.pressButton()
    })

    buttonPlus5.addEventListener('click', () => {
        timer.plus5()
    })

    buttonLess5.addEventListener('click', () => {
        timer.less5()
    })

    buttonForest.addEventListener('click', () => {
        sound.Forest()

        buttonForest.classList.add('marked')
        buttonRain.classList.remove('marked')
        buttonCafeteria.classList.remove('marked')
        buttonFireplace.classList.remove('marked')
    })

    buttonRain.addEventListener('click', () => {
        sound.Rain() 
        
        buttonRain.classList.add('marked')
        buttonForest.classList.remove('marked')
        buttonCafeteria.classList.remove('marked')
        buttonFireplace.classList.remove('marked')
    })

    buttonCafeteria.addEventListener('click', () => {
        sound.Cafeteria()

        buttonCafeteria.classList.add('marked')
        buttonForest.classList.remove('marked')
        buttonRain.classList.remove('marked')
        buttonFireplace.classList.remove('marked')
    })

    buttonFireplace.addEventListener('click', () => {
        sound.Fireplace()
        
        buttonFireplace.classList.add('marked')
        buttonForest.classList.remove('marked')
        buttonRain.classList.remove('marked')
        buttonCafeteria.classList.remove('marked')
    })

    forestVolUp.addEventListener('click', () => {
        sound.volumeUp()
    })

    forestVolDown.addEventListener('click', () => {
        sound.volumeDown()
    })

    rainVolUp.addEventListener('click', () => {
        sound.volumeUp()
    })

    rainVolDown.addEventListener('click', () => {
        sound.volumeDown()
    })

    cafeteriaVolUp.addEventListener('click', () => {
        sound.volumeUp()
    })

    cafeteriaVolDown.addEventListener('click', () => {
        sound.volumeDown()
    })

    fireplaceVolUp.addEventListener('click', () => {
        sound.volumeUp()
    })

    fireplaceVolDown.addEventListener('click', () => {
        sound.volumeDown()
    })

    buttonDark.addEventListener('click', () => {
        buttonLight.classList.remove('hide')
        buttonDark.classList.add('hide')
        document.querySelector('body').classList.toggle('light')
        document.querySelector('body').classList.remove('dark')

        document.querySelector('#timer .set').classList.toggle('light')
        document.querySelector('#timer .set').classList.remove('dark')

        buttonFireplace.classList.toggle('light')
        buttonFireplace.classList.toggle('dark')

        buttonCafeteria.classList.toggle('light')
        buttonCafeteria.classList.toggle('dark')

        buttonRain.classList.toggle('light')
        buttonRain.classList.toggle('dark')

        buttonForest.classList.toggle('light')
        buttonForest.classList.toggle('dark')

        controls.buttonsGoLight()
    })

    buttonLight.addEventListener('click', () => {
        buttonDark.classList.remove('hide')
        buttonLight.classList.add('hide')
        document.querySelector('body').classList.add('dark')
        document.querySelector('body').classList.remove('light')

        document.querySelector('#timer .set').classList.remove('light')
        document.querySelector('#timer .set').classList.add('dark')  

        buttonForest.classList.toggle('dark')
        buttonForest.classList.toggle('light')

        buttonRain.classList.toggle('dark')
        buttonRain.classList.toggle('light')

        buttonCafeteria.classList.toggle('dark')
        buttonCafeteria.classList.toggle('light')

        buttonFireplace.classList.toggle('dark')
        buttonFireplace.classList.toggle('light')
        
        controls.buttonsGoDark()
    })
    
    buttonSet.addEventListener('click', () => {
        let newMinutes = controls.getMinutes()
    
        if (!newMinutes) {
            timer.reset()
            return
        }
    
        timer.updateDisplay(newMinutes, 0)
        timer.updateMinutes(newMinutes)
    })

}