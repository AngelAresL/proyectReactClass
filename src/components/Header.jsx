import PropTypes from "prop-types";

const Header = ({ titulo, subtitulo, imagen }) => {
  return (
    <div
      className="header"
      style={{
        backgroundImage: `url(${imagen})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        padding: "8px",
        color: "white",
        height: "50vh"
      }}
    >
      <h1 style={{ textShadow: "0 0 5px rgba(0,0,0,0.7)" }}>{titulo}</h1>
      <h2 style={{ textShadow: "0 0 5px rgba(0,0,0,0.7)" }}>{subtitulo}</h2>
    </div>
  );
};
Header.propTypes = {
  imagen: PropTypes.string,
  titulo: PropTypes.string.isRequired,
  subtitulo: PropTypes.string.isRequired,
};
export default Header;
