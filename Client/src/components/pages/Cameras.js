import React from "react";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";
import ReactPlayer from "react-player";
import { Button } from "react-bootstrap";
import Sidbar from "../layout/Sidbar";
import Video from "../../images/song.mp4";

const Cameras = () => {
  return (
    <>
      <Helmet>
        <title>Cameras | Dashboard</title>
      </Helmet>
      <div className="cameras">
        <Sidbar />
        <div className="main container-inner px-3 mt-4 text-center">
          <h1 className="title">Cameras</h1>

          <div className="grp-container">
            <div className="grp-card">
              <h2>Cam_1</h2>
              <img src="" alt="" srcset="" />
              <Link to="/cam_1" className="sid-item">
                <Button className="btn" variant="success" type="submit">
                  Display
                </Button>
              </Link>
            </div>
            <div className="grp-card">
              <h2>Cam_2</h2>
              <ReactPlayer
                className="vid"
                playing="true"
                controls="true"
                loop="true"
                url={Video}
              />
              <Link to="/cam_2" className="sid-item">
                <Button className="btn" variant="success" type="submit">
                  Display
                </Button>
              </Link>
            </div>

            <div className="grp-card">
              <h2>Cam_3</h2>
              <ReactPlayer
                className="vid"
                playing="true"
                controls="true"
                loop="true"
                url={Video}
              />
              <Link to="/cam_3" className="sid-item">
                <Button className="btn" variant="success" type="submit">
                  Display
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cameras;
