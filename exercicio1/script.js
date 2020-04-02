function despertador(tempo){

    setTimeout(function(){
        alert("ACOOOOORDAAAAAAAAAAAAAA")}, tempo);}
    

window.onload = () => {
    let tempo;
    do {
        tempo = prompt ("Digite o tempo desejado: ");
    } while(isNaN(tempo));
    despertador(tempo);
}
