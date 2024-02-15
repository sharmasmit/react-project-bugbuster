import React from 'react';
import PropType from 'prop-types';

function Quotes(props) {
    return (
        <div>

            <h1>{props.quote}</h1>
        </div>
    )
}

Quotes.prototype = {
    quote: PropType.string.isRequired
}
Quotes.defaultProps = {
    quote: 'You are the greatest gift Ive ever gotten'
}

export default Quotes;