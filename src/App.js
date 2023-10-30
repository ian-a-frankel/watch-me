import React, {useState, useEffect} from 'react';
import './App.css';
import Header from "./components/Header"
import ShowCatalog from "./components/ShowCatalog"

function App() {

  const [shows, setShows] = useState([])

  useEffect(() => fetch('http://localhost:8081/shows')
  .then(res => res.json())
  .then(data => setShows(data))
  ,[])

  return (
    <>
      <Header />
      <ShowCatalog shows={shows}/>
    </>
  );
}

export default App;
