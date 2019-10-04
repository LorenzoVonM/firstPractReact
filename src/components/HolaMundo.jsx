import React from 'react';

const HolaMundo = () => {
    const Hello = 'Hola Mundo';
    const isTrue = true;
    return (
        <div className='Hola Mundo'>
            <h1>{Hello}</h1>
            <h2>Curso Escencial de React</h2>
            {isTrue ? <h4>velda</h4> : <h4>falso</h4>}
            {isTrue && <h4>velda</h4> }
        </div>
    )
}

export default HolaMundo;