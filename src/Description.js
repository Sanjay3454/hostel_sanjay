import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Description() {
  return (
    <div>
      <Container>
        <Row>
          <Col md={6} lg={6}>
            {/* First Column */}
            <div style={{ padding: '106px' }}>
              <h4 style={{overflowY:"hidden"}}>Find your hostel</h4>
              <p>A hostel is a form of low-cost, short-term shared sociable lodging where guests can rent a bed, usually a bunk bed in a dormitory, with shared use of a lounge and sometimes a kitchen. Rooms can be mixed or single-sex and have private or shared bathrooms.</p>
            </div>
          </Col>
          <Col md={6} lg={6}>
            {/* Second Column */}
            <div style={{ padding: '0 15px' }}>
              <img
                src="/young-man-outside-hostel-flat-260nw-1489654118.webp"
                alt="Your Image"
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Description;
