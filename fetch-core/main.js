<<<<<<< HEAD
const BASE_URL = "https://pokeapi.co/api/v2";

let fetchEx1 = () => { 
    const uri = `${BASE_URL}/pokemon/`;
    console.log(uri);

    fetch(uri)
        .then((response) => {
            console.log(response);

            /**Validaciones de todo tipo */

            return response.json();
        })
        .then(data => { 
            console.log(data);
        })
        .catch(err => console.error("Algo salio mal xc"));
=======
/**
 * fetch -> API de navegador
 */

const BASE_URL = "https://pokeapi.co/api/v2";

let fetch1 = () => {
    const uri = `${BASE_URL}/pokemon/ditto`;

    fetch(uri)
        .then(response => { 
            console.log(response);
            /** TODO: Verificar estados, validar headers, etc */
            
            return response.json();
        })
        .then(data => { 
            console.log(data)
        })
        .catch(error => { 
            console.log("Algo ocurrio mal :/");
        });
>>>>>>> bareProject
}

let fetch2 = async () => { 
    try {
<<<<<<< HEAD
        const uri = `${BASE_URL}/pokemon/`;

        const response = await fetch(uri);

        //Validations

        if (response.ok) {
            const data = await response.json();
            console.log(data)
        } else { 
            console.warn(`Status: ${response.status}`);
        }

    } catch (error) {
        console.error("Algo salio mal :v");
    }
}
=======
        const uri = `${BASE_URL}/pokemon/ditto`;

        const response = await fetch(uri); 
        console.log(response);

        //TODO: Validar todo lo que se deba validar

        if (response.ok) {
            const data = await response.json();
            console.log(data);
        } else { 
            console.log(response.status);
        }

    } catch (error) {
        console.log("Algo salió mal :/");
    }
}
>>>>>>> bareProject
