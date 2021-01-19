/**
 * Un pokemon solo puede realizar un ataque especial cada 3 ataques normales. 
 * 
 * Modifica el constructor para guardar la información necesaria para controlar cuando es que el pokemon puede usar su ataque especial
 * 
 * Deberás modificar el método 'atacar' para que, una vez ataque normal, cuente como carga del ataque especial.
 * 
 * Y a su vez, deberás modificar 'ataqueEspecial' para que 'resetee' el contador de ataques
 * 
 * Ejemplo: https://oscarm.tinytake.com/tt/NTAxMzU3OV8xNTc3MzUwMQ
 *  
 * 
 */
class Pokemon {
    constructor(id, nombre, tipos, vida, ataque, defensa, poder){
        this.id = id
        this.nombre = nombre
        this.tipos = tipos
        this.vida = vida
        this.ataque = ataque
        this.defensa = defensa
        this.poder = poder
        this.numeroAtaques = 0
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

            this.numeroAtaques++
        } else {
            console.log(`${this.nombre} ha fallado el ataque!`)
        
            console.log(`La salud de ${pokemonB.nombre} es ahora de ${pokemonB.vida} puntos de vida`)
        }
    }

    ataqueEspecial(pokemonB){
        console.log(`==${this.nombre} usa ${this.poder.especial}==`)
        console.log(`${this.nombre} ataca a ${pokemonB.nombre}`)

        let ataque = Math.round(Math.random()*this.ataque);
        let defensa = Math.round(Math.random()*pokemonB.defensa);
        let ataqueIncrementado = ataque * this.poder.incremento

        console.log(`${this.nombre} ataca con ${ataque} puntos de daño`)
        console.log(`${pokemonB.nombre} consigue una defensa de ${defensa} puntos`)

        if (this.numeroAtaques >= 3) {
            if (ataqueIncrementado > defensa) {
                let resultado = ataqueIncrementado - defensa

                console.log(`${this.nombre} asesta ${resultado} puntos de daño`)

                pokemonB.vida = pokemonB.vida - resultado
        
                console.log(`La salud de ${pokemonB.nombre} es ahora de ${pokemonB.vida} puntos de vida`)

                this.numeroAtaques = 0
            } else {
                console.log(`${this.nombre} ha fallado el ataque!`)
            
                console.log(`La salud de ${pokemonB.nombre} es ahora de ${pokemonB.vida} puntos de vida`)
            }
        } else {
            console.log(`${this.poder.especial} todavía no está cargado!`)
        }
    }
}

let bulbasaur = new Pokemon(1, "Bulbasaur", ['Grass', 'Poison'], 45, 49, 49 , {
    especial: "Hoja afilada",
    incremento: 1.5
})
let squirtle = new Pokemon(2, "Squirtle", ['Water'], 44, 48, 65, {
    especial : "Pistola agua",
    incremento: 1.65
})

// TESTS: El primer araque especial deberia fallar tal y como se muestra en el ejemplo!

bulbasaur.ataqueEspecial(squirtle)
console.log("----------SIGUIENTE TURNO----------")
bulbasaur.atacar(squirtle)
console.log("----------SIGUIENTE TURNO----------")
bulbasaur.atacar(squirtle)
console.log("----------SIGUIENTE TURNO----------")
bulbasaur.atacar(squirtle)
console.log("----------SIGUIENTE TURNO----------")
bulbasaur.ataqueEspecial(squirtle)
