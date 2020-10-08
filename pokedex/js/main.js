window.onload = () => {

}

/**
 * Funcion encargada de crear un Elemento HTML con la información de un pokemon
 */
const createPokemonCard = (pokemon) => { 
    const { index, name, types, img } = pokemon;

    const container = document.createElement("div");
    container.classList.add("pokemon-card");

    const typesHolders = types.map(type => `<p>${type}</p>`);

    const content = `
        div class="image-container">
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

const createPokemon = (rawPokemon) => { 
    const types = rawPokemon.types.map(element => element.type.name);

    const pokemon = {
        index: rawPokemon.id,
        name: rawPokemon.name,
        img: rawPokemon.sprites.front_default,
        types: types,
    }

    return pokemon;
}