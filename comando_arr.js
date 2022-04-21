window.addEventListener('load', () => {
    const display = document.querySelector('.display');
    const keypad = document.getElementsByClassName('boton');

    const keypadArray = Array.from(keypad);

    keypadArray.forEach((button) => {
        button.addEventListener('click', () => {
            calculadora(button, display)
        })
    })
});

function calculadora(button, display) {
    switch (button.innerHTML) {
        case 'DEL':
            borrar(display);
            break;

        case '=': 
            calcular(display);
            break;

        case 'RESET':
            borrar(display, button);
            break;

        default:
            actualizar(display, button);
            break;
    }
}

function calcular(display) {
    display.innerHTML = eval(display.innerHTML)
}

function actualizar(display, button) {
    if (display.innerHTML == 0) {
        display.innerHTML = '';
    }
    display.innerHTML += button.innerHTML;
}

function borrar(display) {
    display.innerHTML = 0;
}


