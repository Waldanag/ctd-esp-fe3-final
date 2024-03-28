import { useEffect, useState } from 'react'
import Card from '../Components/Common/Card';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const [dentists, setDentists] = useState([]);


  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res)=>res.json())
    .then((res)=>setDentists(res))
  }, [])


  return (
    <main className="" >
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