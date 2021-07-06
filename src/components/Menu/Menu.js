// Import CSS
import "./menu.css";

const Menu = () => {
  return (
    <aside>
      <menu>
        <li>
          <a href="#about">A propos</a>
        </li>
        <li>
          <a href="#stack">Mon stack</a>
        </li>
        <li>
          {" "}
          <a href="#projects">Mes projets</a>
        </li>
        <li>
          {" "}
          <a href="#resume">Mon parcours</a>
        </li>
        <li>
          {" "}
          <a href="#contact">Contactez-moi !</a>
        </li>
      </menu>
    </aside>
  );
};

export default Menu;
