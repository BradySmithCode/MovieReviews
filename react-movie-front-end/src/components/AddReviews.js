import React, { useState } from "react";
import { Alert, Button, Container, Form } from "react-bootstrap";

export default function AddReview(props) {
  const [movieTitle, setMovieTitle] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [actors, setActors] = useState("");
  const [imagePoster, setImagePoster] = useState("");
  const [movieRating, setRating] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const inputChangeHandler = (val) => {
    if (val.target.id == "titleControl") {
      setMovieTitle(val.target.value);
    } else if (val.target.id == "releaseDateControl") {
      setReleaseDate(val.target.value);
    } else if (val.target.id == "actorControl") {
      setActors(val.target.value);
    } else if (val.target.id == "moviePosterControl") {
      setImagePoster(val.target.value);
    } else if (val.target.id == "ratingControl") {
      setRating(val.target.value);
    }
  };

  return (
    <Container>
      <Form method="post" action="/api/addReview" enctype="multipart/form-data">
        <Form.Group className="mt-3 mb-3">
          <Form.Label>Movie Title:</Form.Label>
          <Form.Control
            type="text"
            name="title"
            id="titleControl"
            required
            onChange={(e) => inputChangeHandler(e)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Release Date:</Form.Label>
          <Form.Control
            type="date"
            id="releaseDateControl"
            name="releaseDate"
            required
            onChange={(e) => inputChangeHandler(e)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Actors (split into commas):</Form.Label>
          <Form.Control
            type="text"
            id="actorControl"
            name="actors"
            required
            onChange={(e) => inputChangeHandler(e)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Image of movie poster:</Form.Label>
          <Form.Control
            type="file"
            id="moviePosterControl"
            name="movie_poster"
            required
            onChange={(e) => inputChangeHandler(e)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Rating out of 10 stars:</Form.Label>
          <Form.Control
            type="text"
            name="rating"
            id="ratingControl"
            required
            onChange={(e) => inputChangeHandler(e)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}
