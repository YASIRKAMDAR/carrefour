import React from 'react';
import { Row, Col, Card, CardBody, CardTitle, CardSubtitle, Button, FormGroup, Form, Label, Input  } from 'reactstrap';

import { connect } from 'react-redux';
import * as actions from '../actions';

class LoginForm extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
          username: '',
          password: '',
          formErrors: {usernameError: '', passwordError: ''},
          usernameValid: false,
          passwordValid: false,
          formValid: false
        }
      }
      validateUserInput (e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value}, 
                      () => { this.validateField(name, value) });
      }
      validateField(fieldName, value) {
            let fieldValidationErrors = this.state.formErrors;    
            let usernameValid = this.state.usernameValid;
            let passwordValid = this.state.passwordValid;

            switch(fieldName) {
            case 'username':
                usernameValid = value.trim().length > 0;
                fieldValidationErrors.usernameError = usernameValid ? '' : 'Required field!';
                break;
            case 'password':
                passwordValid = value.length > 0;
                fieldValidationErrors.passwordError = passwordValid ? '' : 'Required field!';
                break;
            default:
                break;
        }
        this.setState({ formErrors: fieldValidationErrors,
                        usernameValid: usernameValid,
                        passwordValid: passwordValid
                      }, this.validateForm);
      }
      
      validateForm() {
        this.setState({formValid: this.state.usernameValid && this.state.passwordValid});
      }
    errorClass(error) {
        return(error.length === 0 ? '' : 'error');
     }
      
     lookupUser(event) {
        if(this.state.formValid) {
        var data = {username: this.state.username, password: this.state.password};
         this.props.loginUser(data);
        }
     }
    renderLogin()
    {
        switch (this.props.auth)
        {
            case null:
              return  <CardBody><CardTitle className="text-center">Sign In Now</CardTitle> <CardSubtitle className="text-center">Unlock awesome Features!</CardSubtitle></CardBody>
            case false:
                return <CardBody><CardTitle className="text-center">Sign In Now</CardTitle> <CardSubtitle className="text-center">Unlock awesome Features!</CardSubtitle></CardBody>
            default:
                return <CardBody><CardTitle className="text-center">welcome {this.state.username}</CardTitle> <CardSubtitle className="text-center">enjoy awesome Features!</CardSubtitle></CardBody>
        }
    }
    render() {
        return (
            <Row id="LoginBlock" className="comp-block">
                <Col md="8" lg="6" className="mr-auto mx-auto">
                    <Card>
                        {this.renderLogin()}
                        <CardBody>
                        <Form>
                            <FormGroup className={this.errorClass(this.state.formErrors.usernameError)}>
                                <Row>
                                    <Col sm="6" className="ml-auto error-message">
                                        <div  className="float-right">{this.state.formErrors.usernameError}</div>
                                    </Col>
                                </Row>
                                <Input 
                                type="text"  name="username" id="Username" className="form-control-lg" placeholder="Username"
                                onChange={(event) => this.validateUserInput(event)} onBlur={(event) => this.validateUserInput(event)} value={this.state.username}  />
                                <Label for="Username" className="font-italic helper-label">Username</Label>
                            </FormGroup>
                            <FormGroup className={this.errorClass(this.state.formErrors.passwordError)}>
                                <Row>
                                    <Col sm="6" className="ml-auto error-message">
                                        <div  className="float-right">{this.state.formErrors.passwordError}</div>
                                    </Col>
                                </Row>
                                <Input type="password" name="password" id="Password" className="form-control-lg" placeholder="password"
                                onChange={(event) => this.validateUserInput(event)} onBlur={(event) => this.validateUserInput(event)} value={this.state.password}  />
                                <Label for="Password" className="font-italic helper-label">Password</Label>
                            </FormGroup>
                            <Row>
                                <Col sm="6">
                                <FormGroup check>
                                    <Label check>
                                        <Input type="checkbox" />{' '}
                                        Keep me logged in 
                                    </Label>
                                </FormGroup>
                                </Col>
                                <Col sm="6">
                                    <div  className="float-right">
                                        <a className="text-right" href="/forgotpassword" >forgot password?</a>
                                    </div>    
                                </Col>
                            </Row>
                            <Button className="input-block-level btn-block btn-lg" disabled={!this.state.formValid} onClick={(event) => this.lookupUser(event)}>SIGN IN</Button>
                        </Form>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        );
    }
};


function mapStateToProps({auth}) {
    return {auth};
}

export default connect(mapStateToProps, actions) (LoginForm);