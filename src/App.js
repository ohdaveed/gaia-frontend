import React, { useState } from "react";
import {
    Route,
    Redirect,
    Switch,
    useHistory,
    useLocation,
    Link
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
import IndexLoggedIn from "views/examples/IndexLoggedIn.js";
import PhotoUpload from "views/examples/PhotoUpload.js";

import IndexNavbar from  "components/Navbars/IndexNavbar.js"
// others
const App = (props) => {
    const [loggedUserId, setLoggedUserId] = useState(null)

    return (<>
                <IndexNavbar />
                
                <Switch>
                    <Route
                        path="/index"
                        render={(props) => <Index {...props} />}
                    />

                    <Route
                        path="/landing-page"
                        render={(props) => <LandingPage {...props} />}
                    />

                    <Route
                        path="/login-page"
                        render={(props) => <LoginPage setLoggedIn={setLoggedUserId} {...props} />}
                    />
                    <Route
                        path="/dashboard"
                        component={dashboard}
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
