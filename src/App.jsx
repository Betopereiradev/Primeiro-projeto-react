import Perfil from "./components/Perfil";
import styles from "./index.module.css";
import profileImg from "./assets/profile.jpg";
import Redes from "./components/Redes";
import Infos from "./components/Infos";

function App() {
  return (
    <div className={styles.container}>
      <Perfil
        profileImg={profileImg}
        profileNome={"Alberto Pereira"}
        profileCargo={"Front-End Developer"}
      />

      <div className={styles.containerFlex}>
        <Redes instagramUrl="https://github.com/betopereiradev" />
        <Redes />
        <Redes />
      </div>
      <hr />
      <Infos idade="23" freelance="Disponível" endereco="Alagoas" />
      <hr />
    </div>
  );
}

export default App;
