import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { getDentistById } from '../Api/api-dentist';
import { useGlobalContext } from '../Context/global.context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const { id } = useParams()
  const [dentistSelected, setDentistSelected] = useState({})
  const { state } = useGlobalContext();
  
  useEffect(()=>{
    const getData = async () => {
      let dentistData = await getDentistById(id);
      setDentistSelected(dentistData);
    }
    getData();
  },[id])


  return (
    <div className={state.theme} >
      <h1>Detail Dentist id </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */
        <div>
          <h3>Name: {dentistSelected.name}</h3>
          <h4>Email: {dentistSelected.email}</h4>
          <h4>Phone number: {dentistSelected.phone}</h4>
          <h4>Website: {dentistSelected.website}</h4>
        </div>
      }
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </div>
  )
}

export default Detail