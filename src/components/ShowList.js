import React from 'react';
import ShowCard from './ShowCard';

function ShowList({shows, myShows, setMyShows}) {
    return(
        <div className="show-container">
            {shows.map(show => <ShowCard key={show.id} show={show} myShows={myShows} setMyShows={setMyShows}/>)}
        </div>
    );
}

export default ShowList;