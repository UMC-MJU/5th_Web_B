import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './components/Header';
import Movies from "./pages/Movies.jsx";
import movieDummy from "./movieDummy.js";
import TV from "./pages/TV.jsx";
import Celebrity from "./pages/Celebrity.jsx";
import Home from "./pages/Home.jsx";
import NotFound from "./pages/NotFound.jsx";
import MovieDetail from "./pages/MovieDetail.jsx";

function App() {
  return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/Movies"
            element={
              <div className="App">
                {movieDummy.results.map((item) => {
                  return (
                    <Movies
                      title={item.title}
                      poster_path={item.poster_path}
                      date={item.release_date}
                      overview={item.overview}
                      id={item.id}
                    />
                  );
                })}
              </div>
            }
          />
          <Route path="/Movies/:title" element={<MovieDetail />} />
          <Route path="/TV" element={<TV />} />
          <Route path="/Celebrity" element={<Celebrity />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;