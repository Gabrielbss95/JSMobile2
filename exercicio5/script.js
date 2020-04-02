const escrevaNumeros = (inicio, fim) => {

    const numeros = document.getElementById("numeros");

    const intervalId = setInterval(() => {
        if(inicio<=fim){
            numeros.innerHTML+= ' '+ inicio++;
        } else clearInterval(intervalId);
    }, 1000);
}

const escrevaNumeros2 = (inicio, fim) => {

    const numeros2 = document.getElementById("numeros2");

    let timerId = setTimeout(tick = () => {

        if(inicio<=fim){
            numeros2.innerHTML+= ' '+ inicio++;
        } else clearInterval(intervalId);

        timerId = setTimeout(tick, 1000);
    }, 1000);

}


window.onload = () => {
    escrevaNumeros(1, 9);
    escrevaNumeros2(1, 9);
}