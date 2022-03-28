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
function App() {
  return (
    <Router>
      <Provider store={store}>
        <div className="app">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/cam_1" component={Cam_1} />
            <Route exact path="/groups" component={Profile} />
            <Route exact path="/messages" component={Messages} />
            <Route exact path="/notifications" component={Notification} />
            <Route exact path="/settings" component={Settings} />
            <Route exact path="/dashboard" component={Cameras} />
            <Route exact path="/register" component={Register} />
          </Switch>
          <Footer />
        </div>
      </Provider>
    </Router>
  );
}

export default App;
