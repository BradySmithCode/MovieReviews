import React from "react";
import { Button, Card } from "react-bootstrap";

export default function MovieReviews(props) {
  const removeMovie = (movie) => {
    const indexOfMovie = props.movieList.movies.indexOf(movie);
    delete props.movieList.movies[indexOfMovie];
    document.getElementById(movie.id).remove();
  };

  return (
    <div className="d-flex flex-wrap gap-5 justify-content-center m-3">
      {props.movieList.movies.map((movie) => (
        <Card style={{ width: "15em" }} key={movie.id} id={movie.id}>
          <Card.Img variant="top" src={movie.movieImg} />
          <Card.Body>
            <Card.Title>{movie.name}</Card.Title>
            <Card.Text>{movie.releaseDate}</Card.Text>
            <Card.Text>Actors: {movie.actors.toString()}</Card.Text>
            <Card.Text>{movie.rating} *</Card.Text>
            <Button
              variant="danger"
              onClick={() => {
                removeMovie(movie);
              }}
            >
              Remove
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}
