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


let numeroAtualCalculadora = 0;
let numeroCalculoCalculadora = 0;
let escolhaAtualCalculadora = '';

function calculoCalculadora(escolha, valorEscolha){
    const retorno = document.querySelector(".calculadora > p");

    if(escolha == 'numero'){
        if(numeroAtualCalculadora == 0){
            numeroAtualCalculadora = valorEscolha;
            retorno.innerHTML = numeroAtualCalculadora;
        }else{
            numeroAtualCalculadora += valorEscolha;
            retorno.innerHTML = numeroAtualCalculadora;
        };
        

    }else if(escolha == 'calculo'){
        if(numeroAtualCalculadora == 0){
            if(valorEscolha == 'subtrair'){
                numeroAtualCalculadora = '-';
                retorno.innerHTML = numeroAtualCalculadora;
                escolhaAtualCalculadora = 'subtrair';
            }else{

            }

        } else {    
            if(numeroAtualCalculadora === String){
                if(numeroAtualCalculadora.includes('.') == true){
                    numeroAtualCalculadora = parseFloat(numeroAtualCalculadora);
                }else{
                    numeroAtualCalculadora = parseInt(numeroAtualCalculadora);
                };
            };

            if(numeroCalculoCalculadora == 0){

                if(valorEscolha == "raiz"){
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
                    }
                    
                    
                }else{
                    numeroCalculoCalculadora = numeroAtualCalculadora;
                    numeroAtualCalculadora = 0;

                };

            }else{
                if(valorEscolha == 'somar'){
                    if(numeroCalculoCalculadora === Number){
                        numeroCalculoCalculadora += numeroAtualCalculadora;
                    }else{
                        if(numeroCalculoCalculadora.includes('.') == true){
                            numeroCalculoCalculadora = parseFloat(numeroCalculoCalculadora);
                        }else{
                            numeroCalculoCalculadora = parseInt(numeroCalculoCalculadora);
                        };
                        numeroCalculoCalculadora += numeroAtualCalculadora;
                    };
                    numeroAtualCalculadora = 0;
                    retorno.innerHTML = numeroCalculoCalculadora;
                    escolhaAtualCalculadora = 'somar';

                }else if(valorEscolha == 'subtrair'){
                    numeroCalculoCalculadora -= numeroAtualCalculadora;
                    numeroAtualCalculadora = 0;
                    retorno.innerHTML = numeroCalculoCalculadora;
                    escolhaAtualCalculadora = 'subtrair';

                }else if(valorEscolha == "multiplicar"){
                    numeroCalculoCalculadora = numeroCalculoCalculadora * numeroAtualCalculadora;
                    numeroAtualCalculadora = 0;
                    retorno.innerHTML = numeroCalculoCalculadora;
                    escolhaAtualCalculadora = 'multiplicar';

                }else if(valorEscolha == "dividir"){
                    numeroCalculoCalculadora = numeroCalculoCalculadora / numeroAtualCalculadora;
                    numeroAtualCalculadora = 0;
                    retorno.innerHTML = numeroCalculoCalculadora;
                    escolhaAtualCalculadora = 'dividir';
                    
                }else if(valorEscolha == "porcentagem"){
                    numeroCalculoCalculadora = calcularPorcentagem(numeroCalculoCalculadora, numeroAtualCalculadora);
                    numeroAtualCalculadora = 0;
                    retorno.innerHTML = numeroCalculoCalculadora;
                    escolhaAtualCalculadora = 'porcentagem';
                    
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