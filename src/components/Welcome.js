import { useState, useEffect } from 'react';

export default function Welcome(props){
    const [counter, setCounter] = useState(0);
    
    const  [ semaforo, setSemaforo ] = useState(false);

    const { message, name } = props;
    
    useEffect(() => {
        console.log(semaforo);
    }, [semaforo])

    const contar = () => {
        //console.log('Entrando en la función de contar');
        setCounter(counter + 1);

        setSemaforo(!semaforo);

    };

    console.log(semaforo)

    return (
        <div>
            <h1>Hola, {name} </h1>
            <p>{ message }</p>
            <h2>Contador de React con Hooks </h2>
            <p>El semaforo esta en color { semaforo ? 'red' : 'green'} </p>
            <h4>El número del contador es { counter }</h4>
            <button type='submit'  onClick={contar}>Sumar Contador</button>

        </div>
    );
}