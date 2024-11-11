class Hero {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    attack() {
        let attack;

        if(this.tipo === "mago") {
            attack = "usou magia"
        } else if(this.tipo === "guerreiro") {
            attack = "usou espada"
        } else if(this.tipo === "monge") {
            attack = "usou artes marciais"
        } else if(this.tipo === "ninja") {
            attack = "usou shuriken"
        }


        console.log("o " + this.tipo + " atacou usando " + attack)
    }
}


var heroi1 = new Hero("Camila", 27, "ninja");

heroi1.attack()