const MovieCard=(props)=>{
    let movie=props.movie;
    let error=props.error;
    return(
        <>
        {error && <p className="error">{error}</p>}
      {movie && (
        <div className="movie-card">
          <div className="movie-poster-container">
            <img src={movie.Poster} alt={movie.Title} className="movie-poster" />
          </div>
          <div className="movie-details">
            <h2 className="movie-title">{movie.Title} ({movie.Year})</h2>
            <p><strong>Rated:</strong> {movie.Rated}</p>
            <p><strong>Released:</strong> {movie.Released}</p>
            <p><strong>Runtime:</strong> {movie.Runtime}</p>
            <p><strong>Genre:</strong> {movie.Genre}</p>
            <p><strong>Director:</strong> {movie.Director}</p>
            <p><strong>Writer:</strong> {movie.Writer}</p>
            <p><strong>Actors:</strong> {movie.Actors}</p>
            <p className="movie-plot"><strong>Plot:</strong> {movie.Plot}</p>
            <p><strong>Language:</strong> {movie.Language}</p>
            <p><strong>Country:</strong> {movie.Country}</p>
            <p><strong>Awards:</strong> {movie.Awards}</p>
            <p><strong>IMDB Rating:</strong> {movie.imdbRating} ({movie.imdbVotes} votes)</p>
            <p><strong>Metascore:</strong> {movie.Metascore}</p>
            {movie.Ratings && movie.Ratings.length > 0 && (
              <div>
                <h3>Ratings:</h3>
                <ul>
                  {movie.Ratings.map((rating, index) => (
                    <li key={index}><strong>{rating.Source}:</strong> {rating.Value}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
        </>
    );
}
export default MovieCard;