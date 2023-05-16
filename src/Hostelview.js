import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';

import Review from './Review';
import { useSelector } from 'react-redux';



function Hostelview() {


  // object create for useParams
  const params = useParams()
  console.log(params.id);


  const {hostelList}=useSelector(state=>state.reducer1)
  console.log({hostelList});

  // find single restaurant data
  const singleHostel = hostelList.find(i => i.id == params.id)
  console.log(singleHostel,"h1");


  useEffect(()=>{

  },[])




  




  return (
    <>
      
      {
      singleHostel?
        (<Row>
        <Col lg={6} md={6}>
          <img className=' container p-5' style={{ height: '800px',width:'100%' }}
            src={singleHostel.image}
          />
        </Col>
        <Col lg={6} md={6} className='mt-5 fs-5'>

          <ListGroup className='pe-5'>
            <ListGroup.Item ><h1 style={{overflowY:"hidden"}} className='text-warning'> {singleHostel.name}
          </h1></ListGroup.Item>
            <ListGroup.Item> place : <strong>{singleHostel.place}</strong></ListGroup.Item>
            <ListGroup.Item> Rating : <strong>{singleHostel.rating}</strong></ListGroup.Item>
            <ListGroup.Item> rent : <strong>{singleHostel.price_range}</strong></ListGroup.Item>
            <ListGroup.Item> email : <strong>{singleHostel.contact.email}</strong></ListGroup.Item>
            <ListGroup.Item> phone : <strong>{singleHostel.contact.phone}</strong></ListGroup.Item>

          
            <ListGroup.Item>

                  {/* <Operatingtime workingTime={singleHostel.operating_hours}/> */}

                  <Review reviewList={singleHostel.review}/>
              
            </ListGroup.Item>
          </ListGroup>

        </Col>

      </Row>):""
      }
    </>
  )
}

export default Hostelview
