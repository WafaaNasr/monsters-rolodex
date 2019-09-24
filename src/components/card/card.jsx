import React from "react";

import './card.styles.css';

const Card = (props) => {
    return <div className='card-container'>
        <img alt='monster' src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} />
        {props.monster.name}

    </div>
};

export default Card;
