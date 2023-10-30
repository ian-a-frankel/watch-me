import React from 'react';
import MyShowCard from './MyShowCard.js'

function MyWatchList({myShows, setMyShows}) {

    return(
        <div className="watch-list-container">
            {myShows.map(show => <MyShowCard key={show.id} show={show} myShows={myShows} setMyShows={setMyShows}/>)}
        </div>
    )
}

export default MyWatchList;