import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div>
      <footer className={styles.footer}>
        <p> Te invito a seguirme y tambien ponete en contacto conmigo </p>

        <ul>
          <li>
            <a href="#">
              <img src="image_source_url" 
              alt="description" />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
