import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddMovieReview from "./components/AddReviews.js";
import MovieReviews from "./components/MovieReviews.js";
import "bootstrap/dist/css/bootstrap.css";
import NavigationBar from "./components/NavigationBar.js";
import { useEffect, useState } from "react";

function App() {
  const [movie, setMovies] = useState(null);

  useEffect(() => {
    fetch("/api/movieReviews")
      .then((res) => res.json())
      .then(setMovies)
      .catch((err) => console.log(err));
  }, []);

  if (movie == null) {
    return <h1>Loading...</h1>;
  }

  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route
          exact
          path="/"
          element={<MovieReviews movieList={movie} setMovies={setMovies} />}
        />
        <Route
          path="/add-review"
          element={<AddMovieReview movieList={movie} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
