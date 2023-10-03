// Declaracion de variables
// Inputs
const inputAquaJuana = document.getElementById('aquaJuana');
const inputEmocionJuana = document.getElementById('emocionJuana');
const inputAlegriaJuana = document.getElementById('alegriaJuana');
const inputFrescuraJuana = document.getElementById('frescuraJuana');
const inputAquaPedro = document.getElementById('aquaPedro');
const inputEmocionPedro = document.getElementById('emocionPedro');
const inputAlegriaPedro = document.getElementById('alegriaPedro');
const inputFrescuraPedro = document.getElementById('frescuraPedro');
const inputConfirmationJ = document.getElementById('confirmationJ');
const inputConfirmationP = document.getElementById('confirmationP');

// Buttons
const btnAquaJuana = document.getElementById('btnJAqua');
const btnEmocionJuana = document.getElementById('btnJEmocion');
const btnAlegriaJuana = document.getElementById('btnJAlegria');
const btnFrescuraJuana = document.getElementById('btnJFrescura');
const btnAquaPedro = document.getElementById('btnPAqua');
const btnEmocionPedro = document.getElementById('btnPEmocion');
const btnAlegriaPedro = document.getElementById('btnPAlegria');
const btnFrescuraPedro = document.getElementById('btnPFrescura');
const btnSubmitJ = document.getElementById('submitJ');
const btnSubmitP = document.getElementById('submitP');
const btnWinner = document.getElementById('btnWinner');

// Product Alerts
const alJAqua = document.querySelector('.alJAqua');
const alJEmocion = document.querySelector('.alJEmocion');
const alJAlegria = document.querySelector('.alJAlegria');
const alJFrescura = document.querySelector('.alJFrescura');
const alPAqua = document.querySelector('.alPAqua');
const alPEmocion = document.querySelector('.alPEmocion');
const alPAlegria = document.querySelector('.alPAlegria');
const alPFrescura = document.querySelector('.alPFrescura');
const alJareNums = document.querySelector('.alJareNums');
const alJcheck = document.querySelector('.alJcheck');
const alPareNums = document.querySelector('.alPareNums');
const alPcheck = document.querySelector('.alPcheck');

const raisedAmounts = {};

// Declaracion de funciones
const getProductsSold = (input, alert, event) => {
    if (!isNaN(input.value)) {
        console.log(event.target.dataset.name + ' vendió ' + input.value + " productos de " + event.target.dataset.product);
        if (!alert.classList.contains('d-none')) {
            alert.classList.add('d-none');
        }
    } else {
        alert.classList.remove('d-none');
    }
}

const getRaised = (input1, input2, input3, input4, checkbox, al1, al2, e) => {
    e.preventDefault();
    if (checkbox.checked && !isNaN(input1.value) && !isNaN(input2.value) && !isNaN(input3.value) && !isNaN(input4.value)) {
        if (!al1.classList.contains('d-none')) {
            al1.classList.add('d-none');
        }
        if (!al2.classList.contains('d-none')) {
            al2.classList.add('d-none');
        }
        const inp1 = parseInt(input1.value);
        const inp2 = parseInt(input2.value);
        const inp3 = parseInt(input3.value);
        const inp4 = parseInt(input4.value);
        const sumAqua = 200 * inp1;
        const sumEmocion = 180 * inp2;
        const sumAlegria = 160 * inp3;
        const sumFrescura = 150 * inp4;
        const arraySales = [sumAqua, sumEmocion, sumAlegria, sumFrescura];
        let totalSum = 0;
        for (let i = 0; i < arraySales.length; i++) {
            totalSum += arraySales[i];
        }
        const sellerName = e.target.dataset.name;
        console.log('El total de dinero recaudado por ' + sellerName + ' es de ' + totalSum + ' usd');
        raisedAmounts[sellerName] = totalSum;
        return totalSum;
    } else {
        if ((isNaN(input1.value) || isNaN(input2.value) || isNaN(input3.value) || isNaN(input4.value)) && checkbox.checked == true) {
            if (!al2.classList.contains('d-none')) {
                al2.classList.add('d-none');
            }
            al1.classList.remove('d-none');
        }
        else if ((!isNaN(input1.value) && !isNaN(input2.value) && !isNaN(input3.value) && !isNaN(input4.value)) && checkbox.checked == false) {
            if (!al1.classList.contains('d-none')) {
                al1.classList.add('d-none');
            }
            al2.classList.remove('d-none');
        }
        else {
            al1.classList.remove('d-none');
            al2.classList.remove('d-none');
        } 
    }
}

// Event Listeners
// Para los botones individuales
btnAquaJuana.addEventListener('click', (e) => {
    getProductsSold(inputAquaJuana, alJAqua, e);
});
btnEmocionJuana.addEventListener('click', (e) => {
    getProductsSold(inputEmocionJuana, alJEmocion, e);
});
btnAlegriaJuana.addEventListener('click', (e) => {
    getProductsSold(inputAlegriaJuana, alJAlegria, e);
});
btnFrescuraJuana.addEventListener('click', (e) => {
    getProductsSold(inputFrescuraJuana, alJFrescura, e);
});
btnAquaPedro.addEventListener('click', (e) => {
    getProductsSold(inputAquaPedro, alPAqua, e);
});
btnEmocionPedro.addEventListener('click', (e) => {
    getProductsSold(inputEmocionPedro, alPEmocion, e);
});
btnAlegriaPedro.addEventListener('click', (e) => {
    getProductsSold(inputAlegriaPedro, alPAlegria, e);
});
btnFrescuraPedro.addEventListener('click', (e) => {
    getProductsSold(inputFrescuraPedro, alPFrescura, e);
});
// Para los botones del total recaudado
btnSubmitJ.addEventListener('click', (e) => {
    getRaised(inputAquaJuana, inputEmocionJuana, inputAlegriaJuana, inputFrescuraJuana, inputConfirmationJ, alJareNums, alJcheck, e);
});

btnSubmitP.addEventListener('click', (e) => {
    getRaised(inputAquaPedro, inputEmocionPedro, inputAlegriaPedro, inputFrescuraPedro, inputConfirmationP, alPareNums, alPcheck, e);
});
// Para el botón que nos da el ganador
btnWinner.addEventListener('click', () => {
    if(raisedAmounts['Juana'] > raisedAmounts['Pedro']) {
        console.log('La ganadora a la empleada del mes es Juana!');
    }
    else if (raisedAmounts['Juana'] < raisedAmounts['Pedro']) {
        console.log('El ganador al empleado del mes es Pedro!');
    }
    else {
        console.log('Tenemos un empate entre Juana y Pedro como los empleados del mes!');
    }
});

