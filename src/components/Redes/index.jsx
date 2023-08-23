import styles from "./redes.module.css";
import instagramIco from "../../assets/instagram.png";

export default function Redes({ instagram, linkedin, github }) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.rede}>
          <a href="https://github.com/betopereiradev" target={"_blank"}>
            <img src={instagramIco} alt="" />
          </a>
        </div>
      </div>
    </>
  );
}
