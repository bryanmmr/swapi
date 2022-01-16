import { useEffect, useState } from "react"
import { swapiPlanet } from "../data/swapi"

const RowComponent = ({character}) => {
    const [planet, setPlanet] = useState([]);
    useEffect(()=>{
        swapiPlanet(character.homeworld).then(res => setPlanet(res));
    },[character])
    return (
        <tr>
            <td>{character.name}</td>
            <td>{character.gender}</td>
            <td>{character.height} cm</td>
            <td>{character.mass} kg</td>
            <td>{planet.name}</td>
            <td>{character.birth_year} kg</td>
        </tr>
    )
}

export default RowComponent