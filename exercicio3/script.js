const carregarImagem = () => {
    const paragrafo = document.getElementById("imagem");

    paragrafo.innerHTML = '<img width ="500px" height="200px" src="https://media.giphy.com/media/3o7bu3XilJ5BOiSGic/giphy.gif">';
    
    setTimeout(()=>{
        paragrafo.innerHTML = "Carregado com sucesso";
    },500);
}

window.onload = () =>{
    document.getElementById("botao").addEventListener("click",carregarImagem);
}
