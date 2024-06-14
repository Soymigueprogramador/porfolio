import styles from './NavBar.module.scss';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <Navbar expand="lg" className={styles.navbar}>
      <Container>
        <Navbar.Brand className={styles.title}> Miguel Salazar </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className={styles.collapse} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={styles.pages}> Inicio </Nav.Link>
            <Nav.Link href="#link" className={styles.pages}> Sobre mí </Nav.Link>
            <Nav.Link href="#link" className={styles.pages}> Certificados </Nav.Link>
            <Nav.Link href="#link" className={styles.pages}> Proyectos </Nav.Link>
            <Nav.Link href="#link" className={styles.pages}> Contacto </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;