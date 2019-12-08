import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
    Card,
    Button,
} from "react-bootstrap";
import userService from "../../utils/userService";
import NavBar from "../../components/NavBar/NavBar";
import styles from "./LoginPage.module.css"

class LoginPage extends  Component {
    state = {
        email: "",
        password: ""
    };

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = async e => {
        e.preventDefault();
        try {
            await userService.login(this.state);
            this.props.handleSignupOrLogin();
            this.props.history.push("/");
        } catch (err) {
            alert("INVALID CREDENTIALS");
        }
    };

    render() {
        return (
            <div className={styles.background}>
                <NavBar/>
                    <div className="container h-100" id={styles.center}>
                        <div className="d-flex justify-content-center h-100">
                                <div className={styles.userCard}>
                                    <div>
                                        <div className="d-flex justify-content-center">
                                            <h2 className={styles.title} style={{color: "white"}}>TFT</h2>
                                        </div>
                                        <form onSubmit={this.handleSubmit}>
                                            <div className="input-group mb-3">
                                                <div className="input-group-append">
                                                    <span className="input-group-text">
                                                        <i className="fas fa-user"></i>
                                                    </span>
                                                </div>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="email"
                                                    id="inputEmail"
                                                    placeholder="Email"
                                                    onChange={this.handleChange}
                                                    required
                                                />
                                            </div>
                                            <div className="input-group mb-2">
                                                <div className="input-group-append">
                                                    <span className="input-group-text">
                                                        <i className="fas fa-key"></i>
                                                    </span>
                                                </div>
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    name="password"
                                                    id="inputPass"
                                                    value={this.state.password}
                                                    placeholder="Password"
                                                    onChange={this.handleChange}
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <div className="d-flex justify-content-center mt-3 login_container">
                                                    <button className="btn btn-success" id={styles.button}>Log in</button> <br/>
                                                </div>
                                            </div>
                                        </form>
                                        <div className="mt-4">
                                            <div className="d-flex justify-content-center links">
                                                Don't have an account?
                                                <Link to="/signup"><div className="ml-2" style={{color: "white"}}>Sign Up</div></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
        );
    }
}

export default LoginPage;