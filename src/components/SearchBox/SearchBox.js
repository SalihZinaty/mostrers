import React from 'react';

const SearchBox = ({onChangeInput}) => {
    return (
        <div>
            <input
                className="pa2 ma3 bg-light-green shadow-5 br3 pointer" 
                placeholder='search monsters' 
                type='search' 
                onChange = {onChangeInput}/>
        </div>
    )
}

export default SearchBox;