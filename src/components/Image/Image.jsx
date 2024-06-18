import styles from './Image.module.scss';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row'; 
import reactSvg from '../../assets/react.svg'; 

function ShapeExample({ type }) {
  let imageType;

  switch (type) {
    case 'rounded':
      imageType = <Image src="holder.js/171x180" rounded />;
      break;
    case 'roundedCircle':
      imageType = <Image className={styles.prueba} src={reactSvg} roundedCircle />; 
      break;
    case 'thumbnail':
      imageType = <Image src="holder.js/171x180" thumbnail />;
      break;
    default:
      imageType = <Image src="holder.js/171x180" />;
      break;
  }

  return (
    <Container className={styles.container}>
      <Row>
        <Col xs={12} md={12}>
          {imageType}
        </Col>
      </Row>
    </Container>
  );
}

export default ShapeExample;

{/* <ShapeExample type="roundedCircle" /> */}