import React, { useState } from 'react';

function Demo() {

    const [quote, setQuote] = useState('');
    const [allQuotes, setAllQuotes] = useState([]);

    const addQuote = () => {

        let newQuote = document.getElementById('text').value;
        setQuote(newQuote);

        setAllQuotes(allQuotes.concat(newQuote));
        document.getElementById('text').value = ' ';
    }
    return (
        <>
            <h1>My Quote App</h1>
            <input type='text' id='text' />
            <input type='submit' onClick={addQuote} />
            <div>

                {
                    allQuotes.map((quote, index) => (

                        <p key={index}>{quote}</p>

                    ))}

            </div>
        </>
    );

}

export default Demo;