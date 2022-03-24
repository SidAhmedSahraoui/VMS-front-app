import React from "react";
import Helmet from "react-helmet";

// Images
import Avatar from "../../images/avatar.svg";

// App layout components
import Sidbar from "../layout/Sidbar";

const Profile = () => {
  return (
    <>
      <Helmet>
        <title>Cameras | Dashboard</title>
      </Helmet>
      <div className="profile-container">
        <Sidbar />
        <div className="main container-inner px-3 mt-4 text-center">
          <div className="profile">
            <img className="picture" src={Avatar} alt="Profile" />
            <div className="user-details mt-4">
              <h3 className="name"> Name</h3>
              <h5 className="bio">Front-end developer</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Profile;
