
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData, setActiveCountry } from '../redux/actions/dataActions';
import { Container, Row, Button, Col, Card } from 'react-bootstrap';
import { FaBath, FaRuler, FaBed, FaDoorOpen } from 'react-icons/fa';
import { FiHeart } from 'react-icons/fi';
import { CiLocationOn } from 'react-icons/ci';
import { Link } from 'react-router-dom'; // Import Link from React Router
import '../style.css'

function Sample() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  const activeCountry = useSelector((state) => state.data.activeCountry);

  // Fetch data from the API when the component mounts
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  // Handle button click to set the active country for filtering
  const handleCountryClick = (country) => {
    dispatch(setActiveCountry(country));
    setShowAll(false); // Reset to show only 3 items when country changes
  };

  // Filter data based on the active country
  const filteredData = data.data.filter((item) => item.country === activeCountry);

  // Extract unique countries from the data
  const uniqueCountries = [...new Set(data.data.map((item) => item.country))];

  const [showAll, setShowAll] = useState(false);

  const handleShowMore = () => {
    setShowAll((prevShowAll) => !prevShowAll); // Toggle the showAll state
  };

  return (
    <div className="dtamodelcls">
      <Container className="container rounded-3 mt-2 mb-2">
        <Row className='justify-content-center'>
          <Col lg={10}>
            <div>
              {uniqueCountries.map((country) => (
                <Button
                  className='mb-3 mt-3 mx-3'
                  key={country}
                  onClick={() => handleCountryClick(country)}
                  variant={activeCountry === country ? 'primary' : 'light'} // Highlight the active country button
                >
                  {country}
                </Button>
              ))}
            </div>   
            <Row className='justify-content-md-center'>
              <Col >
                <Row lg={3} md={2} xs={1}>
                  {(showAll || filteredData.length <= 3 ? filteredData : filteredData.slice(0, 3)).map((dta) => (
                    <Col key={dta.id}>
                      <Link className='link' to={`/cardId/${dta.id}`} > {/* Use Link to navigate to a new page */}
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
                      </Link>
                    </Col>
                  ))}
                </Row>
              </Col>
            </Row>
            <Row>
              <Col>
                {filteredData.length > 3 && (
                  <Button onClick={handleShowMore}>
                    {showAll ? 'Show Less' : 'Show More'}
                  </Button>
                )}
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Sample;