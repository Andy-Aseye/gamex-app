import React from 'react';
import ReactPlayer from "react-player";

function Videos() {
    return (
        <div className="container-fluid trailer-area p-4 my-5" id="trailers">
            <h2 className="text-center my-4 trailer-header">Latest Trailers</h2>
            <div className="row">
                <div className="col-md-4 col-sm-12 trailers">
                <ReactPlayer url="https://youtu.be/-z3WReYhPec"  width="90%" height="350px"/>
                </div>
                <div className="col-md-4 col-sm-12 trailers">
                <ReactPlayer url="https://youtu.be/lExtlheO5TI"  width="90%" height="350px"/>
                </div>
                <div className="col-md-4 col-sm-12 trailers">
                <ReactPlayer url="https://youtu.be/n5purHmHpr8"  width="90%" height="350px"/>
                </div>
             </div>
            
        </div>
    )
}

export default Videos
