import React from 'react';
import Card from './Card';

const CardList = (props) => {
    const Cards = props.monsters.map((monster) => (
        <Card key={monster.id} 
              name = {monster.name}
              email = {monster.email}
              id = {monster.id}
                />
    ))
    return(
        <div>
            {Cards}
        </div>
    )
}

export default CardList;