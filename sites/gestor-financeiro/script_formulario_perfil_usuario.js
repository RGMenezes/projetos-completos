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


function gerarResultado(){
    function pararSubmitForm(event){
        event.preventDefault();
    };

    const elementoForm = document.querySelector("main > form");
    elementoForm.addEventListener("submit", pararSubmitForm);




    usuario.salario = Number(document.querySelector("#salario").value);

    usuario.despesasBasicas = Number(document.querySelector("#alimentacao").value) + Number(document.querySelector("#aluguel").value) + Number(document.querySelector("#aguaLuzInternet").value);

    usuario.despesasExtras = Number(document.querySelector("#financiamentoEmprestimoValor").value) / Number(document.querySelector("#financiamentoEmprestimoDuracao").value);

    
    

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

   


    const output = document.querySelector("main > form > output");

    output.innerHTML = `${fraseResultado}`;
}