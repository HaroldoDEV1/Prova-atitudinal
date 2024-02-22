  // realizando cadastro do aluno
  alunox = {
        nome: "haroldo Kimura", 
        idade: 15,
        cursando: ["TIA", "PDM", "BD1", "BD2", "AOS"],
        presença: ["2022-01-01", "2022-01-02", "2022-01-03"],
        ra: "22002200",
    }

    function  validaCadastro() {

        if(alunox.nome.length < 10){
           console.log ("Não funciona BB, caracteres demais") // funcção para ver se tem mais de 10 caracteres
           return 
        }
        else{
            console.log("Funcionou legal mano")
            return
        }

        // função para idade
        if(alunox.idade >= 14){
            console.log ("Não funciona BB, caracteres demais") 
            return
        }

        // função para presença
        if(alunox.presenca > 2){
            console.log ("Não funciona BB, caracteres demais") 
            return
        }

        if 

    }
