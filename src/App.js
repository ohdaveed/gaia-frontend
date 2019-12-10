import React, { useState, Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/paper-kit.scss";
import "assets/demo/demo.css";

// pages
import Index from "views/examples/Index.js";
import LandingPage from "views/examples/LandingPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import RegisterPage from "views/examples/RegisterPage.js";
import LoginPage from "views/examples/LoginPage.js";
import IndexLoggedIn from "views/examples/IndexLoggedIn.js";
import PhotoUpload from "views/examples/PhotoUpload.js";
import Gallery from "views/examples/gallery.js";
import { AuthContext } from "context/auth.js";
import PrivateRoute from "views/examples/PrivateRoute";

// others

export const App = (props) => {
    const [authTokens, setAuthTokens] = useState();

    const setTokens = (data) => {
        localStorage.setItem("tokens", JSON.stringify(data));
        setAuthTokens(data);
    };
    return (
        <div>
            <AuthContext.Provider
                value={{ authTokens, setAuthTokens: setTokens }}
            >
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
                        render={(props) => <LoginPage {...props} />}
                    />
                    <PrivateRoute
                        path="/index-loggedin"
                        component={IndexLoggedIn}
                    />
                    <Route
                        path="/register-page"
                        render={(props) => <RegisterPage {...props} />}
                    />
                    <Route
                        path="/gallery"
                        render={(props) => <Gallery {...props} />}
                    />
                    <Route
                        path="/photo-upload"
                        render={(props) => <PhotoUpload {...props} />}
                    />
                    <Redirect to="/index" />
                </Switch>
            </AuthContext.Provider>
        </div>
    );
};
