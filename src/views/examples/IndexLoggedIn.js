
import React from "react";
// import ReactDOM from "react-dom";

// import classnames from "classnames";

// reactstrap components
import {
	Button
} from "reactstrap";

// core components

import SectionNavbars from "views/index-sections/SectionNavbars.js";


export const IndexLoggedIn = (props) => {
	document.documentElement.classList.remove("nav-open");

	React.useEffect(() => {
		document.body.classList.add("index-loggedin");
		return function cleanup() {
			document.body.classList.remove("index-loggedin");
		};
	});


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
					<Button>Log out</Button>
				</div>
			</div>
		</>
	);
};

export default IndexLoggedIn;
