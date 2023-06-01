const Cards = (props) => {
  return (
    <div className="border border-2 border-black rounded-3 mb-3 p-3">
      <div>
        <p className="fw-bold">Hola {props.datos.nombre} !</p>
      </div>
      <div className="d-flex flex-column">
        <p className="fw-bold">Sabemos que tu color favorito es:</p>
        <p
          className="rounded-1 p-2 fw-bold text-white text-center"
          style={{ backgroundColor: "#2bc145" }}
        >
          {props.datos.color.toUpperCase()}
        </p>
      </div>
    </div>
  );
};

export default Cards;
