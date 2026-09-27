import React from "react";
import { Heart } from "lucide-react";
import MovieGrid from "../components/MovieGrid";
import useFavorites from "../hooks/useFavorites";

export default function Favourites() {
  const { favourites, toggleFavorite } = useFavorites();

  return (
    <div className="container page">
      <div className="page-heading">
        <span className="eyebrow">YOUR LIST</span>
        <h1>Favourite</h1>
        <p>Movies you saved are stored locally in this browser.</p>
      </div>

      {favourites?.length ? (
        <MovieGrid
          movies={favourites}
          favorites={favourites}
          onToggleFavourite={toggleFavorite}
        />
      ) : (
        <div className="state-card">
          <Heart size={35} />
          <h2>Your favourites are empty</h2>
          <p>Save movies from the home page or a movie details page.</p>
        </div>
      )}
    </div>
  );
}