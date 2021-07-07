// Import CSS
import "./contact.css";

// Import tool
import { useState } from "react";

const Contact = ({ serverURl }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [object, setObject] = useState("");
  const [message, setMessage] = useState("");
  // State to manage error : 0 = no problems; 1 = not all mandatory inputs were filled
  const [error, setError] = useState(0);

  const handleChangeName = (event) => {
    setName(event.target.value);
  };
  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleChangeObject = (event) => {
    setObject(event.target.value);
  };
  const handleChangeMessage = (event) => {
    setMessage(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setError(0);
  };
  return (
    <section id="contact">
      <h2>Contactez moi !</h2>
      <p>
        N'hésitez pas à m'écrire via le formulaire ci-dessous si vous souhaitez
        me proposer un poste, me faire un retour sur ce site, ou bien juste me
        dire bonjour !
      </p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Votre nom :</label>
        <input
          type="text"
          id="name"
          value={name}
          placeholder="Jacqueline"
          onChange={handleChangeName}
        />
        <label htmlFor="email">Votre email :</label>
        <input
          type="email"
          id="email"
          value={email}
          placeholder="jacqueline@mail.com"
          onChange={handleChangeEmail}
        />
        <label htmlFor="object">L'objet de votre message :</label>
        <input
          type="text"
          id="object"
          value={object}
          placeholder="Offre de stage"
          onChange={handleChangeObject}
        />
        <label htmlFor="message">Votre message :</label>
        <textarea
          cols="30"
          rows="10"
          placeholder="Ecrivez ici votre message !"
          id="message"
          value={message}
          onChange={handleChangeMessage}
        />
        <input type="submit" value="Envoyer ! ✉️" />
      </form>
    </section>
  );
};

export default Contact;
