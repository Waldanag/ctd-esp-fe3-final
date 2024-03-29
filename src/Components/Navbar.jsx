import { Link } from 'react-router-dom'
import { useGlobalContext } from '../Context/global.context'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const { toggleTheme } = useGlobalContext();

  return (
    <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <img src="/DH.ico" alt="" />
      <ul>
        <Link to="/" >Home</Link>
        <Link to="/Favs" >Favs</Link>
        <Link to="/Contact" >Contact</Link>
      </ul>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button onClick={toggleTheme} >Change theme</button>
    </nav>
  )
}

export default Navbar