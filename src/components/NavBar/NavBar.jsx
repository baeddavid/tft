import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Dropdown, Nav, Form, FormControl, Button } from "react-bootstrap";
import styles from "./NavBar.module.css";

const NavBar = props => {
    let nav = props.user ? (
        <Dropdown className={styles.dropdown} alignRight>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                <i className="fas fa-user"></i>
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item><Link to="" onClick={props.handleLogout}>Log out</Link></Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>

    ) : (
        <Dropdown className={styles.dropdown} alignRight>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                <i className="fas fa-user"></i>
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item href="/login"><Link to="/login">Log in</Link></Dropdown.Item>
                <Dropdown.Item href="/signup"><Link to="/signup">Sign up</Link></Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );

    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand><Link to="">TFT</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                    { nav }
                </Form>
            </Navbar.Collapse>
        </Navbar>
    )
};

export default NavBar;