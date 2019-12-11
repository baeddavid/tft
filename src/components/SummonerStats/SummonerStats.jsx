import React, { Component } from "react";
import { Jumbotron } from "react-bootstrap";
import * as RiotApi from "../../services/riot-api";

class SummonerStats extends Component {
    state = {
        rank: [
            {
                tier: "",
                rank: "",
                wins: 0,
                losses: 0,
            }
        ]
    };


    componentDidMount() {
        RiotApi.getTftRankFromSummonerName(this.props.summoner)
            .then(res => this.setState({ rank: res }));
    }

    getWinRate() {
        let winRate = ((this.state.rank[0].wins / this.state.rank[0].losses) * 100).toFixed(2);
        return winRate;
    }

    render() {
        let winRate = this.getWinRate();
        return (
            <Jumbotron>
                <h1>{this.props.summoner}</h1>
                <h2>{this.state.rank[0].tier} {this.state.rank[0].rank} { winRate }% || {this.state.rank[0].wins}-{this.state.rank[0].losses}</h2>
            </Jumbotron>
        )
    }
}

export default SummonerStats;