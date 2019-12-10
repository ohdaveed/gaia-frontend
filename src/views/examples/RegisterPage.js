/*!

=========================================================
* Paper Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import { useAuth } from "context/auth.js";

// reactstrap components
import { Button, Card, Form, Input, Container, Row, Col } from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";

function RegisterPage() {
	document.documentElement.classList.remove("nav-open");

	React.useEffect(() => {
		document.body.classList.add("register-page");
		return function cleanup() {
			document.body.classList.remove("register-page");
		};
	});

	const [isLoggedIn, setLoggedIn] = useState(false);
	const [isError, setIsError] = useState(false);
	const [email, setEmail] = useState("");
	const [userName, setUserName] = useState("");
	const [password, setPassword] = useState("");
	const { setAuthTokens } = useAuth();

	function postRegister() {
		axios
			.post("http://localhost:4000/users/register", {
				userName,
				password,
				email
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
		return <Redirect to="/login" />;
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
							<Card className="card-register ml-auto mr-auto">
								<h3 className="title mx-auto">Welcome</h3>
								<div className="social-line text-center"></div>
								<Form className="register-form">
									<label>Username</label>
									<Input
										placeholder="Username"
										type="text"
										value={userName}
										onChange={(e) => {
											setUserName(e.target.value);
										}}
									/>
									<label>Email</label>
									<Input
										placeholder="Email"
										type="text"
										value={email}
										onChange={(e) => {
											setEmail(e.target.value);
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
										onClick={postRegister}
										type="submit"
										className="btn-round"
										color="danger">
										Register
									</Button>
								</Form>
							</Card>
						</Col>
					</Row>
				</Container>
			</div>
		</>
	);
}

export default RegisterPage;
