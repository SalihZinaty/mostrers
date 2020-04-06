import React from 'react';

const Card = ({name,email,id}) => {
    return(
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt="monsters" src={`https://robohash.org/${id}?set=set2&size=180x180`}/>
            <h2>{name}</h2>
            <h3>{email}</h3>
        </div>
    )
}

export default Card;