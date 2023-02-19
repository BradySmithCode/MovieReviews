import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import data from "../movieData/movies.json";

export default function MovieReviews() {
  const [movies, setMovies] = useState(data.movies);

  const removeMovie = (movieID) => {
    setMovies((current) => current.filter((movie) => movie.id != movieID));
  };

  return (
    <div className="d-flex flex-wrap gap-5 justify-content-center m-3">
      {movies.map((movie) => (
        <Card style={{ width: "12em" }} key={movie.id}>
          <Card.Img variant="top" src={movie.movieImg} />
          <Card.Body>
            <Card.Title>{movie.name}</Card.Title>
            <Card.Text>{movie.releaseDate}</Card.Text>
            <Card.Text>Actors: {movie.actors}</Card.Text>
            <Card.Text>{movie.rating} *</Card.Text>
            <Button
              variant="danger"
              onClick={() => {
                removeMovie(movie.id);
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
