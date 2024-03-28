import { useState } from "react";

const ContactForm = () => {
  //Aqui deberan implementar el form completo con sus 
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [err, setErr] = useState(false);
  const [msgOk, setMsgOk] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (userName.trim().length > 5 && emailRegex.test(userEmail)) {
      setErr(false)
      setMsgOk(true)
      setTimeout(() => {
        setMsgOk(false)
        setUserName('')
        setUserEmail('')
      }, 4000);
    } else {
      setErr(true)
      setMsgOk(false)
    }
  }

  return (
    <div>
      {err && <p>**Please check your information again**</p> }
      {msgOk ? <p>**Thanks {userName}, We will contact you as soon as possible via email**</p> : 
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">Name: </label>
          <input placeholder="What's your name?" type="text" id="userName" value={userName} onChange={(e)=>setUserName(e.target.value)} />
        </div>
        <div>
          <label htmlFor="">Email: </label>
          <input placeholder="Enter your email" type="text" id="userEmail" value={userEmail} onChange={(e)=>setUserEmail(e.target.value)} />
        </div>
        <button>Send</button>
      </form> }
    </div>
  );
};

export default ContactForm;
