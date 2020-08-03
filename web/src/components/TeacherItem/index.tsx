import React from "react";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars2.githubusercontent.com/u/2254731?v=4"
          alt="Diego Fernandes"
        />
        <div>
          <strong>Diego Fernandes</strong>
          <span>Informática</span>
        </div>
      </header>

      <p>
        Mestre em ensinar informática basica para iniciantes. Paciência é meu
        lema.
        <br />
        <br />
        djfhajsdfhajkdhfkajsdhfjkasdhfjdsf.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 20,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
