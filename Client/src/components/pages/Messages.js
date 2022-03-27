import React from "react";
import Helmet from "react-helmet";
import { Container, Col, Row } from "react-bootstrap";
import Sidbar from "../layout/Sidbar";

// Images
import Avatar from "../../images/avatar.svg";

const Messages = () => {
  return (
    <>
      <Helmet>
        <title> Messages</title>
      </Helmet>

      <div className="messages-container">
        <Sidbar />
        <Container className="messages container-inner px-3 mt-4 text-center">
          <h1 className="title">Messages</h1>
          <div className="adds">
            <Col>
              <Row className="msg-card">
                <img className="picture" src={Avatar} alt="Profile" />

                <div>
                  <h4>User</h4>
                  <span>4 days ago</span>
                </div>
                <p>No , it's not Good msg!!</p>
              </Row>
            </Col>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Messages;
