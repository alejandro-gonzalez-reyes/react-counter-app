// Contenido que no cambie y que sea usado dentro de nuestros componentes, React recomienda sacarlo fuera del cuerpo de nuestros componentes.
// Esto no significa que esté disponible en el ámbito global, solo estará disponible a nivel de módulo (archivo)
// Al moverlo fuera de nuestros componentes, React renderizará más rápido los cambios, ya que no perderá tiempo en procesar dicha información que jamás cambia
const nombre = "Alejandro González Reyes";
const frutas = ["mandarina", "naranja", "uva", "durazno"];
const mensaje = {
  titulo: "Advertencia",
  contenido: "Hola mundo desde React",
};

// Como el contenido de esta función no tiene dependencia directa con el componente (no usa variables que formen parte del estado)
// puede declararse fuera del mismo
// Si se declara dentro, el funcionamiento sería el mismo, pero bajo el capo, cada vez que se renderice el componente, React tendría que reservar espacio en memoria para dicha función
const obtenerNombreConProfesion = (profesion) => {
  return `${nombre} tiene el titulo de ${profesion}`;
};

// Componente FirstApp
// Los componentes en react son funciones, por tanto, los props que se le pasan a los componentes son como parámetros que necesitan esos componentes para poder funcionar

/**
 *
 * Los props es un objeto que se le pasa al componente con información
 * const MiComponente(props) {}
 *
 * Generalmente a ese objeto se le desestructura para tener acceso directo a la información que se necesita
 * const MiComponente({info1, info2, infoN}) {}
 *
 * En ocasiones podemos establecer información por defecto, en caso de que el componente no se le pase alguna propiedad con un valor
 * const MiComponente({nombre = 'Desconocido'}) {}
 */
export const FirstApp = ({
  title = "Mi Componente Principal",
  subtitle,
  cantidad,
}) => {
  return (
    // Fragmento <> en React
    <>
      <h1>{title}</h1>
      <h3>
        {subtitle} - <mark>{cantidad + 360}</mark>
      </h3>
      <p>
        Los Fragment en React, nos permiten encapsular o agrupar contenido sin
        que exista necesidad de utilizar una etiqueta HTML para ello. Son útiles
        para evitar anidamientos de elementos div innecesarios.
      </p>
      {/* Interpolar contenido de variables en JSX */}
      <h3>Interpolar contenido de variables</h3>
      <p>
        Podemos mostrar el contenido de las variables en nuestros componentes
        haciendo uso de llaves simples, y colocar cualquier expresión válida de
        JavaScript a excepción de objetos
      </p>
      <ul>
        <li>{nombre}</li>
        <li>{frutas}</li>
        <li>{450 - 127}</li>
      </ul>
      <p>
        Se puede acceder al contenido de los objetos e imprimirlo en la vista
        accediendo directamente a la propiedad involucrada
      </p>
      <ul>
        <li>{mensaje.titulo}</li>
        <li>{mensaje.contenido}</li>
      </ul>
      <p>
        Si deseamos mostrar el contenido completo del objeto es importante
        convertirlo a cadena
      </p>
      <pre>{JSON.stringify(mensaje)}</pre>
      <p>
        Podemos invocar funciones de forma directa para que retornen valores y
        mostrarlos en nuestra vista. Pero se debe tener cuidado que no se
        asíncrona o que la tarea sea muy compleja, ya que el resultado de una
        promesa puede demorar demasiado y se puede tener problemas ciclicos al
        momento de dibujar la vista. Para el caso de promesas se recomienda el
        uso de hook o hacer uso del ciclo de vida de un componente si este se
        encuentra definido como una clase
      </p>
      <p>
        <strong>{obtenerNombreConProfesion("Desarrollador Web SR.")}</strong>
      </p>
    </>
  );
};
