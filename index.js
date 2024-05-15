let heroi = {
    nome: "Felipe",
    idade: 25,
    tipo: "Guerreiro"
}

function ataqueHeroi(){
    ataque = ""
    if(heroi.tipo == "Mago") {
        ataque = "Magia";
    }else if(heroi.tipo == "Guerreiro") {
        ataque = "Espada";
    }else if(heroi.tipo == "Monge"){
        ataque = "Artes Marciais";
    }else if(heroi.tipo == "Ninja"){
        ataque = "Shuriken";
    }else{
        ataque = "Herói não reconhecido";
    }
    let frase = (`O ${ heroi.tipo} ataca com ${ataque}`)
    return frase

}

console.log(ataqueHeroi())