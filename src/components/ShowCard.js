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
        <div className="show-card" onClick={() => {
            if (!myShows.map(show => show.id).includes(show.id)) {
                    setMyShows([...myShows, show])
                }
            }
        }>
            <img src={show.image} alt="cover art" className="show-art"/>
            <div className="details-container">
                <header>
                    <h3>{show.name}</h3>                    
                </header>
                <p>{show.summary}</p>
                <footer>
                    <img src={getStreamingLogo(show.stream_on)} alt={show.stream_on} className="streaming-logo"></img>
                    <button onClick={() => console.log("Clicked delete...")}>Delete</button>
                </footer>
            </div>
        </div>
    );
}

export default ShowCard;