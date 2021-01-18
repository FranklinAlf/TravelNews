import React from "react";
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import Home from "../pages/Home";
import Countries from "../pages/Countries";
import Islands from "../pages/Islands";
import Cruises from "../pages/Cruises";
import Contact from "../pages/Contact";
import ArticleList from "../article/ArticleList";
import ArticleDetail from "../article/ArticleDetail";
import logo from "../images/logo.png";

function Layout() {
	return (
		<Router>
			<Navbar expand="lg">
				<NavLink to="/" exact>
					<Navbar.Brand href="#home">
						<img
							src={logo}
							width="300"
							height="70"
							className="d-inline-block align-top"
							alt="TravelNews logo"
      					/>
					</Navbar.Brand>
				</NavLink>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ml-auto">
						<NavLink to="/countries" className="nav-link">
							Countries
						</NavLink>
						<NavLink to="/islands" className="nav-link">
							Islands
						</NavLink>
						<NavLink to="/cruises" className="nav-link">
							Cruises
						</NavLink>
						<NavLink to="/contact" className="nav-link">
							Contact
						</NavLink>
						<NavLink to="/article" className="nav-link">
							Search
						</NavLink>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
				<Switch>
					<Route path={["/", "/home"]} exact component={Home} />
					<Route path="/countries" component={Countries} />
					<Route path="/islands" component={Islands} />
					<Route path="/cruises" component={Cruises} />
					<Route path="/contact" component={Contact} />
					<Route path="/article" component={ArticleList} />
					<Route path="/article/:id" component={ArticleDetail} />
				</Switch>
		</Router>
	);
}
export default Layout;
