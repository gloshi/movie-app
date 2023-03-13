import React, { useEffect, useState } from "react";
import { Container } from "./NavBar";
import { AiFillPlayCircle, AiFillHeart } from "react-icons/ai";
import axios from "axios";

function Trends() {
  const { toggle } = React.useContext(Container);
  const [trailer, setTrailer] = useState(true);
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  const url = "https://635699c42712d01e14f80386.mockapi.io/films";

  const raingFn = (rating) => {
    if (rating > 7) {
      return "movie__average  movie__average-green";
    } else if (rating > 5.5) {
      return "movie__average movie__average-orange";
    } else {
      return "movie__average movie__average-red";
    }
  };

  const fetchData = async () => {
    const data = await axios.get(url);
    console.log(data);
    setFavoriteMovies(data.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const deleteFavoriteMovie = (obj) => {
    if (favoriteMovies.find((item) => Number(item.id) === Number(obj.id))) {
      axios.delete(
        `https://635699c42712d01e14f80386.mockapi.io/films/${obj.id}`
      );
      setFavoriteMovies((prev) =>
        prev.filter((item) => Number(item.id) !== Number(obj.id))
      );
    } 
  }

  return (
    <div className={toggle ? "mainBgColor" : "secondaryBgColor"}>
      <div className="movies-container">
        {favoriteMovies.map((el) => (
          <>
           
            <div id={trailer ? "container" : "NoContainer"}>
              <img src={el.posterUrl} alt={el.nameRu} />
              <h3
                style={{ marginLeft: "20px" }}
                id={el.nameRu.length > 30 ? "smaller-Text" : ""}
                className={toggle ? "DarkTheme" : "LightThemeClose"}
              >
                {el.nameRu}
              </h3>
              <AiFillHeart onClick={() => deleteFavoriteMovie(el)}  className="heartFavorite" />
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default Trends;
