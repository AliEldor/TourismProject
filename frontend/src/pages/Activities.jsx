import React, { useState, useEffect } from 'react';
import CommonSection from '../shared/CommonSection';

import '../styles/tour.css';
import activityData from '../assets/data/activities';
import ActivityCard from './../shared/ActivityCard';
import SearchBar from './../shared/SearchBar';
import Newsletter from './../shared/Newsletter';
import { Col, Container, Row } from 'reactstrap';

const Activities = () => {
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const pages = Math.ceil(activityData.length / 4); // Backend count
    setPageCount(pages);
  }, [page]);

  return (
    <>
      <CommonSection title={'All Activities'} />
      <section>
        <Container>
          <Row>
            <SearchBar />
          </Row>
        </Container>
      </section>

      <section className='pt-0'>
        <Container>
          <Row>
            {activityData?.map(activity => (
              <Col lg='3' className='mb-4' key={activity.id}>
                <ActivityCard activity={activity} />
              </Col>
            ))}

            <Col lg='12'>
              <div className='pagination d-flex align-items-center justify-content-center mt-4 gap-3'>
                {[...Array(pageCount).keys()].map(number => (
                  <span
                    key={number}
                    onClick={() => setPage(number)}
                    className={page === number ? 'active__page' : ''}
                  >
                    {number + 1}
                  </span>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Newsletter />
    </>
  );
};

export default Activities;
