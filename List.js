import React from 'react';
import './List.css';
import Card from './Card';

function List(props) {

    const cards = props.cards.map(function(card) {
        return <Card title={card.title} content={card.content} key={card.id} />;
    });

    return (

        <section className='List'>
            <header className='List-header'>
                <h2>{props.header}</h2>
            </header>
            <div className='List-cards'>
                {cards}
                <button type="button" className="List-add-button">
                + Add Random Card
                </button>
            </div>
        </section>
    );
}

export default List;