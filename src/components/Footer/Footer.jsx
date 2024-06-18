import styles from "./Footer.module.scss"


const Footer = () => {
  return (
    <div>
      <footer className={styles.footer}>
        <div className={styles.text}>
          <p> Te invito a seguirme en mis redes </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;