import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import userService from "../../utils/userService"
import LoginPage from "../LoginPage/LoginPage";
import SignupPage from "../SignupPage/SignupPage";
import NavBar from "../../components/NavBar/NavBar";
import styles from "./App.module.css"

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: userService.getUser()
        }
    };

    handleLogout = () => {
        userService.logout();
        this.setState({ user: null });
    };

    handleSignupOrLogin = () => {
        this.setState({ user: userService.getUser() });
    };

    render() {
        return(
            <div className={styles.background}>
                <Switch>
                    <Route
                        exact
                        path="/login"
                        render={({ history }) => (
                            <LoginPage
                                history={history}
                                handleSignupOrLogin={this.handleSignupOrLogin}
                                />
                        )}
                        />
                    <Route
                        exact
                        path="/signup"
                        render={({ history }) => (
                            <SignupPage
                                history={history}
                                handleSignupOrLogin={this.handleSignupOrLogin}
                            />
                        )}
                    />
                    <NavBar
                        user={this.state.user}
                        handleLogout={this.handleLogout}
                    />
                </Switch>
            </div>
        )
    }
}

export default App;