import PropTypes from "prop-types";
import { useState } from "react";

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
  // useState
  // es un hook de React que permite agregar una variable de estado a nuestros componentes funcionales
  // se recomienda asignarlos a constantes para prevenir la asignación de valor de forma directa
  // const [valorActual, funcionParaCambiarEsteValor] = useState(valorIncial)
  const [counter, setCounter] = useState(value);

  // Función controladora de evento para cambiar el valor del estado (incremento)
  const incrementarValor = (event) => {
    // Para cambiar el valor de una variable de estado, es necesario invocar la función que devuelve el hook
    // Esto informa a React que debe volver a pintar o renderizar el componente en pantalla para mostrar el nuevo valor
    setCounter(counter + 1);
  };

  // Función controladora de evento para cambiar el valor del estado (decremento)
  const decrementarValor = (event) => {
    // Otra forma de cambiar el valor actual de una variable de estado, es acceder a su valor mediante el uso de un callback
    // Esta técnica es recomendada si se tienen varias llamadas al mismo setState de forma consecutiva en un mismo contrador de eventos

    // Ya que setState no garantiza una actualización inmediata del estado, y en consecuencia las llamadas siguientes no pueden tener en cuenta los cambios realizados de las llamadas anteriores

    // Por ejemplo...
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // Solo tomará el primer cambio (solo incrementa 1 unidad y no 3), por tanto, el resto de llamadas al mismo setState no se ejecutarán.

    // Con la versión de callback tenemos la certeza de que se utilizará el último valor conocido en la variable de estado
    setCounter((currentValueCounter) => currentValueCounter - 1);

    // esto funcionará como se espera
    // setCounter((currentValueCounter) => currentValueCounter - 1);
    // setCounter((currentValueCounter) => currentValueCounter - 1);
    // setCounter((currentValueCounter) => currentValueCounter - 1);
    // Por tanto al término de la ejecución el valor de la variable de estado tendrá menos 3 unidades
  };

  return (
    <div>
      <h1>Counter App</h1>
      <h2>{counter}</h2>
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
      <button onClick={incrementarValor}>+1</button>
      <button onClick={decrementarValor}>-1</button>
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
