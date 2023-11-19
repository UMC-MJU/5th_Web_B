import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header.jsx";
import Movie from "./pages/Movie.jsx";
import TV from "./pages/TV.jsx";
import Celebrity from "./pages/Celebrity.jsx";
import Home from "./pages/Home.jsx";
import movies from "./movieDummy.js";
import NotFound from "./pages/NotFound.jsx";
import MovieDetail from "./pages/MovieDetail.jsx";

function App() {
  document.body.style.margin = 0;
  return (
    <div className="root-wrap">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/Movie"
            element={
              <div className="App">
                {movies.results.map((item) => {
                  return (
                    <Movie
                      name={item.title}
                      poster={item.poster_path}
                      date={item.release_date}
                      overview={item.overview}
                      id={item.id}
                    />
                  );
                })}
              </div>
            }
          />
          <Route path="/Movie/:name" element={<MovieDetail />} />
          <Route path="/TV" element={<TV />} />
          <Route path="/Celebrity" element={<Celebrity />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
