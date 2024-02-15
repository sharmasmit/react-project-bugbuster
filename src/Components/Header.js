import React, { useState } from 'react';
import Quotes from './Quotes';
import AddQuote from './AddQuote';

function Header() {

    const [showComponent, setShowComponent] = useState(false);

    const quote = () => {
        setShowComponent(true);
    };

    return (
        <div>
            <h1>Good Morning</h1>
            <button type='submit' onClick={quote}>Add Quote</button>
            {showComponent && < AddQuote />}
            <h2><Quotes quote='Try and Try in will Be Success.' /></h2>

        </div>
    )
}

export default Header;