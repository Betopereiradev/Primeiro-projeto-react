import Perfil from "./components/Perfil";
import styles from "./index.module.css";
import profileImg from "./assets/profile.jpg";
import Redes from "./components/Redes";

function App() {
  return (
    <div className={styles.container}>
      <Perfil
        profileImg={profileImg}
        profileNome={"Alberto Pereira"}
        profileCargo={"Front-End Developer"}
      />
      <hr />
      <div className={styles.containerFlex}>
        <Redes />
        <Redes />
        <Redes />
      </div>
    </div>
  );
}

export default App;
