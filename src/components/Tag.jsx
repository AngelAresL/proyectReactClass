import PropTypes from "prop-types";

const Tag = ({ etiqueta }) => {
  return (
    <div
      className="tag"
      style={{ display: "flex", gap: "2px", margin: "8px 0px" }}
    >
      {etiqueta.map((tag, index) => {
        return (
          <span
            key={index}
            style={{
              background: "lightgray",
              padding: "4px 8px",
              borderRadius: "16px",
            }}
          >
            {tag}
          </span>
        );
      })}
    </div>
  );
};
Tag.propTypes = {
  etiqueta: PropTypes.array.isRequired,
};

export default Tag;
