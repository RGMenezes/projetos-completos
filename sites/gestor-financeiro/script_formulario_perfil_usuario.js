function aceitarAlerta(){
    const alerta = document.querySelector("#alerta");
    const formulario = document.querySelector("main > form");

    alerta.style.transform = "scale(0)";

    setTimeout(
        function(){
            alerta.style.display = "none";
            formulario.setAttribute("style", "display: block; transform: scale(1);");
        },
        310
    );
};