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

import ReactDOM from "react-dom";

import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import classnames from "classnames";

// reactstrap components
import {
	Button,
	Card,
	CardTitle,
	Row,
	Col,
	TabContent,
	TabPane,
	Nav,
	NavItem,
	NavLink,
	CardText
} from "reactstrap";

import { useAuth } from "../../context/auth.js";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import SectionNavbars from "views/index-sections/SectionNavbars.js";

import { FilePond } from "react-filepond";
import "filepond/dist/filepond.min.css";

export const IndexLoggedIn = (props) => {
	document.documentElement.classList.remove("nav-open");

	React.useEffect(() => {
		document.body.classList.add("index-loggedin");
		return function cleanup() {
			document.body.classList.remove("index-loggedin");
		};
	});

	const { setAuthTokens } = useAuth();

	function logOut() {
		setAuthTokens();
	}

	return (
		<>
			<SectionNavbars />

			<div
				className="main"
				style={{
					backgroundImage:
						"url(" +
						require("assets/img/alex-block-7KoKNcwnC0U-unsplash.jpg") +
						")"
				}}>
				<div className="section text-center">
					<div>Logged in index</div>
					<Button onClick={logOut}>Log out</Button>
				</div>
			</div>
		</>
	);
};

export default IndexLoggedIn;
