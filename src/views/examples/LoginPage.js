import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import { useAuth } from "context/auth.js";

// reactstrap components
import { Button, Card, Form, Input, Container, Row, Col } from "reactstrap";

import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";

function LoginPage() {
	document.documentElement.classList.remove("nav-open");

	React.useEffect(() => {
		document.body.classList.add("login-page");
		return function cleanup() {
			document.body.classList.remove("login-page");
		};
	});

	const [isLoggedIn, setLoggedIn] = useState(false);
	const [isError, setIsError] = useState(false);
	const [userName, setUserName] = useState("");
	const [password, setPassword] = useState("");
	const { setAuthTokens } = useAuth();

	function postLogin() {
		axios
			.post("https://localhost:4000/users/login", {
				userName,
				password
			})
			.then((result) => {
				if (result.status === 200) {
					setAuthTokens(result.data);
					setLoggedIn(true);
				} else {
					setIsError(true);
				}
			})
			.catch((e) => {
				setIsError(true);
			});
	}

	if (isLoggedIn) {
		return <Redirect to="/" />;
	}

	return (
		<>
			<ExamplesNavbar />
			<div
				className="page-header"
				style={{
					backgroundImage:
						"url(" +
						require("assets/img/alex-block-7KoKNcwnC0U-unsplash.jpg") +
						")"
				}}>
				<div className="filter" />
				<Container>
					<Row>
						<Col className="ml-auto mr-auto" lg="4">
							<Card className="card-plain">
								<h3 className="title mx-auto">Welcome</h3>
								<div className="social-line text-center"></div>
								<Form className="register-form">
									<label>Username</label>
									<Input
										placeholder="Username"
										type="username"
										value={userName}
										onChange={(e) => {
											setUserName(e.target.value);
										}}
									/>
									<label>Password</label>
									<Input
										placeholder="Password"
										type="password"
										value={password}
										onChange={(e) => {
											setPassword(e.target.value);
										}}
									/>
									<Button
										block
										onClick={postLogin}
										className="btn-round"
										color="danger">
										Login
									</Button>
								</Form>
								<div className="forgot">
									<Button
										className="btn-link"
										color="danger"
										href="#pablo"
										onClick={(e) => e.preventDefault()}>
										Forgot password?
									</Button>
								</div>
							</Card>
						</Col>
					</Row>
				</Container>
			</div>
		</>
	);
}

export default LoginPage;
