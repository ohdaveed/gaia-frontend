
import React from "react";
// import ReactDOM from "react-dom";

// import classnames from "classnames";

// reactstrap components
import {
	Button
} from "reactstrap";

// core components

import SectionNavbars from "views/index-sections/SectionNavbars.js";


export const Dashboard = (props) => {
	document.documentElement.classList.remove("nav-open");

	React.useEffect(() => {
		document.body.classList.add("dashboard");
		return function cleanup() {
			document.body.classList.remove("dashboard");
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
					<div>Welcome {props.loggedUserName}</div>
					<Button>Log out</Button>
				</div>
			</div>
		</>
	);
};

export default Dashboard;
