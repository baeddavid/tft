import React, { Component } from "react";
import { Link } from "react-router-dom";
import userService from "../../utils/userService";

class SignupForm extends Component {
    state = {
        name: "",
        email: "",
        password: "",
        passwordConfirm: ""
    };

    handleChange = e => {
        this.props.updateMessage("");
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = async e => {
        e.preventDefault();
        try {
            await userService.signup(this.state);
            this.props.handleSignupOrLogin();
            this.props.history.push("/");
        } catch(e) {
            this.props.updateMessage(e.message);
        }
    };

    isFormValid() {
        return !(
            this.state.name &&
            this.state.email &&
            this.state.password === this.state.passwordConfirm
        );
    }

    render() {
        return (
            <div>
                <header>Sign Up</header>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <div>
                            <input
                                type="text"
                                placeholder="Name"
                                value={this.state.name}
                                name="name"
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
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
                            <input
                                type="password"
                                placeholder="Confirm Password"
                                value={this.state.passwordConfirm}
                                name="passwordConfirm"
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <div>
                        <div>
                            <button disabled={this.isFormValid()}>Sign Up</button>
                            <Link to="/">Cancel</Link>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignupForm;