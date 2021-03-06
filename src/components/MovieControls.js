import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const MovieControls = ({ type, movie }) => {
  const {
    removeMovieFromWatchlist,
    addMovieToWatched,
    moveToWatchlist,
  } = useContext(GlobalContext);

  return (
    <div className="inner-card-controls">
      {type === "watchlist" && (
        <>
          <button className="ctrl-btn" onClick={() => addMovieToWatched(movie)}>
          <i className="fas fa-heart"></i>
          </button>

          <button
            className="ctrl-btn"
            onClick={() => removeMovieFromWatchlist(movie.id)}
          >
            <i className="fa-fw fa fa-times"></i>
          </button>
        </>
      )}

      {type === "watched" && (
        <>
          <button className="ctrl-btn" onClick={() =>{
            moveToWatchlist(movie)
            removeMovieFromWatchlist(movie.id)
          }
        }
        >
            <i className="fa-fw fa fa-times"></i>
          </button>

          {/* <button
            className="ctrl-btn"
            onClick={() => removeFromWatched(movie.id)}
          >
            <i className=""></i>
          </button> */}
        </>
      )}
    </div>
  );
};
