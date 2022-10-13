import React, { useState, useEffect } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';

const options = [
    {
        label: 'Afcrikaans',
        value: 'af'
    },
    {
        label: 'Arabic',
        value: 'ar'
    },
    {
        label: 'Hindi',
        value: 'hi'
    },
    {
        label: 'Dutch',
        value: 'nl'
    }
];

const Translate = (props) => {

    const [language, setLanguage] = useState(options[0]);
    const [text, setText] = useState('');

    return (
        <div>
            <br />
            <div className='ui form'>
                <div className='field'>
                    <label>Enter Text</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
                </div>
            </div>
            <Dropdown label='language' onSelectedChange={setLanguage} selected={language} options={options} />
            <hr />
            <h3 className='ui header'>Output</h3>
            <Convert language={language} text={text} />
        </div>
    );
}

export default Translate;