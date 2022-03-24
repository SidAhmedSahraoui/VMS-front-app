import React from "react";
import Helmet from "react-helmet";
import { Container, Col, Row } from "react-bootstrap";
import Sidbar from "../layout/Sidbar";
// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
// Images
import Avatar from "../../images/avatar.svg";

import Adv from "../../images/ad1.png";

const Messages = () => {
  return (
    <>
      <Helmet>
        <title>Joky Joky | Messages</title>
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
                  <h4>Sid Ahmed</h4>
                  <span>4 min ago</span>
                </div>

                <p>The funniest Joke ever !!</p>
                <FontAwesomeIcon
                  className="icon mr-3"
                  icon={faCheckCircle}
                  size="lg"
                />
              </Row>
              <Row className="msg-card">
                <img className="picture" src={Avatar} alt="Profile" />

                <div>
                  <h4>Ahmed</h4>
                  <span>10 hours ago</span>
                </div>
                <p>
                  LOL ... you get it !!{" "}
                  <span role="img" aria-label="ok">
                    👏👏
                  </span>{" "}
                </p>
                <FontAwesomeIcon
                  className="icon mr-3"
                  icon={faCheckCircle}
                  size="lg"
                />
              </Row>
              <Row className="msg-card">
                <img className="picture" src={Avatar} alt="Profile" />

                <div>
                  <h4>Celia_dz</h4>
                  <span>15 min ago</span>
                </div>
                <p>
                  Hahaha !! Funny{" "}
                  <span role="img" aria-label="ok">
                    😅😅
                  </span>
                </p>
                <FontAwesomeIcon
                  className="icon mr-3"
                  icon={faCheckCircle}
                  size="lg"
                />
              </Row>
              <Row className="msg-card">
                <img className="picture" src={Avatar} alt="Profile" />

                <div>
                  <h4>Sarah_DZ</h4>
                  <span>4 days ago</span>
                </div>
                <p>No , it's not Good joke!!</p>
                <FontAwesomeIcon
                  className="icon mr-3"
                  icon={faCheckCircle}
                  size="lg"
                />
              </Row>
              <Row className="msg-card">
                <img className="picture" src={Avatar} alt="Profile" />

                <div>
                  <h4>Yasser_10</h4>
                  <span>4 min ago</span>
                </div>
                <p>
                  Nice one{" "}
                  <span role="img" aria-label="ok">
                    😂😂😂
                  </span>{" "}
                </p>
                <FontAwesomeIcon
                  className="icon mr-3"
                  icon={faCheckCircle}
                  size="lg"
                />
              </Row>
            </Col>
            <div className="mt-3">
              <h5>Sponsored ads</h5>
              <img className="img img-fluid" src={Adv} alt="Adv" />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Messages;
