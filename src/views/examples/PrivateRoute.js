import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import { useAuth } from "../../context/auth.js";

function PrivateRoute({ component: Component, ...rest }) {
	const { authTokens } = useAuth();

	return (
		<Route
			{...rest}
			render={(props) =>
				authTokens ? (
					<Component {...props} />
				) : (
					<Redirect
						to={{
							pathname: "/login-page",
							state: { referer: props.location }
						}}
					/>
				)
			}
		/>
	);
}

export default PrivateRoute;
