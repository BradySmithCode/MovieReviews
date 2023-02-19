import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddMovieReview from "./components/AddReviews";
import MovieReviews from "./components/MovieReviews";
import "bootstrap/dist/css/bootstrap.css";
import NavigationBar from "./components/NavigationBar";

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route exact path="/" element={<MovieReviews />} />
        <Route exact path="/add-review" element={<AddMovieReview />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
