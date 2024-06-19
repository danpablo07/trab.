function showDateTime() {

    const agora = new Date();
    const horas = agora.toLocaleTimeString();


   document.getElementById("horas").innerText = "Hora atual: " + horas;
}

function changeImage() {
    let img = document.getElementById("imagens");
    if (img.src.match("1.jpeg")) {
        img.src = "2.jpeg";
    } else {
        img.src = "1.jpeg";
    }
}
function changeText() {
    document.getElementById("text").innerHTML = "Muito bem! Agora";
    document.getElementById("botaoimagem").style.display = "inline";
}
