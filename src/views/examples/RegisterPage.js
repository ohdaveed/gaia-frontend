
import React from "react";
// eslint-disable-next-line
import { Redirect } from "react-router-dom";
import { useFormik } from "formik";

// reactstrap components
import { Button, Card, Form, Input, Container, Row, Col } from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";

const RegisterPage = () => {
	document.documentElement.classList.remove("nav-open");

	React.useEffect(() => {
		document.body.classList.add("register-page");
		return function cleanup() {
			document.body.classList.remove("register-page");
		};
	});

	const formik = useFormik({
        initialValues: {
			username: "",
			email:"",
            password: ""
		},
		
        onSubmit: async (values) => {
            console.log(JSON.stringify(values, null, 2));

            const url = process.env.REACT_APP_API_URL + "/users/register";
            console.log(url);
            const response = await fetch(url, {
                method: "POST",
                credentials: "include",
                body: JSON.stringify(values),
                headers: {
                    "Content-Type": "application/json"
                }
			});
			const parsedLoginResponse = await response.json();
			console.log(parsedLoginResponse);
		}
	})
	
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
                }}
            >
                <div className="filter" />
                <Container>
                    <Row>
                        <Col className="ml-auto mr-auto" lg="4">
                            <Card className="card-register ml-auto mr-auto">
                                <h3 className="title mx-auto">Welcome</h3>
                                <div className="social-line text-center"></div>
                                <Form
                                    className="register-form"
                                    onSubmit={formik.handleSubmit}
                                >
                                    <label htmlFor="username">Username</label>
                                    <Input
                                        id="username"
                                        name="username"
                                        placeholder="Username"
                                        type="text"
                                        value={formik.values.username}
                                        onChange={formik.handleChange}
                                    />
                                    <label htmlFor="email">Email</label>
                                    <Input
                                        id="email"
                                        name="email"
                                        placeholder="Email"
                                        type="text"
                                        value={formik.values.email}
                                        onChange={formik.handleChange}
                                    />
                                    <label>Password</label>
                                    <Input
                                        id="password"
                                        name="password"
                                        onChange={formik.handleChange}
                                        placeholder="Password"
                                        type="password"
                                        value={formik.values.password}
                                    />
                                    <Button
                                        type="submit"
                                        className="btn-round"
                                        color="danger"
                                        
                                    >
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
