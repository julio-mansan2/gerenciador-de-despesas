const date = new Date();
const weekDay = date.getDay();
const graphic = document.querySelectorAll('.graphic');

function mudarCorDoGrafico() {
    const colors = [
        'hsl(186, 34%, 60%)',
        'hsl(10, 79%, 65%)',
        'hsl(10, 79%, 65%)',
        'hsl(10, 79%, 65%)',
        'hsl(10, 79%, 65%)',
        'hsl(10, 79%, 65%)',
        'hsl(10, 79%, 65%)'
    ];

    for (let i = 0; i < graphic.length; i++) {
        if (i === weekDay) {
            graphic[i].style.background = colors[0];
        } else {
            graphic[i].style.background = colors[1];
        }
    }
}

mudarCorDoGrafico();