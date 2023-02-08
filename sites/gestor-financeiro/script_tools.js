let observadorMenuLateral = false;

function ativarMenu(){
    const barra1 = document.querySelector(".menu-barra1");
    const barra2 = document.querySelector(".menu-barra2");
    const barra3 = document.querySelector(".menu-barra3");

    const menuTools = document.querySelector(".menu-tools");

    if(observadorMenuLateral == false){
        observadorMenuLateral = true;

        barra2.style.transform = "scale(0)";

        setTimeout(function(){
            barra1.setAttribute("style", "top: 13px; transform: rotate(45deg);");
            barra3.setAttribute("style", "top: 13px; transform: rotate(-45deg);");

            menuTools.style.bottom = "95px"
        }, 310);
        
    }else{
        observadorMenuLateral = false;

        barra1.setAttribute("style", "top: 13px; transform: rotate(0deg);");
        barra3.setAttribute("style", "top: 13px; transform: rotate(0deg);");

        menuTools.style.bottom = "-95px"

        setTimeout(function(){
            barra1.setAttribute("style", "top: 5px;");
            barra2.setAttribute("style", "");
            barra3.setAttribute("style", "top: 21px;");
        }, 310);
    };
};


let numeroAtualCalculadora = '';
let numeroCalculoCalculadora = 0;

function calculoCalculadora(escolha, valorEscolha){
    const retorno = document.querySelector(".calculadora > p");

    if(escolha == 'numero'){
        numeroAtualCalculadora += valorEscolha;
        retorno.innerHTML = numeroAtualCalculadora;

    }else if(escolha == 'calculo'){
        if(numeroAtualCalculadora == 0){
            if(valorEscolha == 'subtrair'){
                numeroAtualCalculadora += '-';
                retorno.innerHTML = numeroAtualCalculadora;
            }else{
                alert('Não detectamos nenhum número');
            }

        } else {    
            if(numeroAtualCalculadora.includes('.') == true){
                numeroAtualCalculadora = parseFloat(numeroAtualCalculadora);
            }else{
                numeroAtualCalculadora = parseInt(numeroAtualCalculadora);
            };

            if(numeroCalculoCalculadora == 0){
                numeroCalculoCalculadora = numeroAtualCalculadora;
                numeroAtualCalculadora = '';

            }else{
                if(valorEscolha == 'somar'){
                    numeroCalculoCalculadora += numeroAtualCalculadora;
                    numeroAtualCalculadora = '';
                    retorno.innerHTML = numeroCalculoCalculadora;

                }else if(valorEscolha == 'subtrair'){
                    numeroCalculoCalculadora -= numeroAtualCalculadora;
                    numeroAtualCalculadora = '';
                    retorno.innerHTML = numeroCalculoCalculadora;
                }

            };
        };

        

    }else if(escolha == 'ponto'){
        if(numeroAtualCalculadora.includes('.') == false){
            numeroAtualCalculadora += '.';
            retorno.innerHTML = numeroAtualCalculadora;
        };
    
    }else if(escolha == 'resultado'){
        
    }else if(escolha == 'resetar'){
        retorno.innerHTML = `Calcular`;

    }else{
        alert("Erro, calculo indisponivel!");
    };
};