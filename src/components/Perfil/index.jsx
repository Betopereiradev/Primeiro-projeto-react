import styles from "./perfil.module.css";

export default function Perfil({ profileImg, profileNome, profileCargo }) {
  return (
    <>
      <div className={styles.container}>
        <img src={profileImg} alt="" />
        <h1>{profileNome}</h1>
        <h2>{profileCargo}</h2>
      </div>
    </>
  );
}
