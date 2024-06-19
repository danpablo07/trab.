


const conteudos = [
    { texto: "1. Pato-doméstico (Anas platyrhynchos domesticus)", imagem: '1.jpeg' },
    { texto: "2. Pato-real (Anas platyrhynchos)", imagem: '2.jpeg' },
    { texto: "3. Marreca-toicinho (Anas bahamensis)", imagem: '3.jpeg' },
    { texto: "4. Marreca-carijó (Anas cyanoptera)", imagem: '4.jpeg' },
    { texto: "5. Pato-mandarim (Aix galericulata)", imagem: '5.jpeg' },
    { texto: "6. Marreca-oveira (Anas sibilatrix)", imagem: '6.jpeg' },
    { texto: "7. Pato-selvagem (Cairina moschata)", imagem: '7.jpeg' },
    { texto: "8. Marreca-de-bico-azul (Oxyura australis)", imagem: '8.jpeg' },
    { texto: "9. Pato-arlequim​ (Histrionicus histrionicus)", imagem: '9.jpeg' },
    { texto: "10. Pato-sardento (Stictonetta naevosa)", imagem: '10.jpeg' },
];


let indiceAtual = 0;

function changeContent() {

    indiceAtual = (indiceAtual + 1) % conteudos.length;

    const novoConteudo = conteudos[indiceAtual];
    const img = document.getElementById('imagem');
    const text = document.getElementById('texto');


    img.src = novoConteudo.imagem;
    text.innerHTML = novoConteudo.texto;
}

document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector(".menu-toggle");
    const navList = document.querySelector(".nav-list");

    menuToggle.addEventListener("click", function() {
        navList.classList.toggle("active");
    });
});