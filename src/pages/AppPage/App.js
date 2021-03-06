import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import userService from "../../utils/userService"
import * as RiotApi from "../../services/riot-api";
import LoginPage from "../LoginPage/LoginPage";
import SignupPage from "../SignupPage/SignupPage";
import LoadingPage from "../LoadingPage/LoadingPage";
import LandingPage from "../LandingPage/LandingPage";
import MatchHistoryList from "../../components/MatchHistoryList/MatchHistoryList";
import styles from "./App.module.css"


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: userService.getUser(),
            summoner: "",
            matchHistory: [],
            loaded: null
        }
    };

    componentDidMount() {
        this.loadData();
    }

    loadData() {
        let summonerNameOrEmptyString = this.state.user ? this.state.user.name : "";
        this.setState({ summoner: summonerNameOrEmptyString},
            () => { RiotApi.getSummonerTftMatchHistory(this.state.summoner)
                .then(res => this.setState({ matchHistory: res, loaded: true })) });
    }

    handleLogout = () => {
        userService.logout();
        this.setState({
            user: null,
            summoner: "",
            matchHistory: []
        });
    };

    handleSignupOrLogin = () => {
        this.setState({ user: userService.getUser(), summoner: userService.getUser().name },
            () => { RiotApi.getSummonerTftMatchHistory(this.state.summoner)
                .then(res => this.setState({ matchHistory: res })) }
        );
    };

    render() {
        if (!this.state.loaded) {
            return <div className={styles.background}>
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
                    <Route
                        exact
                        path="/"
                        render={({ history }) => (
                            <LandingPage/>
                        )}
                    />
                </Switch>
                <LoadingPage />
            </div>
        }
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
                    <Route
                        exact
                        path="/matches"
                        render={({ history }) => (
                            <MatchHistoryList
                                matchHistory={this.state.matchHistory}
                                summoner={this.state.summoner}
                                user={this.state.user}
                                handleLogout={this.handleLogout}
                            />
                        )}
                    />
                    <Route
                        exact
                        path="/"
                        render={({ history }) => (
                            <LandingPage/>
                        )}
                    />
                </Switch>
            </div>
        )
    }
}

export default App;