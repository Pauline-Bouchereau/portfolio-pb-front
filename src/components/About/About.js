// Import CSS
import "./about.css";

// Import picture
import photoPB from "../../assets/img/photopauline.jpeg";

const About = () => {
  return (
    <section id="about">
      <div>
        <h2>Bonjour, je suis Pauline !</h2>
        <h3>Développeuse Web et Mobile JS - React - React Native </h3>
        <p>
          Après 5 ans à travailler en Marketing dans la restauration, et une
          petite remise en question, j'ai décidé de me réiorenter après avoir
          découvert le code via des sites comme Codecademy ou Free Code Camp.
        </p>
        <p>
          Pour accélerer et professionaliser mon apprentissage, j'ai rejoint la
          formation Bootcamp Le Reacteur en mars 2021.
        </p>
        <p>
          Grâces aux connaissances techniques que j'ai obtenues lors de ce
          bootcamp, et aux softs skills en matière de gestion de projets et de
          travail en équipes acquises dans mes prédécentes expériences, je suis
          prête à me lancer dans le monde du développement !
        </p>
      </div>
      <img src={photoPB} alt="Pauline Bouchereau" />
    </section>
  );
};

export default About;
