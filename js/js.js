$(document).ready(function () {

    // NAVEGAÇÃO PELAS PAGINAS
    // > BOTÕES INDEX
    $('#buttonPontos').click(function () {
        window.location.href = 'pages/pontosturisticos.html';
    })
    $('#buttonRestaurantes').click(function () {
        window.location.href = 'pages/restaurantes.html';
    })
    $('#buttonEmergencias').click(function () {
        window.location.href = 'pages/emergencias.html';
    })
    $('#buttonFaq').click(function () {
        window.location.href = 'pages/faq.html';
    })
    // > VOLTAR A PAGINA INICIAL
    $('.divLogo').click(function () {
        window.location.href = '../index.html';
    })
    $('#logoIndex').click(function () {
        window.location.href = 'index.html';
    })
})