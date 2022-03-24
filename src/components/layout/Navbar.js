import React from "react";
import { Link } from "react-router-dom";
import { Container, Navbar, Nav, Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faSignOutAlt,
  faCog,
  faBell,
} from "@fortawesome/free-solid-svg-icons";

const NavbarComponent = () => {
  return (
    <Navbar bg="white" expand="lg">
      <Container className="main-container">
        <Link to="/">
          <Navbar.Brand>
            <h1>
              Camera<span> Surveillance</span>.
            </h1>
          </Navbar.Brand>
        </Link>
        <Nav>
          <>
            <Dropdown alignRight>
              <Dropdown.Toggle variant="outline-light">
                Hey, <strong>Cheikh</strong>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Link to="/" className="dropdown-item">
                  <FontAwesomeIcon
                    className="icon mr-3"
                    icon={faUser}
                    size="lg"
                  />
                  Profile
                </Link>
                <Link to="/notifications" className="dropdown-item">
                  <FontAwesomeIcon
                    className="icon mr-3"
                    icon={faBell}
                    size="lg"
                  />
                  Notification
                </Link>
                <Link to="/settings" className="dropdown-item">
                  <FontAwesomeIcon
                    className="icon mr-3"
                    icon={faCog}
                    size="lg"
                  />
                  Settings
                </Link>
                <Dropdown.Divider></Dropdown.Divider>
                <button className="dropdown-item">
                  <FontAwesomeIcon
                    className="icon mr-3"
                    icon={faSignOutAlt}
                    size="lg"
                  />
                  Logout
                </button>
              </Dropdown.Menu>
            </Dropdown>
          </>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
