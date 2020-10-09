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
}