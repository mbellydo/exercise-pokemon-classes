/**
 * Los pokemons puedes realizar un ataque especial cada cierto tiempo.
 * Implementa un nuevo método de nombre "ataqueEspecial". 
 * 
 * Modifica el constructor para que ahora podamos pasarle otro parámetro que es un OBJETO. Dicho objeto tiene dos propiedades. Por ejemplo: 
 * 
 * {
 *   especial: "Hoja afilada",
 *   incremento: 1.5
 * }
 *  
 * Implementa un nuevo método además de nombre "ataqueEspecial". 
 * Este método de momento hará exactamente lo msimo que el método "ataque"; pero multiplica el daño producido por el valor de la propiedad 'incremento'
 * 
 * PIENSA BIEN como puedes reprovechar el método "atacar" para modificarlo de tal manera que ahora tenga en cuenta el modificador 'incremento'
 */

class Pokemon {
    constructor(id, nombre, tipos, vida, ataque, defensa, ataquesEspeciales){
        this.id = id
        this.nombre = nombre
        this.tipos = tipos
        this.vida = vida
        this.ataque = ataque
        this.defensa = defensa
        this.ataquesEspeciales = {
            especial: "Hoja afilada",
            incremento: 1.5
        }
    }

    atacar(pokemonB){
        let ataque = Math.round(Math.random()*this.ataque);
        let defensa = Math.round(Math.random()*pokemonB.defensa);

        console.log(this.nombre + " ataca a " + pokemonB.nombre)
        console.log(this.nombre + " ataca con " + ataque + " puntos de daño")
        console.log(pokemonB.nombre + " consigue una defensa de " + defensa + " puntos")

        if (ataque > defensa) {
            let resultado = ataque - defensa

            console.log(this.nombre + " asesta " + resultado + " puntos de daño")

            let vidaFinal = pokemonB.vida - resultado
    
            console.log("La salud de " + pokemonB.nombre + " es ahora de " + vidaFinal  + " puntos de vida")
        } else {
            console.log(this.nombre + " ha fallado el ataque!")
            
            console.log("La salud de " + pokemonB.nombre + " es ahora de " + pokemonB.vida  + " puntos de vida")
        }
    }

    ataqueEspecial(pokemonB){
        let ataque = Math.round(Math.random()*this.ataque);
        let defensa = Math.round(Math.random()*pokemonB.defensa);

        let ataqueIncrementado = ataque * this.ataquesEspeciales.incremento

        console.log("==" + this.nombre + " usa " + this.ataquesEspeciales.especial + "==")
        console.log(this.nombre + " ataca a " + pokemonB.nombre)
        console.log(this.nombre + " ataca con " + ataqueIncrementado + " puntos de daño")
        console.log(pokemonB.nombre + " consigue una defensa de " + defensa + " puntos")

        if (ataqueIncrementado > defensa) {
            let resultado = ataqueIncrementado - defensa

            console.log(this.nombre + " asesta " + resultado + " puntos de daño")

            pokemonB.vida = pokemonB.vida - resultado
    
            console.log("La salud de " + pokemonB.nombre + " es ahora de " + pokemonB.vida  + " puntos de vida")
        } else {
            console.log(this.nombre + " ha fallado el ataque!")
            
            console.log("La salud de " + pokemonB.nombre + " es ahora de " + pokemonB.vida  + " puntos de vida")
        }
    }
}

let bulbasaur = new Pokemon(1, "Bulbasaur", ['Grass', 'Poison'], 45, 49, 49)
let squirtle = new Pokemon(1, "Squirtle", ['Water'], 44, 48, 65)

//bulbasaur.atacar(squirtle)
bulbasaur.ataqueEspecial(squirtle)
bulbasaur.ataqueEspecial(squirtle)



