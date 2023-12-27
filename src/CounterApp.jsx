import { useState, Fragment } from 'react';
import PropTypes from 'prop-types';

export const CounterApp = ({ value }) => {

        const [ counter, setCounter ] = useState( value );

        const plusOne = () => {
            // console.log(event);
            setCounter ( counter + 1 );
        }

        const minusOne = () => setCounter ( counter - 1 );

        const resetCounter = () => setCounter ( value );
        
        return(
        
            <Fragment>
                <h1>CounterApp</h1>

                <h2> { counter } </h2>

                <button onClick={ plusOne }>
                    +1
                </button>

                <button onClick={ minusOne }>
                    -1
                </button>

                <button aria-label='btn-reset' onClick={ resetCounter }>
                    Reset
                </button>
            </Fragment>
        
    )
} 


CounterApp.protTypes = {
    value: PropTypes.number.isRequired
}


