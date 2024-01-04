import PropTypes from "prop-types";

// Si la función no depende de valores gestionados directamente por el componente (estado interno), se recomienda definirla fuera del cuerpo del componente
// La función puede coexistir dentro del componente, pero, cada vez que el componente se redibuje, React asignará un nuevo espacio en memoria para apuntar a dicha función
const incrementar = (event) => {
  console.log("Incremento");
  console.log(event);
};

const decrementar = (event) => {
  console.log("Decremento");
  console.log(event);
};

export const CounterApp = ({ value }) => {
  return (
    <div>
      <h1>Counter App</h1>
      <h2>{value}</h2>
      <hr />
      {/* 
      // ? Evento Sintético de React 
      Son una envoltura de los eventos nativos del navegador, cuentan con la misma interfaz, su intención es que funcionen y se comporten de la misma manera en todos los navegadores
      En este sentido, para cada evento nativo, React cuenta con un evento sintético

      La información del evento pasa de forma directa a la función (no es necesario especificarlo), en caso de que la función requiera más parámetros, es necesario especificarlos de forma explicita

      onClick={function (event) { .... }}
      onClick={(event, param1, param2) => { .... }}
      onClick={myfuncion}
      onClick={(event, param1) => myFuncion(event, param1)}
      */}
      <button onClick={incrementar}>+1</button>
      <button onClick={decrementar}>-1</button>
      <button
        onClick={function (event) {
          alert("Hola mundo");
          console.log(event);
        }}
      >
        Saludar
      </button>
    </div>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};
