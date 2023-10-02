import React, { useState, useEffect } from 'react';
import { Container, Row, Button, Col, Card } from 'react-bootstrap';
import { FaBath, FaRuler, FaBed, FaDoorOpen } from 'react-icons/fa';
import { FiHeart } from 'react-icons/fi';
import { CiLocationOn } from 'react-icons/ci';
import './style.css';

function Sample() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://64c37c1ceb7fd5d6ebd0ebc4.mockapi.io/brands")
      .then((res) => res.json())
      .then((op) => {
        setData(op);
        setPage(op.slice(0, 6));
      });
  }, []);

  return (
    <div className="dtamodelcls">
      <Container className="container rounded-3 mt-2 mb-2">
        <Row className='justify-content-md-center'>
          <Col lg={10}>
            <Row lg={3} md={2} xs={1}>
              {data.map((dta) => (
                <Col key={dta.id}>
                  <Card className='mx-1 mb-2 p-2 rounded-4'>
                    <Card.Img
                      className='rounded-4'
                      src={dta.image}
                      height="150px"
                      alt={dta.image}
                      style={{ width: "100%" }}
                    />
                    <Row className="mt-3 mb-3">
                      <p><CiLocationOn className='mb-1'/>{dta.location}</p>
                      <p className="fw-bold">{dta.name}</p>
                    </Row>
                    <Row className="mt-1 mb-1 ">
                      <Col>
                        <FaDoorOpen className="reacticon" /> <br />{dta.roomNumber} Room
                      </Col>
                      <Col>
                        <FaBed className="reacticon" /><br /> {dta.bedNumber} Bed
                      </Col>
                      <Col>
                        <FaBath className="reacticon" /> <br />{dta.bath} Bath
                      </Col>
                      <Col>
                        <FaRuler className="reacticon" /><br /> {dta.sft} Sft
                      </Col>
                    </Row>
                    <hr />
                    <Row className="mt-1 mb-1 ">
                      <Col xs={5}>
                        <p className="mt-2">
                          <span className='fw-bold'>${dta.amount}</span>/<span>month</span>
                        </p>
                      </Col>
                      <Col xs={7} className='d-flex'>
                        <FiHeart className="mt-2 reacticon me-3 p-2 fa-heart rounded-4" />
                        <Button className="rounded-4" >Rent Now</Button>
                      </Col>
                    </Row>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Sample;
