import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function MovieReviews({ movieList }) {
  const removeMovie = (movieID) => {
    movieList.setMovies((current) =>
      current.filter((movie) => movie.id != movieID)
    );
  };

  return (
    <div className="d-flex flex-wrap gap-5 justify-content-center m-3">
      {movieList.movies.map((movie) => (
        <Card style={{ width: "15em" }} key={movie.id}>
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
