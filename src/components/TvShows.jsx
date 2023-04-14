import React, { useState, useEffect } from "react";
import { Container } from "./NavBar";
import axios from "axios";
import { AiFillPlayCircle, AiFillHeart} from "react-icons/ai";

import "../Styles/Videos.css";


function TvShows() {
  const { toggle } = React.useContext(Container);

  const [favorites, setFavorites] = useState([]);
  const [trailer, setTrailer] = useState(false);
  const [moviesData, setMoviesData] = useState([]);
  const mounth = [
    "JANUARY",
    "FEBRUARY",
    "MARCH",
    "APRIL",
    "MAY",
    "JUNE",
    "JULY",
    "AUGUST",
    "SEPTEMBER",
    "OCTOBER",
    "NOVEMBER",
    "DECEMBER",
  ];
  const dataNow = new Date();

  const MovieCall = async () => {
    const Api = "51da3a9b-f28c-4ac6-a17b-6528a13f1220";
    const data = await axios.get(
      `https://kinopoiskapiunofficial.tech/api/v2.2/films/premieres?year=${dataNow.getFullYear()}&month=${
        mounth[dataNow.getMonth()]
      }`,
      {
        headers: {
          "Content-Type": "application/json",
          "X-API-KEY": Api,
        },
      }
    );
    const results = data.data.items;
    setMoviesData(results);
  };

  const onAddToFavorite = async (obj) => {
    if (favorites.find((item) => Number(item.filmId) === Number(obj.filmId))) {
      setFavorites((prev) =>
        prev.filter((item) => Number(item.filmId) !== Number(obj.filmId))
      );
    } else {
      setFavorites((prev) => [...prev, obj]);
      axios.post("https://635699c42712d01e14f80386.mockapi.io/films", obj);
      
    }
  };

  const fetchData = async () => {
    const data = await axios.get(
      "https://635699c42712d01e14f80386.mockapi.io/films"
    );

    setFavorites(data.data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    MovieCall();
  }, []);

  return (
    <>
      <div className={toggle ? "mainBgColor" : "secondaryBgColor"}>
        <div className="movies-container">
          {moviesData.map((el) => (
            <div
              key={el.kinopoiskId}
              id={!trailer ? "container" : "NoContainer"}
            >
              <AiFillPlayCircle color="white" fontSize={40} id="playIcon" />
              <img src={el.posterUrl} alt={el.nameRu} />
              <h3
                style={{ marginLeft: "20px" }}
                id={el.nameRu.length > 38 ? "smaller-Text" : ""}
                className={toggle ? "DarkTheme" : "LightThemeClose"}
              >
                {el.nameRu}
              </h3>
              <AiFillHeart onClick={() => onAddToFavorite(el)} className='heartFavorite' />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default TvShows;
