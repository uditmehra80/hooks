import React, { useState } from 'react';

const Accordion = () => {

    const [activeIndex, setActiveIndex] = useState(null);

    const items = [
        {
            title: 'what is js',
            content: 'abc anv'
        },
        {
            title: 'what is react',
            content: 'aadjdadjd'
        },
        {
            title: 'what is node',
            content: 'dhdvbvddvdvs'
        }
    ]

    const onTitleClick = (index) => {
        setActiveIndex(index);
    }

    const renderedItems = items.map((item, index) => {

        const active = index === activeIndex ? 'active' : '';
        return (
            <React.Fragment key={item.title}>
                <div className={`title ${active}`}
                    onClick={() => onTitleClick(index)}
                >
                    <i className='dropdown icon'></i>
                    {item.title}
                </div>
                <div className={`content ${active}`}>
                    <p>{item.content}</p>
                </div>
            </React.Fragment>
        );
    });
    return (<>
        <br />
        <div className='ui styled accordion'>
            {renderedItems}
        </div>
    </>
    );
}

export default Accordion;