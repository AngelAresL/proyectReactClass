import PropTypes from "prop-types";
import Header from "../Header";
import Body from "../Body/Body";
import "./Person.css";

const Person = ({ persona }) => {
  return (
    <div className="person">
      <Header
        titulo={persona.title}
        subtitulo={persona.subtitle}
        imagen={persona.image}
      />
      <Body
        cuerpo={persona.body}
        fecha={new Date(persona.updated_at)}
        etiqueta={persona.tags}
      />
    </div>
  );
};
Person.propTypes = {
  persona: PropTypes.object.isRequired,
};

export default Person;
