import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import store from "../redux/store";
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
import { Provider } from "react-redux";
import PrivateRoute from "./routes/PrivateRoute";
import VideoRecorder from "./pages/videoRecorder";
import ObjectDetection from "./pages/ObjectDetection";
function App() {
  return (
    <Router>
      <Provider store={store}>
        <div className="app">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Login} />
            <PrivateRoute exact path="/cam_1" component={Cam_1} />
            <PrivateRoute exact path="/groups" component={Profile} />
            <PrivateRoute exact path="/messages" component={Messages} />
            <PrivateRoute exact path="/settings" component={Settings} />
            <PrivateRoute exact path="/dashboard" component={Cameras} />
            <PrivateRoute
              exact
              path="/recorded_video"
              component={VideoRecorder}
            />
            <PrivateRoute
              exact
              path="/live_object_detection"
              component={ObjectDetection}
            />
            <PrivateRoute exact path="/register" component={Register} />
          </Switch>
          <Footer />
        </div>
      </Provider>
    </Router>
  );
}

export default App;
