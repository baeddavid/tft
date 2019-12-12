import React, { Component, useState } from "react";
import { Jumbotron, Button, Collapse } from "react-bootstrap";
import * as RiotApi from "../../services/riot-api";
import styles from "./SummonerStats.module.scss";

class SummonerStats extends Component {
    state = {
        rank: [
            {
                tier: "",
                rank: "",
                wins: 0,
                losses: 0,
            }
        ],
        open: false
    };


    componentDidMount() {
        RiotApi.getTftRankFromSummonerName(this.props.summoner)
            .then(res => this.setState({ rank: res }));
    }

    getWinRate() {
        if(this.state.rank.length !== 0) {
            let winRate = ((this.state.rank[0].wins / this.state.rank[0].losses) * 100).toFixed(2);
            return winRate;
        }
        return null;
    }

    render() {
        let winRate = this.getWinRate();
        let isRanked = winRate === null ? <h2>User is not ranked in TFT</h2> :
            <h2>{this.state.rank[0].tier} {this.state.rank[0].rank} { winRate }% ||
                 {this.state.rank[0].wins}-{this.state.rank[0].losses}</h2>;
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
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                        terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                        labore wes anderson cred nesciunt sapiente ea proident.
                    </div>
                </Collapse>
            </Jumbotron>
        )
    }
}

export default SummonerStats;