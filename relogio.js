const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');


function atualizarRelogio() {
    let dateToday = new Date();
    let hr = String(dateToday.getHours()+':');
    let min = dateToday.getMinutes();

    if(hr < 10) hr = '0' + hr;
    if(min < 10) min = '0' + min;


    horas.textContent = hr;
    minutos.textContent = min;

}

setInterval(atualizarRelogio, 1000);