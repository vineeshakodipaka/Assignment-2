import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from '../redux/actions/dataActions';
import { Container, Row, Button, Col, Card } from 'react-bootstrap';
import { FaBath, FaRuler, FaBed, FaDoorOpen } from 'react-icons/fa';
import { FiHeart } from 'react-icons/fi';
import { CiLocationOn } from 'react-icons/ci';


function CardDetails() {
  const { cardId } = useParams();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data.data);

  // Find the card with the matching id in the data array
  const card = data.find((dta) => dta.id === parseInt(cardId));

  useEffect(() => {
    // Check if the data for the specific card is available in the Redux store
    if (!card) {
      // If card data is not available, fetch it by dispatching the action
      dispatch(fetchData());
    }
  }, [card, cardId, dispatch]);

  console.log("cardId:", cardId);
  console.log("card:", card);

  if (!card) { 
    return <p>Loading...</p>; // You can add a loading indicator here
  }

  return (
    <div>
     
      <center>
        <Col lg={3} className='mt-5'>
        <h2>Card Details</h2>
        <Card className='mx-1 mb-2 p-2 rounded-4'>
                    <Card.Img
                      className='rounded-4'
                      src={card.image}
                      height="150px"
                      alt={card.image}
                      style={{ width: "100%" }}
                    />
                    <Row className="mt-3 mb-3">
                      <p><CiLocationOn className='mb-1'/>{card.location}</p>
                      <p className="fw-bold">{card.name}</p>
                    </Row>
                    <Row className="mt-1 mb-1 ">
                      <Col>
                        <FaDoorOpen className="reacticon" /> <br />{card.roomNumber} Room
                      </Col>
                      <Col>
                        <FaBed className="reacticon" /><br /> {card.bedNumber} Bed
                      </Col>
                      <Col>
                        <FaBath className="reacticon" /> <br />{card.bath} Bath
                      </Col>
                      <Col>
                        <FaRuler className="reacticon" /><br /> {card.sft} Sft
                      </Col>
                    </Row>
                    <hr />
                    <Row className="mt-1 mb-1 ">
                      <Col xs={5}>
                        <p className="mt-2">
                          <span className='fw-bold'>${card.amount}</span>/<span>month</span>
                        </p>
                      </Col>
                      <Col xs={7} className='d-flex'>
                        <FiHeart className="mt-2 reacticon me-3 p-2 fa-heart rounded-4" />
                        <Button className="rounded-4" >Rent Now</Button>
                      </Col>
                    </Row>
                  </Card>
        </Col>
      </center>
    </div>
  );
}

export default CardDetails;
