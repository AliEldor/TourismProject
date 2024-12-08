import React, { useRef, useState } from 'react';
import '../styles/tour-details.css';
import { Container, Row, Col, Form, ListGroup } from 'reactstrap';
import { useParams } from 'react-router-dom';
import activityData from '../assets/data/activities';
import calculateAvgRating from '../utils/avgRating';
import avatar from '../assets/images/avatar.jpg';

const ActivityDetails = () => {
  const { id } = useParams();
  const reviewMsgRef = useRef('');
  const [activityRating, setActivityRating] = useState(null);

  // Fetch activity data based on ID from the activityData array
  const activity = activityData.find((activity) => activity.id === id);

  const {
    photo,
    title,
    desc,
    price,
    address,
    reviews,
    city,
    distance,
    maxGroupSize,
  } = activity;

  const { totalRating, avgRating } = calculateAvgRating(reviews);

  // Date format options
  const options = { day: 'numeric', month: 'long', year: 'numeric' };

  // Submit request to the server by using the API
  const submitHandler = (e) => {
    e.preventDefault();
    const reviewText = reviewMsgRef.current.value;
    // Perform API request or state update with the review text and rating
  };

  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg='8'>
              <div className='activity__content'>
                <img src={photo} alt='' />

                <div className='activity__info'>
                  <h2>{title}</h2>
                  <div className='d-flex align-items-center gap-5'>
                    <span className='activity__rating d-flex align-items-center gap-1'>
                      <i
                        className='ri-star-fill'
                        style={{ color: 'var(--secondary-color)' }}
                      ></i>
                      {avgRating === 0 ? null : avgRating}
                      {totalRating === 0 ? (
                        'Not rated'
                      ) : (
                        <span>({reviews.length})</span>
                      )}
                    </span>
                    <span>
                      <i className='ri-map-pin-user-line'></i> {address}
                    </span>
                  </div>

                  <div className='activity__extra-details'>
                    <span>
                      <i className='ri-map-pin-2-line'></i> {city}
                    </span>
                    <span>
                      <i className='ri-money-dollar-circle-line'></i> ${price}
                      /per person
                    </span>
                    <span>
                      <i className='ri-map-pin-time-line'></i> {distance} km
                    </span>
                    <span>
                      <i className='ri-group-line'></i> {maxGroupSize} people
                    </span>
                  </div>
                  <h5>Description</h5>
                  <p>{desc}</p>
                </div>

                {/* Activity reviews section */}
                <div className='activity__reviews mt-4'>
                  <h4>Reviews ({reviews?.length} reviews)</h4>

                  <Form onSubmit={submitHandler}>
                    <div className='d-flex align-items-center gap-3 mb-4 rating__group'>
                      <span onClick={() => setActivityRating(1)}>
                        1 <i className='ri-star-s-fill'></i>
                      </span>
                      <span onClick={() => setActivityRating(2)}>
                        2 <i className='ri-star-s-fill'></i>
                      </span>
                      <span onClick={() => setActivityRating(3)}>
                        3 <i className='ri-star-s-fill'></i>
                      </span>
                      <span onClick={() => setActivityRating(4)}>
                        4 <i className='ri-star-s-fill'></i>
                      </span>
                      <span onClick={() => setActivityRating(5)}>
                        5 <i className='ri-star-s-fill'></i>
                      </span>
                    </div>

                    <div className='review__input'>
                      <input
                        type='text'
                        ref={reviewMsgRef}
                        placeholder='Share your thoughts'
                        required
                      />
                      <button className='btn primary__btn text-white' type='submit'>
                        Submit
                      </button>
                    </div>
                  </Form>

                  <ListGroup className='user__reviews'>
                    {reviews?.map((review) => (
                      <div className='review__item'>
                        <img src={avatar} alt='' />

                        <div className='w-100'>
                          <div className='d-flex align-items-center justify-content-between'>
                            <div>
                              <h5>{review.name}</h5>
                              <p>
                                {new Date().toLocaleDateString('en-US', options)}
                              </p>
                            </div>
                            <span className='d-flex align-items-center'>
                              {review.rating}
                              <i className='ri-star-s-fill'></i>
                            </span>
                          </div>

                          <h6>{review.review}</h6>
                        </div>
                      </div>
                    ))}
                  </ListGroup>
                </div>
                {/* Activity reviews section */}
              </div>
            </Col>

            <Col lg='4'>{/* Additional content or sidebar */}</Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ActivityDetails;
