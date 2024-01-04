function ComponentePrincipal() {
    return <div>
        <h3>Componente principal</h3>
        <p>Basado en una función tradicional y exportado por defecto</p>
    </div>
}

/**
 * Al exportar un componente por defecto, se tiene acceso completo a el con tan solo importar el archivo. 
 * En este sentido, el nombre o alias utilizado para hacer referencia al componente, 
 * puede ser el puede mismo usado al nombrar la función u otro. 
 * 
 * import ComponentePrincipal from './ComponentePrincipal';
 * import OtroNombreAliasParaElComponentePrincipal from './ComponentePrincipal';
 * 
 * */ 
export default ComponentePrincipal;


/**
 * Al exportar un componente por separado, 
 * se tiene acceso completo a él haciendo referencia a su nombre al momento de importar el archivo. 
 * En este sentido, el nombre o alias utilizado para hacer referencia al componente, 
 * debe ser el mismo que el usado al momento de nombrar la función. 
 * 
 * import { MiOtroComponentePrincipal } from './ComponentePrincipal';
 * import { SuperComponente } from './ComponentePrincipal';
 * 
 * */ 
export function MiOtroComponentePrincipal() {
    return <div>
        <h3>Mi Otro Componente principal</h3>
        <p>Basado en una función tradicional y exportado por separado</p>
    </div>
}

export const SuperComponente = () => {
    return <div>
        <h3>Super Componente</h3>
        <p>Basado en una función de flecha y exportado por separado</p>
    </div>
}
