export default function Controls({
    buttonPlay,
    buttonPause,
    buttonsGoDark,
    buttonsGoLight
}) {

    function play() {
        buttonPlay.classList.add('hide')
        buttonPause.classList.remove('hide')
        //buttonSet.classList.add('hide')
        //buttonStop.classList.remove('hide')
    }

    function pause() {
        buttonPause.classList.add('hide')
        buttonPlay.classList.remove('hide')
    }

    function reset() {
        //buttonStop.classList.add('hide')
        //buttonSet.classList.remove('hide')
        buttonPause.classList.add('hide')
        buttonPlay.classList.remove('hide')
    }

    function buttonsGoDark() {
        document.querySelector('#controls button.play svg').classList.remove('light')
        document.querySelector('#controls button.play svg').classList.add('dark')

        document.querySelector('#controls button.pause svg').classList.remove('light')
        document.querySelector('#controls button.pause svg').classList.add('dark')

        document.querySelector('#controls button.stop svg').classList.remove('light')
        document.querySelector('#controls button.stop svg').classList.add('dark')

        document.querySelector('#controls button.plus5 svg').classList.remove('light')
        document.querySelector('#controls button.plus5 svg').classList.add('dark')

        document.querySelector('#controls button.less5 svg').classList.remove('light')
        document.querySelector('#controls button.less5 svg').classList.add('dark')
    }

    function buttonsGoLight() {
        document.querySelector('#controls button.play svg').classList.toggle('light')
        document.querySelector('#controls button.play svg').classList.remove('dark')

        document.querySelector('#controls button.pause svg').classList.toggle('light')
        document.querySelector('#controls button.pause svg').classList.remove('dark')

        document.querySelector('#controls button.stop svg').classList.toggle('light')
        document.querySelector('#controls button.stop svg').classList.remove('dark')

        document.querySelector('#controls button.plus5 svg').classList.toggle('light')
        document.querySelector('#controls button.plus5 svg').classList.remove('dark')

        document.querySelector('#controls button.less5 svg').classList.toggle('light')
        document.querySelector('#controls button.less5 svg').classList.remove('dark')
    }

    function getMinutes() {
        let newMinutes = prompt('Quantos minutos?') 
        if (!newMinutes) {
            return false
        }

        return newMinutes
    }

    return {
        reset,
        play,
        pause,
        getMinutes,
        buttonsGoDark,
        buttonsGoLight
    }
}
