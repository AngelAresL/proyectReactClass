import PropTypes from "prop-types";
import Tag from "../Tag";
import "./Body.css";

const Body = ({ cuerpo, fecha, etiqueta }) => {
  const dateFormatter = new Intl.DateTimeFormat("es-ES", {
    dateStyle: "medium",
    timeStyle: "medium",
    timeZone: "Europe/Madrid",
  });
  const fechaFormateada = dateFormatter.format(fecha);
  return (
    <div className="body">
      <Tag etiqueta={etiqueta} />
      <p>{fechaFormateada}</p>
      <p>{cuerpo}</p>
    </div>
  );
};
Body.propTypes = {
  etiqueta: PropTypes.array,
  cuerpo: PropTypes.string.isRequired,
  fecha: PropTypes.instanceOf(Date),
};

export default Body;
