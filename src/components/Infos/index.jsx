import styles from "./infos.module.css";

export default function Infos({ idade, freelance, endereco }) {
  return (
    <div className={styles.infosWrapper}>
      <div className={styles.infos}>
        <div className={styles.info}>Idade:</div>
        <div>
          <p>{idade}</p>
        </div>
      </div>
      <div className={styles.infos}>
        <div className={styles.info}>Freelance:</div>
        <div>
          <p>{freelance}</p>
        </div>
      </div>
      <div className={styles.infos}>
        <div className={styles.info}>Residência:</div>
        <div>
          <p className={styles.disponivel}>{endereco}</p>
        </div>
      </div>
    </div>
  );
}
