import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import Nav from './Nav';
function App() {
  return (
    <div className="app">
     {/* <h2> lets build a netflix clone 🚀</h2> */}
     {/* navbar  */}
     <Nav />
     {/* banner  */}
     <Banner />
     <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
     <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
     <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
     <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
     <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
     <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
     <Row title="Romantic Movies" fetchUrl={requests.fetchRomanticMovies} />
     <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
