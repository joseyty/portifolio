function(){
    let login = document.getElementById("login").value;
    let senha = document.getElementById("senha").value;

    if(login==" " && senha==" "){
        let erro=  preencha os campos;
       document.getElementById("erro").textContent=erro;
    } if(login=="admin" && senha=="123"){
        let acerto= você entrou;
        document.getElementById("acerto").textContent=acerto;
        document.getElementById("acerto").style.color="green";
    }
}