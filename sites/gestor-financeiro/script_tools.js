let observadorMenuLateral = false;

const calcularPorcentagem = function (valorInteiro, porcentagem){
    return (valorInteiro * porcentagem) / 100;
};

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
let escolhaAtualCalculadora = '';

function calculoCalculadora(escolha, valorEscolha){
    const retorno = document.querySelector(".calculadora > p");

    if(escolha == 'numero'){
        numeroAtualCalculadora += valorEscolha;
        retorno.innerHTML = numeroAtualCalculadora;
        

    }else if(escolha == 'calculo'){
        escolhaAtualCalculadora = valorEscolha;

        if(numeroAtualCalculadora == ''){
            if(valorEscolha == 'subtrair'){
                numeroAtualCalculadora = '-';
                retorno.innerHTML = numeroAtualCalculadora;
                escolhaAtualCalculadora = 'subtrair';
            };

        } else {    
            if(typeof numeroAtualCalculadora == "string"){
                if(numeroAtualCalculadora.includes('.') == true){
                    let numeroCopia = 0;
                    numeroCopia = parseFloat(numeroAtualCalculadora);
                    numeroAtualCalculadora = numeroCopia;
                }else{
                    let numeroCopia = 0;
                    numeroCopia = parseInt(numeroAtualCalculadora);
                    numeroAtualCalculadora = numeroCopia;
                };
            }else{
                alert("Erro Conversão");
            };

            if(numeroCalculoCalculadora == 0){

                if(valorEscolha == "raiz"){

                    let numeroGuia1 = 0;
                    let numeroGuia2 = 0;

                    while((numeroGuia1 * numeroGuia2) < numeroAtualCalculadora){
                        numeroGuia1++;
                        numeroGuia2++;    
                    };

                    if((numeroGuia1 * numeroGuia2) == numeroAtualCalculadora){
                        numeroAtualCalculadora = `${numeroGuia1}`;
                        retorno.innerHTML = numeroAtualCalculadora;
                        numeroGuia1 = 0;
                        numeroGuia2 = 0;

                    }else{
                        numeroAtualCalculadora = '';
                        retorno.innerHTML = 'A raiz não é exata!';
                        numeroGuia1 = 0;
                        numeroGuia2 = 0;
                    };
                    
                    
                }else{
                    numeroCalculoCalculadora = numeroAtualCalculadora;
                    numeroAtualCalculadora = '';
                    retorno.innerHTML = "Calcular";

                };

            }else{
                if(valorEscolha == 'somar'){
                    numeroCalculoCalculadora += numeroAtualCalculadora;
                    numeroAtualCalculadora = '';
                    retorno.innerHTML = numeroCalculoCalculadora;
                    escolhaAtualCalculadora = 'somar';

                }else if(valorEscolha == 'subtrair'){
                    numeroCalculoCalculadora -= numeroAtualCalculadora;
                    numeroAtualCalculadora = '';
                    retorno.innerHTML = numeroCalculoCalculadora;
                    escolhaAtualCalculadora = 'subtrair';

                }else if(valorEscolha == "multiplicar"){
                    numeroCalculoCalculadora = numeroCalculoCalculadora * numeroAtualCalculadora;
                    numeroAtualCalculadora = '';
                    retorno.innerHTML = numeroCalculoCalculadora;
                    escolhaAtualCalculadora = 'multiplicar';

                }else if(valorEscolha == "dividir"){
                    numeroCalculoCalculadora = numeroCalculoCalculadora / numeroAtualCalculadora;
                    numeroAtualCalculadora = '';
                    retorno.innerHTML = numeroCalculoCalculadora;
                    escolhaAtualCalculadora = 'dividir';
                    
                }else if(valorEscolha == "porcentagem"){
                    numeroCalculoCalculadora = calcularPorcentagem(numeroCalculoCalculadora, numeroAtualCalculadora);
                    numeroAtualCalculadora = '';
                    retorno.innerHTML = numeroCalculoCalculadora;
                    escolhaAtualCalculadora = 'porcentagem';
                    
                }else if(valorEscolha == "raiz"){
                    if(numeroAtualCalculadora + numeroCalculoCalculadora == numeroCalculoCalculadora){
                        numeroAtualCalculadora = numeroCalculoCalculadora;
                    };

                    numeroCalculoCalculadora = 0;

                    let numeroGuia1 = 0;
                    let numeroGuia2 = 0;

                    while((numeroGuia1 * numeroGuia2) < numeroAtualCalculadora){
                        numeroGuia1++;
                        numeroGuia2++;    
                    };

                    if((numeroGuia1 * numeroGuia2) == numeroAtualCalculadora){
                        numeroAtualCalculadora = `${numeroGuia1}`;
                        retorno.innerHTML = numeroAtualCalculadora;
                        numeroGuia1 = 0;
                        numeroGuia2 = 0;

                    }else{
                        numeroAtualCalculadora = '';
                        retorno.innerHTML = 'A raiz não é exata!';
                        numeroGuia1 = 0;
                        numeroGuia2 = 0;
                    };
                    
                }else{
                    alert("Cálculo não detectado!");
                };

            };
        };

        

    }else if(escolha == 'ponto'){
        if(numeroAtualCalculadora.includes('.') == false){
            numeroAtualCalculadora += '.';
            retorno.innerHTML = numeroAtualCalculadora;
        };
    
    }else if(escolha == 'resultado'){
        if(numeroCalculoCalculadora == 0){
            if(numeroAtualCalculadora != ''){
                retorno.innerHTML = numeroAtualCalculadora;
            }else{
                retorno.innerHTML = 'Digite algum número'
            }

        }else{
            calculoCalculadora('calculo', escolhaAtualCalculadora);
        }

    }else if(escolha == 'resetar'){
        retorno.innerHTML = `Calcular`;
        numeroAtualCalculadora = '';
        numeroCalculoCalculadora = 0;

    }else{
        alert("Erro, calculo indisponivel!");
    };
};