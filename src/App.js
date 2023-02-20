import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddMovieReview from "./components/AddReviews";
import MovieReviews from "./components/MovieReviews";
import "bootstrap/dist/css/bootstrap.css";
import NavigationBar from "./components/NavigationBar";
import { useEffect, useState } from "react";

function App() {
  const [movie, setMovies] = useState(null);

  useEffect(() => {
    fetch("./movies.json")
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
        <Route exact path="/" element={<MovieReviews movieList={movie} />} />
        <Route
          path="/add-review"
          element={<AddMovieReview movieList={movie} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
