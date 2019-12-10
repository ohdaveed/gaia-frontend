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
/*eslint-disable*/
import React from "react";

import "assets/css/bootstrap.min.css";

// reactstrap components
import { Container, Button } from "reactstrap";

// core components

function IndexHeader() {
	return (
		<>
			<div
				className="page-header section-dark"
				style={{
					backgroundImage:
						"url(" +
						require("assets/img/alex-block-7KoKNcwnC0U-unsplash.jpg") +
						")"
				}}>
				<div className="filter" />
				<div className="content-center">
					<Container>
						<div className="title-brand">
							<h1 className="presentation-title">
								<i
									className="fa fa-leaf"
									aria-hidden="true"></i>
								GAIA.ai
							</h1>
						</div>
						<h2 className="presentation-subtitle text-center">
							Take pictures. Identify over 10,000 species of
							plants. Map out your adventures.
							<br />
							<br />
							<Button
								className="btn-round"
								color="danger"
								href="/register-page"
								target="_blank">
								<i
									className="fa fa-leaf"
									aria-hidden="true"></i>
								Sign Up
							</Button>
						</h2>
					</Container>
				</div>
			</div>
		</>
	);
}

export default IndexHeader;
