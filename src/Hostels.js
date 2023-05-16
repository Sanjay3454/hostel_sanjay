import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Hostels.css'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getHostels } from './actions/HAction';
import Carousels from './Carousels';
import Description from './Description';



function Hostels() {


 
  const dispatch= useDispatch()

  useEffect(() => {
    dispatch(getHostels)
  }, [])

  const {hostelList}=useSelector(state=>state.reducer1)
  console.log(hostelList);



  return (
    <div>
      <Carousels/>
      <Description/>

  
    <Row className='ms-5 mb-5 p-2'>

      {
        hostelList.map(rest => (
          <Col  className='p-2'  lg={4} md={6}  >

            <Link id='l1' to={`/viewHostel/${rest.id}`}>

              <Card id='c1' className='mt-5 ms-5 card' style={{ width: '18rem', height:'300px',borderRadius:"3px",   background: "aliceblue"}}>
              <Card.Img className='p-3' style={{height:"15rem"}} variant="top" src={rest.image} />
                
                <Card.Body style={{overflowY:"hidden"}}>
                  <Card.Title style={{overflowY:"hidden"}}>{rest.name}</Card.Title>
                  <Card.Text style={{}}>
                    {rest.place}
                  </Card.Text>
                </Card.Body>
              </Card>

            </Link>

          </Col>
        )
        )
      }

    </Row>
    </div>
  )
}

export default Hostels
