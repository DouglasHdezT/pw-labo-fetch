const BASE_URL = "https://pokeapi.co/api/v2";


window.onload = () => {
    fetchData(`${BASE_URL}/pokemon`, createAllPokemons);
}

/**
 * Funcion encargada de crear un Elemento HTML con la información de un pokemon
 */
const createPokemonCard = (pokemon) => { 
    const { index, name, types, img } = pokemon;

    const container = document.createElement("div");
    container.classList.add("pokemon-card");

    const typesHolders = types.reduce((acc, type) => acc +`<p>${type}</p>`, "");

    const content = `
        <div class="image-container">
            <img src="${img}" alt="${name}">
            <span class="pokedex-index"> ${index} </span>
        </div>
        <div class="info">
            <h3> ${name} </h3>

            <div class="types">
                ${ typesHolders }
            </div>
        </div>
    `;

    container.innerHTML = content;
    return container;
}

/**
 * Función encargada de trasnformar los datos de la API de un poke a datos procesables 
 */
const parsePokemon = (rawPokemon) => { 
    const types = rawPokemon.types.map(element => element.type.name);

    const pokemon = {
        index: rawPokemon.id,
        name: rawPokemon.name,
        img: rawPokemon.sprites.front_default,
        types: types,
    }

    return pokemon;
}

/**
 * Fetch universal function
 */
const fetchData = async (uri, action) => { 
    try {
        const result = await fetch(uri);

        if (result.ok) {
            const data = await result.json();
            action(data);
        } else { 
            console.error("Error en la petición")
        }
    } catch (error) {
        console.error("Ocurrió un error :/")
    }
}

/**
 * A paritr de los datos de la API procesa los pokemones, haciendo fetch a cada uno de ellos
 */
const createAllPokemons = async ({ results: rawPokemons }) => { 
    try {
        const pokemonsUrls = rawPokemons.map(el => el.url);
        const cardsContainer = document.querySelector(".cards");

        cardsContainer.innerHTML = "";

        for (const url of pokemonsUrls) { 
            await fetchData(url, (rawPokemon) => {
                const pokemon = parsePokemon(rawPokemon);
                const card = createPokemonCard(pokemon);
                cardsContainer.appendChild(card);
            });
        }
    } catch (error) {
        console.error("Ocurrió un error :/")
    }
}
