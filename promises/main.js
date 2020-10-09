const promesa = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const number = Math.floor(Math.random() * 2);

            if (number === 0) {
                reject("No acepto ceros");
            } else { 
                resolve("Numero random aceptado");
            }
        }, 250);
    });
};

//console.log(promesa())

/* promesa()
    .then((value) => { 
        console.log(`Promesa: ${value}`);
    })
    .catch((err) => { 
        console.log(`Promesa Error: ${err}`);
    }) */


const promise2 = (number) => { 
    return new Promise((resolve, reject) => { 
        setTimeout(() => { 
            if (number % 2 === 0) {
                resolve("Numero par aceptado");
            } else { 
                reject("Numero impar denegado")
            }
        }, 1000);
    });
}

promise2(1)
    .then(value => console.log(`Promise 2: ${value}`))
    .catch(error => console.log(`Promise 2 Error: ${error}`))
    .finally(() => { console.log("Promise 2: Siempre me ejecuto")});

/**
 * Async y await
 * Stop: primero entandamos async
 */

const asyncFun = async (number) => {
    //return "sfjsdljfa"; //<- resolve(kfdsjña)
    //throw new Error(); //<- reject
    //La funcion termine <- resolve()

    if (number % 2 !== 0) { 
        throw new Error("Numero impar asincrono");
    }

    return "Numero par asincrono";
}

/* asyncFun(2)
    .then(value => console.log(`Async: ${value}`))
    .catch(error => console.log(`Async Error: ${error.message}`)); */

/**
 * Await
 */

const awaiting = async () => { 
    try {
        const result = await asyncFun(2);
        console.log(`Await: ${result}`)
    } catch (error) {
        console.error(`Await: ${error}`)
    } finally { 
        console.log("Await: Siempre me ejecuto")
    }
}

awaiting();