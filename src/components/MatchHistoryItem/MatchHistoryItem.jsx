import React, { Component } from "react";
import { Card } from "react-bootstrap"
import * as RiotApi from "../../services/riot-api";
import * as ItemData from "../../data/ItemData";
import styles from "./MatchHistoryItem.module.css";
import alchemist from "./trait_icons/alchemist.png";
import asssassin from "./trait_icons/assassin.png";
import avatar from "./trait_icons/avatar.png";
import berserker from "./trait_icons/berserker.png";
import blademaster from "./trait_icons/blademaster.png";
import cloud from "./trait_icons/cloud.png";
import crystal from "./trait_icons/crystal.png";
import desert from "./trait_icons/desert.png";
import druid from "./trait_icons/druid.png";
import electric from "./trait_icons/electric.png";
import glacial from "./trait_icons/glacial.png";
import inferno from "./trait_icons/inferno.png";
import light from "./trait_icons/light.png";
import mage from "./trait_icons/mage.png";
import mountain from "./trait_icons/mountain.png";
import mystic from "./trait_icons/mystic.png";
import ocean from "./trait_icons/ocean.png";
import poison from "./trait_icons/poison.png";
import predator from "./trait_icons/predator.png";
import ranger from "./trait_icons/ranger.png";
import shadow from "./trait_icons/shadow.png";
import steel from "./trait_icons/steel.png";
import summoner from "./trait_icons/summoner.png";
import warden from "./trait_icons/warden.png";
import woodland from "./trait_icons/woodland.png";

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
            case 1/2:
                return "Bronze";
            case 2/3:
                return "Silver";
            case 1:
                return "Gold";
        }
    }

    getTierIcon(tierName) {
        switch(tierName) {
            case "Alchemist":
                return alchemist;
            case "Assassin":
                return asssassin;
            case "Avatar":
                return avatar;
            case "Berserker":
                return berserker;
            case"Blademaster":
                return blademaster;
            case "Cloud":
                return cloud;
            case "Crystal":
                return crystal;
            case "Desert":
                return desert;
            case "Druid":
                return druid;
            case "Electric":
                return electric;
            case "Glacial":
                return glacial;
            case "Inferno":
                return inferno;
            case "Light":
                return light;
            case "Mage":
                return mage;
            case "Mountain":
                return mountain;
            case "Mystic":
                return mystic;
            case "Ocean":
                return ocean;
            case "Poison":
                return poison;
            case "Predator":
                return predator;
            case "Ranger":
                return ranger;
            case "Shadow":
                return shadow;
            case "Steel":
                return steel;
            case "Summoner":
                return summoner;
            case "Warden":
                return warden;
            case "Woodland":
                return woodland
        }
    }

    getTierColor(tierRanking) {
        switch(tierRanking) {
            case "Bronze":
                return "rgb(120, 80, 50)";
            case "Silver":
                return "rgb(199, 199, 199)";
            case "Gold":
                return "gold";
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
                        <div className={styles.tiers}>
                            {classSynergies.map(tier => {
                                if(this.doesTierHavePrefix(tier.tierName))
                                    return <div className={styles.tierContainer}>
                                    <div className={styles.hexagon} style={{ backgroundImage: `url(${this.getTierIcon(this.removePrefixFromTier(tier.tierName))})`, backgroundColor: `${this.getTierColor(this.getTierRanking(tier.tier, tier.tierTotal))}`}}>
                                        <div className={styles.hexTop} style={{ backgroundColor: `${this.getTierColor(this.getTierRanking(tier.tier, tier.tierTotal))}` }}></div>
                                        <div className={styles.hexBottom} style={{ backgroundColor: `${this.getTierColor(this.getTierRanking(tier.tier, tier.tierTotal))}` }}></div>
                                    </div>
                                </div>;
                                return<div className={styles.tierContainer}>
                                        <div className={styles.hexagon} style={{ backgroundImage: `url(${this.getTierIcon(tier.tierName)})`, backgroundColor: `${this.getTierColor(this.getTierRanking(tier.tier, tier.tierTotal))}`}}>
                                            <div className={styles.hexTop} style={{ backgroundColor: `${this.getTierColor(this.getTierRanking(tier.tier, tier.tierTotal))}` }}></div>
                                            <div className={styles.hexBottom} style={{ backgroundColor: `${this.getTierColor(this.getTierRanking(tier.tier, tier.tierTotal))}` }}></div>
                                        </div>
                                    </div>
                            })}
                        </div>
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