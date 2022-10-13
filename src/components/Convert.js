import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Convert = ({ language, text }) => {

    const [result, setResult] = useState([]);
    const [debouncedText, setDebouncedText] = useState(text);


    const search = async () => {
        const { data } = await axios.post(`https://translation.googleapis.com/language/translate/v2`, {}, {
            params: {
                q: debouncedText,
                target: language.value,
                key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM',
            }
        });
        setResult(data.data.translations[0].translatedText);
    }

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedText(text);
        }, [500]);

        // CLEANUP
        return () => {
            clearTimeout(timerId);
        }

    }, [text]);

    useEffect(() => {
        search();
    }, [language, debouncedText]);

    return (
        <div>
            <h1 className='ui header'>{result && result}</h1>
        </div>
    );
}

export default Convert;