import Card from "../Components/Common/Card";
import { useGlobalContext } from "../Context/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { state, dispatch } = useGlobalContext();
  
  const clearFavs = () => {
    dispatch({type: 'CLEAR_ALL_FAVS'})
  }

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {state.favs.length > 0 ? (
          state.favs.map(dentist=><Card dentist={dentist} key={dentist.id} />) 
        ) : (
          <h3>You have no added favorites</h3>
        )
        }
        {state.favs.length > 0 && (
          <button className="clearButton" onClick={clearFavs}>
            Clear Favorites List
          </button>
        ) 
        }
      </div>
    </>
  );
};

export default Favs;
