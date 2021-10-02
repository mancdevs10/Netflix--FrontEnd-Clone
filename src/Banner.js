import React, {useState, useEffect} from 'react'
import axios from './axios';
import requests from './requests';
import './Banner.css';

function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            // console.log(request.data.results[Math.floor(Math.random() * request.data.results.length -1 )]);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length-1)
                ]
            );
            return request; // Math.floor(Math.random() * request.data.results.length -1 )
        }
        fetchData();
    }, []);
    console.log(movie);

    function truncate(str, n) {
        return str?.length > n? str.substr(0, n-1) + "..." : str;
    }
    
    return (
        <header className="banner" style={
            {
                backgroundSize: "cover",
                backgroundImage: `url(
                    "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
                )`,
                backgroundPosition: "center center",
            }} >    {/* background image  */}
            <div className="banner__contents">
            {/* title */}
            <h1 className="banner__title">
                {movie?.title || movie?.name || movie?.original_name}
                {/* ? - optional chaining  */}
            </h1>
            <div className="banner__buttons">
                <button className="banner__button">
                    Play
                </button>
                <button className="banner__button">
                    My List
                </button>
                </div>
            {/* div - 2 buttons  */}
            {/* desciption  */}
            <h1 className="banner__description">
            {/* truncate - ... (when we have too much of a text */}
                {truncate(movie?.overview, 150)}
            </h1>
            </div>

            <div className="banner--fadeBottom" />
        </header>
    )
}

export default Banner
