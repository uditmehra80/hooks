import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = (props) => {

    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);

    const search = async () => {
        const { data } = await axios.get(`https://en.wikipedia.org/w/api.php`, {
            params: {
                action: 'query',
                list: 'search',
                origin: '*',
                format: 'json',
                srsearch: term ? term : 'wikipedia'
            }
        });
        setResults(data.query.search);
    }

    useEffect(() => {

        //for first time so timeout fn not included for getting data
        if (results.length === 0) {
            search();
        }

        const timeoutId = setTimeout(() => {
            search();
        }, [500]);

        // CLEANUP
        return () => {
            clearTimeout(timeoutId);
        }

    }, [term]);

    const renderedResults = results.map((result) => {
        return (
            <div key={result.pageid} className='item'>
                <div className='right floated content'>
                    <a href={`https://en.wikipedia.org?curid=${result.pageid}`} className='ui button'>Go</a>
                </div>
                <div className='content'>
                    <div className='header'>
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{ __html: result.snippet }}>
                    </span>
                </div>
            </div>
        )
    });

    return (
        <div>
            <br />
            <div className='ui form'>
                <div className='field'>
                    <label>WIKIPEDIA</label>
                    <input
                        value={term}
                        onChange={(e) => setTerm(e.target.value)}
                        type="text"
                        className='input'
                        placeholder='search' />
                </div>
            </div>

            <div className='ui celled list'>
                {renderedResults.length === 0 ? <h4>loading...</h4> : renderedResults}
            </div>
        </div>
    );
}

export default Search;