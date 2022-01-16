import { useEffect, useState } from "react";
import RowComponent from "./components/RowComponent";
import { swapiCharacters } from "./data/swapi";
import './App.css';

function App() {
  const [characters, setCharacters] = useState([]);
  const [pagination, setPagination] = useState(1);
  useEffect(() => {
    swapiCharacters(pagination).then(res => setCharacters(res.results));
  }, [pagination])
  const handlePrevious = () => {
    setPagination(pagination-1)
  }
  const handleNext = () => {
    setPagination(pagination+1)
  }
  return (
    <div className="main__container">
      <table className="table__container">
        <thead className="table__container--head">
          <th>Name</th>
          <th>Gender</th>
          <th>Height</th>
          <th>Weight</th>
          <th>Homeworld</th>
          <th>Birth</th>
        </thead>
        <tbody className="table__container--body">
          {characters.map(character => 
            <RowComponent character={character}/>
            )}
        </tbody>
      </table>
      <div className="pagination">
        <button type="button" className="pagination--back" onClick={handlePrevious} disabled={pagination===1}> {`<`} </button>
        <h3>{pagination}</h3>
        <button type="button" className="pagination--next" onClick={handleNext} disabled={characters.length<10}> {`>`} </button>
      </div>
    </div>
  );
}

export default App;
