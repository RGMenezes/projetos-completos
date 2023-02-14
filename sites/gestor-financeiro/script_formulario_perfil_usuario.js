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
        
    }else{
        
    }

};