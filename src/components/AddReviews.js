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

  const submitHandler = (event) => {
    event.preventDefault();
    if (parseInt(movieRating) > 10) {
      setError("Please pick a rating between 0-10.");
    } else {
      props.movieList.movies.push({
        id: props.movieList.movies.length + 1,
        name: movieTitle,
        releaseDate: releaseDate,
        actors: actors.split(","),
        movieImg: imagePoster,
        rating: movieRating,
      });
      event.target.reset();
      setError("");
      setSuccess("Added Review!");
    }
  };

  return (
    <Container>
      {error != "" && (
        <Alert className="mt-3" variant="danger">
          {error}
        </Alert>
      )}
      {success != "" && (
        <Alert className="mt-3" variant="success">
          {success}
        </Alert>
      )}
      <Form onSubmit={submitHandler}>
        <Form.Group className="mt-3 mb-3">
          <Form.Label>Movie Title:</Form.Label>
          <Form.Control
            type="text"
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
            required
            onChange={(e) => inputChangeHandler(e)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Actors (split into commas):</Form.Label>
          <Form.Control
            type="text"
            id="actorControl"
            required
            onChange={(e) => inputChangeHandler(e)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Image of movie poster:</Form.Label>
          <Form.Select
            aria-label="Default select example"
            type="text"
            id="moviePosterControl"
            required
            onChange={(e) => inputChangeHandler(e)}
          >
            <option>Open this select menu</option>
            <option value="https://www.cineplex.com/_next/image?url=https%3A%2F%2Fmediafiles.cineplex.com%2FAttachments%2FNewItems%2FImage%20not%20available%20no%20outline%402x_20211028211403_0.png&w=1200&q=75">
              Stock Image
            </option>
            <option value="https://www.cineplex.com/_next/image?url=https%3A%2F%2Fmediafiles.cineplex.com%2FCentral%2FFilm%2FPosters%2F32000_320_470.jpg&w=1200&q=75">
              Ant Man Cover
            </option>
            <option value="https://www.cineplex.com/_next/image?url=https%3A%2F%2Fmedia.baselineresearch.com%2Fimages%2F2111447%2F2111447_large.jpg&w=1200&q=75">
              Cocaine Bear Cover
            </option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Rating out of 10 stars:</Form.Label>
          <Form.Control
            type="text"
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
