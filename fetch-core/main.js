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
}

let fetch2 = async () => { 
    try {
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
