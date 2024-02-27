
// Declarando aluno
let aluno1 = {
    nome: "Kayky de Brito da Silva", 
    idade: 15,
    cursando: ["TIA", "PDM", "BD1", "BD2", "AOS"],
    presença: ["2022-01-01", "2022-01-02", "2022-01-03", "2022-01-04", "2022-01-05", "2022-01-06"],
    ra: "2200220"
}

function ValidaCadastro() { // função validando o cadastro

    if(aluno1.nome.length >= 10) { // vendo se tem mais caracteres, se sim ele passa para o próximo
        if(aluno1.idade >= 14){ // vendo se o aluno possui mais de 14 anos
            if(aluno1.cursando.length >= 3) { // se o aluno cursa mais de 3 cursos
                if(aluno1.presença.length >= 3) { // verificando se á presença
                    if(aluno1.ra.length == 7) { // verificação se os numeros do R.A é igual a 7 caracteres
                        return console.log("deu certo")
                    } else {
                        console.log("Erro: O RA do aluno1 deve ter exatamente 7 caracteres")
                    }
                } else {
                    console.log("Erro: O aluno1 deve ter no mínimo 3 presenças")
                }
            } else {
                console.log("Erro: O aluno1 deve estar cursando no mínimo 3 cursos")
            }

        } else {
            console.log("Erro: O aluno1 tem que ter no mínimo 14 anos")
        }

    } else {
        console.log("Erro: Nome do aluno1 deve ter no mínimo 10 caracteres")
    }
    
}
console.log(aluno1);

ValidaCadastro()

/*----------------------------------------------------*/
// aluno invalido
let aluno2 = {
    nome: "Kayky de Brito da Silva", 
    idade: 15,
    cursando: ["TIA", "PDM", "BD1", "BD2", "AOS"],
    presença: ["2022-01-01", "2022-01-02", "2022-01-03", "2022-01-04", "2022-01-05", "2022-01-06"],
    ra: "2200220"
}

function ValidaCadastro() { // função validando o cadastro

    if(aluno2.nome.length >= 10) { // vendo se tem mais caracteres, se sim ele passa para o próximo
        if(aluno2.idade >= 14){ // vendo se o aluno possui mais de 14 anos
            if(aluno2.cursando.length >= 3) { // se o aluno cursa mais de 3 cursos
                if(aluno2.presença.length >= 3) { // verificando se á presença
                    if(aluno1.ra.length == 7) { // verificação se os numeros do R.A é igual a 7 caracteres
                        return console.log("deu certo")
                    } else {
                        console.log("Erro: O RA do aluno1 deve ter exatamente 7 caracteres")
                    }
                } else {
                    console.log("Erro: O aluno1 deve ter no mínimo 3 presenças")
                }
            } else {
                console.log("Erro: O aluno1 deve estar cursando no mínimo 3 cursos")
            }

        } else {
            console.log("Erro: O aluno1 tem que ter no mínimo 14 anos")
        }

    } else {
        console.log("Erro: Nome do aluno1 deve ter no mínimo 10 caracteres")
    }
    
}
console.log(aluno1);

ValidaCadastro()
