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



function gerarResultado(){
    function pararSubmitForm(event){
        event.preventDefault();
    };

    const elementoForm = document.querySelector("main > form");
    elementoForm.addEventListener("submit", pararSubmitForm);



    const usuario = {
        rendaExtra: document.querySelector("input[name='rendaExtraSim']:checked").value
    };// usar if pra checar se as duas radios são iguais

    alert(usuario.rendaExtra)
};