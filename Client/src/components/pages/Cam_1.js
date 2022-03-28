import React from "react";
import Helmet from "react-helmet";
import ReactPlayer from "react-player";
import Sidbar from "../layout/Sidbar";
import Video from "../../images/song.mp4";
import { Button, Form } from "react-bootstrap";
const Cam_1 = () => {
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
        <div className="params container-inner px-3 mt-4 text-center">
          <h3 className="title">Parameters</h3>
          <Form className="form form-container">
            <Form.Group>
              <Form.Label>Type</Form.Label>
              <Form.Control as="select" name="gender">
                <option defaultValue value={3}>
                  Not defined
                </option>
                <option value={1}>MP4</option>
                <option value={2}>3gp</option>
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>param 1</Form.Label>
              <Form.Control type="range"></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>param 2</Form.Label>
              <Form.Control type="range"></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>params 3</Form.Label>
              <Form.Control type="range"></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>params 4</Form.Label>
              <Form.Control type="range"></Form.Control>
            </Form.Group>
            <Form.Group>
              <Button
                type="submit"
                className="btn btn-primary"
                varient="success">
                Submit
              </Button>
            </Form.Group>
          </Form>
        </div>
      </div>
    </>
  );
};
export default Cam_1;
