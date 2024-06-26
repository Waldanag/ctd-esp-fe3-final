import { useEffect, useState } from 'react'
import Card from '../Components/Common/Card';
import { getAllDentists } from '../Api/api-dentist';
import { useGlobalContext } from '../Context/global.context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const [dentists, setDentists] = useState([]);
  const { state } = useGlobalContext();

  useEffect(()=>{
    const getData = async () => {
      let dentistsData = await getAllDentists();
      setDentists(dentistsData)
    }
    getData()
  }, [])

  return (
    <main className={state.theme} >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */
          dentists.map((dentist)=>{
            return (
              <Card dentist={dentist} key={dentist.id} />
              )
            
          })
        }
      </div>
    </main>
  )
}

export default Home