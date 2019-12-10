import React, { Component } from "react";
import { Card, ListGroup } from "react-bootstrap"
import * as RiotApi from "../../services/riot-api";

class MatchHistoryItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            players: [],
            puuid: ""
        }
    }

    componentDidMount() {
        RiotApi.getPuuidFromSummonerName("metalkarp")
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

    render() {
        let placement = this.summonerPlacement();
        let placementStringObject = this.placementToString(placement);
        let matchDuration = this.getMatchDuration();

        return(
            <Card style={{ width: "35rem"}}>
                <Card.Header>{ placementStringObject[placement] }</Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item>{ this.props.summoner }</ListGroup.Item>
                    <ListGroup.Item>{ matchDuration }</ListGroup.Item>
                </ListGroup>
            </Card>
        )
    }
}

export default MatchHistoryItem;