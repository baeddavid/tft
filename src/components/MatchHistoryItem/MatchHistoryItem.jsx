import React, { Component } from "react";
import { Card, ListGroup } from "react-bootstrap"
import * as RiotApi from "../../services/riot-api";
import * as ItemData from "../../data/ItemData";
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

    getUnitClassTiers() {
        let classTiers = [];
        for(let player of this.props.match.participants) {
            if(player.puuid === this.state.puuid) {
                for(let tier of player.traits) {
                    if(tier.tier_current > 0) {
                        classTiers.push({ tierName: tier.name, tier: tier.tier_current, tierTotal: tier.tier_total });
                    }
                }
            }
        }
        return classTiers;
    }

    getTierRanking(currentTier, tierTotal) {
        let tierFraction = currentTier / tierTotal;
        switch(tierFraction) {
            case 1/3:
                return "Bronze";
            case 1/2:
                return "Bronze";
            case 2/3:
                return "Silver";
            case 1:
                return "Gold";
        }
    }

    getCurrentSummoner() {
        for(let player of this.props.match.participants) {
            if(player.puuid === this.state.puuid) {
                return player;
            }
        }
    }

    getSummonerUnits() {
        let units = [];
        for(let player of this.props.match.participants) {
            if(player.puuid === this.state.puuid) {
                for(let unit of player.units) {
                    units.push(unit);
                }
            }
        }
        return units;
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

    //TODO fix time displayed as it displays entire match time not time eliminated
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

    getItemNameFromItemId(itemId) {
        if(itemId === 404) return "Oopsy Woopsy Riot API Made a Fucky Wucky xD";
        return ItemData.ITEMS.find(item => item.id === itemId).name;
    }

    checkIfValidItemId(itemId) {
        if(itemId === 10005) return 404;
        else return itemId;
    }

    removePrefixFromCharacterId(characterId) {
        return characterId.slice(5);
    }

    removePrefixFromTier(tierName) {
        return tierName.slice(5);
    }

    doesTierHavePrefix(tierName) {
        return tierName.includes("Set2_");
    }

    render() {
        console.log(this.getCurrentSummoner());

        let placement = this.summonerPlacement();
        let placementStringObject = this.placementToString(placement);
        let matchDuration = this.getMatchDuration();
        let playerLevel = this.getLittleLegendsLevel();
        let littleLegends = this.getLittleLegends();
        let classSynergies = this.getUnitClassTiers();
        let summonerUnits = this.getSummonerUnits();

        return(
            <>
                <Card className={styles.matchCard}>
                    <Card.Header>{ placementStringObject[placement] }</Card.Header>
                    <Card.Body>
                        <div>{ littleLegends }</div>
                        <div>Level { playerLevel }</div>
                        <ul>
                            {classSynergies.map(tier => {
                                if(this.doesTierHavePrefix(tier.tierName)) return <li>{ this.removePrefixFromTier(tier.tierName) } { this.getTierRanking(tier.tier, tier.tierTotal) }</li>;
                                return <li>{ tier.tierName } { this.getTierRanking(tier.tier, tier.tierTotal) }</li>;
                            })}
                        </ul>
                        <ul>
                            {summonerUnits.map(unit => {
                                return <li>Name: { unit.name || this.removePrefixFromCharacterId(unit.character_id) } { unit.rarity } Star Level: { unit.tier } Items:
                                    { unit.items.map(item => {
                                    return <ul><li>{ this.getItemNameFromItemId(this.checkIfValidItemId(item)) }</li></ul>
                                    }) }
                                </li>
                            })}
                        </ul>
                    </Card.Body>
                    <footer className="blockquote-footer">{ this.props.summoner } { matchDuration }</footer>
                </Card>
            </>
        )
    }
}

export default MatchHistoryItem;