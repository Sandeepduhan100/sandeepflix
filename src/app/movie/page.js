
import { resolve } from 'styled-jsx/css';
import Moviecard from '../components/moviecard/Moviecard';
import './movie.css'

const Movie = async () => {
  await new Promise(resolve => setTimeout(resolve, 2000));
  const url = process.env.Rapid_Key;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '5b5c6a664dmsh783b5eacf5e6d28p169f86jsn3e2a0bbfe80e',
      'X-RapidAPI-Host': 'netflix54.p.rapidapi.com',
    },
  };

  // Fetch data
  const res = await fetch(url, options);
  const data = await res.json();
  const titles = data.titles || [];

  // Return the JSX with Moviecard components
  return (
    <section className="movie-section">
        <div className="heading1">
        <h1>Series And Movies</h1>
        </div>
      <div className="movie-container">
     
        {titles.map((title) => (
          <Moviecard key={title.summary.id} {...title} />
        ))}
      </div>
    </section>
  );
};

export default Movie;
