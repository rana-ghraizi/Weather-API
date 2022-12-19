import React from 'react';

function Search(props) {
    return (
        <div>
          <header className='header'>
            <input type="text" placeholder="Type in a city name" className='cityInput'/>
            <button className='button'>Find Weather</button>
          </header>
        </div>
    );
}

export default Search;