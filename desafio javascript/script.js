function media() {

    let div = document.getElementById("resp");
    let nota1 = parseInt(document.getElementById("_num1").value);
    let nota2 = parseInt(document.getElementById("_num2").value);
    let nota3 = parseInt(document.getElementById("_num3").value);
    let soma = nota1 + nota2 + nota3;
    let resultado = soma / 3;
    let text = "";

    if(resultado >= 6){
        text = "aluno atingiu a media, a media dele foi dele foi " +resultado+ ":)";
    }else{
        if(resultado < 6)
            text = "aluno não atingiu a media, a media dele foi de" +resultado+":/";
    }

    
    div.innerHTML = text;


}