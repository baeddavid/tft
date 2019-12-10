import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import userService from "../../utils/userService"
import * as RiotApi from "../../services/riot-api";
import LoginPage from "../LoginPage/LoginPage";
import SignupPage from "../SignupPage/SignupPage";
import NavBar from "../../components/NavBar/NavBar";
import styles from "./App.module.css"
const BASE_URL = "http://localhost:3000";

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
        RiotApi.getSummonerNameFromPuuid("5EI2vhRmgFO6GrusQqruKl03sz9QfxhQzhSoRTJVWobA-ObvMDTvr_EkDN_SIk4d_bhRhW5bGpcuMA")
            .then(res => console.log(res))

        RiotApi.getSummonerTftMatchHistory("metalkarp")
            .then(res => console.log(res))
    }

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
                <div>
                    {this.state.history[0]}
                </div>
            </div>
        )
    }
}

export default App;