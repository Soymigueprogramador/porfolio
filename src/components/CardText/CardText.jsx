{/* import styles from './CardText.module.scss'
import Card from 'react-bootstrap/Card';

function TextExample() {
  return (
    <Card >
      <Card.Body className={styles.card}>
        <Card.Title className={styles.title}> Miguel Salazar </Card.Title>
        <Card.Subtitle className={styles.sub_title}> Desarrollador front-end y futuro fullstack </Card.Subtitle>
        <Card.Text className={styles.text}>
        A mis 18 años, pude comprarme mi primera PC y allí nació mi gusto por la informática.
        Antes de ser programador, estaba en camino a ser profesor de música, pero por temas económicos tuve que abandonar dicha carrera. <br></br>
        En busca de algo más que pudiera estudiar, me encontré con el canal de "Soy Dalto" y sus cursos de HTML y CSS. <br></br>
        Mientras cursaba mi último año en la carrera anterior, empecé a probar esos cursos. Me descargué VS Code y comencé a practicar. <br></br> 
        En diciembre de 2022, decidí que la programación era el camino que quería seguir, así que me inscribí en el bootcamp de "CoderHouse" y, desde ese momento, no he dejado de aprender a programar. <br></br>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default TextExample; */}







import PropTypes from 'prop-types';
import styles from './CardText.module.scss';
import Card from 'react-bootstrap/Card';

function TextExample({
  title = 'Miguel Salazar',
  subtitle = 'Desarrollador front-end y futuro fullstack',
  text = `
    A mis 18 años, pude comprarme mi primera PC y allí nació mi gusto por la informática.
    Antes de ser programador, estaba en camino a ser profesor de música, pero por temas económicos tuve que abandonar dicha carrera. <br></br>
    En busca de algo más que pudiera estudiar, me encontré con el canal de "Soy Dalto" y sus cursos de HTML y CSS. <br></br>
    Mientras cursaba mi último año en la carrera anterior, empecé a probar esos cursos. Me descargué VS Code y comencé a practicar. <br></br> 
    En diciembre de 2022, decidí que la programación era el camino que quería seguir, así que me inscribí en el bootcamp de "CoderHouse" y, desde ese momento, no he dejado de aprender a programar. <br></br>
  `
}) {
  return (
    <Card>
      <Card.Body className={styles.card}>
        <Card.Title className={styles.title}> {title} </Card.Title>
        <Card.Subtitle className={styles.sub_title}> {subtitle} </Card.Subtitle>
        <Card.Text className={styles.text} dangerouslySetInnerHTML={{ __html: text }} />
      </Card.Body>
    </Card>
  );
}

TextExample.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  text: PropTypes.string,
};

export default TextExample;