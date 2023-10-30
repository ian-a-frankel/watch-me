import React, { useState } from 'react';
import MyWatchList from './MyWatchList'
import ShowList from './ShowList'

function ShowCatalog({shows}) {

    const [myShows, setMyShows] = useState([])

    return(
        <>
            <MyWatchList myShows={myShows} setMyShows={setMyShows}/>
            <hr/>
            <ShowList shows={shows} myShows={myShows} setMyShows={setMyShows}/>
        </>
    );
}

export default ShowCatalog;