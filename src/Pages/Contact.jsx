import ContactForm from "../Components/Forms/ContactForm"
import { useGlobalContext } from "../Context/global.context"

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  const { state } = useGlobalContext();
  return (
    <div className={state.theme} >
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <ContactForm/>
    </div>
  )
}

export default Contact