import React from 'react';
import { Row, Col, Card, CardImg  } from 'reactstrap';
import resultimg from '../images/result-image.png';

const Results = (props) => {
  return (
    <Row className="comp-block" id="resultsBlock">
        <Col sm="4">
            <Card>
                <CardImg top width="100%" src={resultimg} alt="Card image cap"></CardImg>
            </Card>
            <p className="name text-left">Sign In Now</p>
            <p className="price text-left">Unlock awesome Features!</p>
        </Col>
        <Col sm="4">
            <Card>
                <CardImg top width="100%" src={resultimg} alt="Card image cap"></CardImg>
            </Card>
            <p className="name text-left">Sign In Now</p>
            <p className="price text-left">Unlock awesome Features!</p>

        </Col>
        <Col sm="4">
            <Card>
                <CardImg top width="100%" src={resultimg} alt="Card image cap"></CardImg>
            </Card>
            <p className="name text-left">Sign In Now</p>
            <p className="price text-left">Unlock awesome Features!</p>
        </Col>
    </Row>
  );
};

export default Results;