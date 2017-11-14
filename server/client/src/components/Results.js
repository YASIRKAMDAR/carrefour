import React from 'react';
import { Row, Col, Card, CardImg  } from 'reactstrap';
import resultimg from '../images/result-image.png';

import { connect } from 'react-redux';
import * as actions from '../actions';

class Results extends React.Component {
    componentDidMount()
    {
        this.props.getResults();
    }
    render() {
        switch (this.props.results)
        {
            case null:
              return  <p>No results yet</p>
            case false:
                return <p>No results to display</p>
            default:
                return (
                    <Row className="comp-block" id="resultsBlock">
                        {this.props.results.results.map((result, index) => (
                            <Col sm="4" key={index}>
                                <Card>
                                    <CardImg top width="100%" src={resultimg} alt="Card image cap"></CardImg>
                                </Card>
                                <p className="name text-left">{result.name}</p>
                                <p className="price text-left">{result.price}</p>
        
                            </Col>
                         ))}
                    </Row>
                );
        }
        
    }
};


function mapStateToProps({results}) {
    return {results};
}

export default connect(mapStateToProps, actions) (Results);
