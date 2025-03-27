import { useState } from "react";
import MovieCard from "./MovieCard";

const SearchBar=()=>{
    
    const API_KEY = "60354de2";
    const API_URL = "https://www.omdbapi.com/";
    const [query, setQuery] = useState("");
    const [movie, setMovie] = useState(null);
    const [error, setError] = useState(null);
    const fetchMovie = async () => {
        if (!query) return;
        setError(null);
        setMovie(null);
        try {
          const response = await fetch(`${API_URL}?t=${query}&apikey=${API_KEY}`);
          const data = await response.json();
          if (data.Response === "True") {
            setMovie(data);
          } else {
            setError("Movie not found");
          }
        } catch (err) {
          setError("Something went wrong");
        }
      };
    return(
        <>
            <div className="search-box">
                <input type="text" placeholder="Enter movie title" value={query} onChange={(e) => setQuery(e.target.value)} className="input"/>
                <button onClick={fetchMovie} className="button">Search</button>
            </div>
            <MovieCard movie={movie} error={error}/>
        </>
    );
}
export default SearchBar;