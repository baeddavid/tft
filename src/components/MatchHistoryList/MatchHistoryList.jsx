import React, { Component } from "react";
import MatchHistoryItem from "../MatchHistoryItem/MatchHistoryItem";
import NavBar from "../NavBar/NavBar";
import SummonerStats from "../SummonerStats/SummonerStats";
import LoadingPage from "../../pages/LoadingPage/LoadingPage";
import * as RiotApi from "../../services/riot-api";

class MatchHistoryList extends Component {
    state = {
        rank: [
            {
                tier: "",
                rank: "",
                wins: 0,
                losses: 0,
            }
        ],
        puuid: "",
        loaded: null
    };

    componentDidMount() {
        this.loadData();
    }

    loadData() {
        RiotApi.getTftRankFromSummonerName(this.props.summoner)
            .then(res => this.setState({ rank: res }, () =>
                RiotApi.getPuuidFromSummonerName(this.props.summoner)
                    .then(res => this.setState({ puuid: res, loaded: true }))
            ));
    }

    render() {
        if(!this.state.loaded) return <LoadingPage />;

        const matches = this.props.matchHistory.map((match, key) =>
            <MatchHistoryItem key={key} match={match} summoner={this.props.summoner}/>
        );
        console.log(this.props.matchHistory)
        return(
            <div>
                <NavBar
                    user={this.props.user}
                    handleLogout={this.props.handleLogout}
                />
                <SummonerStats
                    summoner={this.props.user.name}
                    matches={this.props.matchHistory}
                    puuid={this.state.puuid}
                    rank={this.state.rank}
                />
                { matches }
            </div>
        )
    }
}

export default MatchHistoryList;