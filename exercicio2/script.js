function avisar(){

setInterval(
    function(){
    alert("Beber Água");
}
, 60000);
}

window.onload = () => {
    avisar();
}