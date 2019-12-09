import React, { Component } from "react";
import SignupForm from "../../components/SignupForm/SignupForm";

class SignupPage extends Component {
    constructor(props) {
        super(props);
        this.state = { message: "" }
    }

    updateMessage = msg => {
        this.setState({ message: msg });
    }

    render() {
        if(this.state.message === "Email already taken") alert("Email already taken");

        return (
            <div>
                <SignupForm {...this.props} updateMessage={this.updateMessage} />
                <p>{this.state.message}</p>
            </div>
        );
    }
}

export default SignupPage;