import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import userService from "../../utils/userService"
import * as RiotApi from "../../services/riot-api";
import LoginPage from "../LoginPage/LoginPage";
import SignupPage from "../SignupPage/SignupPage";
import NavBar from "../../components/NavBar/NavBar";
import styles from "./App.module.css"

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: userService.getUser(),
            summoner: "",
            history: []
        }
    };

    componentDidMount() {
        let summonerNameOrEmptyString = this.state.user ? this.state.user.name : "";
        this.setState({ summoner: summonerNameOrEmptyString},
            () => { RiotApi.getSummonerTftMatchHistory(this.state.summoner)
                    .then(res => this.setState({ history: res })) }
        );
    }

    handleLogout = () => {
        userService.logout();
        this.setState({ user: null, summoner: "" });
    };

    handleSignupOrLogin = () => {
        this.setState({ user: userService.getUser(), summoner: userService.getUser().name });
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