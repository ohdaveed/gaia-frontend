
import React from "react";

import {
	Button,
	Form,
	Input,
	InputGroupAddon,
	InputGroupText,
	InputGroup,
	Container,
	Row,
	Col
} from "reactstrap";

// reactstrap components

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";

// index sections
import SectionButtons from "views/index-sections/SectionButtons.js";
import SectionNavbars from "views/index-sections/SectionNavbars.js";
import SectionNavigation from "views/index-sections/SectionNavigation.js";
import SectionProgress from "views/index-sections/SectionProgress.js";
import SectionNotifications from "views/index-sections/SectionNotifications.js";
import SectionTypography from "views/index-sections/SectionTypography.js";
import SectionJavaScript from "views/index-sections/SectionJavaScript.js";
import SectionCarousel from "views/index-sections/SectionCarousel.js";
import SectionNucleoIcons from "views/index-sections/SectionNucleoIcons.js";
import SectionDark from "views/index-sections/SectionDark.js";
import SectionLogin from "views/index-sections/SectionLogin.js";
import SectionExamples from "views/index-sections/SectionExamples.js";
import SectionDownload from "views/index-sections/SectionDownload.js";

export const Index = () => {
	document.documentElement.classList.remove("nav-open");

	React.useEffect(() => {
		document.body.classList.add("Index");
		return function cleanup() {
			document.body.classList.remove("Index");
		};
	})
	
	return (
		<>
			<IndexNavbar />
			<IndexHeader />
			<div className="main">
				<div className="section text-center">
					<SectionDark />
					<Container>
						<Row>
							<Col className="ml-auto mr-auto" md="8">
								<h2 className="title">Let's talk product</h2>
								<h5 className="description">
									This is the paragraph where you can write
									more details about your product. Keep you
									user engaged by providing meaningful
									information. Remember that by this time, the
									user is curious, otherwise he wouldn't
									scroll to get here. Add a button if you want
									the user to see more.
								</h5>
								<br />
								<Button
									className="btn-round"
									color="info"
									href="#pablo"
									onClick={(e) => e.preventDefault()}>
									See Details
								</Button>
							</Col>
						</Row>
						<Row>
							<Col className="ml-auto mr-auto" md="8">
								<h2 className="text-center">Keep in touch?</h2>
								<Form className="contact-form">
									<Row>
										<Col md="6">
											<label>Name</label>
											<InputGroup>
												<InputGroupAddon addonType="prepend">
													<InputGroupText>
														<i className="nc-icon nc-single-02" />
													</InputGroupText>
												</InputGroupAddon>
												<Input
													placeholder="Name"
													type="text"
												/>
											</InputGroup>
										</Col>
										<Col md="6">
											<label>Email</label>
											<InputGroup>
												<InputGroupAddon addonType="prepend">
													<InputGroupText>
														<i className="nc-icon nc-email-85" />
													</InputGroupText>
												</InputGroupAddon>
												<Input
													placeholder="Email"
													type="text"
												/>
											</InputGroup>
										</Col>
									</Row>
									<label>Message</label>
									<Input
										placeholder="Tell us your thoughts and feelings..."
										type="textarea"
										rows="4"
									/>
									<Row>
										<Col className="ml-auto mr-auto" md="4">
											<Button
												className="btn-fill"
												color="danger"
												size="lg">
												Send Message
											</Button>
										</Col>
									</Row>
								</Form>
							</Col>
						</Row>
					</Container>
				</div>
			</div>
		</>
	);
}