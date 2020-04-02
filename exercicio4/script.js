const escrevaNumeros = (inicio, fim) => {

    const numeros = document.getElementById('numeros');

    const intervalId = setInterval(() => {
        if(inicio<=fim){
            numeros.innerHTML+= ' '+ inicio++;
        } else clearInterval(intervalId);
    }, 1000);
   
}

window.onload = () => {
    escrevaNumeros(1, 9);
}