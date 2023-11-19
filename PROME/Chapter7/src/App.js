import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header.jsx";
import { Contents, Celebrity, Home, Login, NotFound, Details } from "./pages";
import movies from "./movieDummy.js";
import tvs from "./tvDummy.js";
import styled from "styled-components";

export default function App() {
  document.body.style.margin = 0;
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/Movie"
            element={
              <Appform>
                {movies.results.map((item) => {
                  return (
                    <Contents
                      name={item.title}
                      poster={item.poster_path}
                      date={item.release_date}
                      overview={item.overview}
                      key={item.id}
                    />
                  );
                })}
              </Appform>
            }
          />
          <Route path="/Movie/:name" element={<Details />} />
          <Route
            path="/TV"
            element={
              <Appform>
                {tvs.results.map((item) => {
                  return (
                    <Contents
                      name={item.name}
                      poster={item.poster_path}
                      date={item.first_air_date}
                      overview={item.overview}
                      key={item.id}
                    />
                  );
                })}
              </Appform>
            }
          />
          <Route path="/TV/:name" element={<Details />} />
          <Route path="/Celebrity" element={<Celebrity />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

const Appform = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
  padding: 40px;
`;
