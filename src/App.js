import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
import Navbar from "./components/navbar";
import Home from "./components/home";
import AboutView from "./components/aboutview";
import { Routes, Route } from "react-router-dom";
import SearchView from "./components/Searchview";
import MovieView from "./components/MovieView";
import PageNotFound from "./components/Pagenotfound";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    if (searchText) {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=7c99b58201087b44509cc8980f8ac3da&language=en-US&query=${searchText}&page=1&include_adult=false`
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setSearchResults(data.results);
        });
    }
  }, [searchText]);

  return (
    <div>
      <Navbar searchText={searchText} setSearchText={setSearchText} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<AboutView />} />
        <Route exact path="/search" element={
            <SearchView keyword={searchText} searchResults={searchResults} />
          }
        />
        <Route exact path="/movies/:id" element={<MovieView />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
