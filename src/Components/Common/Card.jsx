import { Link } from "react-router-dom";
import { useGlobalContext } from "../../Context/global.context";


const Card = ({ dentist }) => {
  const { name, username, id } = dentist;
  const [state, dispatch] = useGlobalContext();

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  return (
    <div className="card">
      <div>
        <img src="/images/doctor.jpg" alt="" style={{width: "100%", height: 140}} />
      </div>
        {/* En cada card deberan mostrar en name - username y el id */}
      <div>
        <h3>{name}</h3>
        <p>{username}</p>
        <p>{id}</p>
        
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        <Link to={`/Details/${id}`} >
          <button>See Details</button>
        </Link>

      </div>


        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
