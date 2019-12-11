import React, { useState } from "react";
import {
    Route,
    Redirect,
    Switch, Link
} from "react-router-dom";

// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/paper-kit.scss";
import "assets/demo/demo.css";

// pages
import Index  from "views/examples/Index.js";
import LandingPage from "views/examples/LandingPage.js";
import RegisterPage from "views/examples/RegisterPage.js";
import LoginPage from "views/examples/LoginPage.js";
import Dashboard from "views/examples/Dashboard.js";
import PhotoUpload from "views/examples/PhotoUpload.js";

import IndexNavbar from  "components/Navbars/IndexNavbar.js"
// others
const App = (props) => {
    // eslint-disable-next-line
    const [loggedUserId, setLoggedUserId] = useState(
        null
    );

    const[loggedUserName, setLoggedUserName] = useState(null);

    return (
        <>
            <IndexNavbar />

            <Switch>
                <Route path="/index" render={(props) => <Index {...props} />} />

                <Route
                    path="/landing-page"
                    render={(props) => <LandingPage {...props} />}
                />

                <Route
                    path="/login-page"
                    render={(props) => (
                        <LoginPage
                            setLoggedIn={setLoggedUserId}
                            setLoggedUserName={setLoggedUserName}
                            {...props}
                        />
                    )}
                />
                <Route
                    path="/dashboard"
                    render={(props) => (
                        <Dashboard loggedUserName={loggedUserName} {...props} />
                    )}
                />
                <Route
                    path="/register-page"
                    render={(props) => <RegisterPage {...props} />}
                />
                <Route
                    path="/photo-upload"
                    render={(props) => <PhotoUpload {...props} />}
                />
                <Redirect to="/index" />
            </Switch>
        </>
    );
};

export default App;
