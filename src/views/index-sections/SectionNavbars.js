import React from "react";

// reactstrap components
import {
	UncontrolledCollapse,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
	UncontrolledDropdown,
	FormGroup,
	Form,
	Input,
	NavbarBrand,
	Navbar,
	NavItem,
	NavLink,
	Nav,
	Container
} from "reactstrap";

// core components

function SectionNavBars() {
	const [bodyClick, setBodyClick] = React.useState(false);
	return (
		<>
			{bodyClick ? (
				<div
					id="bodyClick"
					onClick={() => {
						document.documentElement.classList.toggle("nav-open");
						setBodyClick(false);
					}}
				/>
			) : null}
			<Navbar color="primary" expand="lg">
				<Container>
					<NavbarBrand
						href="/index"
						onClick={(e) => e.preventDefault()}>
						Gaia.ai
					</NavbarBrand>
					<button
						className="navbar-toggler"
						id="navbarNavDropdown"
						type="button"
						onClick={() => {
							document.documentElement.classList.toggle(
								"nav-open"
							);
							setBodyClick(true);
						}}>
						<span className="navbar-toggler-icon" />
					</button>
					<UncontrolledCollapse navbar toggler="#navbarNavDropdown">
						<Nav navbar>
							<NavItem className="active">
								<NavLink
									href="/index-loggedin"
									onClick={(e) => e.preventDefault()}>
									Dashboard{" "}
									<span className="sr-only">(current)</span>
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink
									href="/photo-upload"
									onClick={(e) => e.preventDefault()}>
									Photo Upload
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink
									href="/indentify"
									onClick={(e) => e.preventDefault()}>
									IDentify
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink
									href="/maps"
									onClick={(e) => e.preventDefault()}>
									Global Discoveries
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink
									href="/gallery"
									onClick={(e) => e.preventDefault()}>
									Gallery
								</NavLink>
							</NavItem>
							<UncontrolledDropdown nav>
								<DropdownToggle
									aria-haspopup={true}
									caret
									color="default"
									data-toggle="dropdown"
									href="#pablo"
									id="navbarDropdownMenuLink"
									nav
									onClick={(e) => e.preventDefault()}>
									UserName
								</DropdownToggle>
								<DropdownMenu aria-labelledby="navbarDropdownMenuLink">
									<DropdownItem
										href="#pablo"
										onClick={(e) => e.preventDefault()}>
										Account
									</DropdownItem>
									<DropdownItem
										href="#pablo"
										onClick={(e) => e.preventDefault()}>
										Support
									</DropdownItem>
									<DropdownItem
										href="#pablo"
										onClick={(e) => e.preventDefault()}>
										Log Out
									</DropdownItem>
								</DropdownMenu>
							</UncontrolledDropdown>
						</Nav>
					</UncontrolledCollapse>
				</Container>
			</Navbar>
		</>
	);
}

export default SectionNavBars;
