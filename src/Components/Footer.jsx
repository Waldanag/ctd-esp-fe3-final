import { useGlobalContext } from "../Context/global.context"

const Footer = () => {

  const { state } = useGlobalContext();

  return (
    <footer className={state.theme} >
        <p>Powered by</p>
        <img src="/images/DH.png" alt='DH-logo' />
        
    </footer>
  )
}

export default Footer
