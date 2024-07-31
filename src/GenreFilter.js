import React from 'react';

const GenreFilter = ({ genres, onFilterChange }) => {
  return (
    <div>
      <div className='box'>
        <div>
        <h2>Filter By Genre</h2>
        <button
          className='buttons' id='all'
          onClick={() => {
            console.log('Showing all movies');
            onFilterChange(''); // Reset the filter
          }}
        >
          All
        </button>
        </div>
        {genres.map((genre, index) => (
          <button
            className='buttons'
            key={index}
            onClick={() => {
              console.log(`Filtering by ${genre}`);
              onFilterChange(genre);
            }}
          >
            {genre}
          </button>
        ))}
      </div>
    </div>
  );
}

export default GenreFilter;