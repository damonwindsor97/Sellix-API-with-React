import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';


function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Container>
      <Carousel className="showcase" activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1558743941-459179fe00e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="First slide"
          />


          <Carousel.Caption>
            <h3>Trusted Boosters</h3>
            <p>Our Team of Boosters are High-Ranking Players in multiple FPS Titles.</p>
            <button className="purchaseButton">Buy now</button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1548003693-b55d51032288?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Best Price</h3>
            <p>Our Prices are the best, we compete with all of the Big Guys prices</p>
            <button className="purchaseButton">Buy now</button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Custom Requests</h3>
            <p>
              Fill out a Request Form for an Account in Particular
            </p>
            <button className="purchaseButton">Buy now</button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

    </Container>
  );
}

export default ControlledCarousel;
