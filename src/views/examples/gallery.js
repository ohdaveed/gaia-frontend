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
import { Image, CloudinaryContext, Transformation } from "cloudinary-react";
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

// core components
import IndexHeader from "components/Headers/IndexHeader.js";
import SectionNavbars from "views/index-sections/SectionNavbars.js";

const Gallery = () => {
	document.documentElement.classList.remove("nav-open");

	React.useEffect(() => {
		document.body.classList.add("gallery");
		return function cleanup() {
			document.body.classList.remove("gallery");
		};
	});

	return (
		<>
			<SectionNavbars />
			<div className="section text-center">
				<div>This is the plant gallery page</div>
				<div>
					<CloudinaryContext cloudName="darrizon">
						<Image publicId="gaia/">
							<Transformation
								width="200"
								crop="scale"
								angle="10"
							/>
						</Image>
					</CloudinaryContext>
				</div>
			</div>
		</>
	);
};

export default Gallery;
