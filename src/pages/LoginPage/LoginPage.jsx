import React, { Component } from "react";
import { Link } from "react-router-dom";
import userService from "../../utils/userService";

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
            <div>
                <header>Log In</header>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <div>
                            <input
                                type="email"
                                placeholder="Email"
                                value={this.state.email}
                                name="email"
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <div>
                        <div>
                            <input
                                type="password"
                                placeholder="Password"
                                value={this.state.password}
                                name="password"
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <div>
                        <div>
                            <button>Log in</button>
                            <Link to="/">Cancel</Link>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default LoginPage;