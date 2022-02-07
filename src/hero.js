import React from 'react';
import controller from './pictures/controller.png'


function Hero() {
    return (
        <div className="container hero">
            <div className="row">
            <div className="column py-5">
                <h1 className="py-5">Gamerx Inc.</h1>
                <h6 className="text-light w-100 w-xl-75">
                Welcome to the gamer's safe-zone. 
                Explore for all latest news and updates on game releases and much more.
                </h6>
            </div>
            <div className="column py-5 d-none d-lg-block d-xl"><img src={controller} className="w-75 flex-right"/></div>
            <div className="col"></div>
            </div>
            
            
        </div>
    )
}

export default Hero
