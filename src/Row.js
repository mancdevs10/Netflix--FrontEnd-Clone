import React, {useState, useEffect} from 'react'
import axios from './axios';
import './Row.css';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const baseurl = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {

    //state is like a short term memory 
    const [movies, setMovies]= useState([]);
    //
    const [trailerUrl, setTrailerUrl] = useState("");

    //hook to run a bunch of code based on a specific condition 
    useEffect(() => {
        // when row loads 
        //this code runs 
        //if, [] run once only 
        //[movie] - if any change made to this var , run code 
        
        //async call 
        // as  making rqst to a third party 
        async function fetchData() {
            const request= await axios.get(fetchUrl);
            // https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213
            // this is what fetchData func does 
            // console.log(request);
            setMovies(request.data.results);
            return request;  
        }
        // any variable used in useEffect which is fetched from outside needs to be put into [] 
        // because it is dependent on it   
        fetchData();
    }, [fetchUrl]);

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            //
            autoplay: 1,
        },
    };
    // console.table(movies);

    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl('');
        }
        else{
            movieTrailer(movie?.name || "")
            .then((url) =>{
                //
                const urlParams = new URLSearchParams (new URL(url).search);
                setTrailerUrl(urlParams.get('v'));
            })
            .catch((error) => console.log(error))
        };
    }
    return (
            <div className="row">
                    <h2> {title} </h2>
                    <div className="row__posters">
                        {movies.map(movie => (
                            <img key={movie.id} onClick={() => 
                                handleClick(movie)    
                            } className={`row__poster ${isLargeRow && `row__posterLarge`}`}src={ `${baseurl}${isLargeRow? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
                        ))}
                    </div>
                    {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
                    

            </div>
    )
}

export default Row
