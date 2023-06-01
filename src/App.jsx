import { useState } from "react";
import Cards from "./components/Cards";
function App() {
  const [nombre, setNombre] = useState("");
  const [color, setColor] = useState("");
  const [mensajeError, setMensajeError] = useState(false);
  const [datosForm, setDatosForm] = useState();
  const [mostrarCard, setMostrarCard] = useState(false);

  const cargarNombre = (e) => {
    setNombre(e.target.value);
  };
  const cargarColor = (e) => {
    setColor(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      nombre.trim() === "" ||
      nombre.trim().length < 3 ||
      nombre.startsWith(" ")
    ) {
      setMensajeError(true);
    } else if (color.toString().length < 6 || color.trim() === "") {
      setMensajeError(true);
    } else {
      setDatosForm({ nombre, color });
      setMostrarCard(true);
      setMensajeError(false);
      setNombre("");
      setColor("");
    }
  };

  const limpiarForm = (event) => {
    event.preventDefault();

    setMensajeError(false);
    setMostrarCard(false);
  };

  return (
    <>
      <div className="w-75 d-flex flex-column m-5 border border-black border-2 align-items-center rounded-3">
        <p
          className="w-100 text-center fw-bold pt-3"
          style={{ fontSize: "2rem" }}
        >
          Elegi un color
        </p>
        <form
          className="d-flex w-100 py-3 flex-wrap justify-content-center"
          onSubmit={handleSubmit}
        >
          <div className="d-flex flex-column justify-content-center px-5 w-25 flex-wrap">
            <label htmlFor="inputNombre" className="form-label">
              Nombre:
            </label>
            <label htmlFor="inputcolor" className="form-label mt-3">
              Color:
            </label>
          </div>
          <div className="d-flex flex-column  w-75 pe-5">
            <input
              type="text"
              name="inputNombre"
              id="inputNombre"
              className="form-control w-100"
              value={nombre}
              onChange={cargarNombre}
              placeholder="Ingresa tu nombre"
            />
            <input
              type="text"
              name="inputColor"
              id="inputColor"
              className="form-control w-100 mt-3"
              value={color}
              onChange={cargarColor}
              placeholder="Ingresa tu color favorito (formato HEX)"
            />
          </div>
          <div className="d-flex justify-content-between mt-3 w-50">
            <button type="submit" className="btn btn-primary block">
              Enviar Formulario
            </button>

            <button className="btn btn-primary block" onClick={limpiarForm}>
              Limpiar Formulario
            </button>
          </div>
        </form>

        {mensajeError && (
          <p className="text-danger fw-bold py-3">
            Por favor chequea que la información sea correcta
          </p>
        )}
        {mostrarCard && !mensajeError && <Cards datos={datosForm} />}
      </div>
    </>
  );
}

export default App;
