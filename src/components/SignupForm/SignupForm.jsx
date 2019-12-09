import React, { Component } from "react";
import { Link } from "react-router-dom";
import userService from "../../utils/userService";
import styles from "./SignupForm.module.css";

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
            this.state.password !== "" &&
            this.state.passwordConfirm !== "" &&
            this.state.password === this.state.passwordConfirm
        );
    }

    render() {
        let submit = this.isFormValid() ?
            <button disabled="true" className="btn btn-danger">Sign Up!</button> :
            <button className="btn btn-success">Sign Up!</button>;

        return (
            <div className={styles.background}>
                <div className="container h-100">
                    <div className="d-flex justify-content-center h-100">
                        <div className={styles.userCard1}>
                            <h2 className={styles.title} style={{color: "white"}}>Sign Up</h2>
                            <div className="d-flex justify-content-center form_container">
                            <form className="form-group mb-0" onSubmit={this.handleSubmit}>
                                <div className="input-group mb-3">
                                    <div className="input-group-append">
                                        <span className="input-group-text">
                                            <i className="fas fa-user"></i>
                                        </span>
                                    </div>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="name"
                                        maxLength="150"
                                        autoFocus
                                        required id="id_username"
                                        placeholder="Username"
                                        onChange={this.handleChange}
                                        value={this.state.name}
                                    />
                                </div>
                                <div className="input-group mb-3">
                                    <div className="input-group-append">
                                        <span className="input-group-text">
                                            <i className="fas fa-envelope-square"></i>
                                        </span>
                                    </div>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="email"
                                        maxLength="150"
                                        autoFocus
                                        placeholder="Email"
                                        onChange={this.handleChange}
                                    />
                                </div>
                                <div className="input-group mb-3">
                                    <div className="input-group-append">
                                        <span className="input-group-text">
                                            <i className="fas fa-key"/>
                                        </span>
                                    </div>
                                    <input
                                        type="password"
                                        className="form-control"
                                        name="password"
                                        maxLength="150"
                                        autoFocus
                                        placeholder="Password"
                                        onChange={this.handleChange}
                                    />
                                </div>
                                <div className="input-group mb-3">
                                    <div className="input-group-append">
                                        <span className="input-group-text">
                                            <i className="fas fa-key"/>
                                        </span>
                                    </div>
                                    <input
                                        type="password"
                                        className="form-control"
                                        name="passwordConfirm"
                                        maxLength="150"
                                        autoFocus
                                        placeholder="Confirm Password"
                                        onChange={this.handleChange}
                                    />
                                </div>
                                    <div className="d-flex justify-content-center mt-3 login_container">
                                        { submit }
                                    </div>
                            </form>
                            </div>
                            <div className="mt-4">
                                <div className="d-flex justify-content-center links">
                                    Already have an account?&nbsp;
                                    <Link to="/login" style={{color: "white"}}> Login</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignupForm;