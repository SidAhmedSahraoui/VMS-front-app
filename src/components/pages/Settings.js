import React from "react";
import Helmet from "react-helmet";
import { Container, Form, Button } from "react-bootstrap";

const Settings = () => {
  return (
    <>
      <Helmet>
        <title>Joky Joky | Settings</title>
      </Helmet>
      <Container>
        <div className="container-inner px-3 mt-4">
          <div className="settings mx-auto">
            <h4 className="mb-3">
              <strong>Your informations</strong>
            </h4>
            <Form className="form form-container">
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Email"
                  name="email"
                  readOnly
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group>
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Username"
                  name="username"
                  readOnly
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Fullname</Form.Label>
                <Form.Control type="text" placeholder="Fullname" name="name" />
              </Form.Group>

              <Form.Group>
                <Form.Label>Your bio</Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="Your bio"
                  rows="2"
                  name="bio"
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Gender</Form.Label>
                <Form.Control as="select" name="gender">
                  <option defaultValue value={3}>
                    Not defined
                  </option>
                  <option value={1}>Male</option>
                  <option value={2}>Female</option>
                </Form.Control>
              </Form.Group>

              <Form.Group>
                <Form.Label>Allow receiving messages</Form.Label>
                <Form.Control as="select" name="allow_messages">
                  <option value={true}>Yes</option>
                  <option value={false}>No</option>
                </Form.Control>
              </Form.Group>

              <div className="links d-flex align-items-center justify-content-end mt-4">
                <Button variant="success" type="submit">
                  Update
                </Button>
              </div>
            </Form>

            <h4 className="my-3">
              <strong>Security</strong>
            </h4>
            <Form className="form form-container">
              <Form.Group>
                <Form.Label>Old password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Old password"
                  name="old_password"
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>New password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="New password"
                  name="new_password"
                />
              </Form.Group>

              <div className="links d-flex align-items-center justify-content-end mt-4">
                <Button variant="success" type="submit">
                  Update
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Settings;
