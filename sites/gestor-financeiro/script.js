function avancarEtapa(proximaEtapa){

    const interfaceUsuario = document.querySelector("main > article");
    const interacaoUsuario = document.querySelector(".main-button");

    if(proximaEtapa == "analise"){
        interfaceUsuario.style.transform = "scale(0)";
        interacaoUsuario.style.transform = "scale(0)";

        setTimeout(function(){
            interfaceUsuario.innerHTML = `<h1>Alerta!!!</h1><p>Não incentivamos e nem recomendamos nenhum tipo de investimento, use esta ferramenta apenas para te auxiliar.</p>`;
            interacaoUsuario.innerHTML = `<button onclick="avancarEtapa('tutorial')">Estou ciente</button>`;

            interfaceUsuario.setAttribute("style", "background-color: #C60000; transform: scale(1);");
            interacaoUsuario.style.transform = "scale(1)";
            document.querySelector(".main-button > button").style.backgroundColor = "#C60000";
        }, 310);


        

    }else if(proximaEtapa == "tutorial"){
        interfaceUsuario.style.transform = "scale(0)";
        interacaoUsuario.style.transform = "scale(0)";
    
        setTimeout(function(){
            interfaceUsuario.innerHTML = `<h1>Próxima etapa</h1><p>Responda algumas perguntas para traçarmos seu perfil financeiro.</p>`;
            interacaoUsuario.innerHTML = `<button onclick="avancarEtapa('pergunta1')">Vamos lá</button>`;

            interfaceUsuario.setAttribute("style", "background-color: var(--color3); transform: scale(1);");
            interacaoUsuario.style.transform = "scale(1)";
            document.querySelector(".main-button > button").style.backgroundColor = "--color3";
        }, 310);
    }
};