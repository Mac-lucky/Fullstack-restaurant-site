import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBFormInline,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBIcon,
} from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";
import "./Navbar.css";
import ikonka from "./images/ikonkapiera.png";

class Navbar extends Component {
  state = {
    isOpen: false,
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <Router>
        <MDBNavbar
          fixed="top"
          scrolling
          color="bg-dark"
          transparent
          dark
          expand="md"
        >
          <MDBNavbarBrand>
            <img src={ikonka} className="padleft iconsize white-text"></img>
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={this.toggleCollapse} />
          <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav left>
              <MDBNavItem active>
                <a class="nav-link" href="#home">
                  Home
                </a>
              </MDBNavItem>
              <MDBNavItem>
                <a class="nav-link" href="#actual">
                  Aktualne informacje
                </a>
              </MDBNavItem>
              <MDBNavItem>
                <a class="nav-link" href="#aboutus">
                  O nas
                </a>
              </MDBNavItem>
              <MDBNavItem>
                <a class="nav-link" href="#menu">
                  Menu
                </a>
              </MDBNavItem>
              <MDBNavItem>
                <a class="nav-link" href="#opinions">
                  Opinie
                </a>
              </MDBNavItem>
              <MDBNavItem>
                <a class="nav-link" href="#contact">
                  Kontakt
                </a>
              </MDBNavItem>
            </MDBNavbarNav>
            <MDBNavbarNav right>
              <MDBNavItem className="padright">
                <MDBDropdown>
                  <MDBDropdownToggle nav caret>
                    <MDBIcon icon="user" />
                  </MDBDropdownToggle>
                  <MDBDropdownMenu className="dropdown-default">
                    <MDBDropdownItem href="#!">Moje zamówienia</MDBDropdownItem>
                    <MDBDropdownItem href="#!">Zaloguj</MDBDropdownItem>
                    <MDBDropdownItem href="#!">Zarejestruj</MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
      </Router>
    );
  }
}

export default Navbar;
