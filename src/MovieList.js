import React from 'react';

const MovieList = ({ movies }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Genre</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((item, index) => (
            <tr key={index}>
              <td>{item.title}</td>
              <td>{item.genre}</td>
              <td>{item.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MovieList;