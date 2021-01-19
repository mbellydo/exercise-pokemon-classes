// Implementa un método de la clase pokemon, de nombre 'atacar'. El método toma por parámetro otro objeto de la clase Pokemon.

// El Pokemon que ejecuta el método realiza un ataque 
// pokemonA.atacar(PokemonB)

/**
 * Primero ataca el Pokemon A:
 * 1. Calcular un número al azar entre 0 y 'poder de ataque' para el Pokemon A
 * 2. Calcular un número al azar entre 0 y 'poder de defensa' para el Pokemon B
 * 2. El Pokemon A asesta un golpe al Pokemon B. El Pokemon B recibe el siguiente daño: "poder de ataque que ha sacado el Pokemon A - poder de defensa que ha sacado el Pokemon B". Dicha diferencia debemos restarla a la vida total del Pokemon B"

 * Dentro del mismo método 'atacar', muestra por consola cada uno de los pasos tal y como se sugiere en el ejemplo: https://oscarm.tinytake.com/tt/NTAxMzU1MF8xNTc3MzM3OQ
 

 */

class Pokemon {
    constructor(id, nombre, tipos, vida, ataque, defensa){
        this.id = id
        this.nombre = nombre
        this.tipos = tipos
        this.vida = vida
        this.ataque = ataque
        this.defensa = defensa
    }

    atacar(pokemonB){
        console.log(`${this.nombre} ataca a ${pokemonB.nombre}`)

        let ataque = Math.round(Math.random()*this.ataque);
        let defensa = Math.round(Math.random()*pokemonB.defensa);

        console.log(`${this.nombre} ataca con ${ataque} puntos de daño`)
        console.log(`${pokemonB.nombre} consigue una defensa de ${ defensa} puntos`)

        if (ataque > defensa) {
            let resultado = ataque - defensa

            console.log(`${this.nombre} asesta ${resultado} puntos de daño`)

            pokemonB.vida = pokemonB.vida - resultado
    
            console.log(`La salud de ${pokemonB.nombre} es ahora de ${pokemonB.vida} puntos de vida`)
        } else {
            console.log(`${this.nombre} ha fallado el ataque!`)
        
            console.log(`La salud de ${pokemonB.nombre} es ahora de ${pokemonB.vida} puntos de vida`)
        }
    }
}

let bulbasaur = new Pokemon(1, "Bulbasaur", ['Grass', 'Poison'], 45, 49, 49)
let squirtle = new Pokemon(2, "Squirtle", ['Water'], 44, 48, 65)

bulbasaur.atacar(squirtle)
console.log("----------SIGUIENTE TURNO----------")
bulbasaur.atacar(squirtle)
