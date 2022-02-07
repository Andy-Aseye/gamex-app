import React from 'react';
import BGvid from './pictures/video.mp4';
import ebay from './pictures/ebay.png';
import walmart from './pictures/walmart.png';
import barnes from './pictures/barnes.png';
import amazon from './pictures/amazon.png';

function Video() {
    return (
    <div className="video-bg" id="product">
    <video autoPlay loop muted className="w-100 fluid vidd">
        <source src={BGvid} type="video/mp4" />
    </video>
    <div className="text-content">
    <h1 className="text-center video-header">NEW VR EXPERIENCE</h1>
    <p className="text-center video-text">Emmerse Yourself In Your Own Reality. Get The New 4k VR headset.</p>
    <div className="mx-4 available-content">
        <h2 className="text-center available-text">Available On:</h2>
        <div className="row availabe mx-auto">
            <div className="col-3"><img src={ebay} className="fluid w-75 brand"/></div>
            <div className="col-3"><img src={walmart}  className="fluid w-50 brand"/></div>
            <div className="col-3"><img src={barnes}  className="fluid w-50 brand"/></div>
            <div className="col-3"><img src={amazon}  className="fluid w-50 brand"/></div>
        </div>

    </div>
    </div>
    
    </div>
            
    )
}

export default Video


/*<img src={gear} className="game-gear"/> */