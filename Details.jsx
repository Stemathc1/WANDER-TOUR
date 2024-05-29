import React from 'react';
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";


function Detail() {
  const { id } = useParams();

  const [movieData, setMovieData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      
      try {

        const response = await fetch(`https://ghibliapi.vercel.app/films/${id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setMovieData(data)
      setIsLoading(false)
 
      } catch (error) {
      console.error('Error fetching data:', error.message);
      }
     
    };
    getData();
  }, [id]);

  if (isLoading) {
    return <h1>Loading...</h1>;
          
  } else {
    return (
      <div>
        <h1>{movieData.title}</h1>
        <img src={movieData.image} alt={movieData.title} />
        <p>{movieData.description}</p>
      
        <img src="" alt="" />
      </div>
    )
  }

}  
export default Detail;
