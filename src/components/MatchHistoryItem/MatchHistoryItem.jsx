import React, { Component } from "react";
import { Card, ListGroup } from "react-bootstrap"
import * as RiotApi from "../../services/riot-api";
import styles from "./MatchHistoryItem.module.css";

class MatchHistoryItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            players: [],
            puuid: ""
        }
    }

    componentDidMount() {
        RiotApi.getPuuidFromSummonerName(this.props.summoner)
            .then(res => this.setState({ puuid: res }))
    }

    summonerPlacement() {
        let placement;
        for(let player of this.props.match.participants) {
            if(player.puuid === this.state.puuid) {
                placement = player.placement;
            }
        }
        return placement
    }

    placementToString(placement) {
        return {
            1: "1st Place",
            2: "2nd Place",
            3: "3rd Place",
            4: "4th Place",
            5: "5th Place",
            6: "6th Place",
            7: "7th Place",
            8: "8th Place"
        }
    }

    getMatchDuration() {
        let unroundedTime = this.props.match.game_length / 60;
        let roundedTime = unroundedTime.toFixed(2);
        roundedTime = roundedTime.toString();
        roundedTime = roundedTime.replace(".", ":");
        return roundedTime;
    }

    getLittleLegendsLevel() {
        let level;
        for(let player of this.props.match.participants) {
            if(player.puuid === this.state.puuid) {
                level = player.level;
            }
        }
        return level;
    }

    getLittleLegends() {
        let companion;
        for(let player of this.props.match.participants) {
            if(player.puuid === this.state.puuid) {
                companion = player.companion.species;
            }
        }
        return companion;
    }

    render() {
        let placement = this.summonerPlacement();
        let placementStringObject = this.placementToString(placement);
        let matchDuration = this.getMatchDuration();
        let playerLevel = this.getLittleLegendsLevel();
        let littleLegends = this.getLittleLegends();

        return(
            <Card className={styles.matchCard}>
                <Card.Header>{ placementStringObject[placement] }</Card.Header>
                <Card.Body>
                    <div>{ littleLegends }</div>
                    <div>Level { playerLevel }</div>
                </Card.Body>
                <footer className="blockquote-footer">{ this.props.summoner } { matchDuration }</footer>
            </Card>
        )
    }
}

export default MatchHistoryItem;