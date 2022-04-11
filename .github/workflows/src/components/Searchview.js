import Hero from "./hero";
import { Link } from "react-router-dom";

// API KEY 7c99b58201087b44509cc8980f8ac3da

// https://api.themoviedb.org/3/search/company?api_key=7c99b58201087b44509cc8980f8ac3da&query=Lord&page=1

const MovieCard = ({ movie }) => {
  const posterUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
  const noPosterUrl =
    "https://www.kcprofessional.co.za/media/150532101/no-image-placeholder.png";
  const detailUrl = `/movies/${movie.id}`;

  return (
    <div className="col-md-3 col-2 my-4">
      <div className="card">
        {movie.poster_path !== null ? (
          <img
            src={posterUrl}
            class="card-img-top"
            alt={movie.original_title}
          />
        ) : (
          <img
            src={noPosterUrl}
            class="card-img-top"
            alt={movie.original_title}
          />
        )}
        <div className="card-body">
          <h5 className="card-title">{movie.original_title}</h5>
          <p className="card-text">{movie.release_date}</p>
          <Link to={detailUrl} className="btn btn-primary">
            Show details
          </Link>
        </div>
      </div>
    </div>
  );
};

const SearchView = ({ keyword, searchResults }) => {
  const title = `You're searching for: ${keyword}`;

  const resultsHtml = searchResults.map((obj, i) => {
    return <MovieCard movie={obj} key={i} />;
  });
  const noResultsHtml = `We haven't found a film called ${keyword}`;

  return (
    <div>
      <Hero text={title} />
      {resultsHtml && (
        <div className="container">
          <div className="row">{resultsHtml}</div>
        </div>
      )}
      {resultsHtml.length === 0 &&
      <div className="container mt-4">
          <div className="row">{noResultsHtml}</div>
        </div>}
    </div>
  );
};

export default SearchView;
