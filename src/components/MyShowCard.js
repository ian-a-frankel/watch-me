import React from 'react';


function ShowCard({show, onShowClicked, onShowDelete, myShows, setMyShows}) {

    /** 
     * This function to get the correct image to show up for the streaming service.
     * 
     * You don't need to worry about it - I just wanted this to look pretty.
     * 
     * Input: show.streams_on
     * Output: image src
     * */
    function getStreamingLogo(streamOnString) {
        console.log(myShows)
        let imgSrc;
        switch (streamOnString) {
            case "Amazon":
                imgSrc = "./images/show.png";
                break;
            case "HBO":
                imgSrc = "./images/hbo.webp";
                break;
            case "Hulu":
                imgSrc = "./images/hulu.png";
                break;
            case "Netflix":
                imgSrc = "./images/netflix.jpeg";
                break;
            case "Peacock":
                imgSrc = "./images/peacock.png";
                break;
        }
        return imgSrc;
    }

    return(
        <div className="show-card">
            <img src={show.image} alt="cover art" className="show-art"/>
            <div className="details-container">
                <header>
                    <h3>{show.name}</h3>                    
                </header>
                <footer>
                    <img src={getStreamingLogo(show.stream_on)} alt={show.stream_on} className="streaming-logo"></img>
                    <button onClick={() => setMyShows(myShows.filter(myShow => myShow.id !== show.id))}>Delete</button>
                </footer>
            </div>
        </div>
    );
}

export default ShowCard;