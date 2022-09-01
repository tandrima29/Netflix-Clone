import React from "react";
import { useState, useEffect } from "react";

import MovieCard from "../../components/movie-card/MovieCard";
import axios from "axios";

export default function ExcitingMovies() {
  const [recentWatch, updateRecentWatch] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://630722593a2114bac75a5755.mockapi.io/netflix-clone/top-10-to-watch"
      )
      .then((response) => {
        const result = response.data.content;

        updateRecentWatch(result);
      })
      .catch((error) => {});
  }, []);
  return (
    <div className="container-fluid">
      <h5 className="text-white">Exciting Movies</h5>
      <div className="row slider-wrapper">
        {recentWatch.map((item, index) => {
          return (
            <div className="col-sm-2 my-2 clickable">
              <MovieCard
                bgImg={item.imgUrl}
                isNetflixOrigin={item.isNetflixOrigin}
                isTopTen={item.isTopTen}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
