import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Helmet from "react-helmet";
import { Container, Form, Button } from "react-bootstrap";

// Actions
import { updatePassword, clearErrors } from "../../redux/actions/authActions";
import { setAlert } from "../../redux/actions/alertActions";

const Settings = (props) => {
  const { error, updatePassword, clearErrors, setAlert } = props;

  const [passwords, setPasswords] = useState({
    old_password: "",
    new_password: "",
  });

  const { old_password, new_password } = passwords;

  const onChangePasswords = (e) =>
    setPasswords({ ...passwords, [e.target.name]: e.target.value });

  useEffect(() => {
    if (error && error.length) {
      if (typeof error === "object") {
        error.forEach((err) => {
          setAlert(err.msg, "danger");
        });
      } else {
        setAlert(error, "danger");
      }

      clearErrors();
    }

    // eslint-disable-next-line
  }, [error]);

  const onSubmitPassword = async (e) => {
    e.preventDefault();

    if (old_password === "") {
      setAlert("Old password is empty", "danger");
      return;
    }

    if (new_password === "" || new_password.length < 6) {
      setAlert("Password must contain at least 6 characters", "danger");
      return;
    }

    await updatePassword({
      old_password,
      new_password,
    });
  };

  return (
    <>
      <Helmet>
        <title> Settings</title>
      </Helmet>
      <Container>
        <div className="container-inner px-3 mt-4">
          <div className="settings mx-auto">
            <h4 className="my-3">
              <strong>Security</strong>
            </h4>
            <Form className="form form-container" onSubmit={onSubmitPassword}>
              <Form.Group>
                <Form.Label>Old password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Old password"
                  name="old_password"
                  value={old_password}
                  onChange={onChangePasswords}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>New password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="New password"
                  name="new_password"
                  value={new_password}
                  onChange={onChangePasswords}
                />
              </Form.Group>

              <div className="links d-flex align-items-center justify-content-end mt-4">
                <Button variant="primary" type="submit">
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

const mapSateToProps = (state) => ({
  user: state.auth.user,
  error: state.auth.error,
  loading_settings: state.auth.loading_settings,
});

export default connect(mapSateToProps, {
  updatePassword,
  clearErrors,
  setAlert,
})(Settings);
