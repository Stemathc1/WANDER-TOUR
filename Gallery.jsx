import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Gallery() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://ghibliapi.vercel.app/films')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

   return (
    <div>
      {data?.map(movie => (
        <Link key={movie.id} to={`/detail/${movie.id}`}>
        <div className="card">
          <img src={movie.movie_banner} />
          <h2>{movie.name}</h2>
          <p>{movie.description}</p>
        </div>
        </Link>
      ))}
    </div>
  );
}

export default Gallery;
