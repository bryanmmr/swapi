export const swapiCharacters = async (page) => {
    const characters = await fetch(`https://swapi.dev/api/people/?page=${page}`).then(res => res.json());
    return characters;
}
export const swapiPlanet = async (planetId) => {
    const planet = await fetch(`${planetId}`).then(res => res.json());
    return planet;
}
export const swapiSpecies = async (speciesId) => {
    const species = await fetch(`${speciesId}`).then(res => res.json());
    return species;
}