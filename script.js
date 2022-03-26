$(document).ready(paginaLista);

console.log("Cargando página...");

var countVar = 10;
var timer;
function paginaLista() {
    $("#countDisplay").html(countVar);
    timer = setTimeout(espera, 500);
    $("#btn").click(stop);
}

function stop() {
    clearTimeout(timer);
}

function espera() {
    if (countVar > 0) {
        countVar--;
        $("#countDisplay").html(countVar);
        timer = setTimeout(espera, 500);
    } else {
        /*         $("#frase").hide(); */
        /*         $("#countDisplay").html("Boom!"); */
        $(".bombaContainer").css(
            "background-image",
            "url(https://www.kindpng.com/picc/m/5-54003_transparent-background-cartoon-explosion-hd-png-download.png)"
        );
    }
}
