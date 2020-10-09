const BASE_URL = "https://pokeapi.co/api/v2";

window.onload = () => { 
    const uriAllPk = `${BASE_URL}/pokemon/`;
    
    fetchData(uriAllPk, createAllPokemons);
}

//Crear card de pokemon
const createPokemonCard = (pokemon) => { 
    const { index, name, types, img } = pokemon;
    
    const container = document.createElement("div");
    container.classList.add("pokemon-card");

    const typeHolders = types.reduce((acc, el) => { 
        return acc + `<p> ${el} </p>`;
    }, "");
    
    const content = `
        <div class="image-container">
            <img src="${img}" alt="${name}">
            <span class="pokedex-index"> ${index} </span>
        </div>
        <div class="info">
            <h3> ${name} </h3>

            <div class="types">
                ${typeHolders}
            </div>
        </div>
    `;

    container.innerHTML = content;
    return container;
}

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

const fetchData = async (uri, action) => { 
    try {
        const response = await fetch(uri);

        if (response.ok) {
            const data = await response.json();
            action(data);
        } else { 
            console.warn("Error en la petición");
        }
    } catch (error) {
        console.error("Ocurrio un error :'v");
    }
}


const createAllPokemons = async ({ results: rawPokemons }) => { 
    const pokemonsUrls = rawPokemons.map(element => element.url);

    const cardContainer = document.querySelector(".cards");
    cardContainer.innerHTML = "";

    for (const url of pokemonsUrls) { 

        await fetchData(url, (rawPokemon) => {
            const pokemon = parsePokemon(rawPokemon);
            const card = createPokemonCard(pokemon);
            cardContainer.appendChild(card);
        });
    
    }
}

//Versión con Promise.all

/* const createAllPokemons = async ({ results: rawPokemons }) => {
    const pokemonsUrls = rawPokemons.map((element) => element.url);

    const cardContainer = document.querySelector(".cards");
    cardContainer.innerHTML = "";

    const promisesPokemons = pokemonsUrls.map(async (url) => {
            try {
                const response = await fetch(url);

                if (response.ok) {
                    const data = await response.json();
                    const pokemon = parsePokemon(data);
                    const card = createPokemonCard(pokemon);

                    return card;
                } else {
                    console.warn("Error en la petición");
                }
            } catch (error) {
                console.error("Ocurrio un error :'v");
            }
    });

    const cards = await Promise.all(promisesPokemons);

    cards.forEach(card => cardContainer.appendChild(card));
    console.log(cards);
}; */