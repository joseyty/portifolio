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
function clicarbutton()
{
    // Function implementation

    let name= "igor jose";
    let idade= 20;
    let curso= "analise e desenvolvimento de sistemas";

    if(name=="igor jose" && idade==20 && curso=="analise e desenvolvimento de sistemas"){
      let entrou= esta correto;
      document.getElementById("entrou").textContent=entrou;
      document.getElementById("entrou").style.color="green";
    } else if(name==" " && idade==" " && curso==" "){
        let preencha= preencha os campos;
        document.getElementById("preencha").textContent=preencha;
        document.getElementById("preencha").style.color="red";
    }
}  

