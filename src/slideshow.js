import React from 'react'
import {Carousel} from 'react-bootstrap'
import Games from './games'

function Slideshow() {
    return (
        <div className='slideshow w-100 container'>
          <Carousel>
  {Games.map((game) => {
    const {id, img, title, ratings, console, description} = game;
    return(<Game id={id} img={img} title={title} ratings={ratings} console={console} description={description}></Game>);
  })}
  </Carousel>
        </div>
    )
}


const Game = (props) => {
  const {id, img, title, ratings, console, description} = props;

return (
  <Carousel>
  <Carousel.Item id={id}>
    <img
      className="d-block w-100"
      src= {img}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>{title}</h3>
      <p>{description}</p>
      <p>{ratings}</p>
      <p>{console}</p>
    </Carousel.Caption>
  </Carousel.Item>
  </Carousel>
)
}

export default Slideshow



/*
<Carousel.Item>
    <img
      className="d-block w-100"
      src= "https://images8.alphacoders.com/115/thumbbig-1157074.webp"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src= "https://images3.alphacoders.com/929/thumbbig-929416.webp"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src=  "https://images.alphacoders.com/566/thumbbig-566158.webp"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src= "https://images.alphacoders.com/783/thumbbig-783254.webp"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src= "https://images8.alphacoders.com/115/thumbbig-1151022.webp"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src= "https://images8.alphacoders.com/118/thumbbig-1188897.webp"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
*/