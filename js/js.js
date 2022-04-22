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
    $('#logoPontos').click(function(){
        window.location.href="../../index.html";
    })
    $('.divLogo').click(function () {
        window.location.href = '../index.html';
    })
    $('#logoIndex').click(function () {
        window.location.href = 'index.html';
    })

    // > BOTÕES PAGES
    $("#divPagePontos").click(function () {
        window.location.href = 'pontosturisticos.html';
    })
    $("#divPageRestaurantes").click(function () {
        window.location.href = 'restaurantes.html';
    })
    $("#divPageEmergencia").click(function () {
        window.location.href = 'emergencias.html';
    })
    $("#divPageFAQ").click(function () {
        window.location.href = 'faq.html';
    })


    $("#divMON").click(function(){
        window.location.href = "pagesPontos/mon.html";
    })




    // > MODO CLARO MODO ESCURO
    var tema = "escuro";
    var allButtonPontos = document.querySelectorAll('.divButtonsPontos')
    var allAIcons = document.querySelectorAll(".aIcon");

    $('#divThemes').click(function () {

        if (tema == "escuro") { //>> MUDA PRO MODO CLARO

            $("#divThemesIMG").fadeOut("fast");

            setTimeout(function () {
                document.getElementById("divThemesIMG").style = "color: black;";
                document.getElementById("divThemesIMG").classList.replace('fa-sun', 'fa-moon')

            }, 200)
            document.getElementById("logoIMG").src = "../imgs/logo-claro.png";
            document.getElementsByTagName("body")[0].style = "background-color: #f2f3f4;";
            for (var i = 0; i < allButtonPontos.length; i++) {
                allButtonPontos[i].style = "background-image: linear-gradient(45deg, #24e463 50%, #2cc424 50%)";
            }
            for (var i = 0; i < allAIcons.length; i++) {
                allAIcons[i].src = "../imgs/iconC.png";
            }


            $("#divThemesIMG").fadeIn("fast");
            tema = "claro"

        } else if (tema == "claro") { // >> MUDA PRO MODO ESCURO     
            $("#divThemesIMG").fadeOut("fast");
            setTimeout(function () {
                document.getElementById("divThemesIMG").style = "color: white;";
                document.getElementById("divThemesIMG").classList.replace('fa-moon', 'fa-sun')
            }, 200)


            document.getElementById("logoIMG").src = "../imgs/logo-escuro.png";
            document.getElementsByTagName("body")[0].style = "background-color: #121212;"
            for (var i = 0; i < allButtonPontos.length; i++) {
                allButtonPontos[i].style = "background-image: linear-gradient(45deg,#2663E5 50%, #2B26C1 50%)"
            }
            for (var i = 0; i < allAIcons.length; i++) {
                allAIcons[i].src = "../imgs/iconE.png";
            }
            $("#divThemesIMG").fadeIn("fast");
            tema = "escuro"
        }
    })


})