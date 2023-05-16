import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

function Review({reviewList}) {
  return (
    <div>
      <Accordion className='mt-5 p-3' defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header><h5 style={{overflowY:"hidden"}} className='text-danger'>Reviews</h5></Accordion.Header>
        <Accordion.Body>
       { reviewList}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
  )
}

export default Review
