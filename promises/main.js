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
        console.log(value);
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
        }, 200);
    });
}

promesa2(4)
    .then((value) => { 
        console.log(value);
    })
    .catch((error) => { 
        console.error(`Error: ${error}`);
    });