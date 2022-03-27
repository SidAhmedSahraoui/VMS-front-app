import React from "react";
import { Link } from "react-router-dom";

// Images
import Camera from "../../images/camera.svg";
import Dashboard from "../../images/dashboard.svg";
import Message from "../../images/message.svg";
import Team from "../../images/team.svg";

const Sidbar = ({ setNewLocation }) => {
  const handleLinkClick = (e) => {
    e.preventDefault();

    setNewLocation("/" + e.target.name);
  };

  return (
    <>
      <div className="sidemenu">
        <div className="humberger">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="sid container-inner px-3 mt-4 text-center">
          <Link to="/" className="sid-item">
            <img src={Camera} className="icon" alt="dash" />
            Dashboard
          </Link>
          <Link to="/statistics" className="sid-item">
            <img src={Dashboard} className="icon" alt="msg" />
            Statistics
          </Link>
          <Link to="/groups" className="sid-item">
            <img src={Team} className="icon" alt="team" />
            Groups
          </Link>
          <Link to="/messages" className="sid-item">
            <img src={Message} className="icon" alt="notification" />
            Messages
          </Link>
        </div>
      </div>
    </>
  );
};
export default Sidbar;
