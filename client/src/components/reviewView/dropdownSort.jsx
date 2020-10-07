import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import PropTypes from 'prop-types';

import AddReview from './addReviews';

const Sort = ({ func, currentSort, reviews, id }) => {
  return (
    <div>
      <Row>
        <Col xs="3">
          <div className="review-sort-text">
            {`(${reviews.length}) Reviews, sorted by `}
          </div>
        </Col>
        <Col xs="6">
          <Dropdown className="sort-reviews-dropdown">
            <Dropdown.Toggle variant="secondary" className="sort-reviews-button">
              {currentSort.charAt(0).toUpperCase() + currentSort.slice(1)}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item className="sort-reviews-item" onClick={() => func('relevant')}>Relevant</Dropdown.Item>
              <Dropdown.Item className="sort-reviews-item" onClick={() => func('helpful')}>Helpful</Dropdown.Item>
              <Dropdown.Item className="sort-reviews-item" onClick={() => func('newest')}>Newest</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
        <Col xs="3">
          <AddReview id={id} />
        </Col>
      </Row>
    </div>
  );
};

Sort.propTypes = {
  func: PropTypes.func.isRequired,
  currentSort: PropTypes.string.isRequired,
  reviews: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  id: PropTypes.number.isRequired,
};

export default Sort;
