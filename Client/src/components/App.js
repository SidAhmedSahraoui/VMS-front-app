import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// App layout components
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
// App Pages
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Cameras from "./pages/Cameras";
import Messages from "./pages/Messages";
import Notification from "./pages/Notification";
import Cam_1 from "./pages/Cam_1";
import Login from "./pages/Login";
import Register from "./pages/Register";
function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Cameras} />
          <Route exact path="/cam_1" component={Cam_1} />
          <Route exact path="/groups" component={Profile} />
          <Route exact path="/messages" component={Messages} />
          <Route exact path="/notifications" component={Notification} />
          <Route exact path="/settings" component={Settings} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
