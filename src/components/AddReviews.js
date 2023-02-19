import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";

export default function AddReview() {
  const [movieTitle, setMovieTitle] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [actors, setActors] = useState("");
  const [imagePoster, setImagePoster] = useState("");
  const [rating, setRating] = useState("");

  const inputChangeHandler = (val) => {
    if (val.target.id == "titleControl") {
      setMovieTitle(val.target.value);
    } else if (val.target.id == "releaseDateControl") {
      console.log(val.target.id);
      setReleaseDate(val.target.value);
    } else if (val.target.id == "actorControl") {
      setActors(val.target.value);
    } else if (val.target.id == "moviePosterControl") {
      setImagePoster(val.target.value);
    } else if (val.target.id == "ratingControl") {
      setRating(val.target.value);
    }
  };

  const submitHandler = () => {};

  return (
    <Container>
      <Form>
        <Form.Group className="mt-3 mb-3">
          <Form.Label>Movie Title:</Form.Label>
          <Form.Control
            type="text"
            id="titleControl"
            onChange={(e) => inputChangeHandler(e)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Release Date:</Form.Label>
          <Form.Control
            type="text"
            id="releaseDateControl"
            onChange={(e) => inputChangeHandler(e)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Actors:</Form.Label>
          <Form.Control
            type="text"
            id="actorControl"
            onChange={(e) => inputChangeHandler(e)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Image of movie poster:</Form.Label>
          <Form.Control
            type="text"
            id="moviePosterControl"
            onChange={(e) => inputChangeHandler(e)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Rating out of 10 stars:</Form.Label>
          <Form.Control
            type="text"
            id="ratingControl"
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
