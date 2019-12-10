import React, { Component } from "react";
import MatchHistoryItem from "../MatchHistoryItem/MatchHistoryItem";
import NavBar from "../NavBar/NavBar";

class MatchHistoryList extends Component {
    render() {
        const matches = this.props.matchHistory.map((match, key) =>
            <MatchHistoryItem key={key} match={match} summoner={this.props.summoner}/>
        );
        return(
            <div>
                <NavBar
                    user={this.props.user}
                    handleLogout={this.props.handleLogout}
                />
                { matches }
            </div>
        )
    }
}

export default MatchHistoryList;