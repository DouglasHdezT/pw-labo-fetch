/**
 * Promesas como tal
 */

const promesa = () => { 
    return new Promise((resolve, reject) => { 
        //Random number
        setTimeout(() => {
            const number = Math.floor(Math.random() * 2);
            
            if (number === 0) {
                reject("No acepto ceros");
            } else {
                resolve("Numero aceptado");
            }
        }, 200);
    })
}

/* console.log(promesa()); */

promesa()
    .then((value) => {
        console.log(`Promise: ${value}`);
    })
    .catch((error) => { 
        console.log(`Error: ${error}`);
    });

/**
 * Promesa con parámetros
 */

const promesa2 = (number) => { 
    return new Promise((resolve, reject) => { 
        setTimeout(() => { 
            if (number % 2 !== 0) {
                reject("No acepto impares");
            } else {
                resolve("Numero par aceptado");
            }
        }, 1000);
    });
}

promesa2(4)
    .then((value) => { 
        console.log(`Promise2: ${value}`);
    })
    .catch((error) => { 
        console.error(`Error: ${error}`);
    });

/**
 * La maravillosa aparición de async y await
 * Primero lo primero: Async
 */

const asyncFun = async (number) => { 
    /* if (number % 2 === 0) {
        return "Numero par asincrono aceptado";
    } else { 
        throw new Error("Numero impar asincrono denegado")
    } */
    
    if (number % 2 !== 0) {
        throw new Error("Numero impar asincrono denegado")
    }
    
    return "Numero par asincrono aceptado";
}

asyncFun(2)
    .then(value => console.log(`Async: ${value}`))
    .catch(err => console.log(`Error: ${err.message}`));

/**
 * Uso de await
 */
const awaiting = async () => { 
    try {
        console.log("Awaiting: Checkpoint 1");

        //const result = await promesa2(1);
        const result = await asyncFun(2);
        console.log(`Awaiting: ${result}`)

        console.log("Awaiting: Checkpoint 2");
    } catch (error) {
        console.log(`Awaiting: ${error.message}`)
    }
}

awaiting();