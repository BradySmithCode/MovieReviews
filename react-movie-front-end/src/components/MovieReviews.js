import React from "react";
import { Button, Card } from "react-bootstrap";

export default function MovieReviews(props) {
  const removeMovie = (movie) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        _id: movie._id,
      }),
    };
    fetch("/deleteReview", requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
    const editedList = props.movieList.filter(
      (movieInList) => movieInList._id !== movie._id
    );
    props.setMovies(editedList);
  };

  return (
    <div className="d-flex flex-wrap gap-5 justify-content-center m-3">
      {props.movieList.map((movie) => (
        <Card style={{ width: "15em" }} key={movie._id} id={movie._id}>
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
