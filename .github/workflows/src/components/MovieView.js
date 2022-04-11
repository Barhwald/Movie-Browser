import Hero from "./hero";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const MovieView = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log("make an API request", id);
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=7c99b58201087b44509cc8980f8ac3da&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovieDetails(data);
        setIsLoading(false);
      });
  }, [id]);

  function renderMovieDetails() {
    if (isLoading) {
      return <Hero text="Loading..." />;
    }

    const posterPath = `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`;
    const noPosterPath =
      "https://www.kcprofessional.co.za/media/150532101/no-image-placeholder.png";
    const backdropUrl = `https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`;

    return (
      <div>
        <Hero text={movieDetails.original_title} backdrop={backdropUrl} />
        <div className="container my-5">
          <div className="row">
            <div className="col-md-3">
              {movieDetails.poster_path == null ? (
                <img
                  src={noPosterPath}
                  alt="..."
                  className="img-fluid shadow rounded w-75"
                />
              ) : (
                <img
                  src={posterPath}
                  alt="..."
                  className="img-fluid shadow rounded"
                />
              )}
            </div>
            <div className="col-md-9">
              <h2>{movieDetails.original_title}</h2>
              {movieDetails.release_date !== "" ? (
                <h4>{movieDetails.release_date}</h4>
              ) : (
                <h4>This film has not been released yet.</h4>
              )}
              {movieDetails.overview == null ? (
                <p className="lead">No overview available</p>
              ) : (
                <p className="lead">{movieDetails.overview}</p>
              )}
              <h5>Average: {movieDetails.vote_average}</h5>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return renderMovieDetails();
};

export default MovieView;
