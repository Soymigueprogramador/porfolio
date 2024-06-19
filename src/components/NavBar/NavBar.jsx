import styles from './NavBar.module.scss';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <Navbar expand="lg" className={styles.navbar}>
      <Container>
        <Navbar.Brand className={styles.title}> Miguel Salazar </Navbar.Brand>
        <Navbar.Toggle className={styles.Toggle} aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className={styles.pages}> Inicio </Link>
            <Link to="/sobre-mi" className={`${styles.pages}`}> Sobre mí </Link>
            <Link to="/certificados" className={`${styles.pages}`}> Certificados </Link>
            <Link to="/tecnologias" className={`${styles.pages}`}> Tecnologias </Link>
            <Link to="/proyectos" className={`${styles.pages}`}> Proyectos </Link>
            <Link to="/contacto" className={`${styles.pages}`}> Contacto </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;