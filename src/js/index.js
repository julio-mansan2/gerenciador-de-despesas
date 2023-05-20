const date = new Date();
const weekDay = date.getDay();
const graphic = document.querySelectorAll('.graphic')

function mudarCorDoGrafico () {
    if (weekDay === 0) {
        graphic[6].style.background = 'hsl(186, 34%, 60%)'
        graphic[0].style.background = 'hsl(10, 79%, 65%)'
        graphic[1].style.background = 'hsl(10, 79%, 65%)'
        graphic[2].style.background = 'hsl(10, 79%, 65%)'
        graphic[3].style.background = 'hsl(10, 79%, 65%)'
        graphic[4].style.background = 'hsl(10, 79%, 65%)'
        graphic[5].style.background = 'hsl(10, 79%, 65%)'
    } else if (weekDay === 1) {
        graphic[6].style.background = 'hsl(10, 79%, 65%)'
        graphic[0].style.background = 'hsl(186, 34%, 60%)'
        graphic[1].style.background = 'hsl(10, 79%, 65%)'
        graphic[2].style.background = 'hsl(10, 79%, 65%)'
        graphic[3].style.background = 'hsl(10, 79%, 65%)'
        graphic[4].style.background = 'hsl(10, 79%, 65%)'
        graphic[5].style.background = 'hsl(10, 79%, 65%)'
    } else if (weekDay === 2) {
        graphic[6].style.background = 'hsl(10, 79%, 65%)'
        graphic[0].style.background = 'hsl(10, 79%, 65%)'
        graphic[1].style.background = 'hsl(186, 34%, 60%)'
        graphic[2].style.background = 'hsl(10, 79%, 65%)'
        graphic[3].style.background = 'hsl(10, 79%, 65%)'
        graphic[4].style.background = 'hsl(10, 79%, 65%)'
        graphic[5].style.background = 'hsl(10, 79%, 65%)'
    } else if (weekDay === 3) {
        graphic[6].style.background = 'hsl(10, 79%, 65%)'
        graphic[0].style.background = 'hsl(10, 79%, 65%)'
        graphic[1].style.background = 'hsl(10, 79%, 65%)'
        graphic[2].style.background = 'hsl(186, 34%, 60%)'
        graphic[3].style.background = 'hsl(10, 79%, 65%)'
        graphic[4].style.background = 'hsl(10, 79%, 65%)'
        graphic[5].style.background = 'hsl(10, 79%, 65%)'
    } else if (weekDay === 4) {
        graphic[6].style.background = 'hsl(10, 79%, 65%)'
        graphic[0].style.background = 'hsl(10, 79%, 65%)'
        graphic[1].style.background = 'hsl(10, 79%, 65%)'
        graphic[2].style.background = 'hsl(10, 79%, 65%)'
        graphic[3].style.background = 'hsl(186, 34%, 60%)'
        graphic[4].style.background = 'hsl(10, 79%, 65%)'
        graphic[5].style.background = 'hsl(10, 79%, 65%)'
    } else if (weekDay === 5) {
        graphic[6].style.background = 'hsl(10, 79%, 65%)'
        graphic[0].style.background = 'hsl(10, 79%, 65%)'
        graphic[1].style.background = 'hsl(10, 79%, 65%)'
        graphic[2].style.background = 'hsl(10, 79%, 65%)'
        graphic[3].style.background = 'hsl(10, 79%, 65%)'
        graphic[4].style.background = 'hsl(186, 34%, 60%)'
        graphic[5].style.background = 'hsl(10, 79%, 65%)'
    } else if (weekDay === 6) {
        graphic[6].style.background = 'hsl(10, 79%, 65%)'
        graphic[0].style.background = 'hsl(10, 79%, 65%)'
        graphic[1].style.background = 'hsl(10, 79%, 65%)'
        graphic[2].style.background = 'hsl(10, 79%, 65%)'
        graphic[3].style.background = 'hsl(10, 79%, 65%)'
        graphic[4].style.background = 'hsl(10, 79%, 65%)'
        graphic[5].style.background = 'hsl(186, 34%, 60%)'
    }
}


mudarCorDoGrafico()