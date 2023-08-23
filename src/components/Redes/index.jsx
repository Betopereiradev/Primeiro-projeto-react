import styles from "./redes.module.css";
import instagramIco from "../../assets/instagram.png";

export default function Redes({ instagramUrl, linkedinUrl, githubUrl }) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.rede}>
          <a href={instagramUrl} target={"_blank"}>
            <img src={instagramIco} alt="" />
          </a>
        </div>
      </div>
    </>
  );
}
