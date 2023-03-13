import React, { useEffect, useState } from "react";
import axios from "axios";
import { AiFillPlayCircle, AiOutlineClose, AiFillHeart } from "react-icons/ai";
import { BsFillEmojiHeartEyesFill } from "react-icons/bs";
import "../Styles/Videos.css";
import { Container } from "./NavBar";
import TrailerMovies from "../Trailers/TrailerMovies";
import Pagination from "../Pagination";


function Movies() {
  
  const { toggle, inputValue } = React.useContext(Container);

  const input = inputValue;

  const [trailer, setTrailer] = useState(true);
  const [moviesData, setMoviesData] = useState([]);
  const [movieId, setMovieId] = useState(0);
  const [page, setPage] = useState(1);

  const [favorites, setFavorites] = useState([]);


  const SearchMovie = async () => {
    const Api = "51da3a9b-f28c-4ac6-a17b-6528a13f1220";
    const data = await axios.get(
      `https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${input}&page=1`,
      {
        headers: {
          "Content-Type": "application/json",
          "X-API-KEY": Api,
        },
      }
    );
    const results = data.data.films;
    setMoviesData(results);
  };

  useEffect(() => {
    SearchMovie();
  }, [input]);

  const MovieCall = async () => {
    const API_URL_POPULAR = `https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=${page}`;
    const Api = "51da3a9b-f28c-4ac6-a17b-6528a13f1220";

    const data = await axios.get(API_URL_POPULAR, {
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": Api,
      },
    });
    const results = data.data.films;
    setMoviesData(results);
  };

  useEffect(() => {
    MovieCall();
  }, [page]);

  const onClickCard = (el) => {
    setMovieId(el);
    setTrailer(false);
    window.scrollTo(0, 0);
  };

  const onChangePage = (number) => {
    setPage(number);
  };

  const raingFn = (rating) => {
    if (rating > 7) {
      return "movie__average  movie__average-green";
    } else if (rating > 5.5) {
      return "movie__average movie__average-orange";
    } else {
      return "movie__average movie__average-red";
    }
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



  return (
    <Container.Provider value={{favorites,setFavorites}}>
    <>
      <div className={toggle ? "mainBgColor" : "secondaryBgColor"}>
        <div className="movies-container">
          {moviesData.map((el, id) => (
            <>
              <div key={el.nameRu} className={raingFn(el.rating)}>
                {el.rating === "null" ? el.ratingVoteCount : el.rating}
              </div>
              <div key={el.filmId}
                className={el.filmId}
                id={trailer ? "container" : "NoContainer"}
              >
                <AiFillPlayCircle
                  onClick={() => onClickCard(el.filmId)}
                  color="white"
                  fontSize={40}
                  id={trailer ? "playIcon" : "hide"}
                />
                <img src={el.posterUrl} alt={el.nameRu} />
                <h3
                  style={{ marginLeft: "20px" }}
                  id={el.nameRu.length > 30 ? "smaller-Text" : ""}
                  className={toggle ? "DarkTheme" : "LightThemeClose"}
                >
                  {el.nameRu}
                </h3>
                <AiFillHeart onClick={() => onAddToFavorite(el)} className='heartFavorite' />
              </div>
            </>
          ))}
        </div>
        {trailer ? "" : <TrailerMovies movieId={movieId} />}

        <AiOutlineClose
          className={trailer ? "none" : "closeTrailer"}
          fontSize={55}
          color={"#000"}
          cursor={"pointer"}
          onClick={() => setTrailer(!trailer)}
        />
      </div>
      {!input ? (
        <Pagination onChangePage={(number) => onChangePage(number)} />
      ) : (
        ""
      )}
    </>
    </Container.Provider>
  );
}

export default Movies;
