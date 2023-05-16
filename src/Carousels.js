import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
function Carousels() {
  return (
    <div>
      <Carousel>
      <Carousel.Item>
        <img style={{height:"30rem"}}
          className="d-block w-100"
          src="/girls-students-dormitory-room-with-bunk-laptop-desk-wardrobe-bookshelf-vector-cartoon-interior-dorm-bedroom-hostel-apartment-with-young-women-living-together_107791-9823.jpg"
          alt="First slide"
        />
     
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height:"30rem"}}
          className="d-block w-100"
          src="/istockphoto-1366525400-612x612.png"
          alt="Second slide"
        />

   
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height:"30rem"}}
          className="d-block w-100"
          src="/-1281821831-1024x1024-transformed.png"
          alt="Third slide"
        />

      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Carousels
