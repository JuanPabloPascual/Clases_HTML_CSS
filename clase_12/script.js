

let nombre = 'pepe' 
console.log(nombre)
{
    let nombre = 'pedro' 
    console.log(nombre) 
    {
        let nombre = 'maria' 
        console.log(nombre) 
    } 
    { 
        let nombre = 'leonel' 
        console.log(nombre) 
        {
            nombre = 'julieta' 
            console.log(nombre)  
        }
        console.log(nombre)
    }
    console.log(nombre) 
    nombre = 'juan' 
} 

console.log(nombre)


/* Pepe es el bloque global

Pedro y Juan me quedan en el  bloque local 1

Maria y Leonel me quedan en el bloque local 2

Julieta me quedan en el bloque local 3

*/

/* 
Pepe
Pedro
Maria
Leonel
Julieta
Leonel
Pedro
Pepe

*/