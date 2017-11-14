import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';
import logo from '../images/logo.png' 
import searchImg from '../images/search.png' 

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar light expand="md">
          <NavbarBrand href="/">
            <img src={logo} alt="logo" />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                    <form className="form-inline my-2 my-lg-0">
                      <div className="input-group search-button"> 
                        <input className="form-control" aria-label="search" placeholder="Search" /> 
                          <div className="input-group-btn"> 
                            <button type="button" className="btn btn-default" aria-label="Help">
                              <img src={searchImg} alt="search" />
                            </button>  
                          </div> 
                        </div>
                    </form>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;