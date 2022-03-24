import React from "react";
import Helmet from "react-helmet";
import { Col, Row } from "react-bootstrap";
// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const Notification = () => {
  return (
    <>
      <Helmet>
        <title>Joky Joky | Notifications</title>
      </Helmet>
      <div className="notification">
        <div className="main container-inner px-3 mt-4 text-center">
          <h1 className="title">Notifications</h1>

          <Col>
            <Row className="note-card">
              <p>your request to join dz_jokes has been approuved</p>
              <span>4 min ago</span>

              <FontAwesomeIcon
                className="icon mr-3"
                icon={faCheckCircle}
                size="lg"
              />
            </Row>
            <Row className="note-card">
              <p>your have 23 reactions on your last joke see all </p>
              <span>6 hours ago</span>

              <FontAwesomeIcon
                className="icon mr-3"
                icon={faCheckCircle}
                size="lg"
              />
            </Row>
            <Row className="note-card">
              <p>yasser_10 replied to your comment on thin joke</p>
              <span>1 day ago</span>

              <FontAwesomeIcon
                className="icon mr-3"
                icon={faCheckCircle}
                size="lg"
              />
            </Row>
            <Row className="note-card">
              <p>your have 23 reactions on your last joke see all </p>
              <span>6 hours ago</span>

              <FontAwesomeIcon
                className="icon mr-3"
                icon={faCheckCircle}
                size="lg"
              />
            </Row>
            <Row className="note-card">
              <p>yasser_10 replied to your comment on thin joke</p>
              <span>1 day ago</span>

              <FontAwesomeIcon
                className="icon mr-3"
                icon={faCheckCircle}
                size="lg"
              />
            </Row>
          </Col>
        </div>
      </div>
    </>
  );
};

export default Notification;
