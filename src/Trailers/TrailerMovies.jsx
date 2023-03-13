import React from "react";
import { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import "../Styles/Trailer.css";
import axios from "axios";

const TrailerMovies = ({ movieId }) => {
  const [videoUrl, setVideoURL] = useState("https://youtu.be/IAdCsNtEuBU");

  const MovieCall = async () => {
    const API_URL_POPULAR = `https://kinopoiskapiunofficial.tech/api/v2.2/films/${movieId}/videos`;
    const Api = "51da3a9b-f28c-4ac6-a17b-6528a13f1220";

    const data = await axios.get(API_URL_POPULAR, {
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": Api,
      },
    });
    setVideoURL(data.data.items.find((el) => el.site === "YOUTUBE").url);
    console.log(data.data.items.find((el) => el.site === "YOUTUBE").url);
  };
  // setVideoURL(data.data.items[0].url);
  useEffect(() => {
    MovieCall();
  }, []);

  return (
    <>
      <div className="Container"></div>
      <div className="player">
        <ReactPlayer url={videoUrl} controls={true} />
      </div>
    </>
  );
};

export default TrailerMovies;
