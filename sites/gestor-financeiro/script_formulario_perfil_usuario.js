function calculaPorcentagem(valorInteiro, porcentagem){
    return (valorInteiro * porcentagem) / 100;
};

function calcularInteiroPelaPorcentagem(valorInteiro, valorParte){
    return parseInt((100 * valorParte) / valorInteiro);
};


function aceitarAlerta(){
    const alerta = document.querySelector("#alerta");
    const formulario = document.querySelector("main > form");

    alerta.style.transform = "scale(0)";

    setTimeout(
        function(){
            alerta.style.display = "none";
            formulario.style.display = "block";
        },
        310
    );

    setTimeout(
        function(){
            formulario.style.transform = "scale(1)";
        },
        410
    );
};


function avancarForm(pergunta){
    function pararSubmitForm(event){
        event.preventDefault();
    };

    const elementoForm = document.querySelector("main > form");
    elementoForm.addEventListener("submit", pararSubmitForm);





    const perguntas2 = document.querySelector("#perguntas2");
    const perguntas3 = document.querySelector("#perguntas3");

    const button = document.querySelector("main > form > button");

    if(pergunta == "perguntas2"){
        perguntas2.style.display = "block";

        setTimeout(
            function(){
                perguntas2.style.transform = "scale(1)";
            },
            10
        );

        button.setAttribute("onclick", "avancarForm('perguntas3')");

    }else if(pergunta == "perguntas3"){
        perguntas3.style.display = "block";

        setTimeout(
            function(){
                perguntas3.style.transform = "scale(1)";
            },
            10
        );

        button.setAttribute("onclick", "gerarResultado()");
        button.innerHTML = "Resultado";
    }else{
        alert("Erro avançar pergunta");
    };
};


function gerarResultado(){
    function pararSubmitForm(event){
        event.preventDefault();
    };

    const elementoForm = document.querySelector("main > form");
    elementoForm.addEventListener("submit", pararSubmitForm);





    let usuario = {
        salario: 0,
        despesasBasicas: 0,
        despesasExtras: 0,
        caixa: 0,
        investimento: 0,
        empreender: 0,
        lazer: 0,
        compras: 0
    }




    usuario.salario = Number(document.querySelector("#salario").value);

    usuario.despesasBasicas = Number(document.querySelector("#alimentacao").value) + Number(document.querySelector("#aluguel").value) + Number(document.querySelector("#aguaLuzInternet").value);

    usuario.despesasExtras = Number(document.querySelector("#financiamentoEmprestimoValor").value) / Number(document.querySelector("#financiamentoEmprestimoDuracao").value);

    if(usuario.salario != usuario.salario){
        usuario.salario = 0
    };
    if(usuario.despesasBasicas != usuario.despesasBasicas){
        usuario.despesasBasicas = 0
    };
    if(usuario.despesasExtras != usuario.despesasExtras){
        usuario.despesasExtras = 0
    };

    
    

    let fraseResultado = "";

    if(document.querySelector("input[name='rendaExtra']:checked").value == "sim"){
        const tempo = document.querySelector("input[name='tempo']:checked").value;

        fraseResultado = "<h1>O que melhorar?</h1>"

        if(tempo == "preciso"){
            fraseResultado += "<p>Observamos que dedicar um tempo para fazer aquilo que você gosta pode aumentar a sua produtividade.</p>";    
        }else if(tempo == "naoTenho"){
            fraseResultado += "<p>Observamos que reorganizar a sua agenda te traria uma melhor qualidade de vida.</p>";
        }else if(tempo == "fimSemana"){
            fraseResultado += "<p>Você possui uma boa gestão do seu tempo.</p>";
        }else{
            fraseResultado += "<p>Observamos que investir em cursos, aprender algo novo, pode ser algo bom para você.</p>";
        };

    }else{
        const tempo = document.querySelector("input[name='tempo']:checked").value;

        fraseResultado = "<h1>O que melhorar?</h1>"

        if(tempo == "preciso"){
            fraseResultado += "<p>Notamos que uma boa estratégia de organização pode melhorar vários aspectos da sua vida.</p>";    
        }else if(tempo == "naoTenho"){
            fraseResultado += "<p>Seria bom otimizar melhor o seu tempo para que possa fazer um curso, aprender algo novo, ampliando a sua área de conhecimento.</p>";
        }else if(tempo == "fimSemana"){
            fraseResultado += "<p>Procurar uma renda extra pode ser uma boa opção para seu tempo livre.</p>";
        }else{
            fraseResultado += "<p>Obter uma renda extra e aprender algo novo pode ser duas metas para você.</p>";
        };

    };




    if(document.querySelector("input[name='compras']:checked").value == "cartao"){
        usuario.caixa += 10;
        usuario.investimento += 5;
        usuario.empreender += 0;
        usuario.lazer += 0;
        usuario.compras += 0;

    }else{
        usuario.caixa += 5;
        usuario.investimento += 10;
        usuario.empreender += 0;
        usuario.lazer += 0;
        usuario.compras += 0;

    };

    if(document.querySelector("input[name='divisaoRenda']:checked").value == "100"){
        usuario.caixa += 7;
        usuario.investimento += 1;
        usuario.empreender += 1;
        usuario.lazer += 3;
        usuario.compras += 3;

    }else if(document.querySelector("input[name='divisaoRenda']:checked").value == "50"){
        usuario.caixa += 4;
        usuario.investimento += 4;
        usuario.empreender += 3;
        usuario.lazer += 2;
        usuario.compras += 2;

    }else if(document.querySelector("input[name='divisaoRenda']:checked").value == "25"){
        usuario.caixa += 2;
        usuario.investimento += 4;
        usuario.empreender += 5;
        usuario.lazer += 2;
        usuario.compras += 2;

    }else{
        usuario.caixa += 2;
        usuario.investimento += 4;
        usuario.empreender += 7;
        usuario.lazer += 1;
        usuario.compras += 1;

    };

    if(document.querySelector("input[name='lazer']:checked").value == "casa"){
        usuario.caixa += 6;
        usuario.investimento += 3;
        usuario.empreender += 3;
        usuario.lazer += 2;
        usuario.compras += 1;

    }else if(document.querySelector("input[name='lazer']:checked").value == "shopping"){
        usuario.caixa += 4;
        usuario.investimento += 3;
        usuario.empreender += 3;
        usuario.lazer += 2;
        usuario.compras += 3;

    }else{
        usuario.caixa += 3;
        usuario.investimento += 3;
        usuario.empreender += 2;
        usuario.lazer += 4;
        usuario.compras += 3;

    };

    if(document.querySelector("input[name='compraAluguel']:checked").value == "avista"){
        usuario.caixa += 7;
        usuario.investimento += 3;
        usuario.empreender += 3;
        usuario.lazer += 1;
        usuario.compras += 1;

    }else if(document.querySelector("input[name='compraAluguel']:checked").value == "financiada"){
        usuario.caixa += 4;
        usuario.investimento += 4;
        usuario.empreender += 4;
        usuario.lazer += 2;
        usuario.compras += 1;

    }else{
        usuario.caixa += 2;
        usuario.investimento += 5;
        usuario.empreender += 5;
        usuario.lazer += 1;
        usuario.compras += 2;

    };

    if(document.querySelector("input[name='prazo']:checked").value == "curto"){
        usuario.caixa += 6;
        usuario.investimento += 1;
        usuario.empreender += 1;
        usuario.lazer += 1;
        usuario.compras += 1;

    }else if(document.querySelector("input[name='prazo']:checked").value == "medio"){
        usuario.caixa += 3;
        usuario.investimento += 2;
        usuario.empreender += 3;
        usuario.lazer += 1;
        usuario.compras += 1;

    }else{
        usuario.caixa += 2;
        usuario.investimento += 4;
        usuario.empreender += 2;
        usuario.lazer += 1;
        usuario.compras += 1;

    };

    if(document.querySelector("input[name='investidor']:checked").value == "naoApto"){
        usuario.caixa += 9;
        usuario.investimento += 0;
        usuario.empreender += 0;
        usuario.lazer += 3;
        usuario.compras += 3;

    }else if(document.querySelector("input[name='investidor']:checked").value == "conservador"){
        usuario.caixa += 7;
        usuario.investimento += 2;
        usuario.empreender += 2;
        usuario.lazer += 2;
        usuario.compras += 2;

    }else if(document.querySelector("input[name='investidor']:checked").value == "moderado"){
        usuario.caixa += 5;
        usuario.investimento += 4;
        usuario.empreender += 4;
        usuario.lazer += 1;
        usuario.compras += 1;

    }else if(document.querySelector("input[name='investidor']:checked").value == "agressivo"){
        usuario.caixa += 3;
        usuario.investimento += 7;
        usuario.empreender += 4;
        usuario.lazer += 1;
        usuario.compras += 1;

    }else{
        usuario.caixa += 2;
        usuario.investimento += 9;
        usuario.empreender += 2;
        usuario.lazer += 1;
        usuario.compras += 1;

    };

    if(document.querySelector("input[name='trabalhar']:checked").value == "carteira"){
        usuario.caixa += 13;
        usuario.investimento += 0;
        usuario.empreender += 0;
        usuario.lazer += 1;
        usuario.compras += 1;

    }else if(document.querySelector("input[name='trabalhar']:checked").value == "empreender"){
        usuario.caixa += 2;
        usuario.investimento += 0;
        usuario.empreender += 11;
        usuario.lazer += 1;
        usuario.compras += 1;

    }else{
        usuario.caixa += 2;
        usuario.investimento += 11;
        usuario.empreender += 0;
        usuario.lazer += 1;
        usuario.compras += 1;

    };

   


    const salarioSobra = usuario.salario - (usuario.despesasBasicas + usuario.despesasExtras);

    let resultadoUsuario = {
        despesasBasicas: calcularInteiroPelaPorcentagem(usuario.salario, usuario.despesasBasicas),
        despesasExtras: calcularInteiroPelaPorcentagem(usuario.salario, usuario.despesasExtras),
        caixa: calcularInteiroPelaPorcentagem(usuario.salario, calculaPorcentagem(salarioSobra, usuario.caixa)),
        investimento: calcularInteiroPelaPorcentagem(usuario.salario, calculaPorcentagem(salarioSobra, usuario.investimento)),
        empreender: calcularInteiroPelaPorcentagem(usuario.salario, calculaPorcentagem(salarioSobra, usuario.empreender)),
        lazer: calcularInteiroPelaPorcentagem(usuario.salario, calculaPorcentagem(salarioSobra, usuario.lazer)),
        compras: calcularInteiroPelaPorcentagem(usuario.salario, calculaPorcentagem(salarioSobra, usuario.compras))
    };

    if(resultadoUsuario.despesasBasicas != resultadoUsuario.despesasBasicas){
        resultadoUsuario.despesasBasicas = 0
    };
    if(resultadoUsuario.despesasExtras != resultadoUsuario.despesasExtras){
        resultadoUsuario.despesasExtras = 0
    };
    if(resultadoUsuario.caixa != resultadoUsuario.caixa){
        resultadoUsuario.caixa = 0
    };
    if(resultadoUsuario.investimento != resultadoUsuario.investimento){
        resultadoUsuario.investimento = 0
    };
    if(resultadoUsuario.empreender != resultadoUsuario.empreender){
        resultadoUsuario.empreender = 0
    };
    if(resultadoUsuario.lazer != resultadoUsuario.lazer){
        resultadoUsuario.lazer = 0
    };
    if(resultadoUsuario.compras != resultadoUsuario.compras){
        resultadoUsuario.compras = 0
    };

    const graficoColunaDespesasBasicas = document.querySelector("#despesasBasicas");
    const graficoColunaDespesasExtras = document.querySelector("#despesasExtras");
    const graficoColunaCaixa = document.querySelector("#caixa");
    const graficoColunaInvestimento = document.querySelector("#investimento");
    const graficoColunaEmpreender = document.querySelector("#empreender");
    const graficoColunaLazer = document.querySelector("#lazer");
    const graficoColunaCompras = document.querySelector("#compras");

    const legendaGrafico = document.querySelector("#legendaGrafico");

    graficoColunaDespesasBasicas.style.height = `${resultadoUsuario.despesasBasicas}%`;
    graficoColunaDespesasExtras.style.height = `${resultadoUsuario.despesasExtras}%`;
    graficoColunaCaixa.style.height = `${resultadoUsuario.caixa}%`;
    graficoColunaInvestimento.style.height = `${resultadoUsuario.investimento}%`;
    graficoColunaEmpreender.style.height = `${resultadoUsuario.empreender}%`;
    graficoColunaLazer.style.height = `${resultadoUsuario.lazer}%`;
    graficoColunaCompras.style.height = `${resultadoUsuario.compras}%`;

    legendaGrafico.innerHTML = `<div>Despesas basicas<br>${calculaPorcentagem(usuario.salario, resultadoUsuario.despesasBasicas).toFixed(2)} R$</div><div>Finan / empré<br>${calculaPorcentagem(usuario.salario, resultadoUsuario.despesasExtras).toFixed(2)} R$</div><div>Caixa<br>${calculaPorcentagem(usuario.salario, resultadoUsuario.caixa).toFixed(2)} R$</div><div>Investir<br>${calculaPorcentagem(usuario.salario, resultadoUsuario.investimento).toFixed(2)} R$</div><div>Empreender<br>${calculaPorcentagem(usuario.salario, resultadoUsuario.empreender).toFixed(2)} R$</div><div>Lazer<br>${calculaPorcentagem(usuario.salario, resultadoUsuario.lazer).toFixed(2)} R$</div><div>Compras<br>${calculaPorcentagem(usuario.salario, resultadoUsuario.compras).toFixed(2)} R$</div>`;

    const outputFrase = document.querySelector("main > form > output > section ~ section");

    outputFrase.innerHTML = fraseResultado;


    const output = document.querySelector("main > form > output");
    output.style.display = "block";

    setTimeout(
        function(){
            output.style.transform = "scale(1)";
        },
        10
    );

}