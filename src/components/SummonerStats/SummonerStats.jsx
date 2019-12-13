import React, { Component, useState } from "react";
import { Jumbotron, Button, Collapse } from "react-bootstrap";
import * as RiotApi from "../../services/riot-api";
import styles from "./SummonerStats.module.scss";

class SummonerStats extends Component {
    state = {
        open: false
    }

    getWinRate() {
        if(this.props.rank.length !== 0) {
            let winRate = ((this.props.rank[0].wins / this.props.rank[0].losses) * 100).toFixed(2);
            return winRate;
        }
        return null;
    }

    getAveragePlacement() {
        let playerPlacements = [];
        for(let match of this.props.matches) {
            for(let player of match.participants) {
                if(player.puuid === this.props.puuid) {
                    playerPlacements.push(player.placement);
                }
            }
        }
        let totalSumPlacement = playerPlacements.reduce((accumulator, currentValue) => accumulator + currentValue);
        return (totalSumPlacement / playerPlacements.length).toFixed(2);
    }

    getLast20WinRate() {
        let playerPlacements = [];
        for(let match of this.props.matches) {
            for(let player of match.participants) {
                if(player.puuid === this.props.puuid) {
                    playerPlacements.push(player.placement);
                }
            }
        }

        let numberOfWins = 0;
        for(let placement of playerPlacements) {
            if (placement === 1) numberOfWins++;
        }
        return (numberOfWins / 20).toFixed(2);
    }

    render() {
        let averagePlacement = this.getAveragePlacement();
        let last20GamesWinRate = this.getLast20WinRate();
        let winRate = this.getWinRate();
        let isRanked = winRate === null ? <h2>User is not ranked in TFT</h2> :
            <h2>{this.props.rank[0].tier} {this.props.rank[0].rank} { winRate }% ||
                 {this.props.rank[0].wins}-{this.props.rank[0].losses}</h2>;

        return (
            <Jumbotron>
                <div className={styles.header}>
                    <h1>{this.props.summoner}</h1>
                </div>
                <div className={styles.header}>
                    { isRanked }
                </div>
                <div
                    className={styles.button}
                     onClick={() => this.setState({ open: !this.state.open })}
                    aria-controls="example-collapse-text"
                    aria-expanded={this.state.open}
                >
                    <span>Summoner Stats</span>
                    <svg>
                        <polyline className={styles.o1} points="0 0, 200 0, 200 55, 0 55, 0 0"></polyline>
                        <polyline className={styles.o2} points="0 0, 200 0, 200 55, 0 55, 0 0"></polyline>
                    </svg>
                </div>
                <Collapse in={this.state.open}>
                    <div id="example-collapse-text">
                        <div>Last 20 Games Win Rate: {last20GamesWinRate}</div>
                        <div>Average Placement over Last 20 Games: {averagePlacement}</div>
                    </div>
                </Collapse>
            </Jumbotron>
        )
    }
}

export default SummonerStats;