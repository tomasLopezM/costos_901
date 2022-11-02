import { Draggable } from "@shopify/draggable";
import { useCallback, useRef, useState } from "react";

function App() {
  const [preguntas, setPreguntas] = useState([
    {
      id: 1,
      titulo: "Primera pregunta",
      html: ``,
      estado: true,
      estadoPregunta: true,
    },
    {
      id: 2,
      titulo: "Segunda pregunta",
      html: "",
      estado: false,
      estadoPregunta: false,
    },
    {
      id: 3,
      titulo: "Tercera pregunta",
      html: "",
      estado: false,
      estadoPregunta: false,
    },
    {
      id: 4,
      titulo: "Cuarta pregunta",
      html: "",
      estado: false,
      estadoPregunta: false,
    },
  ]);

  const [preguntaActual, setPreguntaActual] = useState(1);

  const handleChange = (x) => {
    console.log(x.target.id.split("_")[0]);
    handleAsk(x.target.id.split("_")[0]);
  };

  const handleAsk = (x) => {
    let changeAsk = preguntas.map((v) => {
      if (v.id == x) {
        v.estadoPregunta = false;
        return v;
      } else if (parseInt(x) + 1 == v.id) {
        v.estadoPregunta = true;
        v.estado = true;
        return v;
      } else {
        return v;
      }
    });

    setPreguntas(changeAsk);

    let datanumber = parseInt(x) + 1;

    setPreguntaActual(datanumber);
  };

  const backAsk = (x) => {
    let id = x.target.id;
    let changeAsk;

    if (id == preguntaActual - 1) {
      changeAsk = preguntas.map((v) => {
        if (v.id == id) {
          v.estadoPregunta = true;
          v.estado = true;
          return v;
        } else if (parseInt(id) + 1 == v.id) {
          v.estadoPregunta = false;
          v.estado = false;
          return v;
        } else {
          return v;
        }
      });
      setPreguntas(changeAsk);
    } else {
      return;
    }
  };

  function mensajeUltimo() {
    if (
      preguntaActual > preguntas[preguntas.length - 1].id &&
      preguntas[preguntas.length - 1].estadoPregunta == false
    ) {
      return (
        <>
          <div className="alert alert-success shadow-lg mb-2">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current flex-shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Gracias por responder la encuesta</span>
            </div>
          </div>

          <ul className="card w-96 bg-base-100 shadow-xl p-5 ">
            <p className="text-xl font-semibold">Total</p>
            <hr />

            <li>1 Bateria</li>
            <li>1 Panel de alarma </li>
            <li>13 Sen. Mag.</li>
            <li>3 Sen. de movimiento</li>
            <li>1 Sirena ext.</li>
            <li>1 Sirena int.</li>
            <li>1 Teclado 8z</li>
            <hr />
            <li className="text-xl font-semibold">$ 103.250,00</li>
          </ul>
        </>
      );
    }
  }

  return (
    <div>
      <ul className="steps">
        {preguntas.map((x) => {
          return (
            <li
              className={`step ${x.estado == true ? "step-primary" : ""}`}
              id={x.id}
              key={x.id}
              onClick={backAsk}
            >
              {x.estadoPregunta == true && (
                <div>
                  <p>{x.titulo}</p>
                  <input
                    type="checkbox"
                    className="checkbox"
                    id={x.id + "_check"}
                    onChange={handleChange}
                  />
                  <input
                    type="checkbox"
                    className="checkbox"
                    id={x.id + "_check"}
                    onChange={handleChange}
                  />
                </div>
              )}
            </li>
          );
        })}
      </ul>

      {mensajeUltimo()}
    </div>
  );
}

function App2() {
  const [preguntas, setPreguntas] = useState([
    {
      id: 1,
      titulo: "Primera pregunta preguntona",
      estado: true,
      estadoPregunta: true,
      opciones: [
        {
          id: 1,
          titulo: "Opcion 1",
          estadoOpcion: false,
        },
        {
          id: 2,
          titulo: "Opcion 2",
          estadoOpcion: false,
        },
      ],
    },
    {
      id: 2,
      titulo: "Segunda pregunta preguntona",
      estado: false,
      estadoPregunta: false,
      opciones: [
        {
          id: 3,
          titulo: "Opcion 1",
          estadoOpcion: false,
        },
        {
          id: 4,
          titulo: "Opcion 2",
          estadoOpcion: false,
        },
        {
          id: 5,
          titulo: "Opcion 3",
          estadoOpcion: false,
        },
      ],
    },
    {
      id: 3,
      titulo: "Tercera pregunta preguntona",
      estado: false,
      estadoPregunta: false,
      opciones: [
        {
          id: 6,
          titulo: "Opcion 1",
          estadoOpcion: false,
        },
        {
          id: 7,
          titulo: "Opcion 2",
          estadoOpcion: false,
        },
        {
          id: 8,
          titulo: "Opcion 3",
          estadoOpcion: false,
        },
        {
          id: 9,
          titulo: "Opcion 4",
          estadoOpcion: false,
        },
      ],
    },
    {
      id: 4,
      titulo: "Cuarta pregunta preguntona",
      estado: false,
      estadoPregunta: false,
      opciones: [
        {
          id: 10,
          titulo: "Opcion 1",
          estadoOpcion: false,
        },
        {
          id: 11,
          titulo: "Opcion 2",
          estadoOpcion: false,
        },
      ],
    },
  ]);
  const [porcentaje, setPorcentaje] = useState(1);
  const selectOpcion = (id_opcion, id_pregunta) => {
    let arrayNew = [...preguntas];

    arrayNew.map((valor) => {
      if (valor.id == id_pregunta) {
        valor.estado = false;

        valor.opciones.find((x) => x.id == id_opcion).estadoOpcion = true;
      }

      if (parseInt(id_pregunta) + 1 == valor.id) {
        valor.estado = true;
        valor.estadoPregunta = true;
      }
    });

    setPreguntas(arrayNew);
    handleChangePorcentaje(id_pregunta);
  };

  const handleMutipleOpcion = (array, id) => {
    return array.map((valor) => {
      return (
        <div
          className=" cursor-pointer border rounded-md p-3 hover:bg-gray-50"
          key={valor.id}
          onClick={() => selectOpcion(valor.id, id)}
        >
          {valor.titulo}
        </div>
      );
    });
  };
  const handleChangePorcentaje = (id_pregunta) => {
    let newArray = preguntas.filter((x) => x.estadoPregunta == true);
    //console.log(Math.floor(newArray.length * 100) / preguntas.length);
    setPorcentaje(Math.floor(newArray.length * 100) / preguntas.length);
  };
  return (
    <div>
      <progress
        className="progress progress-primary w-96 h-3"
        value={porcentaje}
        max="100"
      />
      <div>
        <div className="">
          {preguntas.map((valor, index) => {
            return (
              <div className=" w-auto" key={valor.id}>
                {valor.estado == true && (
                  <div className="card-body">
                    <div>
                      {index + 1 + ") "}
                      {valor.titulo}
                    </div>
                    <div className="flex w-full gap-5 ">
                      {handleMutipleOpcion(valor.opciones, valor.id)}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
          <div>
            {preguntas.filter((x) => x.estado == true).length == 0 && (
              <>
                <div className="alert alert-success shadow-lg mb-2">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="stroke-current flex-shrink-0 h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>Gracias por responder la encuesta</span>
                  </div>
                </div>

                <ul className="card w-96 bg-base-100 shadow-xl p-5 ">
                  <p className="text-xl font-semibold">Total</p>
                  <hr />

                  <li>1 Bateria</li>
                  <li>1 Panel de alarma </li>
                  <li>13 Sen. Mag.</li>
                  <li>3 Sen. de movimiento</li>
                  <li>1 Sirena ext.</li>
                  <li>1 Sirena int.</li>
                  <li>1 Teclado 8z</li>
                  <hr />
                  <li className="text-xl font-semibold">$ 103.250,00</li>
                </ul>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function App3() {
  const [preguntasSinOrdenar, setpreguntasSinOrdenar] = useState([
    {
      id: 1,
      titulo: "Primera pregunta",
      estado: true,
      estadoPregunta: true,
    },
    {
      id: 2,
      titulo: "Segunda pregunta",

      estado: false,
      estadoPregunta: false,
    },
    {
      id: 3,
      titulo: "Tercera pregunta",
      estado: false,
      estadoPregunta: false,
    },
    {
      id: 4,
      titulo: "Cuarta pregunta",
      estado: false,
      estadoPregunta: false,
    },
  ]);

  const [preguntasOrdenadas, setpreguntasOrdenadas] = useState([]);

  const agregar = (id) => {
    let dataNew = preguntasSinOrdenar.find((x) => x.id == id);
    let data = [...preguntasOrdenadas, dataNew];

    let dataEliminar = preguntasSinOrdenar.filter((x) => x.id != id);
    setpreguntasSinOrdenar(dataEliminar);
    setpreguntasOrdenadas(data);
  };

  const eliminar = (id) => {
    let dataAgregar = preguntasOrdenadas.find((x) => x.id == id);
    let data = [...preguntasSinOrdenar, dataAgregar];
    setpreguntasSinOrdenar(data);

    let dataElminar = preguntasOrdenadas.filter((x) => x.id != id);
    setpreguntasOrdenadas(dataElminar);
  };
  return (
    <>
      <div className="border border-green-600 flex flex-wrap w-6/12 h-20">
        {preguntasSinOrdenar.map((x) => {
          return (
            <div
              className="border border-yellow-600 m-2"
              key={x.id}
              onClick={() => agregar(x.id)}
            >
              {x.titulo}
            </div>
          );
        })}
      </div>

      <div className="w-60">
        <ul>
          {preguntasOrdenadas.map((x, index) => {
            return (
              <li className="border border-red-600 my-2" key={index}>
                <div className="flex flex-row items-center gap-5">
                  <p>{x.titulo}</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    fill="currentColor"
                    viewBox="0 0 1792 1792"
                    className="cursor-pointer"
                    onClick={() => eliminar(x.id)}
                  >
                    <path d="M1490 1322q0 40-28 68l-136 136q-28 28-68 28t-68-28l-294-294-294 294q-28 28-68 28t-68-28l-136-136q-28-28-28-68t28-68l294-294-294-294q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 294 294-294q28-28 68-28t68 28l136 136q28 28 28 68t-28 68l-294 294 294 294q28 28 28 68z"></path>
                  </svg>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default App3;
