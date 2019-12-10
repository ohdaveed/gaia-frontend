import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

// reactstrap components
import { Button, Card, Form, Input, Container, Row, Col } from "reactstrap";

const LoginPage = () => {
    document.documentElement.classList.remove("nav-open");

    React.useEffect(() => {
        document.body.classList.add("login-page");
        return function cleanup() {
            document.body.classList.remove("login-page");
        };
    });

    const formik = useFormik({
        initialValues: {
            username: "",
            password: ""
        },
        onSubmit: async (values) => {
            console.log(JSON.stringify(values, null, 2));

            const url = process.env.REACT_APP_API_URL + "/users/login";
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
    });

    return (
        <>
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
                            <Card className="card-plain">
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
                                    <label htmlFor="password">Password</label>
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
                                        Login
                                    </Button>
                                </Form>
                                <div className="forgot">
                                    <Button
                                        className="btn-link"
                                        color="danger"
                                        href="#pablo"
                                        onClick={(e) => e.preventDefault()}
                                    >
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
};
export default LoginPage;
