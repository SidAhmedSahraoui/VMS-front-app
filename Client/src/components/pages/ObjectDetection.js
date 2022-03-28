import React from "react";
import Helmet from "react-helmet";
import ReactPlayer from "react-player";
import Sidbar from "../layout/Sidbar";
import Video from "../../images/song.mp4";
import { Button, Form } from "react-bootstrap";
const ObjectDetection = () => {
  return (
    <>
      <Helmet>
        <title>Cameras | Dashboard</title>
      </Helmet>
      <div className="cam">
        <div className="main container-inner px-3 mt-4 text-center">
          <h1 className="title">Cam_1</h1>
          <div className="grp-container">
            <ReactPlayer
              className="vid"
              playing="true"
              controls="true"
              loop="true"
              url={Video}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default ObjectDetection;
