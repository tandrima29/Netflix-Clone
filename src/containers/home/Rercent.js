import { useState, useEffect } from "react";
import 'netslider/dist/styles.min.css';
import MovieCard from "../../components/movie-card/MovieCard";
import axios from "axios";

export function RecentWatch() {
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
