import './App.css';
import Row from './components/Row';
import requests from './requests';
import Banner from './components/Banner';
import Navbar from './components/Navbar';


function App() {

  

  return (
  <>

 
<Navbar/>
<Banner fetchUrl={requests.fetchNetflixOriginals}/>
        <Row isPoster={true} title='Netflix Originals' fetchUrl={requests.fetchNetflixOriginals} />
        <Row isPoster={true} title='Trending In India' fetchUrl={requests.fetchTrending} />
        <Row isPoster={true} title='Top Rated' fetchUrl={requests.fetchTopRated} />
        <Row isPoster={true} title='Action Movies' fetchUrl={requests.fetchActionMovies} />
        <Row isPoster={true} title='Comedy Movies' fetchUrl={requests.fetchComedyMovies} />
        <Row isPoster={true} title='Horror Movies' fetchUrl={requests.fetchHorrorMovies} />
        <Row  isPoster={true}title='Romance Movies' fetchUrl={requests.fetchRomanceMovies} />
        <Row isPoster={true} title='Documentary Movies' fetchUrl={requests.fetchDocumentaries} />

  </>
  
  );
}

export default App;
